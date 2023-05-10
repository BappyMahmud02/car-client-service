import React from 'react';

const ServiceCard = ({ service }) => {

    const { title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p className='text-xl text-yellow-400'>Price: ${price}</p>
                <div className="card-actions">
                    <button className="btn btn-warning">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;