import React, { useState, useEffect } from 'react';
import {
  Image,
  Box,
  Flex,
  IconButton,
  Button,
  ButtonGroup,
  Drawer,
  Text,
  useColorMode,
  useColorModeValue,
  VStack, HStack, Spacer,
  useBreakpointValue,
  Radio, RadioGroup,
  Tab, Tabs, TabList, TabPanel, TabPanels,
  Slider, SliderTrack, SliderFilledTrack, SliderThumb,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';


const Home = () => {
  // Inputs
  const [peta, setPeta] = React.useState("0");
  const [petb, setPetb] = React.useState("0");
  const [petc, setPetc] = React.useState("0");
  const [petd, setPetd] = React.useState("0");
  const [mpete, setMpete] = React.useState("0");
  const [fpete, setFpete] = React.useState("0");
  // // Intermediate Values
  // const [petam, setPetam] = React.useState("0");
  // const [petbm, setPetbm] = React.useState("0");
  // const [petcm, setPetcm] = React.useState("0");
  // const [petdm, setPetdm] = React.useState("0");
  // const [adrenm, setAdrenm] = React.useState("0");
  // const [adrenm2, adrenm2 = ] = React.useState("0");
  // const [gonadm, setGonadm] = React.useState("0");
  // const [gonadm2, gonadm2 = ] = React.useState("0");

  const [petaf, setPetaf] = React.useState("0");
  const [petbf, setPetbf] = React.useState("0");
  const [petcf, setPetcf] = React.useState("0");
  const [petdf, setPetdf] = React.useState("0");
  const [adrenf, setAdrenf] = React.useState("0");
  const [adrenf2, setAdrenf2]= React.useState("0");
  const [gonadf, setGonadf] = React.useState("0");
  const [gonadf2, setGonadf2]= React.useState("0");
  //Result Values
  const [pdss, setPDSS] = React.useState("0");

  return (
   <Flex w="100vw" minH="100vh" pt="100px" bg="blue.200" justifyContent="center">
     <VStack w="100vw" maxW = "600px" bg="blue.300" py="15px">
        <Text as="b" fontSize="18px">
          Pubertal Development Scale
        </Text>
        <Text as="i" fontSize="14px" px="15px" textAlign="left" w="100%">
          This website will not save or share any of your answers.   
        </Text>

        <Text fontSize="16px" pt="30px"> 
         {/* textAlign="left" w="100%" px="15px"> */}
          What was your sex assigned at birth?
        </Text>
        <Tabs align="center" variant="solid-rounded" w="100%">
        <TabList mb="1em">
          <Tab>Male</Tab>
          <Tab>Female</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          {/* Male */}
          <Text fontSize="16px" pt="30px" align="left" w="100%"> 
          1. Would you say that your growth in height:
          </Text> 
          <Text fontSize="16px" pl="20px" py="20px" align="left" w="100%"> 
          1. has not yet begun to spurt ("spurt" means more growth than usual)
          <br/> 
          2. has barely started
          <br/>
          3. is definitely underway
          <br/>
          4. seems completed
          </Text>
          <RadioGroup colorScheme="blackAlpha"  onChange={setPeta} value={peta}>
            <HStack spacing="40px">
              <Radio value="1">1</Radio>
              <Radio value="2">2</Radio>
              <Radio value="3">3</Radio>
              <Radio value="4">4</Radio>
            </HStack>
          </RadioGroup>
          {/* 2. */}
          <Text fontSize="16px" pt="30px" align="left" w="100%"> 
          2. And how about the growth of body hair "body hair" means underarm and 
            pubic hair)? Would you say that your body hair has:
          </Text> 
          <Text fontSize="16px" pl="20px" py="20px" align="left" w="100%"> 
          1. not yet started growing<br/> 
          2. has barely started growing<br/>
          3. is definitely underway<br/>
          4. seems completed
          </Text>
          <RadioGroup colorScheme="blackAlpha"  onChange={setPetb} value={petb}>
            <HStack spacing="40px">
              <Radio value="1">1</Radio>
              <Radio value="2">2</Radio>
              <Radio value="3">3</Radio>
              <Radio value="4">4</Radio>
            </HStack>
          </RadioGroup>
          {/* 3. */}
          <Text fontSize="16px" pt="30px" align="left" w="100%"> 
          3. Have you noticed any skin changes, especially pimples?
          </Text> 
          <Text fontSize="16px" pl="20px" py="20px" align="left" w="100%"> 
          1. not yet started showing changes<br/> 
          2. have barely started showing changes<br/>
          3. skin changes are definitely underway<br/>
          4. skin changes seem completed
          </Text>
          <RadioGroup colorScheme="blackAlpha"  onChange={setPetc} value={petc}>
            <HStack spacing="40px">
              <Radio value="1">1</Radio>
              <Radio value="2">2</Radio>
              <Radio value="3">3</Radio>
              <Radio value="4">4</Radio>
            </HStack>
          </RadioGroup>
          {/* 4. */}
          <Text fontSize="16px" pt="30px" align="left" w="100%"> 
          4. Have you noticed a deepening of your voice?
          </Text> 
          <Text fontSize="16px" pl="20px" py="20px" align="left" w="100%"> 
          1. not yet started changing<br/>
          2. has barely started changing<br/>
          3. voice change is definitely underway<br/>
          4. voice change seems completed
          </Text>
          <RadioGroup colorScheme="blackAlpha"  onChange={setPetd} value={petd}>
            <HStack spacing="40px">
              <Radio value="1">1</Radio>
              <Radio value="2">2</Radio>
              <Radio value="3">3</Radio>
              <Radio value="4">4</Radio>
            </HStack>
          </RadioGroup>
          {/* 5. */}
          <Text fontSize="16px" pt="30px" align="left" w="100%"> 
          5. Have you begun to grow hair on your face?
          </Text> 
          <Text fontSize="16px" pl="20px" py="20px" align="left" w="100%"> 
          1. not yet started growing hair<br/>
          2. has barely started growing hair<br/>
          3. facial hair growth is definitely underway<br/>
          4. facial hair growth seems completed
          </Text>
          <RadioGroup colorScheme="blackAlpha"  onChange={setMpete} value={mpete}>
            <HStack spacing="40px">
              <Radio value="1">1</Radio>
              <Radio value="2">2</Radio>
              <Radio value="3">3</Radio>
              <Radio value="4">4</Radio>
            </HStack>
          </RadioGroup>


          <Button colorScheme="blue" onClick={() => {
            if(peta * petb * petc * petd * mpete == 0){
              alert("You forgot to fill out a bubble!");
            }
            else{
              // Calculations
              let petbm = (+petb > 2) ? +petb + 1 : +petb;
              let petcm = +petc;
                // setPetbm((+petb > 2) ? +petb + 1 : +petb); //1234 to 1245
                // setPetcm(+petc);
              let adrenm = petbm + petcm;
              let adrenm2 = 0;
                // setAdrenm(petbm + petcm); //using int
              switch(adrenm){
                case 2: //adrenm = 1 
                case 3: //adrenm = 1.5
                  adrenm2 = (petcm); //either 1 or 2
                  break;
                case 4: //adrenm = 2
                  adrenm2 = (2);
                  break;
                case 5: //adrenm = 2.5
                  adrenm2 = ((petbm == 4) ? 3 : 2); //=3 is petbm is 4, otherwise =2
                  break;
                case 6:
                  adrenm2 = (3);
                  break;
                case 7:
                case 8:
                  adrenm2 = (4);
                  break;
                case 9:
                case 10:
                  adrenm2 = (5);
                  break;
                default:
                  adrenm2 = (0);
                  break; //default case should be impossible
              }
              //End adrenm, start gonadm
              let petam = (+peta > 1) ? +peta + 1 : +peta;
              let petdm = (+petd > 2) ? +petd + 1 : +petd;
                // setPetam((+peta > 1) ? +peta + 1 : +peta); //1234 to 1345
                // setPetdm((+petd > 2) ? +petd + 1 : +petd); //1234 to 1235
              let gonadm = (petam + petdm);
                // setGonadm(petam + petdm);
              let gonadm2 = 0;
              
              if(gonadm == 2 && +mpete == 1) gonadm2 = (1);
              if(gonadm == 2 && +mpete > 1) gonadm2 = (2);
              if(gonadm == 3 && +mpete == 1) gonadm2 = (1);
              if(gonadm == 3 && +mpete > 1) gonadm2 = (2);
              if(gonadm == 4 && +mpete == 1 && petd == 1) gonadm2 = (1);
              if(gonadm == 4 && +mpete == 1 && petd > 1) gonadm2 = (2);
              if(gonadm == 4 && +mpete > 1) gonadm2 = (3);
              if(gonadm == 5 && +mpete == 1) gonadm2 = (2);
              if(gonadm == 5 && +mpete > 1) gonadm2 = (3);
              if(gonadm == 6) gonadm2 = (3);
              if(gonadm == 7 && +mpete == 1) gonadm2 = (4);
              if(gonadm == 7 && +mpete == 2) gonadm2 = (4);
              if(gonadm == 7 && +mpete > 2) gonadm2 = (5);
              if(gonadm == 8 && +mpete == 1) gonadm2 = (4);
              if(gonadm == 8 && +mpete == 2) gonadm2 = (4);
              if(gonadm == 8 && +mpete > 2) gonadm2 = (5);
              if(gonadm > 8) gonadm2 = (5);

              setPDSS((adrenm2 + gonadm2) / 2);
            }
          }}>
            Calculate!
          </Button>
          <Box>
            {(pdss == 0) ? "": "PDSS is " + pdss}
            {/* <br/>Adrenm2 is {adrenm2}
            <br/>Arenm is {adrenm}
            <br/>Gonadm2 is {gonadm2}
            <br/>Gonadm is {gonadm} */}
          </Box>        
          </TabPanel>
          <TabPanel>
            {/* <p>two!</p> */}
          </TabPanel>
        </TabPanels>
      </Tabs>
     </VStack>
   </Flex>
  );
}

export default Home;
