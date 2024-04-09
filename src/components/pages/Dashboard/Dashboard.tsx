import {
    Text,
    Title,
    Container,
    SimpleGrid,
} from "@mantine/core"
import classes from "./Dashboard.module.css"
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout"
import { projects } from "../../../constants"
import { Feature } from "../../molecules/ProjectCards/ProjectCards"



export function Dashboard() {
    const features = projects.results.map((project, index) => (
        <Feature project={project} key={index} />
    ))

    return (
        <DashboardLayout>
            <Title className={classes.title}>
                Discloze
            </Title>

            <Container size={560} p={0}>
                <Text size="sm" className={classes.description}>
                    List of Projects
                </Text>
            </Container>

            <SimpleGrid
                mt={60}
                cols={{ base: 1, sm: 2, md: 3 }}
                spacing={{ base: "xl", md: 50 }}
                verticalSpacing={{ base: "xl", md: 50 }}
            >
                {features}
            </SimpleGrid>
        </DashboardLayout>
    )
}
