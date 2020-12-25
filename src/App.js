import React from "react"
import NotificationsCtxProvider from "./NotificationsContext"
import Notifications from "./Notifications"
import "./App.css"

function App() {
  return (
    <NotificationsCtxProvider>
      <Notifications />
    </NotificationsCtxProvider>
  )
}

export default App
