import React from "react"
// import { useDispatch, useSelector } from "react-redux" 
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'
//import { edit, remove } from "../redux/entriesSlice"
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'


const Entry = ({
    id
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    // const entries = useSelector((state) => state.entriesSlice.entries);
    // const dispatch = useDispatch(); 
    // const entry = entries.find(obj => obj.id === id); <-- redux v.

    const [entry, setEntry] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:3001/entries/' + id).then((foundEntry) => {
        setEntry(foundEntry.data)
        })
    }, [ isEditing ]) // <-- axios version 

    const [editedEntry, setEditedEntry] = useState({
        _id: entry._id,
        content: entry.content,
        date: entry.date,
        lastEdited: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
        emotion: entry.emotion
    });

    function handleChange(event) {
        const {name, value} = event.target;
        
        setEditedEntry(prevValue => {
                return {
                    ...prevValue, 
                    [name]: value,
                };
            })
        };

    function handleSave() {
        //dispatch(edit({entryId: entry.id, newEntry: editedEntry})) <-- redux
        axios.patch('http://localhost:3001/entries/' + id, editedEntry);

        setIsEditing(false);
    }

    function enableEdit() {

        setIsEditing(true);
    }

    function handleDelete() {
        //dispatch(remove(entry.id)); <-- redux
        axios.delete('http://localhost:3001/entries/' + id);

        return navigate("/");
    }

    

    const moodIcons = {
        1: <SentimentVeryDissatisfiedIcon color="error" fontSize="large" />,
        2: <SentimentDissatisfiedIcon color="warning" fontSize="large" />,
        3: <SentimentSatisfiedIcon color="yellow" fontSize="large" />,
        4: <SentimentSatisfiedAltIcon color="success" fontSize="large" />,
        5: <SentimentVerySatisfiedIcon color="success" fontSize="large" />
    }
    const EditButtonSet = () => {
        return (<div className="flex-container">
            <button className="save-button item-1" onClick={() => setIsEditing(false)}>Cancel</button>
            <button form="edit-content" onClick={handleSave} className="save-button item-1">Save</button>
            </div>)
    }
    const NonEditButtonSet = () => {
        return (<div className="flex-container">
                    <button className="save-button item-1" onClick={enableEdit}>Edit</button>
                    <button className="save-button item-1" onClick={handleDelete}>Delete</button>
                </div>)
    }

    return (
        <div className="entry">
            {isEditing 
                ? <textarea id="edit-content" name="content" className="edit-area" rows="9" onChange={handleChange}>{entry.content}</textarea>
                : <p className="display-content">{entry.content}</p>}
            <br/>
            <p className="display-mood">{moodIcons[entry.emotion]}</p>
            <br/>
            <p className="display-last-edited">Last edited: {entry.lastEdited}</p>
            <hr className=".custom-hr" />
            {isEditing ? <EditButtonSet /> : <NonEditButtonSet />}
        </div>)
}

export default Entry;