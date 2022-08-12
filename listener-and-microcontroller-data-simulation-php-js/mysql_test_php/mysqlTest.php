<?php
include "./mysql_test_php/mockDataFinal.php";
include "./mysql_test_php/classes/dbh.class.php";

class SimulateData extends Dbh
{
    public function newEntry($id, $timeID, $nutSol, $humidity, $phVal, $temp, $waterTemp, $waterLevel, $lux, $timestamps)
    {
        $sql = "INSERT INTO plantmockdata.plantdata (id, timeID, nutSol, humidity, phVal, temp, waterTemp, waterLevel, lux, timestamps) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$id, $timeID, $nutSol, $humidity, $phVal, $temp, $waterTemp, $waterLevel, $lux, $timestamps]);
    }
}

function startSimulation($plantData)
{
    foreach ($plantData as $key => $data) {
        $upload = new SimulateData();
        $upload->newEntry(
            $plantData[$key]['id'],
            $plantData[$key]['timeID'],
            $plantData[$key]['nutSol'],
            $plantData[$key]['humidity'],
            $plantData[$key]['phVal'],
            $plantData[$key]['temp'],
            $plantData[$key]['waterTemp'],
            $plantData[$key]['waterLevel'],
            $plantData[$key]['lux'],
            $plantData[$key]['timestamps']
        );

        // fire signal
        unset($upload);
        sleep(3);
        print_r($plantData[$key]);
    }
}

startSimulation($plantData);

// Isulod ni tanan sa listener