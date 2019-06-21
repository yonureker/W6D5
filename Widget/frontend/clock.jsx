import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentTime : new Date()
    }
  }

  componentDidMount() {
    
    this.handle = setInterval(() => { this.tick() }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.handle)
    this.handle=0;
  }
  render(){
    
    return (
      <div className='clock-main'>
        <h2>Clock</h2>
      <div className='clock'>
      <p>
        <span>
          Time :
        </span> 
        <span>
          {this.state.currentTime.getHours()}: {this.state.currentTime.getMinutes()} : {this.state.currentTime.getSeconds()}
        </span>  
      </p>
        <br/>
      <p>
        <span>
        Date : 
        </span>
        <span>
        {this.state.currentTime.toUTCString().slice(0,17)}
        </span>
      </p> 
      </div>
      </div>
    );
  }

  tick(){
    this.setState({currentTime: new Date()})
  }

  
}

export default Clock;