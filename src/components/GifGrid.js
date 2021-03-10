//import React, { useEffect, useState } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGrisItem } from './GifGrisItem';

export const GifGrid = ({categoria}) => {


    const {data:images,loading} = useFetchGifs(categoria);

    return (  
        <>
        <h3>{categoria}</h3>
        {loading && <p className='animate__animated animate__flash'>Cargando</p>}
        <div className='cardGrid'>
            {
                images.map(img=>(
                      <GifGrisItem key={img.id} {...img}/>
                ))
            }
        </div>
        </>
    )
}
