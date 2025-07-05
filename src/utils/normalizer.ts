const requestMessage = (resp: any, text = '') => {
    return resp?.message || text || 'Something went wrong'
}

const catchErrMsg = (err: any) => {
    return (
        err?.response?.data?.errors?.[0]?.message ||
        err?.response?.data?.message ||
        'Something went wrong, please try again later.'
    );
}

const isSuccessResponse = (data: any, status: number) => {
    return [200, 201].includes(status) && data?.status === 'success';
}

export {
    requestMessage,
    catchErrMsg,
    isSuccessResponse
}