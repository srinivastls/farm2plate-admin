"use client";

interface Activity {

  id: string;

  title: string;

  description: string;

  time: string;

}

interface Props {

  activities: Activity[];

}

export default function RecentActivities({
  activities,
}: Props) {

  return (

    <div className="rounded-xl border bg-white p-6 shadow">

      <h2 className="mb-6 text-xl font-bold">

        Recent Activities

      </h2>

      <div className="space-y-6">

        {activities.map((activity) => (

          <div
            key={activity.id}
            className="flex gap-4"
          >

            <div className="mt-2 h-3 w-3 rounded-full bg-green-600" />

            <div>

              <h3 className="font-semibold">

                {activity.title}

              </h3>

              <p className="text-sm text-gray-500">

                {activity.description}

              </p>

              <p className="mt-1 text-xs text-gray-400">

                {activity.time}

              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}