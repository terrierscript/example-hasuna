import React from "react"
import { render } from "react-dom"
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core"
import styled from "@emotion/styled"
// import { layout, system } from "styled-system"

const Layout = styled(Box)`
  width: 500px;
  margin: 0 auto;
`

const App = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Layout>
        <div>hello</div>
      </Layout>
    </ThemeProvider>
  )
}

render(<App />, document.querySelector("#root"))
