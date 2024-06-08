import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import video from '../assets/video.mp4';
import { useNavigate } from 'react-router-dom';
export default function Homepage() {
  const navigate = useNavigate();
  const direction = useBreakpointValue({ base: 'column-reverse', md: 'row' });
  const handleLoginClick = () => {
    navigate('/auth');
  };

  const handleSignUpClick = () => {
    navigate('/auth');
  };
  return (
    <Stack minH={'100vh'} direction={direction}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}
            >
              Secure
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              User Authentication System
            </Text>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            A secure user authentication system with registration, login, and JWT generation. Use MongoDB for data storage, bcrypt for password hashing, and implement server-side data validation and input sanitization to prevent vulnerabilities like XSS and injection.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              onClick={handleLoginClick}
              _hover={{
                bg: 'blue.500',
              }}
            >
              Login
            </Button>
            <Button onClick={handleSignUpClick} rounded={'full'}>SignUp</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} align={'center'} justify={'center'} p={8}>
        <video
          width="100%"
          height="auto"
          controls
          autoPlay
          muted
          loop
          style={{ borderRadius: '15px', maxWidth: '600px', maxHeight: '400px' }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Flex>
    </Stack>
  );
}
