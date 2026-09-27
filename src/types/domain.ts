export type Farm = { id: string; name: string; location: string; areaHectares: number; activeCrops: number };
export type Task = { id: string; title: string; field: string; dueDate: string; status: 'pending' | 'completed'; priority: 'low' | 'medium' | 'high' };
export type InventoryItem = { id: string; name: string; quantity: number; unit: string; reorderLevel: number };
export type Expense = { id: string; category: string; amount: number; date: string; note?: string };
