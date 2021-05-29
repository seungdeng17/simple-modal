import { useState, useCallback, useEffect, useMemo } from 'react';
import { createModalContext } from './modalContext';
import ModalBody from './ModalBody';
import { stateBundler } from './utils';

const Modal = ({
    id,
    children,
    consumer,
    state = false,
    setState,
    allowClickOutside,
    duration,
    overlayColor,
    animation,
    vertical,
    horizontal,
}) => {
    if (!id || !consumer || !setState) throw new Error('react-simple-modal-provider: Modal Error! Not enough essential props data. Check the Modal props. (id, consumer, state, setState)');
    
    duration = animation?.type && !duration ? 150 : duration;

    const Context = useMemo(() => createModalContext(id), []);
    const [trigger, setTrigger] = useState(false);
    const open = useCallback(() => stateBundler([setState, setTrigger], true), []);
    const close = useCallback(() => setState(false), []);
    const keyUpHandler = useCallback(({ key }) => key === 'Escape' && close(), []);

    useEffect(() => {
        if (!state) return window.removeEventListener('keyup', keyUpHandler);
        window.addEventListener('keyup', keyUpHandler);
    }, [state]);

    return (
        <Context.Provider value={{ open, close }}>
            {consumer}
            <ModalBody
                trigger={trigger}
                state={state}
                close={close}
                allowClickOutside={allowClickOutside}
                duration={duration}
                overlayColor={overlayColor}
                animation={animation}
                vertical={vertical}
                horizontal={horizontal}
            >
                {children}
            </ModalBody>
        </Context.Provider>
    );
};

export default Modal;
