import React from "react";
import ReactDOM from "react-dom";


const App = () => {
	const courses = [
		{
			name: 'Half Stack Application Development',
			id: 1,
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
					id: 4
				}
			]
		}, 
		{
			name: 'Node.js',
			id: 2,
			parts: [
				{
					name: 'Routing',
					exercises: 3,
					id: 1
				},
				{
					name: 'Middlewares',
					exercises: 7,
					id: 2
				}
			]
		}
	]
	const ONE = () => {
		return (
			courses[0].parts.map(part => <p key = {part.id}>{part.name}: {part.exercises}</p>)
		)
	}
	const TWO = () => {
		return (
			courses[1].parts.map(part => <p key = {part.id}>{part.name}: {part.exercises}</p>)
		)
	}

	const Content = ({courses}) => {
		const a = [];
		const b = [];
		const add = (p , e) => {
			return (	
				 p + e
			)
		}
		
		for (let k = 0; k < courses[0].parts.length; k++) {
			a.push(courses[0].parts[k].exercises)
		}
		for (let k = 0; k < courses[1].parts.length; k++) {
			b.push(courses[1].parts[k].exercises)
		}

		return (
			<div>
				<h2>{courses[0].name}</h2>
				<ONE />
				<p><b> total of {a.reduce(add)} exercises </b></p>
				<h2>{courses[1].name}</h2>
				<TWO />
				<p><b> total of {b.reduce(add)} exercises </b></p>
			</div>
		)
	}

	return (
		<div>
			<h1>Web development curriculum</h1>
			<Content courses = {courses} />
		</div>
	)
}
export default App
ReactDOM.render(
  <App />, 
  document.getElementById('root'));

