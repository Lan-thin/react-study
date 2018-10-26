import React from 'react'
import PropsTypes from 'prop-types'
import withHeader from './hoc';
class Time extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            text: '1'
        }
    }
    componentDidMount() {
        this.timeId = setInterval(()=> {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timeId)
    }
    handleClick() {
        alert('button')
    }
    clickThis(name, e) {
        console.log(name)
        console.log(e)
    }
    inputText(e) {
        this.setState({
            text: e.target.value
        })
    }
    render(){
        return (
            <div>
                <h2>现在是：{this.state.date.toLocaleTimeString()}</h2>
                <button onClick = {this.clickThis.bind(this, this.state.text)}>{this.state.text}</button>
                <input type="text" onChange={this.inputText.bind(this)}/>
            </div>
        )
    }
}
export default withHeader('title')(Time)
