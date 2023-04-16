import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={{ base: "50px", lg: "100px" }} />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
