import React from 'react'

const StyledComponent = ({punctele}) => {
  // const spanClass = punctele > 20 ? 'crimsonColor' : 'whiteColor';
  const spanClass = 'whiteColor';
  return <span className={spanClass}>{punctele}</span>;
}

export default StyledComponent
