import { Plus, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import logoImage from "../assets/logo.svg";

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImage} alt="Habits" />
      <Dialog.Root>
        <Dialog.Trigger
          onClick={() => {}}
          className="border border-violet-500 font-semibold rounded-lg
              px-6 py-4 flex items-center gap-3 
              hover:border-violet-300 transition-border duration-500"
          type="button"
        >
          <Plus size={20} className="text-violet-500" />
          Novo hábito
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen  bg-black/80 fixed inset-0" />
          <Dialog.Content className="absolute rounded-2xl p-10
           bg-zinc-900 w-full max-w-md top-1/2 left-1/2 
           -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close className="absolute right-6 top-6 text-zinc-400
             hover:text-zinc-200">
              <X size={24} aria-label="Fechar"/>
            </Dialog.Close>
            conteudo
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
