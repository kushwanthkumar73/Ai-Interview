import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/users/register",
        {
          name,
          email,
          password
        }
      )

      alert("Registered successfully")

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1>Create Account</h1>

        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleRegister}>
          Register
        </button>

        <p>
          Already have account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register