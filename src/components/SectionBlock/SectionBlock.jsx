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

export default function SimpleAccordion() {
  return (
    <div className={style.wrapper}>
      <h1>Useful information</h1>
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
                <h2>Tranport</h2>
                <p>
                  You can travel to Uzbekistan by plane, train, international
                  buses, and fans of extreme travel - by car, motorcycle, and
                  even hitchhiking. The main is that you are convenient. There
                  is the right-hand traffic in Uzbekistan.
                </p>
              </div>
              <h3>Planes:</h3>
              <div className={style.plane}>
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
              <h3>The country's main air carrier:</h3>
              <div className={style.carrier}>
                <p>
                  <a href="">"Uzbekistan Airways"</a> JSC transports a huge
                  number of people around the world, providing its passengers
                  with «Safety, stability, comfort». The company operates the
                  regular flights from more than 40 cities around the world . In
                  addition, the company operates regular flights to the CIS
                  countries and within the country. Representative offices of
                  the airline operate in 25 countries around the world.
                </p>
                <img
                  src="https://uzbekistan.travel/storage/app/media/nargizav/forma.jpg"
                  alt=""
                />
              </div>
              <div className={style.ticket}>
                {" "}
                <a href="">Buy a ticket</a>
                <a href="">Flight Schedule</a>
              </div>

              <h3>Foreign airlines in Uzbekistan</h3>
              <div className={style.airlines}>
                <img
                  src="https://uzbekistan.travel/storage/app/media/nargizav/photo_2020-02-24_11-22-39.jpg"
                  alt=""
                />
                <p>
                  Uzbekistan implements the new reforms. Soon our country will
                  become the largest transport hub in the world, the sky will be
                  opened for the foreign air carriers, and the new charter
                  flights will be launched to Uzbekistan. Every day Uzbekistan
                  receives flights from international air carriers such as
                  Turkish Airlines, Aeroflot, UTair, Asiana Airlines, Korean
                  Air, Fly Dubai, S7. Among others, foreign airlines Atlas
                  global (Turkey), Zhejang Loong Airlines (China) have already
                  launched the new charter flights to our country.
                </p>
              </div>
              <h3>Trains</h3>
              <div className={style.trains}>
                <p>
                  Nowadays this type of the public transport in Uzbekistan is as
                  popular as the air travel. If you want to enjoy the beauty of
                  the cities of Uzbekistan or drive from Tashkent to Samarkand,
                  and then reach Bukhara or even Khiva, it will be more
                  convenient to travel by train. One of the most popular and
                  high-speed train is “Afrosiyob”, which runs daily 2 times a
                  day. “Afrosiyob” is convenience and comfort, quality food and
                  first-class service.
                </p>
                <img
                  src="https://uzbekistan.travel/storage/app/media/nargizav/photo_2020-02-24_11-24-25.jpg"
                  alt=""
                />
              </div>
              <div className={style.ticket}>
                {" "}
                <a href="">Railway stations of Uzbekistan</a>
                <a href="">Book or to purchase tickets</a>
              </div>
              <h3>Tashkent metro </h3>
              <div className={style.metro}>
                <img
                  src="https://uzbekistan.travel/storage/app/media/uploaded-files/m16.jpg"
                  alt=""
                />
                <p>
                  {" "}
                  If you travel to the capital of Uzbekistan, you can visit one
                  of the main sightseeing of the city –Tashkent underground. It
                  has a small network, so it is easy to navigate there.
                  Nevertheless, the each station for residents is just a place
                  to wait for trains, but for tourists it is a unique art
                  gallery. Metro services are available daily from 06:00 to
                  00:00.
                </p>
              </div>
              <h4>Other transport:</h4>
              <h3>Intercity buses</h3>
              <div className={style.buses}>
                <p>
                  In our country, the intercity and the international buses run
                  daily and hourly, connecting all cities of Uzbekistan and
                  neighboring countries. If you want, for example, to go from
                  Tashkent to Samarkand or, for example, to Bukhara, and from
                  there directly to Khiva, it is better to take the high-speed
                  train to Bukhara, and then the intercity bus to Khiva. This is
                  the standard route for the traveler. This is both economical
                  and informative.
                </p>
                <img
                  src="https://uzbekistan.travel/storage/app/media/nargizav/avtobus.png"
                  alt=""
                />
              </div>
              <a href="">Buy a ticket for intercity buses</a>
              <h3>City buses</h3>
              <div className={style.bus}>
                <img
                  src="https://uzbekistan.travel/storage/app/media/nargizav/gorodavto.jpg"
                  alt=""
                />
                <p>
                  One of the most convenient and economical options for moving
                  around the city is an urban transport. Nowadays the city buses
                  are equipped with modern media technologies, the air
                  conditioning, Wi-fi, and even there are the facilities for the
                  disabled. The cost of a ticket for one trip is 1400 sums. You
                  can buy the tickets from the ticket inspectors on the bus
                  itself.
                </p>
              </div>
              <h3>Minibus taxis</h3>
              <div>
                <p>
                  The minibus taxi in Uzbekistan is mainly used to move around
                  the city over long distances, most often to get from one end
                  of the city to another. If the taxi is expensive, people
                  choose minibuses; it is fast, economical and convenient. You
                  can use the taxi services around the city, to reach the
                  airport and the railway station, or, for example, to take a
                  day trip to interesting places, to go outside of the city or
                  to travel with friends to the other cities of our vast
                  country.
                </p>
              </div>
              <h3>Taxi</h3>
              <div className={style.taxi}>
                <div>
                  <p>
                    In Tashkent and Samarkand, you can order a taxi via Yandex
                    Taxi and MyTaxi mobile apps.
                  </p>
                  <h4>Rent a car</h4>
                  <p>
                    If you prefer to drive around the city, then the best option
                    for you is to rent a car. There are many companies in
                    Tashkent that rent the cars of different classes. You just
                    need the passport and the driver's license. And, if you are
                    in Uzbekistan recently, you can find a city map at any city
                    stall.
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
            Emergency numbers
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography>
            <div className={style.faq5}>
              <div>
                <h2>Emergency services:</h2>
                <p>Fire emergency - 101;</p>
                <p>Police - 102;</p>
                <p>Ambulance - 103;</p>
                <p>Emergency gas service - 104;</p>
                <p>Reference – 109</p>
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
            Diplomatic missions
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq6}>
            <img
              src="https://uzbekistan.travel/storage/app/media/nargizav/konsulskiy-otdel-posolstva-uzbekistana.jpg"
              alt=""
            />
            <p>
              Uzbekistan has diplomatic relations with almost all the countries
              around the world and this reflects the role and place of the
              country among world community.
            </p>
            <p>
              Nowadays, Uzbekistan has its diplomatic missions in more than 50
              countries and more than 60 countries have their representative
              offices here in our country.
            </p>
            <a href="">Find out more</a>
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
            Frequently used phrases
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq7}>
            <div>
              <p>
                The Uzbek language is quite complex, but if you know a couple of
                phrases that are most used in this sunny country, you will not
                get lost. Moreover, Uzbek people are really friendly and
                responsive and ready to help you at any time. It is not a secret
                that Uzbek hospitality is known all over the world.
              </p>
              <h2>Most popular keywords</h2>
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
      <h1>Before the trip</h1>
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
                Do you want to get a visa to Uzbekistan? Now it's much easier.
                All you need is an Internet connection and a passport. You can
                apply for an electronic tourist visa to Uzbekistan through the
                web-site <a href="">e-visa.gov.uz</a>. And, if your country is
                listed among 86 visa-free nations, then just buy tickets, pack
                your bags and Welcome to Uzbekistan!
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
            Traveling with kids
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq9}>
            <img
              src="https://uzbekistan.travel/storage/app/media/uploaded-files/13.jpg"
              alt=""
            />
            <p>
              The most inspiring, but at the same time tedious option of travel
              is a family vacation with children. We give some useful life hacks
              for those who want to relax for the benefit of themselves and
              children, without getting tired of the constant hustle and bustle,
              to get the most positive emotions and impressions for the whole
              year.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <h1>Entering the country</h1>
      <Accordion className={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={style.question}>
            <FaBarcode />
            Customs regulations
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq10}>
            <div>
              <p>
                Uzbekistan has approved a single form of customs Declaration
                (T-6). The sample of the declaration is available at all customs
                points and the airports of the Republic.
              </p>
              <img
                src="https://uzbekistan.travel/storage/app/media/uploaded-files/21.jpg"
                alt=""
              />
            </div>
            <h2>What goods can be imported to Uzbekistan</h2>
            <p>
              If you enter Uzbekistan through the international airports, you
              can import goods without duties up to 2000 US dollars, through the
              railway and the river checkpoints - up to 1000 US dollars, through
              roadway (pedestrian) checkpoints – up to 300 US dollars. In this
              case, you do not need to specify them in the Customs declaration
              and can go through the "Green" corridor.
            </p>
            <p>
              However, there are some restrictions on the import of certain
              goods without duties. In particular, you can import alcohol,
              including beer, up to 2 liters, tobacco products of various types
              – up to 10 boxes, cologne and liquids containing alcohol in their
              composition – up to 3 pieces, precious metal and jewelry, made of
              precious stones – up to 65 grams.
            </p>
            <h2>What goods can be exported from Uzbekistan </h2>
            <p>
              If you depart from the Republic of Uzbekistan, you can export
              goods worth up to 3,000 us dollars freely. You do not need to
              specify them in the customs Declaration.
            </p>
            <h2>How much money can I import</h2>
            <p>
              When you arrive to Uzbekistan, you can import foreign currency in
              cash without any limit, but it has to be specified in T-6
              Declaration form. At the request of the visitor, cash foreign
              currency can be accepted for storage by TC-21 receipt without any
              tax charges.
            </p>
            <h2>How much money can I export</h2>
            <p>
              The citizens of Uzbekistan can export no more than 5000 US dollars
              without obtaining a special permit. The amount more than 5,000 US
              dollars can be exported just with the permission of the Central
              Bank of the Republic of Uzbekistan.
            </p>
            <p>
              The foreign citizens can export funds within the amount previously
              imported and declared in the customs Declaration, when entering
              Uzbekistan. If you are going to export funds over the amount shown
              in your T-6 Declaration form or TC-28 certificate, you must have
              the bank permit. When exporting traveler's checks, be sure to
              specify their numbers in the customs Declaration T-6.
            </p>
            <h2>It is forbidden to import into the territory of Uzbekistan:</h2>
            <ul>
              <li>
                - press, manuscripts, cliches, drawings, photo tapes, negatives,
                film, video and audio products, recordings, sound materials
                aimed at undermining the state and social order, violating
                territorial integrity, political independence and state
                sovereignty, propagating war, terrorism, violence, national
                exclusivity and religious hatred, racism and its variety
                (anti-Semitism, fascism), as well as pornographic content;
              </li>
              <li>
                - narcotic drugs, psychotropic substances and precursors without
                the permission of the Ministry of health of the Republic of
                Uzbekistan;
              </li>
              <li>
                - jewelry, made of precious metals and gemstones for commercial
                purposes without a license issued by the Ministry of Foreign
                Trade of the Republic of Uzbekistan (the limit of jewelry from
                precious metals and stones imported by physical entity and not
                subjected to customs duties, is 5 pieces with a total weight of
                no more than 30 grams);
              </li>
              <li>
                - medicines and medical equipment without the permission of the
                Ministry of health of the Republic of Uzbekistan (Download the
                list);
              </li>
              <li>
                - radio-electronic equipment from high-frequency devices without
                the permission of the Ministry for Development of Information
                Technologies and Communications of the Republic of Uzbekistan;
              </li>
              <li>
                - products of plant and animal origin without the permission of
                the sanitary and epidemiological service;
              </li>
            </ul>
            <h2>It is forbidden to export outside Uzbekistan:</h2>
            <ul>
              <li>
                - wheat, rye, barley, oats, rice, corn, buckwheat; bakery
                products (except flour confectionery, cakes, cookies of their
                own production); flour, cereals, livestock, poultry, meat and
                edible offal, sugar, vegetable oils (the maximum export rates
                for individuals of these goods are determined by the legislation
                of the Republic of Uzbekistan);
              </li>
              <li>
                - ethyl alcohol, leather raw materials (including non-standard),
                fur and fur raw materials, including Karakul (including
                non-standard); scrap and waste of non-ferrous metals; silkworm
                cocoons suitable for unwinding, raw silk (uncoiled), silk waste
                (including cocoons unsuitable for unwinding, cocoon thread waste
                and loosened waste); rare and endangered species of animals and
                plants of the Republic of Uzbekistan listed in the Red book.
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
              <h3>Border and passport control</h3>
              <p>
                When passing through the customs points of the State border of
                the Republic of Uzbekistan, airports, make sure that all the
                necessary documents are available and safe: ticket, passport
                with visa, T-6 Declaration, permits for the transportation of
                animals, plants, medicines and money. Upon departure, each
                passenger must pass through passport and customs control points
                after handing over their main baggage at the airport.
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
            Rules for the transport of animals
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq12}>
            <div>
              <p>
                So, you have planned the trip to Uzbekistan, but you want to
                take your pet or favorite flowers with you. In this case, you
                have to prepare the special documents and get acquainted with
                the rules of the veterinary and phytosanitary control. When
                transporting pets and decorative birds, you must have a pet
                passport and a veterinary certificate, confirming its health.
                You can get this document from any veterinary service at your
                place of residence.
              </p>
              <p>
                When transporting and exporting animals and plants listed in the
                Red book, you need to get permission from the State Committee
                for protection of nature of the Republic of Uzbekistan.
              </p>
              <p>
                Therefore, make all the documents for your animals in time, do
                all the necessary veterinary procedures and travel with
                pleasure.
              </p>
            </div>
            <img
              src="https://uzbekistan.travel/storage/app/media/animals.jpg"
              alt=""
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <h1>Staying in the country</h1>
      <Accordion className={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={style.question}>
            <BsPencilFill />
            Registration
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq13}>
            <div className={style.register}>
              <div>
                <p>
                  You have already arrived to Uzbekistan and, if you plan to
                  stay here for more than 1 day, you have to make a temporary
                  registration within 3 days.
                </p>
                <p>
                  If you arrive to Uzbekistan on your own, without an invitation
                  from an individual or legal entity, the administration of your
                  accommodation facility (hotel, hostel or guest house) must
                  issue you the temporary registration.
                </p>
                <p>
                  If you were sent the invitation, then the inviting person
                  registers you at their place of residence or at your living
                  place.
                </p>
                <p>
                  However, we live in the XXI century and the remote
                  registration of foreign citizens has been operating here for a
                  long time.
                </p>
              </div>
              <img
                src="https://uzbekistan.travel/storage/app/media/uploaded-files/30.jpg"
                alt=""
              />
            </div>
            <p>
              A single form of registration of foreign citizens through the
              “E-mehmon” system has been launched in Uzbekistan in 2018.
            </p>
            <h3>Registration of independent tourists in hotels</h3>
            <p>
              If you have already registered at the accommodation facility and
              have already paid the tourist fee, but do not live there,
              “E-mehmon” system has a special section for the independent
              tourists. You just need to fill in all the fields, specifying the
              number of days of your stay, the system will calculate the payment
              amount, which can be paid by cash or by card upon your arrival.
              Please note that the administration of any accommodation facility
              on the territory of Uzbekistan must independently register foreign
              citizens upon request.
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
            Modern accommodation facilities
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
                So, you have registered and now you have a choice where to stay.
                There is a huge number of different accommodation facilities in
                Uzbekistan: from the fashionable hotel chains and the modern
                hotels to the guest houses in the national style and Yurt camps.
                All you need for your stay at the hotels in Uzbekistan is a
                passport, a booking coupon (if available) and timely payment at
                the current exchange rate. All accommodation facilities have a
                check-in and check-out system.
              </p>
            </div>
            <h3>Accommodation types:</h3>
            <div>
              <p>- Hotels</p>
              <p>- Hostels</p>
              <p>- Guest houses</p>
              <p>- Camping</p>
              <p>- Yurt camps</p>
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
            <GiShinyApple /> Food and cuisine
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
                  In contrast to the Roman saying “In vino veritas”, we say:
                  "The truth is still in the food."
                </p>
                <h5>In Uzbekistan, people like to eat delicious food. </h5>
              </div>
            </div>
            <div>
              <p>1. The most delicious bread is in Uzbekistan.</p>
              <p>2. Many Uzbek dishes are prepared on an open fire (hearth).</p>
              <p>
                3. In Uzbekistan people get used to eat fat and high-calorie
                food.
              </p>
              <p>4. After the meal, Uzbeks drink hot tea.</p>
              <p>
                5. Uzbeks eat lamb, beef and horse meat (horse sausage - kazy).
              </p>
              <p>
                6. In Uzbekistan guests are greeted with the fragrant tea and
                the hot flatbread, and farewell with delicious pilaf.
              </p>
              <p>
                7. Special tea ceremony (before to pass tea to the guest, a bowl
                of tea is poured into the teapot three times, and tea is served
                to the guest on the fourth).
              </p>
              <p>
                In Uzbekistan every guest always leaves well-fed and happy and
                with gifts.
              </p>
              <p>Thus, Welcome to tasty Uzbekistan!</p>
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
            Shopping and souvenirs
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq16}>
            <p>
              To get acquainted with the culture and life of Uzbek people, it is
              better to go to the local Bazaar. The Bazaar is a special separate
              world, where people of all the colors gather. Here you can enjoy
              not only an abundance of various goods: souvenirs, fruits,
              vegetables, spices, bread, food, but also communication with
              people and a special, soulful atmosphere that you will not find in
              any shopping center or local hypermarket. If you want to buy
              souvenirs and gifts, be sure to visit Chorsu Bazaar in Tashkent,
              Siab Bazaar in Samarkand or Toki-Zargaron in Bukhara. You can also
              visit the workshops of Rishtan artisans or Margilan factory of
              silk production "Yodgorlik"– the real treasures of Uzbekistan.
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
            Security
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq17}>
            <img
              src="https://uzbekistan.travel/storage/app/media/uploaded-files/36.jpg"
              alt=""
            />
            <p>
              According to the US Gallup Institute, in 2018 Uzbekistan was
              included in the top five safest countries in the world. If you
              follow the basic precautions, travel to Uzbekistan will be safe
              and comfortable. If you still need help on your journey, there are
              police stations in any public place, where you will receive first
              aid, or you can contact the police by calling 102. There is a
              tourist police in Uzbekistan as well, which is responsible for
              your safety in our country.
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
            Hygiene
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq18}>
            <img
              src="https://uzbekistan.travel/storage/app/media/uploaded-files/37.jpg"
              alt=""
            />
            <p>
              Since childhood we were taught to wash our hands before eating –
              the most important rule of personal hygiene. During your stay in
              Uzbekistan, you should follow the simplest hygiene rules: wash
              your hands before eating, use wet wipes or hand sanitizers, use
              the shower more often in hot weather, do not drink raw water,
              especially from open reservoirs, do not consume untested food and
              drinks, especially in exotic places.
            </p>
            <p>
              Remember, people in Uzbekistan eat fat and high-calorie food since
              childhood, and if you did not get used to eat such food, it can be
              heavy for your stomach. Eat moderately and do not mix unsuitable
              foods.
            </p>
            <p>
              As summer in Uzbekistan is very hot, during the summer Chillya,
              follow the appropriate precautions: do not walk around the city at
              hot noon, wear hats and light and comfortable clothing and shoes,
              consume as much water as possible to avoid dehydration.
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
            Customs and Rules
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.answer}>
          <Typography className={style.faq19}>
            <img
              src="https://uzbekistan.travel/storage/app/media/uploaded-files/38.jpg"
              alt=""
            />
            <p>
              Uzbekistan is a secular country, but Islam is the main religion in
              the country. If you visit any local mosque, you should follow some
              rules. Restraint and respect are required when visiting the
              mosque. It is better to visit it, when there is no worship. The
              clothing is also very important: short pants, t-shirts and skirts
              are definitely not welcome here, and women should cover their
              heads before entering the mosque.
            </p>
            <p>
              Many mosques do not prohibit shooting, but this is a taboo during
              the prayer. Usually the parishioners during the prayer do not pay
              attention to the visitors in order not to interrupt it.
            </p>
            <p>
              If you have decided to photograph people on the street, first of
              all you should ask their permission, for ethical reasons. You will
              never be refused, but it is more comfortable and calmer, when they
              smile in the frame.
            </p>
            <p>
              In Uzbekistan it is forbidden to drink alcohol in the public
              places and while driving a car. You will be fined 1/3 of the
              minimum wage for the smoking in the offices, health care
              facilities, educational and sports facilities, fire-prone areas,
              including gas stations, streets, stadiums, squares, parks, all
              types of public transport and other public places. Smoking is
              allowed only in special designated areas.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
