import React from "react"
import { render } from "react-dom"
import { ThemeProvider, CSSReset, Box, Heading } from "@chakra-ui/core"
import styled from "@emotion/styled"
import { AppStore } from "./AppStore"
import { App } from "./App"
import { Provider } from "urql"
import { gqlClient } from "./graphql"
// import { layout, system } from "styled-system"

const Layout = styled(Box)`
  width: 500px;
  margin: 0 auto;
`

const EntryPoint = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Layout>
        <Provider value={gqlClient}>
          <Box>
            <Heading>Chat</Heading>
          </Box>
          <AppStore>
            <App />
          </AppStore>
        </Provider>
      </Layout>
    </ThemeProvider>
  )
}

render(<EntryPoint />, document.querySelector("#root"))
