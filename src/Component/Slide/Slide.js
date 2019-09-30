import React, { Component } from 'react'

export default class Slide extends Component {
    render() {
        console.log(this.props)
        return (
            <div style={{width:'20%',height:'200px',padding:'0 50px'}}>
                 
                 <img src={this.props.img} height="200px"  alt="img" />
            </div>
        )
    }
}
