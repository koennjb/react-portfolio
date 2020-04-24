import React, { useContext } from 'react';
import { ModalContext } from './ModalContext';

const ModalManager: React.FC = () => {
    const { modal } = useContext(ModalContext);
    if (modal) {
        return <div>{modal}</div>;
    }
    return <div></div>;
};

export default ModalManager;
