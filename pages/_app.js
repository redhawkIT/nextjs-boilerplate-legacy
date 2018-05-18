import App, { Container } from 'next/app'
import Link from 'next/link'

import { NavigationDrawer, ListItem } from 'react-md'
import { toolbarTitle } from '../constants'

const NavItem = (props) => (
  <Link key={props.as} href={props.href} as={props.as}>
    <ListItem
      primaryText={props.primaryText}
      secondaryText={props.secondaryText}
      leftAvatar={props.leftAvatar}
      rightIcon={props.rightIcon}
      threeLines={props.threeLines}
    />
  </Link>
)
const navItems = [
  <NavItem href='/b' as='/b' primaryText='B' />,
  <NavItem href='/a' as='/a' primaryText='A' />,
  <NavItem href={{ pathname: '/posts', query: { id: '2' } }} as='/posts/2' primaryText='Page 2' />,
  <NavItem href='/b' as='/b' primaryText='B' />,
  <NavItem href='/b' as='/b' primaryText='B' />
]

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return <Container>
      <NavigationDrawer
        contentId="app"
        navItems={navItems}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.FLOATING}
        desktopDrawerType={NavigationDrawer.DrawerTypes.FLOATING}
        toolbarTitle={toolbarTitle}
      >
        <Component {...pageProps} />
      </NavigationDrawer>
    </Container>
  }
}
