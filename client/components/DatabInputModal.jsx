import React, {useState} from 'react';
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
  // tableName: '',
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


// let [inputs, setInputs] = useState(initialValues)
let [inputs, setInputs] = useState([initialValues]);

// create a state for tableName
let [ourTableName, setTableName] = useState('')

const changeTableName = fieldName => ({target}) => setTableName({[fieldName]:target.value})

// this function handles changes to the initial input field state (1st row being added)
// const onChangeForField = fieldName => ({target}) => setInputs(state => ({...state,[fieldName]:target.value}));

const onChangeForNow = (ev, index) => {
  const { name, value } = ev.target;
  const list = [...inputs];
  list[index][name] = value;
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
  setInputs([...inputs, initialValues]);
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
            return (
              <>
          <HStack spacing="24px">
            {/* this second editable block is an input field for the field name */}
              <VStack spacing="8px">
            <p>Field name</p>
            <Editable border="2px" borderColor="gray.200" borderRadius="10px" defaultValue="enter name">
                <EditablePreview />
                <EditableInput name="fieldName" onChange={ev => onChangeForNow(ev, i)} value={element.fieldName} />
            </Editable>
              </VStack>
              <Spacer />
            {/* Dropdown menu to select your field type */}
            <VStack spacing="8px">
            <p>Field Type</p>
            <Select placeholder="–" name="fieldType" onChange={ev => onChangeForNow(ev, i)}>
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
              <EditableInput name="defaultValue" onChange={ev => onChangeForNow(ev, i)} value={element.defaultValue}/>
            </Editable>
            </VStack>
            <Spacer />
            {/* these blocks are for our four switches */}
            <FormControl id="primary-key" display="flex" alignItems="center">
              <VStack spacing="8px">
                <FormLabel htmlFor="primary-key" mb="0">
                  Primary Key
                </FormLabel>
                <Switch id="primary-key-switch" name="primaryKey" onChange={ev => onChangeForNow(ev, i)} value={true}/>
              </VStack>
            </FormControl>
            <Spacer />
            <FormControl id="unique" display="flex" alignItems="center">
              <VStack spacing="8px">
                <FormLabel htmlFor="unique" mb="0">
                  Unique
                </FormLabel>
                <Switch id="unique-switch" name="unique" onChange={ev => onChangeForNow(ev, i)} value={true}/>
              </VStack>
            </FormControl>
            <Spacer />
            <FormControl id="required" display="flex" alignItems="center">
              <VStack spacing="8px">
                <FormLabel htmlFor="Required" mb="0">
                  Required?
                </FormLabel>
                <Switch id="required-switch" name="required" onChange={ev => onChangeForNow(ev, i)} value={true}/>
              </VStack>
            </FormControl>
            <Spacer />
            <FormControl id="queryable" display="flex" alignItems="center">
              <VStack spacing="8px">
                <FormLabel htmlFor="queryable" mb="0">
                  Queryable?
                </FormLabel>
                <Switch id="queryable-switch" name="queryable" onChange={ev => onChangeForNow(ev, i)} value={true}/>
              </VStack>
            </FormControl>
            <Spacer />
            {/* these three selects are for table relationship, field relationship, and type of relationship */}
            <VStack spacing="8px">
              <p>Table Relationship</p>
            <Select placeholder="-" name="tableRelationship" onChange={ev => onChangeForNow(ev, i)}>
              <option value="id">ID</option>
            </Select>
            </VStack>
            <Spacer />
            <VStack spacing="8px">
              <p>Field Relationship</p>
            <Select placeholder="-" name="fieldRelationship" onChange={ev => onChangeForNow(ev, i)}>
              <option value="id">ID</option>
            </Select>
            </VStack>
            <Spacer />
            <VStack spacing="8px">
              <p>Type of Relationship</p>
            <Select placeholder="-" name="typeRelationship" onChange={ev => onChangeForNow(ev, i)}>
              <option value="id">ID</option>
            </Select>
            <Button onClick={() => handleRemoveClick(i)}>Remove</Button>
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
    </>
  )
};

export default DatabInputModal;
