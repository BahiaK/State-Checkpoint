import { Component } from "react";
import Time from "../Time";
class Profil extends Component {
    state = {
        fullname: 'Khaled Bahia',
        bio: 'Im Full-Stack javascript developer',
        profession: ' React Developer',
        imgprofil: './pp.png',
        counter: 0
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ counter: this.state.counter + 1 })
        }, 1000)
        

    }

    render() {
      return <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-3">
        <div className="d-flex align-items-center">
          <div className="image">
          <img src={this.state.imgprofil} className="rounded" width={150} />
          </div>
          <div className="ml-3 w-100">
            <h4 className="mb-0 mt-0">{this.state.fullname}</h4>
            <span> {this.state.bio } / </span>
            <span>{this.state.profession}</span>
            <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
              <div className="d-flex flex-column">
                <span className="articles">Counter</span>
                <span className="number1">{this.state.counter}</span>
              </div>
              <div className="d-flex flex-column">
                <span className="followers">Followers</span>
                <span className="number2">980</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rating">Rating</span>
                <span className="number3">8.9</span>
              </div>
            </div>
            <div className="button mt-2 d-flex flex-row align-items-center">
              <button className="btn btn-sm btn-outline-primary w-100">Chat</button>
              <button className="btn btn-sm btn-primary w-100 ml-2">Follow</button>
              <Time/>

            </div>
          </div>
        </div>
      </div>
    </div>
    
    }
  }

  export default Profil ;