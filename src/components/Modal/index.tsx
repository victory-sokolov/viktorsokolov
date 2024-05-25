"use client";

import type { ReactProps } from "src/types/types";
import { ModalProvider } from "styled-react-modal";

export const Modal = ({ children }: ReactProps) => {
    return <ModalProvider>{children}</ModalProvider>;
};
