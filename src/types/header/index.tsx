import type { ReactNode } from "react";

export interface formProps {
    children: ReactNode;
}

export interface buttonProps {
    type: "button" | "submit" | "reset";
    text: string;
}