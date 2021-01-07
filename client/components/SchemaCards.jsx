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
  // const [schemaResponse, setResponse] = useState([]);
  // const [fieldResponse, setFields] = useState([]);
  const [updateState, stateUpdates] = useState();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("/everything")
    .then((res) => {
      return res.json();
    })
    .then((res) =>{
      setAllData(res)
    })
    // .then(() => {
    //   const cache = {};
    //   for(let i = 0; i < allData.length; i++) {
    //     if (!cache[allData[i]["schema_name"]]) {
    //       cache[allData[i]["schema_name"]] = [allData[i]["field_name"], allData[i]["field_type"]];
    //   }
    //     else cache[allData[i]["schema_name"]].push(allData[i]["field_name"], allData[i]["field_type"]);
    //   }
    
    //   let tableheadertemporary = Object.keys(cache)[0];
    //   console.log('tableheadertemporary', tableheadertemporary)
    //   let fieldnames = [];
    //   let fieldtype = [];
    //   let tableheaderarray = cache[tableheadertemporary]
    //   console.log('tableheaderarray', tableheaderarray);
    //   for (let i = 0; i < tableheaderarray.length; i++) {
    //     if (i % 2 === 0) fieldnames.push(cache[tableheadertemporary][i]);
    //     if (i % 2 === 1) fieldtype.push(cache[tableheadertemporary][i]);
    //   }
    //   console.log('fieldnames', fieldnames);
    //   console.log('fieldtype', fieldtype);
    // })
    .catch((err) => {
      console.log(err);
    });
  }, [updateState]);
  
  // console.log('this is ALLLLLLL DATA', allData);

  const cache = {};
  for(let i = 0; i < allData.length; i++) {
    if (!cache[allData[i]["schema_name"]]) {
      cache[allData[i]["schema_name"]] = [allData[i]["field_name"], allData[i]["field_type"]];
  }
    else cache[allData[i]["schema_name"]].push(allData[i]["field_name"], allData[i]["field_type"]);
  }

  console.log('THIS IS THE CACHE OBJ: ', cache);
  console.log('Object.entries(cache): ', Object.entries(cache));

  const tableHeads = Object.keys(cache);
  console.log('tableheads', tableHeads);


    const cacheEntries = Object.entries(cache);
    console.log('cacheEntries', cacheEntries);

    const table = [];

    cacheEntries.forEach(element => {
      console.log('fieldTypes', element[1])

      const items = [];
      for (let i = 0; i < element[1].length; i = i + 2) {
        items.push(
          <tr>
            <td>{element[1][i]}</td>
            <td>{element[1][i+1]}</td>
          </tr>
          )
      }

      table.push(
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
          {items}
          {/* <tr>
            <td>id</td>
            <td>id</td>
          </tr>
          <tr>
            <td>title</td>
            <td>string</td>
          </tr>
          <tr>
            <td>genre</td>
            <td>string</td>
          </tr>
          <tr>
            <td>author</td>
            <td>string</td>
          </tr> */}
          <button className="updateDelete">Delete</button>
          <button className="updateDelete">Update</button>
        </div>
      </table>
      </>
        )
    })


  // let tableheadertemporary = Object.keys(cache)[0];
  // console.log('tableheadertemporary', tableheadertemporary)
  // let fieldnames = [];
  // let fieldtype = [];
  // let tableheaderarray = cache[tableheadertemporary]
  // // let newarray = JSON.parse(JSON.stringify(tableheaderarray));
  // // console.log('array', newarray);
  // console.log('tableheaderarray', tableheaderarray);
  // // console.log(tableheaderarray[0])
  // // for (let i = 0; i < newarray.length; i++) {
  // //   if (i % 2 === 0) fieldnames.push(newarray[i]);
  // //   if (i % 2 === 1) fieldtype.push(newarray[i]);
  // // }
  // console.log('fieldnames', fieldnames);
  // console.log('fieldtype', fieldtype);
  

// first we wanna make a table
// populate the name with schema name 
// inside the table we wanna create a row for each field
// we pull the name of field and the field type

// create a function that creates tables
// every time a table is inputed, the create table function runs in the return? render new table
// (old tables should not be deleted until delete is pressed)
// each table create function will take 2 params: 
// 1) schema_name
// 2) table_items


console.log('the cache', cache);
// console.log('object keys cache', Object.keys(cache));
// console.log('object values cache', Object.values(cache));
console.log('object entries cache', Object.entries(cache));

  return (
    <>
    <div>
      {table}
    </div>
    </>
  );
};

export default SchemaCards;
