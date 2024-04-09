import "@mantine/core/styles.css"
import { MantineProvider } from "@mantine/core"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoginPage from "./components/pages/Login/LoginPage"
import { QueryClient, QueryClientProvider } from "react-query"
import { Dashboard } from "./components/pages/Dashboard/Dashboard"

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <MantineProvider>
                <Router>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/" element={<Dashboard />} />
                    </Routes>
                </Router>
            </MantineProvider>
        </QueryClientProvider>
    )
}

export default App
