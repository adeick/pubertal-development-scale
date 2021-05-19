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
  const [pds_adrenal, setPDSAdrenal] = React.useState("0");
  const [pds_gonadal, setPDSGonadal] = React.useState("0");

  return (
   <Flex w="100vw" minH="100vh" pt="50px" bg="gray.50" justifyContent="center">
     <VStack w="100vw" maxW = "600px" py="5px">
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
          <Text as="b"><Text fontSize="16px" textAlign="left" w="100%"> 
          1. Would you say that your growth in height:
          </Text></Text>
          <RadioGroup colorScheme="blackAlpha"  onChange={setPeta} value={peta}>
            <VStack spacing="0px" px="15px" alignItems="left">
              <Radio value="1"> has not yet begun to spurt ("spurt" means more growth than usual)</Radio>
              <Radio value="2"> has barely started</Radio>
              <Radio value="3"> is definitely underway</Radio>
              <Radio value="4"> seems completed</Radio>
            </VStack>
          </RadioGroup>
          {/* 2. */}
          <Text as="b"><Text fontSize="16px" pt="30px" align="left" w="100%"> 
          2. And how about the growth of body hair ("body hair" means underarm and 
            pubic hair)? Would you say that your body hair has:
          </Text></Text>
          <RadioGroup colorScheme="blackAlpha"  onChange={setPetb} value={petb}>
            <VStack spacing="0px" px="15px" alignItems="left">
              <Radio value="1">not yet started growing</Radio>
              <Radio value="2">has barely started growing</Radio>
              <Radio value="3">is definitely underway</Radio>
              <Radio value="4">seems completed</Radio>
            </VStack>
          </RadioGroup>
          {/* 3. */}
          <Text as="b"><Text fontSize="16px" pt="30px" align="left" w="100%"> 
          3. Have you noticed any skin changes, especially pimples?
          </Text></Text>
          <RadioGroup colorScheme="blackAlpha"  onChange={setPetc} value={petc}>
            <VStack spacing="0px" px="15px" alignItems="left">
              <Radio value="1">not yet started showing changes</Radio>
              <Radio value="2">have barely started showing changes</Radio>
              <Radio value="3">skin changes are definitely underway</Radio>
              <Radio value="4">skin changes seem completed</Radio>
            </VStack>
          </RadioGroup>
          {/* 4. */}
          <Text as="b"><Text fontSize="16px" pt="30px" align="left" w="100%"> 
          4. Have you noticed a deepening of your voice?
          </Text></Text>
          <RadioGroup colorScheme="blackAlpha"  onChange={setPetd} value={petd}>
            <VStack spacing="0px" px="15px" alignItems="left">
              <Radio value="1">not yet started changing</Radio>
              <Radio value="2">has barely started changing</Radio>
              <Radio value="3">voice change is definitely underway</Radio>
              <Radio value="4">voice change seems completed</Radio>
            </VStack>
          </RadioGroup>
          {/* 5. */}
          <Text as="b"><Text fontSize="16px" pt="30px" align="left" w="100%"> 
          5. Have you begun to grow hair on your face?
          </Text></Text>
          <RadioGroup colorScheme="blackAlpha"  onChange={setMpete} value={mpete}>
            <VStack spacing="0px" px="15px" alignItems="left">
              <Radio value="1">not yet started growing hair</Radio>
              <Radio value="2">has barely started growing hair</Radio>
              <Radio value="3">facial hair growth is definitely underway</Radio>
              <Radio value="4">facial hair growth seems completed</Radio>
            </VStack>
          </RadioGroup>


          <Button my="20px" colorScheme="blue" onClick={() => {
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
              
              if(adrenm2 * gonadm2 != 0){                
              setPDSS((adrenm2 + gonadm2) / 2);
              setPDSAdrenal(adrenm2);
              setPDSGonadal(gonadm2);
              }
              else{
                alert("Error! Code 3");
              }
            }
          }}>
            Calculate!
          </Button>
          <Box>
            {(pdss == 0) ? "": <>{"PDSS is " + pdss}<br/></>}
            {(pds_adrenal == 0) ? "": <>{"PDS-adrenal is " + pds_adrenal}<br/></>}
            {(pds_gonadal == 0) ? "": <>{"PDS-gonadal is " + pds_gonadal}<br/></>}
          </Box>        
          </TabPanel>


          <TabPanel>
          {/* Female */}
          <Text as="b"><Text fontSize="16px" align="left" w="100%"> 
          1. Would you say that your growth in height:
          </Text></Text>
          <RadioGroup colorScheme="blackAlpha"  onChange={setPeta} value={peta}>
            <VStack spacing="0px" px="15px" alignItems="left">
              <Radio value="1">has not yet begun to spurt ("spurt" means more growth than usual)</Radio>
              <Radio value="2">has barely started</Radio>
              <Radio value="3">is definitely underway</Radio>
              <Radio value="4">seems completed</Radio>
            </VStack>
          </RadioGroup>
          {/* 2. */}
          <Text as="b"><Text fontSize="16px" pt="30px" align="left" w="100%"> 
          2. And how about the growth of body hair ("body hair" means underarm and 
            pubic hair)? Would you say that your body hair has:
          </Text></Text>
          <RadioGroup colorScheme="blackAlpha"  onChange={setPetb} value={petb}>
            <VStack spacing="0px" px="15px" alignItems="left">
              <Radio value="1">not yet started growing</Radio>
              <Radio value="2">has barely started growing</Radio>
              <Radio value="3">is definitely underway</Radio>
              <Radio value="4">seems completed</Radio>
            </VStack>
          </RadioGroup>
          {/* 3. */}
          <Text as="b"><Text fontSize="16px" pt="30px" align="left" w="100%"> 
          3. Have you noticed any skin changes, especially pimples?
          </Text></Text>
          <RadioGroup colorScheme="blackAlpha"  onChange={setPetc} value={petc}>
            <VStack spacing="0px" px="15px" alignItems="left">
              <Radio value="1">not yet started showing changes</Radio>
              <Radio value="2">have barely started showing changes</Radio>
              <Radio value="3">skin changes are definitely underway</Radio>
              <Radio value="4">skin changes seem completed</Radio>
            </VStack>
          </RadioGroup>
          {/* 4. */}
          <Text as="b"><Text fontSize="16px" pt="30px" align="left" w="100%"> 
          4. Have your breasts begun to grow?
          </Text></Text>
          <RadioGroup colorScheme="blackAlpha"  onChange={setPetd} value={petd}>
            <VStack spacing="0px" px="15px" alignItems="left">
              <Radio value="1">not yet started growing</Radio>
              <Radio value="2">have barely started changes</Radio>
              <Radio value="3">breast growth is definitely underway</Radio>
              <Radio value="4">breast growth seems completed</Radio>
            </VStack>
          </RadioGroup>
          {/* 5. */}
          <Text as="b"><Text fontSize="16px" pt="30px" align="left" w="100%"> 
          5. Have you begun to menstruate?
          </Text></Text>
          <RadioGroup colorScheme="blackAlpha"  onChange={setFpete} value={fpete}>
            <VStack spacing="0px" px="15px" alignItems="left">
              <Radio value="1"> no</Radio>
              <Radio value="2"> yes</Radio>
            </VStack>
          </RadioGroup>


          <Button colorScheme="blue" onClick={() => {
            if(peta * petb * petc * petd * fpete == 0){
              alert("You forgot to fill out a bubble!");
            }
            else{
              // Calculations
              let petbf = (+petb > 2) ? +petb + 1 : +petb; //1234 to 1245
              let petcf = (+petc > 2) ? +petc + 1 : +petc; //1234 to 1245
               
              let adrenf = (petbf + petcf) / 2;
              let adrenf2 = 0;
              if(Math.abs(adrenf - 1.5) < 0.001){ //basically if adrenf == 1.5
                adrenf2 = +petb; //either 1 or 2
              }
              else{
                adrenf2 = Math.ceil(adrenf);
              }
              //End adrenf, start gonadf
              let petaf = (+peta > 3) ? +peta + 1 : +peta; //1234 to 1235
              let petdf = (+petd > 1) ? +petd + 1 : +petd; //1234 to 1345
              let petef = (+fpete == 1) ? 1 : 5;

              let gonadf = (petaf + petdf);
              let gonadf2 = 0;
              if(petef == 1){
                switch(gonadf){
                  case 2: //gonadf is 1
                  case 3: //gonadf is 1.5
                    gonadf2 = 1;
                    break;
                  case 4: //gonadf is 2
                  case 5: //gonadf is 2.5
                    gonadf2 = 2;
                    break;
                  case 6:
                  case 7:
                  case 8:
                    gonadf2 = 3;
                    break;
                  case 9:
                  case 10:
                    gonadf2 = 4;
                    break;
                  default: 
                    gonadf2 = 0; //impossible
                    break;
                }
              }
              else if(petef == 5){
               switch(gonadf){
                  case 2: //gonadf is 1
                    gonadf2 = 2;
                    break;
                  case 3: //gonadf is 1.5
                    gonadf2 = 3;
                    break;
                  case 4: //gonadf is 2
                  case 5: //gonadf is 2.5
                  case 6:
                    gonadf2 = 4;
                    break;
                  case 7:
                  case 8:
                  case 9:
                  case 10:
                    gonadf2 = 5;
                    break;
                  default: 
                    gonadf2 = 0; //impossible
                    break;
                }
              }
              else{
                //error
                alert("Error! Code 2");
                gonadf2 = 0;
              }
              if(adrenf2 * gonadf2 != 0){
              setPDSS((adrenf2 + gonadf2) / 2);
              setPDSAdrenal(adrenf2);
              setPDSGonadal(gonadf2);
              }
              else{
                alert("Error! Code 1")
              }
            }
          }}>
            Calculate!
          </Button>
          <Box>
            {(pdss == 0) ? "": <>{"PDSS is " + pdss}<br/></>}
            {(pds_adrenal == 0) ? "": <>{"PDS-adrenal is " + pds_adrenal}<br/></>}
            {(pds_gonadal == 0) ? "": <>{"PDS-gonadal is " + pds_gonadal}<br/></>}
          </Box>    
          </TabPanel>
        </TabPanels>
      </Tabs>
     </VStack>
   </Flex>
  );
}

export default Home;
