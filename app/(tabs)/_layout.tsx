import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#2E7D32' }}><Tabs.Screen name="index" options={{ title: 'Dashboard', tabBarIcon: ({ color, size }) => <Ionicons name="grid-outline" color={color} size={size} /> }} /><Tabs.Screen name="tasks" options={{ title: 'Tasks', tabBarIcon: ({ color, size }) => <Ionicons name="checkbox-outline" color={color} size={size} /> }} /><Tabs.Screen name="inventory" options={{ title: 'Inventory', tabBarIcon: ({ color, size }) => <Ionicons name="cube-outline" color={color} size={size} /> }} /></Tabs>;
}
