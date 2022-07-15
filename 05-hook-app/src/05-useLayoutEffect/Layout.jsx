import { useFetch, useCounter } from "../hooks"
import { Quote, LoadingQuote } from '../components'


export const Layout = () => {

    const { counter, increment } = useCounter(1)

    const { data, hasError, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    return (
        <>

            <h1>BreakingBad Quotes</h1>
            <hr/>

            {
                isLoading ?

                (
                    <LoadingQuote/>
                )

                :

                (
                    <Quote author={ data[0].author } quote={ data[0].quote } />
                )
            }

            <button 
                className="btn btn-primary" 
                onClick={() => increment(1)}
                disabled={ isLoading }
            >
                Next quote
            </button>

        </>
    )
}
