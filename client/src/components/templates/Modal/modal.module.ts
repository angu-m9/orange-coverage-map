export interface ModalInterface {
    to: string,
    display: boolean,
    onClose: ()=> void,
    button: string,
    modalTitle: string,
    modalText: string
}