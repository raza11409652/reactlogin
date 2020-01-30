import  React , { Component } from "react";
import {toast} from 'react-toastify';
import postdata from '../../Services/Postdata';
import './Login.css'
import logo from '../../logo.svg' 
import { Redirect } from "react-router-dom";
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            mobile :'' ,
            password:'' , 
            isLoading:false , 
            redirect : false

        } ; 
        this.login = this.login.bind(this);
        // this.notify = this.notify.bind(this );
    }

   
    login(e){
        this.setState({isLoading:true})
        e.preventDefault();
        // console.log("login Works" , this.state) ; 
        postdata(this.state).then((result)=>{
            // console.log(result.data);
            //  console.log(result);
            if(result.error === true){
                // console.log(result.msg);
                toast.error(result.msg);
               
            }else{
                toast.success("Login Success")
                this.setState({redirect : true})
            }
            
            
            
            
        })   ; 
    }
    change = (e)=>{
        this.setState({[e.target.name] : e.target.value}); 
        // console.warn(this.state)
    }
    render(){
        if(this.state.redirect){
            return(
                <Redirect to="/dash"></Redirect>
            )
        }
        return(
          <div className="login-wrapper">
              <div className="login-form">
                 <div className="logo-wrapper">
                 <img className="company-logo" alt="Logo not found" 
                  src={logo}></img>
                 </div>
                  <p className="tagline">Manage everything important.</p>
                  <form method="POST" onSubmit={this.login}>
                    <div className="form-group">
                        <label>Enter your mobile</label>
                        <input type="text" name="mobile" onChange={this.change} className="form-control"/>
                    </div>
                    <div className="form-group">
                            <label>Enter your password</label>
                        <input type="password" name="password" onChange={this.change} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-danger" type="submit">Login</button>
                    </div>
                  </form>
                  <p>Forget Password ? <a href='/forget'>Reset Now</a></p>
              </div>
          </div>
        )
    }
}
export default Login;