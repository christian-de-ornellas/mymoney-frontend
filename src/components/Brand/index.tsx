import React from 'react'
import { Link } from 'react-router-dom'
import { Heading } from '@chakra-ui/react'

const Brand: React.FC = (): JSX.Element => {
    return (
        <Link to="/">
            <Heading size="md" color="brand.50">
                My Money
            </Heading>
        </Link>
    )
}
export default Brand
