import React, { useState } from 'react';
import {
  Grid,
  GridItem,
  Text,
  Textarea,
  Button,
  ButtonGroup,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import Response from './Response.jsx';
import { Controlled as CodeMirror } from 'react-codemirror2';
import '../../node_modules/codemirror/lib/codemirror.css';
import '../../node_modules/codemirror/theme/neo.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closebrackets';
import Schema from './Schema.jsx';

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
      // .then((res) => JSON.stringify(res))
      .then((res) => setFetchResponse(res))
      .catch((error) => console.log(error));
  };

  return (
    <Grid h="100%" border="1px" borderColor="gray.200" autoFlow="column dense">
      <GridItem bg="#F7FAFC" colStart={1} colEnd={1}>
        {/* <Grid templateColumns="repeat(5, 1fr)">
      <GridItem bg="#F7FAFC"> */}
        <Tabs variant="enclosed" colorScheme="pink">
          <TabList>
            <Tab>Submit Query</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Stack direction={'column'}>
                <CodeMirror
                  // editorDidMount={(editor) => {
                  //   editor.setSize(200, 500);
                  // }}
                  value={query}
                  options={{
                    autoCloseBrackets: true,
                    tabSize: 2,
                    mode: 'javascript',
                    theme: 'neo',
                    lineNumbers: true,
                  }}
                  onBeforeChange={(editor, data, value) => {
                    setQuery(value);
                  }}
                  onChange={(editor, data, value) => {}}
                  max-width="100%"
                />
                <Button colorScheme="pink" size="sm" onClick={getQueryResponse}>
                  Submit
                </Button>
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </GridItem>
      <GridItem bg="#EDF2F7" colSpan={1}>
        {/* <GridItem bg="#EDF2F7"> */}
        <Response
          urlValue={urlValue}
          query={query}
          fetchResponse={fetchResponse}
        />
      </GridItem>
      <GridItem bg="#E2E8F0" colSpan={2}>
        {/* <GridItem bg="#EDF2F7"> */}
        <Schema />
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
