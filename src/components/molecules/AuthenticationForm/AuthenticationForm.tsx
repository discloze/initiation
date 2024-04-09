import { useState } from "react"
import {
    TextInput,
    PasswordInput,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
    Loader,
    Anchor,
} from "@mantine/core"
import { useNavigate } from "react-router-dom"

export function AuthenticationForm() {
    const [_, setEmail] = useState("")
    const [__, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            localStorage.setItem("loggedIn", "true")
            navigate("/")
        }, 2000)
    }

    return (
        <Container size={420} my={40}>
            <Title ta="center">Welcome back!</Title>
            <Text c="dimmed" size="sm" ta="center" mt={5}>
                Do not have an account yet?{" "}
                <Anchor size="sm" component="button">
                    Create account
                </Anchor>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <form onSubmit={handleSubmit}>
                    <TextInput
                        name="email"
                        label="Email"
                        placeholder="you@mantine.dev"
                        required
                        onClick={(e) => setEmail(e.currentTarget.value)}
                    />
                    <PasswordInput
                        name="password"
                        label="Password"
                        placeholder="Your password"
                        required
                        mt="md"
                        onClick={(e) => setPassword(e.currentTarget.value)}
                    />
                    <Group justify="space-between" mt="lg">
                        <Anchor component="button" size="sm">
                            Forgot password?
                        </Anchor>
                    </Group>
                    <Button fullWidth type="submit" mt="xl" disabled={loading}>
                        {loading ? <Loader color="gray" /> : "Sign in"}
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}
