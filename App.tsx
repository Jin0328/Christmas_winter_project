import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

// Screen Imports
import FinalPage from "./screens/FinalPage";
import Start from "./screens/Start";
import Question3 from "./screens/Question3";
import Question2 from "./screens/Question2";
import Question4 from "./screens/Question4";
import Question1 from "./screens/Question1";
import Question from "./screens/Question";
import Question5 from "./screens/Question5";
import Question6 from "./screens/Question6";
import NameInput from "./screens/NameInput";

// 네비게이션 스택 타입 정의
type RootStackParamList = {
  Start: undefined;
  NameInput: undefined;
  FinalPage: undefined;
  Question3: undefined;
  Question2: undefined;
  Question4: undefined;
  Question1: undefined;
  Question: undefined;
  Question5: undefined;
  Question6: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();


const App = () => {
  // State for splash screen
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  // Load custom fonts
  const [fontsLoaded, error] = useFonts({
    "NotoSans-Bold": require("./assets/fonts/NotoSans-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null; // Return null until fonts are loaded
  }

  return (
    <NavigationContainer>
      {hideSplashScreen && (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="FinalPage" component={FinalPage} />
          <Stack.Screen name="Question3" component={Question3} />
          <Stack.Screen name="Question2" component={Question2} />
          <Stack.Screen name="Question4" component={Question4} />
          <Stack.Screen name="Question1" component={Question1} />
          <Stack.Screen name="Question" component={Question} />
          <Stack.Screen name="Question5" component={Question5} />
          <Stack.Screen name="Question6" component={Question6} />
          <Stack.Screen name="NameInput" component={NameInput} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
