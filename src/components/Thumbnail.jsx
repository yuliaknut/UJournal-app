import React from 'react'

const Thumbnail = (props) => {
  function handleClick () {
    props.onSelect(props.id)
  }

  return (<tr onClick={handleClick} id={props.id}>
        <td className="date-column">{props.date}</td>
        <td className="preview-column">{props.content}</td>
        <td className="mood-column">{props.emotion}</td>
    </tr>
  )
}

export default Thumbnail
