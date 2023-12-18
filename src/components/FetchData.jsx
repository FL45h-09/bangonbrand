// // import React from 'react'
// import { useEffect, useState } from "react";
// import { json } from "react-router-dom";

// export const FetchData = () => {    
//     // fetch('https://dummyjson.com/products/')
//     // .then(res => res.json())
//     // .then(json => {const productsData = json;});
//     // const newArray = Array.from(productsData);
//     // console.log(newArray);
//     const [users, setUsers] = useState([]);
//     // const getData = ()=>{
//     //     const response = fetch('https://dummyjson.com/products/');
//     //     if (!response.ok) {
//     //         throw new Error(`Error! status: ${response.status}`);
//     //     }

//     //     const result = response.json();
//     //     return result;
//     // }
//     const getApiData = async () => {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
//         .then((response) => response.json());
      
//         // update the state
//         setUsers(response);
//       };
//       useEffect(() => {
//         getApiData();
//       }, []);

//     console.log(getData());
//     // useEffect(() => {
//     //     fetch('https://dummyjson.com/products/')
//     //       .then((response) => response.json())
//     //       .then((data) => {
//     //           const productsData = data;
//     //           console.log(productsData);
//     //       })
//     //       .catch((error) => console.log(error));
//     //   }, []);
//   return (
//     <div>
//         {users.map((user) => (
//             <div className="item-container">
//                 Id:{user.id} <div className="title">Title:{user.title}</div>
//             </div>
//         ))}
//     </div>
//   )
// }
