import * as React from "react"
import ProductCard from "../../ProductCard/ProductCard";
import StyledDataGrid from "./DataGridStyles";

const DataGrid = ({ data }) => {
    return (
        <StyledDataGrid className="container">
            {data.map(item => {
               return <ProductCard  product={item.node}/>
            })}
        </StyledDataGrid>
    )
}

export default DataGrid