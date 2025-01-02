import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";

export default function Progressbar() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer); // Stop the timer when progress reaches 100
          return 100; // Ensure progress stays at 100
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 50);
  
    return () => {
      clearInterval(timer);
    };
  }, []);
  

  return (
    <div>
      <LinearProgress
        variant="determinate"
        value={progress}
        className="mb-14"
        sx={{
          backgroundColor: "#e8edf3",
          "& .MuiLinearProgress-bar": { backgroundColor: "var(--brand-500)" },
        }}
      />
    </div>
  );
}
