import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" sx={{ mb: 2 }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            Jest Test
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
