import React from "react"
import { Link } from "gatsby"
import DataGrid from "../Containers/ProductGrid/DataGrid"

const CollectionsList = ({collections}) =>  (
    <div style={{backgroundColor: 'grey'}}>
        <section className="container container-condensed">
            <h2>
                <Link to={`/shop/${collections.handle}`}>
                    Other items in {collections.title}
                </Link>
            </h2>
            <div style={{display:'flex'}}>
                <DataGrid data={collections.products}/>
                <p>more</p>
            </div>
        </section>
    </div>
)


export default CollectionsList;