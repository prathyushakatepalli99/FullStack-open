import axios from "axios";
import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Note from "./Note.js";



const App = () => {
	
	const [ persons, setPersons ] = useState([])
	const [ newName, setNewName ] = useState("")
	const [ newNumber, setNewNumber ] = useState("")
	const [ search, setSearch ] = useState("")
	const [ showAll, setShowAll ] = useState(false)
	
	
	
	useEffect(() => {
		Note
			.getAll()
			.then(response => setPersons(response))
	} , [])
	
	const addPersons = (event) => {
		event.preventDefault()
		
		const newObject = {
			name: newName,
			number: newNumber
		}
		
		Note
			.create(newObject)
			.then(response => setPersons(persons.concat(response)))
		
		setNewName("")
		setNewNumber("")
	}
	
	const handleNameChange = (event) => {
		setNewName(event.target.value)
	}
	
	const handleNumberChange = (event) => {
		setNewNumber(event.target.value)
	}
	
	const handleSearch = (event) => {
		setSearch(event.target.value)
		setShowAll(true)
	}
	
	const Filter = (query) => {
		const filter_result = persons.filter(person => person.name.toLowerCase().split(" ").join("").indexOf(query.toLowerCase()) !== -1)
		
		return filter_result
	}
	
	const displayToShow = showAll
	? Filter(search)
	: persons
	
	const handleDelete = (id) => {
		
		axios
			.get(`http://localhost:3001/persons/${id}`)
			.then(response => {
				const result = window.confirm("Do you really want to delete " + response.data.name)
		
					if (result) {
						axios
							.delete(`http://localhost:3001/persons/${id}`)
							.then(response => console.log(response.data))
					} 
					
				setTimeout(() => {
					Note
						.getAll()
						.then(response => setPersons(response))
				}, 1000)
			})
	}

	const handleChange = (name) => {
		const person = persons.find(n => n.name === name) 
		const change = {...person, number:newNumber}
		const id = person.id 
		
		const result = window.confirm(name + " is already added to Phonebook, replace the old number with a new one?")
		
		if (result) {
			Note
				.update(id, change)
				.then(response => setPersons(persons.map(person => person.id === id ? response : person)))
		}
	}
	
	
	
	return (
		<div>
		
			<h2>Phonebook</h2>
			Search by Name: <input value = {search} onChange = {handleSearch} />
		
		
			<h2>Add A New Contact</h2>
			<form onSubmit = {addPersons}>
				Name: <input value = {newName} onChange = {handleNameChange} />
				&nbsp; &nbsp; &nbsp;
				Number: <input value = {newNumber} onChange = {handleNumberChange} />
				<br />
				<br />
				<button type = "submit">ADD</button>
			</form>
			
			
			<br />
			<form onSubmit = {() => handleChange(newName)}>
				<button type = "submit">Change Contact</button>
			</form>
			
			
			<h2>Numbers</h2>
			{displayToShow.map(person => {
				return(
					<div key = {person.id}>
						<p>{person.name}: {person.number}</p>
						<button onClick = {() => handleDelete(person.id)}>Delete</button>
					</div>
				)})
			}
			
		</div>
	)
}

export default App
ReactDOM.render(
  <App />, 
  document.getElementById('root'))

