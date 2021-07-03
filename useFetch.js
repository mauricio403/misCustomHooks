import { useEffect, useRef, useState } from "react"

export const useFetch = (url ) => {

    
   
    const [state, setstate] = useState({ data: null, loading: true, error: null})

    const isMounted = useRef(true);

    useEffect(() => {

        return () => {
            isMounted.current = false;
        }

    }, [])


    useEffect(() => {

        setstate({data: null, loading: true, error: null})

        fetch(url)
        .then( res => res.json() )
        .then(data => {


                if ( isMounted.current) {

                    setstate({
                        loading: false,
                        error: null,
                        data
                    });
                } 

            
        })

    }, [url])

    return state;
}
