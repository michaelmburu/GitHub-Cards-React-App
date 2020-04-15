import React, {useState} from 'react';
import Button from './button';
import Display from './display';

function Home(){
    const [ counter, setCounter] = useState(0);
    const incrementCounter = (increment) => setCounter( counter + increment);
    return(
        <div>
            <Button onClick = {incrementCounter} increment={5}/>,
            <Button onClick = {incrementCounter} increment={10}/>,
            <Button onClick = {incrementCounter} increment={100}/>
            <Display message={counter}/>
            
        </div>
    )
}

export default Home;