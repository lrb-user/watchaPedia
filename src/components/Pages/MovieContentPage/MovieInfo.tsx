import React from 'react';
import MoviePoster from './MoviePoster';
import MovieSummary from './MovieSummary';
import RelatedKeyword from './RelatedKeyword';

const MovieInfo:React.FC = () => {
    return(
        <>
            <div id="movieInfo" className="flex gap-8">
                <MoviePoster />
                <div className="flex gap-8">
                    <MovieSummary />
                    <RelatedKeyword />
                </div>
            </div>
        </>
    )
}

export default MovieInfo;