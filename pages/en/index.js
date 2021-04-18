import React from 'react'
import Link from 'next/link'

function IndexPage() {
  return (
    <div>
      <h1>Petr Messner</h1>
      <p><Link href='/cs/'><a>česky</a></Link></p>
    </div>
  )
}

export default IndexPage
