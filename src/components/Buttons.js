import React from 'react';
import { Link } from 'react-router-dom';

export const Buttons = (
    {
        firstLink,
        secondLink,
        firstName,
        secondName,
        disabledBtn,
        firstSubText = '',
        secondSubText = ''
    }) => {



    return (
        <div className="container__btns-info">
            <Link
                className={`${ disabledBtn  ? `btn btn-primary btn-sm disabled` : `btn btn-primary btn-sm`}`}
                to={firstLink}
            >

                {firstName}
                { firstSubText.length > 0 && (
                  <span className="btn-sub-text">
                    <br/>
                    {firstSubText}
                  </span>
                ) }
            </Link>

            <Link
                className={ `${ disabledBtn  ? `btn btn-primary btn-sm disabled` : `btn btn-primary btn-sm`}`}
                to={secondLink}
            >
                {secondName}
                { secondSubText.length > 0 && (
                  <span className="btn-sub-text">
                    <br/>
                    {secondSubText}
                  </span>
                ) }
            </Link>
        </div>
    )
}