"use client";

interface Props {
  latitude: number;
  longitude: number;
}

export default function FarmMap({
  latitude,
  longitude,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow">

      <h2 className="text-xl font-bold mb-4">
        Farm Location
      </h2>

      <div className="flex h-72 items-center justify-center rounded-lg border-2 border-dashed bg-gray-50">

        <div className="text-center">

          <p className="text-lg font-semibold">
            📍 Farm Coordinates
          </p>

          <p className="mt-3 text-gray-600">
            Latitude: {latitude}
          </p>

          <p className="text-gray-600">
            Longitude: {longitude}
          </p>

          <button
            className="mt-6 rounded-lg bg-green-600 px-5 py-2 text-white"
            onClick={() =>
              window.open(
                `https://www.google.com/maps?q=${latitude},${longitude}`,
                "_blank",
              )
            }
          >
            Open in Google Maps
          </button>

        </div>

      </div>

    </div>
  );
}