import { extendTheme } from "@chakra-ui/react"

const themeChakra = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#020202",
      },
    },
  },

  fonts: {
    heading: `Mulish, sans-serif`,
    body: `Mulish, sans-serif`,
  },

  breakpoint: {
    sm: "480px",
    md: "725px",
    lg: "990px",
    xl: "1250px",
  },
})

export { themeChakra }
