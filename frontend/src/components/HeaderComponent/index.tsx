import { Button, Flex, Image, Text } from "@chakra-ui/react";
import Group from "../../assets/icons/Group.svg";
import { useNavigate } from "react-router-dom";
import { FiDownload } from "react-icons/fi";

export default function HeaderComponent() {
  const navigate = useNavigate()

  return (
    <Flex
      boxShadow={'0 0 3px rgba(0,0,0,0.5)'}
      zIndex={1}
      w={'100%'}
      bg={'#FFF'}
      h={'10%'}
    >
      <Flex
        w={'50%'}
        gap={'50px'}
      >
        <Flex
          alignItems={'center'}
          pl={'20px'}
          gap={'8%'}
        >
          <Image src={Group} color={'#3F72AF'} />
          <Text
            fontSize={'1.5rem'}
            fontWeight={'bold'}
            color={'#3F72AF'}
          >
            {'Clarity'}
          </Text>
        </Flex>
        <Flex
          flex={1}
          gap={'4%'}
          alignItems={'center'}
        >
          <Button
            variant={'unstyled'}
            onClick={() => navigate('/')}
          >
            {'Como usar?'}
          </Button>
          <Button
            variant={'unstyled'}
            onClick={() => navigate('/translate')}
          >
            {'Tradutor'}
          </Button>
        </Flex>

      </Flex>
      <Flex
        w={'50%'}
        justifyContent={'flex-end'}
        alignItems={'center'}
        pr={'20px'}
      >
        <Button
          color={'#3F72AF'}
          rightIcon={<FiDownload />}
          variant={"solid"}
          bg={'#FFF'}
        >
          {'Instalar extensão'}
        </Button>
      </Flex>
    </Flex>
  )
}