import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.js';

const Phonebook = [
	{ 
		id: 1,
		name: 'Adam', 
		number: "91234567809"
	},
	{
		id: 2,
		name: 'Arto', 
		number: "45676112347"
	},
	{
		id: 3,
		name: 'Ma Yutao', 
		number: "76436573858"
	},
	{
		id: 4,
		name: 'Dai Daisy', 
		number: "12345678901"
	},
	{
		id: 5,
		name: 'Dan Abramoy', 
		number: "34567890123"
	}
]


ReactDOM.render(
  <React.StrictMode>
    <App  Phonebook = {Phonebook} />
  </React.StrictMode>,
  document.getElementById('root')
);
