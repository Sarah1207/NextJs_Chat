import Link from "next/link"
import Image from "next/image"
import { User } from "../../types/user"

const UserCard = ({ userId, nickname, token }: User) => {
  return (
    <div className='card'>
      <div className='flexCard'>
        <div className='avatar'>
          <Image src='/avatar.jpg' alt={nickname} height={60} width={60} />
        </div>
        <h3 className='userName'>{nickname}</h3>
      </div>
      <Link href={`/user/${userId.toString()}`}>
        <a className='links'>
          More information about {nickname}
        </a>
      </Link>
    </div>
  )
}

export default UserCard