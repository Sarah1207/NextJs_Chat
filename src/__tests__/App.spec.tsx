import { render, screen } from "@testing-library/react"
import Layout from "../components/Layout/Layout"
import Navigation from "../components/Navigation/Navigation"
import HomePage from "../pages"
import NotFound from "../pages/404"
import ConversationsPage from "../pages/conversations/[senderId]"
import Conversations from "../pages/conversations/[senderId]"
import MessagesPage from "../pages/messages/[conversationId]"
import Messages from "../pages/messages/[conversationId]"
import UserId from "../pages/user/[userId]"


describe("App", () => {

  describe("Navigation Component Navigation.tsx", () => {
    it("should render correctly Navigation Component", () => {
      render(<Navigation />)
      expect(screen.getByText(/Home/)).toBeInTheDocument()
      expect(screen.getByTestId('link')).toBeInTheDocument()

    })
  })

  describe("Layout Component Navigation.tsx", () => {
    it("should render correctly Navigation Component", () => {
      render(<Layout> whatever is the children </Layout>)
      expect(screen.getByTestId('layout')).toBeInTheDocument()

    })
  })

  describe("HomePage index.tsx", () => {
    it("should render correctly App", () => {
      const users = [
        { id: 12, name: 'name' },
        { id: 12, name: 'name' }
      ]
      render(<HomePage users={users} />)
      expect(screen.getByText(/Welcome/)).toBeInTheDocument()
      expect(screen.getByTestId('homePage')).toBeInTheDocument()
    })
  })

  describe("The UserId Page /pages/user/[userId].tsx", () => {
    it("should render correctly the page without crashing", () => {
      const user = [
        { userId: 12, nickname: 'name' }
      ]
      render(<UserId user={user} />)
      expect(screen.getByText(/all/)).toBeInTheDocument()
      expect(screen.getByTestId('oneUser')).toBeInTheDocument()
      expect(screen.getByTestId('oneUser')).toHaveClass('mainContainer')
    })
  })

  describe("The 404 error Page", () => {
    it("should render correctly the page without crashing", () => {
      render(<NotFound />)
      expect(screen.getByRole('heading')).toBeInTheDocument()
      expect(screen.getByAltText('Error')).toBeInTheDocument()
      expect(screen.getByText(/automatically/)).toBeInTheDocument()
      expect(screen.getByTestId('notFound')).toBeInTheDocument()
    })
  })

})
