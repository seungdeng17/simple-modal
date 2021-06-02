const OVERLAY_CLASS_NAME = {
    BASE: 'overlay-base',
    AFTER_OPEN: 'overlay-after',
    BEFORE_CLOSE: 'overlay-before',
};

const CLASS_NAME = {
    BASE: 'content-base',
    AFTER_OPEN: 'content-after',
    BEFORE_CLOSE: 'content-before',
};

const PREFIX = {
    HASH: 'modal-',
    PORTAL: 'portal-',
};

const ERROR_MESSAGES = {
    MODAL_ID_TYPE_ERROR: 'react-simple-modal-provider: Modal Error! id props must be a string type.',
    MODAL_PROPS_NOT_ENOUGH:
        'react-simple-modal-provider: Modal Error! Not enough essential props data. Check the Modal props. (id, consumer, state, setState)',
    MODAL_ID_INVALID_FROM_CONTEXT: (id: string) =>
        `react-simple-modal-provider: context Error! ID "${id}" is not valid`,
    MODAL_ID_INVALID_FROM_USEMODAL: (id: string) =>
        `react-simple-modal-provider: useModal Error! ID "${id}" is not valid`,
    MODAL_ID_NOT_EXIST: (id: string) =>
        `react-simple-modal-provider: useModal Error! ID "${id}" not exist. Check the order of value props passed to "ModalProvider".`,
};

export { OVERLAY_CLASS_NAME, CLASS_NAME, PREFIX, ERROR_MESSAGES };
