export interface Action<T> {
    type: string,
    payload: T
}

export interface KeyValuePayload {
    key: string,
    value: any
}