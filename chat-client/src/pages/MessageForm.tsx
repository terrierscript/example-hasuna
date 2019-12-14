import React, { useState } from "react"
import { Stack, Box, Input, Button } from "@chakra-ui/core"
import { useMutation } from "urql"

const postMutation = `      
  mutation MyMutation($msg: String!) {
    __typename
    insert_chat(objects: {message: $msg}) {
      affected_rows
    }
  }
`

export const MessageForm = () => {
  const [inputValue, setInputValue] = useState("")
  const [res, exec] = useMutation(postMutation)
  const handlePost = () => {
    exec({ msg: inputValue }).then((r) => {
      setInputValue("")
    })
  }
  return (
    <Stack>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handlePost()
        }}
      >
        <Box>
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          ></Input>
        </Box>
        <Box>
          <Button onClick={handlePost}>Post</Button>
        </Box>
      </form>
    </Stack>
  )
}
