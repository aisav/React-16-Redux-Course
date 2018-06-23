import React, {Component} from 'react';

import './NewMessage.css';

class NewMessage extends Component {
    state = {
        name: '',
        email: '',
        content: '',
        submited: false
    }

    postDataHandler = () => {
        const post = {
            name: this.state.name,
            body: this.state.content,
            email: this.state.email
        }
        this.props.onNewMessage(post)

    }

    render() {

        return (
            <div className="NewPost">
                <h1>Add a Message</h1>
                <label>Name</label>
                <input type="text" value={this.state.name}
                       onChange={(event) => this.setState({name: event.target.value})}/>
                <label>Content</label>
                <textarea rows="4" value={this.state.content}
                          onChange={(event) => this.setState({content: event.target.value})}/>
                <label>Email</label>
                <input type="text" value={this.state.email}
                       onChange={(event) => this.setState({email: event.target.value})}/>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewMessage;