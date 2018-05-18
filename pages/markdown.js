import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

export default class extends React.Component {
  static async getInitialProps ({ req, query }) {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }
  // static async getInitialProps ({ req, query }) {
  //   const isServer = !!req
  //
  //   console.log('getInitialProps called:', isServer ? 'server' : 'client')
  //
  //   if (isServer) {
  //     // When being rendered server-side, we have access to our data in query that we put there in routes/item.js,
  //     // saving us an http call. Note that if we were to try to require('../operations/get-item') here,
  //     // it would result in a webpack error.
  //     console.log('QUERY:', query)
  //     return { markdown: query }
  //     // return { item: query.itemData }
  //   } else {
  //     // On the client, we should fetch the data remotely
  //     const res = await fetch('/_content/markdown', { headers: {'Accept': 'application/json' } })
  //     const json = await res.json()
  //     return { markdown: json }
  //   }
  // }
  // static async getInitialProps ({ req, query }) {
  //   const isServer = !!req
  //
  //   console.log('getInitialProps called:', isServer ? 'server' : 'client')
  //
  //   if (isServer) {
  //     // When being rendered server-side, we have access to our data in query that we put there in routes/item.js,
  //     // saving us an http call. Note that if we were to try to require('../operations/get-item') here,
  //     // it would result in a webpack error.
  //     console.log('QUERY:', query)
  //     return { item: query.itemData }
  //   } else {
  //     // On the client, we should fetch the data remotely
  //     const res = await fetch('/_data/markdown', { headers: {'Accept': 'application/json' } })
  //     const json = await res.json()
  //     return { markdown: json }
  //   }
  // }

  render () {
    console.log('PROPS', this.props)
    return (
      <div className='item'>
        <div><Link href='/'><a>Back Home</a></Link></div>
        {/* <h1>{this.props.item.title}</h1>
        <h2>{this.props.item.subtitle} - {this.props.item.seller}</h2> */}
      </div>
    )
  }
}
