import React, { FunctionComponent } from "react";
import {Cell} from "../Cell";


type GridProps={
    rowCount:number;
    columnCount:number;
};

const GenerateCells:(columnCount: number)=>JSX.Element[]  =(columnCount)=>{
    const cellsArray=[];
    for(let i=0;i<columnCount;i++){
    cellsArray.push(<Cell />);
    }
return cellsArray;

}

const Grid:FunctionComponent<GridProps>=({rowCount,columnCount})=>{
    const rowArray:JSX.Element[]=[];
    for(let i=0;i<rowCount;i++){
        rowArray.push(<div style={{display:'flex'}} >
            
        {GenerateCells(columnCount)
        }
        
        </div>);
    }
    return(
        <>
        {rowArray}
        </>
    );
}
export default Grid;