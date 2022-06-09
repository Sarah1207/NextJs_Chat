import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"
import Image from "next/image"

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [router])

  return (
    <div className='notFound' data-testid='notFound' >
      <h1 role='heading'>Ooops</h1>
      <p> This page doesn&lsquo;t exist</p>
      <Link href='/'>
        <p> You&lsquo;re going to be automatically redirected to the Home Page in 5 seconds</p>
      </Link>
      <Image src='/oups.jpg' alt='Error' width={500} height={500} />
    </div >
  )
}

export default NotFound
