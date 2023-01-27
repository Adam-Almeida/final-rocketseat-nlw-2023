import * as Checkbox from "@radix-ui/react-checkbox";
import dayjs from "dayjs";
import { Check } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";

interface HabitsListProps {
  date: Date;
  onCompletedChanged: (completed: number) => void;
}

interface HabitsInfo {
  possibleHabits: {
    id: string;
    title: string;
    created_at: string;
  }[];
  completedHabits: string[];
}

export function HabitsList({ date, onCompletedChanged }: HabitsListProps) {
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>();

  useEffect(() => {
    api
      .get("/day", {
        params: {
          date: date.toISOString(),
        },
      })
      .then((response) => setHabitsInfo(response.data));
  }, []);

  async function handleToogleHabit(habitId: string) {
    await api.patch(`/habits/${habitId}/toogle`);

    const isHabitAlreadyCompleted =
      habitsInfo?.completedHabits.includes(habitId);

    let completedHabits: string[] = [];

    if (isHabitAlreadyCompleted) {
      completedHabits = habitsInfo!.completedHabits.filter(
        (id) => id !== habitId
      );
    } else {
      completedHabits = [...habitsInfo!.completedHabits, habitId];
    }

    setHabitsInfo({
      possibleHabits: habitsInfo!.possibleHabits,
      completedHabits,
    });

    onCompletedChanged(completedHabits.length);
  }

  const isDateInPast = dayjs(date).endOf("day").isBefore(new Date());

  return (
    <div className="mt-6 flex flex-col gap-3">
      {habitsInfo?.possibleHabits.map((habit) => {
        return (
          <Checkbox.Root
            key={habit.id}
            onCheckedChange={() => handleToogleHabit(habit.id)}
            defaultChecked={habitsInfo.completedHabits.includes(habit.id)}
            className="flex items-center gap-3 group "
            disabled={isDateInPast}
          >
            <div
              className="group-data-[state=checked]:bg-lime-500
             group-data-[state=checked]:border-lime-400 h-8 w-8 rounded-lg 
             flex items-center justify-center bg-zinc-900 border-2 border-zinc-300 transition-colors"
            >
              <Checkbox.Indicator>
                <Check size={20} weight="bold" />
              </Checkbox.Indicator>
            </div>

            <span className="font-semibold leading-tight text-white text-base">
              {habit.title}
            </span>
          </Checkbox.Root>
        );
      })}
    </div>
  );
}
