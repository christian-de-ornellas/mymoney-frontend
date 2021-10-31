import React from 'react'
import { ChakraProvider, Container } from '@chakra-ui/react'
import Home from './pages/Home'

const App: React.FC = (): JSX.Element => {
    return (
        <ChakraProvider>
            <Container maxWidth="container.xl">
                <Home />
            </Container>
        </ChakraProvider>
    )
}
export default App
