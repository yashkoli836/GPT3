import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt='g'/>
    </div>
    <div>
      <img src={slack} alt='s'/>
    </div>
    <div>
      <img src={atlassian} alt='a'/>
    </div>
    <div>
      <img src={dropbox} alt='d'/>
    </div>
    <div>
      <img src={shopify} alt='s'/>
    </div>
  </div>
);

export default Brand