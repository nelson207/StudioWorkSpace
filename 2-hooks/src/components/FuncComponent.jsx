import { useState } from "react"

export default function FuncComponent() {

    const [name, setName] = useState('');

    const handleNameChange = (evt) => setName(evt.target.value);


    return (
        <div>
            <h1>Class</h1>
            <h2>My Name is: {name}</h2>
            <input type='text' value={name} onChange={handleNameChange} />
        </div>
    )
}
