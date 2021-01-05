import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react"

const SchemaCards = ({ query, urlValue, fetchResponse }) => {
  return (
    <>
    <br></br>
    <br></br>
    <h2>Books</h2>
          <Table variant="striped">
      <Thead>
        <Tr>
          <Th>Field Name</Th>
          <Th>Type</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>ID</Td>
          <Td>Id</Td>
        </Tr>
        <Tr>
          <Td>Name</Td>
          <Td>String</Td>
        </Tr>
        <Tr>
          <Td>Author</Td>
          <Td>String</Td>
        </Tr>
        <Tr>
          <Td>Genre</Td>
          <Td>String</Td>
        </Tr>
      </Tbody>
    </Table>

    </>
  );
};

export default SchemaCards;