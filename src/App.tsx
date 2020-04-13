import React from 'react';
import Menu from './components/shared/Menu/Menu';
import Typist from 'react-typist';
import LoopTypist from './components/LoopTypist';
import Undraw, { UndrawProgramming } from 'react-undraw';

const App: React.FC = () => {
    return (
        <div>
            <Menu />
            <div className="p-10" style={{ height: '1200px' }}>
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
                <UndrawProgramming primaryColor="#f" height="100px" />
            </div>
        </div>
    );
};

export default App;
