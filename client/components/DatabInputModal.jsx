import React from 'react';
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
  StackDivider,
} from '@chakra-ui/react';

function DatabInputModal() {
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
              <Editable defaultValue="Table Name">
              <EditablePreview />
              <EditableInput />
            </Editable>
          </ModalHeader>
          <ModalBody>
          {/* <HStack spacing="24px">
            <h2>Add Field Name</h2>
            <h2>Default Value</h2>
            <h2>Primary Key</h2>
            <h2>Unique</h2>
            <h2>Required?</h2>
            <h2>Queryable?</h2>
            <h2>Table Relationship</h2>
            <h2>Field Relationship</h2>
            <h2>Type of Relationship</h2>
          </HStack> */}
          <br></br>
          <HStack spacing="24px">
            {/* this second editable block is an input field for the field name */}
            <Editable defaultValue="field name">
              <EditablePreview />
              <EditableInput />
            </Editable>
            {/* Dropdown menu to select your field type */}
            <Select placeholder="–">
              <option value="id">ID</option>
              <option value="string">String</option>
              <option value="boolean">Boolean</option>
              <option value="int">Int</option>
              <option value="float">Float</option>
            </Select>
            {/* this  editable block is an input field for the default value */}
            <Editable defaultValue="Default Value">
              <EditablePreview />
              <EditableInput />
            </Editable>
            {/* these blocks are for our four switches */}
            <FormControl id="primary-key" display="flex" alignItems="center">
              <FormLabel htmlFor="primary-key" mb="0">
                {/* Primary Key */}
              </FormLabel>
              <Switch id="primary-key-switch" />
            </FormControl>
            <FormControl id="unique" display="flex" alignItems="center">
              <FormLabel htmlFor="unique" mb="0">
                {/* Unique */}
              </FormLabel>
              <Switch id="unique-switch" />
            </FormControl>
            <FormControl id="required" display="flex" alignItems="center">
              <FormLabel htmlFor="Required" mb="0">
                {/* Required? */}
              </FormLabel>
              <Switch id="required-switch" />
            </FormControl>
            <FormControl id="queryable" display="flex" alignItems="center">
              <FormLabel htmlFor="queryable" mb="0">
                {/* Queryable? */}
              </FormLabel>
              <Switch id="queryable-switch" />
            </FormControl>
            {/* these three selects are for table relationship, field relationship, and type of relationship */}
            <Select placeholder="Table Relationship">
              <option value="id">-</option>
            </Select>
            <Select placeholder="Field Relationship">
              <option value="id">-</option>
            </Select>
            <Select placeholder="Type of Relationship">
              <option value="id">-</option>
            </Select>
            </HStack>
          </ModalBody>

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
