import React, { useContext, useEffect } from "react";
import Tree from "react-d3-tree";
import DatabInputModal from './DatabInputModal.jsx';

const myTreeData = [
  {
    name: "Bookstore",
    // attributes: {
    //   keyA: "val A",
    //   keyB: "val B",
    //   keyC: "val C",
    // },
    nodeSvgShape: {
      shape: 'rect',
      shapeProps: {
        width: 20,
        height: 20,
        x: -10,
        y: -10,
        fill: 'yellow',
      }
    },
    children: [
      {
        name: "Author",
        nodeSvgShape: {
          shape: 'rect',
          shapeProps: {
            width: 20,
            height: 20,
            x: -10,
            y: -10,
            fill: 'yellow',
          }
        },
        //   styles: {
        //     links:{
        //     stroke: 'yellow',
        //     strokeWidth: "2px",
        //     }
        // },
        
        children: [
          {
            name: "authorid",
          },
          {
            name: "age",
          },
          {
            name: "name",
          },
        ],
      },

      {
        name: "Book",
        children: [
          {
            name: "bookid",
          },
          {
            name: "genre",
          },
          {
            name: "name",
          },
        ],
      },
    ],
  },
];

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
 


function Schema() {
  return (
    <>
      <DatabInputModal />
      <Tree data={myTreeData} 
      nodeSvgShape={svgSquare}
      styles={{
        links: {
             
              stroke: 'pink',
              strokeWidth: "5px",
            },
     }}
       />
    </>
  );
}

export default Schema;
