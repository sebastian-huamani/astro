import React from 'react';

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            buttonState: false
        }
        this.handleState = this.handleState.bind(this);
    }

    handleState(value){
        this.setState({
            buttonState: value
        })
    }

    render(){
        return(
            <button className='border rounded-md px-4 py-2 text-center' onClick={() => this.handleState(!this.state.buttonState)}>
                { this.state.buttonState ? this.props.true : this.props.false}
            </button>
        );
    }
}
export default Button;