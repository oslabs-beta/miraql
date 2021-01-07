import React, { useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import '../../node_modules/codemirror/lib/codemirror.css';
import '../../node_modules/codemirror/theme/neo.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closebrackets';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import Errors from './Errors.jsx';

function Response({ urlValue, query, fetchResponse, errors }) {
  // clean response to show in code mirror
  const cleanResponse = JSON.stringify(fetchResponse, null, 2);

  return (
    <Tabs variant="enclosed" colorScheme="pink">
      <TabList>
        <Tab>Response</Tab>
        <Tab>Errors</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <CodeMirror
            value={cleanResponse}
            options={{
              autoCloseBrackets: true,
              tabSize: 2,
              mode: 'javascript',
              theme: 'neo',
              lineNumbers: true,
              lineWrapping: true,
              readOnly: true,
            }}
          />
        </TabPanel>
        <TabPanel>
          <Errors fetchResponse={fetchResponse} errors={errors} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Response;
