import { tree } from "d3";
import React, { useContext, useEffect, useState } from "react";
import { Tree, treeUtil } from "react-d3-tree";

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
  const [allData, setAllData] = useState()
  const [treeData, setTreeData] = useState();

  
  let stateBoolean = true;
  
  function handleUpdate() {
    // console.log('that update was handled')
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

 useEffect(() => {
   treeUtil.parseJSON('/everything')
   .then((data) => setTreeData(data))
 }, [])

//  const fillTreeData = () => {
//     treeUtil.parseJSON('/everything')
//    .then((data) => setTreeData(data))
//  }
  
  console.log('this is ALLLLLLL DATA', allData)

  const cache = {};
  // testArray is created to start our tree and be the root node
  const testArray = [{name: 'Queries', children: []}];
  // console.log('this is test array', testArray[0]["children"])

  // this creates our entire cache
if(allData) {
  for(let i = 0; i < allData.length; i++) {
    if (!cache[allData[i]["schema_name"]]) {
      cache[allData[i]["schema_name"]] = [allData[i]["field_name"]];
      console.log('cache', cache);
  }
    else cache[allData[i]["schema_name"]].push(allData[i]["field_name"]);

  }
  // console.log(cache)


  // this section is to create our child nodes
  const innerArray = [];
  // iterate over our cache
  for (const key in cache) {

    // console.log(cache[key])
    // here we are pushing our top layer of our tree
    testArray[0]["children"].push({name: key,
      children: [cache[key]]})
      
      let cacheKeyArr = cache[key]
    for(let i = 0; i < cacheKeyArr.length; i++) {
      console.log('cacheKeyArr[i]', cacheKeyArr[i])
      innerArray.push({name: cacheKeyArr[i]})
      // {name: cacheKeyArr[i]}
    }
  }
  // console.log('this is the test array', testArray)
  console.log('this is the innerArray', innerArray)
}

// this section is to create granchild nodes but is not currently functional
let innertestArray = testArray[0]["children"]
console.log('this is testArray index 0 at children', innertestArray)

for(let k = 0; k < innertestArray.length; k++) {
  console.log('innertestarrayk', innertestArray[k]["children"])
  let superInside = innertestArray[k]["children"][0]
  let innerObj = {}
  let innerArr = []
  for(let l=0; l < superInside.length; l++) {
    innerObj['name'] = superInside[l]
    innerArr.push(innerObj)
  }
console.log(innerObj)
console.log(innerArr)

superInside.push(innerArr)
console.log('this is VERY INSIDE', superInside)
}


  // const schemaTreeData = [
  //   {
  //     name: "Queries",
  //     children: [
  //       {
  //         name: 'book',
  //         children: [
  //           {
  //             name: 'id'
  //           },
  //           {
  //             name: 'name'
  //           }
  //         ]
  //       },
  //       {
  //         name: 'author'
  //       }
  //     ]
  //   },
  // ];
  // console.log('schematree', schemaTreeData)
  
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
  if(allData === undefined) {
    return <>Still loading...</>
  }
  return (
    <>
        <button onClick={handleUpdate}>Render Schema</button>
      <Tree
        data={testArray}
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
