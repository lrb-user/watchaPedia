import React from 'react';
import MovieReviewList from './MovieReviewList';
import InputWithButton from '../../Common/Form/Input/InputWithButton';

const MovieReview:React.FC = () => {
    return(
        <>
            <div className="grid gap-4">
                <h2 className="text-white text-2xl font-bold">
                    코멘트&nbsp;<span className="text-primary font-light">500+</span>
                </h2>
                <InputWithButton />
                <MovieReviewList />
            </div>
        </>
    )
}

export default MovieReview;