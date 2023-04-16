import { Switch, useColorMode, Text } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Switch
        size="md"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark Mode</Text>
    </>
  );
};

export default ColorModeSwitch;
