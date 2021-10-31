import React from 'react'
import { Flex, HStack } from '@chakra-ui/react'
import Navbar from '../Navbar'
import DarkModeToggle from '../DarkModeToggle'
import Profile from '../Profile'
import Brand from '../Brand'

const Header: React.FC = (): JSX.Element => {
    return (
        <Flex alignItems="center" justifyContent="space-between">
            <HStack alignItems="center" spacing={4}>
                <Navbar />
                <Brand />
            </HStack>
            <HStack alignItems="center" spacing={4}>
                <DarkModeToggle />
                <Profile />
            </HStack>
        </Flex>
    )
}
export default Header
