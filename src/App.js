import React, { Component } from 'react';
import './App.css';
import RemoveIcon from '@material-ui/icons/RemoveCircle';
import AddIcon from '@material-ui/icons/AddCircle';
import GroupIcon from '@material-ui/icons/Group';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      room:1,
      adult:1,
      child:0
    };
  }
  removeRoomCount = () => {
    let room = this.state.room;
    let totalMember = this.state.child + this.state.adult;
    let prevoiusRoom = 4 * (room-1);
    
    if(room>1&& totalMember<=prevoiusRoom ){
      room -= 1;
       this.setState({room:room});
    }
  }
  addRoomCount = () => {
    let room = this.state.room;
    let adult = this.state.adult;
    if(room<5){
      room += 1;
      adult +=1;
      this.setState({room:room, adult:adult});
    }
  }
  addAdultCount = () => {
    let adult = this.state.adult;
    let availableCount = 4 * this.state.room;
    let totalMember = this.state.child + this.state.adult;
    if(totalMember<availableCount){
      adult +=1
      this.setState({adult:adult});
    }
  }
  removeAdultCount = () => {
    let adult = this.state.adult;
    let child = this.state.child;
    let room = this.state.room;
    if(child==0 && adult>1){
      adult -=1
      this.setState({adult:adult});
    }

  }
  addChildCount = () => {
    let child = this.state.child;
    let availableCount = 4 * this.state.room;
    let totalMember = this.state.child + this.state.adult;
    if(totalMember<availableCount){
      child +=1
      this.setState({child:child});
    }
  }
  removeChildCount  = () => {
    let child = this.state.child;
    let availableCount = 4 * this.state.room;
    let totalMember = this.state.child + this.state.adult;
    // let prevoiusRoom = 4 * (room-1);
    if(child>0)
    child -=1;
    this.setState({child:child})
  }
  render() {
    return (
      <div className="App">
        <div className="room-detail-label">
          <GroupIcon
          className="group-icon"
          />
         <span className="room-label">Choose Number of</span> <span className="room-people-label">People</span>
          </div>
       <div className="room-container">
        <div className="room-count-detail">
          <div className="left-side-detail">
          <AddIcon /> <span className="room-name">ROOMS</span>
          </div>
          <div className="right-side-detail">
            <RemoveIcon
            onClick={(e) => this.removeRoomCount(e)}
            />
            <span className="room-count">{this.state.room}</span>
            <AddIcon 
            onClick={(e) => this.addRoomCount(e)}
            />
          </div>
        
        </div>
        <div className="adults-count-detail">
          <div className="left-side-detail">
          <AddIcon /> <span className="room-name">ADULTS</span>
          </div>
          <div className="right-side-detail">
            <RemoveIcon
             onClick={(e) => this.removeAdultCount(e)}
            />
            <span className="room-count">{this.state.adult}</span>
            <AddIcon
             onClick={(e) => this.addAdultCount(e)}
            />
          </div>
        
        </div>
        <div className="child-count-detail">
          <div className="left-side-detail">
          <AddIcon /> <span className="room-name">CHILDREN</span>
          </div>
          <div className="right-side-detail">
            <RemoveIcon
             onClick={(e) => this.removeChildCount(e)}
            />
            <span className="room-count">{this.state.child}</span>
            <AddIcon 
             onClick={(e) => this.addChildCount(e)}
            />
          </div>
        
        </div>
       
       </div>
      </div>
    );
  }
}

export default App;
