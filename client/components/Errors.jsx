import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';

const Errors = ({ fetchResponse, errors }) => {
  let [successfulQuery, setSuccessfulQuery] = useState('');
  let [errorType, setErrorType] = useState('');
  let [errorMessage, setErrorMessage] = useState('');
  let [errorLine, setErrorLine] = useState('');

  // const newResponse = JSON.parse(fetchResponse);

  // const setAllState = () => {
  //   if (newResponse['errors']) {
  //     setSuccessfulQuery('Unsuccessful');
  //     setErrorType('Client');
  //     setErrorMessage(newResponse['errors']['message']);
  //     setErrorLine(newResponse['errors']['line']);
  //   } else {
  //     setSuccessfulQuery('Successful');
  //     setErrorType('No errors');
  //     setErrorMessage('No errors');
  //     setErrorLine('No errors');
  //   }
  // };

  return (
    <Table size="md" variant="striped" colorScheme="pink">
      <Thead>
        <Tr>
          <Th>Query Information</Th>
          <Th>Result</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Successful Query</Td>
          <Td>{successfulQuery}</Td>
        </Tr>
        <Tr>
          <Td>Error Type</Td>
          <Td>{errorType}</Td>
        </Tr>
        <Tr>
          <Td>Message</Td>
          <Td>{errorMessage}</Td>
        </Tr>
        <Tr>
          <Td>Line</Td>
          <Td>{errorLine}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default Errors;
