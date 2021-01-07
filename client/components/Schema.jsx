import React, { useContext, useEffect, useState } from "react";
import Tree from "react-d3-tree";

// const myTreeData = [
//   {
//     name: "Queries",
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
//       }
//     },
//     children: [
//       {
//         name: "Author",
//         nodeSvgShape: {
//           shape: 'rect',
//           shapeProps: {
//             width: 20,
//             height: 20,
//             x: -10,
//             y: -10,
//             fill: 'yellow',
//           }
//         },
//         //   styles: {
//         //     links:{
//         //     stroke: 'yellow',
//         //     strokeWidth: "2px",
//         //     }
//         // },

//         children: [
//           {
//             name: "authorid",
//           },
//           {
//             name: "age",
//           },
//           {
//             name: "name",
//           },
//         ],
//       },

//       {
//         name: "Book",
//         children: [
//           {
//             name: "bookid",
//           },
//           {
//             name: "genre",
//           },
//           {
//             name: "name",
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
  const [allData, setAllData] = useState([])

  
  let stateBoolean = true;
  
  function handleUpdate() {
    console.log('that update was handled')
    stateUpdates({})
  }
  
  // fetch request to get all the table names and field information for our tables
  // const schemaTreeData = [];

  useEffect(() => {
    fetch("/everything")
    .then((res) => {
      return res.json();
    })
    .then((res) =>{
      setAllData(res)
    })
    .catch((err) => {
      console.log(err);
    });
  }, [updateState]);
  
  console.log('this is ALLLLLLL DATA', allData)

  const cache = {};

  for(let i = 0; i < allData.length; i++) {
    console.log('what im pushing', allData[i]["field_name"])
    if (!cache[allData[i]["schema_name"]]) {
      cache[allData[i]["schema_name"]] = [allData[i]["field_name"]];
      console.log('cache', cache);
  }
    else cache[allData[i]["schema_name"]].push(allData[i]["field_name"]);

  }
  

  const schemaTreeData = [
    {
      name: "Queries",
      children: [
        {
          name: 'book',
          children: [
            {
              name: 'id'
            },
            {
              name: 'name'
            }
          ]
        },
        {
          name: 'author'
        }
      ]
    },
  ];
  console.log('schematree', schemaTreeData)
  
  const svgSquare = {
    shape: "rect",
    shapeProps: {
      width: 20,
      height: 20,
      x: -10,
      y: -10,
      fill: "pink",
    },
  };

  return (
    <>
        <button onClick={handleUpdate}>Render Schema</button>
      <Tree
        data={schemaTreeData}
        nodeSvgShape={svgSquare}
        translate={{ x: 50, y: 250 }}
        textLayout={{ x: -20, y: -20 }}
        styles={{
          links: {
            stroke: "pink",
            strokeWidth: "5px",
          },
        }}
      />
    </>
  );
}

export default Schema;
