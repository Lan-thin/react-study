import React from 'react'
import PropTypes from 'prop-types'
import TabSelector from './tabSelectorItem'
const options = [
    {
        name: "Red",
        value: "red"
    }, {
        name: "Blue",
        value: "blue"
    }, {
        name: "Orange",
        value: "orange"
    }
]
export default class Tab extends React.PureComponent {
    state = {
        color: null
    };
    render() {
        return (
            <TabSelector
            options = {options}
            value={this.state.color}
            onChange={c => this.setState({
                color: c
            })}
            />
        )
    }
}