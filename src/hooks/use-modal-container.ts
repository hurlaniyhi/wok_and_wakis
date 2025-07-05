import { useEffect, useState } from "react"

export function useModalContainer (close: () => void) {
    const [isHover, setIsHover] = useState(false)

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = "";
        };
    }, [])

    function handleModalClose () {
        document.body.style.overflow = ''
        close()
    }

    return { isHover, setIsHover, handleModalClose }
}