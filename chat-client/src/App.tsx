import React from "react"
import { useAppContext } from "./AppStore"
import { EntryPage } from "./pages/EntryPage"
import { ChatPage } from "./pages/ChatPage"

export const App = () => {
  const { userName } = useAppContext()
  // if (!userName) {
  //   return <EntryPage />
  // }
  return <ChatPage />
}
