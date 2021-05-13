import React from 'react';
// import history from './history';
import './Login.css';
import {Link,withRouter } from 'react-router-dom';
// import Registration from './Registration';


// function () {

//   let history = useHistory();
// }
class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          fields: {},
          errors: {}
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
      };
  
      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
      }
  
      submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["emailid"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            //alert("Form submitted successfully");
            this.props.history.push("/Home")
        }
      }
      validateForm() {
      let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        if (!fields["emailid"]) {
          formIsValid = false;
          errors["emailid"] = "*Please enter your email ID.";
        }
  
        if (typeof fields["emailid"] !== "undefined") {
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["emailid"])) {
            formIsValid = false;
            errors["emailid"] = "*Please enter valid email ID.";
          }
        }
  
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }
  
        if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Please enter secure and strong password.";
          }
        }
  
        this.setState({
          errors: errors
        });
        return formIsValid;
      }
      onclick=()=>{
       
      }
  render() {
      return (     
        <div id="main-registration-container">
     
        <div id="register">
    <div className="login-box">
      <div className="login-logo">
        <a href="../../index2.html"><b>JOKESTER</b></a>
      </div>
      {/* /.login-logo */}
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form action="../../index3.html" method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm}>

            <div className=" mb-3">
              <input type="text" className="form-control" placeholder="Email" name="emailid"  onChange={this.handleChange} />
              {/* <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div> */}
              <div classname="errorMsg">{this.state.errors.emailid}</div>              
            </div>

            <div className=" mb-3">
              <input type="password" className="form-control" placeholder="Password" name="password"  onChange={this.handleChange} />
              {/* <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div> */}
              <div className="errorMsg">{this.state.errors.password}</div>              
            </div>
            
            <div className="row">
              <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">
                    Remember Me
                  </label>
                </div>
              </div>
              {/* /.col */}
              <div className="col-4">
              <button type="submit" className="btn btn-primary btn-block" value="register" >Login</button>
              </div>
              {/* /.col */}
            </div>
          </form>
          <div className="social-auth-links text-center mb-3">
            <p>- OR -</p>
            {/* <a href="#" className="btn btn-block btn-primary">
              <i className="fab fa-facebook mr-2" /> Sign in using Facebook
            </a>
            <a href="#" className="btn btn-block btn-danger">
              <i className="fab fa-google-plus mr-2" /> Sign in using Google+
            </a> */}
          </div>
          {/* /.social-auth-links */}
          <p className="mb-1">
            <a href="forgot-password.html">I forgot my password</a>
          </p>
          <p className="mb-0">
            <Link to = "/Registration" className="text-center">Register a new membership</Link>
          </p>
        </div>
        {/* /.login-card-body */}
      </div>
    </div>
    </div>
    </div>
    
  

        );
    }
  }
export default withRouter(Login);




