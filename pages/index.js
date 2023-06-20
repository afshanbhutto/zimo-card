import CardSlider from "@/components/CardSlider";
import CardWrapper from "@/components/CardWrapper";
import Slider from "@/components/MainSlider";

export default function Home() {
  const slides = [
    {
      imgUrl: "/assets/img1.jpg",
      footerImg: "/assets/sothebys.png",
      discountImg: "/assets/img-1-discount.png",
      title: "first-img",
    },
    {
      imgUrl: "/assets/img2.jpg",
      footerImg: "/assets/footer-yellow-savills.png",
      discountImg: "/assets/img-2-discount.png",
      title: "first-img",
    },
    {
      imgUrl: "/assets/img3.jpg",
      footerImg: "/assets/sothebys.png",
      discountImg: "/assets/img-1-discount.png",
      title: "first-img",
    },
    {
      imgUrl: "/assets/img4.jpg",
      footerImg: "/assets/footer-yellow-savills.png",
      discountImg: "/assets/img-2-discount.png",
      title: "first-img",
    },
    {
      imgUrl: "/assets/img5.jpg",
      footerImg: "/assets/sothebys.png",
      discountImg: "/assets/img-1-discount.png",
      title: "first-img",
    },
  ];
  return (
    <div className="container w-full mx-auto  h-full">
      <Slider slides={slides} />
    </div>
  );
}
