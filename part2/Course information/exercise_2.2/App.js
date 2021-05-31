import React from 'react'
import ReactDOM from 'react-dom'
const App = () => {
	const course = {
		name: 'Half Stack Application Development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
				id: 1
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
				id: 2
			},
			{
				name: 'State of a component',
				exercises: 14,
				id: 3
			},
      {
        name: 'Redux',
        exercises: 11,
        id:4
      }
		]
	}
const Course = ({course}) => {
	return (
		<div>
			<h1>{course.name}</h1>
			<p>{course.parts[0].name}: {course.parts[0].exercises}</p>
			<p>{course.parts[1].name}: {course.parts[1].exercises}</p>
			<p>{course.parts[2].name}: {course.parts[2].exercises}</p>
      <p>{course.parts[3].name}: {course.parts[3].exercises}</p>
		</div>
	)
}	
const Sum = () =>{
  const a = [];
	const add = (p , e) => {
		return (
			p + e
		)
	}
	for (let k= 0; k< course.parts.length; k++) {
		a.push(course.parts[k].exercises)
	}
	return (
		<div>
			<p><b>total of {a.reduce(add)} exercises</b></p>
		</div>
	)
}

	return (
		<div>
			<Course course={course} />
      <Sum/>
		</div>
	)
}

export default App
ReactDOM.render(
  <App />, 
  document.getElementById('root'));
