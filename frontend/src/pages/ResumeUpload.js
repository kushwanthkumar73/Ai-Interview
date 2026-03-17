import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Layout from "../components/Layout"

function ResumeUpload() {
  const [file, setFile] = useState(null)
  const navigate = useNavigate()

  const handleUpload = async () => {
    try {
      const formData = new FormData()

      formData.append("resume", file)
      formData.append("user_id", localStorage.getItem("user_id"))

      const response = await axios.post(
        "http://localhost:5000/api/resume/upload",
        formData
      )

      console.log(response.data)

      navigate("/interview")

    } catch (error) {
      console.log(error)
      alert("Upload failed")
    }
  }

  return (
    <Layout>
      <div className="section-box">
        <h2>Upload Your Resume</h2>
        <p>Upload PDF resume for AI-based interview generation</p>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <br />

        <button onClick={handleUpload}>
          Upload Resume
        </button>
      </div>
    </Layout>
  )
}

export default ResumeUpload