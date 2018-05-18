import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

export default class extends React.Component {
  static async getInitialProps ({ req, query }) {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }
  render () {
    console.log('PROPS', this.props)
    return (
      <div className='item'>
        <div><Link href='/'><a>Back Home</a></Link></div>
      </div>
    )
  }
}
