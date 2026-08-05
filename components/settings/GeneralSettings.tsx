"use client";

interface Props{

settings:any;

}

export default function GeneralSettings({

settings,

}:Props){

return(

<div className="rounded-xl border bg-white p-6 shadow">

<h2 className="mb-6 text-2xl font-bold">

General Settings

</h2>

<div className="grid grid-cols-2 gap-5">

<div>

<label className="mb-2 block">

Company Name

</label>

<input

defaultValue={settings.companyName}

className="w-full rounded-lg border p-3"

/>

</div>

<div>

<label className="mb-2 block">

Support Email

</label>

<input

defaultValue={settings.supportEmail}

className="w-full rounded-lg border p-3"

/>

</div>

<div>

<label className="mb-2 block">

Support Phone

</label>

<input

defaultValue={settings.supportPhone}

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