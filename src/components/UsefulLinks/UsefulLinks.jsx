import React from "react";
import style from "../UsefulLinks/UsefulLinks.module.scss";
import Link from "./components/Link";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import HotelIcon from "@mui/icons-material/Hotel";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CommuteIcon from "@mui/icons-material/Commute";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const UsefulLinks = () => {
  const links = [
    {
      icon: <WbSunnyIcon className={style.icon} />,
      title: "Weather",
    },
    {
      icon: <HotelIcon className={style.icon} />,
      title: "Hotel Booking",
    },
    {
      icon: <AccountBalanceIcon className={style.icon} />,
      title: "Bank Rate",
    },
    {
      icon: <CommuteIcon className={style.icon} />,
      title: "Train Booking",
    },
    {
      icon: <AirplaneTicketIcon className={style.icon} />,
      title: "Flight Booking",
    },
    {
      icon: <AccountBalanceWalletIcon className={style.icon} />,
      title: "Online Payment",
    },
  ];
  return (
    <div className={style.body}>
      <div className={style.linkHeader}>
        <h1>Useful Links</h1>
        <p>Feel the safety and hospitality</p>
      </div>
      <div className={style.linkContainer}>
        {links.map((link) => (
          <Link icon={link.icon} title={link.title} />
        ))}
      </div>
    </div>
  );
};

export default UsefulLinks;
