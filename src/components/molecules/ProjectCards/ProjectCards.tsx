import { Flex, Pill, Text } from "@mantine/core"

interface FeatureProps {
    project: {
        company: {
            id: string
            name: string
            created: string
            updated: string
        }
        skills: {
            id: string
            name: string
        }[]
        stats: {
            proposals: number
            contracts: number
            unread_messages: number
        }
        name: string
        description: string
        status: string
        payment_option: string
        budget: string
        created: string
        updated: string
    }
}

export function Feature({ project }: FeatureProps) {
    return (
        <Flex gap={6} direction={"column"}>
            <Text mt="sm" mb={7}>
                {project.name}
            </Text>
            <Flex gap={4}>
                {project.skills.map((skill, index) => (
                    <Pill key={index} variant="default" color="blue">
                        {skill.name}
                    </Pill>
                ))}
            </Flex>
            <Text size="sm" c="dimmed" lh={1.6}>
                {project.description.slice(0, 300)}
            </Text>
            <Text>{project.budget}</Text>
        </Flex>
    )
}
