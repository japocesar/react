import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, QuoteComponent } from '../03-examples/components';

export const Layout = () => {

    const { counter, increment } = useCounter( 1 );
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { author, quote } = !!data && data[0]; //if data has value and data in position 0 exists
    // console.log({ data, isLoading, hasError });

  return (
    <>
        <h1>Breaking Bad Quotes</h1>
        <hr />

        {
            isLoading
            ? <LoadingQuote />
            : <QuoteComponent author={ author } quote={ quote } />
        }

        <button 
            className="btn btn-primary"
            disabled={ isLoading }
            onClick={ () => increment() }
        >
            Next Quote
        </button>


    </>
  )
}
