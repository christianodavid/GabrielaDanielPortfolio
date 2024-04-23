import styles from "./TextsSection.module.css";
import Section from "../../../ui/Section/Section";
import SectionTitle from "../../../ui/SectionTitle/SectionTitle";
import TextsData from "./data/TextsData";
import TextCard from "./TextCard/TextCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TextsSection = () => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "var(--pink-colour)",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          backgroundColor: "var(--pink-colour)",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1251,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 919,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Section id="texts">
      <SectionTitle>Textos</SectionTitle>
      <div className={styles.section_texts__container}>
        <Slider {...settings}>
          {TextsData.map((data, index) => (
            <TextCard key={index} data={data} />
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default TextsSection;
