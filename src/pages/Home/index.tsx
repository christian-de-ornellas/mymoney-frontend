import React from 'react'
import { Heading, Flex, Button, useColorMode } from '@chakra-ui/react'

const Home: React.FC = (): JSX.Element => {
    const { toggleColorMode } = useColorMode()
    return (
        <Flex alignItems="center" direction="column">
            <Heading mb={10}>Smarth phone!</Heading>
            <Button colorScheme="green" onClick={toggleColorMode}>
                Place Order
            </Button>
        </Flex>
    )
}

export default Home
