import React, { Component } from 'react';

class Ex003 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Vinícius',
            email: 'email@generico.com',
            feed: [
                { id: 1, username: 'Patrícia', likes: 10, comments: 2 },
                { id: 2, username: 'Alberto', likes: 120, comments: 10 },
                { id: 3, username: 'Ana', likes: 300, comments: 150 },
            ]
        }
        this.mudarEmail = this.mudarEmail.bind(this); // permite que o método altere o state.
    }

    mudarEmail(newEmail) {
        this.setState({ email: newEmail.target.value });
    }

    render() {
        return (
            /*
            this.state.feed.map((item) => {
                return <div key={item.id}>{item.username}</div>
            })*/
            <div>
                <div>{this.state.email}</div>
                <input type="text" name="email" onChange={(e) => this.mudarEmail(e)} />
            </div>
        );
    }
}

export default Ex003;
