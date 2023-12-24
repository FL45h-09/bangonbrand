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