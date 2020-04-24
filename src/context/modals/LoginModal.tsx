import React, { useState } from 'react';
import Modal, { IModalProps } from './Modal';
import { useFirebase } from '../AuthenticationContext';

interface Props extends IModalProps {
    onLogin?: (email: string, password: string) => void;
}

const LoginModal: React.FC<Props> = (props: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const firebase = useFirebase();

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
    };

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
    };

    const onSubmit = (): void => {
        console.log('LoginModel onSubmit');
        firebase
            .signIn(email, password)
            .then((user) => {
                if (user) {
                    setSuccess(`User logged in! ${user.user?.email}`);
                } else {
                    setError('Some other error happened, did not log in');
                }
            })
            .catch((error: Error) => {
                setError(error.message);
            });
    };

    return (
        <Modal
            onConfirm={onSubmit}
            confirmText="Login "
            title="Login"
            onClose={props.onClose}
            success={success}
            error={error}>
            <input type="email" value={email} placeholder="Email" onChange={onEmailChange} />
            <input type="password" value={password} placeholder="Password" onChange={onPasswordChange} />
        </Modal>
    );
};

export default LoginModal;
