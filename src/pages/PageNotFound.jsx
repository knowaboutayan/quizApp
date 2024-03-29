import React, { useEffect } from 'react';
import ErrorBox from "../Error/ErrorBox";
import serverError from '../images/serverError.png';

const PageNotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex center-align">
      <ErrorBox icon={serverError} errorText="page not found " navigateTo="/" navigateText="back to home" />
    </div>
  );
};

export default PageNotFound;
