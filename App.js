// import BottomBar from "./src/navigations/BottomBar";
import StackNavigator from "./src/navigations/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
            <StackNavigator />
      {/* <BottomBar/> */}
    </NavigationContainer>
    
  )
};

export default App; 