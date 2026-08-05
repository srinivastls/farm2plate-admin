"use client";

interface Props {
  settings: any;
}

export default function SustainabilitySettings({
  settings,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Sustainability
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <div>

          <label className="mb-2 block">
            CO₂ Factor
          </label>

          <input
            type="number"
            defaultValue={settings.co2Factor}
            className="w-full rounded-lg border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block">
            Water Saving Factor
          </label>

          <input
            type="number"
            defaultValue={settings.waterFactor}
            className="w-full rounded-lg border p-3"
          />

        </div>

      </div>

    </div>
  );
}