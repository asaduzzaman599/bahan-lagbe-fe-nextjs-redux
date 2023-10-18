'use client'
import { useGetCategoriesQuery } from '@/redux/api/categories-api'
import React from 'react';

const CategoriesPage = () => {
    const {data: res} = useGetCategoriesQuery({})
    const data = res?.data
    return (
        <div>
            <h1>Manage Categories</h1>
            {data?.length}
        </div>
    );
};

export default CategoriesPage;