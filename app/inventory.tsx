import { ScrollView, Text, View } from 'react-native';
import { useFarmStore } from '@/src/store/farm';

export default function Inventory() {
  const { inventory } = useFarmStore();
  return <ScrollView className="flex-1 bg-slate-50 px-5 pt-16"><Text className="text-3xl font-bold text-slate-900">Inventory</Text><Text className="mb-6 mt-1 text-slate-500">Know what is available before you buy.</Text>{inventory.map((item) => { const low = item.quantity <= item.reorderLevel; return <View key={item.id} className="mb-3 rounded-2xl bg-white p-4"><View className="flex-row justify-between"><Text className="font-semibold text-slate-900">{item.name}</Text>{low && <Text className="text-xs font-bold text-amber-700">REORDER</Text>}</View><Text className="mt-2 text-2xl font-bold text-slate-800">{item.quantity} <Text className="text-sm font-normal text-slate-500">{item.unit}</Text></Text></View>; })}</ScrollView>;
}
