import { Link, useLocation } from "react-router-dom"
import {
  FaChartPie,
  FaFileUpload,
  FaRobot,
  FaHistory,
  FaSignOutAlt,
  FaClipboardList
} from "react-icons/fa"

function Layout({ children }) {
  const location = useLocation()

  const handleLogout = () => {
    localStorage.clear()
    window.location.href = "/"
  }

  return (
    <div className="layout">
      <div className="sidebar">
        <h2>AI Interview</h2>

        <Link
          to="/dashboard"
          className={location.pathname === "/dashboard" ? "active-link" : ""}
        >
          <FaChartPie /> Dashboard
        </Link>

        <Link
          to="/upload"
          className={location.pathname === "/upload" ? "active-link" : ""}
        >
          <FaFileUpload /> Upload Resume
        </Link>

        <Link
          to="/interview"
          className={location.pathname === "/interview" ? "active-link" : ""}
        >
          <FaRobot /> Interview
        </Link>

        <Link
          to="/report"
          className={location.pathname === "/report" ? "active-link" : ""}
        >
          <FaClipboardList /> Report
        </Link>

        <Link
          to="/history"
          className={location.pathname === "/history" ? "active-link" : ""}
        >
          <FaHistory /> History
        </Link>

        <div
          onClick={handleLogout}
          style={{
            cursor: "pointer",
            marginTop: "25px",
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}
        >
          <FaSignOutAlt /> Logout
        </div>
      </div>

      <div className="main-content">
        {children}
      </div>
    </div>
  )
}

export default Layout