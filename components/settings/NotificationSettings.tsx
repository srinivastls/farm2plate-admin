"use client";

interface Props {
  settings: any;
}

export default function NotificationSettings({
  settings,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Notifications
      </h2>

      <div className="space-y-5">

        <label className="flex items-center gap-3">

          <input
            type="checkbox"
            defaultChecked={settings.enableNotifications}
          />

          Enable Notifications

        </label>

        <label className="flex items-center gap-3">

          <input
            type="checkbox"
            defaultChecked={settings.enableEmail}
          />

          Email Notifications

        </label>

        <label className="flex items-center gap-3">

          <input
            type="checkbox"
            defaultChecked={settings.enableSMS}
          />

          SMS Notifications

        </label>

        <label className="flex items-center gap-3">

          <input
            type="checkbox"
            defaultChecked={settings.enablePush}
          />

          Push Notifications

        </label>

      </div>

    </div>
  );
}