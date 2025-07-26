import api from '@/lib/axios'
import { catchErrMsg, isSuccessResponse, requestMessage } from '@/utils/normalizer'
import { useAsyncFn } from './useAsyncFn'
import { useFeedbackContext, useFoodCatalogContext } from '@/providers'

export function useApi() {
    const { notifier } = useFeedbackContext()
    const { storeFoodItems } = useFoodCatalogContext()

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

    const [searchFoods, searchFoodsState] = useAsyncFn(
        async (searchParam: string, searchValue: string) => {
            const res = await api.get('/foods/search', {
                params: {
                    searchParam,
                    searchValue
                }
            })
            return { data: res.data, status: res.status }
        },
        {
            onSuccess: (data, status) => {
                if (!isSuccessResponse(data, status)) {
                    notifier.show(requestMessage(data))
                }
    
                const foodItems = data.data
                storeFoodItems(foodItems)
            }
        }
    )

    return {
        fetchFoods,
        fetchFoodsState,
        searchFoods,
        searchFoodsState
    }
}