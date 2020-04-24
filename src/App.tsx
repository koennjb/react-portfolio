import React, { useState, useEffect } from 'react';
import Menu from './components/shared/Menu/Menu';
import Typist from 'react-typist';
import LoopTypist from './components/LoopTypist';
import profile from './img/Profile.png';
import './css/App.css';
import { INTRO, INTRO_SIGNATURE } from './constants/strings';
import ProjectList from './components/projects/ProjectList';
import { PROJECTS } from './constants/TestData';
import { ModalProvider } from './context/modals/ModalProvider';
import ModalManager from './context/modals/ModalManager';
import { User } from 'firebase/app';
import 'firebase/auth';
import { useFirebase } from './context/AuthenticationContext';
import { UserContext } from './context/auth/UserContext';

const IntroSection: React.FC = () => (
    <div className="grid" id="Main">
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
            <img src={profile} style={{}} className="profile-pic" alt="Koenn Becker" />
        </div>

        <div className="col-start-1 row-start-3 row-end-4 sm:col-start-4 sm:col-end-5 sm:row-start-1 sm:row-end-4 lg:mt-8 md:mt-0">
            <p className="font-bold text-xl">Welcome, my name is Koenn</p>
            <br />
            <p>{INTRO},</p>
            <br />
            {INTRO_SIGNATURE}
        </div>
        {/* <img src={profile} className="col-start-5 col-span-1 row-start-1 row-end-4" /> */}
    </div>
);

const App: React.FC = () => {
    const [user, setUser] = useState<User | undefined>(undefined);
    const fb = useFirebase();
    useEffect(() => {
        const listener = fb.auth.onAuthStateChanged((authUser) => {
            authUser ? setUser(authUser) : setUser(undefined);
        });
        return function cleanup(): void {
            return listener!();
        };
    });
    return (
        <UserContext.Provider value={user}>
            <ModalProvider>
                <ModalManager />
                <div>
                    <Menu />
                    <div className="mx-10">
                        <IntroSection />
                        <ProjectList projects={PROJECTS} />
                    </div>
                </div>
            </ModalProvider>
        </UserContext.Provider>
    );
};

export default App;
