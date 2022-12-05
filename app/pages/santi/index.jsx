import React from 'react'
import {Center, Container, Box, Text, Link} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'

const Santi = () => {
    return (
        <Box>
            <Container>
                <Center py="10rem">
                    <Text>
                        Click me...{' '}
                        <Link color="teal.500" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            if you DARE <ExternalLinkIcon mx="2px" />
                        </Link>
                    </Text>
                </Center>
            </Container>
        </Box>
    )
}

export default Santi
