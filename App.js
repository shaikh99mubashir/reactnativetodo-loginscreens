import React from "react";
import Todo from "./Components/Todo";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./Components/Login";
import Login2 from "./Components/Login2";
import Login3 from "./Components/Login3";
const App = () => {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
       <Stack.Navigator>
       {/* <Stack.Screen name="Login3" component={Login3} /> */}
       {/* <Stack.Screen name="Login2" component={Login2} /> */}
       {/* <Stack.Screen name="Login" component={Login} /> */}
       <Stack.Screen name="Todo" component={Todo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
