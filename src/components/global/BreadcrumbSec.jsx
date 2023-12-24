// import React from 'react'
// import { Breadcrumbs } from "react-breadcrumbs-dynamic";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ConvertSlug } from "../../utils/Functions";

export const BreadcrumbSec = () => {
  let currentPath = useLocation().pathname;
  currentPath = ConvertSlug(currentPath);
  // console.log(currentPath.constructor.name);

  // currentPath = currentPath;
  return (
    <div className="breadcrumbsec">
        <ul className="reset">
          <li><NavLink to='/'>Home</NavLink></li>
          {(
            ()=>{
              if(currentPath.constructor.name == "String"){
                return <li>{currentPath}</li>;
              }else if(currentPath.constructor.name == "Array"){
                let arrayCount = currentPath.length - 1;
                return (currentPath.map((item, index)=>{
                  // console.log(index);
                  if(index < arrayCount){
                    let itemSplit = item.split('-').filter(Boolean).join(' ');
                    return <li key={item}><NavLink to={`/${item}/`}>{itemSplit}</NavLink></li>;
                  }else{
                    let itemSplit = item.split('-').filter(Boolean).join(' ');
                    return <li key={item}>{itemSplit}</li>;
                  }
                })
                )
              }
            }
          )()}
        </ul>
    </div>
  )
}
