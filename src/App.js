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

    onClick(event) {
        event.preventDefault();
        this.setState({
            list: this.state.list.concat(this.state.value),
            value: '',
        });
    };

    render() {
        return (
            <div>
                <form id={'container'}>
                    <label htmlFor="taskInput">Enter task</label>
                    <input
                        onChange={this.saveValue}
                        value={this.state.value}
                        type="text"
                        id="taskInput"/>
                    <button onClick={this.onClick} type="submit">Submit</button>
                </form>
                <Overview array={this.state.list}/>
            </div>
        )
    }
}

export default App;
