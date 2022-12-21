// import React from "react";
// import Block from "./components/Block";
// import style from "./SectionBlock.module.scss";
// import AutoStoriesIcon from "@mui/icons-material/AutoStories";
// import DiamondIcon from "@mui/icons-material/Diamond";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import Diversity2Icon from "@mui/icons-material/Diversity2";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import AvTimerIcon from "@mui/icons-material/AvTimer";
// import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
// import BusAlertIcon from "@mui/icons-material/BusAlert";
import * as React from "react";
import style from "./SectionBlock.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaBarcode } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { RiShareCircleLine } from "react-icons/ri";
import { ImAirplane } from "react-icons/im";

export default function SimpleAccordion() {
  return (
    <div className={style.wrapper}>
      <Accordion className={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={style.question}>
            <FaBarcode /> “Uzbekistan. Safe travel GUARANTEED”
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography>
            <div className={style.faq1}>
              <img
                src="https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/3%20poster-0-0-0-0-1606727695.jpg"
                alt=""
              />
              <p>
                New times require new security solutions. The threat of the
                spread of coronavirus continues to be relevant and negatively
                affect physical and emotional health. Now, before any trip, the
                traveler involuntarily thinks about precautions and sanitary
                standards. How can we avoid the negative impact of the pandemic
                and still maintain the desire to travel? There is a way out!
                Namely, trust the professionals and special services responsible
                for the safety of each tourist. For these purposes we have
                developed a system of safe tourism "Uzbekistan. Safe travel
                GUARANTEED", which complies with all sanitary standards that
                meet international standards.
              </p>
            </div>
            <p className={style.newline}>
              In fact, such a system implies strict compliance with sanitary and
              hygienic measures to combat COVID-19 in Uzbekistan. All tourist
              sites, related infrastructure, and public areas must obtain a
              special permit or certificate to continue operating. These items
              include: accommodation facilities (hotels, guest houses, hostels,
              etc.), all state border points, air, railway and automobile
              stations, objects of material cultural heritage, museums,
              theaters, and other cultural objects
            </p>
            <p>
              What is included in the package of measures of the safe tourism
              system " Uzbekistan. Safe travel GUARANTEED"?
            </p>
            <ul>
              <li>
                ✔️Upon arrival in the country, you will be met by a vehicle that
                is pre-disinfected and half-filled. Masks are not allowed to be
                removed.
              </li>
              <li>
                ✔️At the entrance to the hotel or any other place, security
                measures the temperature and provides a sanitizer.
              </li>
              <li>✔️All employees are required to wear masks and gloves.</li>
              <li>
                ✔️Provided to minimize contact staff – to-guest. Minimum
                contacts – the minimum of risk.
              </li>
              <li>✔️Communicate only at a safe distance.</li>
              <li>
                ✔️In public places, tables and chairs are placed at a safe
                distance.
              </li>
              <li>
                ✔️All public items are treated with antiseptic agents several
                times a day.
              </li>
              <li>✔️Antiseptics are freely available in all public places.</li>
            </ul>
            <a href="">More details</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={style.question}>
            {" "}
            <AiFillGift />
            Holidays
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography>
            <div className={style.faq2}>
              <div>
                <p>
                  <bold>January 1</bold> - New year
                </p>
                <p>
                  <bold>January 14</bold> – National Defenders Day
                </p>
                <p>
                  <bold>March 8</bold> - International women's day
                </p>
                <p>
                  <bold>March 21</bold> - Navruz Holiday
                </p>
                <p>
                  <bold>May 9</bold> - day of Remembrance and Honors
                </p>
                <p>
                  <bold>September 1</bold>-Independence Day
                </p>
                <p>
                  <bold>October 1</bold> - Teacher and Mentor Day
                </p>
                <p>
                  <bold>December 8</bold> - Constitution Day
                </p>
                <p>
                  <bold>Iyd-al-Fitr</bold> (religious holiday) - date varies
                </p>
                <p>
                  <bold>sIyd-al-Adha</bold> (religious holiday) - date varies
                </p>
              </div>
              <img
                src="https://uzbekistan.travel/storage/app/media/uploaded-files/01.jpg"
                alt=""
              />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={style.question}>
            {" "}
            <RiShareCircleLine />
            Operating hours of establishments
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography>
            <div className={style.faq3}>
              <img
                src="https://uzbekistan.travel/storage/app/media/uploaded-files/worktime.png"
                alt=""
              />
              <p>
                All state institutions in Uzbekistan operate in an 8 hour
                working regime. State institutions (banks, embassies and
                consulates) - from 9:00 to 18:00 or from 8:00 to 17:00, lunch
                from 13:00 to 14:00. Special services-Ambulance, pharmacies,
                emergency services, fire assistance, police, transport
                companies: airport, railway stations, work around the clock.
                Tourist accommodation facilities (hotels, hotels, guest houses,
                resorts, some tourist recreation areas) - in check-in and
                check-out mode. Trade centers (shopping malls, hypermarkets,
                stores) - from 08:00 to 23:00. Entertainment establishments
                (amusement parks, cinemas, theaters, concert halls) - from 10:00
                to 23:00 Catering points (restaurants, cafes, bars, teahouses)
                from 10:00 to 23:00Night establishments (restaurants, bars,
                night clubs) from 21:00 to 05:00 and, as a rule, until the last
                customer.
              </p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={style.question}>
            {" "}
            <ImAirplane />
            Transport
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography>
            <div className={style.faq4}>
              <div>
                <h4>Tranport</h4>
                <p>
                  You can travel to Uzbekistan by plane, train, international
                  buses, and fans of extreme travel - by car, motorcycle, and
                  even hitchhiking. The main is that you are convenient. There
                  is the right-hand traffic in Uzbekistan.
                </p>
              </div>
              <div className={style.plane}>
                <h4>Planes:</h4>
                <img
                  src="https://uzbekistan.travel/storage/app/media/nargizav/samolyot.jpg"
                  alt=""
                />
                <p>
                  This is by far the fastest way to travel to Uzbekistan. The
                  main airport of the country is located in Tashkent. The modern
                  passenger fleet at I.Karimov International Airport "Tashkent "
                  is represented by modern aircrafts Boeing-767-300,
                  Boeing-757-200, Airbus-320-200, Boeing 787-8 Dreamliner and
                  British-Aerospace Avro RJ85.. Modern and comfortable economy
                  and business class lounges, multimedia services, delicious
                  food, friendly flight attendants – all these amenities can be
                  founded on Uzbekistan airlines. The modern international
                  airport terminals are open for you in every region of
                  Uzbekistan.
                </p>
              </div>
              <div>
                <h4>The country's main air carrier:</h4>
                <img
                  src="https://uzbekistan.travel/storage/app/media/nargizav/forma.jpg"
                  alt=""
                />
                <p>
                  <a href="">"Uzbekistan Airways"</a> JSC transports a huge
                  number of people around the world, providing its passengers
                  with «Safety, stability, comfort». The company operates the
                  regular flights from more than 40 cities around the world . In
                  addition, the company operates regular flights to the CIS
                  countries and within the country. Representative offices of
                  the airline operate in 25 countries around the world.
                </p>
                <a href="">Buy a ticket</a>
                <a href="">Flight Schedule</a>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 5</Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 6</Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 7</Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
// const SectionBlock = () => {
//   const info = [
//     {
//       question: <AutoStoriesIcon className={style.icon} />,
//       answer: "About Uzbekistan",
//     },
//     {
//       question: <DiamondIcon className={style.icon} />,
//       answer: "Applied Art",
//     },
//     {
//       question: <DarkModeIcon className={style.icon} />,
//       answer: "Nature and Climat",
//     },
//     {
//       question: <Diversity2Icon className={style.icon} />,
//       answer: "People",
//     },
//     {
//       question: <Brightness4Icon className={style.icon} />,
//       answer: "Culture and Tradition",
//     },
//     {
//       question: <AvTimerIcon className={style.icon} />,
//       answer: "Uzbekistan History",
//     },
//     {
//       question: <AssignmentIndIcon className={style.icon} />,
//       answer: "Visa",
//     },
//     {
//       question: <BusAlertIcon className={style.icon} />,
//       answer: "Travel Info",
//     },
//   ];
//   return <div className="FAQ">Some Content</div>;
// };

// export default SectionBlock;
