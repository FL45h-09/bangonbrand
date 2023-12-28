// import { NavLink } from "react-router-dom";

// The bellow function is to conver slug in to Page title
export const ConvertSlug = (str) => {
    let currentText = str;
    let splitText = currentText.split("/");
    splitText = splitText.filter((item)=>{
        if(item != ""){
            return item;
        }
    });
    let arryCount = splitText.length;
    if (arryCount != 1){
        // console.log("lenght of array is: " + arryCount);
        return splitText;
    }else{
        splitText = splitText + "";
        // console.log("lenght of array is: " + arryCount);
        splitText = splitText.split('-').filter(Boolean).join(' ');
        return splitText;
    }
}


// export const ApiConn = (productId, ) => {
//     // const [categories, setCategories] = useState(null);
//     const [data, setData] = useState(null);
//     const [dataCount, setDataCount] = useState();
//     const [limit, setlimit] = useState(12);
//     const LoadMorebtn = ()=>{
//       if(limit < 20){
//         setlimit(limit + 4);
//       }
//     }
//     if(props.limits !== undefined){
//       setlimit(props.limits);
//     }
//     const baseApiUrl = "https://dummyjson.com/products/";
//         useEffect(() => {
//       // data fetching here
//       // https://dummyjson.com/docs // This is a documentation for the dummy product API and there is a file for other routes
//           const apiUrl = `${baseApiUrl}${props.productId ? props.productId : ""}${props.catName ? "category/" + props.catName : ""}?${"limit="+limit}`;
//           console.log(apiUrl);
//           fetch(apiUrl)
//           .then((response) => {
//               return response.json();
//             })
//             .then((actualData) => {
//               // console.log(actualData); // Just logging products to console.
//               setDataCount(Object.keys(actualData.products).length);
//               setData(actualData.products); // Setting data to using the useState hook.
//             })
//             // console.log(dataCount);
//           }, [props.catName, limit, dataCount]);
//           // let count = Object.keys(dataCount).length;
//           return ({data})
//   }