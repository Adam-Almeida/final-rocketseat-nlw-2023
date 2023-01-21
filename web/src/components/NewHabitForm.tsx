import { Check } from "phosphor-react";

export function NewHabitForm() {
  return (
    <form className="w-full flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
      </label>

      <input
        className="p-4 w-full rounded-lg mt-3 mb-4 bg-zinc-800 text-white placeholder:text-zinc-400"
        type="text"
        id="title"
        placeholder="ex: Exercícios, dormir bem, etc..."
        autoFocus
      />

      <label htmlFor="" className="font-semibold leading-tight">
        Qual a recorrência?
      </label>

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
