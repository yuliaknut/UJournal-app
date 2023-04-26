import React from "react";
import CreateArea from "../components/CreateArea";

//const entries = useSelector((state) => state.entriesSlice.entries);

function CreateEntry() {
    return (<div>
        <h1 className="page-title">What's on your mind today?</h1>
        <CreateArea />
    </div>)
}

export default CreateEntry;