import * as React from 'react';

const Card = function (props) {
    return <div className="row">
        {props.movie.map((data) => {
            let image = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
            return <div className="card">
                <img src={image} alt="" />
                <h5 className="card-title">{data.title}</h5>
            </div>;
        })}
    </div>
}

export default Card;