import React from "react";

export class Clock extends React.Component {
    state = {date: new Date(), counter:0};
    componentDidMount() {
        this.timerID = setInterval(
            this.tick,
            this.props.tm ?? 1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick = () => this.setState({date: new Date(), counter: this.state.counter+1});

    render(){
        return (
            <>
                <div>
                    <div>
                        hi!!!
                    </div>
                    <h1>Hello, world!{this.state.counter}</h1>
                    <Dial date={this.state.date}/>
                </div>
            </>
        );
    }
}

class Dial extends React.Component {
    render(){
        return (
            <h2>Now {this.props.date.toLocaleTimeString()}.</h2>
        )
    }
}
