import React from "react";
import style from "../AboutUs/AboutUs.module.scss";
import Header from "../Header/Header";
import Nav1 from "../Nav1/Nav1";
import Footer from "../Footer/Footer";
const AboutUs = () => {
  return (
    <div>
      <Header />
      <Nav1 />
      <section className={style.wrapper}>
        <h1>"Antique Travel"</h1>
        <p>
          «Путешествие — это одна из возможностей, которая вас обогатит». Мы в
          «Antique Travel» делаем все, чтобы ваше путешествие было интересным,
          комфортным и безопасным. Чтобы Ваше путешествие открыло для вас новый
          мир. Географически Центральная Азия находится в самом центре Великого
          шелкового пути.{" "}
        </p>
        <p>
          По этой причине даже спустя столетия именно здесь вы столкнетесь с
          культурами, цивилизациями, обычаями и традициями прошлого, но в
          современном облике. Не один год «Antique Travel» специализируется
          организацией и проведением путешествий по Центральной Азии. И мы
          предлагаем Вам весь спектр услуг, рассчитанный не только на массового
          клиента, но и на гурманов.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
