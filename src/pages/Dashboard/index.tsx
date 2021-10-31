import React from 'react'
import { Heading, Flex } from '@chakra-ui/react'

const Dashboard: React.FC = (): JSX.Element => {
    return (
        <Flex alignItems="center" direction="column">
            <Heading mb={10}>Dashboard</Heading>
        </Flex>
    )
}

export default Dashboard
