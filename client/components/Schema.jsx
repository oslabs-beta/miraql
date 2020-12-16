import React, { useContext, useEffect } from "react";
import * as d3 from "d3";
import Tree from "react-d3-tree";

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
    <div>
      <Tree data={myTreeData} />
    </div>
  );
}

export default Schema;
