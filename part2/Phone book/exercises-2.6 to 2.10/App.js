import React, {useState} from "react";
import ReactDOM from "react-dom";

const Filter = (props) => {
	
	return (
		<div>
			Search By Name: <input 
								type = {props.type}
								value = {props.value} 
								onChange = {props.onChange} 
							/>
		</div>
	)
}


const InputName = (props) => {
	return (
		<div>
			name: <input 
						type = {props.type} 
						value = {props.value} 
						onChange = {props.onChange} 
					/>
		</div>
	)
}


const InputNumber = (props) => {
	return (
		<div>
			number: <input 
						type = {props.type} 
						value = {props.value} 
						onChange = {props.onChange} 
				    /> 	
		</div>
	)
}


const InputButton = (props) => {
	return (
		<div>
			<button type={props.type}>{props.text}</button>
		</div>
	)
}


const Content = (props) => props.personsToShow.map(person => <p key = {person.id}>{person.name}: {person.number}</p>)


const App = (props) => {
	const [ persons, setPersons] = useState(props.Phonebook) 
	
	const [ newName, setNewName ] = useState("")
	const [ newNumber, setNewNumber ] = useState("")
	const [ searchName, setSearchName ] = useState("")
	const [ filterChange, setFilterChange ] = useState(false) 
	
	
	const addNewName = (event) => {
		event.preventDefault()
		
		const personObject = {
			id: persons.length + 1, 
			name: newName,
			number: newNumber
		}
		
		const repeatOrNot = () => {
			for (let i = 0; i < persons.length; i++) {
				if (newName === persons[i].name) {
					window.alert(newName + " is already added to phonebook")
					
					setPersons(persons)
				}
				else {
					setPersons(persons.concat(personObject))
				}
			}
		}
		
		repeatOrNot()
		setNewName("")
		setNewNumber("")
	}
	
	
	const deleteName = (event) => {
		event.preventDefault()
		
		const a = persons.slice(0, persons.length-1)
		
		setPersons(a)
	}
	
	
	const handleNameChange = (event) => {
		console.log(event.target.value)
		setNewName(event.target.value)
	}
	
	
	const handleNumberChange = (event) => {
		console.log(event.target.value)
		setNewNumber(event.target.value)
	}
	
	
	const handleSearchName = (event) => {
		console.log(event.target.value)
		setSearchName(event.target.value)
		setFilterChange(true)
	}
	
	
	const filterItems = (query) => {
		const filter_result = persons.filter(person => person.name.toLowerCase().split(" ").join("").indexOf(query.toLowerCase()) !== -1)
		
		return filter_result
	}
	
	
	const personsToShow = filterChange
		? filterItems(searchName)
		: persons

		
	return (
		<div>
		
			<h2>Phonebook</h2>
			<div>
				<Filter type = "text" value = {searchName} onChange = {handleSearchName} />
			</div>
			
			
			<h3>Add a new contact</h3>
			<div>
				<form onSubmit = {addNewName}>
				<InputName type = "text" value = {newName} onChange = {handleNameChange} />
				<br />
				<InputNumber type = "text" value = {newNumber} onChange = {handleNumberChange} />
				<br />
				<InputButton type = "submit" text = "Add" />
				</form>
			</div>
			
			<div>
			<br />
				<form onSubmit = {deleteName}>
				<InputButton type = "submit" text = "Delete" />
				</form>
			</div>
			
			<h3>Numbers</h3>
			<Content personsToShow = {personsToShow} />
			
		</div>
	)
}

export default App


