import Link from "next/link"

const Navigation = () => {
  return (
    <div data-testid='link'>
      <nav className='navigation'>
        <Link href='/'>
          <a>
            Home
          </a>
        </Link>
      </nav>
    </div >
  )
}

export default Navigation
