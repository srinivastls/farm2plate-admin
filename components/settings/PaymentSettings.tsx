"use client";

interface Props {
  settings: any;
}

export default function PaymentSettings({
  settings,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Payment Gateway
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <div>

          <label className="mb-2 block">
            Gateway
          </label>

          <input
            defaultValue={settings.paymentGateway}
            className="w-full rounded-lg border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block">
            Razorpay Key
          </label>

          <input
            defaultValue={settings.razorpayKey}
            className="w-full rounded-lg border p-3"
          />

        </div>

        <div className="col-span-2">

          <label className="mb-2 block">
            Stripe Key
          </label>

          <input
            defaultValue={settings.stripeKey}
            className="w-full rounded-lg border p-3"
          />

        </div>

      </div>

    </div>
  );
}