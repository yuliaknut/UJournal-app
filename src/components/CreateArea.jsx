import React, {useState, useEffect} from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import RadioGroupRating from "./MoodRating"
// import { useDispatch, useSelector } from "react-redux"
// import { add } from "../redux/entriesSlice"

function CreateArea() {

    //const entries = useSelector((state) => state.entriesSlice.entries);
    const navigate = useNavigate();
    const [newEntry, setNewEntry] = useState({
        content: '',
        date: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
        lastEdited: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
        emotion: null
    });

    //const dispatch = useDispatch(); // <-- Redux v.

    function handleChange(event) {
        const {name, value} = event.target;
        
        setNewEntry(prevValue => {
            return {
                ...prevValue, 
                [name]: value,
            };
        });
        
    }

    async function submitNewEntry(event) {
        event.preventDefault();
        //dispatch(add(entry)); <-- redux v.
        await axios.post('http://localhost:3001/entries', newEntry);
        return navigate('/');
    }

    return (<div>
        <form 
        className="create-area">
            <textarea name="content" onChange={handleChange} value={newEntry.content} placeholder="Put your thoughts here..." rows="9" />
            <hr className=".custom-hr"/>
            <p>How are you feeling?</p>
            <RadioGroupRating passage={handleChange} name="emotion" value={newEntry.emotion} />
        
        <button className="save-button" onClick={submitNewEntry}>Save</button>
        </form>
    </div>)
}

export default CreateArea; 