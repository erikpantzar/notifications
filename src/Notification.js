import React, { useRef, useState } from "react"
import { useRemoveNotification } from "./NotificationsContext"
import styles from "./Notification.module.css"

const Notification = ({ label, time, expiry, id, type }) => {
  const [expired, setExpired] = useState(false)

  const removeNotification = useRemoveNotification()
  const noteEl = useRef(null)

  const doRemove = () => {
    console.log(noteEl)
    setExpired(true)
  }

  return (
    <div
      className={[styles.Notification, expired && styles.end].join(" ")}
      ref={noteEl}
      key={id}
      onAnimationEnd={(event) => {
        if (event.target.classList.contains(styles.end)) {
          removeNotification(id)
        } else {
        }
      }}
    >
      {label}
      {time}

      {time < expiry && "Expired"}

      <button onClick={doRemove}>Remove</button>
    </div>
  )
}

export default Notification
