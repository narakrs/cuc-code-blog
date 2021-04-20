import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class login extends Component {
    onClick= async ()=>{
        console.log('callApi');
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:{
                email:"thanhse123@gmail.com",
                password:"se2012520"
            }
        };
        try {
            const fetchResponse = await fetch(`http://localhost:8797/users/login`, settings);
            const data = await fetchResponse.json();
            console.log(data);
        } catch (e) {
            console.log(e);
        }    
    }
    render() {
        return (
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                <input></input>
                <input></input>
                <div style={{width:70,height:35, backgroundColor:'blue',lineHeight:"35px",textAlign:'center',margin:5}} onClick={this.onClick}>Login</div>
            </div>
        )
    }
}
