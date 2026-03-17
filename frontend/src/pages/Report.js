import Layout from "../components/Layout"

function Report() {
  return (
    <Layout>
      <div className="dashboard-container">
        <h1>Final AI Report</h1>

        <div className="section-box">
          <h3>Overall Performance</h3>
          <p>Average score based on latest interview sessions.</p>
        </div>

        <div className="section-box">
          <h3>Strength Areas</h3>
          <p>React concepts, backend fundamentals, SQL basics.</p>
        </div>

        <div className="section-box">
          <h3>Improvement Areas</h3>
          <p>Explain answers with deeper production examples.</p>
        </div>

        <div className="section-box">
          <h3>AI Recommendation</h3>
          <p>Practice advanced Node.js and system design questions.</p>
        </div>
      </div>
    </Layout>
  )
}

export default Report