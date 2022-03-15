import './App.css';
import Overview from "./components/Overview";
import React, {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            list: [],
        };

        this.saveValue = this.saveValue.bind(this);
        this.onClick = this.onClick.bind(this);
    };

    saveValue(event) {
        this.setState({
            value: event.target.value,
        });
    };

    onClick() {
        this.setState({
            list: [...this.state.list, this.state.value],
        });
    };

    render() {
        return (
            <div>
                <div id={'container'}>
                    <input onChange={this.saveValue} type="text"/>
                    <button onClick={this.onClick}>Submit</button>
                </div>
                <Overview array={this.state.list}/>
            </div>
        )
    }
}

export default App;
