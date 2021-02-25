import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query-devtools"
import { Provider as ReduxProvider } from "react-redux"

import theme from "./styles/theme"
import store from "./store"

import App from "./App"

const queryClient = new QueryClient({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <React.StrictMode>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          <App />
        </React.StrictMode>
      </QueryClientProvider>
    </ReduxProvider>
  </ChakraProvider>,
  document.getElementById("root"),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
