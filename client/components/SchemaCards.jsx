import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
} from "@chakra-ui/react";

const SchemaCards = (boolSwap) => {
  const [updateState, stateUpdates] = useState();
  const [allData, setAllData] = useState([]);



  // Fetch join table from /everything and populate setAllData state
  // useEffect(() => {
  //   fetch("/everything")
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((res) =>{
  //     setAllData(res)
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }, [updateState]);

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
  }, [boolSwap]);
  
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
        <Tr>
          <Td>{element[1][i]}</Td>
          <Td>{element[1][i+1]}</Td>
        </Tr>
        );
    };

    // Push all tables with schema name(tableHeader) and buttons into tableArray
    tableArray.push(
      <>
      <br></br>
      <br></br>
      <Table>
          {/* {// grab table_name from response object} */}
        <TableCaption placement="top" className="tableHeader" color="d53f8c" fontSize="20px">
          {element[0]}
        </TableCaption>
        <Tr>
          {/* {// grab field_name and field_type from response object} */}
          <Th className="table">Field Name</Th>
          <Th className="table">Field Type</Th>
        </Tr>
        {table}

      {/* </div> */}
      </Table>
      <button className="updateDelete">Delete</button>
      <button className="updateDelete">Update</button>
      </>
    );
  });

  // Return out all the tables created.
  return (
    <>
    <Box overflowY="scroll" maxHeight="70vh">
      {tableArray}
    </Box>
    </>
  );
};

export default SchemaCards;
