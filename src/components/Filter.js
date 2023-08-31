import filterReducer, { filterChange } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"

const Filter = () => {

    const style = {
        marginBottom: 10
      }
    
    const dispatch = useDispatch()
    const handleChange = (event) => {
      // input-kentän arvo muuttujassa event.target.value
      dispatch(filterChange(event.target.value))
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    )
}
  
export default Filter