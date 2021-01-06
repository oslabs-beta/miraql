import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react"

const SchemaCards = () => {

  const [schemaResponse, setResponse] = useState([])

  // fetch request to get all the table names and field information for our tables
  // useEffect(() => {
  //   fetch('/schemas')
  //   .then(res => {
  //     setResponse(res)
  //   }, [])
  //   .then(res => console.log(res))
  //   .catch(err => {
  //     console.log(err)
  //   })
  // })


  return (
    <>
    {/* {schemaResponse.map(element =>)} */}
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