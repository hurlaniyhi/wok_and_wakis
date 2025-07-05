import api from '@/lib/axios'
import { catchErrMsg, isSuccessResponse, requestMessage } from '@/utils/normalizer'
import { useAsyncFn } from './useAsyncFn'
import { useFeedbackContext, useFoodItemsContext } from '@/providers'

export function useApi() {
    const { notifier } = useFeedbackContext()
    const { storeFoodItems } = useFoodItemsContext()

    const [fetchFoods, fetchFoodsState] = useAsyncFn(
        async () => {
            const res = await api.get('/foods')
            return { data: res.data, status: res.status }
        },
        {
            onSuccess: (data, status) => {
                if (!isSuccessResponse(data, status)) {
                    notifier.show(requestMessage(data))
                }
    
                const foodItems = data.data
                storeFoodItems(foodItems)
            },
            onError: err => notifier.show(catchErrMsg(err))
        }
    )

    return {
        fetchFoods,
        fetchFoodsState
    }
}