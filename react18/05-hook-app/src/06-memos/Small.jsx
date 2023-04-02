import { memo } from 'react';

export const Small = memo(({ value }) => {

    console.log("Triggered again")

  return (
    <small>{ value }</small>
  )
})
