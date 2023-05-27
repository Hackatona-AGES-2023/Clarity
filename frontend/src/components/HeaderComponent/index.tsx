import { Button, Flex, Text } from "@chakra-ui/react";

export default function HeaderComponent() {
  return (
    <Flex
      boxShadow={'0 0 3px rgba(0,0,0,0.5)'}
      zIndex={1}
      h={'10%'}
      gap={'40px'}
    >
      <Flex
        alignItems={'center'}
        pl={'20px'}
      >
        <Text
          fontSize={'1.5rem'}
          fontWeight={'bold'}
        >
          {'Clarity'}
        </Text>
      </Flex>
      <Flex
        flex={1}
        gap={'2%'}
        alignItems={'center'}
      >
        <Button
          variant={'unstyled'}
        >
          {'Como usar?'}
        </Button>
        <Button
          variant={'unstyled'}
        >
          {'Tradutor'}
        </Button>
      </Flex>
    </Flex>
  )
}