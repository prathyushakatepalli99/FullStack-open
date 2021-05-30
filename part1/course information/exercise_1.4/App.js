import React from 'react'
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  const list = props.parts.map(function(set) {
		return (
			<div>
				<p> {set.name}: {set.exercises}</p>
			</div>
		)
	})
	
	return list
};

const Total = (props) => {
  var score = 0
  const list = props.parts.map(function(set) {
    score = score + set.exercises 	
  })
	return (
		<div>
			<p>Number of exercises: {score} </p>
		</div>
	)
}

const App = () => {
  const course = 'Half Stack Application Development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
ReactDOM.render(<App />, document.getElementById('root'));