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
  const [schemaResponse, setResponse] = useState([]);
  const [fieldResponse, setFields] = useState([]);

  // fetch request to get all the table names and field information for our tables
  useEffect(() => {
    fetch("/schema")
      .then((res) => {
        return res.json();
      })
      .then((res) => setResponse(res))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log("this is the schemaResponse", schemaResponse);

  useEffect(() => {
    fetch("/field")
      .then((res) => {
        return res.json();
      })
      .then((res) => setFields(res))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log("this is the field response", fieldResponse);

  return (
    <>
      <br></br>
      <br></br>
      <table>
        <div>
          <tr>
            {/* {// grab table_name from response object} */}
            <h2 className="tableHeader">THIS IS YOUR TABLE NAME BITCH</h2>
          </tr>
          <tr>
            {/* {// grab field_name and field_type from response object} */}
            <th className="table">Field Name</th>
            <th className="table">Field Type</th>
          </tr>
          <tr>
            <td>id</td>
            <td>id</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>String</td>
          </tr>
          <button className="updateDelete">Delete</button>
          <button className="updateDelete">Update</button>
        </div>
      </table>
    </>
  );
};

export default SchemaCards;
