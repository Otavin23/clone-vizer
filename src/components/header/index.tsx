import {
  Flex,
  Container,
  Box,
  Image,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react"

const Header = () => {
  return (
    <Flex
      as="header"
      justifyContent="center"
      h="75px"
      bg="transparent"
      borderBottom="1px solid #9191913d"
    >
      <Container w="95%" maxW="1600px">
        <Flex
          as="nav"
          w="100%"
          h="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex as="div" h="100%" alignItems="center">
            <Box as="div">
              <Image src="../assets/header/logo.png" w="130px" />
            </Box>

            <UnorderedList
              display="flex"
              alignItems="center"
              listStyleType="none"
              ml="4rem"
              h="100%"
            >
              <ListItem
                display="flex"
                alignItems="center"
                h="100%"
                px="1.5rem"
                fontSize="16px"
                color="#fff"
                opacity="0.7"
                fontWeight="500"
                borderBottom="1px solid rgb(247, 140, 31)"
                cursor="pointer"
                _hover={{
                  borderBottom: "1px solid rgb(247, 140, 31)",
                }}
              >
                Início
              </ListItem>
              <ListItem
                display="flex"
                alignItems="center"
                h="100%"
                px="1.5rem"
                fontSize="16px"
                color="#fff"
                opacity="0.7"
                fontWeight="500"
                borderBottom="1px solid transparent"
                cursor="pointer"
                _hover={{
                  borderBottom: "1px solid rgba(247, 139, 31, 0.671)",
                }}
              >
                Filmes
              </ListItem>
              <ListItem
                display="flex"
                alignItems="center"
                h="100%"
                px="1.5rem"
                fontSize="16px"
                color="#fff"
                opacity="0.7"
                fontWeight="500"
                borderBottom="1px solid transparent"
                cursor="pointer"
                _hover={{
                  borderBottom: "1px solid rgba(247, 139, 31, 0.671)",
                }}
              >
                Séries
              </ListItem>
              <ListItem
                display="flex"
                alignItems="center"
                h="100%"
                px="1.5rem"
                fontSize="16px"
                color="#fff"
                opacity="0.7"
                fontWeight="500"
                borderBottom="1px solid transparent"
                cursor="pointer"
                _hover={{
                  borderBottom: "1px solid rgba(247, 139, 31, 0.671)",
                }}
              >
                Animes
              </ListItem>
              <ListItem
                display="flex"
                alignItems="center"
                h="100%"
                px="1.5rem"
                fontSize="16px"
                color="#fff"
                opacity="0.7"
                fontWeight="500"
                borderBottom="1px solid transparent"
                cursor="pointer"
                _hover={{
                  borderBottom: "1px solid rgba(247, 139, 31, 0.671)",
                }}
              >
                Aplicativo
              </ListItem>
            </UnorderedList>
          </Flex>

          <Box as="div">
            <Button mr="1rem" bg="transparent">
              <svg
                viewBox="0 0 551.13 551.13"
                fill="#fff"
                width="20px"
                height="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M551.13 526.776L364.345 339.991c30.506-36.023 49.003-82.523 49.003-133.317C413.348 92.707 320.64 0 206.674 0S0 92.707 0 206.674s92.707 206.674 206.674 206.674c50.794 0 97.294-18.497 133.317-49.003L526.776 551.13l24.354-24.354zM206.674 378.902c-94.961 0-172.228-77.267-172.228-172.228S111.713 34.446 206.674 34.446s172.228 77.267 172.228 172.228-77.267 172.228-172.228 172.228z"></path>
              </svg>
            </Button>
            <Button
              bg="#fff"
              borderRadius="2rem"
              fontSize="13px"
              fontWeight="800"
            >
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="#313131"
                width="20px"
                height="20px"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <path d="M471.387 325.012c-16.969-14.91-37.547-27.793-61.168-38.29-10.098-4.484-21.914.063-26.399 10.157-4.484 10.094.063 21.91 10.157 26.398 19.918 8.852 37.082 19.543 51.007 31.782C462.152 370.145 472 391.989 472 415v37c0 11.027-8.973 20-20 20H60c-11.027 0-20-8.973-20-20v-37c0-23.012 9.848-44.855 27.016-59.941C87.223 337.3 146.098 296 256 296c81.605 0 148-66.395 148-148S337.605 0 256 0 108 66.395 108 148c0 47.707 22.695 90.207 57.852 117.29-64.329 14.14-104.344 41.358-125.239 59.722C14.805 347.687 0 380.484 0 415v37c0 33.086 26.914 60 60 60h392c33.086 0 60-26.914 60-60v-37c0-34.516-14.805-67.313-40.613-89.988zM148 148c0-59.55 48.45-108 108-108s108 48.45 108 108-48.45 108-108 108-108-48.45-108-108zm0 0"></path>
              </svg>
              MINHA CONTA
            </Button>
          </Box>
        </Flex>
      </Container>
    </Flex>
  )
}

export { Header }