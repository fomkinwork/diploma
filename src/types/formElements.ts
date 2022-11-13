import {ChangeEventHandler, HTMLInputTypeAttribute, MouseEventHandler, ReactEventHandler} from "react";

export interface FormElementError {
    text: string | null
    error: boolean
}

export interface FormElementProps {
    title: string
    id: string
    value?: string
    error?: FormElementError
    disabled?: boolean
    placeholder?: string
    name?: string
    className?: string
    required?: boolean
}

export interface InputProps extends FormElementProps{
    type?: HTMLInputTypeAttribute,
    onChange?: ChangeEventHandler<HTMLInputElement>
    onSelect?: ReactEventHandler<HTMLInputElement>
}

export interface TextAreaProps extends FormElementProps{
    onChange: ChangeEventHandler<HTMLTextAreaElement>
}