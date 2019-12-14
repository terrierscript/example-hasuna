import React, { useState } from "react"
import { Box, Input, Button, Stack } from "@chakra-ui/core"
import { useAppContext } from "../AppStore"

export const EntryPage = () => {
  // const { setUserName } = useAppContext()
  const [inputValue, setInputValue] = useState("")
  return (
    <Stack>
      <Box>
        <Input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        ></Input>
      </Box>
      <Box>
        <Button onClick={() => {}}>Entry</Button>
      </Box>
    </Stack>
  )
}
