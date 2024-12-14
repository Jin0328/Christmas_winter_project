import { Stack } from "expo-router";

export default function RootLayout() {
    return (
    <Stack>
        <Stack.Screen name="Start"/>
        <Stack.Screen name="NameInput"/>
        <Stack.Screen name="Question"/>
        <Stack.Screen name="Question1"/>
        <Stack.Screen name="Question2"/>
        <Stack.Screen name="Question3"/>
        <Stack.Screen name="Question4"/>
        <Stack.Screen name="Question5"/>
        <Stack.Screen name="Question6"/>
    </Stack>
    );
}