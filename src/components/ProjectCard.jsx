import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import {LinkIcon} from '@chakra-ui/icons'

export default function ProjectCard({name,language,stars,forks,url}) {
  return (
    <Box py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
             <a href={url}><LinkIcon /> {name}</a>
            </Heading>
            <Text color={'gray.500'}>{language}</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{forks}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Forks
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{stars}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Stars
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}