import React, { useState } from "react"
import constate from "constate"

const useStore = () => {
  const [userName, setUserName] = useState()
  return {
    userName,
    setUserName
  }
}

const [Provider, _useAppStoreContext] = constate(useStore)

export const useAppContext = _useAppStoreContext

export const AppStore = ({ children }) => {
  return <Provider>{children}</Provider>
}
