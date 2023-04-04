import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <Button variant={"contained"} color={"primary"}>
            Página Inicial
          </Button>
        }
        path={"/pagina-inicial"}
      />
      <Route element={<Navigate to={"pagina-inicial"} />} path={"*"} />
    </Routes>
  );
};
