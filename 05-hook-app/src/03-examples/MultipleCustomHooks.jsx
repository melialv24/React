import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

    const { data, hasError, isLoading } = useFetch('https://www.breakingbadapi.com/api/quotes/1')

    return (
        <>

            <h1>BreakingBad Quotes</h1>
            <hr/>

        </>
    )
}
