import React from 'react'

interface IParams {
    params: {
        id: string
    }
}

const ListingsDetailsPage = ({params: {id}}: IParams) => {
    return (
        <div>ListingsDetailsPage {id} </div>
    )
}

export default ListingsDetailsPage