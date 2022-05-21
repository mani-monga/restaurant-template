import React from 'react'

function Carosel() {
    return (
        <>
            <div className="slider">
                <div className="slide-track">
                    <div className="slide">
                        <img height={400} width={600} src="https://source.unsplash.com/random/?food" alt="" />
                    </div>
                    <div className="slide">
                        <img height={400} width={700} src="https://source.unsplash.com/random/?food,indian" alt="" />
                    </div>
                    <div className="slide">
                        <img height={400} width={600} src="https://source.unsplash.com/random/?food,cofee" alt="" />
                    </div>
                    <div className="slide">
                        <img height={400} width={600} src="https://source.unsplash.com/random/?food,italian" alt="" />
                    </div>
                    <div className='checkout'> Check Out &nbsp; <i className='fas fa-angle-double-right'></i></div>
                </div>
            </div>
        </>
    )
}

export default Carosel