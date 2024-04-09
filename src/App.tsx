import "@mantine/core/styles.css"
import { MantineProvider } from "@mantine/core"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoginPage from "./components/pages/Login/LoginPage"
import { Dashboard } from "./components/pages/Dashboard/Dashboard"

function App() {
    return (
        <MantineProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </Router>
        </MantineProvider>
    )
}

export default App
