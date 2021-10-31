import React from 'react'
import {
    Wrap,
    WrapItem,
    Avatar,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody,
    Button,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Profile: React.FC = (): JSX.Element => {
    return (
        <Popover>
            <PopoverTrigger>
                <Wrap>
                    <WrapItem>
                        <Avatar
                            name="Christian Possidonio"
                            src="https://media-exp1.licdn.com/dms/image/C4E03AQEv4HaZyZGbGg/profile-displayphoto-shrink_200_200/0/1620373192164?e=1636588800&v=beta&t=wprtufbdovBd1Nr_7xSnIdLhkiZ43aZvLsOacM3Pzwk"
                        />
                    </WrapItem>
                </Wrap>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Christian Possidonio</PopoverHeader>
                <PopoverBody>
                    <Link to="/edit?id=1">
                        <Button colorScheme="brand" size="xs">
                            Editar
                        </Button>
                    </Link>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default Profile
