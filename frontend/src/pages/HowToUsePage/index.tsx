import { Box, Flex } from "@chakra-ui/react";
import HeaderComponent from "../../components/HeaderComponent";

export default function HowToUsePage() {
  return (
    <Box
      h={'100vh'}
    >
      <HeaderComponent />
      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        minH={'90%'}
        w={'100%'}
        px={'10%'}
        bg={'#f0f0f0'}
        gap={'40px'}
        py={'60px'}
      >
      </Flex>
    </Box>
  );
}