// import React, { useContext } from 'react';
// export function RecruiterPage(){
//     return (
//         <div>
//             <h1>hello</h1>
//         </div>
//     )
// }

// In your RecruiterPage component
import React from 'react';
import { useLocation } from 'react-router-dom';

export const RecruiterPage = () => {
  const { state } = useLocation();
  const recruiter = state && state.recruiter;

  if (!recruiter) {
    return <div>User details not available.</div>;
  }

  return (
    <div>
      <h2>Welcome, {recruiter.username}!</h2>
      <p>Email: {recruiter.email}</p>
      <p>Phone: {recruiter.phone}</p>
      <p>Company: {recruiter._id}</p>
    </div>
  );
};
