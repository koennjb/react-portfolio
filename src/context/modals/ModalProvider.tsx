import React, { useState } from 'react';
import { ModalContext } from './ModalContext';
interface Props {
    children: React.ReactNode;
}
export const ModalProvider: React.FC<Props> = (props: Props) => {
    const [modal, setModal] = useState<React.ReactNode | undefined>();
    return (
        <ModalContext.Provider value={{ modal, setModal }}>
            <div className={`${modal && 'pointer-events-none'}`}>{props.children}</div>
        </ModalContext.Provider>
    );
};
