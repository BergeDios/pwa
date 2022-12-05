import {Center, Container, Text} from '@chakra-ui/react'
import React from 'react'

const Eliseo = () => {
    return (
        <Container>
            <Center py="10rem">
                <Text
                    fontSize="5rem"
                    border="2px"
                    borderColor="grey"
                    p="5"
                    boxShadow="2xl"
                    borderRadius="2xl"
                >
                    La Pagina de Eliseo!
                </Text>
            </Center>
        </Container>
    )
}

export default Eliseo
