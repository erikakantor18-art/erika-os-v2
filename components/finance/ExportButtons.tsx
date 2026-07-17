"use client";

import { Download, Upload } from "lucide-react";

interface Props {
  exportExcel: () => void;
  exportJSON: () => void;
  importJSON: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export default function ExportButtons({
  exportExcel,
  exportJSON,
  importJSON,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">

      <button
        onClick={exportExcel}
        className="rounded-xl border px-4 py-3 hover:bg-slate-100"
      >
        <Download
          size={18}
          className="inline mr-2"
        />
        Excel
      </button>

      <button
        onClick={exportJSON}
        className="rounded-xl border px-4 py-3 hover:bg-slate-100"
      >
        <Download
          size={18}
          className="inline mr-2"
        />
        Backup
      </button>

      <label className="cursor-pointer rounded-xl border px-4 py-3 hover:bg-slate-100">

        <Upload
          size={18}
          className="inline mr-2"
        />

        Restore

        <input
          hidden
          type="file"
          accept=".json"
          onChange={importJSON}
        />

      </label>

    </div>
  );
}