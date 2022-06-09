import React from "react"

const Layout = ({ children }) => {
  return (
    <div className='mainLayout' data-testid='layout'>
      {children}
    </div>
  )
}

export default Layout