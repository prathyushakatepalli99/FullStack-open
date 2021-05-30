import React , {useState} from 'react'
import ReactDOM from 'react-dom'

const statistics = (props) => {
	return (
		<div>
			<h3>Good: {props.good}</h3>
			<h3>Neutral: {props.neutral}</h3>
			<h3>Bad: {props.bad}</h3>
			<h3>All: {props.All}</h3>
			<h3>Average: {props.average}</h3>
			<h3>Positive: {props.positive}</h3>
		</div>
	)
}
const App = () =>{
   // save clicks of each button to its own state
   const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)
  return(
   <div>
      <h1>Please Give Your Feedback</h1>
			<br />
			<button onClick = {() => setGood(good + 1)}>Good</button>
			<button onClick = {() => setNeutral(neutral + 1)}>Neutral</button>
			<button onClick = {() => setBad(bad + 1)}>Bad</button>
			<br />
			<br />
			<h1>statistics</h1>
      <statistics 
				good={good} 
				neutral= {neutral} 
				bad= {bad} 
				All= {good + neutral + bad} 
				average= {(good - bad)/(good + neutral + bad)} 
				positive= {(good)/(good + neutral + bad)*100}
			/>
   </div>
  )
};
export default App
ReactDOM.render(<App />, document.getElementById('root'));