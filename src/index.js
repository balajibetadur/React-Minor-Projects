import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ChatApp from './ChatApp';
// import Flip from './Flip';
// import Socket from './Socket';
// import Amazon from './Amazon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <ChatApp/>
    {/* <Socket/> */}
    {/* <Flip /> */}
    {/* <Amazon /> */}
  </>
);
