import { Routes, Route, Navigate } from "react-router"

import { DashboardLayout } from "@/layouts/DashboardLayout.tsx";
import { Home } from "@/pages/Home.tsx";

export const Router = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}