import { useState } from "react";
import { Button, Typography, Stack } from "@mui/material";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h4" data-testid="count">
        {count}
      </Typography>
      <Button
        variant="outlined"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </Button>
    </Stack>
  );
};

export default Counter;
