import React from 'react';
import ReactDOM from 'react-dom';

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

ReactDOM.render(<Welcome name="test"/>, document.getElementById('root'));