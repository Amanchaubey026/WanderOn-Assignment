/* eslint-disable react/prop-types */
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  useToast,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ProfileModal from "./miscellaneous/ProfileModal";
import { useEffect, useState } from "react";

const Links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Product", path: "/products" },
];

const NavLink = ({ children, to, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <RouterLink to={to} onClick={onClick}>
      <Box
        px={2}
        py={1}
        rounded={"md"}
        textDecoration={isActive ? "underline" : "none"}
        _hover={{
          textDecoration: "underline",
          bg: useColorModeValue("blue.400", "blue.700"),
          color: "white",
        }}
      >
        {children}
      </Box>
    </RouterLink>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();
  const [userDetails, setUserDetails] = useState(() => {
    const storedDetails = localStorage.getItem('userDetails');
    return storedDetails ? JSON.parse(storedDetails) : null;
  });

  useEffect(() => {
    const storedDetails = localStorage.getItem('userDetails');
    if (storedDetails) {
      setUserDetails(JSON.parse(storedDetails));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedDetails = localStorage.getItem('userDetails');
      if (storedDetails) {
        setUserDetails(JSON.parse(storedDetails));
      } else {
        setUserDetails(null);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = async () => {
    await logout();
    toast({
      title: "Logout Successful!",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
    navigate('/auth');
  };

  const handleProductsClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      toast({
        title: "Please Log In First!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      navigate('/auth');
    }
  };

  return (
    <>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        px={4}
        position="sticky"
        top="0"
        zIndex="10"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <RouterLink to="/">
                <Image
                  w={16}
                  src="https://wanderon.in/_next/image?url=https%3A%2F%2Fimages.wanderon.in%2Fthe-logo&w=1920&q=75"
                />
              </RouterLink>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={link.name === "Product" ? handleProductsClick : null}
                >
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {isLoggedIn && (
              <Button onClick={handleLogout} variant="link" mr={4}>
                Logout
              </Button>
            )}
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                <Avatar
                  size={"sm"}
                  cursor={"pointer"}
                  src={
                    userDetails && userDetails.pic
                      ? userDetails.pic
                      : "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                  }
                />
              </MenuButton>
              <MenuList>
                {isLoggedIn && userDetails && (
                  <ProfileModal user={userDetails}>
                    <MenuItem>My Profile</MenuItem>
                  </ProfileModal>
                )}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} to={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
