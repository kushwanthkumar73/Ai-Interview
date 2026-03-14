import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function ResumeUpload() {
  const [file, setFile] = useState(null)
  const navigate = useNavigate()

  const handleUpload = async () => {
    try {
      const formData = new FormData()

      formData.append("resume", file)
      formData.append("user_id", localStorage.getItem("user_id"))

      console.log("user_id:", localStorage.getItem("user_id"))

      const response = await axios.post(
        "http://localhost:5000/api/resume/upload",
        formData
      )

      console.log(response.data)
      navigate("/questions")

    } catch (error) {
      console.log(error)
      alert("Upload failed")
    }
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