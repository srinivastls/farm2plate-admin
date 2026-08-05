"use client";

interface Props {
  settings: any;
}

export default function PricingSettings({
  settings,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Pricing Settings
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <div>

          <label className="mb-2 block">
            GST Percentage
          </label>

          <input
            type="number"
            defaultValue={settings.gstPercentage}
            className="w-full rounded-lg border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block">
            Currency
          </label>

          <input
            defaultValue={settings.currency}
            className="w-full rounded-lg border p-3"
          />

        </div>

      </div>

    </div>
  );
}