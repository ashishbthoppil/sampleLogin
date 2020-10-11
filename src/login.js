import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Login extends Component{
    cardStyle = {
        height : '300px',
    }

    render(){
        return(
            <div className="col-12 col-md-6 m-auto">
                <div className="animScroller">
                    <h1></h1>
                </div>
                 <Card style={this.cardStyle}>
                      <Card.Body>
                      <Card.Title className="loginHeader" style={{textAlign:'center', fontSize:'36px'}}><strong>LOGIN</strong></Card.Title>
                        <div className="inputDiv">
                            <input type="text" className="form-control" placeholder="Username" style={{textAlign:"center"}}/>
                        </div>
                        <div className="inputDiv">
                            <input type="text" className="form-control" placeholder="Password" style={{textAlign:"center"}}/> 
                        </div>  
                        <div className="loginBtnDiv">
                            <button className="btn btn-success loginBtn">Login</button>
                            <button style={{marginLeft:"10px",width:"13em"}} className="btn btn-primary">New User? <span className="fa fa-arrow-right"></span></button>
                        </div> 
                      </Card.Body>
                   </Card>
            </div>
        )
    }
}

export default Login;