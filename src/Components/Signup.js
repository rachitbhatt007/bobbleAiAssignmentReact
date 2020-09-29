import React from 'react';

import {FormGroup,Input} from  'reactstrap';
import {FacebookLoginButton,GoogleLoginButton} from 'react-social-login-buttons';

class Signup extends React.Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:"",
            isAuthenticated:true,
            resdata:'',
        }
    }
 register(){
     const payload = {
         email:this.state.email,
         password:this.state.password
     }
      fetch("https://reqres.in/api/register",{
          method:'POST',
          headers:{
              'Accept':'application/json',
              'Content-type':'application/json'
          },
          body:JSON.stringify(payload)
      })
      .then(res=>res.json())
      .then((data)=>{
          this.setState({resdata:data.token,isAuthenticated:true})
      },
      (error)=>{
          console.log(error);
          this.setState({
              isAuthenticated:false,
              resdata:"No data from server"
          })
      })
       }


        render(){
            if(this.state.isAuthenticated){
        return(
            <div className="container col-sm-9 col-md-7 col-lg-5">
            <div className='border mt-5'>
              <form className="login-form ">
              <p className="mt-0"><strong>Sign Up</strong></p>
              <h2>Create Your Account</h2>
              <p>lorem inpsum dolor,casas asd askhd sadh</p>
              <FormGroup className="row justify-content-center">
              <FacebookLoginButton className="ml-3 col-5"/>
              <GoogleLoginButton className="col-5"/>
              </FormGroup>
              <p>or</p>
              <div className=" row justify-content-center">
                <FormGroup className="col-10">
                <Input type="text" placeholder="First Name"/>
                </FormGroup>
                <FormGroup className="col-10">
                <Input type="text" placeholder="Last Name"/>
                </FormGroup>
                <FormGroup className="col-10">
                <Input type="email" placeholder="Email Address" onChange={(event)=>this.setState({email:event.target.value})}/>
                </FormGroup>
                <FormGroup className="col-10">
                <Input type="password" placeholder="Password"  onChange={(event)=>this.setState({password:event.target.value})}/>
           
                </FormGroup>
                <p>By clicking Sign Up,you agree to our <a href="">terms of Use</a> and our <a href="">Privacy Policy</a></p>
                <button className="btn btn-primary col-10 mb-5" onClick={()=>{this.register()}}>Sign up</button>
                </div>
                </form>
            </div>
            </div>
        );
    }
    else{
        return(<p>No data was returned</p>)
    }
}
}

export default Signup;