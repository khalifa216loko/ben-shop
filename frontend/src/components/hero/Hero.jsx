import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import IconSection from "./IconSection";

const mySlider = [
  { text: "MEN", link: "src/images/banner-15.jpg" },
  { text: "WOMEN", link: "src/images/banner25.webp" },
];

const Hero = () => {
  const theme = useTheme();
  return (
    <Container  >
      <Box sx={{pt: 2, mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}>
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {mySlider.map((item) => {
            return (
              <SwiperSlide key={item.link} className="parent-slider">
                <img src={item.link} alt="" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                    },

                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFFF00",
                    }}
                    variant="h5"
                  >
                    VINTAGE  COLLECTION
                  </Typography>

                  <Typography
                    sx={{
                      color: "#FFFF00",
                      fontWeight: 500,
                      my: 1,
                    }}
                    variant="h3"
                  >
                    {item.text}
                  </Typography>

                  <Stack
                    sx={{
                      justifyContent: { xs: "center", sm: "left" },
                    }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography color={"#FF0000"} mr={1} variant="h4">
                      SALE UP TO
                    </Typography>
                    <Typography color={"#FF0000"} variant="h4">
                      30% OFF
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      color: "#FFFF00",
                      fontWeight: 300,
                      my: 1,
                    }}
                    variant="body1"
                  >
                    Get Free Shipping on orders over Є100.00
                  </Typography>

                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#0000FF",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      },
                    }}
                    variant="contained"
                  >
                    shop now
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src/images/banner-17.jpg" alt="" />

            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#FFFF00",
                  fontSize: "18px",
                }}
              >
              Explore key trends ♥
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#FFFF00",
                  lineHeight: "16px",
                  mt: 50,
                }}
              >
                A style consultation will help you to express your personal style, boost your confidence and make choosing what to wear easy!

              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#FF0000",
                }}
              >
               shop now
              </Typography>

              <Link
                sx={{
                  color: "#0000FF",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                
                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
              Schedule A Call
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>

          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src/images/banner-16.jpeg" alt="" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#FFFF00",
                  fontSize: "18px",
                  fontWeight: 300,
                }}
              >
                Accessoires
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#FFFF00",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                watches &
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#FFFF00",
                }}
              >
                vintage cameras
              </Typography>

              <Link
                sx={{
                  color: "#0000FF",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",

                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>

      <IconSection />
    </Container>
  );
};

export default Hero;
