import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'

import './team.css'
// Example of a data array that
// you might receive from an API
const data = [
{ name: "Abrham", age: 19, gender: "Male" },
{ name: "Ayo", age: 19, gender: "Female" },
{ name: "Subham", age: 25, gender: "Male"},
]

function App() {
return (
  <>
  <Sidebar />
	<div className="App">
	<table>
		<tr>
		<th>Name</th>
		<th>Age</th>
		<th>Gender</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.name}</td>
			<td>{val.age}</td>
			<td>{val.gender}</td>
			</tr>
		)
		})}
	</table>
	</div>
  </>
);
}

export default App;


