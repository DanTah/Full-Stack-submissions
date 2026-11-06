import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  const {text, value} = props
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const all = props.good+props.neutral+props.bad

  if (all === 0) {
    return (
      <p>
        No feedback given
      </p>
    )
  }

  const average = (props.good-props.bad)/all
  const positive_portion = props.good/all

  return(
    <table>
        <StatisticLine text = 'good' value = {props.good}/>
        <StatisticLine text = 'neutral' value = {props.neutral}/>
        <StatisticLine text = 'bad' value = {props.bad}/>
        <StatisticLine text = 'all' value = {all}/>
        <StatisticLine text = 'average' value = {average}/>
        <StatisticLine text = 'positive' value = {positive_portion*100+'%'}/>
    </table>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good+1)
  const handleNeutral = () => setNeutral(neutral+1)
  const handleBad = () => setBad(bad+1)
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick = {handleGood} text = "Good"/>
      <Button onClick = {handleNeutral} text = "Neutral"/>
      <Button onClick = {handleBad} text = "Bad"/>

      <h1>Statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>

    </div>

  )
}

export default App