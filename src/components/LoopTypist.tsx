import React, { useState, useEffect } from 'react';
import Typist, { TypistProps } from 'react-typist';
import '../css/typist.css';

interface Props extends TypistProps {
    children?: any;
}
const LoopTypist: React.FC<TypistProps> = (props: Props) => {
    const [done, setDone] = useState(false);
    const { children } = props;

    useEffect(() => {
        if (done) {
            setTimeout(() => setDone(false), 250);
        }
    });

    if (done) {
        return <p>&nbsp;</p>;
    }

    return (
        <Typist {...props} onTypingDone={(): void => setDone(true)}>
            {children}
        </Typist>
    );
};
export default LoopTypist;
