import { Flex,Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <Flex w='80%' m='auto' justifyContent='space-around'>
        <Link href='/'><Heading>Home</Heading></Link>
        <Link href='/projects'><Heading>Projects</Heading></Link>
    </Flex>
  )
}

export default Navbar