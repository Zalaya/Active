import { Routes, Route } from "react-router"

import { Home } from "@/pages/Home.tsx";

export const Navigation = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}