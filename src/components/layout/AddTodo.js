import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    // This is a component state : only exists within the AddTodo component
    state = {
        title : ''
    }

    onChange = (e) => this.setState({title : e.target.value }); // e.target.value gives us whatever we type in the add Todo input box. We are setting title to whatever value we type in.

    //To use this for many fields such as username, password, etc, writing an onChange function will be tough. So instead you can write onChange = (e) => this.setState({[e.target.name] : e.target.value});


    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form onSubmit = {this.onSubmit} style = {{ display: 'flex' }}>
                <input 
                type = "text" 
                name = "title" 
                style = {{flex:'10',padding:'5px'}}
                placeholder="Add Todo..."
                value = {this.state.title}
                onChange = {this.onChange}
                />
                <input 
                     type = "submit"
                     value = "submit"
                     className="btn"
                     style={{flex:'1'}}
                />
            </form>
        )
    }
}


AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}


export default AddTodo
