import React, { useState } from "react"
import { useSubscription } from "urql"
import { Box, Stack, Avatar, Grid } from "@chakra-ui/core"
import styled from "@emotion/styled"

const useChatStore = () => {
  const [messages, setMessages] = useState<any[]>([])
  const newMessageSubscription = `
  subscription Chat {
    chat(order_by: {created_at: desc}) {
      message
      updated_at
      id
    }
  }
  `
  useSubscription({ query: newMessageSubscription }, (_, data) => {
    console.log("d", data)
    // console.log(newMessage, resp)
    setMessages((msg) => data.chat)
  })
  return {
    messages
  }
}

const BorderBox = styled(Box)`
  border: solid 1px gray;
  padding: 0.5em;
`
const Msg = ({ message }) => {
  return (
    <BorderBox>
      <Grid autoFlow="colums" gridTemplateColumns="1fr 5fr">
        <Avatar />

        <Grid>
          <Box borderStyle="solid">{message}</Box>
        </Grid>
      </Grid>
    </BorderBox>
  )
}
export const Messages = () => {
  const { messages } = useChatStore()
  return (
    <Stack>
      {messages.map((msg, k) => (
        <Msg key={msg.id} message={msg.message} />
      ))}
    </Stack>
  )
}
