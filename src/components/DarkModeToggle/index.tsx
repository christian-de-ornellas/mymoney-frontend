import React, { useEffect, useState } from 'react'
import { Button, useColorMode } from '@chakra-ui/react'

const DarkModeToggle: React.FC = (): JSX.Element => {
    const { toggleColorMode } = useColorMode()
    const [titleButton, setTitleButton] = useState<string>('')

    const handleTitleButton = () => {
        const isDark = localStorage.getItem('chakra-ui-color-mode')
        return isDark === 'dark'
            ? setTitleButton('Noite')
            : setTitleButton('Dia')
    }

    const handleDarkMode = () => {
        toggleColorMode()
        handleTitleButton()
    }

    useEffect(() => {
        handleTitleButton()
    }, [titleButton])

    return (
        <Button colorScheme="green" onClick={handleDarkMode}>
            {titleButton}
        </Button>
    )
}
export default DarkModeToggle
