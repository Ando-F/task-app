import React, {Component} from "react";

class Overview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {saveValue, logValue} = this.props;

        return (
            <div id={'container'}>
                <input onChange={saveValue} type="text"/>
                <button onClick={logValue}>Submit</button>
            </div>
        )
    }
}

export default Overview;