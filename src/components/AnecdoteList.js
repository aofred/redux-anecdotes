import { useDispatch, useSelector } from "react-redux"
import anecdoteReducer, { vote } from "../reducers/anecdoteReducer"

const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <div>
            <p>{anecdote.content}</p>
            <p>
                has {anecdote.votes}
                <button onClick={handleClick}> vote</button>
            </p>
        </div>
    )
}

const AnecdoteList = () => {
    const dispatch = useDispatch()

    const anecdotes = useSelector(({ filter, anecdotes }) => {
        if (filter === '') { return anecdotes }
        return anecdotes.filter(anecdote => 
            anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    })

    const toSort = [...anecdotes]
    const sorted = toSort.sort((a, b) => b.votes - a.votes)

    return(
        <div>
            {sorted.map(anecdote =>
                <Anecdote 
                    key={anecdote.id} 
                    anecdote={anecdote}
                    handleClick={() =>
                        dispatch(vote(anecdote.id))
                    }
                />
            )}
        </div>
    )
}

export default AnecdoteList