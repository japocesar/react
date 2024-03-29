import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const QuoteComponent = ( { quote, author } ) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    // console.log( pRef.current.getBoundingClientRect() );
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [quote])

  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{ display: 'flex' }}
      >
          <p ref={ pRef } className="mb-1">{ quote }</p>
          <footer className="blockquote-footer mt-1">{ author }</footer>
      </blockquote>

      <code>{ JSON.stringify( boxSize ) }</code>
    </>
  )
}

QuoteComponent.proptypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
}