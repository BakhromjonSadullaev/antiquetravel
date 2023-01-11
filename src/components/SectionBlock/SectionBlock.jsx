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
import { BsTelephoneFill } from "react-icons/bs";
import { RiSuitcaseFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { AiFillIdcard } from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BiBook } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { GiShinyApple } from "react-icons/gi";
import { BsCartFill } from "react-icons/bs";
import { FaKey } from "react-icons/fa";
import { MdCleanHands } from "react-icons/md";
import { MdRule } from "react-icons/md";
import { useTranslation, Trans } from "react-i18next";

export default function SimpleAccordion() {
  const { t } = useTranslation();
  return (
    <div className={style.wrapper}>
      <h1>
        <Trans t={t}>usefulInformation</Trans>
      </h1>
      <Accordion className={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={style.question}>
            <FaBarcode />
            <p>
              <Trans t={t}>faq1title</Trans>
            </p>
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
                <Trans t={t}>faq1text1</Trans>{" "}
              </p>
            </div>
            <p className={style.newline}>
              <Trans>faq1text2</Trans>{" "}
            </p>
            <p>
              <Trans t={t}>faq1text3</Trans>
            </p>
            <ul>
              <li>
                <Trans t={t}>faq1text4</Trans>
              </li>
              <li>
                <Trans t={t}>faq1text5</Trans>
              </li>
              <li>
                <Trans t={t}>faq1text6</Trans>
              </li>
              <li>
                <Trans t={t}>faq1text7</Trans>
              </li>
              <li>
                <Trans t={t}>faq1text8</Trans>
              </li>
              <li>
                <Trans t={t}>faq1text9</Trans>
              </li>
              <li>
                <Trans t={t}>faq1text10</Trans>
              </li>
              <li>
                <Trans t={t}>faq1text11</Trans>
              </li>
            </ul>
            <a href="">
              <Trans t={t}>faq1text12</Trans>
            </a>
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
            <Trans t={t}>faq2text1</Trans>
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
            <Trans t={t}>faq3text1</Trans>
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
                <Trans t={t}>faq3text2</Trans>
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
            <Trans t={t}>faq4text1</Trans>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography>
            <div className={style.faq4}>
              <div>
                <h2>
                  <Trans t={t}>faq4text1</Trans>
                </h2>
                <p>
                  <Trans t={t}>faq4text2</Trans>
                </p>
              </div>
              <h3>
                <Trans t={t}>faq4text4</Trans>
              </h3>
              <div className={style.plane}>
                <img
                  src="https://uzbekistan.travel/storage/app/media/nargizav/samolyot.jpg"
                  alt=""
                />
                <p>
                  <Trans t={t}>faq4text3</Trans>
                </p>
              </div>
              <h3>
                <Trans t={t}>faq4text5</Trans>
              </h3>
              <div className={style.carrier}>
                <p>
                  <a href="">
                    "<Trans t={t}>faq4text6</Trans>"
                  </a>{" "}
                  <Trans t={t}>faq4text7</Trans>
                </p>
                <img
                  src="https://uzbekistan.travel/storage/app/media/nargizav/forma.jpg"
                  alt=""
                />
              </div>
              <div className={style.ticket}>
                {" "}
                <a href="">
                  <Trans t={t}>faq4text8</Trans>
                </a>
                <a href="">
                  <Trans t={t}>faq4text9</Trans>
                </a>
              </div>

              <h3>
                <Trans t={t}>faq4text10</Trans>
              </h3>
              <div className={style.airlines}>
                <img
                  src="https://uzbekistan.travel/storage/app/media/nargizav/photo_2020-02-24_11-22-39.jpg"
                  alt=""
                />
                <p>
                  <Trans t={t}>faq4text11</Trans>
                </p>
              </div>
              <h3>
                <Trans t={t}>faq4text12</Trans>
              </h3>
              <div className={style.trains}>
                <p>
                  <Trans t={t}>faq4text13</Trans>
                </p>
                <img
                  src="https://uzbekistan.travel/storage/app/media/nargizav/photo_2020-02-24_11-24-25.jpg"
                  alt=""
                />
              </div>
              <div className={style.ticket}>
                {" "}
                <a href="">
                  <Trans t={t}>faq4text14</Trans>
                </a>
                <a href="">
                  <Trans t={t}>faq4text15</Trans>
                </a>
              </div>
              <h3>
                <Trans t={t}>faq4text16</Trans>
              </h3>
              <div className={style.metro}>
                <img
                  src="https://uzbekistan.travel/storage/app/media/uploaded-files/m16.jpg"
                  alt=""
                />
                <p>
                  {" "}
                  <Trans t={t}>faq4text17</Trans>
                </p>
              </div>
              <h4>
                <Trans t={t}>faq4text18</Trans>
              </h4>
              <h3>
                <Trans t={t}>faq4text19</Trans>
              </h3>
              <div className={style.buses}>
                <p>
                  <Trans t={t}>faq4text20</Trans>
                </p>
                <img
                  src="https://uzbekistan.travel/storage/app/media/nargizav/avtobus.png"
                  alt=""
                />
              </div>
              <a href="">
                <Trans t={t}>faq4text21</Trans>
              </a>
              <h3>
                <Trans t={t}>faq4text22</Trans>
              </h3>
              <div className={style.bus}>
                <img
                  src="https://uzbekistan.travel/storage/app/media/nargizav/gorodavto.jpg"
                  alt=""
                />
                <p>
                  <Trans t={t}>faq4text23</Trans>
                </p>
              </div>
              <h3>
                <Trans t={t}>faq4text24</Trans>
              </h3>
              <div>
                <p>
                  <Trans t={t}>faq4text25</Trans>
                </p>
              </div>
              <h3>Taxi</h3>
              <div className={style.taxi}>
                <div>
                  <p>
                    <Trans t={t}>faq4text26</Trans>
                  </p>
                  <h4>
                    <Trans t={t}>faq4text27</Trans>
                  </h4>
                  <p>
                    <Trans t={t}>faq4text28</Trans>
                  </p>
                </div>
                <img
                  src="https://uzbekistan.travel/storage/app/media/nargizav/Yandex-Tax-131.jpg"
                  alt=""
                />
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
          <Typography className={style.question}>
            <BsTelephoneFill />
            <Trans t={t}>faq5text1</Trans>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography>
            <div className={style.faq5}>
              <div>
                <h2>
                  <Trans t={t}>faq5text2</Trans>
                </h2>
                <p>
                  <Trans t={t}>faq5text3</Trans> - 101;
                </p>
                <p>
                  <Trans t={t}>faq5text4</Trans> - 102;
                </p>
                <p>
                  <Trans t={t}>faq5text5</Trans> - 103;
                </p>
                <p>
                  <Trans t={t}>faq5text6</Trans> - 104;
                </p>
                <p>
                  <Trans t={t}>faq5text7</Trans> – 109
                </p>
              </div>
              <img
                src="https://uzbekistan.travel/storage/app/media/nargizav/cropped-images/extra-0-0-0-0-1582526259.jpg"
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
            <RiSuitcaseFill />
            <Trans t={t}>faq6text1</Trans>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq6}>
            <img
              src="https://uzbekistan.travel/storage/app/media/nargizav/konsulskiy-otdel-posolstva-uzbekistana.jpg"
              alt=""
            />
            <p>
              <Trans t={t}>faq6text2</Trans>
            </p>
            <p>
              <Trans t={t}>faq6text3</Trans>
            </p>
            <a href="">
              <Trans t={t}>faq6text4</Trans>
            </a>
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
            <IoIosPeople />
            <Trans t={t}>faq7text1</Trans>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq7}>
            <div>
              <p>
                <Trans t={t}>faq7text2</Trans>
              </p>
              <h2>
                <Trans t={t}>faq7text3</Trans>
              </h2>
              <p>Salom! Hi!</p>
              <p>Yahshimisiz? – How are you?"</p>
              <p>Khair! - Goodbye!</p>
              <p>Salomat buling! - Be healthy!</p>
              <p>Rahmat! - Thank you!</p>
            </div>
            <img
              src="https://uzbekistan.travel/storage/app/media/cropped-images/unnamed-1-0-0-0-0-1589201001.png"
              alt=""
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <h1>
        <Trans t={t}>faq7text4</Trans>
      </h1>
      <Accordion className={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={style.question}>
            <AiFillIdcard /> Visa
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq8}>
            <div className={style.faq8_img}>
              <img
                src="https://uzbekistan.travel/storage/app/media/uploaded-files/11.jpg"
                alt=""
              />
              <p>
                <Trans t={t}>faq8text1</Trans>
              </p>
            </div>
            <div className={style.links}>
              <a href="">Visa-free regime</a>
              <a href="">Apply for an E-Visa</a>
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
            <BsFillPersonPlusFill />
            <Trans t={t}>faq9text1</Trans>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq9}>
            <img
              src="https://uzbekistan.travel/storage/app/media/uploaded-files/13.jpg"
              alt=""
            />
            <p>
              <Trans t={t}>faq9text2</Trans>
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <h1>
        <Trans t={t}>faq9text3</Trans>
      </h1>
      <Accordion className={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={style.question}>
            <FaBarcode />
            <Trans t={t}>faq10text1</Trans>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq10}>
            <div>
              <p>
                <Trans t={t}>faq10text2</Trans>
              </p>
              <img
                src="https://uzbekistan.travel/storage/app/media/uploaded-files/21.jpg"
                alt=""
              />
            </div>
            <h2>
              <Trans t={t}>faq10text3</Trans>
            </h2>
            <p>
              <Trans t={t}>faq10text4</Trans>
            </p>
            <p>
              <Trans t={t}>faq10text5</Trans>
            </p>
            <h2>
              <Trans t={t}>faq10text6</Trans>
            </h2>
            <p>
              <Trans t={t}>faq10text7</Trans>
            </p>
            <h2>
              <Trans t={t}>faq10text8</Trans>
            </h2>
            <p>
              <Trans t={t}>faq10text9</Trans>
            </p>
            <h2>
              <Trans t={t}>faq10text10</Trans>
            </h2>
            <p>
              <Trans t={t}>faq10text11</Trans>
            </p>
            <p>
              <Trans t={t}>faq10text12</Trans>
            </p>
            <h2>
              <Trans t={t}>faq10text13</Trans>
            </h2>
            <ul>
              <li>
                <Trans t={t}>faq10text14</Trans>
              </li>
              <li>
                <Trans t={t}>faq10text15</Trans>
              </li>
              <li>
                <Trans t={t}>faq10text16</Trans>
              </li>
              <li>
                <Trans t={t}>faq10text17</Trans>
              </li>
              <li>
                <Trans t={t}>faq10text18</Trans>
              </li>
              <li>
                <Trans t={t}>faq10text19</Trans>
              </li>
            </ul>
            <h2>
              <Trans t={t}>faq10text20</Trans>
            </h2>
            <ul>
              <li>
                <Trans t={t}>faq10text21</Trans>
              </li>
              <li>
                <Trans t={t}>faq10text22</Trans>
              </li>
            </ul>
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
            <BiBook />
            Border and passport control
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq11}>
            <img
              src="https://uzbekistan.travel/storage/app/media/oct.jpg"
              alt=""
            />
            <div>
              <h3>
                <Trans t={t}>faq11text1</Trans>
              </h3>
              <p>
                <Trans t={t}>faq11text2</Trans>
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
            <BsGithub />
            <Trans t={t}>faq12text1</Trans>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq12}>
            <div>
              <p>
                <Trans t={t}>faq12text2</Trans>
              </p>
              <p>
                <Trans t={t}>faq12text3</Trans>
              </p>
              <p>
                <Trans t={t}>faq12text4</Trans>
              </p>
            </div>
            <img
              src="https://uzbekistan.travel/storage/app/media/animals.jpg"
              alt=""
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <h1>
        <Trans t={t}>faq12text5</Trans>
      </h1>
      <Accordion className={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={style.question}>
            <BsPencilFill />
            <Trans t={t}>faq13text1</Trans>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq13}>
            <div className={style.register}>
              <div>
                <p>
                  <Trans t={t}>faq13text2</Trans>
                </p>
                <p>
                  <Trans t={t}>faq13text3</Trans>
                </p>
                <p>
                  <Trans t={t}>faq13text4</Trans>
                </p>
                <p>
                  <Trans t={t}>faq13text5</Trans>
                </p>
              </div>
              <img
                src="https://uzbekistan.travel/storage/app/media/uploaded-files/30.jpg"
                alt=""
              />
            </div>
            <p>
              <Trans t={t}>faq13text6</Trans>
            </p>
            <h3>
              <Trans t={t}>faq13text7</Trans>
            </h3>
            <p>
              <Trans t={t}>faq13text8</Trans>
            </p>
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
            <BiExit />
            <Trans t={t}>faq13text9</Trans>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq14}>
            <div className={style.flat}>
              <img
                src="https://uzbekistan.travel/storage/app/media/nargizav/hilton_vid2.jpg"
                alt=""
              />
              <p>
                <Trans t={t}>faq14text1</Trans>
              </p>
            </div>
            <h3>
              <Trans t={t}>faq14text2</Trans>
            </h3>
            <div>
              <p>
                - <Trans t={t}>faq14text3</Trans>
              </p>
              <p>
                - <Trans t={t}>faq14text4</Trans>
              </p>
              <p>
                - <Trans t={t}>faq14text5</Trans>
              </p>
              <p>
                - <Trans t={t}>faq14text6</Trans>
              </p>
              <p>
                - <Trans t={t}>faq14text7</Trans>
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
            <GiShinyApple /> <Trans t={t}>faq15text1</Trans>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq15}>
            <div className={style.food}>
              <img
                src="https://uzbekistan.travel/storage/app/media/uploaded-files/34.jpg"
                alt=""
              />
              <div>
                <p>
                  <Trans t={t}>faq15text2</Trans>
                </p>
                <h5>
                  <Trans t={t}>faq15text3</Trans>{" "}
                </h5>
              </div>
            </div>
            <div>
              <p>
                1. <Trans t={t}>faq15text4</Trans>{" "}
              </p>
              <p>
                2. <Trans t={t}>faq15text5</Trans>{" "}
              </p>
              <p>
                3. <Trans t={t}>faq15text6</Trans>
              </p>
              <p>
                4. <Trans t={t}>faq15text7</Trans>{" "}
              </p>
              <p>
                5. <Trans t={t}>faq15text8</Trans>
              </p>
              <p>
                6. <Trans t={t}>faq15text9</Trans>
              </p>
              <p>
                7. <Trans t={t}>faq15text10</Trans>
              </p>
              <p>
                <Trans t={t}>faq15text11</Trans>
              </p>
              <p>
                <Trans t={t}>faq15text12</Trans>
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
            <BsCartFill />
            <Trans t={t}>faq16text1</Trans>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq16}>
            <p>
              <Trans t={t}>faq16text2</Trans>
            </p>
            <img
              src="https://uzbekistan.travel/storage/app/media/uploaded-files/35.jpg"
              alt=""
            />
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
            <FaKey />
            <Trans t={t}>faq17text1</Trans>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq17}>
            <img
              src="https://uzbekistan.travel/storage/app/media/uploaded-files/36.jpg"
              alt=""
            />
            <p>
              <Trans t={t}>faq17text2</Trans>
            </p>
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
            <MdCleanHands />
            <Trans t={t}>faq18text1</Trans>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq18}>
            <img
              src="https://uzbekistan.travel/storage/app/media/uploaded-files/37.jpg"
              alt=""
            />
            <p>
              <Trans t={t}>faq18text2</Trans>
            </p>
            <p>
              <Trans t={t}>faq18text3</Trans>
            </p>
            <p>
              <Trans t={t}>faq18text4</Trans>
            </p>
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
            <MdRule />
            <Trans t={t}>faq19text1</Trans>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq19}>
            <img
              src="https://uzbekistan.travel/storage/app/media/uploaded-files/38.jpg"
              alt=""
            />
            <p>
              <Trans t={t}>faq19text2</Trans>
            </p>
            <p>
              <Trans t={t}>faq19text3</Trans>
            </p>
            <p>
              <Trans t={t}>faq19text4</Trans>
            </p>
            <p>
              <Trans t={t}>faq19text5</Trans>
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
