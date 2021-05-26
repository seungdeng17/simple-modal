import { useState, createContext, useContext } from 'react';
import SimpleModal from '../SimpleModal';
import styled from '@emotion/styled';

const context = createContext();
export const useModal2 = () => useContext(context);

const Modal2 = ({ children }) => {
    const [isOpen, setOpen] = useState(false);
    const onCloseHandler = () => setOpen(false);

    const body = (
        <Body>
            <div>Modal2</div>
            <button onClick={onCloseHandler} type="button">
                Modal2 Close
            </button>
        </Body>
    );

    return (
        <SimpleModal
            children={children}
            context={context}
            isOpen={isOpen}
            setOpen={setOpen}
            body={body}
        />
    );
};

const Body = styled.div`
    width: 500px;
    height: 300px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export default Modal2;
