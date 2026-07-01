"use client";



import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";



interface StatusTabsProps {

  value: string;

  onValueChange: (value: string) => void;

}



const tabs = [

  {

    value: "all",

    label: "All",

  },

  {

    value: "not-started",

    label: "Not Started",

  },

  {

    value: "in-progress",

    label: "In Progress",

  },

  {

    value: "implemented",

    label: "Implemented",

  },

  {

    value: "not-applicable",

    label: "Not Applicable",

  },

];



export default function StatusTabs({

  value,

  onValueChange,

}: StatusTabsProps) {

  return (

    <Tabs

      value={value}

      onValueChange={onValueChange}

      className="w-full"

    >

      <TabsList className="flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">

        {tabs.map((tab) => (

          <TabsTrigger

            key={tab.value}

            value={tab.value}

            className="

              h-11

              rounded-lg

              border

              border-slate-200

              bg-white

              px-5

              text-sm

              font-medium

              text-slate-600

              shadow-sm

              transition-all

              hover:bg-slate-50

              data-[state=active]:border-slate-900

              data-[state=active]:bg-slate-900

              data-[state=active]:text-white

            "

          >

            {tab.label}

          </TabsTrigger>

        ))}

      </TabsList>

    </Tabs>

  );

}