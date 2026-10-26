import ProtectedRoute from "./components/common/ProtectedRoute";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
      <ProtectedRoute>
        <AppRoutes />
      </ProtectedRoute>
  );
}

export default App;
