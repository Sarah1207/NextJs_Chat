import { useRouter } from "next/router"
import axios from 'axios'
import { useEffect, useState } from "react"
import MessagesCard from "../../components/MessagesCard/MessagesCard"

const MessagesPage = () => {
  const router = useRouter()
  const { query: { conversationId } } = router
  const [messages, getMessages] = useState([])

  useEffect(() => {
    getAllMessages()
  }, [])

  const getAllMessages = () => {
    axios.get(`http://localhost:3005/messages/${conversationId}`)
      .then((response) => {
        const fetchedData = response.data
        getMessages(fetchedData)
      })
      .catch((error) => {
        console.error(`Error : ${error} `)
        router.push('/404')
      })
  }

  const element =
    messages.map((message) => {
      return (
        <div key={message.id}>
          <MessagesCard
            messageId={message.id}
            conversationId={message.conversationId}
            authorId={message.authorId}
            timestamp={message.timestamp}
            body={message.body} />
        </div>
      )
    })


  return (
    <div className="mainContainer" data-testid='pageMessages'>
      <main>
        <h1 role='heading'>Messages from conversation n°{`${conversationId}`}</h1>
        <div> {element}</div>
      </main>
    </div>
  )
}

export default MessagesPage
