import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Button, Stack } from '@chakra-ui/react';

function SubmitUrlComponent() {
  let [urlValue, setUrlValue] = useState('');

  let handleUrlInput = (e) => {
    let inputValue = e.target.value;
    setUrlValue(inputValue);
  };

  return (
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
  );
}

export default SubmitUrlComponent;
