import React from 'react'
import Link from 'next/link'

function SamplePage() {
  return (
    <div>
      <h1>Sample page CS</h1>
      <p><Link href='/'><a>index</a></Link></p>
      <p><Link href='/cs/'><a>cs index</a></Link></p>
      <p><Link href='/cs/sample'><a>cs sample</a></Link></p>
      <p><Link href='/en/'><a>en index</a></Link></p>
    </div>
  )
}

export default SamplePage
