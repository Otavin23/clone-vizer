import { Flex, Container } from "@chakra-ui/react"

const Home = () => {
  return (
    <Flex
      as="main"
      justifyContent="center"
      _before={{
        content: `"1"`,
        bg: "url(../assets/background.webp)",
        bgRepeat: "no-repeat",
        bgSize: "cover",
        w: "100%",
        h: "700px",
        pos: "absolute",
        top: "1px",
        zIndex: "-1",
        bgPosition: "center",
      }}
    >
      <Container w="95%" maxW="1600px">
        1
      </Container>
    </Flex>
  )
}

export { Home }
