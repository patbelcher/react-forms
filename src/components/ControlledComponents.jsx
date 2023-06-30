
import { useState } from "react"

const person = {
    firstName: 'Fred',
    lastName: 'FlintStoner'
}

export default function ControlledComponenets() {
    const [firstName, setFirstName] =  useState(person.firstName || '')
    const [lastName, setLastName] =  useState(person.lastName || '')
    return (
        <>
        <h2>Controlled Componenets</h2>
        <p>Form fields in HTML typical manage therr state.</p>
        <p>In a <strong>controlled component</strong> we let the react component 
        take control of of that state using <code>value </code>
         and <code>onChange</code>.</p>
         <h3>You typed: {firstName} {lastName}</h3>
         <label htmlFor ="firstName">First Name:</label>
         <input name="firstName" type="text" value={firstName}
            onChange={e => setFirstName(e.target.value)}/>

            <label htmlFor ="lastName">Last Name:</label>
         <input name="lastName" type="text" value={lastName}
            onChange={e => setLastName(e.target.value)}/>
        
        </>
    )
}