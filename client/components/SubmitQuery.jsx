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

import '../styles/style.css';
import DatabInputModal from './DatabInputModal.jsx';
import Schema from './Schema.jsx';
import Metrics from './Metrics.jsx';
import SchemaCards from './SchemaCards.jsx'

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
    <Grid templateColumns="repeat(10, 1fr)" height="90%">
      <GridItem bg="#F7FAFC" colStart={1} colEnd={3}>
        <Tabs variant="enclosed" colorScheme="pink">
          <TabList>
            <Tab>Submit Query</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <CodeMirror
                value={query}
                options={{
                  autoCloseBrackets: true,
                  tabSize: 2,
                  mode: 'javascript',
                  theme: 'neo',
                  lineNumbers: true,
                  lineWrapping: true,
                }}
                onBeforeChange={(editor, data, value) => {
                  setQuery(value);
                }}
                onChange={(editor, data, value) => {}}
              />
              <Button
                colorScheme="pink"
                size="sm"
                onClick={getQueryResponse}
                id="submitbutton"
              >
                Submit
              </Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </GridItem>
      <GridItem bg="#EDF2F7" colStart={3} colEnd={6}>
        <Response
          urlValue={urlValue}
          query={query}
          fetchResponse={fetchResponse}
        />
      </GridItem>
      <GridItem bg="#F7FAFC" colStart={6} colEnd={11}>
        <Tabs variant="enclosed" colorScheme="pink">
        <TabList>
          <Tab>Add Tables</Tab>
          <Tab>Schema</Tab>
          <Tab>Metrics</Tab>
        </TabList>
        <TabPanels>
        <TabPanel>
          <DatabInputModal />
          {/* new tables card component? */}
          {/* <SchemaCards /> */}
        </TabPanel>
        <TabPanel>
          <Schema />
        </TabPanel>
        <TabPanel>
          <Metrics query={query} urlValue={urlValue} fetchResponse={fetchResponse}/>
        </TabPanel>
        </TabPanels>
        </Tabs>
      </GridItem>
    </Grid>
  );
}

export default SubmitQuery;
