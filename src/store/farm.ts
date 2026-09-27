import { create } from 'zustand';
import type { Expense, Farm, InventoryItem, Task } from '@/src/types/domain';

const demoFarm: Farm = { id: 'farm-1', name: 'Green Valley Farm', location: 'Pune, Maharashtra', areaHectares: 24.5, activeCrops: 3 };

type FarmState = {
  farm: Farm;
  tasks: Task[];
  inventory: InventoryItem[];
  expenses: Expense[];
  completeTask: (id: string) => void;
};

export const useFarmStore = create<FarmState>((set) => ({
  farm: demoFarm,
  tasks: [
    { id: 'task-1', title: 'Irrigate north field', field: 'North Field', dueDate: 'Today', status: 'pending', priority: 'high' },
    { id: 'task-2', title: 'Apply organic fertilizer', field: 'East Field', dueDate: 'Tomorrow', status: 'pending', priority: 'medium' },
    { id: 'task-3', title: 'Inspect tomato crop', field: 'Greenhouse 1', dueDate: 'Sep 30', status: 'completed', priority: 'low' }
  ],
  inventory: [
    { id: 'item-1', name: 'Urea fertilizer', quantity: 18, unit: 'bags', reorderLevel: 10 },
    { id: 'item-2', name: 'Tomato seeds', quantity: 4, unit: 'packets', reorderLevel: 5 },
    { id: 'item-3', name: 'Drip tape', quantity: 240, unit: 'meters', reorderLevel: 100 }
  ],
  expenses: [
    { id: 'expense-1', category: 'Fertilizer', amount: 12500, date: '2026-09-20' },
    { id: 'expense-2', category: 'Labor', amount: 8400, date: '2026-09-18' }
  ],
  completeTask: (id) => set((state) => ({ tasks: state.tasks.map((task) => task.id === id ? { ...task, status: 'completed' } : task) }))
}));
