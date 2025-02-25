import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Home'
import dica1 from './dica1'
import dica2 from './dica2'

const Stack = createStackNavigator();

export default function rotas() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" componet={Home}/>
                <Stack.Screen name="dica1" componet={dica1}/>
                <Stack.Screen name="dica2" componet={dica2}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}