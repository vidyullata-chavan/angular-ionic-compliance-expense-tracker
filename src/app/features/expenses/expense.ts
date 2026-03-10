export interface Expense {
  id: number;
  date: string;
  description?: string;
  category: string;
  amount: number;
  vendor: string;
  receiptUrl?: string;
  complianceStatus: 'valid' | 'invalid';
}