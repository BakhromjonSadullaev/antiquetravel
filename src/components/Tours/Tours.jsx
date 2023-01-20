import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Nav1 from "../Nav1/Nav1";
import style from "../Tours/Tours.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Tours = () => {
  return (
    <div>
      <Header />
      <Nav1 />
      <section className={style.wrapper}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Budget Travel (7 days 6 nights)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={style.faq1}>
              <h1>Budget Travel</h1>
              <h3>Tashkent-Bukhara-Shahrisabz-Samarkand-Tashkent</h3>
              <p>
                <span>Specialization:</span>
                Cultural program on the Great Silk Road.
              </p>
              <ul>
                <li>
                  1. Accommodation (Leisure package-small hotel, VIP package
                  –luxurious hotel)
                  <ul>
                    <li>Tashkent-2 nights</li>
                    <li>Bukhara-2 nights </li>
                    <li>Samarkand-2 nights</li>
                  </ul>
                </li>
                <li>
                  2. Vehicles with A/C throughout the whole trip
                  <ul>
                    <li>Up to 2 person - 4*4 comfortable car.</li>
                    <li>Up to 8 person - Mini Van </li>
                    <li>Up to 16 person - Mini Bus.</li>
                    <li>More than 16 person – Bus.</li>
                  </ul>
                </li>
                <li>
                  3. Breakfast and 2 options of meals (e.g. lunch or dinner ){" "}
                </li>
                <li>
                  4. Admission fees to historical monuments (this fee doesn’t
                  include museum and cam/video fees)
                </li>
                <li>Tour Guide in following languages.</li>
                <p className={style.list_type}>
                  • English, German, French, Italian, Spanish, Arabian, Persian,
                  Turkish and etc…
                </p>
                <li>Air tickets within Uzbekistan</li>
              </ul>
              <p>Duration: 7 days/ 6 nights.</p>
              <div className={style.info}>
                <p>
                  Day 1: Tashkent Arrival into Tashkent Airport, where you will
                  be met by our tour guide who will arrange your transportation
                  to the hotel. Accommodation and dinner local restaurant.{" "}
                </p>
                <img
                  src="https://c1.wallpaperflare.com/preview/814/967/649/railway-station-tashkent-uzbekistan-arrive.jpg"
                  alt=""
                />
              </div>
              <div className={style.info}>
                <p>
                  Day 2: Tashkent-Bukhara. After breakfast, flight to Bukhara
                  and accommodation at hotel. Visit to Chor Minor (the tower of
                  four ), the Kukeldash meddresseh, Lyabi Khauz. This will be
                  followed by visit to the statue of the wise fool Hoja
                  Nasreddin, Caravanserai of Nadir Divanbegi and lunch near the
                  old pool. After lunch visit to 1st Trade Dome (Toki Sarrafon),
                  walk through the garden to 2nd Trade Dome (Toki Zargaron)
                  centre for Jewelry in medieval ages, straight walk through
                  Bukharian shops to 3rd Trade Dome (Toki Telpakfurushon), visit
                  to medrressehs of two famous rulers who have made a lot of
                  contribution in architecture of Bukhara Ulughbek and
                  Abdulazizkhan, the Kalyan Minaret.{" "}
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/2012_Bukhara_7515821196.jpg/1200px-2012_Bukhara_7515821196.jpg"
                  alt=""
                />
              </div>
              <div className={style.info}>
                <p>
                  Day 3: Bukhara. Visit to the Ark Fortress, Balakhauz mosque,
                  Old Walls of Bukhara, Chashma-i-Ayub and Sitora-i-Mokhikhosa –
                  the summer residence of the last emir of Bukhara.
                </p>
                <img
                  src="https://media.istockphoto.com/id/1316900032/photo/bukhara-uzbekistan-kalyan-minaret-and-madressa-sunset-twilight.jpg?b=1&s=170667a&w=0&k=20&c=a0PuW76EKCWlf_OLWs_8kr5UTuZijADPbLr-G28_sZo="
                  alt=""
                />
              </div>
              <div className={style.info}>
                <p>
                  {" "}
                  Day 4: Bukhara-Shakhriabz-Samarkand After breakfast depart to
                  Shakhrisabz, birthplace of Amir Timur and tour around
                  Ark-Saray Palace, Kok-Gumbaz Mosque, House of Mediation and
                  Crypt of Temur. Continue with the drive to Samarkand.
                  Accommodation and dinner in the local restaurant.
                </p>
                <img
                  src="https://thumbs.dreamstime.com/b/dorut-tilovat-complex-kok-gumbaz-mosque-sheikh-shamsiddin-kulol-gumbazi-saidon-mausoleums-shahrisabz-uzbekistan-261401787.jpg"
                  alt=""
                />
              </div>
              <div className={style.info}>
                <p>
                  Day 5: Samarkand The famed city of Samarkand is the jewel or
                  the desert and the home of Amir Temur. More than any other
                  city in Uzbekistan, Samarkand is a symbol of a living history,
                  which seems to be almost untouched by the centuries. After
                  breakfast full day tour around famous Registan square, Bibi
                  Khanum Mosque, Mausoleum of Amir Temur with onyx covered tomb
                  of Amir Temur dating back to the 15-th century, Ulugbek`s
                  observatory, Shahi Zinda necropolis
                </p>
                <img
                  src="https://media.istockphoto.com/id/1249451586/photo/panorama-samarkand-uzbekistan-registan-square-sher-dor-madrasah.jpg?b=1&s=170667a&w=0&k=20&c=2yRTxLjPcnALJdk4rgROuoeHqN4DfD-8yRYEMgQlM4c="
                  alt=""
                />
              </div>
              <p>
                Day 6: Samarkand –Tashkent Visit Siyab bazaar of Samarkand
                (Oriental food market). Drive to Tashkent and continue with
                sightseeing the downtown after a short rest.
              </p>
              <p>Day 7 Tashkent Departure. End of a trip</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              “UZBEKISTAN SILK ROAD TOUR” (8 days 9 nights)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={style.faq2}>
              <h1>“UZBEKISTAN SILK ROAD TOUR”</h1>
              <p>
                Our journey will give you an excellent chance to discover such
                well-known ancient cites as Tashkent, Samarkand, Bukhara. You
                will plunge into the interesting world of history. High
                minarets, blue domes madrassahs, mosques and the mausoleums,
                eastern markets, interesting legends, hospitality of the
                population with their traditions and many other things remain in
                your memory forever.
              </p>
              <h3>
                ROUTE: TASHKENT- BUKHARA-VABKENT
                VILLAGE-BUKHARA-SAMARKAND-GIJDUVAN-TASHKENT DURATION: 8 DAYS / 7
                NIGHTS
              </h3>
              <h2>DAY 1.</h2>
              <h3>TASHKENT Arrival to Tashkent.</h3>
              <div className={style.info}>
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/31/17/01/tashkent-1634109__340.jpg"
                  alt=""
                />
                <p>
                  Meeting at the airport by English-speaking guide and transfer
                  to the hotel to have breakfast then we will begin Sightseeing
                  of the city Tashkent. Hazrati Imam Mausoleum and Mosque it has
                  been constructed in first half of 16 centuries by Kakand’s
                  khan (ruler) of a dynasty of Sheibanids. In the madrassah
                  which is formed of two mausoleums adjoining the ensemble of
                  Hazrati Imam, there is since 1943 an Administration of Moslems
                  (synnits) Uzbekistan ". The museum of “Applied Art”. There are
                  presented subjects of a national applied art: decorative
                  carpets, embroidery gold, and products from fabric, ornaments
                  for women, ceramics, porcelain, musical instruments. Lunch in
                  the Local Restaurant. Check in the hotel at 14:00 p.m. Visit
                  Independence Square and Walk in the city “artist-street” opera
                  building. Free time at leisure on their own. Dinner in the
                  Local Restaurant and overnight in the hotel.
                </p>
              </div>
              <h2>DAY 2.</h2>
              <h3>TASHKENT-BUKHARA</h3>
              <div className={style.info}>
                <div>
                  <p>
                    Breakfast in the hotel at 05.00-06.00. Transfer to Tashkent
                    Airport at 07:00 a.m. and fly to Bukhara by HY-037 at 09:15
                    a.m. Arrival to Bukhara at 10:25 a.m. and transfer and
                    accommodation at the hotel. Excursion of the city. In
                    Bukhara there are a lot of interesting places of
                    sightseeing. You will adore the ancient historical places.
                  </p>
                  <p>
                    Mausoleum of Ismail Samani (10 century) has been erected
                    during board Ismail Samani (892-907) and became family tomb
                    of Samanids. Despite of the modest sizes of the basis
                    (10×10) and height of 14 m this monument serves as the proof
                    of high art skill. Citadel Ark (1-20 centuries) as a symbol
                    of greatness and authority towers above the area.
                    Construction of a citadel is dated approximately the
                    beginning of 1 millennium BC. The citadel served as the
                    strengthened residence of the masters of Bukhara. There were
                    palaces, temples, a barracks, office, mint, water basins and
                    warehouses, masterful, shelters, weapon workshops, and
                    prison.
                  </p>
                </div>
                <img
                  src="https://media.istockphoto.com/id/1193462464/photo/bukhara-poi-kalon-complex-aerial-view-minaret-in-uzbekistan.jpg?b=1&s=170667a&w=0&k=20&c=3Wt_0PjJoRB96_krzSPgFUpIlsJVQ98PwnpPqQ9HEJg="
                  alt=""
                />
              </div>
              <p>
                During the history the fortress has been some times destroyed,
                however is again restored. All buildings of the citadel had been
                arisen mainly during the XVII-XXI centuries. Lunch in the Local
                Restaurant. The symbol of Bukhara considers Minaret Kalian
                costing in city centre with the height of 46, 6 m. - achievement
                of architecture, which is before the Mongols invasion specified
                to caravans a way to sacred city. First of all the minaret
                should, however to be not "beacon", and more likely especially
                noted place of “muezzin “ In Islam the official, who calls
                prayers to Friday Praying (Namoz juma) the public worship and to
                the daily prayer (five times a day) whose voice sounded from far
                above.Just next to the Minaret Kalian stands the great mosque –
                Mosque Kalian which is connected with a minaret by the small
                bridge towers. It is the oldest and second-largest mosque of the
                Central Asia after mosque Bibi Hanum in Samarkand. Folklore in
                Madrassah of Nodir Devanbegy & Dinner in National Guest House.
                Overnight in the hotel.
              </p>
              <h2>DAY 3</h2>
              <h3>BUKHARA-VABKENT VILLAGE-BUKHARA </h3>
              <div className={style.info}>
                <p>
                  Breakfast in the hotel. Transfer to Vabkent District the
                  village house, tourists can visit village on foot and to talk
                  with village people and can see village life, can see how
                  village people can make Uzbek breads (non) in tandoor (clay
                  oven), how to make Uzbek national dishes in big pot (kazan) by
                  Uzbek village women and to learn Uzbek traditional meals too
                  by explanation of our local guide. Lunch in Vabkent village.
                  Afternoon return to Bukhara visit Summer Residence of Bukhara
                  Emir and Free time at leisure in ancient city on their own.
                  Dinner in the Local Restaurant & Overnight in the hotel.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Vobkent_minaret_14-33.JPG"
                  alt=""
                />
              </div>
              <h2>DAY 4</h2>
              <h3>BUKHARA-GIJDUVAN-SAMARKAND</h3>
              <div className={style.info}>
                <img
                  src="https://media.cntraveler.com/photos/5a0b441eee38fc1bcffcda91/16:9/w_4448,h_2502,c_limit/mag-uzbekistan-01-cr-felix-odell.jpg"
                  alt=""
                />
                <p>
                  Breakfast in the hotel. Lunch at Local Pottery Master’s House
                  in Gijduvan. Drive to Samarkand from Bukhara (320 km, 5 hrs).
                  On the road visit Raboti Malik and Sardoba in Navoi. Arrival
                  to Samarkand and accommodation in hotel. Dinner in Local
                  Restaurant and Overnight in the hotel.
                </p>
              </div>
              <h2>DAY 5</h2>
              <h3>Breakfast in the hotel.</h3>
              <div className={style.info}>
                <p>
                  Visit Gur-Emir mausoleum (15 century) - in translation means
                  the mausoleum "a tomb of the khan’s" - is a burial place of
                  Amir Temur and his dynasty. The mausoleum has been designed
                  under Timur's order for its favorite grandson Mohammed Sultan
                  who has suddenly died in 1403. Registan square with three
                  madrassahs (15-17 c.c.) - literally " the sandy square " - the
                  well-known symbol of Uzbekistan, a symbol of city, a cultural
                  heritage of UNESCO. In the medieval East the square was a
                  place where governors disclosed orders where passed court
                  where also there was a brick market. Lunch in the Local
                  Restaurant. Mosque Bibi Khanim (15 century) - was the greatest
                  architectural monument some kind of in the Islamic world. Amir
                  Timur ordered to construct this mosque after the successful
                  campaign to India to show the boundless technical and
                  financial opportunities. He wished to construct a greater
                  “Friday mosque” (mosque for praying on Fridays) which should
                  be the terrestrial sample of paradise. Amir Timur itself
                  observed the construction of a mosque. Eastern Market Siyab
                  Bazaar. Visit Russian Orthodox Church. Dinner in Local
                  Restaurant and Overnight in the hotel.
                </p>
                <img
                  src="https://media.istockphoto.com/id/1156403507/photo/registan-an-old-public-square-in-samarkand-uzbekistan.jpg?b=1&s=612x612&w=0&k=20&c=OM5wyLeCiB75JhSPRMXNSUhx83_BpTMvvwXSCOSnGFA="
                  alt=""
                />
              </div>
              <h2>DAY 6</h2>
              <h3>SAMARKAND</h3>
              <div className={style.info}>
                <img
                  src="https://i.ytimg.com/vi/693SnCTYCqI/maxresdefault.jpg"
                  alt=""
                />
                <p>
                  Breakfast in the hotel. Continuation of city tour in
                  Samarkand. Visit Observatory of Ulugbek (1428-1429) which is
                  in northwest of city, has been constructed by the governor and
                  scientists Ulugbek. By means of chronicles from 17 century the
                  Russian archeologist Viyatkin managed to discover an
                  observatory. The main tool of an observatory was sextant
                  presumably laid out from a brick with the radius of 40,4 m in
                  the end of a line of a meridian. Complex Shakhi Zinda (14-15
                  c.) consists of the several mausoleums which were consistently
                  attached to each other within centuries. The decor is diverse
                  and fantastic, the leitmotiv which can admire already on the
                  main portal, is presented by colors and stars - a so-called
                  Samarkand ornament. Shahi Zinda in translation literally is
                  meant “a living shah (king)". As the place of pilgrims, which
                  visiting in the beginning 20th century was forbidden to other
                  believers, widely known far outside Samarkand. Visit Silk
                  Paper Factory “Meros”. Lunch in the Local Restaurant.
                  Afternoon Free Time at Leisure to walk in ancient city on
                  their own. Dinner in Local Restaurant and Overnight in the
                  hotel.
                </p>
              </div>
              <h2>DAY 7</h2>
              <h3>SAMARKAND-TASHKENT</h3>
              <div className={style.info}>
                <p>
                  Breakfast in the hotel. To have a free time at leisure in old
                  part of city before leave Samarkand. Lunch in the Local
                  Restaurant. At 14:00 p.m. transfer to Tashkent by bus. Arrival
                  to Tashkent and accommodation in the hotel. Farewell Dinner in
                  the hotel or in Local Restaurant and Overnight in the hotel.
                </p>
                <img
                  src="https://media.istockphoto.com/id/1216649775/video/dji-inspire-4k-aerial-shoot-tashkent-tv-tower.jpg?s=640x640&k=20&c=7WE8VVDsAPG3TSD5fgLTPU0d5u5Vfppc82CCyBZ1EhA="
                  alt=""
                />
              </div>
              <h2>TOUR PROGRAM PRICE INCLUDES:</h2>
              <ul className={style.items}>
                <li>Accommodation in 4/3 star * hotels double/twin rooms;</li>
                <li>
                  Tours and transfers on the deluxe coach A/C
                  airport-hotel-airport;
                </li>
                <li>English Speaking Guide through the tour itinerary;</li>
                <li>
                  Entrance fees to all visiting sightseeing places, excursions
                  and museums;
                </li>
                <li>
                  Folklore show in Madrassah of Nodir Devan Begi in Bukhara;
                </li>
                <li>Full Board Meals (Breakfast, Lunch and Dinner);</li>
                <li>
                  1 Danish Tour Leader is free of charge according to tour
                  itinerary;
                </li>
                <li>
                  Visit Bek’s House in Vabkent village near to Bukhara to see
                  and learn Uzbek local people traditions, ceremonies, habits
                  and cooking meals by Uzbek local village
                  women;Tashkent-Bukhara domestic economy flight tickets;
                </li>
                <li>Visit Silk Paper Factory “Meros” in Samarkand;</li>
                <li>Visit Russian Orthodox Church in Samarkand;</li>
                <li>Mineral water per person per a day.</li>
              </ul>
              <h2>TOUR PROGRAM PRICE DOES NOT INCLUDES:</h2>
              <ul className={style.items}>
                <li>Strong drinks (vodka, beer, wine, etc);</li>
                <li>Photo and Camera fees;</li>
                <li>Taxes in the International Airport;</li>
                <li>International Flight Tickets;</li>
                <li>Tips for guide and driver;</li>
                <li>Single Supplement room (---USD).</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography> “WELCOME TOUR TO UZBEKISTAN”</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={style.faq3}>
              <h1> “WELCOME TOUR TO UZBEKISTAN” </h1>
              <p>
                Our journey will give you an excellent chance to discover such
                well known ancient cites as Tashkent, Samarkand, Bukhara,
                Kokand, Margilan, Rishtan, Fergana Valley. You will plunge into
                the interesting world of history. High minarets, blue domes
                madrassahs, mosques and the mausoleums, eastern markets,
                interesting legends, hospitality of the population with their
                traditions and many other things remain in your memory forever.
              </p>
              <h3>
                ROUTE:
                TASHKENT-KOKAND-FERGANA-MARGILAN-RISHTAN-TASHKENT-BUKHARA-SAMARKAND-JOZMON
                VILLAGE-SAMARKAND-TASHKENT DURATION: 9 DAYS / 8 NIGHTS
              </h3>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </section>
      <Footer />
    </div>
  );
};

export default Tours;
