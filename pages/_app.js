import App, { Container } from 'next/app'

import { NavigationDrawer } from 'react-md'
import { NavItem } from '../components'

import '../styles/index.scss'
export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }
  navItems = [
    <NavItem key='example' href='/example' as='/example' primaryText='Example' />,
    <NavItem key='a' href='/a' as='/a' primaryText='A' />,
    <NavItem key='b' href='/b' as='/b' primaryText='B' />,
    <NavItem key='/posts' href={{ pathname: '/posts', query: { id: '2' } }} as='/posts/2' primaryText='Page 2' />
  ]
  render () {
    const { Component, pageProps } = this.props
    return <Container>
      <NavigationDrawer
        contentId='app'
        toolbarTitle='Fullstack Boilerplate'
        drawerTitle='Navigation'
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.FLOATING}
        desktopDrawerType={NavigationDrawer.DrawerTypes.FLOATING}
        navItems={this.navItems}
      >
        <Component {...pageProps} />
      </NavigationDrawer>
    </Container>
  }
}
