import React from 'react';

interface ModalContextType {
    modal: React.ReactNode;
    setModal: (modal: React.ReactNode | undefined) => void;
}
export const ModalContext = React.createContext<Partial<ModalContextType>>({});
