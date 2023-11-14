import OrgChart from "../components/org-chart"


const OrgChartPage = () => {

    return (
      <>
        <div className="top-banner">
          <h1 className="hero-message">
            This is my React Flow sandbox! Great job!
          </h1>
        </div>
        <div className="banner-buffer" />
        <OrgChart />
      </>
    );
}

export default OrgChartPage