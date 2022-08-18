import { useSelector } from "react-redux"
import AllCharts from "../components/AllCharts"
import SimulateData from "./SimulateData"



function Dashboard() {

  const { user } = useSelector((state) => state.auth)


  return (
    <>
      <section>
        <h1>Hello { user && user.name }</h1>
        <p></p>
      </section>

      <AllCharts />
      <SimulateData />

    </>
  )
}

export default Dashboard