import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import SubmitUrlComponent from './SubmitUrlComponent.jsx';

function Container() {
  return (
    <div>
      <Grid borderTop="1px" borderColor="gray.200" h={12}>
        <GridItem bg="red.50">MiraQL</GridItem>
      </Grid>
      <Grid borderTop="1px" borderColor="gray.200" h={10}>
        <GridItem bg="white">
          <SubmitUrlComponent />
        </GridItem>
      </Grid>
      <Grid
        h="100%"
        border="1px"
        borderColor="gray.200"
        autoFlow="column dense"
      >
        <GridItem bg="#F7FAFC" colSpan={1}>
          Submit Query
        </GridItem>
        <GridItem bg="#EDF2F7" colSpan={1}>
          Response
        </GridItem>
        <GridItem bg="#E2E8F0" colSpan={2}>
          Submit Schema
        </GridItem>
      </Grid>
    </div>
  );
}

export default Container;
