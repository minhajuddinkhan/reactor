/**
 * Created by minhaj on 7/12/17.
 */

import React, { Component } from 'react';

class Login extends Component {


    constructor(props) {
        super(props)
        this.state = {asd: '' };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: event.value
        });
    }



    yolo(args) {
            console.log(this.state)
    }

    render() {

        
        return <div>

            <form>
                <input type="text" name="asd" value={this.state.asd} onChange={this.handleChange}/>
            </form>

            <button onClick={() => this.yolo()}> click me !</button>
        </div>
    }
}

export default Login