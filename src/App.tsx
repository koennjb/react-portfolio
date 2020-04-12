import React from 'react';
import Menu from './components/shared/Menu';
import Typist from 'react-typist';
import LoopTypist from './components/LoopTypist';

const App: React.FC = () => {
    return (
        <div>
            <Menu />
            <div className="p-10">
                <LoopTypist
                    avgTypingDelay={100}
                    stdTypingDelay={30}
                    className="text-5xl"
                    cursor={{
                        show: true,
                        blink: true,
                        element: '|',
                    }}>
                    <Typist.Delay ms={500} />
                    <span>Hello, Welcome</span>
                    <Typist.Backspace count={14} delay={1000} />
                </LoopTypist>
            </div>
        </div>
    );
};

export default App;
