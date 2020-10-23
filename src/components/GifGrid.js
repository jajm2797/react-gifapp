import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data,loading} = useFetchGifs(category);

    return (
        <Fragment>
            <h3 className="font-weight-bold">{category}</h3>
            {loading && category !== '' ? <p>Cargando...</p> : null}
            <div className="card-grid">
                <ol>
                {
                    data.map((img) => (
                        <GifGridItem 
                        key={img.id}
                        {...img}
                        />
                    ))
                }
                </ol>
            </div>
        </Fragment>
    )
}
