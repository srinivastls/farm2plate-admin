"use client";

interface SecuritySettingsProps {
  settings: any;
}

export default function SecuritySettings({
  settings,
}: SecuritySettingsProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        Security
      </h2>

      <div className="space-y-5">
        <button
          type="button"
          className="rounded-lg bg-red-600 px-5 py-3 text-white hover:bg-red-700"
        >
          Reset API Keys
        </button>

        <button
          type="button"
          className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          Export System Logs
        </button>

        <button
          type="button"
          className="rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700"
        >
          Backup Database
        </button>
      </div>
    </div>
  );
}