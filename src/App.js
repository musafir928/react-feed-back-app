const App = () => {
    const students = [
        {name: "adil", age: 35},
        {name: "nurgul", age: 35},
        {name: "asiye", age: 10},
        {name: "maryam", age: 8},
    ]
    return (
        <>
        <ul>
            {
                students.map(s => {
                   return <li key={s.name}>name: {s.name}  age: {s.age}</li> 
                })
            }
        </ul>
        </>
    )
}

export default App