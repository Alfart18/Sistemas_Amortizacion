import "./App.css";
import Inputs from "./components/Ingreso_Datos";
import { useState } from "react";
import TablaAleman from "./components/Tabla_Aleman";
// import TablaFrances from "./components/Tabla_Frances";
import Box from "@mui/material/Box";



function App() {
  const [prestamo, setprestamo] = useState("");
  const [periodo, setperiodo] = useState("");
  const [interes, setinteres] = useState("");
  return (
    <Box m={{ xs: 2, sm: 3, md: 4, lg: 5 }} mt={{ xs: 0, sm: 1, md: 2, lg: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Inputs
          onChange={(prestamo, periodo, interes) => {
            setprestamo(prestamo);
            setperiodo(periodo);
            setinteres(interes);
          }}
        />
      </Box>
      <Box class="Tabla" mt={{ xs: 2, sm: 3, md: 4, lg: 5 }}>
        <TablaAleman prestamo={prestamo} periodo={periodo} interes={interes} />
      </Box>
    </Box>
  );
}

export default App;