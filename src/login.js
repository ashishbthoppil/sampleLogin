import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
           scrollerClass : "animScroller",
        };
    }
    
    cardStyle = {
        height : '300px',
    }

    showReg = (e) => {
      console.log('asd');
    }

    render(){
        return(
            <div className="col-12 col-md-6 m-auto">
                <div id="scroller" className={this.state.scrollerClass}>
                    <h1></h1>
                </div>
                 <Card style={this.cardStyle}>
                      <Card.Body>
                      <Card.Title className="loginHeader" style={{textAlign:'center', fontSize:'36px'}}><strong>LOGIN</strong></Card.Title>
                        <div className="inputDiv">
                            <input type="text" className="form-control" placeholder="Username" style={{textAlign:"center"}}/>
                        </div>
                        <div className="inputDiv">
                            <input type="password" className="form-control" placeholder="Password" style={{textAlign:"center"}}/> 
                        </div>  
                        <div className="loginBtnDiv">
                            <button className="btn btn-success loginBtn">Login</button>
                            <button style={{marginLeft:"10px",width:"14em"}} className="btn btn-primary" onClick={this.showReg.bind(this)}>New User? <span className="fa fa-arrow-right"></span></button>
                        </div> 
                      </Card.Body>
                   </Card>
            </div>
        )
    }
}

export default Login;