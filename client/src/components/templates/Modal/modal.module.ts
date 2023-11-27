export interface ModalInterface {
    to: string,
    display: boolean,
    onClose?: ()=> void,
    buttonText?: string,
    modalTitle: string,
    buttonLink?: string
}