import {
    Group,
    Button,
    Divider,
    Box,
    Burger,
    Drawer,
    ScrollArea,
    rem,
    Title,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import classes from "./Navigation.module.css"
import { useNavigate } from "react-router-dom"

export function Navigation() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
        useDisclosure(false)
    const navigate = useNavigate()

    return (
        <Box pb={120}>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <Title>Discloze</Title>

                    <Group h="100%" gap={0} visibleFrom="sm">
                        <a href="#" className={classes.link}>
                            Home
                        </a>
                    </Group>

                    <Group visibleFrom="sm">
                        <Button
                            onClick={() => {
                                localStorage.removeItem("loggedIn")
                                navigate("/login")
                            }}
                        >
                            Sign out
                        </Button>
                    </Group>

                    <Burger
                        opened={drawerOpened}
                        onClick={toggleDrawer}
                        hiddenFrom="sm"
                    />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Divider my="sm" />

                    <a href="#" className={classes.link}>
                        Home
                    </a>

                    <Divider my="sm" />

                    <Group justify="center" grow pb="xl" px="md">
                        <Button>Sign out</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    )
}
