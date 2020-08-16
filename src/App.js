import React from 'react';
import './App.less';
import MyProfile from "./components/MyProfile";

const App = () => {
  return (
    <div className='App'>
      <p className="title">My Profile</p>
      <MyProfile/>
    </div>
  );
};

export default App;