import { useMemo, useState } from 'react'

const fruits = ['apple', 'Grapes', 'Orange', 'Pineapple']

const UseMemo = () => {
    const [query, setQuery] = useState('')

    const filteredFruits = useMemo(() => {
        console.log("Calculation Happened")
        return fruits.filter(fruit =>
            fruit.toLowerCase().includes(query.toLowerCase())
        )
    }, [query])

    return (
        <>
            <div>Using useMemo - Filter Fruits</div>
            <input
                type="text"
                placeholder="Search fruits..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {filteredFruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </>
    )
}

export default UseMemo;