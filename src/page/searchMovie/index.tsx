import {
  Flex,
  Input,
  Box,
  Container,
  UnorderedList,
  ListItem,
  Heading,
  Text,
} from "@chakra-ui/react"
import { Header } from "../../components/header"
import { Link } from "react-router-dom"
import { useState } from "react"
import api from "axios"

const SearchMovie = () => {
  const [input, setInput] = useState("")
  const [data, setData] = useState([])

  const handleSearchMovie = async () => {
    const { data } = await api.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=5f6d789565d22c8473d0ac958158e5e1"
    )

    setData(data.results)
  }

  const checkInputInData = data.filter((movie: any) => {
    if (movie.original_title.toLowerCase().includes(input.toLowerCase()))
      return movie
  })

  return (
    <>
      <Header />

      <Box as="main">
        <Container w="95%" maxW="1600px">
          <Flex
            as="div"
            justifyContent="space-between"
            alignItems="center"
            mt="1.5rem"
            bg="rgba(255, 255, 255, 0.06)"
            border="none"
            h="75px"
            borderRadius="0.5rem"
          >
            <Input
              type="text"
              placeholder="Pesquise por título ou elenco..."
              bg="transparent"
              border="none"
              h="100%"
              textAlign="center"
              fontWeight="400"
              fontSize="25px"
              color="#fff"
              outline="none"
              _placeholder={{
                color: "#6e6e6e",
              }}
              onKeyDown={event => event.keyCode === 13 && handleSearchMovie()}
              onChange={({ target }) => setInput(target.value)}
            />
            <svg
              viewBox="0 0 551.13 551.13"
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              fill="#fff"
              style={{
                marginRight: "1rem",
                cursor: "pointer",
              }}
              onClick={() => handleSearchMovie()}
            >
              <path d="M551.13 526.776L364.345 339.991c30.506-36.023 49.003-82.523 49.003-133.317C413.348 92.707 320.64 0 206.674 0S0 92.707 0 206.674s92.707 206.674 206.674 206.674c50.794 0 97.294-18.497 133.317-49.003L526.776 551.13l24.354-24.354zM206.674 378.902c-94.961 0-172.228-77.267-172.228-172.228S111.713 34.446 206.674 34.446s172.228 77.267 172.228 172.228-77.267 172.228-172.228 172.228z"></path>
            </svg>
          </Flex>

          {checkInputInData.length <= 0 && (
            <Text as="span" color="#fff">
              Sem resultados, pesquise novamente.
            </Text>
          )}

          <UnorderedList
            listStyleType="none"
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            transition="3s"
            mb="3rem"
          >
            {checkInputInData.map((movie: any, index) => (
              <ListItem
                mr="1.5rem"
                mt="3rem"
                width="240px"
                pos="relative"
                transition="0.2s"
                cursor="pointer"
                _hover={{
                  transform: "scale(1.1)",
                }}
                key={index}
              >
                <Link to={`/filme/online/${movie.id}`}>
                  <Box
                    as="div"
                    w="250px"
                    h="350px"
                    bg={`linear-gradient(0deg,rgba(0,0,0,.9) 0,rgba(0,0,0,.7) 37%,rgba(0,0,0,0) 100%),url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`}
                    bgSize="cover"
                    borderRadius="1rem"
                  />

                  <Box as="div" pos="absolute" bottom="1px" p="1rem" w="100%">
                    <Heading
                      as="h3"
                      color="#ffffff"
                      fontSize="20px"
                      fontWeight="600"
                    >
                      {movie.original_title}
                    </Heading>

                    <Flex as="div" justifyContent="space-between" mt="1rem">
                      <Text
                        as="span"
                        color="#adadad"
                        fontWeight="700"
                        fontSize="13px"
                        opacity="0.5"
                      >
                        {movie.release_date.substr(0, 4)}
                      </Text>

                      <Text
                        as="span"
                        display="flex"
                        alignItems="center"
                        color="#adadad"
                        fontWeight="700"
                        fontSize="13px"
                        opacity="0.5"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          width="15px"
                          height="15px"
                          style={{
                            marginRight: "0.5rem",
                          }}
                        >
                          <path
                            xmlns="http://www.w3.org/2000/svg"
                            d="M23.479 29.691a2.325 2.325 0 0 1-1.089-.27l-6.233-3.276a.333.333 0 0 0-.314 0l-6.232 3.276a2.338 2.338 0 0 1-3.393-2.465l1.19-6.939a.337.337 0 0 0-.1-.3L2.27 14.8a2.338 2.338 0 0 1 1.3-3.989L10.533 9.8a.337.337 0 0 0 .254-.185L13.9 3.3a2.337 2.337 0 0 1 4.193 0l3.115 6.313a.34.34 0 0 0 .254.185l6.969 1.012a2.339 2.339 0 0 1 1.3 3.989l-5.043 4.914a.339.339 0 0 0-.1.3l1.19 6.939a2.341 2.341 0 0 1-2.3 2.735zM16 24.105a2.325 2.325 0 0 1 1.088.27l6.232 3.275a.321.321 0 0 0 .356-.025.325.325 0 0 0 .135-.331l-1.191-6.94a2.343 2.343 0 0 1 .672-2.069l5.043-4.915a.338.338 0 0 0-.188-.576l-6.968-1.013a2.335 2.335 0 0 1-1.76-1.279L16.3 4.188a.338.338 0 0 0-.606 0L12.581 10.5a2.335 2.335 0 0 1-1.761 1.279l-6.967 1.015a.337.337 0 0 0-.187.576l5.042 4.915a2.343 2.343 0 0 1 .672 2.069l-1.191 6.94a.338.338 0 0 0 .492.356l6.231-3.276A2.335 2.335 0 0 1 16 24.105z"
                            fill="#fff"
                            data-original="#000000"
                          />
                        </svg>
                        {movie.vote_average}
                      </Text>

                      <Text
                        as="span"
                        color="#adadad"
                        fontWeight="700"
                        fontSize="13px"
                        opacity="0.5"
                      >
                        0h, 00min
                      </Text>
                    </Flex>
                  </Box>
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
        </Container>
      </Box>
    </>
  )
}

export { SearchMovie }
