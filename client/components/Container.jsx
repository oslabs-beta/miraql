import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import SubmitUrlComponent from './SubmitUrlComponent.jsx';
import SubmitQuery from './SubmitQuery.jsx';

function Container() {
  return (
    <div>
      <Grid borderTop="1px" borderColor="gray.200" h={12}>
        <GridItem bg="red.50">MiraQL</GridItem>
      </Grid>
          <SubmitUrlComponent />
    </div>
  );
}

export default Container;
