import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function reactHook() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const [c, setC] = useState(0)
  const [sign, setSign] = useState('+')

  const onSubmit = (data) => {
    console.log(data)

    const numberA = parseInt(data.a)
    const numberB = parseInt(data.b)
    let ctemp = 0

    if (sign === '+') {
      ctemp = numberA + numberB
    } else if (sign === '-') {
      ctemp = numberA - numberB
    } else if (sign === 'x') {
      ctemp = numberA * numberB
    } else if (sign === '/') {
      ctemp = numberA / numberB
    }
    setC(ctemp)
  }

  return (
    <div className="App">
      <div className="title">
        <h1>equal{c}</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="domathContainer">
          <div className="domath">
            <input className="number" type="text" {...register('a')} />
            <div className="number">
              <select
                className="sign"
                onChange={(event) => setSign(event.target.value)}
                value={sign}
              >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
              </select>
            </div>
            <input className="number" type="text" {...register('b')} />
          </div>
          <input type="submit" />

          {/* <button onClick={calculate}>calculate</button> */}
        </div>
      </form>
    </div>
  )
}

export default reactHook
