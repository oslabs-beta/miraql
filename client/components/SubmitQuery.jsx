import React, { useState } from "react";
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
} from "@chakra-ui/react";
import Response from "./Response.jsx";
import { Controlled as CodeMirror } from "react-codemirror2";
import "../../node_modules/codemirror/lib/codemirror.css";
import "../../node_modules/codemirror/theme/neo.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closebrackets";

import "../styles/style.css";
import DatabInputModal from "./DatabInputModal.jsx";
import Schema from "./Schema.jsx";
import Metrics from "./Metrics.jsx";

function SubmitQuery({ urlValue }) {
  // hook to hold query in state
  let [query, setQuery] = useState("");
  // hook to hold fetch response in state
  let [fetchResponse, setFetchResponse] = useState("");
  // hook to hold responseTime in state
  let [queryResponseTime, setQueryResponseTime] = useState([]);
  // hook to hold query number in state
  let [queryTitle, setQueryNumber] = useState([]);
  // hook to catch errors in fetch request
  let [errors, setErrors] = useState(false);

  // handle query text input change
  const handleQueryChange = (e) => {
    let inputValue = e.target.value;
    setQuery(inputValue);
  };

  // function to handle submit button (query request and timer)
  const handleSubmit = () => {
    // start a timer
    const startTime = Date.now();

    // push query input into array in state to render on metrics graph
    setQueryNumber((queryTitle) => [...queryTitle, "Query"]);

    // execute a fetch request to get query response and stop time
    fetch(`${urlValue}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ query: query }),
    })
      .then((res) => res.json())
      .then((res) => {
        // stop timer and push query resolve time to state
        const responseTime = (Date.now() - startTime) / 1000;
        setQueryResponseTime((queryResponseTime) => [
          ...queryResponseTime,
          responseTime,
        ]);
        // store fetch response in state
        setFetchResponse(res);
        // check if fetch response has errors update state
        if (res.errors) {
          setErrors(true);
        }
      })
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
                  mode: "javascript",
                  theme: "neo",
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
                onClick={handleSubmit}
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
          errors={errors}
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
            </TabPanel>
            <TabPanel>
              <Schema query={query}/>
            </TabPanel>
            <TabPanel>
              <Metrics
                query={query}
                urlValue={urlValue}
                fetchResponse={fetchResponse}
                queryResponseTime={queryResponseTime}
                queryTitle={queryTitle}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </GridItem>
    </Grid>
  );
}

export default SubmitQuery;
