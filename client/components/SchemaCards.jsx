import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

const SchemaCards = () => {
  const [updateState, stateUpdates] = useState();
  const [allData, setAllData] = useState([]);

  // Fetch join table from /everything and populate setAllData state
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
  
  // Parse through setAllData state and organize data into cache by table name, field name, and field type
  const cache = {};
  for(let i = 0; i < allData.length; i++) {
    if (!cache[allData[i]["schema_name"]]) {
      cache[allData[i]["schema_name"]] = [allData[i]["field_name"], allData[i]["field_type"]];
  }
    else cache[allData[i]["schema_name"]].push(allData[i]["field_name"], allData[i]["field_type"]);
  };

  // Create array of arrays of cache with Object.entries
  const cacheEntries = Object.entries(cache);
  // console.log('cacheEntries', cacheEntries);

  // Create table array to populate with tables from setAllData
  const tableArray = [];

  // Create a table with the data inside each element in cacheEntries.
  cacheEntries.forEach(element => {
    // console.log('fieldTypes', element[1]);

    // Create a table to populate with table data
    const table = [];
    // Push field names and field types into each row in table
    for (let i = 0; i < element[1].length; i = i + 2) {
      table.push(
        <tr>
          <td>{element[1][i]}</td>
          <td>{element[1][i+1]}</td>
        </tr>
        );
    };

    // Push all tables with schema name(tableHeader) and buttons into tableArray
    tableArray.push(
      <>
      <br></br>
      <br></br>
      <table>
      <div>
        <tr>
          {/* {// grab table_name from response object} */}
          <h2 className="tableHeader">{element[0]}</h2>
        </tr>
        <tr>
          {/* {// grab field_name and field_type from response object} */}
          <th className="table">Field Name</th>
          <th className="table">Field Type</th>
        </tr>
        {table}
        <button className="updateDelete">Delete</button>
        <button className="updateDelete">Update</button>
      </div>
      </table>
      </>
    );
  });

  // Return out all the tables created.
  return (
    <>
    <div>
      {tableArray}
    </div>
    </>
  );
};

export default SchemaCards;
