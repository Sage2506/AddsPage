import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Buttons extends Component {
  render (  ) {
    const {
      firstLink,
      secondLink,
      firstName,
      secondName,
      disabledBtn,
      firstSubText,
      secondSubText
    } = this.props

    console.log(' disabled state',disabledBtn)

    return(
      <div className="container__btns-info">
      <Link
        className={`${disabledBtn ? `btn btn-primary btn-sm disabled disabled-link` : `btn btn-primary btn-sm`}`}
        to={firstLink} >
        {firstName}
        {firstSubText.length > 0 && (
          <span className="btn-sub-text">
            <br />
            {firstSubText}
          </span>
        )}
      </Link>
      <Link
        className={`${disabledBtn ? `btn btn-primary btn-sm disabled disabled-link` : `btn btn-primary btn-sm`}`}
        to={secondLink} >
        {secondName}
        {secondSubText.length > 0 && (
          <span className="btn-sub-text">
            <br />
            {secondSubText}
          </span>
        )}
      </Link>
    </div>
    );
  }
}