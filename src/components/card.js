import React, {Component} from 'react';

class Card extends Component{
    render(){
        const profile = this.props;
        return(
            <div className="github-profile">
                <img height = "200" width = "200" src={profile.avatar_url}/>
                <div className="info">
                    <div className="name" style={{}}>{profile.login}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        )
    }
}

export default Card;