import React, {Component} from "react";
import uniqid from "uniqid";

class Overview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {array} = this.props;

        return (
            <ul>
                {array.map(item => (
                    <li key={uniqid()}>{item}</li>
                ))}
            </ul>
        )
    }
}

export default Overview;