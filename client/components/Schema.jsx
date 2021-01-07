import { tree } from 'd3';
import React, { useContext, useEffect, useState } from 'react';
import { Tree, treeUtil } from 'react-d3-tree';
import { Button } from "@chakra-ui/react";
 
// const myTreeData = [
//   {
//     name: 'Queries',
//     // attributes: {
//     //   keyA: "val A",
//     //   keyB: "val B",
//     //   keyC: "val C",
//     // },
//     nodeSvgShape: {
//       shape: 'rect',
//       shapeProps: {
//         width: 20,
//         height: 20,
//         x: -10,
//         y: -10,
//         fill: 'yellow',
//       },
//     },
//     children: [
//       {
//         name: 'Author',
//         nodeSvgShape: {
//           shape: 'rect',
//           shapeProps: {
//             width: 20,
//             height: 20,
//             x: -10,
//             y: -10,
//             fill: 'yellow',
//           },
//         },
//         //   styles: {
//         //     links:{
//         //     stroke: 'yellow',
//         //     strokeWidth: "2px",
//         //     }
//         // },

//         children: [
//           {
//             name: 'authorid',
//           },
//           {
//             name: 'age',
//           },
//           {
//             name: 'name',
//           },
//         ],
//       },

//       {
//         name: 'Book',
//         children: [
//           {
//             name: 'bookid',
//           },
//           {
//             name: 'genre',
//           },
//           {
//             name: 'name',
//           },
//         ],
//       },
//     ],
//   },
// ];

function Schema(query) {
  // console.log(props)
  // const [schemaResponse, setResponse] = useState([]);
  // const [fieldResponse, setFields] = useState([]);
  const [updateState, stateUpdates] = useState();
  const [allData, setAllData] = useState();
  const [treeData, setTreeData] = useState();

  let stateBoolean = true;

  function handleUpdate() {
    // console.log('that update was handled')
    stateUpdates({});
  }

  // fetch request to get all the table names and field information for our tables
  // const schemaTreeData = [];

  useEffect(() => {
    fetch('/everything')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setAllData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateState]);

  useEffect(() => {
    treeUtil.parseJSON('/everything').then((data) => setTreeData(data));
  }, []);

  const fillTreeData = () => {
    treeUtil.parseJSON('/everything').then((data) => setTreeData(data));
  };

  // console.log('this is ALLLLLLL DATA', allData)

  const cache = {};
  // testArray is created to start our tree and be the root node
  const testArray = [{ name: 'Queries', children: [] }];
  console.log('this is test array', testArray);

  // this creates our entire cache
  if (allData) {
    for (let i = 0; i < allData.length; i++) {
      // console.log('what im pushing', allData[i]["field_name"])
      if (!cache[allData[i]['schema_name']]) {
        cache[allData[i]['schema_name']] = [allData[i]['field_name']];
        // console.log('cache', cache);
      } else cache[allData[i]['schema_name']].push(allData[i]['field_name']);
    }
    console.log('this is the cache', cache);

    const conversion = (cache) => {
      const output = [];

      for (const key in cache) {
        const newObj = {};
        const fields = cache[key];
        newObj.name = key;
        newObj.children = fields.map((el) => {
          return { name: el };
        });
        testArray[0]['children'].push(newObj);
      }
      console.log(
        'this is the test array after we push in our tree',
        testArray
      );
    };

    conversion(cache);
  }

  const svgSquare = {
    shape: 'rect',
    shapeProps: {
      width: 20,
      height: 20,
      x: -10,
      y: -10,
      fill: 'pink',
    },
  };
  if (allData === undefined) {
    return <>Still loading...</>;
  }
  return (
    <>
    <Button colorScheme="pink" onClick={handleUpdate}>Render Schema</Button>
      {/* <button className="renderSchemaBtn" onClick={handleUpdate}>Render Schema</button> */}
      <Tree
        data={testArray}
        nodeSvgShape={svgSquare}
        translate={{ x: 50, y: 250 }}
        textLayout={{ x: -20, y: -20 }}
        zoom={.3}
        nodeSize={{x:200, y:50}}
        styles={{
          links: {
            stroke: 'pink',
            strokeWidth: '5px',
          },
        }}
      />
    </>
  );
}

export default Schema;
