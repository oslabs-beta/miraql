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
    children: [
      {
        name: "Author",
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

function Schema() {
  return (
    <>
      <DatabInputModal />
      <Tree data={myTreeData} />
    </>
  );
}

export default Schema;
