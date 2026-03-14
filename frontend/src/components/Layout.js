function Layout({ children }) {
  return (
    <div className="layout">
      <div className="sidebar">
        <h2>AI Interview</h2>

        <a href="/dashboard">Dashboard</a>
        <a href="/upload">Upload Resume</a>
        <a href="/interview">Interview</a>
        <a href="/history">History</a>
        <a href="/">Logout</a>
      </div>

      <div className="main-content">
        {children}
      </div>
    </div>
  )
}

export default Layout