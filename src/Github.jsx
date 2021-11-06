import React, {
    useState,
    useEffect
} from 'react'
import axios from 'axios'
import { skipPartiallyEmittedExpressions } from 'typescript'


const Github = () => {
    const [search, setSearch] = useState('lizlukasiewicz')
    const [repos, setRepos] = useState([])

    useEffect(() => {
        async function fetchRepos() {
            try {
                const url = `http://api.github.com/users/${search}/repos`
                const response = await axios.get(url)
                console.log(response.data)
                setRepos(response.data)
            } catch (err) {
                console.log(err)
            } 
        }

        fetchRepos()
    }, [search])
    const renderedRepos = repos.map((repo, index) => <li key={index}>{repo.name}</li>)
    return(
        <div>
            <form>
                <label for="search">Search for a user:</label>
                <input
                type="text"
                id="search"
                onChange= {e => setSearch(e.target.value)}
                />
            </form>
        <ol>
            {renderedRepos}
        </ol>
        </div>
    )
}
export default Github