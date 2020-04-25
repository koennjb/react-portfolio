import React, { useContext } from 'react';
import { ModalContext } from './ModalContext';
import { AnimatePresence, motion } from 'framer-motion';

const ModalManager: React.FC = () => {
    const { modal } = useContext(ModalContext);
    return (
        <AnimatePresence>
            {modal ? (
                <motion.div
                    transition={{ type: 'spring', mass: 0.6 }}
                    key="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="z-40 pointer-events-auto modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
                    {modal}
                </motion.div>
            ) : (
                <div />
            )}
        </AnimatePresence>
    );
};

export default ModalManager;
