import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'


const App = () => {
	const [ persons, setPersons ] = useState([])
	
	useEffect(() => {
		axios
			.get("http://localhost:3001/persons")
			.then(response => setPersons(response.data))
		}, [])
	
	const List = () => {
		return (
			<div>
				{persons.map(person => <p key = {person.id}>{person.name}: {person.number}</p>)}
			</div>
		)
		
	}
	
	return (
		<div>
			<List />
		</div>
	)
}


ReactDOM.render(<App />, document.getElementById('root'))