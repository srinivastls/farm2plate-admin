"use client";

interface Props {
  settings: any;
}

export default function DeliverySettings({
  settings,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Delivery Settings
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <div>

          <label className="mb-2 block">
            Delivery Charge
          </label>

          <input
            type="number"
            defaultValue={settings.deliveryCharge}
            className="w-full rounded-lg border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block">
            Free Delivery Above
          </label>

          <input
            type="number"
            defaultValue={settings.freeDeliveryLimit}
            className="w-full rounded-lg border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block">
            Cancellation Hours
          </label>

          <input
            type="number"
            defaultValue={settings.orderCancellationHours}
            className="w-full rounded-lg border p-3"
          />

        </div>

      </div>

    </div>
  );
}