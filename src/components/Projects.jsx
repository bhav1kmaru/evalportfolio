import React from 'react'
import {LinkIcon} from '@chakra-ui/icons'
import {Box,SimpleGrid,Heading} from '@chakra-ui/react'
import ProjectCard from './ProjectCard'


const Projects = ({data,col}) => {
  return (
    <Box w='70%' m='auto'>
      <Heading>Projects</Heading>
        <SimpleGrid columns={col}>
            {data.items.map((item)=><ProjectCard key={item.id} name={item.name} language={item.language} forks={item.forks} stars={item.stargazers_count} url={item.svn_url} />)}
        </SimpleGrid>
    </Box>
  )
}

export default Projects

