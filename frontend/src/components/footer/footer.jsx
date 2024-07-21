import { Box, Button, Typography } from '@mui/material'
const Footer = () => {
  return (
    <
// @ts-ignore
    Box
    sx={{
     
      bgcolor: "#2B3445",
      py: 1.3,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    }}
  >
    <
// @ts-ignore
    Typography
      justifyContent={"center"}
      display={"flex"}
      alignItems={"center"}
      color={"HighlightText"}
      variant="h6"
      sx={{fontSize: 18}}
    >
      With  ♡ by
      <
// @ts-ignore
      Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
          variant="text"
          color="primary"
        >
          BEN KHLIFA
        </Button>
      ©2024
    </Typography>
  </Box>
  );
}

export default Footer;
