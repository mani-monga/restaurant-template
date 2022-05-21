import React from 'react'



function Card({ menuData }) {
    return (
        <>
            {menuData.map((curElem) => {
                return (
                    <div className="card-container" key={curElem.id}>
                        <div className="card">
                            <h1 className="title">{curElem.name}</h1>
                            <div className="image"><img src={curElem.image} alt=''/></div>
                            <p className="des">{curElem.desc}</p>
                            <div className='button'> <a href="#">Order Now </a></div>
                        </div>
                    </div>
                )

            })}

        </>
    )
}

export default Card