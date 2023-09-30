import {
  Box,
  Container,
  Flex,
  Image,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Spinner,
} from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import useSWR from "swr"
import axios from "axios"
import { Header } from "../../components/header"
import { useEffect, useState } from "react"

const InformationMovie = () => {
  const { name } = useParams()
  const [data, setData] = useState<any>([])

  useEffect(() => {
    const api = async (url: string) => {
      const { data } = await axios.get(url)
      return setData(data)
    }

    api(
      `https://api.themoviedb.org/3/movie/${name}?api_key=5f6d789565d22c8473d0ac958158e5e1`
    )
  }, [])

  const { data: person, isLoading: LoadingPerson } = useSWR(
    `https://api.themoviedb.org/3/movie/${name}/credits?api_key=5f6d789565d22c8473d0ac958158e5e1`,
    async url => {
      const { data } = await axios.get(url)
      return data
    }
  )

  return (
    <>
      <Header />

      {data.length >= 0 ? (
        <Flex as="div" justifyContent="center" alignItems="center" h="700px">
          <Spinner
            thickness="10px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            w="100px"
            h="100px"
          />
        </Flex>
      ) : (
        <Flex
          as="main"
          justifyContent="center"
          _before={{
            content: `" "`,
            bg: `linear-gradient(0deg, rgb(2, 2, 2) 0px, rgba(2, 2, 2, 0.96) 10%, rgba(2, 2, 2, 0.9) 22%, rgba(2, 2, 2, 0.66) 38%, rgba(2, 2, 2, 0.61) 58%, rgba(0, 0, 21, 0.76) 100%), url(https://image.tmdb.org/t/p/w500/${data.poster_path})`,
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
          <Container
            w="95%"
            maxW="1600px"
            mt="5rem"
            display="flex"
            flexDirection={{
              base: "column",
              lg: "row",
              md: "row",
              sm: "column",
            }}
            alignItems={{ base: "center", lg: "start", md: "center" }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
              alt=""
              w="275px"
              h="400px"
              borderRadius="2rem"
            />

            <Box
              as="div"
              ml={{ base: "0", lg: "3rem", md: "1.5rem", sm: "0" }}
              mt={{ base: "2rem", md: "0", sm: "2rem" }}
              display="flex"
              flexDirection="column"
              alignItems={{ lg: "normal", sm: "center" }}
            >
              <Text
                as="span"
                color="#fff"
                letterSpacing="2px"
                fontWeight="600"
                fontSize="clamp(12px, 1.5vw, 17px)"
              >
                ASSISTIR {data.original_title.toUpperCase()} ONLINE
              </Text>

              <Heading
                as="h2"
                color="#fff"
                my="0.5rem"
                fontSize="clamp(25px, 5vw, 50px)"
                fontWeight="800"
                textAlign={{
                  base: "center",
                  lg: "start",
                  md: "start",
                  sm: "center",
                }}
              >
                {data.original_title}
              </Heading>

              <UnorderedList
                m="0"
                display="flex"
                alignItems="center"
                justifyContent={{
                  base: "space-between",
                  md: "normal",
                  sm: "space-between",
                }}
                listStyleType="none"
              >
                <ListItem color="#fff" fontWeight="600" mr="1rem">
                  {data.release_date.substr(0, 4)}
                </ListItem>

                <ListItem
                  color="#fff"
                  fontWeight="600"
                  display="flex"
                  alignItems="center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512.001 512.001"
                    width="20px"
                    fill="#fff"
                    style={{
                      marginRight: "1rem",
                    }}
                  >
                    <path d="M439.89 78.181C391.216 27.77 325.88 0 255.921 0c-6.011 0-10.89 4.879-10.89 10.89s4.879 10.89 10.89 10.89c63.997 0 123.762 25.402 168.298 71.538 44.721 46.316 68.108 107.411 65.848 171.99-4.688 121.35-103.419 220.081-224.731 224.764-64.617 2.238-125.712-21.122-172.028-65.843-46.126-44.541-71.527-104.312-71.527-168.309 0-66.883 26.316-115.339 48.462-144.296 2.75-3.665 6.883-5.87 11.647-6.207 4.797-.359 9.48 1.35 12.78 4.65l235.23 235.23c4.253 4.253 11.146 4.253 15.399 0 4.253-4.253 4.253-11.146 0-15.399l-235.23-235.23c-7.765-7.77-18.557-11.729-29.725-10.977-10.994.784-21.024 6.197-27.465 14.784C28.756 130.019 0 182.946 0 255.921c0 69.959 27.765 135.295 78.181 183.975 48.369 46.703 111.456 72.11 178.6 72.104 3.109 0 6.235-.054 9.36-.163 132.643-5.124 240.566-113.046 245.695-245.728 2.473-70.58-23.076-137.32-71.946-187.928z"></path>
                  </svg>
                  2h, 15min
                </ListItem>
              </UnorderedList>

              <Text
                color="#fff"
                mt="1.5rem"
                maxW="800px"
                textAlign={{
                  base: "center",
                  lg: "start",
                  md: "start",
                  sm: "center",
                }}
              >
                {data.overview}
              </Text>

              <Box as="nav" m="2rem 0 0 0">
                <UnorderedList
                  display="flex"
                  listStyleType="none"
                  alignItems="center"
                  flexWrap="wrap"
                  m="0"
                >
                  <ListItem
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="rgba(113,125,138,.2)"
                    px="1.5rem"
                    py="1rem"
                    color="#fff"
                    fontWeight="700"
                    borderRadius="2rem"
                    cursor="pointer"
                    fontSize="13px"
                    mr="1rem"
                    mt="1rem"
                  >
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25px"
                      fill="#fff"
                      style={{
                        marginRight: "1.2rem",
                      }}
                    >
                      <path d="M512 120v145c0 11.046-8.954 20-20 20s-20-8.954-20-20V120c0-44.112-35.888-80-80-80H120c-44.112 0-80 35.888-80 80v272c0 44.112 35.888 80 80 80h151.5c11.046 0 20 8.954 20 20s-8.954 20-20 20H120C53.832 512 0 458.168 0 392V120C0 53.832 53.832 0 120 0h272c66.168 0 120 53.832 120 120zm-318 38h204c11.046 0 20-8.954 20-20s-8.954-20-20-20H194c-11.046 0-20 8.954-20 20s8.954 20 20 20zm224 98c0-11.046-8.954-20-20-20H194c-11.046 0-20 8.954-20 20s8.954 20 20 20h204c11.046 0 20-8.954 20-20zm-224 98c-11.046 0-20 8.954-20 20s8.954 20 20 20h39c11.046 0 20-8.954 20-20s-8.954-20-20-20zm318 25.138c0 .135-.001.27-.004.404-.885 43.791-25.772 85.222-71.972 119.814-11.192 8.381-24.61 12.572-38.024 12.573-13.417.001-26.83-4.19-38.025-12.574-46.199-34.592-71.086-76.022-71.971-119.813-.002-.135-.004-.27-.004-.404C292 343.221 321.159 314 357 314c17.448 0 33.313 6.91 45 18.138C413.688 320.91 429.552 314 447 314c35.841 0 65 29.221 65 65.138zm-40-.185C471.9 365.177 460.724 354 447 354c-13.785 0-25 11.215-25 25 0 11.046-8.954 20-20 20s-20-8.954-20-20c0-13.785-11.215-25-25-25-13.724 0-24.9 11.177-25 24.953.901 39.09 30.908 69.634 55.95 88.384 8.273 6.195 19.828 6.194 28.099.001 25.042-18.751 55.049-49.295 55.951-88.385zM139 139c0-13.807-11.193-25-25-25s-25 11.193-25 25 11.193 25 25 25 25-11.193 25-25zm0 117c0-13.807-11.193-25-25-25s-25 11.193-25 25 11.193 25 25 25 25-11.193 25-25zm-25 93c-13.807 0-25 11.193-25 25s11.193 25 25 25 25-11.193 25-25-11.193-25-25-25z"></path>
                    </svg>
                    CURTIR
                  </ListItem>

                  <ListItem
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="rgba(113,125,138,.2)"
                    px="1.5rem"
                    py="1rem"
                    color="#fff"
                    fontWeight="700"
                    borderRadius="2rem"
                    cursor="pointer"
                    fontSize="13px"
                    mr="1rem"
                    mt="1rem"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="25px"
                      fill="#fff"
                      style={{
                        marginRight: "1.2rem",
                      }}
                    >
                      <path d="M217 512h-97C53.832 512 0 458.168 0 392V120C0 53.832 53.832 0 120 0h184c66.168 0 120 53.832 120 120v65c-1.056 26.536-38.953 26.516-40 0v-65c0-44.112-35.888-80-80-80H120c-44.112 0-80 35.888-80 80v272c0 44.112 35.888 80 80 80h97c26.536 1.056 26.516 38.953 0 40zM320 98c-1.056-26.533-38.951-26.519-40 0 0 16.542-13.458 30-30 30h-76c-16.542 0-30-13.458-30-30 0-11.046-8.954-20-20-20s-20 8.954-20 20c0 38.598 31.402 70 70 70h76c38.598 0 70-31.402 70-70zm192 279c0-74.439-60.561-135-135-135-179.104 7.417-179.035 262.617 0 270 74.439 0 135-60.561 135-135zm-40 0c0 52.383-42.617 95-95 95-126.036-5.22-125.987-184.805 0-190 52.383 0 95 42.617 95 95zm-61.013 20H377c-11.046 0-20-8.954-20-20v-41c1.056-26.536 38.953-26.516 40 0v21h13.987c26.536 1.056 26.516 38.953 0 40zM263 238c0-11.046-8.954-20-20-20H130c-26.536 1.056-26.516 38.953 0 40h113c11.046 0 20-8.954 20-20zm-50 80c0-11.046-8.954-20-20-20h-63c-26.536 1.056-26.516 38.953 0 40h63c11.046 0 20-8.954 20-20zm-10 80c0-11.046-8.954-20-20-20h-53c-26.536 1.056-26.516 38.953 0 40h53c11.046 0 20-8.954 20-20z"></path>
                    </svg>
                    VER DEPOIS
                  </ListItem>

                  <ListItem
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="rgba(113,125,138,.2)"
                    color="#fff"
                    fontWeight="700"
                    borderRadius="2rem"
                    cursor="pointer"
                    fontSize="13px"
                    mr="1rem"
                    mt="1rem"
                    w="50px"
                    h="50px"
                  >
                    <svg
                      viewBox="-110 1 511 512"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25px"
                      fill="#fff"
                    >
                      <path d="M180 512H98.008c-13.695 0-24.836-11.14-24.836-24.836V302.227H25.336C11.64 302.227.5 291.082.5 277.39v-79.246c0-13.696 11.14-24.836 24.836-24.836h47.836v-39.684c0-39.348 12.355-72.824 35.726-96.805C132.375 12.73 165.184 0 203.778 0l62.53.102c13.672.023 24.794 11.164 24.794 24.835v73.579c0 13.695-11.137 24.836-24.829 24.836l-42.101.015c-12.84 0-16.11 2.574-16.809 3.363-1.152 1.31-2.523 5.008-2.523 15.223v31.352h58.27c4.386 0 8.636 1.082 12.288 3.12 7.88 4.403 12.778 12.727 12.778 21.723l-.031 79.247c0 13.687-11.141 24.828-24.836 24.828h-58.47v184.941C204.84 500.86 193.696 512 180 512zm-76.813-30.016h71.633V288.79c0-9.144 7.442-16.582 16.582-16.582h66.727l.027-68.883h-66.758c-9.14 0-16.578-7.437-16.578-16.582v-44.789c0-11.726 1.192-25.062 10.043-35.086 10.696-12.117 27.551-13.515 39.301-13.515l36.922-.016V30.109l-57.332-.093c-62.024 0-100.566 39.703-100.566 103.609v53.117c0 9.14-7.438 16.582-16.579 16.582H30.516v68.883h56.093c9.141 0 16.579 7.438 16.579 16.582zM266.25 30.117h.004zm0 0"></path>
                    </svg>
                  </ListItem>

                  <ListItem
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="rgba(113,125,138,.2)"
                    color="#fff"
                    fontWeight="700"
                    borderRadius="2rem"
                    cursor="pointer"
                    fontSize="13px"
                    mr="1rem"
                    mt="1rem"
                    w="50px"
                    h="50px"
                  >
                    <svg
                      viewBox="0 -47 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25px"
                      fill="#fff"
                    >
                      <path d="M512 55.965c-32.207 1.484-31.504 1.363-35.145 1.668L495.93 3.16s-59.54 21.902-74.633 25.82c-39.64-35.628-98.563-37.203-140.688-11.312-34.496 21.207-53.011 57.625-46.836 100.191C166.637 108.543 110.07 76.72 65.41 23.07L51.285 6.105 40.73 25.488C27.39 49.98 22.96 77.984 28.254 104.34A113.287 113.287 0 0039.23 135.12l-12.117-4.695-1.437 20.246c-1.457 20.566 5.39 44.574 18.32 64.215a114.185 114.185 0 0014.27 17.597l-6.262-.96 7.64 23.199c10.043 30.48 30.903 54.062 57.973 67.172-27.035 11.472-48.875 18.793-84.773 30.601L0 363.293l30.336 16.586c11.566 6.324 52.437 27.445 92.82 33.781 89.766 14.078 190.832 2.613 258.871-58.664 57.309-51.613 76.114-125.031 72.207-201.433-.59-11.567 2.579-22.606 8.922-31.079 12.707-16.964 48.766-66.406 48.844-66.52zm-72.832 48.55c-10.535 14.067-15.813 32.032-14.867 50.579 3.941 77.066-17.028 136.832-62.328 177.629-52.918 47.66-138.274 66.367-234.172 51.324-17.367-2.723-35.317-8.82-50.172-14.91 30.098-10.356 53.34-19.586 90.875-37.352l52.398-24.8-57.851-3.704c-27.711-1.773-50.785-15.203-64.969-37.008a103.763 103.763 0 0022.023-3.671l55.176-15.368-55.636-13.625c-27.036-6.62-42.446-22.797-50.614-35.203-5.363-8.152-8.867-16.504-10.969-24.203 5.579 1.496 12.083 2.563 22.57 3.602l51.497 5.093-40.8-31.828c-29.4-22.93-41.18-57.379-32.544-90.496 91.75 95.164 199.477 88.012 210.32 90.528-2.386-23.184-2.449-23.239-3.074-25.446-13.886-49.09 16.547-74.015 30.274-82.453 28.672-17.621 74.183-20.277 105.707 8.754 6.808 6.266 16.015 8.73 24.633 6.59 7.734-1.922 14.082-3.957 20.296-6.172L434.004 89.32l16.516.012a8240.32 8240.32 0 01-11.352 15.184zm0 0"></path>
                    </svg>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Container>
        </Flex>
      )}

      {!LoadingPerson && (
        <Box as="section" mt="6rem" mb="3rem">
          <Container w="95%" maxW="1600px">
            <Heading as="h2" color="#fff">
              Atores
            </Heading>

            <UnorderedList
              m="2rem 0 0 0"
              display="flex"
              flexWrap="wrap"
              justifyContent={{
                base: "center",
                lg: "space-between",
                md: "space-between",
              }}
              listStyleType="none"
            >
              {person.cast.slice(0, 6).map((person: any) => (
                <ListItem
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  key={person.id}
                  w="250px"
                  mt="1rem"
                >
                  <Box as="div">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                      alt=""
                      w="95%"
                      borderRadius="1.5rem"
                    />
                  </Box>
                  <Text
                    as="span"
                    mt="1rem"
                    color="#fff"
                    fontWeight="600"
                    fontSize="20px"
                  >
                    {person.original_name}
                  </Text>
                </ListItem>
              ))}
            </UnorderedList>
          </Container>
        </Box>
      )}
    </>
  )
}

export { InformationMovie }
