/* eslint-disable no-unused-vars */
//Authentication
// import logo from "../assets/logoChat.png";
import {
    Box,
    Container,
    Image,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
  } from "@chakra-ui/react";
  import { useNavigate } from "react-router-dom";
  import  Cookies  from 'js-cookie'; 
  import Login from "../components/Auth/Login";
  import SignUp from "../components/Auth/SignUp";
  import { useEffect } from "react";
  
  const Authentication = () => {
    const navigate = useNavigate();
  
    // Check if user is logged in using cookies
    useEffect(() => {
      const userInfo = Cookies.get('userInfo'); 
      if (userInfo) {
        navigate("/products");
      }
    }, [navigate]);
  
    return (
      <Container maxW={"lg"} p={'5'} centerContent>
        <Box
          bg="#FAFAFA"
          display="flex"
          justifyContent={"center"}
          p={3}
          width={"100%"}
          m={"40px 0 15px 0"}
          borderRadius={"lg"}
          borderWidth={"1px"}
          alignItems={"center"}
        >
          <Text>WanderOn</Text>
        </Box>
        <Box
          bg={"white"}
          w={"100%"}
          p={4}
          borderRadius={"lg"}
          borderWidth={"1px"}
        >
          <Tabs variant="soft-rounded">
            <TabList mb={"1em"}>
              <Tab w={"50%"}>Login</Tab>
              <Tab w={"50%"}>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login /> 
              </TabPanel>
              <TabPanel>
                <SignUp /> 
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    );
  };
  
  export default Authentication;