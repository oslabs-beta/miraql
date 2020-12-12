import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Button, Stack, Grid, GridItem} from '@chakra-ui/react';
import SubmitQuery from './SubmitQuery.jsx'


function SubmitUrlComponent() {
  let [urlValue, setUrlValue] = useState('');

  let handleUrlInput = (e) => {
    let inputValue = e.target.value;
    setUrlValue(inputValue);
  };

  return (
    <div>
    <Grid borderTop="1px" borderColor="gray.200" h={10}>
    <GridItem bg="white">

    <Stack direction={'row'}>
      <FormLabel> URL: </FormLabel>
      <FormControl id="url-form">
        <Input
          type="url"
          placeholder="enter URL here"
          onChange={handleUrlInput}
        />
      </FormControl>
      <Button colorScheme="pink">Connect</Button>
    </Stack>
    </GridItem>
  </Grid>
  <SubmitQuery />
  </div>
  );
}

export default SubmitUrlComponent;
