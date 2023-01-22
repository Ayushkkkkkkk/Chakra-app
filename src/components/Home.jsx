import { Box, Container, Heading, Image, Stack , Text } from '@chakra-ui/react'
import { transform } from 'framer-motion';
import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

import imag1 from "../assets/1.jpg"
import imag2 from "../assets/2.jpg"
import imag3 from "../assets/3.jpg"
import imag4 from "../assets/4.jpg"
import imag5 from "../assets/5.png"

const headingOptions = {
    pos:"absolute",
    left : "50%",
    top :"50%",
    transform :'translate(-50% , -50%)',
    p:'4',
    size : "4xl"
}

const Home = () => {
  return <Box >
    <MyCarousel/>

    <Container maxW = {'container.xl'} minH={"100vh"} p = "16">
        <Heading textTransform={"uppercase"} py = "2" w={"fit-content"} borderBottom ={'2px solid'} m="auto">Services</Heading>

        <Stack
        h = "full"
        p = {"4"}
        alignItems = {"center"}
        direction = {['column' , 'row']}
        >

        </Stack>

        <Image src = {imag5} h = {["40" , "400"]} filter = {"hue-rotate(-130deg)"}/>

        <Text
        letterSpacing = {"widest"}
        lineHeight = {"190%"}
        p = {["4" , "16"]}
        textAlign = {"center"}
        
        
        >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis enim cum culpa praesentium, eaque reprehenderit alias neque. Voluptate nobis molestiae reprehenderit sit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, consectetur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem tempore dicta assumenda!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi totam ratione tenetur praesentium enim amet, soluta veniam excepturi maxime nam illo ut.
            Lorem ipsum dolor sit amet consectetur adipisicing.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus blanditiis optio atque dolore odio earum quibusdam neque adipisci suscipit nihil, incidunt commodi impedit, non quaerat aperiam doloribus et dolorem quo. Praesentium sequi pariatur atque esse ea natus veniam qui. Neque repellendus voluptatem architecto dolorum repellat voluptatum placeat quasi pariatur dolor voluptatibus. Voluptate nobis fugiat, odio eveniet, asperiores tenetur dolores possimus quidem ab a dolorum accusamus. Nostrum, corrupti maxime sed, laboriosam explicabo sequi inventore qui id, illum architecto doloremque enim beatae? Porro fugit dolores sequi excepturi exercitationem tempora sunt pariatur ratione.
        </Text>
    </Container>
  </Box>
}
const MyCarousel = ()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus = {false} showThumbs = {false} showArrows = {false}>

        <Box w = "full" h={"100vh"}>
            <Image src = {imag1}/>
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
                Watch the future
            </Heading>
        
        </Box>

        <Box w = "full" h={"100vh"}>
            <Image src = {imag2}/>
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
                Future is gaming
            </Heading>
        
        </Box>

        <Box w = "full" h={"100vh"}>
            <Image src = {imag3}/>
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
                Gaming on Console
            </Heading>
        
        </Box>

        <Box w = "full" h={"100vh"}>
            <Image src = {imag4}/>
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
                Nightlife
            </Heading>
        
        </Box>
    </Carousel>
    )

export default Home