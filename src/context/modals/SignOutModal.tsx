import React from 'react';
import Modal, { IModalProps } from './Modal';
import { useFirebase } from '../auth/AuthenticationContext';

const SignOutModal: React.FC<IModalProps> = (props: IModalProps) => {
    const firebase = useFirebase();

    const onConfirm = (): void => {
        firebase.signOut();
        props.onClose();
    };

    return (
        <Modal confirmText="Sign Out " title="Sign Out" onClose={props.onClose}>
            <p>Are you sure you want to sign out?</p>
            <div className="flex justify-end pt-8">
                <button
                    className="px-4 bg-transparent py-2 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
                    onClick={props.onClose}>
                    Cancel
                </button>
                <button
                    className="px-4 bg-indigo-500  py-2 rounded-lg text-white hover:bg-indigo-400"
                    onClick={onConfirm}>
                    Confirm
                </button>
            </div>
        </Modal>
    );
};

export default SignOutModal;
