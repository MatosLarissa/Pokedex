import { extendTheme } from '@chakra-ui/react'

const customTheme = {
    config: {
        initialColorMode: 'dark',
        
    },
};

export const theme = extendTheme(customTheme)