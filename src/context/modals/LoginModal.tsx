import React, { useState } from 'react';
import Modal, { IModalProps } from './Modal';

interface Props extends IModalProps {
    onLogin: (email: string, password: string) => void;
}

const LoginModal: React.FC<Props> = (props: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
    };

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
    };

    const onSubmit = (): void => {
        console.log('LoginModel onSubmit');
        if (props.onLogin) {
            props.onLogin(email, password);
        }
    };

    return (
        <Modal onConfirm={onSubmit} confirmText="Login " title="Login" onClose={props.onClose}>
            <input type="email" value={email} placeholder="Email" onChange={onEmailChange} />
            <input type="password" value={password} placeholder="Password" onChange={onPasswordChange} />
        </Modal>
    );
};

export default LoginModal;
