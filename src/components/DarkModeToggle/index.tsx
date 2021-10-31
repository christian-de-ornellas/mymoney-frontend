import React, { useState } from 'react'
import { Button, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const DarkModeToggle: React.FC = (): JSX.Element => {
    const { toggleColorMode } = useColorMode()
    const [titleButton, setTitleButton] = useState<string>('')

    const handleTitleButton = () => {
        const isDark = localStorage.getItem('chakra-ui-color-mode')
        return isDark === 'dark'
            ? setTitleButton('Dia')
            : setTitleButton('Noite')
    }

    const handleDarkMode = () => {
        toggleColorMode()
        handleTitleButton()
    }

    return (
        <Button onClick={handleDarkMode}>
            {titleButton === 'Noite' ? <MoonIcon /> : <SunIcon />}
        </Button>
    )
}
export default DarkModeToggle
