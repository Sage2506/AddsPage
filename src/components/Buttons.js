import React from 'react';
import { Link } from 'react-router-dom';

export const Buttons = (
    {
        firstLink,
        secondLink,
        firstName,
        secondName,
        disabledBtn
    }) => {

    

    return (
        <div className="container__btns-info">
            <Link
                className={`${ disabledBtn  ? `btn btn-primary btn-sm disabled` : `btn btn-primary btn-sm`}`}
                to={firstLink}
            >

                {firstName}
            </Link>

            <Link
                className={ `${ disabledBtn  ? `btn btn-primary btn-sm disabled` : `btn btn-primary btn-sm`}`}
                to={secondLink}
            >
                {secondName}
            </Link>
        </div>
    )
}