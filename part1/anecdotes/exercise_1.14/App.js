import React, {useState} from 'react'
 import ReactDOM from 'react-dom';
 const App = () =>{
  const [index, setIndex] = useState(0)
  const [vote, setVote] = useState(
    {
    0: 0,
		1: 2,
		2: 3,
		3: 4,
		4: 2,
		5: 1
    }
  )
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const handleChange = () => {
		setIndex(Math.floor(Math.random()*anecdotes.length))
	}
  const voteChange = () => {
		setVote({
			...vote,
			[index]: vote[index]+1
		})
	}
  const Max_anecdotes = () => {
		let max = -1, maxKey = -1
		for(let key in vote) {
			if (vote[key] > max) {
				maxKey = key
				max = vote[key]
			}
		}
		return maxKey
	}
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <h2>{anecdotes[index]}</h2>
			<button onClick = {handleChange}>Next anecdotes</button>
			<br />
      <br/>
			<button onClick = {voteChange}>vote</button>
			<h3>This anecdote has {vote[index]} votes</h3>
			<h1>Anecdote with most votes</h1>
			<h3>{anecdotes[Max_anecdotes()]}</h3>
    </div>
  )
 }
 export default App
 ReactDOM.render(<App />, document.getElementById('root'));