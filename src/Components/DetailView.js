import './DetailView.css';
import Rating from './Rating';

function DetailView({randomMovie}){
    console.log(randomMovie.fieldImage);

    return(
        <article key={randomMovie.id} className="detail-view-container">
            <figure>   
                <figcaption><h2>{randomMovie.fieldTitle}</h2></figcaption>           
                <img
                    className="detail-view-image"
                    src={randomMovie.fieldImage}
                    alt={randomMovie.fieldTitle}
                />
            </figure>
                <div className="detail-view-info">
                    <p>Runtime: {randomMovie.fieldFsk}</p>
                    <p>Rating: <Rating rating={randomMovie.fieldRating} /></p>
                    <p>Runtime: {randomMovie.fieldRuntime}</p>
                    <p>Production Year: {randomMovie.fieldYearOfPuplication}</p>
                </div>
        </article>
    );
}

export default DetailView;