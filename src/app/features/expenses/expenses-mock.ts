import { Expense } from "./expense";

export const MOCK_EXPENSES: Expense[] = [
    {
        id: 1,
        description: 'Grocery Shopping',
        amount: 150.75,
        date: '2023-10-01',
        category: 'Food',
        vendor: 'Supermarket',
        complianceStatus: 'valid'
    },
    { id: 2, date: '2026-03-10', category: 'Travel', amount: 2500, vendor: 'Uber', complianceStatus: 'valid' },
    { id: 3, date: '2026-03-09', category: 'Food', amount: 1200, vendor: 'Dominos', complianceStatus: 'invalid' },
    { id: 4, date: '2026-03-08', category: 'Utilities', amount: 3000, vendor: 'Electricity Board', complianceStatus: 'valid' },
    { id: 5, date: '2026-03-07', category: 'Entertainment', amount: 800, vendor: 'Netflix', complianceStatus: 'valid' },
    { id: 6, date: '2026-03-06', category: 'Health', amount: 500, vendor: 'Pharmacy', complianceStatus: 'invalid' },
    { id: 7, date: '2026-03-05', category: 'Education', amount: 2000, vendor: 'Online Course', complianceStatus: 'valid' },
    { id: 8, date: '2026-03-04', category: 'Transport', amount: 300, vendor: 'Bus Ticket', complianceStatus: 'valid' },
    { id: 9, date: '2026-03-03', category: 'Miscellaneous', amount: 150, vendor: 'Stationery Store', complianceStatus: 'invalid' },
    { id: 10, date: '2026-03-02', category: 'Office Supplies', amount: 400, vendor: 'Office Depot', complianceStatus: 'valid' },
    { id: 11, date: '2026-03-01', category: 'Software', amount: 1000, vendor: 'Tech Store', complianceStatus: 'valid' },
    { id: 12, date: '2026-03-01', category: 'Hardware', amount: 1500, vendor: 'Electronics Store', complianceStatus: 'valid' },
    { id: 13, date: '2026-03-01', category: 'Training', amount: 2000, vendor: 'Learning Platform', complianceStatus: 'invalid' },
    { id: 14, date: '2026-03-01', category: 'Marketing', amount: 3000, vendor: 'Advertising Agency', complianceStatus: 'valid' },
    { id: 15, date: '2026-03-01', category: 'Consulting', amount: 4000, vendor: 'Management Consultant', complianceStatus: 'invalid' },
    { id: 16, date: '2026-03-01', category: 'Legal', amount: 5000, vendor: 'Law Firm', complianceStatus: 'valid' },
    { id: 17, date: '2026-03-01', category: 'Insurance', amount: 6000, vendor: 'Insurance Company', complianceStatus: 'invalid' },
    { id: 18, date: '2026-03-01', category: 'Financial Services', amount: 7000, vendor: 'Bank', complianceStatus: 'valid' },
    { id: 19, date: '2026-03-01', category: 'Real Estate', amount: 8000, vendor: 'Real Estate Agency', complianceStatus: 'valid' },
    { id: 20, date: '2026-03-01', category: 'Other', amount: 9000, vendor: 'Misc Vendor', complianceStatus: 'invalid' }
];