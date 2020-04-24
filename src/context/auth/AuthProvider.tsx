import React, { useState } from 'react';
import FirebaseAuth from '../../firebase/FirebaseAuth';
import { FireaseContextProvider } from '../AuthenticationContext';
interface Props {
    children: React.ReactNode;
}
export const ModalProvider: React.FC<Props> = (props: Props) => {
    const [modal, setModal] = useState<React.ReactNode | undefined>();
    return <FireaseContextProvider value={new FirebaseAuth()}>{props.children}</FireaseContextProvider>;
};
