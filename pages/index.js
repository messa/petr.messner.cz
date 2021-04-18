import React from 'react'
import Link from 'next/link'

function IndexPage() {
  return (
    <div>
      <p style={{ textAlign: 'center', fontSize: '200%', padding: '40px' }}>
        <Link href='/cs/'><a>česky</a></Link>
        {' · '}
        <Link href='/en/'><a>english</a></Link>
      </p>
    </div>
  )
}

export default IndexPage
