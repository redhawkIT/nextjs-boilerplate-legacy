import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import { api } from '../util'

export default class extends React.Component {
  static async getInitialProps ({ req, query }) {
    const res = await fetch(`${api(req)}/example`)
    const json = await res.json()
    return { ...json }
  }
  static propTypes = {
    example: PropTypes.bool
  }
  static defaultProps = {
    example: false
  }

  render () {
    return (
      <div>
        <h1>Example: {this.props.example}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <pre><code>{JSON.stringify(this.props)}</code></pre>
      </div>
    )
  }
}
