import React from 'react';
import Card from './card';

function CardList(props){
  
    
    return(
        <div>
            {props.profiles.map(profile => <Card key = {profile.id} {...profile}/>)}
            {/* <Card {...testData[0]}/>
            <Card {...testData[1]}/> */}
        </div>
    )
}

export default CardList;