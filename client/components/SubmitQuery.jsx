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

function SubmitQuery({ urlValue }) {
  // react hooks to hold query in state
  let [query, setQuery] = useState('');

  // handle query text input change
  const handleQueryChange = (e) => {
    let inputValue = e.target.value;
    setQuery(inputValue);
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
            size="large"
          />
          <Button colorScheme="Pink">Submit</Button>
        </Stack>
      </GridItem>
      <GridItem bg="#EDF2F7" colSpan={1}>
        Response
      </GridItem>
      <GridItem bg="#E2E8F0" colSpan={2}>
        Submit Schema
      </GridItem>
    </Grid>
  );
}

export default SubmitQuery;
