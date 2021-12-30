import * as React from "react"
import ProductCard from "../../ProductCard/ProductCard";
import StyledDataGrid from "./DataGridStyles";

const CategoryGrid = ({ data }) => {
    console.log(data)
    return (
        <StyledDataGrid>
            {data.map(item => {
               return <ProductCard product={item} key={item.id}/>
            })}
        </StyledDataGrid>
    )
}

export default CategoryGrid