import React , {Component} from 'react';
import Routes from './Router/Routes';
import { toast } from 'react-toastify';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
toast.configure({
  autoClose: 8000,
  draggable: false,
  //etc you get the idea
});
class App extends Component{

  render(){
    return(
      <div className="body-wrapper">
      <Routes name={"App"}/>
      </div>
    )
  }
}

export default App;
