import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import LivingRoom from "./src/screens/LivingRoom";
import Kitchen from "./src/screens/KitchenScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Living: LivingRoom,
    Kitchen: Kitchen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Home Automation",
    },
  }
);

export default createAppContainer(navigator);
