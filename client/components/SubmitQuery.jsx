import React, { useState } from 'react';
import {
  Grid,
  GridItem,
  Text,
  Textarea,
  Button,
  ButtonGroup,
  Stack,
} from '@chakra-ui/react';
import Response from './Response.jsx';

function SubmitQuery({ urlValue }) {
  // react hooks to hold query in state
  let [query, setQuery] = useState('');
  /// react hooks to hold fetch response in state
  let [fetchResponse, setFetchResponse] = useState('');

  // handle query text input change
  const handleQueryChange = (e) => {
    let inputValue = e.target.value;
    setQuery(inputValue);
  };

  // function to query request and send response back
  const getQueryResponse = () => {
    // execute a fetch request
    fetch(`${urlValue}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ query: query }),
    })
      .then((res) => res.json())
      // .then((res) => setFetchResponse(res))
      // .then((res) => console.log(res))
      .then((res) => JSON.stringify(res))
      .then((res) => setFetchResponse(res))
      .catch((error) => console.log(error));
  };

  return (
    <Grid h="100%" border="1px" borderColor="gray.200" autoFlow="column dense">
      <GridItem bg="#F7FAFC" colSpan={1}>
        <Stack direction={'column'}>
          <Text mb="8px">Submit Query:</Text>
          <Textarea
            value={query}
            onChange={handleQueryChange}
            placeholder="Enter Query"
            size="sm"
            h="200px"
            mr="15px"
            ml="15px"
          />
          <Button colorScheme="pink" onClick={getQueryResponse}>
            Submit
          </Button>
        </Stack>
      </GridItem>
      <GridItem bg="#EDF2F7" colSpan={1}>
        <Response
          urlValue={urlValue}
          query={query}
          fetchResponse={fetchResponse}
        />
      </GridItem>
      <GridItem bg="#E2E8F0" colSpan={2}>
        Submit Schema
      </GridItem>
    </Grid>
  );
}

export default SubmitQuery;

// try {
//   const queryResponse = await fetch(`${urlValue}`, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify({ query: query }),
//   })
//     .then((res) => res.json())
//     .then((res) => console.log('fetch response', res));
// } catch (error) {
//   console.log('fetch error', error);
// }
