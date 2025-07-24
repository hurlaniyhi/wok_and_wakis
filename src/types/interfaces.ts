import { ReactNode } from "react"
import { CartItem } from "@/types"

export interface Action<T> {
    type: string,
    payload: T
}

export interface KeyValuePayload {
    key: string,
    value: any
}

export interface ICartProvider {
    children: ReactNode,
    initialCartItems?: Array<CartItem>
}