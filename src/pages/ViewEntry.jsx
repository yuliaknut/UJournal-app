import React from "react"
import Entry from "../components/Entry"
import { useParams } from "react-router-dom"
// import { useSelector } from "react-redux"; <-- was needed in redux version
import { Zoom } from "@mui/material"
import { Navigate, Link } from "react-router-dom"
import CreateIcon from '@mui/icons-material/Create'
import { useState, useEffect } from "react"
import axios from 'axios'

export default function ViewEntry() {
    const params = useParams();
    const entryId = params.id;
    //const entries = useSelector((state) => state.entriesSlice.entries); <-- redux version
    //const entry = entries.find(obj => obj.id === parseInt(params.id, 10));

    const [entry, setEntry] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:3001/entries/' + entryId).then((foundEntry) => {
        setEntry(foundEntry.data)
        console.log(entryId);
        })
    }, []) // <-- axios version 

    const [redirectToCreate, setRedirectToCreate] = useState(false);
    if (redirectToCreate) {
        return <Navigate to='/newentry' />
    }
    
    return (<div>
        <h1 className="page-title">Take a look back at {entry.date}</h1>
        <Entry id={entryId}/>
        <div className="aligned">
        <Link className="ref" to="/">go back to all entries</Link>
        </div>
        <div className="float">
                <Zoom in={true}>
                    <button className="float" onClick={() => {setRedirectToCreate(true)}}><CreateIcon/></button>
                </Zoom>
                </div>    
    </div>)

}