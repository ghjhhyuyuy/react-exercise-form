import React, {Component} from 'react';
import './myProfile.less';

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
        <label>Name</label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.onChangeInputName}
          placeholder="Your name"
        ></input>
        <label>Gender</label>
         <select id="listItem" onChange={this.onChangeInputGender}>
           <option>Male</option>
           <option>Female</option>
         </select>   
        <label>Description</label>
        <textarea  placeholder="Description about yourself" value={this.state.description} onChange={this.onChangeInputDescription}></textarea >
        <input type="checkbox" onClick={this.check}></input>
        <span>I have read the terms of conduct</span>
        <input type="submit" value="submit" onClick={this.handleSubmit} disabled={!this.state.name || !this.state.gender || !this.state.description || !this.state.isCheck}></input>
      </form>
    );
  }
}

export default MyProfile;


