import React, {useState} from 'react';
import Schema from './Schema.jsx'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Select,
  Switch,
  FormControl,
  FormLabel,
  HStack,
  VStack,
  Flex,
  Spacer,
} from '@chakra-ui/react';

const initialValues = {
  fieldName: '',
  fieldType: '',
  defaultValue: '',
  primaryKey: false,
  unique: false,
  required: false,
  queryable: false, 
  tableRelationship: '',
  fieldRelationship: '',
  typeRelationship: ''
}

function DatabInputModal() {

// first make a deep copy of our initial values
let copyOfInitValues = Object.assign({}, initialValues)
// use hooks to create a new state based on the copy of the initial values
let [inputs, setInputs] = useState([copyOfInitValues]);

// create a state for tableName
let [ourTableName, setTableName] = useState('')

const changeTableName = fieldName => ({target}) => setTableName({[fieldName]:target.value})

// this function handles changes to the initial input field state (1st row being added)
// const onChangeForField = fieldName => ({target}) => setInputs(state => ({...state,[fieldName]:target.value}));

const onChangeForNow = (ev, index) => {
  // grab our event.target and use destructuring to make variables name and value with ev.target.name and ev.target.value respectively
  const { name, value } = ev.target;
  // create a variable list that is an array of a copy of our object
  const list = [...inputs];
  // edit the value of list at the index with a key of the name
  list[index][name] = value;
  // use hooks to change our state using set inputs with our updated list
  setInputs(list);
};


// handle click event of the Remove button
const handleRemoveClick = index => {
  const list = [...inputs];
  list.splice(index, 1);
  setInputs(list);
};
 
// handle click event of the Add button
const handleAddClick = () => {
  // when we make a new row, we use our untouched version of initial values, so we have a clean copy of initialValues in our state
  setInputs([...inputs, copyOfInitValues]);
};



// toggle between true and false
// this is not currently being used or working
const isTrueOrFalse = (bool) => {
  return !bool;
}

// this function is to add a new row of inputs to the table
// const handleAddRow = 
  // we're expecting:
  // to create a new row of input fields which we want to save the state of onChange,
  // to not override our existing state but add to it 
  // 

  const { isOpen, onOpen, onClose } = useDisclosure()

  
  return (
    <>
    
      <Button onClick={onOpen}>Add Table</Button>

      <Modal isOpen={isOpen} size={"full"} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>
              {/* this first editable block is an input field for the table name */}
              <Editable border="2px" borderColor="gray.200" borderRadius="10px" defaultValue="Table Name">
              <EditablePreview />
              <EditableInput name="tableName" onChange={changeTableName('tableName')} value={inputs.tableName}/>
            </Editable>
          </ModalHeader>
          <Flex>
          <ModalBody>
          {inputs.map((element, i) => {
            // console.log(element)
            // console.log(i)
            return (
              <>
          <HStack spacing="24px">
            {/* this second editable block is an input field for the field name */}
              <VStack spacing="8px">
            <p>Field name</p>
            <Editable border="2px" borderColor="gray.200" borderRadius="10px" defaultValue="enter name">
                <EditablePreview />
                <EditableInput name="fieldName" onChange={ev => onChangeForNow(ev, i)}  value={element.fieldName} key={`fieldName${i}`}/>
            </Editable> 
              </VStack>
              <Spacer />
            {/* Dropdown menu to select your field type */}
            <VStack spacing="8px">
            <p>Field Type</p>
            <Select placeholder="–" name="fieldType" onChange={ev => onChangeForNow(ev, i)} key={`fieldType${i}`}>
              <option value="id">ID</option>
              <option value="string">String</option>
              <option value="boolean">Boolean</option>
              <option value="int">Int</option>
              <option value="float">Float</option>
            </Select>
            </VStack>
            <Spacer />
            {/* this  editable block is an input field for the default value */}
            <VStack spacing="8px">
            <p>Default Value</p>
            <Editable border="2px" borderColor="gray.200" borderRadius="10px" defaultValue="enter value" >
              <EditablePreview />
              <EditableInput name="defaultValue" onChange={ev => onChangeForNow(ev, i)} value={element.defaultValue} key={`defaultValue${i}`}/>
            </Editable>
            </VStack>
            <Spacer />
            {/* these blocks are for our four switches */}
            <FormControl id="primary-key" display="flex" alignItems="center">
              <VStack spacing="8px">
                <FormLabel htmlFor="primary-key" mb="0">
                  Primary Key
                </FormLabel>
                <Switch id="primary-key-switch" name="primaryKey" onChange={ev => onChangeForNow(ev, i)} value={true} key={`primaryKey${i}`}/>
              </VStack>
            </FormControl>
            <Spacer />
            <FormControl id="unique" display="flex" alignItems="center">
              <VStack spacing="8px">
                <FormLabel htmlFor="unique" mb="0">
                  Unique
                </FormLabel>
                <Switch id="unique-switch" name="unique" onChange={ev => onChangeForNow(ev, i)} value={true} key={`uniqueSwitch${i}`}/>
              </VStack>
            </FormControl>
            <Spacer />
            <FormControl id="required" display="flex" alignItems="center">
              <VStack spacing="8px">
                <FormLabel htmlFor="Required" mb="0">
                  Required?
                </FormLabel>
                <Switch id="required-switch" name="required" onChange={ev => onChangeForNow(ev, i)} value={true} key={`requiredSwitch${i}`}/>
              </VStack>
            </FormControl>
            <Spacer />
            <FormControl id="queryable" display="flex" alignItems="center">
              <VStack spacing="8px">
                <FormLabel htmlFor="queryable" mb="0">
                  Queryable?
                </FormLabel>
                <Switch id="queryable-switch" name="queryable" onChange={ev => onChangeForNow(ev, i)} value={true} key={`queryableSwitch${i}`}/>
              </VStack>
            </FormControl>
            <Spacer />
            {/* these three selects are for table relationship, field relationship, and type of relationship */}
            <VStack spacing="8px">
              <p>Table Relationship</p>
            <Select placeholder="-" name="tableRelationship" onChange={ev => onChangeForNow(ev, i)} key={`tableRelationship${i}`}>
              <option value="id">ID</option>
            </Select>
            </VStack>
            <Spacer />
            <VStack spacing="8px">
              <p>Field Relationship</p>
            <Select placeholder="-" name="fieldRelationship" onChange={ev => onChangeForNow(ev, i)} key={`fieldRelationship${i}`}>
              <option value="id">ID</option>
            </Select>
            </VStack>
            <Spacer />
            <VStack spacing="8px">
              <p>Type of Relationship</p>
            <Select placeholder="-" name="typeRelationship" onChange={ev => onChangeForNow(ev, i)} key={`typeRelationship${i}`}>
              <option value="id">ID</option>
            </Select>
            {inputs.length !== 1 && <Button onClick={() => handleRemoveClick(i)}>Remove</Button> }
            </VStack>
            <Spacer />
            </HStack>
            {inputs.length - 1 === i && <Button onClick={handleAddClick} variant="ghost">+ Add Field</Button>}
            </>
            );
          })}
            </ModalBody>
          </Flex>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Schema {...inputs} tableName={ourTableName}/>
    </>
  )
};

export default DatabInputModal;
