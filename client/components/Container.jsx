import React from 'react';
import { Grid, GridItem, Image, Stack, Text } from '@chakra-ui/react';
import SubmitUrlComponent from './SubmitUrlComponent.jsx';
import SubmitQuery from './SubmitQuery.jsx';

// container holds the MiraQL header and submitURL component
function Container() {
  return (
    <div>
      <Grid borderTop="1px" borderColor="gray.200" h={12}>
        <GridItem bg="red.50">
          <Stack direction={'row'}>
            <Image
              boxSize="25px"
              objectFit="cover"
              src="https://res.cloudinary.com/dbo7cxsfs/image/upload/v1607984039/MiraQL_cjttvv.png"
              alt="MiraQL"
            />
            <Text>MiraQL</Text>
          </Stack>
        </GridItem>
      </Grid>
      <SubmitUrlComponent />
    </div>
  );
}

export default Container;
