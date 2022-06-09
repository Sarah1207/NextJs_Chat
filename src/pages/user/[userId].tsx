import { GetStaticPaths, GetStaticProps } from "next"
import UserIdCard from "../../components/UserIdCard/UserIdCard"

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('http://localhost:3005/users')
  const data = await response.json()
  const paths = data.map((user) => {
    return {
      params: {
        userId: user.id.toString()
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const userId = context.params.userId
  const response = await fetch(`http://localhost:3005/users/${userId}`)
  const data = await response.json()
  return {
    props: {
      user: data
    }
  }
}

const UserIdPage = ({ user }) => {
  return (
    <div className="mainContainer" data-testid='oneUser'>
      <main>
        <h1> Detailed information about {user.nickname}</h1>
        <UserIdCard userId={user.id} nickname={user.nickname} token={user.token} />
      </main>
    </div>
  )
}

export default UserIdPage
