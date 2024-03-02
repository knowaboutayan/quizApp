import React from 'react';
import ErrorBox from "../Error/ErrorBox";
import serverError from '../images/serverError.png';

const NotFoundPage = () => {
  return (
                <div className="flex center-align">
                <ErrorBox icon={serverError} errorText="page not found " navigateTo="/" navigateText="back to home" />
            </div>
  );
};

export default NotFoundPage;
