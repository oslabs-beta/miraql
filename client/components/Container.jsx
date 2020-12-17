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
              src="https://res.cloudinary.com/dbo7cxsfs/image/upload/v1607984039/MiraQL_cjttvv.png"
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
