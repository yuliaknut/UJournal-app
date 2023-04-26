import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Thumbnail from '../components/Thumbnail'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'
import { Zoom } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import CreateIcon from '@mui/icons-material/Create'

export default function Home () {
  // const entries = useSelector((state) => state.entriesSlice.entries) // <-- redux way to get list of all entries
  
  const navigate = useNavigate();

  const [entries, setEntries] = useState([]); 
  useEffect(() => {
    axios.get('http://localhost:3001/entries').then((foundEntries) => {
      setEntries(foundEntries.data);
    })
  }, []) // <-- axios way to get list of all entries

  function navigateToCreate () {

    return navigate('/newentry')
  }

  function handleSelect (id) {
    
    return navigate(`/entry/${id}`)
  }

  const moodIcons = {
    1: <SentimentVeryDissatisfiedIcon color="error" />,
    2: <SentimentDissatisfiedIcon color="warning" />,
    3: <SentimentSatisfiedIcon color="yellow" />,
    4: <SentimentSatisfiedAltIcon color="success" />,
    5: <SentimentVerySatisfiedIcon color="success" />
  }

  if (entries.length === 0) {
    return <div className="aligned">
            <h1 className="page-title">No entries yet...</h1>
            <div className="float">
            <Zoom in={true}>
                    <button className="float" onClick={navigateToCreate}><CreateIcon/></button>
                </Zoom>
            </div>
        </div>
  } else {
    return <div>
            <h1 className="page-title">Your past entries:</h1>
            <table className="display-table">
                <thead>
                <tr className="no-hover">
                    <th className="date-column">Date</th>
                    <th className="preview-column">Preview</th>
                    <th className="mood-column">Mood</th>
                </tr>
                </thead>
                <tbody>
                {entries.map((entry, index) => {

                  return <Thumbnail
                        key={index}
                        id={entry._id}
                        date={entry.date}
                        content={entry.content.length <= 40 ? entry.content : entry.content.substring(0, 38).trim() + '...'}
                        emotion={moodIcons[entry.emotion]}
                        onSelect={handleSelect}/>

                  // <Link to={"/entry/" + entry.id}></Link>
                })}
                </tbody>

                </table>
                <div className="float">
                <Zoom in={true}>
                    <button className="float" onClick={navigateToCreate}><CreateIcon/></button>
                </Zoom>
                </div>
        </div>
  }
}
