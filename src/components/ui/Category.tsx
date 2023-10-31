import { ICategory } from '@/types'
import Link from 'next/link'
import React from 'react';

const Category = ({category}:{category: ICategory}) => {
    return (
        <Link href={`/categories/${category.id}`}>
            <div className='shadow-lg hover:shadow-xl rounded-lg py-4 px-8 text-center text-xl font-semibold text-primary'>
            {category.title.toUpperCase()}
        </div>
        </Link>
    );
};

export default Category;