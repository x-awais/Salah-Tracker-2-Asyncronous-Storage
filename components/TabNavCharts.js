import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CustomChart from './CustomChart';
import MonthlyCharts from './MonthlyCharts';
import WeeklyChart from './WeeklyChart';


const Tab = createMaterialTopTabNavigator();

export default function TabNavCharts() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Weekly" component={WeeklyChart} />
            <Tab.Screen name="Monthly" component={MonthlyCharts} />
            <Tab.Screen name="Custom " component={CustomChart} />
        </Tab.Navigator>
    )
}


