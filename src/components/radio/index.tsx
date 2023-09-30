import { useRadio, Box } from "@chakra-ui/react"

const RadioCard = (props: any) => {
  const { getInputProps, getRadioProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getRadioProps()

  return (
    <Box
      as="label"
      display="flex"
      mr="0.5rem"
      w={{ base: "150px", lg: "100%", md: "100%", sm: "150px" }}
      bg="rgb(24, 27, 31)"
      borderRadius="2rem"
    >
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRadius="2rem"
        fontSize="15px"
        boxShadow="md"
        display="flex"
        justifyContent="center"
        w="100%"
        opacity="0.8"
        color="#fff"
        bg="rgb(24, 27, 31)"
        _checked={{
          bg: "rgb(0, 0, 0)",
          color: "#ffffff",
          fontWeight: "700",
          border: "2px solid #ce7e16c1",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  )
}

export { RadioCard }
