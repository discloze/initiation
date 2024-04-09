import { Container } from "@mantine/core"
import React, { useEffect } from "react"
import classes from "./DashboardLayout.module.css"
import { Navigation } from "../../molecules/Navigation/Navigation"
import { useNavigate } from "react-router-dom"

interface DashboardLayoutProps {
    children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const navigate = useNavigate()

    useEffect(() => {
        const loggedIn = localStorage.getItem("loggedIn")
        if (!loggedIn) {
            navigate("/login")
        }
    }, [])

    return (
        <Container size={"xl"} className={classes.wrapper}>
            <Navigation />
            {children}
        </Container>
    )
}

export default DashboardLayout
