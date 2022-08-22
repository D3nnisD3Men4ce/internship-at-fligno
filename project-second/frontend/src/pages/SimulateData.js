import mockData from "../mockDataSimulation/mockData"
import { useSelector } from "react-redux"
import axios from 'axios'
// import { setPlantData } from "../../../backend/controllers/plantDataController"




function SimulateData() {

    const API_URL = '/api/plantData/'

    const { user } = useSelector((state) => state.auth)
    
    // console.log(user.token);

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    function startSimulation() {
        var interval = 2000; // how much time should the delay between two iterations be (in milliseconds)?
        mockData.forEach(function (data, index) {
          setTimeout(function () {
            axios.post(API_URL, data, config)
          }, index * interval);
        });
    }



    return (
        <>
            {startSimulation()}
        </>
    )
}



export default SimulateData