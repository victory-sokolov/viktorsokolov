"use client";

import { ModalProvider } from "styled-react-modal";

export const Modal = ({ children }) => {
    return <ModalProvider>{children}</ModalProvider>;
};
