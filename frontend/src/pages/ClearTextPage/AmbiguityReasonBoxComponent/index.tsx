import { Box, Flex, Text, Textarea } from "@chakra-ui/react";
export default function AmbiguityReasonBoxComponent() {
  return (
    <Box
      // flex={1}
      bg={'#FFFFFF'}
      // h={'200px'}
      w={'100%'}
      borderRadius={8}
      boxShadow={'0 0 3px rgba(0,0,0,0.5)'}
      zIndex={1}
      fontWeight={'bold'}
      fontSize={'1.15rem'}
    >
      <Flex
        pl={'20px'}
        flex={1}
        alignItems={'center'}
        borderBottom={'1px'}
        h={'75px'}
        borderColor={'#CCC'}
      >
        <Text>
          {'Razão da ambiguidade'}
        </Text>
      </Flex>

      <Textarea
        isDisabled
        flex={1}
        h={'125px'}

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
    </Box>

  )
}
