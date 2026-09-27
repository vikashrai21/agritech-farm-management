import { FlatList, Pressable, Text, View } from 'react-native';
import { useFarmStore } from '@/src/store/farm';

export default function Tasks() {
  const { tasks, completeTask } = useFarmStore();
  return <View className="flex-1 bg-slate-50 px-5 pt-16"><Text className="text-3xl font-bold text-slate-900">Tasks</Text><Text className="mb-6 mt-1 text-slate-500">Keep field work on schedule.</Text><FlatList data={tasks} keyExtractor={(item) => item.id} renderItem={({ item }) => <View className="mb-3 rounded-2xl bg-white p-4"><View className="flex-row items-start justify-between"><View className="flex-1"><Text className={`font-semibold ${item.status === 'completed' ? 'text-slate-400 line-through' : 'text-slate-900'}`}>{item.title}</Text><Text className="mt-1 text-sm text-slate-500">{item.field} · {item.dueDate}</Text></View>{item.status === 'pending' ? <Pressable onPress={() => completeTask(item.id)} className="rounded-full bg-green-100 px-3 py-2"><Text className="text-xs font-bold text-green-800">Done</Text></Pressable> : <Text className="text-xs font-semibold text-green-700">Completed</Text>}</View></View>} /></View>;
}
