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
  const cleanResponse = JSON.stringify(fetchResponse, null, 2);

  // let TabName = 'Response';
  // console.log('response', fetchResponse);
  // // If there is an 'errors' object in the response, switch tabname to Errors
  // if (fetchResponse['errors']) TabName = 'Errors';

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
          <Errors fetchResponse={cleanResponse} errors={errors} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Response;

// let jsonStr =
//   '{"data":{"post":{"id":"1","title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"}}}';

// let newstr = fetchResponse;
// console.log('this is jsonStr', jsonStr);
// console.log('this is fetch response', fetchResponse);

// Codemirror

// import React, { useState } from 'react';
// import CodeMirror from 'codemirror';
// import 'codemirror/addon/hint/show-hint';
// import 'codemirror/addon/lint/lint';
// import 'codemirror-graphql/hint';
// import 'codemirror-graphql/lint';
// import 'codemirror-graphql/mode';

// function Response({ urlValue, query, fetchResponse }) {
//   // let [value, setValue] = useState('');

//   // const handleChange = (e) => {
//   //   let inputValue = e.target.value;
//   //   setValue(inputValue);
//   // };
//   // let jsonParsed = JSON.parse(fetchResponse);

//   const myTextArea = 'hello';

//   CodeMirror.fromTextArea(fetchResponse, {
//     mode: 'graphql',
//     lint: {
//       schema: myGraphQLSchema,
//     },
//     hintOptions: {
//       schema: myGraphQLSchema,
//     },
//   });

//   return (
//     <div>
//       <p>Response bitch</p>
//       <p>{fetchResponse}</p>
//       {/* <CodeMirror /> */}
//     </div>
//   );
// }

// export default Response;
