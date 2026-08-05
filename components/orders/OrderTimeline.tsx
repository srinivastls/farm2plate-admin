"use client";

import {
  CheckCircle,
  Circle,
} from "lucide-react";

interface Props {
  status: string;
}

const steps = [
  "PENDING",
  "CONFIRMED",
  "PACKED",
  "SHIPPED",
  "DELIVERED",
];

export default function OrderTimeline({
  status,
}: Props) {

  const current =
    steps.indexOf(status);

  return (

    <div className="rounded-xl border bg-white p-6">

      <h3 className="mb-5 text-xl font-bold">

        Order Timeline

      </h3>

      <div className="space-y-5">

        {steps.map((step, index) => (

          <div
            key={step}
            className="flex items-center gap-4"
          >

            {index <= current ? (

              <CheckCircle
                className="text-green-600"
                size={22}
              />

            ) : (

              <Circle
                className="text-gray-300"
                size={22}
              />

            )}

            <span
              className={
                index <= current
                  ? "font-semibold"
                  : "text-gray-400"
              }
            >

              {step}

            </span>

          </div>

        ))}

      </div>

    </div>

  );

}