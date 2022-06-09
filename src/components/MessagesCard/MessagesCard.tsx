import Link from "next/link"
import { Message } from "../../types/message"

const MessagesCard = ({ messageId, conversationId, authorId, timestamp, body }: Message) => {
  const date = new Date(timestamp * 1000).toDateString()
  return (
    <div className='card cardMessages'>
      <p><b>Conversation n°{conversationId} </b></p>
      <p><b>Message id: {messageId} </b></p>
      <div className='messages'>
        <div className='sender'>
          <span><b>Send by: user n°{authorId}</b></span>
          <span><b>Date: {date}</b> </span>
          <br />
          <span>{body}</span>
          <Link href={`/message/${messageId}`}>
            <a className='linksMessage links'>See details</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MessagesCard
