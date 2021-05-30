import React from 'react'
import ReactDOM from 'react-dom';

const Content = (props) => {
  const list = props.course.parts.map(function(set) {
		return (
			<div>
				<p>{set.name}: {set.exercises}</p>
			</div>
		)
	})
	
	return list
}

const Total = (props) => {
  var score = 0
	
	const list = props.course.parts.map(function(set) {
		
		score = score + set.exercises
		
		return score
	})
	return (
		<div>
			<p>Number of exercises: {score}</p>
		</div>
	)
}

const App = () => {
  const course = {
    name: 'Half Stack Application Development',
    parts: [
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
  }
  return (
    <div>
      <h1>{course.name}</h1>
			<Content course={course} />
			<Total course={course} />
    </div>
  )
}

export default App
ReactDOM.render(<App />, document.getElementById('root'));