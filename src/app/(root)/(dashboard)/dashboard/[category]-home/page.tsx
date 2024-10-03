"use client"
import { useParams } from 'next/navigation';
import React from 'react';

const CategoryPage = () => {
    const { category } = useParams<{ category: string }>();

    return (
        <div>Category Page: {category}</div>
    );
};

export default CategoryPage;
