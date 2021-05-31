import { useState } from 'react';
import Modal from '../lib/Modal';
import { modalAnimation } from '../lib/modalAnimation';

const Modal3 = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState<boolean>(false);
    const onCloseHandler = () => setState(false);

    return (
        <Modal
            id={'Modal3'}
            consumer={children}
            state={state}
            setState={setState}
            animation={modalAnimation.slideUp}
            radius={10}
        >
            <div>
                <div>Modal3</div>
                <button onClick={onCloseHandler} type="button">
                    Modal3 Close
                </button>
            </div>
        </Modal>
    );
};

export default Modal3;
