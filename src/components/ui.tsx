import { Text, View } from 'react-native';

export function SectionTitle({ title, action }: { title: string; action?: string }) {
  return <View className="mb-3 flex-row items-center justify-between"><Text className="text-lg font-bold text-slate-900">{title}</Text>{action ? <Text className="text-sm font-semibold text-green-700">{action}</Text> : null}</View>;
}

export function MetricCard({ label, value, tone = 'green' }: { label: string; value: string; tone?: 'green' | 'amber' | 'blue' }) {
  const colors = { green: 'bg-green-50 text-green-800', amber: 'bg-amber-50 text-amber-800', blue: 'bg-blue-50 text-blue-800' } as const;
  const [background, text] = colors[tone].split(' ');
  return <View className={`mr-3 min-w-[105px] rounded-2xl p-4 ${background}`}><Text className={`text-2xl font-bold ${text}`}>{value}</Text><Text className="mt-1 text-xs text-slate-600">{label}</Text></View>;
}
