import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "brand.500",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: "none",
      },
    },
  },
};

// extendTheme allows you implement custom themes and colors and fonts for components
const theme = extendTheme(
  {
    colors: {
      brand: {
        50: "#f5fee5",
        100: "#e1fbb2",
        200: "#cdf781",
        300: "#b8ee56",
        400: "#a2e032",
        500: "#8ac919",
        600: "#71ab09",
        700: "#578602",
        800: "#3c5e00",
        900: "#203300",
      },
    },
    //   the base fonts serve as a fall back font in case the selected font is not available
    fonts: {
      heading: `var(--font-montserrat), ${base.fonts?.heading}`,
      body: `var(--font-inter), ${base.fonts?.body}`,
    },
    components: {
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: "none",
            _focus: {
              ring: 2,
              ringColor: "brand.500",
            },
          },
        },
      },
    },
  },
  // theme extensions allow us to set default styles for some components
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox"],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

export default theme;
