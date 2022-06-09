import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from 'axios'
import MessageCard from "../../components/MessageCard/MessageCard"

const MessagePage = () => {
  const router = useRouter()
  const { query: { messageId } } = router
  const [message, getTheMessage] = useState([])

  useEffect(() => {
    getMessage()
  }, [])

  const getMessage = () => {
    axios.get(`http://localhost:3005/messages/${messageId}`)
      .then((response) => {
        const fetchedData = response.data
        getTheMessage(fetchedData)
      })
      .catch((error) => {
        console.error(`Error : ${error} `)
        router.push('/404')
      })
  }

  const element =
    message.map((m) => {
      return (
        <div key={m.id}>
          <MessageCard
            messageId={m.id}
            conversationId={m.conversationId}
            authorId={m.authorId}
            timestamp={m.timestamp}
            body={m.body} />
        </div>
      )
    })

  return (
    <div className="mainContainer">
      <main>
        <h1>Detailed Message n°{`${messageId}`}</h1>
        <div>{element}</div>
      </main>
    </div>
  )
}

export default MessagePage
