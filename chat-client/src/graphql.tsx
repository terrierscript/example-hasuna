import {
  subscriptionExchange,
  debugExchange,
  cacheExchange,
  fetchExchange,
  createClient
} from "urql"

import { SubscriptionClient } from "subscriptions-transport-ws"
const subscriptionClient = new SubscriptionClient(
  "ws://localhost:8080/v1/graphql",
  {}
)

export const gqlClient = createClient({
  url: "http://localhost:8080/v1/graphql",
  exchanges: [
    debugExchange,
    cacheExchange,
    fetchExchange,
    subscriptionExchange({
      forwardSubscription: (operation) => subscriptionClient.request(operation)
    })
  ]
})
