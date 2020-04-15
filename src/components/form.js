import React, {Component} from 'react';

class Form extends Component{
    state = {userName: ''};
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="input-group">          
                    <input type="text" className="form-control" placeholder="GitHub Username" value={this.state.userName} onChange={event => this.setState({userName: event.target.value})} required/>
                    <div className="input-group-append">
                    <button className="btn btn-primary">Add Card</button>
                    </div>
                
                </div>
               
               
            </form>
        )
    }


    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await fetch(`https://api.github.com/users/${this.state.userName}`).then(response => {
            response.json().then(data => {
               this.props.onSubmit(data);
               this.setState({userName: ''});
            })
        })
        
    };

}

export default Form;