import * as React from "react"
import CategoryCard from "../../ProductCard/CategoryCard";
import ProductCard from "../../ProductCard/ProductCard";
import StyledDataGrid from "./DataGridStyles";

const DataGrid = ({ data }) => {
    return (
        <StyledDataGrid>
            {data.map(item => {
               return item.featuredImage ? <ProductCard  product={item}/> : <CategoryCard product={item}/>
            })}
        </StyledDataGrid>
    )
}

export default DataGrid