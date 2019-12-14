import React from "react"
import { Messages } from "./Messages"
import { MessageForm } from "./MessageForm"

export const ChatPage = () => {
  return (
    <div>
      <MessageForm />
      <Messages />
    </div>
  )
}
