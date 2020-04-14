import React from 'react';
import Menu from './components/shared/Menu/Menu';
import Typist from 'react-typist';
import LoopTypist from './components/LoopTypist';
import Undraw from 'react-undraw';
import { ReactComponent as PlusPattern } from './img/plus.svg';
import plus from './img/plus.svg';
import { url } from 'inspector';

const App: React.FC = () => {
    return (
        <div>
            <Menu />
            <div className="flex justify-center">
                <div className="p-10 flex-grow grid grid-cols-4 grid-rows-3 justify-center max-w-screen-xl">
                    <div className=" text-5xl z-10 w-full h-64 row-start-1 row-span-3 col-start-1 col-span-2">
                        <LoopTypist
                            avgTypingDelay={100}
                            stdTypingDelay={30}
                            className=""
                            cursor={{
                                show: true,
                                blink: true,
                                element: '|',
                            }}>
                            <Typist.Delay ms={500} />
                            <span>Hello, Welcome to the React Portfolio</span>
                            <Typist.Backspace count={14} delay={1000} />
                        </LoopTypist>
                    </div>
                    <div
                        className="col-start-2 col-span-3 row-start-1 row-span-3 w-1/2 w-full"
                        style={{ backgroundImage: `url(${plus}` }}>
                        {/* <Undraw name="programmer1" primaryColor="green" height="500px" /> */}
                        {/* <PlusPattern width="60" height="60" repeatCount={10} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
