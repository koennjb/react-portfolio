import React, { CSSProperties } from 'react';
import Menu from './components/shared/Menu/Menu';
import Typist from 'react-typist';
import LoopTypist from './components/LoopTypist';
import profile from './img/Profile.png';
import './css/App.css';

const gridStyles: CSSProperties = {
    gridTemplateColumns: '0.5fr 0.25fr 0.5fr 2fr',
    gridTemplateRows: '0.1fr 0.25fr 1fr 0.25fr',
    gridGap: '2rem',
};

const App: React.FC = () => {
    return (
        <div>
            <Menu />
            <div className="grid mx-10" id="Main">
                <LoopTypist
                    avgTypingDelay={100}
                    stdTypingDelay={30}
                    className="col-start-1 row-start-1 z-10 text-right font-bold md:text-4xl sm:text-4xl text-3xl sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-span-1"
                    cursor={{
                        show: true,
                        blink: true,
                        element: '|',
                    }}>
                    <Typist.Delay ms={500} />
                    <span>Developer</span>
                    <Typist.Backspace count={14} delay={1000} />
                    <span>Designer</span>
                    <Typist.Backspace count={14} delay={1000} />
                    <span>Photographer</span>
                    <Typist.Backspace count={14} delay={1000} />
                    <span>Teacher</span>
                    <Typist.Backspace count={14} delay={1000} />
                </LoopTypist>
                <div className="profile-pic-wrapper row-start-2 sm:col-start-2 sm:col-end-4 sm:row-start-1 sm:row-end-4">
                    <img src={profile} style={{}} className="profile-pic" />
                </div>

                <div className="col-start-1 row-start-3 row-end-4 sm:col-start-4 sm:col-end-5 sm:row-start-1 sm:row-end-4 lg:mt-8 md:mt-0">
                    <p className="font-bold text-xl">Welcome, my name is Koenn</p>
                    <br />
                    <p>
                        My name is Koenn Becker. I am a photographer, graphic designer and software development student
                        in the Seattle, WA area. I have a passion for making things look nice, which, I hope you can see
                        by looking through my portfolios. I am excited about the release of this website as it is
                        something I have been wanting to do for a long time now. I hope you enjoy exploring this site as
                        much as I enjoyed creating it,
                    </p>
                    <br />
                    Best, Koenn
                </div>
                {/* <img src={profile} className="col-start-5 col-span-1 row-start-1 row-end-4" /> */}
            </div>
        </div>
    );
};

export default App;
