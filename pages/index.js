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
    <div className="container w-full mx-auto">
      <div className="flex flex-col">
      <div className="upperDiv flex justify-between items-center mb-2 w-full uppercase min-w-[350px] px-2 md:px-0">
      <div className="flex-1 text-left text-xl  md:text-3xl" >Featured</div>
      <div className="flex-1 text-center text-3xl hidden md:block">View all Homes</div>
      <div className="flex-1 text-right text-black text-5xl md:text-6xl">
        <span >&lt;</span>
        <span>&gt;</span>
      </div>
      </div>
      <div className="lower-div flex ">
      <div className="h-[450px] w-[350px] mx-auto">
        <CardSlider slides={slides} />
      </div>
      
      
      </div>
      
      </div>
      
      
     
    </div>
  );
}
