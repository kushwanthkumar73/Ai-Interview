import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function ResumeUpload() {
  const [file, setFile] = useState(null)
    const navigate = useNavigate()

  const handleUpload = async () => {
    const formData = new FormData()
    

    formData.append("resume", file)
    formData.append("user_id", 2)

    const response = await axios.post(
      "http://localhost:5000/api/resume/upload",
      formData
    )

    console.log(response.data)
    navigate("/questions")
  }

  return (
    <div>
      <h2>Upload Resume</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default ResumeUpload