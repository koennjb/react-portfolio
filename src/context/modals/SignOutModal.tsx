import React, { useState } from 'react';
import Modal, { IModalProps } from './Modal';
import { useFirebase } from '../AuthenticationContext';

const SignOutModal: React.FC<IModalProps> = (props: IModalProps) => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const firebase = useFirebase();

    const onConfirm = (): void => {
        firebase.signOut();
        if (props.onConfirm) props.onConfirm();
    };

    return (
        <Modal
            onConfirm={onConfirm}
            confirmText="Sign Out "
            title="Sign Out"
            onClose={props.onClose}
            success={success}
            error={error}>
            Are you sure you want to sign out?
        </Modal>
    );
};

export default SignOutModal;
