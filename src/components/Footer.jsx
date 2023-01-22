import { Box, Button, Heading, HStack, Input, Stack, VStack , Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'
const Footer = () => {
  return <Box bgColor={"blackAlpha.900"} minH={"40"} p = "16" color={"white"}>
    <Stack direction={["column" , "row"]}>

    <VStack alignItems={'stretch'} w = {'full'} px = {"4"}>
        <Heading size="md" textTransform={'uppercase'} textAlign = {['center' , 'left']}>
            Subscribe to get updated
        </Heading>
        <HStack
        borderBottom={"2px solid white"}
        py = "2"
        
        
        
        >

            <Input placeholder='Enter email here...' border={"none"} borderRadius = "none" outline = {"none"} focusBorderColor = "none"/>
            <Button
            p={0}
            colorScheme = {"purple"}
            variant = {"ghost"}
            borderRadius = {'0 20px 20px 0'}
            
            
            >
                <AiOutlineSend size={20}/>
            </Button>
        </HStack>
    </VStack>

    <VStack w = {'full'}
    borderLeft = {['none' , '1px solid white']}
    borderRight = {['none' , '1px solid white']}
    >
        <Heading size = {"md"} textTransform = {'uppercase'} textAlign = {'center'}>
            Ayush_sccg
        </Heading>
        <Text>All rights received</Text>
    </VStack>


    <VStack w = {'full'}
    >
        <Heading size={"md"} textTransform = {'uppercase'}>
            Social Media
            <Button variant={"link"} colorScheme = {"whiteAlpha"}>
                <a target = {"blank"}href='https://www.youtube.com/channel/UCQOfTH1sDOJyC6v_7iOvCNw'>
                        Youtube
                </a>
            </Button>

            <Button variant={"link"} colorScheme = {"whiteAlpha"}>
                <a target = {"blank"}href='https://www.facebook.com/profile.php?id=100012381131101'>
                        Facebook
                </a>
            </Button>

            <Button variant={"link"} colorScheme = {"whiteAlpha"}>
                <a target = {"blank"}href='https://github.com/Ayushkkkkkkk'>
                        Github
                </a>
            </Button>
        </Heading>
    </VStack>

    </Stack>
  </Box>
}

export default Footer