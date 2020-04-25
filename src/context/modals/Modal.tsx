import React, { ReactNode } from 'react';

export interface IModalProps {
    children?: ReactNode;
    onClose: () => void;
    title?: string;
    confirmText?: string;
    cancelText?: string;
    error?: string;
    success?: string;
}

const Modal: React.FunctionComponent<IModalProps> = (props: IModalProps) => {
    return (
        <div className="z-40 pointer-events-auto modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" onClick={props.onClose}></div>

            <div className=" z-50 modal-container bg-white w-8/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                {/* <!-- Add margin if you want to see some of the overlay behind the modal--> */}
                <div className="modal-content py-4 text-left px-6">
                    <div className="flex justify-between items-center pb-3">
                        <p className="text-2xl font-bold">{props.title}</p>
                        <div className="modal-close cursor-pointer z-50" onClick={props.onClose}>
                            <svg
                                className="fill-current text-black"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                            </svg>
                        </div>
                    </div>
                    {props.error && <p className="text-red-400">{props.error}</p>}
                    {props.success && <p className="text-green-400">{props.success}</p>}
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
