import { Action, FeedbackContextType, KeyValuePayload } from "@/types";
import React, {useContext, useReducer} from "react";

const FeedbackContext = React.createContext<FeedbackContextType|null>(null)

const feedbackReducer = (state: any, action: Action<KeyValuePayload>) => {
    switch(action.type){
        case "set-feedback": 
            return { ...state, [action.payload.key]: action.payload.value }
    }
}

export const FeedbackProvider = (props: any) => {
    const [state, dispatch] = useReducer(feedbackReducer, {
        isLoading: false,
        notification: {
            status: false, 
            message: '', 
            title: '', 
            type: 'success'
        }
    })

    function loader (value: boolean) {
        dispatch({type: "set-feedback", payload: {key: 'isLoading', value }})
    }

    const notifier = {
        show: async function (message: string, title: string|null = null, type?: string) {
            const messageType = type ? type.toLowerCase() : 'error'
            const messageTitle = title ? title : title === null ? (messageType === 'success' ? 'Success Response' : 'Error Response') : ''
            
            dispatch({
                type: "set-feedback", 
                payload: {
                    key: 'notification', 
                    value: { 
                        status: message ? true : false, 
                        message, type: messageType, 
                        title: messageTitle 
                    }
                }
            })
        },
        hide: async function () {
            dispatch({
                type: "set-feedback", 
                payload: {
                    key: 'notification', 
                    value: { 
                        status: false, 
                        message: state.notification.message,
                        type: state.notification.type, 
                        title: state.notification.title 
                    }
                }
            })
        }
    }

    const stateActions = {
        loader,
        notifier
    }

    return (
        <FeedbackContext.Provider value={{feedback: state, ...stateActions}} >
            {props.children}
        </FeedbackContext.Provider>
    )
}

export const useFeedbackContext = () => {
    const context = useContext(FeedbackContext);
    if (!context) throw new Error('useFeedbackContext must be used within Feedback Provider');
    return context;
};