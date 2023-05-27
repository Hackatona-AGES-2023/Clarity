import { Box, Button, Flex, Text, Textarea } from "@chakra-ui/react";
import { getIAResponse } from "../../../services/api";
import { useState } from "react";

export default function TranslateInputBoxComponent(props: any) {
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("");

  const traduzir = () => {
    setValue("Convertendo...")
    getIAResponse(props.isGPT, message).then((data) => { setValue(data.data.data.response); console.log(data.data.data.response) });
  }

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
        <Flex
          flex={1}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text
            pl={'20px'}
          >
            {'Inserir texto'}
          </Text>
          <Button
            color={'#FFF'}
            zIndex={1}
            bg={'#3F72AF'}
            variant={'solid'}
            onClick={() => traduzir()}
          >
            {'Converter'}
          </Button>
        </Flex>
        <Text
          pl={'20px'}
          flex={1}
        >
          {'Texto convertido'}
        </Text>
      </Flex>
      <Flex
        h={'425px'}
      >
        <Textarea
          onChange={(e) => setMessage(e.target.value)}
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
          _disabled={{ opacity: 1 }}
        />
        <Box
          w={'1px'}
          bg={'#CCC'}
          alignSelf={'stretch'}
        />
        <Textarea
          value={value}
          isDisabled
          flex={1}
          pl={'20px'}
          pt={'20px'}
          pr={'20px'}
          variant={'unstyled'}
          placeholder={'Texto traduzido...'}
          resize={'none'}
          // value={question_request}
          _placeholder={{ color: '#aaa' }}
          _focus={{
            // boxShadow: `0 0 4px 1px #585858`,
            borderColor: '#CCC'
          }}
          borderRadius={0}
          _disabled={{ opacity: 1 }}
        />
      </Flex>
    </Box>
  )
}