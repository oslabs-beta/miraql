import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Text,
} from '@chakra-ui/react';

const Errors = ({ fetchResponse, errors }) => {
  // setting variables
  let status = '';
  let statusCode = '';
  let errorType = '';
  let errorMessage = '';

  // if there are errors show these errors
  if (errors === true) {
    status = 'Unsuccessful Query';
    errorType = 'Client Error';
    statusCode = '400';
    errorMessage = 'Incorrect syntax or connection URL';
  }

  return (
    <Table size="md" variant="simple">
      <Thead>
        <Tr>
          <Th>Query Information</Th>
          <Th>Result</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Status</Td>
          <Td>
            <Text>{status}</Text>
          </Td>
        </Tr>
        <Tr>
          <Td>Status Code</Td>
          <Td>
            <Text>{statusCode}</Text>
          </Td>
        </Tr>
        <Tr>
          <Td>Error Type</Td>
          <Td>
            <Text>{errorType}</Text>
          </Td>
        </Tr>
        <Tr>
          <Td>Message</Td>
          <Td>
            <Text>{errorMessage}</Text>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default Errors;
