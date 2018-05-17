import Link from 'next/link'

import '../styles/index.scss'
export default () => (
  <ul>
    <li><Link href='/b' as='/b'><a>a</a></Link></li>
    <li><Link href='/a' as='/a'><a>b</a></Link></li>
    <li>
      <Link
        href={{ pathname: '/posts', query: { id: '2' } }}
        as='/posts/2'
      >
        <a>post #2</a>
      </Link>
    </li>
  </ul>
)
