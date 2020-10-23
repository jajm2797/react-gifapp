import React from 'react'

export const GifGridItem = ({id,title,url}) => {    

    return (
        <>
        <div className=".container-fluid">
        <div className="row .align-item-center">
        <div className="col d-flex justify-content-center">
        <div className="card justify-content-center" style={{width:35 + "rem"}}>
            <img src={url} alt={title} className="rounded card-img-top"></img>
            <div className="card-body">
                <p className="card-text">{title}</p>
            </div>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}
