import React from 'react'

function TerneryOpertor({age}) {
  return (
    <div>
<h3> { age>18 ? <h4>you can drive</h4> :<h4>You cannot drive </h4> } </h3>

    </div>
  )
}

export default TerneryOpertor