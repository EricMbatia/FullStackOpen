import { useState } from 'react'


//Button component
const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
//StatisticsLine component
const StatisticsLine = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
    )
}


//statistics component
const Statistics = ({numberGood, numberNeutral, numberBad}) => {
  
  const total = numberGood + numberNeutral + numberBad
  const average = Math.round(((numberGood - numberBad) / total)*10) / 10
  const positive = Math.round(((numberGood / total) * 100)*10) / 10
  if (total === 0) {
    return <div> No feedback given</div>
  }
  return(
    <div>
      <StatisticsLine text='good' value={numberGood} />
      <StatisticsLine text='neutral' value={numberNeutral} />
      <StatisticsLine text='bad' value={numberBad} />
      
      <p>All {total}</p>
      <p>Average {average}</p>
      <p>positive {positive} %</p>
      {/* {console.log(props)} */}
    </div>
    
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //Onclick functions
  const goodFeedback = () => {
    setGood( good + 1) 
  }
  const neutralFeedback = () => {
    setNeutral( neutral + 1) 
  }
  const badFeedback = () => {
    setBad( bad + 1) 
  }
  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button text='good' handleClick={goodFeedback} />
        <Button text='neutral' handleClick={neutralFeedback} />
        <Button text='bad' handleClick={badFeedback} />
      </div>
      <h1>statistics</h1>
      <Statistics  numberGood={good} numberNeutral={neutral} numberBad={bad}/>
    </div>
  )
}

export default App
