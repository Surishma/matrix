import React, { FunctionComponent } from "react";
import {Cell} from "../Cell";


type GridProps={
    rowCount:number;
    columnCount:number;
};
const createArray:(count: number)=>number[]    =(count)=>{
    const array=[];
for(let i=0;i<count;i++){
array.push(i);
}
return array;
}

const Grid:FunctionComponent<GridProps>=({rowCount,columnCount})=>{
   // const rowArray=createArray(rowCount);

   // const columnArray=createArray(columnCount);
    
    return(
        <>
        {createArray(rowCount).map(r=>
            <div style={{display:'flex'}}>
            {    createArray(columnCount).map(c=> <Cell />)}
            </div>
        )}
       
        </>
    );
}
export default Grid;