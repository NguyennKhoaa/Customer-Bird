import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import ShowerIcon from "@mui/icons-material/Shower";
import MedicationIcon from "@mui/icons-material/Medication";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import StarIcon from "@mui/icons-material/Star";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Divider from "@mui/material/Divider";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";
import { DateRange } from "@mui/x-date-pickers-pro/DateRangePicker";
import top1 from "../../images/1.png";
import Iframe from "react-iframe";
import Appbar from "../Appbar/Appbar";
import Footer from "../Footer/Footer";

const LabelStyle = styled(Typography)(() => ({
  color: "green",
  marginBottom: "8px",
}));

export interface IFormikProductNewForm {
  name: string;
  address: string;
  description: string;
  openTime: string;
  closeTime: string;
  coordinate: {
    latitude: string;
    longitude: string;
  };
  website: string;
  phone: string;
  lowestPrice: 0;
  highestPrice: 0;
  locationCategory: string;
}

export default function About() {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const [valueTime, setValueTime] = React.useState<Dayjs | null>(null);
  const [valueLichTrong, setValueLichTrong] = React.useState<DateRange<Dayjs>>([
    null,
    null,
  ]);
  return (
    <Box>
      <Appbar />
      <LabelStyle
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: "30px",
          paddingLeft: "24px",
          marginTop: "20px",
        }}
      >
        CLB Chim Cảnh Thủ Đức{" "}
      </LabelStyle>
      <Box style={{ display: "flex", marginBottom: "20px" }}>
        <Box style={{ color: "orange", paddingLeft: "24px" }}>
          <StarIcon />
        </Box>
        <Box style={{ marginLeft: "10px", display: "flex" }}>
          <Typography>4.60 (280)</Typography>
          <Typography style={{ marginLeft: "30px" }}>
            83 Đường Linh Đông phường 7 quận 9 TP.Thủ Đức
          </Typography>
        </Box>
      </Box>

      <Box
        style={{ marginLeft: "250px" }}
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <img src={top1} alt="abc" />
          </Grid>
          <Grid item xs={8} columns={16}>
            <Grid xs={8}>
              <img src={top1} alt="abc" />
            </Grid>
            <Grid xs={8} style={{ marginTop: "5px" }}>
              <img src={top1} alt="abc" height={100} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid style={{ marginTop: "20px" }} container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <LabelStyle
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "30px",
                  }}
                >
                  CLB Chim Cảnh Thủ Đức{" "}
                </LabelStyle>
                <Typography>
                  Chào mừng bạn đã đến với CLB Chim Cảnh Thủ Đức trung tâm lưu
                  trú chim cảnh sáng sủa và thoáng mát ở tầng trệt là nơi ở hoàn
                  hảo cho để gửi gắm những chú chim cảnh của bạn
                </Typography>

                <LabelStyle
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Không Gian{" "}
                </LabelStyle>
                <Typography>
                  Không gian nằm tại tầng trệt của ngôi nhà. Không gian rộng
                  thoáng mát để chăm sóc và quản lý những chú chim.
                </Typography>

                <LabelStyle
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Lồng Chim
                </LabelStyle>
                <Typography>
                  Chúng tôi có những lồng chim tốt chất lượng cao và có thể phù
                  hợp theo từng loại chim
                </Typography>

                <LabelStyle
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Dịch Vụ
                </LabelStyle>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={4} style={{ display: "flex" }}>
                      <SportsMmaIcon />
                      <Typography>Chải lông</Typography>
                    </Grid>
                    <Grid item xs={6} md={4} style={{ display: "flex" }}>
                      <ShowerIcon />
                      <Typography>Tắm rửa</Typography>
                    </Grid>
                    <Grid item xs={6} md={4} style={{ display: "flex" }}>
                      <MedicationIcon />
                      <Typography>Thuốc</Typography>
                    </Grid>
                    <Grid item xs={6} md={4} style={{ display: "flex" }}>
                      <DoneAllIcon />
                      <Typography>Nhật kí chăm sóc</Typography>
                    </Grid>
                    <Grid item xs={6} md={4} style={{ display: "flex" }}>
                      <RestaurantIcon />
                      <Typography>Thức ăn theo yêu cầu</Typography>
                    </Grid>
                    <Grid item xs={6} md={4} style={{ display: "flex" }}>
                      <InvertColorsIcon />
                      <Typography>Nguồn nước phù hợp</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Card sx={{ p: 3 }}>
                <Box style={{ display: "flex" }}>
                  <Grid xs={8} style={{ display: "flex" }}>
                    <LabelStyle
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "20px",
                        paddingRight: "5px",
                      }}
                    >
                      100k
                    </LabelStyle>
                    <LabelStyle
                      style={{
                        color: "black",
                        fontSize: "13px",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      / ngày
                    </LabelStyle>
                  </Grid>
                  <Grid xs={4} style={{ display: "flex" }}>
                    <StarIcon style={{ color: "orange" }} />
                    <Typography>4.60 (280)</Typography>
                  </Grid>
                </Box>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Ngày"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} style={{ width: "100%" }} />
                    )}
                  />
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    label="Thời gian"
                    value={valueTime}
                    onChange={(newValue) => {
                      setValueTime(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        style={{ width: "100%", marginTop: "20px" }}
                      />
                    )}
                  />
                </LocalizationProvider>

                <Box style={{ display: "flex", marginTop: "20px" }}>
                  <Grid xs={8}>
                    <Typography>Total</Typography>
                  </Grid>
                  <Grid xs={4}>
                    <Grid xs={12}>
                      <Typography style={{ fontWeight: "bold" }}>
                        100k
                      </Typography>
                    </Grid>
                    <Grid xs={12}>
                      <Typography style={{ color: "blue" }}>
                        View details
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                <Button
                  style={{
                    margin: "0 auto",
                    display: "flex",
                    marginTop: "20px",
                    padding: "20px 60px",
                    borderRadius: "20px",
                  }}
                  variant="contained"
                >
                  Đặt ngay
                </Button>
                <Divider style={{ marginTop: "40px" }} />
                <Box
                  style={{
                    display: "flex",
                    marginTop: "20px",
                  }}
                >
                  <Box>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://picsum.photos/200/300"
                      sx={{ width: 56, height: 56 }}
                    />
                  </Box>
                  <Box style={{ marginLeft: "15px" }}>
                    <Typography>Chủ chi nhánh</Typography>
                    <Typography style={{ color: "blue" }}>
                      Đặt câu hỏi
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <LabelStyle
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: "30px",
          marginTop: "50px",
          paddingLeft: "24px",
        }}
      >
        Lịch Trống{" "}
      </LabelStyle>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDateRangePicker
          displayStaticWrapperAs="desktop"
          value={valueLichTrong}
          onChange={(newValue) => {
            setValueLichTrong(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>

      <LabelStyle
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: "30px",
          marginTop: "50px",
          paddingLeft: "24px",
        }}
      >
        Review{" "}
      </LabelStyle>
      <Box style={{ display: "flex" }}>
        <Box style={{ color: "orange", paddingLeft: "24px" }}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </Box>
        <Box style={{ marginLeft: "10px" }}>
          <Typography>Very Good 4.6/5</Typography>
        </Box>
      </Box>

      <Grid container spacing={3} style={{ marginTop: "10px" }}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={3}>
              <Box
                style={{
                  display: "flex",
                  marginTop: "20px",
                }}
              >
                <Box>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://picsum.photos/200/300"
                    sx={{ width: 56, height: 56 }}
                  />
                </Box>
                <Box style={{ marginLeft: "15px" }}>
                  <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
                    Kathryn T.
                  </Typography>
                  <Box style={{ display: "flex" }}>
                    <Box>
                      <Typography style={{ color: "orange", fontSize: "10px" }}>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </Typography>
                    </Box>
                    <Box style={{ display: "flex", marginLeft: "50px" }}>
                      <Typography>5/5</Typography>
                      <Typography style={{ marginLeft: "50px" }}>
                        Stayted May 2021
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Stack>
            <Typography style={{ marginTop: "25x" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              velit ut odit iste provident voluptatem assumenda unde expedita.
              Veritatis reiciendis quos incidunt asperiores illo dignissimos
              dolores omnis quaerat corporis laboriosam. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Esse velit ut odit iste
              provident voluptatem assumenda unde expedita. Veritatis reiciendis
              quos incidunt asperiores illo dignissimos dolores omnis quaerat
              corporis laboriosam.
            </Typography>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginTop: "10px" }}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={3}>
              <Box
                style={{
                  display: "flex",
                  marginTop: "20px",
                }}
              >
                <Box>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://picsum.photos/200/300"
                    sx={{ width: 56, height: 56 }}
                  />
                </Box>
                <Box style={{ marginLeft: "15px" }}>
                  <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
                    Kathryn T.
                  </Typography>
                  <Box style={{ display: "flex" }}>
                    <Box>
                      <Typography style={{ color: "orange", fontSize: "10px" }}>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </Typography>
                    </Box>
                    <Box style={{ display: "flex", marginLeft: "50px" }}>
                      <Typography>5/5</Typography>
                      <Typography style={{ marginLeft: "50px" }}>
                        Stayted May 2021
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Stack>
            <Typography style={{ marginTop: "25x" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              velit ut odit iste provident voluptatem assumenda unde expedita.
              Veritatis reiciendis quos incidunt asperiores illo dignissimos
              dolores omnis quaerat corporis laboriosam. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Esse velit ut odit iste
              provident voluptatem assumenda unde expedita. Veritatis reiciendis
              quos incidunt asperiores illo dignissimos dolores omnis quaerat
              corporis laboriosam.
            </Typography>
          </Card>
        </Grid>
      </Grid>

      <LabelStyle
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: "30px",
          marginTop: "50px",
          paddingLeft: "24px",
        }}
      >
        Map{" "}
      </LabelStyle>

      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.906551778997!2d106.6566358147493!3d10.818463092292959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529111aa89f9d%3A0xd8f09cc0aa1b27f3!2sTan%20Son%20Nhat%20International%20Airport!5e0!3m2!1sen!2s!4v1601785962230!5m2!1sen!2s"
        width="1510px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"
      />
      <div style={{ marginTop: "20px" }}></div>
      <Footer />
    </Box>
  );
}
