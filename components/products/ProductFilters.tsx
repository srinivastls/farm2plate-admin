"use client";

import {
    Search,
    Plus,
} from "lucide-react";

export default function ProductFilters(){

    return(

        <div className="flex justify-between items-center">

            <div className="flex gap-4">

                <div className="relative">

                    <Search
                        className="absolute left-3 top-3"
                        size={18}
                    />

                    <input

                        placeholder="Search product..."

                        className="pl-10 pr-4 py-2 border rounded-lg w-80"

                    />

                </div>

                <select className="border rounded-lg px-4">

                    <option>
                        All Categories
                    </option>

                </select>

                <select className="border rounded-lg px-4">

                    <option>
                        All Farms
                    </option>

                </select>

                <select className="border rounded-lg px-4">

                    <option>
                        All Stages
                    </option>

                    <option>
                        RAW
                    </option>

                    <option>
                        PROCESSED
                    </option>

                </select>

            </div>

            <button

                className="bg-green-600
                text-white
                px-5
                py-2
                rounded-lg
                flex
                gap-2"

            >

                <Plus size={18}/>

                Add Product

            </button>

        </div>

    );

}