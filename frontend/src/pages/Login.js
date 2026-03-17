import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password
        }
      )

      localStorage.setItem("token", response.data.token)
      localStorage.setItem("user_id", response.data.user_id)

      navigate("/dashboard")

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1>AI Interview Platform</h1>
        <p>Practice smarter. Get interview ready.</p>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <p>
          No account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login