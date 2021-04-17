import React from 'react'
import Link from 'next/link'

function IndexPage() {
  return (
    <div>
      <h1>Index page</h1>
      <p><Link href='/cs/'><a>cs index</a></Link></p>
      <p><Link href='/cs/sample'><a>cs sample</a></Link></p>
      <p><Link href='/en/'><a>en index</a></Link></p>
    </div>
  )
}

export default IndexPage
