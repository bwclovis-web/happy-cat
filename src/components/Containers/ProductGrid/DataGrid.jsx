import * as React from "react"
import ProductCard from "../../ProductCard/ProductCard";
import StyledDataGrid from "./DataGridStyles";

const DataGrid = ({ data, display }) => {
    return (
        <StyledDataGrid display={display}>
            {data.map(item => {
                if(!item.variants[0].availableForSale) {
                    return
                }
               return <ProductCard  product={item} key={item.id}/>
            })}
        </StyledDataGrid>
    )
}

export default DataGrid