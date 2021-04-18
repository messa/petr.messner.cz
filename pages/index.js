import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

function IndexPage() {
  const router = useRouter()
  const [ showMenu, setShowMenu ] = useState(false)
  useEffect(() => {
    if (/^cs/.test(navigator.language)) {
      router.push('/cs/')
    } else {
      router.push('/en/')
    }
  })
  return (
    <div>
      {showMenu && (
        <p style={{ textAlign: 'center', fontSize: '200%', padding: '40px' }}>
          <Link href='/cs/'><a>česky</a></Link>
          {' · '}
          <Link href='/en/'><a>english</a></Link>
        </p>
      )}
    </div>
  )
}

export default IndexPage
