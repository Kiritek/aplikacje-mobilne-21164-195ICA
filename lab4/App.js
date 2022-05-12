import React from "react";
import {Text,Link,HStack,Center,Heading,Input,FormControl,View,Collapse,Alert,CloseIcon,IconButton,Switch,Modal,useColorMode,NativeBaseProvider,extendTheme,Button,VStack,Box,Select,CheckIcon} from "native-base";
import DateTimePicker from '@react-native-community/datetimepicker';
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform, SafeAreaView, TextInput} from "react-native";
import styles from './styles';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

 const NameInput = () => {
    const [firstName, setFirstName] = React.useState("First Name");
    const [secondName, setSecondName] = React.useState("Second Name")

     return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={setFirstName}
          value={firstName}
        />
        <TextInput
          style={styles.input}
          onChangeText={setSecondName}
          value={secondName}
        />
        <Text

        style={{textAlign: 'center'}}>{firstName}  {secondName}</Text>
      </SafeAreaView>
    );
  };
const ModalRandom = () => {
  const [showModal, setShowModal] = React.useState(false);
  return <Center>
      <HStack space={2} alignItems="center">
        <Text>Off</Text>
        <Switch
          isChecked={showModal}
          onValueChange={() => setShowModal(!showModal)}
          aria-label={
            showModal === "true" ? "pokaz modal" : "wylacz modal"
          }
        />
        <Text>On</Text>
      </HStack>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Random Number</Modal.Header>
          <Modal.Body>
          {randomNumber(0, 500)}
          </Modal.Body>
          <Modal.Footer>
              <Button onPress={() => {
              setShowModal(false)
            }}>
                ok
              </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>;
};


const regionList = ['Africa','Europe','Oceania'];
const Europe = ['Poland','Germany','Czechia','France','Slovakia'];
const Africa = ['Morroco','Egypt','Sudan','Kongo','Guyana'];
const Oceania = ['New Zeeland', 'Australia','Fiji', 'Samoa', 'Tonga']

const TwoSelectors = () => {
  const [region, setRegion] = React.useState("Africa");
  const [country, setCountry] = React.useState("");

  return( <Center>
      <Box w="3/4" maxW="300">
        <Select selectedValue={region} minWidth="200" accessibilityLabel="Pick Region" placeholder="Pick Region" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1}
        onValueChange={itemValue => setRegion(itemValue)}>
          {regionList.map(region => <Select.Item label={region} value={region} key={region}/>)}
        </Select>
        <Select selectedValue={country} minWidth="200" accessibilityLabel="Pick Country" placeholder="Pick Country" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setCountry(itemValue)}>
           {{region}.map(country => <Select.Item label={country} value={country} key={country}/>)}
        </Select>
      </Box>
    </Center>);

}

function TimeoutAlert() {
  const [show, setShow] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  let that = this;
  let [timePassed, setTime] = React.useState(false)
  if(showModal== true){
    setTimeout(function(){setTime(setShow(true))}, 5000);
  }

  
  return( <Box w="100%" alignItems="center">
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Promise modal</Modal.Header>
          <Modal.Body>
          <Text>Wait until promise is resolved</Text>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <Collapse isOpen={show}>
        <Alert w="100%" maxW="400" status="error">
          <VStack space={"sm"} flexShrink={1} w="100%" h="24">
            <HStack flexShrink={1} space={"2xl"} alignItems="center" justifyContent="space-between">
              <HStack flexShrink={1} space={"xl"} alignItems="center">
                <Alert.Icon />
                <Text fontSize="md" fontWeight="medium" _dark={{
                color: "coolGray.800"
              }}>
                  Timeout
                </Text>
              </HStack>
              <IconButton variant="unstyled" _focus={{
              borderWidth: 0
            }} icon={<CloseIcon size="3" color="coolGray.600" />} onPress={() => setShow(false)} />
            </HStack>
            <Box pl="2" _dark={{
            _text: {
              color: "coolGray.600"
            }
          }}>
              Modal time window has ended
            </Box>
          </VStack>
        </Alert>
      </Collapse>
      <Button size={"sm"} onPress={() => setShowModal(true)} mt={8} mx="auto">
        Show modal
      </Button>
    </Box>);
}

const TimePickers = () =>{
  const [date, setDate] = React.useState(new Date(1695041730000));
  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return(
    <Box>
  <View>
    <Button onPress={showDatepicker} >Choose date</Button>
  </View>
  <View>
    <Button onPress={showTimepicker} >Choose time</Button>
  </View>
  <Text>Selected Date : {date.toLocaleString()}</Text>
    {show && (
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={mode}
        is24Hour={true}
        onChange={onChange}
      />
    )}
    </Box>);
}
// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={1} alignItems="center">
          <NameInput />
          <TwoSelectors />
          <ModalRandom />
          <TimePickers />
          <TimeoutAlert />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}



