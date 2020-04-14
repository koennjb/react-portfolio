import React, { useState, useEffect } from 'react';
import Typist, { TypistProps } from 'react-typist';
import '../css/typist.css';

interface Props extends TypistProps {
    children?: any;
    timeout?: number;
}

const defaultProps: Props = {
    timeout: 1000,
};

const LoopTypist: React.FC<TypistProps> = (props: Props) => {
    const [typing, setTyping] = useState<boolean>(true);
    const { children } = props;

    useEffect(() => {
        setTimeout(() => setTyping(true), props.timeout);
    }, [typing]);

    return typing ? (
        <Typist {...props} onTypingDone={(): void => setTyping(false)}>
            {children}
        </Typist>
    ) : (
        <div className={`Typist ${props.className}`}>
            <span className={` Cursor ${props.cursor?.blink && ' Cursor--blinking'}`}>{props.cursor?.element}</span>
        </div>
    );
};

LoopTypist.defaultProps = defaultProps;

export default LoopTypist;
