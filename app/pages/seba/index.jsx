import {Center, Container, Text} from '@chakra-ui/react'
import React from 'react'

const Seba = () => {
    return (
        <Container>
            <Center py="10rem">
                <Text
                    fontSize="3rem"
                    border="2px"
                    borderColor="grey"
                    p="5"
                    boxShadow="2xl"
                    borderRadius="2xl"
                >
                    Hello World! (done by Sebastian Sosa®)
                </Text>
            </Center>
        </Container>
    )
}

export default Seba
