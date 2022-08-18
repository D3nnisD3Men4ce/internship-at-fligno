import NutrientSolution from './plantData/NutrientSolution'
import PHValue from './plantData/PHValue'
import WaterTemperature from './plantData/WaterTemperature'
import Temperature from './plantData/Temperature'
import Lux from './plantData/Lux'
import Humidity from './plantData/Humidity'
import WaterLevel from './plantData/WaterLevel'

function AllCharts() {
  return (
    <div>
        <NutrientSolution />
        <PHValue />
        <WaterTemperature />
        <Temperature />
        <Lux />
        <Humidity />
        <WaterLevel />
        
    </div>
  )
}

export default AllCharts