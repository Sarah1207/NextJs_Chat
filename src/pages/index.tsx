import { GetStaticProps } from "next"
import Head from 'next/head';
import Link from "next/link";
import UserCard from "../components/UserCard/UserCard";

export const getStaticProps: GetStaticProps = async () => {
  const response: Response = await fetch('http://localhost:3005/users')
  const data = await response.json()
  return {
    props: {
      users: data
    }
  }
}

const HomePage = ({ users }) => {
  const element = users.map(user => {
    return (
      <div key={user.id}>
        <UserCard
          userId={user.id}
          nickname={user.nickname}
          token={user.token} />
      </div>
    )
  })

  return (
    <>
      <Head>
        <title>Home Page </title>
        <meta name='description' content='Home Page' />
      </Head>

      <div className="mainContainer" data-testid='homePage'>
        <main>
          <h1> Welcome </h1>
          <h2> There are {users.length} users</h2>
          <div>{element}</div>
        </main>
      </div>
    </>
  )
}

export default HomePage
