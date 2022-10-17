import React, {  MouseEventHandler } from "react"
export interface ButtonProps {
    disabled?: boolean,
    // size?: "small" | "medium" | "large",
    onClick?: MouseEventHandler<HTMLButtonElement>
    children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children }) => {
    return <button disabled={disabled} onClick={onClick}></button>
}

export default Button
