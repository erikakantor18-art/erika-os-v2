import * as XLSX from "xlsx";
import { Transaction } from "@/types/finance";

export function exportTransactionsToExcel(
  transactions: Transaction[]
) {
  const data = transactions.map((item) => ({
    Date: item.date,
    Title: item.title,
    Category: item.category,
    Type: item.type,
    Amount: item.amount,
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Transactions"
  );

  XLSX.writeFile(
    workbook,
    `Finance-${
      new Date().toISOString().split("T")[0]
    }.xlsx`
  );
}