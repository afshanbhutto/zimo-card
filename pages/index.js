import CardSlider from "@/components/CardSlider"


export default function Home() {

 

  const slides = [
    {imgUrl: '/assets/img1.jpg', title:'first-img'},
    {imgUrl: '/assets/img2.jpg', title:'first-img'},
    {imgUrl: '/assets/img3.jpg', title:'first-img'},
    {imgUrl: '/assets/img4.jpg', title:'first-img'},
    {imgUrl: '/assets/img5.jpg', title:'first-img'},
  ]

  return (
    <div>
      <h1>World</h1>
      <div className="h-[450px] w-[350px] mx-auto">
        <CardSlider slides={slides} />
      </div>
    </div>
  );
}
