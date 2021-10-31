import React from 'react'
import { ChakraProvider, Container } from '@chakra-ui/react'
import Home from './pages/Home'
import theme from './theme'
import './theme/styles.css'

const App: React.FC = (): JSX.Element => {
    return (
        <ChakraProvider theme={theme}>
            <Container maxWidth="container.xl">
                <Home />
            </Container>
        </ChakraProvider>
    )
}
export default App
