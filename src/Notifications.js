import React from "react"
import { useNotifications, useSetNotification } from "./NotificationsContext"
import Notification from "./Notification"
import "./Notifications.css"

function Notifications() {
  const notifications = useNotifications()
  const setNotification = useSetNotification()

  return (
    <div>
      <button
        onClick={() => {
          setNotification({ label: "Hej", type: "regular" })
        }}
      >
        Add notification
      </button>
      <div className="N-container">
        {notifications &&
          notifications.map((note) => (
            <Notification
              key={note.id}
              id={note.id}
              label={note.label}
              time={note.time}
            />
          ))}
      </div>
    </div>
  )
}

export default Notifications
