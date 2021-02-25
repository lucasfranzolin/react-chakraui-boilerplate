import React from "react"

import { BrowserRouter, Route, Switch } from "react-router-dom"

import { Box } from "@chakra-ui/react"

import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <BrowserRouter>
      <Box as="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Box>
    </BrowserRouter>
  )
}

export default App
