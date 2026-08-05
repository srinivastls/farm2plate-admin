"use client";

interface Props {
  summary: {
    co2Saved: number;
    waterSaved: number;
    customerSavings: number;
  };
}

export default function SustainabilityCard({
  summary,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow">

      <h2 className="mb-6 text-xl font-bold">

        Sustainability Impact

      </h2>

      <div className="space-y-6">

        <div>

          <p className="text-gray-500">

            CO₂ Saved

          </p>

          <h2 className="text-3xl font-bold text-green-600">

            {(summary.co2Saved ?? 0).toLocaleString()} kg

          </h2>

        </div>

        <div>

          <p className="text-gray-500">

            Water Saved

          </p>

          <h2 className="text-3xl font-bold text-blue-600">

            {(summary.waterSaved ?? 0).toLocaleString()} L

          </h2>

        </div>

        <div>

          <p className="text-gray-500">

            Customer Savings

          </p>

          <h2 className="text-3xl font-bold text-orange-600">

            ₹{(summary.customerSavings ?? 0).toLocaleString()}

          </h2>

        </div>

      </div>

    </div>
  );
}