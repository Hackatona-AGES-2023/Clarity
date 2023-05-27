import { Button, Flex, Image, Text } from "@chakra-ui/react";
import Group from "../../assets/icons/Group.svg";
import { useNavigate } from "react-router-dom";

export default function HeaderComponent() {
  const navigate = useNavigate()

  return (
    <Flex
      boxShadow={'0 0 3px rgba(0,0,0,0.5)'}
      zIndex={1}
      h={'10%'}
      gap={'50px'}
    >
      <Flex
        alignItems={'center'}
        pl={'20px'}
        gap={'8%'}
      >
        <Image src={Group} />
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
  )
}