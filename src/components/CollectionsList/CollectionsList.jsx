import React from "react"
import { Link } from "gatsby"
import DataGrid from "../Containers/ProductGrid/DataGrid"

const CollectionsList = ({collections}) =>  (
    <div style={{backgroundColor: 'grey'}}>
        <section className="container">
            <h2>
                <Link to={`/shop/${collections.handle}`}>
                    Other items in {collections.title}
                </Link>
            </h2>
            <DataGrid data={collections.products}/>
        </section>
    </div>
)


export default CollectionsList;