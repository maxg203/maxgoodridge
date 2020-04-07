import React from 'react';

import Custom404SVG from './custom-404.svg';

const Custom404 = () => (
  <div className="custom-404">
    <img src={Custom404SVG} alt="404 Page Not Found" />
    <p>Oops! We couldn't find anything here.</p>
  </div>
)

export default Custom404;
