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

const schemaTreeData = [
 {
   name: "Queries",
 }
]

const svgSquare = {
  shape: 'rect',
  shapeProps: {
    width: 20,
    height: 20,
    x: -10,
    y: -10,
    fill: 'pink',
  }
}
 


function Schema(props) {

  console.log(props)

  return (
    <>
      <Tree data={schemaTreeData} 
      nodeSvgShape={svgSquare}
      translate= {
        {x: 50, y: 250}
      }
      textLayout = {
        {x: -20, y: -20}
      }
      styles={{
        links: {
             
              stroke: 'pink',
              strokeWidth: "5px",
            }
     }}
       />
    </>
  );
}

export default Schema;
