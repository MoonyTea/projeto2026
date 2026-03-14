import { Stack } from "expo-router";

export default function RootLayout() {
  return ( 
    <Stack>
      <Stack.Screen
        name = "index"
        options={{
          headerTitle: "Projeto 2026 melhor app de todos",
        }}
      />
      
      <Stack.Screen 
        name = "about"
        options={{
          headerTitle: "About",
        }}
      />
    </Stack>
  );
}
