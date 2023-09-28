import { useRadio, Box } from "@chakra-ui/react"

const RadioCard = props => {
  const { getInputProps, getRadioProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getRadioProps()

  return (
    <Box as="label" mr="0.5rem" bg="rgb(24, 27, 31)" borderRadius="2rem">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRadius="2rem"
        fontSize="15px"
        boxShadow="md"
        opacity="0.8"
        color="#fff"
        _checked={{
          bg: "rgb(247, 140, 31)",
          color: "#000",
          fontWeight: "700",
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
