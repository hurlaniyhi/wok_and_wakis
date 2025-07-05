import { useEffect, useState } from "react"
import { useFeedbackContext } from "@/providers"

export function useNotifier () {
    const {feedback: { notification }, notifier} = useFeedbackContext()
    let [time] = useState<any>(null)

    useEffect(() => {
        if(notification.status) {
          time =  setTimeout(() => {
            notifier.hide()
            }, 5000)
        }

        return () => { clearTimeout(time) }
    }, [notification.status])

    function handleCloseNotifier () {
        notifier.hide()
        clearTimeout(time)
    }

    return { notification, handleCloseNotifier }
}