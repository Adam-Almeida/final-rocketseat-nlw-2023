import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";
import { ProgressBar } from "./ProgressBar";
import dayjs from "dayjs";
import { HabitsList } from "./HabitsList";
import { useState } from "react";

interface HabitDayProps {
  date: Date;
  defaultCompleted?: number;
  amount?: number;
}

export function HabitDay({
  amount = 0,
  defaultCompleted = 0,
  date,
}: HabitDayProps) {
  const [completed, setCompleted] = useState(defaultCompleted);

  const completedPercentage =
    amount > 0 ? Math.round((completed / amount) * 100) : 0;

  const dayAndMonth = dayjs(date).format("DD/MM");
  const dayWeek = dayjs(date).format("dddd");

  const today = dayjs().startOf("day").toDate();
  const isCurrentDay = dayjs(date).isSame(today);

  function handleAmountCompletedDay(completed: number) {
    setCompleted(completed)
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx("w-10 h-10 border-2 rounded-lg transition-colors", {
          "bg-zinc-900 border-zinc-800": completedPercentage === 0,
          "bg-lime-900 border-lime-700":
            completedPercentage > 0 && completedPercentage < 20,
          "bg-lime-800 border-lime-600":
            completedPercentage >= 20 && completedPercentage < 40,
          "bg-lime-700 border-lime-500":
            completedPercentage >= 40 && completedPercentage < 60,
          "bg-lime-600 border-lime-500":
            completedPercentage >= 60 && completedPercentage < 80,
          "bg-lime-500 border-lime-400": completedPercentage >= 80,
          "border-lime-200": isCurrentDay,
        })}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] w-full bg-zinc-900 p-6 rounded-2xl flex flex-col">
          <span className="font-semibold text-zinc-400 text-sm">{dayWeek}</span>
          <span className="mt-1 font-extrabold leading-tight text-2xl">
            {dayAndMonth}
          </span>
          <ProgressBar progress={completedPercentage} />
          <HabitsList
            onCompletedChanged={handleAmountCompletedDay}
            date={date}
          />
          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
