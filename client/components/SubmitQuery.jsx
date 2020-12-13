import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

function SubmitQuery() {

  return (
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

  );
}; 

export default SubmitQuery; 