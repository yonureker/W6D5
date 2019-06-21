import React from 'react';
import Root from './root';

// document.addEventListener('DOMContentLoaded', () => {
//   const main = document.getElementById('main');
//   ReactDOM.render(<Root />, main);
// });

class Widget extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Root />
    )
  }
}

export default Widget

