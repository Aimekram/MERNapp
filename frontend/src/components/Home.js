import React, { useState, useEffect } from "react";

const Home = () => {
    const  [ students, setStudents ] = useState([]);
    const [ selected, setSelected ] = useState("");
    const [ sortAZ, setSortAZ ] = useState(true)
    
    useEffect(() => {
        const abortController = new AbortController();
        
        async function fetchData() {
            try {
                const rawResponse = await fetch("http://localhost:4000/api/students", { signal: abortController.signal });
                const response = await rawResponse.json();
                setStudents(response);
            } catch (error) {
                console.log(error)
            }
        }
        
        fetchData();
        setSelected("American")
    
        return () => { abortController.abort() };
    }, []);
    
    // get unique nationalities
    const getNationalities = () => {
        const allNationalities = students.map(student => student.nationality);
        const uniqueNationalities = [...new Set(allNationalities.sort())];
        return uniqueNationalities;
    }
    const uniqueNationalities = students.length ? getNationalities() : [];

    // filter data on select change   
    const handleChange = e => setSelected(e.target.value);
    const filterStudents = () => students.filter(student => student.nationality === selected);

    // sort students by name
    const customAZ = (a,b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0);
    const customZA = (a,b) => (a.lastName > b.lastName) ? -1 : ((b.lastName > a.lastName) ? 1 : 0);
    const handleClick = () => {
        sortAZ ? setStudents(students.sort(customAZ)) : setStudents(students.sort(customZA))
        setSortAZ(!sortAZ)
    };

    return (
        <div>
            <form>
                <select name="nationality" onChange={handleChange} defaultValue="">
                {uniqueNationalities.map((nationality, key) => {
                    return <option key={key} value={nationality}>{nationality}</option>;
                })}
                </select>
                <ul>
                    {filterStudents().map((student, key) => {
                        const {firstName, lastName, age} = student;
                        return <li key={key}>{firstName} {lastName} ({age})</li>
                    })}
                </ul>
            </form>
            <button onClick={handleClick}>Sort</button>
        </div>
    )
}

export default Home;