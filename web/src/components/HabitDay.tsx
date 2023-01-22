import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";
import { ProgressBar } from "./ProgressBar";

interface HabitDayProps {
  completed: number;
  amount: number;
}

export function HabitDay({ amount, completed }: HabitDayProps) {
  const completedPercentage = Math.round((completed / amount) * 100);

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          "w-10 h-10 bg-zinc-900 border-zinc-800 border-2 rounded-lg",
          {
            "bg-zinc-900 border-zinc-800":completedPercentage === 0,
            "bg-lime-900 border-lime-800":completedPercentage > 0 && completedPercentage < 20,
            "bg-lime-800 border-lime-700":completedPercentage >= 20 && completedPercentage < 40,
            "bg-lime-700 border-lime-600":completedPercentage >= 40 && completedPercentage < 60,
            "bg-lime-600 border-lime-500":completedPercentage >= 60 && completedPercentage < 80,
            "bg-lime-500 border-lime-400":completedPercentage >= 80,
          }
        )}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] w-full bg-zinc-900 p-6 rounded-2xl flex flex-col">
          <span className="font-semibold text-zinc-400 text-sm">Domingo</span>
          <span className="mt-1 font-extrabold leading-tight text-2xl">
            22/01
          </span>
          <ProgressBar progress={completedPercentage} />
          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
