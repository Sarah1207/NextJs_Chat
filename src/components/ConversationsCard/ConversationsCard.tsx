import Link from "next/link"
import { Conversation } from "../../types/conversation"

const ConversationsCard = ({ conversationId, senderNickname, senderId, recipientNickname, recipientId }: Conversation) => {
  return (
    <div className='card'>
      <p><b>Conversation n°{conversationId}</b></p>
      <p><b>Send by: </b>{senderNickname} </p>
      <p><b>To: </b>{recipientNickname}</p>
      <Link href={`/messages/${conversationId.toString()}`}>
        <a className='links'>See messages from conversation n°{`${conversationId}`} </a>
      </Link>
    </div >
  )
}

export default ConversationsCard
