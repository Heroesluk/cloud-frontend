import axios from "axios";
import {useContext} from "react";
import {UserContext} from "../App";

let formData = new FormData();


// this doesn't work
export function UploadForm() {
    const {token} = useContext(UserContext);


    return (
        <div>
            <input type="file" name="docx" onChange={setFile.bind(this)}/>
            <input type="button" onClick={postFile} value="Upload"/>
        </div>
    )

    function postFile(event) {
        axios.post('http://127.0.0.1:5000/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + token
            }
        })


    }

    function setFile(event) {
        // Get the details of the files

        console.log(event.target.files)
        formData.append("image", event.target.files[0]);

    }
}