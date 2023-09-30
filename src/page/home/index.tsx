import {
  Flex,
  Container,
  Image,
  Box,
  Button,
  Heading,
  HStack,
  useRadioGroup,
  UnorderedList,
  ListItem,
  Text,
  Spinner,
} from "@chakra-ui/react"
import { RadioCard } from "../../components/radio"
import useSWR, { mutate } from "swr"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Header } from "../../components/header"

const Home = () => {
  const [page, setPage] = useState(1)

  const options = [
    "Lançamentos",
    "Novos Filmes",
    "Populares",
    "Mais Assistidos",
  ]

  const { getRootProps, getRadioProps, value } = useRadioGroup({
    name: "selectGroups",
    defaultValue: "Lançamentos",
  })

  const group = getRootProps()

  const { data, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=5f6d789565d22c8473d0ac958158e5e1&page=${page}`,
    async url => {
      const { data } = await axios.get(url)

      if (value === options[2]) {
        const newResults = data.results.sort((a: any, b: any) => {
          if (a.vote_average < b.vote_average) return -1
        })

        return { ...data, results: newResults.reverse() }
      }

      if (value === options[3]) {
        const voteMovie = data.results.sort((a: any, b: any) => {
          if (a.vote_count > b.vote_count) return -1
        })

        return { ...data, results: voteMovie }
      }

      return data
    }
  )

  const handlePageNext = () => {
    if (page < data.total_pages) {
      setPage(page + 1)
    }
  }

  return (
    <>
      <Header />

      <Flex
        as="main"
        justifyContent="center"
        h={{ base: "450px", lg: "600px", md: "450px" }}
        _before={{
          content: `" "`,
          bg: "linear-gradient(0deg, rgb(2, 2, 2) 0px, rgba(2, 2, 2, 0.96) 10%, rgba(2, 2, 2, 0.9) 22%, rgba(2, 2, 2, 0.66) 38%, rgba(2, 2, 2, 0.61) 58%, rgba(0, 0, 21, 0.76) 100%), url(../assets/background.webp)",
          bgRepeat: "no-repeat",
          bgSize: "cover",
          w: "100%",
          h: "850px",
          pos: "absolute",
          top: "1px",
          zIndex: "-1",
          bgPosition: "center",
        }}
      >
        <Container
          w="95%"
          maxW="1600px"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box as="div" mt={{ base: "2rem", lg: "9rem", sm: "2rem" }}>
            <Image
              src="../assets/nameMovie.png"
              alt=""
              w={{ lg: "700px", md: "600px", sm: "500px" }}
            />
          </Box>

          <Flex
            as="div"
            mt="2rem"
            w="100%"
            flexDirection={{
              base: "column",
              lg: "row",
              md: "row",
              sm: "row",
            }}
            justifyContent="center"
            alignItems={{ base: "center", lg: "auto" }}
          >
            <Button
              mr={{ base: "0", lg: "2rem", sm: "2rem" }}
              mb={{ base: "1rem", lg: "0", sm: "0" }}
              bg="rgb(247, 140, 31)"
              color="#000"
              borderRadius="2rem"
              p="1.5rem 2rem"
              fontSize="14px"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 511.03 511.03"
                width="20px"
                height="20px"
                fill="#000"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <path d="M416.809 200.418L152.282 14.389C130.151-.972 107.89-4.358 89.145 5.798c-17.054 8.591-27.338 29.03-27.338 54.676v390.802c0 25.646 10.284 46.084 27.338 54.676 6.769 3.385 13.669 5.077 22.131 5.077 11.977 0 27.338-5.077 41.007-11.977L416.81 313.023c20.439-13.669 32.414-34.107 32.414-56.368-.001-22.259-11.977-42.698-32.415-56.237zm-20.568 83.575L131.714 470.022c-10.284 8.591-20.439 10.285-27.338 6.769-6.769-3.385-10.284-13.669-10.284-25.646V60.344c0-13.669 3.385-22.13 10.284-25.646 1.692-1.692 5.077-1.692 6.769-1.692 5.077 0 13.669 1.692 22.13 8.591l264.527 186.029c10.284 6.769 17.054 17.053 17.054 27.338.261 10.285-6.639 20.438-18.615 29.029z"></path>
              </svg>
              Assistir Filme
            </Button>

            <Button
              bg="rgb(24, 27, 31)"
              color="#fff"
              borderRadius="2rem"
              p="1.5rem 2rem"
              fontSize="14px"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 294.843 294.843"
                width="20px"
                height="20px"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <g fill="#FFF">
                  <path d="M212.921 0h-131a6 6 0 0 0-6 6v282.843a6 6 0 0 0 9.73 4.699l65.491-51.992a6 6 0 1 0-7.461-9.399L87.92 276.418V12h119v264.421l-26.771-21.247a6 6 0 0 0-7.459 9.4l36.501 28.969a6.002 6.002 0 0 0 9.73-4.7V6a6 6 0 0 0-6-6z"></path>
                  <path d="M102.921 35.755h89a6 6 0 0 0 0-12h-89a6 6 0 0 0 0 12zM102.921 59.409h89a6 6 0 0 0 0-12h-89a6 6 0 0 0 0 12zM165.421 71.063h-62.5a6 6 0 0 0 0 12h62.5a6 6 0 0 0 0-12z"></path>
                </g>
              </svg>
              Adicionar a ver depois
            </Button>
          </Flex>
        </Container>
      </Flex>

      <Box as="section" mb="4rem">
        <Container w="95%" maxW="1600px">
          <Flex
            as="div"
            alignItems="center"
            flexDirection={{ base: " column", lg: "row", md: "column" }}
          >
            <Heading as="h2" fontWeight="500" fontSize="22px" color="#fff">
              Assistir Filmes Online
            </Heading>

            <Flex
              as="div"
              alignItems="center"
              ml={{ base: "0", lg: "2rem", md: "0" }}
              mt={{ base: "1.5rem", lg: "0px", md: "1.5rem" }}
            >
              <HStack
                {...group}
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
              >
                {options.map(value => {
                  const radio = getRadioProps({ value })
                  return (
                    <div
                      key={value}
                      onClick={() => {
                        setTimeout(() => {
                          mutate(
                            `https://api.themoviedb.org/3/movie/popular?api_key=5f6d789565d22c8473d0ac958158e5e1&page=${page}`
                          )
                        }, 0)
                      }}
                    >
                      <RadioCard page={page} {...radio}>
                        {value}
                      </RadioCard>
                    </div>
                  )
                })}
              </HStack>
            </Flex>
          </Flex>

          <UnorderedList
            m="2rem 0 0 0"
            display="flex"
            listStyleType="none"
            flexWrap="wrap"
            justifyContent={{ base: "center", lg: "space-between" }}
          >
            {isLoading ? (
              <>
                <Flex
                  as="div"
                  justifyContent="center"
                  alignItems="center"
                  w="100%"
                  my="3rem"
                >
                  <Spinner
                    thickness="10px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    w="100px"
                    h="100px"
                  />
                </Flex>
              </>
            ) : (
              <>
                {data.results.map((movie: any) => (
                  <ListItem
                    mr="1.5rem"
                    mt="3rem"
                    width="250px"
                    pos="relative"
                    transition="0.2s"
                    cursor="pointer"
                    _hover={{
                      transform: "scale(1.1)",
                    }}
                    key={movie.id}
                  >
                    <Link to={`/filme/online/${movie.id}`}>
                      <Box
                        as="div"
                        w="100%"
                        h="350px"
                        bg={`linear-gradient(0deg,rgba(0,0,0,.9) 0,rgba(0,0,0,.7) 37%,rgba(0,0,0,0) 100%),url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`}
                        bgSize="cover"
                        borderRadius="1rem"
                      />

                      <Box
                        as="div"
                        pos="absolute"
                        bottom="1px"
                        p="1rem"
                        w="100%"
                      >
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
              </>
            )}
          </UnorderedList>
        </Container>
      </Box>

      <Box as="footer" mb="3rem">
        <Container
          w="95%"
          maxW="1600px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <UnorderedList display="flex" flexWrap="wrap" listStyleType="none">
            <ListItem
              bg="rgb(24, 27, 31)"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="0.5rem"
              color="#fff"
              mr="1rem"
              mt="0.5rem"
              w="45px"
              h="45px"
              fontWeight="700"
              fontSize="17px"
              transition="0.3s"
              cursor="pointer"
              _hover={{
                bg: "#fff",
                color: "#000",
                cursor: "pointer",
              }}
              onClick={() => setPage(1)}
            >
              1
            </ListItem>
            <ListItem
              bg="rgb(24, 27, 31)"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="0.5rem"
              color="#fff"
              mt="0.5rem"
              mr="1rem"
              w="45px"
              h="45px"
              fontWeight="700"
              fontSize="17px"
              transition="0.3s"
              cursor="pointer"
              _hover={{
                bg: "#fff",
                color: "#000",
              }}
              onClick={() => setPage(2)}
            >
              2
            </ListItem>
            <ListItem
              bg="rgb(24, 27, 31)"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="0.5rem"
              color="#fff"
              mr="1rem"
              mt="0.5rem"
              w="45px"
              h="45px"
              fontWeight="700"
              fontSize="17px"
              transition="0.3s"
              cursor="pointer"
              _hover={{
                bg: "#fff",
                color: "#000",
              }}
              onClick={() => setPage(3)}
            >
              3
            </ListItem>
            <ListItem
              bg="rgb(24, 27, 31)"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="0.5rem"
              color="#fff"
              mr="1rem"
              mt="0.5rem"
              w="45px"
              h="45px"
              fontWeight="700"
              fontSize="17px"
              transition="0.3s"
              cursor="pointer"
              _hover={{
                bg: "#fff",
                color: "#000",
              }}
              onClick={() => setPage(4)}
            >
              4
            </ListItem>
            <ListItem
              bg="rgb(24, 27, 31)"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="0.5rem"
              color="#fff"
              mr="1rem"
              mt="0.5rem"
              w="45px"
              h="45px"
              fontWeight="700"
              fontSize="17px"
              transition="0.3s"
              cursor="pointer"
              _hover={{
                bg: "#fff",
                color: "#000",
              }}
              onClick={() => setPage(5)}
            >
              5
            </ListItem>
            <ListItem
              bg="rgb(24, 27, 31)"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="0.5rem"
              color="#fff"
              mr="1rem"
              mt="0.5rem"
              h="45px"
              px="1rem"
              fontWeight="700"
              fontSize="17px"
              transition="0.3s"
              cursor="pointer"
              _hover={{
                bg: "#fff",
                color: "#000",
              }}
              onClick={() => handlePageNext()}
            >
              Proximo
            </ListItem>
          </UnorderedList>
        </Container>
      </Box>
    </>
  )
}

export { Home }
