import { ScrollView, Text, View } from 'react-native';
import { MetricCard, SectionTitle } from '@/src/components/ui';
import { useFarmStore } from '@/src/store/farm';

export default function Dashboard() {
  const { farm, tasks, inventory, expenses } = useFarmStore();
  const pendingTasks = tasks.filter((task) => task.status === 'pending').length;
  const lowStock = inventory.filter((item) => item.quantity <= item.reorderLevel).length;
  const spend = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return <ScrollView className="flex-1 bg-slate-50" contentContainerStyle={{ padding: 20, paddingTop: 64 }}>
    <Text className="text-sm font-semibold uppercase tracking-widest text-green-700">Good morning</Text>
    <Text className="mt-1 text-3xl font-bold text-slate-900">{farm.name}</Text>
    <Text className="mt-1 text-slate-500">{farm.location} · {farm.areaHectares} hectares</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-6"><MetricCard label="Active crops" value={`${farm.activeCrops}`} /><MetricCard label="Tasks due" value={`${pendingTasks}`} tone="amber" /><MetricCard label="Low stock items" value={`${lowStock}`} tone="blue" /></ScrollView>
    <View className="mt-8"><SectionTitle title="Today’s priorities" action="View all" />{tasks.filter((task) => task.status === 'pending').map((task) => <View key={task.id} className="mb-3 rounded-2xl bg-white p-4 shadow-sm"><Text className="font-semibold text-slate-900">{task.title}</Text><Text className="mt-1 text-sm text-slate-500">{task.field} · Due {task.dueDate}</Text></View>)}</View>
    <View className="mt-5 rounded-2xl bg-green-700 p-5"><Text className="text-sm text-green-100">Season expenses</Text><Text className="mt-1 text-3xl font-bold text-white">₹{spend.toLocaleString('en-IN')}</Text><Text className="mt-2 text-green-100">Track spending to improve your next crop plan.</Text></View>
  </ScrollView>;
}
