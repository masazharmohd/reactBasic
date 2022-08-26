import React from "react";


class Contact extends React.Component {
    interval
    constructor(props){
        super(props)
        this.state = {
            timer: 0
        }

    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({timer: prevState.timer + 1}))
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render(){
        return(
            <div>
                Class Timer : {this.state.timer}
                <button onClick={()=> clearInterval(this.interval)}>Clear Timer</button>
            <h1>Contact Page {this.props.data.name} </h1>
            {this.props.children}
            </div>
        )
    }
}

export default Contact;