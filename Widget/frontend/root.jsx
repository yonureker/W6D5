import React from 'react';
import Clock from './clock';
import Tab from './tab';

// document.addEventListener('DOMContentLoaded', () => {
//   const main = document.getElementById('main');
//   ReactDOM.render(<Widget />, main);
// });

const tabinfo = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'},
]

const Root = props => (
  <div>
  <Clock />
  <Tab tabinfo={tabinfo} />
  </div>
);

export default Root;