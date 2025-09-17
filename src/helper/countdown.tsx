import React from "react";

type CountdownProps = { target: Date };

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown({ target }: CountdownProps) {
  const [now, setNow] = React.useState(() => new Date());

  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return (
    <div className="d-flex align-items-center justify-content-center flex-column gap-2">
      <div className="display-6">
        {days}d {pad(hours)}h {pad(minutes)}m {pad(seconds)}s
      </div>
    </div>
  );
}
