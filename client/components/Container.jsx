import React from 'react';
import { Grid, GridItem, Image, Stack, Heading } from '@chakra-ui/react';
import SubmitUrlComponent from './SubmitUrlComponent.jsx';
import '../styles/style.css';

// container holds the MiraQL header and submitURL component
function Container() {
  return (
    <div>
      <Grid borderTop="1px" borderColor="gray.200" h={12}>
        <GridItem bg="red.50">
          <Stack direction={'row'}>
            <Image
              ml="10px"
              mt="5px"
              boxSize="25px"
              objectFit="cover"
              src="https://user-images.githubusercontent.com/47689732/108518052-2537b200-7296-11eb-80a8-5f8ddeb7c86a.png"
              alt="MiraQL"
            />
            <Heading fontSize="3xl" id="miraql-logo">MiraQL</Heading>
          </Stack>
        </GridItem>
      </Grid>
      <SubmitUrlComponent />
    </div>
  );
}

export default Container;
