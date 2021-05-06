import React from 'react';
import ReactDOM from 'react-dom';

import './i18n';
import { ProgramDesign } from './views/ProgramDesign';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ProgramDesign />
  </React.StrictMode>,
  document.getElementById('root'),
);
