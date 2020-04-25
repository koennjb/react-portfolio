import React, { useState } from 'react';
import Modal, { IModalProps } from './Modal';
import { useFirebase } from '../auth/AuthenticationContext';
import LoginForm from '../../components/forms/LoginForm';

interface Props extends IModalProps {
    onLogin?: (email: string, password: string) => void;
    onClose: () => void;
}

const LoginModal: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const firebase = useFirebase();

    const onSubmit = (email: string, password: string): void => {
        console.log('LoginModel onSubmit');
        setLoading(true);
        firebase
            .signIn(email, password)
            .then(() => {
                setLoading(false);
                props.onClose();
            })
            .catch((error: Error) => {
                setLoading(false);
                setError(error.message);
            });
    };

    return (
        <Modal confirmText="Login " title="Login" onClose={props.onClose}>
            {error && <p className="text-red-400">{error}</p>}
            <LoginForm onSubmit={onSubmit} loading={loading} onCancel={props.onClose} />
            {/* <input type="email" value={email} placeholder="Email" onChange={onEmailChange} />
            <input type="password" value={password} placeholder="Password" onChange={onPasswordChange} /> */}
        </Modal>
    );
};

export default LoginModal;
