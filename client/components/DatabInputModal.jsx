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
  tableName: '',
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


let [inputs, setInputs] = useState(initialValues)

const onChangeForField = fieldName => ({target}) => setInputs(state => ({...state,[fieldName]:target.value}))

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
              <EditableInput name="tableName" onChange={onChangeForField('tableName')} value={inputs.tableName}/>
            </Editable>
          </ModalHeader>
          <Flex>
          <ModalBody>
          <HStack spacing="24px">
            {/* this second editable block is an input field for the field name */}
              <VStack spacing="8px">
            <p>Field name</p>
            <Editable border="2px" borderColor="gray.200" borderRadius="10px" defaultValue="enter name">
                <EditablePreview />
                <EditableInput name="fieldName" onChange={onChangeForField('fieldName')} value={inputs.fieldsName} />
            </Editable>
              </VStack>
              <Spacer />
            {/* Dropdown menu to select your field type */}
            <VStack spacing="8px">
            <p>Field Type</p>
            <Select placeholder="–" name="fieldType" onChange={onChangeForField('fieldType')}>
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
              <EditableInput name="defaultValue" onChange={onChangeForField('defaultValue')} value={inputs.defaultValue}/>
            </Editable>
            </VStack>
            <Spacer />
            {/* these blocks are for our four switches */}
            <FormControl id="primary-key" display="flex" alignItems="center">
              <VStack spacing="8px">
                <FormLabel htmlFor="primary-key" mb="0">
                  Primary Key
                </FormLabel>
                <Switch id="primary-key-switch" name="primaryKey" onChange={onChangeForField('primaryKey')} value={true}/>
              </VStack>
            </FormControl>
            <Spacer />
            <FormControl id="unique" display="flex" alignItems="center">
              <VStack spacing="8px">
                <FormLabel htmlFor="unique" mb="0">
                  Unique
                </FormLabel>
                <Switch id="unique-switch" name="unique" onChange={onChangeForField('unique')} value={true}/>
              </VStack>
            </FormControl>
            <Spacer />
            <FormControl id="required" display="flex" alignItems="center">
              <VStack spacing="8px">
                <FormLabel htmlFor="Required" mb="0">
                  Required?
                </FormLabel>
                <Switch id="required-switch" name="required" onChange={onChangeForField('required')} value={true}/>
              </VStack>
            </FormControl>
            <Spacer />
            <FormControl id="queryable" display="flex" alignItems="center">
              <VStack spacing="8px">
                <FormLabel htmlFor="queryable" mb="0">
                  Queryable?
                </FormLabel>
                <Switch id="queryable-switch" name="queryable" onChange={onChangeForField('queryable')} value={true}/>
              </VStack>
            </FormControl>
            <Spacer />
            {/* these three selects are for table relationship, field relationship, and type of relationship */}
            <VStack spacing="8px">
              <p>Table Relationship</p>
            <Select placeholder="-" name="tableRelationship" onChange={onChangeForField('tableRelationship')}>
              <option value="id">ID</option>
            </Select>
            </VStack>
            <Spacer />
            <VStack spacing="8px">
              <p>Field Relationship</p>
            <Select placeholder="-" name="fieldRelationship" onChange={onChangeForField('fieldRelationship')}>
              <option value="id">ID</option>
            </Select>
            </VStack>
            <Spacer />
            <VStack spacing="8px">
              <p>Type of Relationship</p>
            <Select placeholder="-" name="typeRelationship" onChange={onChangeForField('typeRelationship')}>
              <option value="id">ID</option>
            </Select>
            </VStack>
            <Spacer />
            </HStack>
            </ModalBody>
          </Flex>

          <ModalFooter>
            <Button variant="ghost">+ Add Field</Button>
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
