//login

/* eslint-disable no-unused-vars */
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    VStack,
    useToast,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import axios from 'axios';
  import { useNavigate } from 'react-router-dom';
  import Cookies from 'js-cookie';
import { useAuth } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/vars";
  
  const Login = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();
    const { setIsLoggedIn } = useAuth();
  
    async function submitHandler() {
      setLoading(true);
      if (!email || !password) {
        toast({
          title: 'Please Fill all the Fields!',
          status: 'warning',
          duration: 5000,
          isClosable: true,
          position: "bottom"
        });
        setLoading(false);
        return;
      }
    
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true 
        };
        const { data } = await axios.post(`${BASE_URL}/api/users/login`, { email, password }, config);
        toast({
          title: 'Login Successful!',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: "bottom"
        });
        Cookies.set('userInfo', JSON.stringify(data), { expires: 1 });
        // Cookies.set('userDetails', JSON.stringify(data), { expires: 1 });
        // console.log(data);
        setLoading(false);
        navigate("/products");
        setIsLoggedIn(true)
      } catch (error) {
        console.log(error);
        toast({
          title: 'Error Occurred!',
          description: error.response.data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: "bottom"
        });
        setLoading(false);
      }
    }
    
  
    return (
      <VStack spacing={"5px"} color={"black"}>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement w={"4.5rem"}>
              <Button h={"1.75rem"} size={"sm"} onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
  
        <Button
          colorScheme="blue"
          w={"100%"}
          style={{ marginTop: 15 }}
          onClick={submitHandler}
          isLoading={loading}
        >
          Login
        </Button>
        <Button
          variant={"solid"}
          colorScheme="red"
          w={"100%"}
          style={{ marginTop: 15 }}
          onClick={() => {
            setEmail("test3@example.com"), setPassword("password123");
          }}
        >
          Get Guest User Credentials
        </Button>
      </VStack>
    );
  };
  
  export default Login;