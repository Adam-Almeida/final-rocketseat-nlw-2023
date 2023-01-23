import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { FormEvent, useState } from "react";

const availableWeekDays = [
  "Domingo",
  "Segunda Feira",
  "Terça Feira",
  "Quarta Feira",
  "Quinta Feira",
  "Sábado",
];

export function NewHabitForm() {
  const [title, setTitle] = useState("");
  const [weekDays, setWeekDays] = useState<number[]>([]);

  function createNewHabit(e: FormEvent) {
    e.preventDefault();
    console.log(title, weekDays)
  }

  function handleToogleWeekDay(weekDay: number) {
    if (weekDays.includes(weekDay)) {
      const weekDaysWithRemovedOne = weekDays.filter((day) => day !== weekDay);
      setWeekDays(weekDaysWithRemovedOne);
    } else {
      const weekDaysWithAddOne = [...weekDays, weekDay];
      setWeekDays(weekDaysWithAddOne);
    }
  }

  return (
    <form onSubmit={createNewHabit} className="w-full flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
      </label>

      <input
        className="p-4 w-full rounded-lg mt-3 mb-4 bg-zinc-800 text-white placeholder:text-zinc-400"
        type="text"
        id="title"
        placeholder="ex: Exercícios, dormir bem, etc..."
        autoFocus
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="" className="font-semibold leading-tight">
        Qual a recorrência?
      </label>
      <div className="flex flex-col gap-2 mt-3">
        {availableWeekDays.map((weekDay, index) => (
          <Checkbox.Root
            key={weekDay}
            className="flex items-center gap-3 group "
            onCheckedChange={() => handleToogleWeekDay(index)}
          >
            <div className="group-data-[state=checked]:bg-lime-500 group-data-[state=checked]:border-lime-400 h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-300">
              <Checkbox.Indicator>
                <Check size={20} weight="bold" />
              </Checkbox.Indicator>
            </div>

            <span className="font-semibold leading-tight text-white text-base">
              {weekDay}
            </span>
          </Checkbox.Root>
        ))}
      </div>

      <button
        type="submit"
        className="p-4 w-full mt-3 rounded-lg gap-3
        flex items-center font-semibold bg-green-600
        justify-center hover:bg-green-700 transition-bg duration-500"
      >
        <Check size={20} weight="bold" /> Confirmar
      </button>
    </form>
  );
}
