import React from 'react'
import {
    Menu,
    MenuButton,
    IconButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'

import {
    HamburgerIcon,
    AddIcon,
    ExternalLinkIcon,
    RepeatIcon,
    EditIcon,
} from '@chakra-ui/icons'

import { Link } from 'react-router-dom'

const Navbar: React.FC = (): JSX.Element => {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
            />
            <MenuList>
                <Link to="/revenues">
                    <MenuItem icon={<AddIcon />} command="⌘T">
                        Receitas
                    </MenuItem>
                </Link>
                <Link to="/payments">
                    <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                        Pagamentos
                    </MenuItem>
                </Link>
                <Link to="/investments">
                    <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                        Investimentos
                    </MenuItem>
                </Link>
                <Link to="/graphics">
                    <MenuItem icon={<EditIcon />} command="⌘O">
                        Gráficos
                    </MenuItem>
                </Link>
            </MenuList>
        </Menu>
    )
}

export default Navbar
