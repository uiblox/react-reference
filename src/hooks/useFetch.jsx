import { useEffect } from "react";
import { useState } from 'react'

export const useFetch = (url) => {
    const [result, setResult] = useState({data: null, loading: true })

    useEffect(() => {
        setResult((c) => ({
            data: c.data,
            loading: true
        }))
        fetch(url)
        .then(x => x.text())
        .then(y => {
            setResult({data: y, loading: false})
        })
    },[url, setResult])

    return result
}