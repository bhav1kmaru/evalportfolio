import React from 'react'
import {Box,Badge,Heading,SimpleGrid} from '@chakra-ui/react'

const TechStack = () => {
  return (
    <Box w='30%'>
    <Heading>Tech Stack</Heading>
    <SimpleGrid columns={2} spacing={2}>
        
         <Badge>ReactJS</Badge>
        <Badge>TypeScript</Badge>
        <Badge>JavaScript</Badge>
        <Badge>Next.js</Badge>
        <Badge>HTML</Badge>
        <Badge>CSS</Badge>
        <Badge>MUI</Badge>
        <Badge>Chakra-UI</Badge>
        <Badge>MongoDB</Badge>
        <Badge>Express</Badge>
    </SimpleGrid>
    </Box>
  )
}

export default TechStack