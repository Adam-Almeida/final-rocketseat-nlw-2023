import { Plus, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import logoImage from "../assets/logo.svg";
import { NewHabitForm } from "./NewHabitForm";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImage} alt="Habits" />

      <Dialog.Root>
        <Dialog.Trigger
          className="border border-lime-500 font-semibold rounded-lg
              px-6 py-4 flex items-center gap-3 
              hover:border-lime-300 transition-border duration-500"
          type="button"
        >
          <Plus size={20} className="text-lime-500" />
          Novo hábito
        </Dialog.Trigger>
        {open && (
          <Dialog.Portal>
            <Dialog.Overlay className="w-screen h-screen  bg-black/80 fixed inset-0" />
            <Dialog.Content
              className="absolute rounded-2xl p-10
           bg-zinc-900 w-full max-w-md top-1/2 left-1/2 
           -translate-x-1/2 -translate-y-1/2"
            >
              <Dialog.Close
                className="absolute right-6 top-6 text-zinc-400
             hover:text-zinc-200"
              >
                <X size={24} aria-label="Fechar" />
              </Dialog.Close>
              <Dialog.Title className="text-2xl leading-tight font-semibold">
                Criar Hábito
              </Dialog.Title>
              <NewHabitForm closeModal={() => setOpen(false)} />
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </Dialog.Root>
    </div>
  );
}
