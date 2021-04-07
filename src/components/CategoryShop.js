import React, { useEffect } from 'react'

export default function CategoryShop(props) {

    useEffect(() => {
        props.getProducts(props.match.params.category)
    }, [])

    console.log(props)
    return (
        <div>
            CategoryShop
        </div>
    )
}
