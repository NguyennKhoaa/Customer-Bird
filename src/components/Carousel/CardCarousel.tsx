import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import logo from "../../images/luffy.jpg";
import StarIcon from "@mui/icons-material/Star";

export default function CardCarousel(props: any) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div style={{ marginLeft: "30px" }}>
      <Carousel responsive={responsive}>
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                style={{ height: "300px" }}
                component="img"
                height="40"
                src={logo}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  CLB Chim cảnh Thủ Đức
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  100 lồng | Sân thoáng mát
                </Typography>
                <Box style={{ display: "flex" }}>
                  <Box>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        paddingTop: "15px",
                      }}
                    >
                      100K/ngày
                    </Typography>
                  </Box>
                  <Box>
                    <Box
                      style={{
                        display: "flex",
                        paddingTop: "15px",
                        paddingLeft: "50px",
                      }}
                    >
                      <Box style={{ color: "orange" }}>
                        <StarIcon />
                      </Box>
                      <Box>
                        <Typography style={{ marginTop: "4px" }}>
                          4.6
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                style={{ height: "300px" }}
                component="img"
                height="40"
                src={logo}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  CLB Chim cảnh Thủ Đức
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  100 lồng | Sân thoáng mát
                </Typography>
                <Box style={{ display: "flex" }}>
                  <Box>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        paddingTop: "15px",
                      }}
                    >
                      100K/ngày
                    </Typography>
                  </Box>
                  <Box>
                    <Box
                      style={{
                        display: "flex",
                        paddingTop: "15px",
                        paddingLeft: "50px",
                      }}
                    >
                      <Box style={{ color: "orange" }}>
                        <StarIcon />
                      </Box>
                      <Box>
                        <Typography style={{ marginTop: "4px" }}>
                          4.6
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                style={{ height: "300px" }}
                component="img"
                height="40"
                src={logo}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  CLB Chim cảnh Thủ Đức
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  100 lồng | Sân thoáng mát
                </Typography>
                <Box style={{ display: "flex" }}>
                  <Box>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        paddingTop: "15px",
                      }}
                    >
                      100K/ngày
                    </Typography>
                  </Box>
                  <Box>
                    <Box
                      style={{
                        display: "flex",
                        paddingTop: "15px",
                        paddingLeft: "50px",
                      }}
                    >
                      <Box style={{ color: "orange" }}>
                        <StarIcon />
                      </Box>
                      <Box>
                        <Typography style={{ marginTop: "4px" }}>
                          4.6
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                style={{ height: "300px" }}
                component="img"
                height="40"
                src={logo}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  CLB Chim cảnh Thủ Đức
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  100 lồng | Sân thoáng mát
                </Typography>
                <Box style={{ display: "flex" }}>
                  <Box>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        paddingTop: "15px",
                      }}
                    >
                      100K/ngày
                    </Typography>
                  </Box>
                  <Box>
                    <Box
                      style={{
                        display: "flex",
                        paddingTop: "15px",
                        paddingLeft: "50px",
                      }}
                    >
                      <Box style={{ color: "orange" }}>
                        <StarIcon />
                      </Box>
                      <Box>
                        <Typography style={{ marginTop: "4px" }}>
                          4.6
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </Carousel>
    </div>
  );
}
