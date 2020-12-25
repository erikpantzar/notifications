import React, { createContext, useContext, useState } from "react"

export const NotificationsContext = createContext()

const NotificationsCtxProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    { label: "hej", type: "normal", time: new Date().getTime(), id: "asd" },
    { label: "second", type: "normal", time: new Date().getTime(), id: "asds" },
  ])

  const setNotification = ({ label, type }) => {
    const now = new Date()
    const seconds = 1000
    const notification = {
      label,
      type,
      id: now.getTime() + notifications.length + 6,
      time: now.getTime(),
      expiry: now + seconds * 8,
    }

    setNotifications([...notifications, notification])
  }

  const removeNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    )
  }

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        setNotification,
        removeNotification,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  )
}

export default NotificationsCtxProvider

export const useRemoveNotification = () => {
  const { removeNotification } = useContext(NotificationsContext)
  return removeNotification
}

export const useNotifications = () => {
  const { notifications } = useContext(NotificationsContext)
  return notifications
}

export const useSetNotification = () => {
  const { setNotification } = useContext(NotificationsContext)
  return setNotification
}
