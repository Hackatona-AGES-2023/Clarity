import { Box, Flex, Text, Textarea } from "@chakra-ui/react";

export default function TranslateInputBoxComponent() {
  return (
    <Box
      // flex={1}
      bg={'#FFFFFF'}
      h={'500px'}
      w={'100%'}

      borderRadius={8}
      boxShadow={'0 0 3px rgba(0,0,0,0.5)'}
      zIndex={1}
    >
      <Flex
        borderBottom={'1px'}
        borderColor={'#CCC'}
        h={'75px'}
        alignItems={'center'}
        fontWeight={'bold'}
        fontSize={'1.15rem'}
      >
        <Text
          pl={'20px'}
          flex={1}
        >
          {'Inserir texto'}
        </Text>
        <Text
          pl={'20px'}
          flex={1}
        >
          {'Texto traduzido'}
        </Text>
      </Flex>
      <Flex
        h={'425px'}
      >
        <Textarea
          flex={1}
          pl={'20px'}
          pt={'20px'}
          variant={'unstyled'}
          placeholder={'Escreva o texto aqui...'}
          resize={'none'}
          _placeholder={{ color: '#aaa' }}
          _focus={{
            // boxShadow: `0 0 4px 1px #585858`,
            borderColor: '#CCC'
          }}
          borderRadius={0}
        />
        <Box
          w={'1px'}
          bg={'#CCC'}
          alignSelf={'stretch'}
        />
        <Textarea
          isDisabled
          flex={1}
          pl={'20px'}
          pt={'20px'}
          variant={'unstyled'}
          placeholder={'Texto traduzido'}
          resize={'none'}
          _placeholder={{ color: '#aaa' }}
          _focus={{
            // boxShadow: `0 0 4px 1px #585858`,
            borderColor: '#CCC'
          }}
          borderRadius={0}
        />
      </Flex>
    </Box>
  )
}