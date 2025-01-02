import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";

export default function Progressbar({progress}) {
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
