import React from "react";

import { Button, Input } from "reactstrap";

import './style.css';

export default class CreatePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const { value } = this.state;

        if (value.length > 0 && value !== ' ') {
            this.props.onAddPost(this.state.value);
            this.setState({
                value: ''
            });
        } else {
            alert('Invalid input length');
        }
    }

    render() {
        const { value } = this.state;

        return (
            <form className='create-task' onSubmit={this.handleSubmit} >
                <Input type='text' placeholder='Add your task right here!' value={value} onChange={this.handleChange} />
                <Button color="primary">ADD</Button>
            </form>
        )
    }
}