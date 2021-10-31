import React from 'react'
import { Flex, HStack, Text } from '@chakra-ui/react'

const Footer: React.FC = (): JSX.Element => {
    return (
        <Flex alignItems="center" justifyContent="space-between">
            <HStack>
                <Text fontSize="xs">My Money Software</Text>
            </HStack>
            <HStack>
                <Text fontSize="xs">Version 1.0</Text>
            </HStack>
            <HStack>
                <Text fontSize="xs">by Christian Possidonio</Text>
            </HStack>
        </Flex>
    )
}

export default Footer
