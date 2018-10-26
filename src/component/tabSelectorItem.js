import React from 'react'
import PropTypes from 'prop-types'
export default class TabSelector extends React.PureComponent {
    static propTypes = {
        value: PropTypes.string,
        options: PropTypes.array,
        onChange: PropTypes.func
    }
    static defaultProps = {
        value: '',
        options: [],
        onChange: ()=>{}
    };
    render(){
        const {options, value, onChange} = this.props;
        return (
            <div>
                {options.map((item,index) => (
                    <h1
                    key= {index}
                    onClick={()=>onChange(item.value)}>{item.name}</h1>
                )
                )}
            </div>
        )
    }
};