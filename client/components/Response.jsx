import React from 'react';

function Response({ urlValue, query, fetchResponse }) {
  // let unstringifyResponse = JSON.parse(fetchResponse);

  return (
    <div>
      <p>Response bitch</p>
      {/* <p>{urlValue}</p>
      <p>{query}</p> */}
      <p>{fetchResponse}</p>
    </div>
  );
}

export default Response;
