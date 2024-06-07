//about
// import React from 'react';
import { Box, Flex, Heading, Text, Stack, Avatar, useColorModeValue } from '@chakra-ui/react';

export const About = () => {
  return (
    <Flex
      align={'center'}
      justify={'center'}
      py={12}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Box
        maxW={'3xl'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Stack spacing={6}>
          <Box>
            <Heading
              fontSize={'3xl'}
              color={'black'}
              textAlign={'center'}
            >
               User Authentication System
            </Heading>
          </Box>
          <Box>
            <Heading fontSize={'xl'} color={'blue.400'}>
              About This Project
            </Heading>
            <Text mt={4} color={'gray.600'}>
              This project demonstrates a secure user authentication system with user registration, login functionalities, and adherence to industry standards. It ensures secure password storage, JWT-based authentication, and proper data validation to maintain data integrity.
            </Text>
          </Box>
          <Box>
            <Heading fontSize={'xl'} color={'blue.400'}>
              Developer Info
            </Heading>
            <Flex mt={4} align={'center'}>
              <Avatar
                size={'xl'}
                src={'https://avatars.githubusercontent.com/u/98681520?v=4'}
                alt={'Developer'}
                mr={4}
              />
              <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Text fontWeight={600}>Aman Chaubey</Text>
                <Text color={'gray.600'}>Full-Stack Developer</Text>
                <Text color={'gray.600'}>amanchaubey86@gmail.com</Text>
              </Stack>
            </Flex>
          </Box>
          <Box>
            <Heading fontSize={'xl'} color={'blue.400'}>
              Technologies Used
            </Heading>
            <Text mt={4} color={'gray.600'}>
              The backend is built using Node.js and Express, with MongoDB for data storage. Passwords are hashed using bcrypt, and JWT is used for authentication. The frontend is created with React and styled using Chakra UI.
            </Text>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

