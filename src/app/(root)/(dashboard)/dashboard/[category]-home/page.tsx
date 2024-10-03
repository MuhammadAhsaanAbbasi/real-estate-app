import React from 'react'

interface IParams {
    params: {
        category: string
    }
}

const CategoryPage = ({params: {category}}: IParams) => {
    return (
        <div>CategoryPage {category}</div>
    )
}

export default CategoryPage