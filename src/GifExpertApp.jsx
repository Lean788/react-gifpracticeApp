import React, {Fragment, useState} from 'react'
import { CategoryAdd } from './Components/CategoryAdd';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const  handleAdd = (e) => {
    //     setCategories([...categories, 'HunterXHunter ']);
    // }


  return (
    <Fragment>
        <h2>GifExpertApp</h2>
        <CategoryAdd setCategories={setCategories} />
        <hr />

        <ol>
            {
                categories.map( category => (
                    <GifGrid 
                    category={category} 
                    key={category}
                    />
                ))
            }
        </ol>
    </Fragment>
  )
}
