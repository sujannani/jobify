// import React, { useContext } from 'react';
// export function RecruiterPage(){
//     return (
//         <div>
//             <h1>hello</h1>
//         </div>
//     )
// }

import React from 'react';
import { useLocation } from 'react-router-dom';

export const RecruiteePage = () => {
  const { state } = useLocation();
  const recruitee = state && state.recruitee;

  if (!recruitee) {
    return <div>User details not available.</div>;
  }

  return (
    <div>
      <h2>Welcome, {recruitee.username}!</h2>
      <p>Email: {recruitee.email}</p>
      <p>Phone: {recruitee.phone}</p>
      <p>Skills: {recruitee.qualification}</p>
    </div>
  );
};

