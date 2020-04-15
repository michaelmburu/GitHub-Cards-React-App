import React, {Component} from 'react';
import Form from './form';
import CardList from './cardlist';

class Github extends Component {
    constructor(props){
        super(props)
        const testData = [
            {login: "Michael Mburu", avatar_url: "https://avatars0.githubusercontent.com/u/60002391?v=4", company:"Microsoft"},
            {login: "Gaearon", avatar_url:"https://avatars0.githubusercontent.com/u/810438?v=4", company:"Facebook"}
        ];

        this.state = {
            // profiles: testData
            profiles: []
        };

        
    }
    addNewProfile = (profileData) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData]
        }))
    }
    render(){
        
        return(
            <div className="App-header">
                {this.props.title}
                <Form onSubmit={this.addNewProfile} />
                <br/>
                <CardList profiles={this.state.profiles} />
            </div>
        )
    }
}
export default Github;