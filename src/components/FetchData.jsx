// // import React from 'react'
import { useEffect, useState } from "react";
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



export const FetchData = () => {
    const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    useEffect(() => {
    // data fetching here
        fetch(`https://dummyjson.com/products/`)
        .then((response) => {
            return response.json();
          })
          .then((actualData) => {
            console.log(actualData);
            setData(actualData.products);
        })
    }, []);
  return (
    <div>
        <h1>Type: {typeof(data)}</h1>
        <ul className="reset">
        {data &&
          data.map(({ id, title, thumbnail, price }) => (
            <li key={id}>
                <div className="imgbox"><img src={thumbnail} alt={title} /></div>
                <div className="contentbox">
                    <h3>{title}</h3>
                    <p>Priced from ${price}</p>
                </div>
            </li>
          ))}
      </ul>
    </div>
  )
}
