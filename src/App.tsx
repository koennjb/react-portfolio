import React from 'react';
import './App.css';
import Button from './components/Button';

const App: React.FC = () => {
    return (
        <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
            <h1>Super cool page</h1>
            <Button onClick={(): void => console.log('I was clicked')}>I am a button</Button>
        </div>
    );
};

export default App;
