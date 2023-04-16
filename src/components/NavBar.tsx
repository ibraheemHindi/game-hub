import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} boxSize={{ base: "50px", lg: "100px" }} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
