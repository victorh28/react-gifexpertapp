import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


    //const categoria = ['One Punch','Samurai X','Dragon ball'];

    const [categoria, setCategoria] = useState(['One Punch']);

/*
    const handleAdd = (e) => {
        //setCategoria([...categoria,'One Piece']);
        setCategoria(cat => [...cat,'One Piece']);
    }
*/
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategoria={setCategoria}/>
            <hr/>

            <ol>
                {
                    categoria.map( cat =>(
                        <GifGrid key={cat} categoria={cat}/>
                    ))
                }
            </ol>
        </div>
    )
}

