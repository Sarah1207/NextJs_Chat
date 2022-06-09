import { GetStaticPaths, GetStaticProps } from "next"
import ConversationsCard from "../../components/ConversationsCard/ConversationsCard"

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('http://localhost:3005/users')
  const data = await response.json()
  const paths = data.map((user) => {
    return {
      params: {
        senderId: user.id.toString()
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const senderId = context.params.senderId.toString()
  const response = await fetch(`http://localhost:3005/conversations/${senderId}`)
  const data = await response.json()
  return {
    props: { conversations: data }
  }
}

const Conversations = ({ conversations }) => {
  const element =
    conversations.map(conversation => {
      return (
        <div key={conversation.id} >
          <ConversationsCard
            conversationId={conversation.id}
            recipientId={conversation.recipientId}
            recipientNickname={conversation.recipientNickname}
            senderId={conversation.senderId}
            senderNickname={conversation.senderNickname} />
        </div >
      )
    })

  return (
    <div className="mainContainer" data-testid='conversationPage'>
      <main>
        <h1 role='heading'>Conversations</h1>
        <div>{element}</div>
      </main>
    </div>
  )
}

export default Conversations
