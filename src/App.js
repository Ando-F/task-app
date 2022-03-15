import './App.css';
import Overview from "./components/Overview";
import {Component} from "react";
import uniqid from "uniqid";

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
        }, () => {
            console.log(this.state.list);
        });
    };

    render() {
        return (
            <div>
                <Overview saveValue={this.saveValue} logValue={this.onClick}/>
                <ul>
                    {this.state.list.map(item => (
                        <li key={uniqid()}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default App;
