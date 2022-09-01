import React,{ Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profil from './Profile/profil';
import Time from '../src/Time'

class App extends Component {
  state = {
    fullname: 'Khaled Bahia',
    bio: 'Im Full-Stack javascript developer',
    profession: ' React Developer',
    imgprofil: './pp.png',
   counter: 0
}

  render() {
    return  (
    <div>
    <button className="btn btn-sm btn-outline-primary w-100" onClick={()=>this.setState({show:!this.state.show})} >   {this.state.show?"Hide":"Show"} </button>
       {this.state.show? <Profil/> :null}

       </div>

    );
  }
}
  export default App;
