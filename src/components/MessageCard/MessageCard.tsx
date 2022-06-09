import { Message } from "../../types/message"

const MessageCard = ({ messageId, authorId, body, timestamp }: Message) => {
  const date = new Date(timestamp * 1000).toDateString()
  return (
    <div className='card cardMessages'>
      <p><b>Message id:</b> {messageId}</p>
      <div className='messages'>
        <div className='sender'>
          <span><b>Send by: user n°{authorId}</b></span>
          <span><b>Date: {date}</b> </span>
          <br />
          <span>{body}</span>
        </div>
      </div>
    </div>
  )
}

export default MessageCard
