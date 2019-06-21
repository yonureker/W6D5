import React from 'react';
import Root from './root';

class Tab extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selected_tab : 0
    };
  }

  render(){
    return (
    <div>
      <h1>
        Tabs
      </h1>

      <div>
        <header>
        <ul>
            {this.props.tabinfo.map((el, index) => {
              return <li key={index}>{el.title}</li>;
            })}
        </ul>
          </header>
      </div>
      <div>
        <article>
            {this.props.tabinfo.map((el, index) => {
              return <li key={index}>{el.content}</li>;
            })}
        </article>
      </div>
    </div>)
  }
}

export default Tab;

// let array = this.props.tabinfo

// for (let i = 0; i < array.length; i++) {
//   array[i].title
// }