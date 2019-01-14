import React from 'React';

class State extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : '默认值'
        };
        this.changeText = this.changeText.bind(this);
    }

    changeText(event) {
        this.setState({
            name: event.target.value
        });
    }

    resetText = (event) => {
        this.setState({
            name : ''
        });
    };


    render(){
        return (
            <div>
                <div>
                    <input type='text' value={this.state.name} onChange={this.changeText}/>
                </div>

                <div>
                    name的状态：  {this.state.name}
                </div>

                <div>
                    <input type="button" value='重置' style={{
                       margin : '30px'
                    }} onClick={this.resetText}/>
                </div>

            </div>
        );
    }
}

export default State;