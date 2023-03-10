interface PropgressBarProps {
  progress: number;
}

export function ProgressBar(props: PropgressBarProps) {

  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-label="Progresso de Habitos completados neste dia"
        aria-valuenow={props.progress}
        className="h-3 rounded-xl bg-lime-600 transition-all"
        style={{ width: `${props.progress}%` }}
      />
    </div>
  );
}
