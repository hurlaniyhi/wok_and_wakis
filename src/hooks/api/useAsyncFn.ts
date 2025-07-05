import { useFeedbackContext } from '@/providers'
import { catchErrMsg } from '@/utils/normalizer'
import { useState, useCallback } from 'react'

type AsyncState<T> = {
    loading: boolean
    error: Error | null
    data: T | null,
    status?: number
}

type Options<TResult> = {
    onError?: (err: Error) => void
    onSuccess?: (data: TResult, statusCode: number) => void
}

export function useAsyncFn<TArgs extends any[], TResult>(
    fn: (...args: TArgs) => Promise<{ data: TResult; status: number }>,
    options: Options<TResult> = {}
) {
    const { notifier } = useFeedbackContext()
    const {
        onError = null,
        onSuccess = () => {},
    } = options
    const [state, setState] = useState<AsyncState<TResult>>({
        loading: false,
        error: null,
        data: null,
        status: undefined
    })

    const wrappedFn = useCallback(
        async (...args: TArgs): Promise<TResult|null> => {
            setState({ 
                loading: true, 
                error: null,
                data: null,
                status: undefined 
            })
            
            try {
                const { data, status } = await fn(...args)
                setState({ loading: false, error: null, data, status })
                
                if (onSuccess) onSuccess(data, status)
                return data
            } 
            catch (error: any) {
                const status = error?.response?.status
                setState({ loading: false, error, data: null, status })

                if (onError) onError(error)
                else notifier.show(catchErrMsg(error))
                
                return null
            }
        },
        [fn, onError, onSuccess]
    )

    return [wrappedFn, state] as const
}