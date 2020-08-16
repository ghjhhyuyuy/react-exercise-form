import React, {Component} from 'react';
import './myProfile.css';

class MyProfile extends Component {
  state = {
    name: '',
    gender: 'Male',
    description: '',
    isCheck: false
  };
  onChangeInputName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onChangeInputPhone = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.name,this.state.gender,this.state.description);
  }
  onChangeInputDescription = event => {
    this.setState({
      description: event.target.value,
    });
  }
  onChangeInputGender = event => {
    this.setState({
      gender: event.target.value,
    });
  }
  check = () => {
      this.setState({
        isCheck: !this.state.isCheck,
      });
  }
  render() {
    return (
      <form>
        <p className='bold'>Name</p>
        <input
          className="input"
          type="text"
          value={this.state.name}
          onChange={this.onChangeInputName}
          placeholder="Your name"
        ></input><br/>
        <p className='bold'>Gender</p>
         <select className="input" id="listItem" onChange={this.onChangeInputGender}>
           <option>Male</option>
           <option>Female</option>
         </select>   <br/>
        <p className='bold'>Description</p>
        <textarea  className="description" placeholder="Description about yourself" value={this.state.description} onChange={this.onChangeInputDescription}></textarea ><br/>
        <div className="marginTop">
          <input className="checkbox" type="checkbox" onClick={this.check}></input>
          <span className="lastText">I have read the terms of conduct</span>
        </div>
        <div className="center">
        <input className="button" type="submit" value="submit" onClick={this.handleSubmit} disabled={!this.state.name || !this.state.gender || !this.state.description || !this.state.isCheck}></input>
        </div>
        
      </form>
    );
  }
}

export default MyProfile;


