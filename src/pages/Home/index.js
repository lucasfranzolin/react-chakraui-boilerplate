import React from "react"
import { connect } from "react-redux"
import * as actions from "../../store/redux/actions"

import {
  Stack,
  Button,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"

const Home = ({ count, testHome }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Stack isInline p={4} justifyContent="space-between">
      <Stack isInline alignItems="center">
        <Button
          mr={4}
          onClick={() => {
            testHome("Hello from REDUX")
          }}
          colorScheme={colorMode === "light" ? "green" : "blue"}
        >
          Dispatch action
        </Button>
        <Text color={useColorModeValue("yellow.500", "red.300")}>
          Count {count}
        </Text>
      </Stack>
      <Button
        onClick={toggleColorMode}
        colorScheme={colorMode === "light" ? "blue" : "green"}
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Stack>
  )
}

const mapStateToProps = ({ home }) => ({
  count: home.count,
})

const mapDispatchToProps = {
  testHome: actions.testHome,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
