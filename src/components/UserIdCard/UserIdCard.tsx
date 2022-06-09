import Link from "next/link"
import { User } from "../../types/user"

const UserIdCard = ({ nickname, userId, token }: User) => {
  return (
    <div className='card'>
      <p><b>Pseudo: </b>{nickname}</p>
      <p><b>Id: </b>{userId}</p>
      <p><b>Token: </b>{token}</p>
      <Link href={`/conversations/${userId.toString()}`}>
        <a className='links'>See all {nickname}&lsquo;s conversations</a>
      </Link>
    </div>
  )
}

export default UserIdCard