import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "../Payment/Payment.module.scss";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import Tabs from "@mui/material/Tabs";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
const Payment = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={style.container}>
      <Header />
      <main>
        <img
          src="https://storage.kun.uz/source/thumbnails/_medium/4/S9cf3tp4Ylx1D-KhU1MronrAzpb36jr2_medium.jpg"
          alt=""
        />
        <div className={style.paymentContainer}>
          {/* <h2>Online payments built for success</h2>
          <form>
            <input type="number" placeholder="Card Number" />
            <input type="text" placeholder="dd/mm" />
            <input type="text" placeholder="CSC" />
          </form> */}
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Box>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Payment;
