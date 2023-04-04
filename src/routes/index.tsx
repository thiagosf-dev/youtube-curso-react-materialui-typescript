import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<p>Página Inicial</p>} path={"/pagina-inicial"} />
      <Route element={<Navigate to={"pagina-inicial"} />} path={"*"} />
    </Routes>
  );
};
