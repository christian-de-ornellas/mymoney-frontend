import {
    extendTheme,
    withDefaultColorScheme,
    theme as base,
} from '@chakra-ui/react'

const theme = extendTheme(
    {
        colors: {
            brand: {
                50: '#36C5F0',
                100: '#2EB67D',
                200: '#E01E5A',
                300: '#ECB22E',
                400: '#36C5F0',
                500: '#2EB67D',
                600: '#E01E5A',
                700: '#ECB22E',
                800: '#36C5F0',
                900: '#2EB67D',
            },
        },
        fonts: {
            heading: `Montserrat, ${base.fonts?.heading}`,
            body: `Inter, ${base.fonts?.body}`,
        },
        components: {
            Input: {
                variants: {
                    filled: {
                        field: {
                            _focus: {
                                borderColor: 'brand.100',
                            },
                        },
                    },
                },
            },
        },

        config: {
            cssVarPrefix: 'mooney',
        },
    },
    withDefaultColorScheme({
        colorScheme: 'brand',
        components: ['Checkbox'],
    })
)

export default theme
