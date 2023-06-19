import CardSlider from "@/components/CardSlider"


export default function Home() {

 

  const slides = [
    {imgUrl: '/assets/img1.jpg', footerImg:'/assets/sothebys.png', discountImg:'/assets/img-1-discount.png', title:'first-img'},
    {imgUrl: '/assets/img2.jpg', footerImg:'/assets/footer-yellow-savills.png', discountImg:'/assets/img-2-discount.png', title:'first-img'},
    {imgUrl: '/assets/img3.jpg', footerImg:'/assets/sothebys.png', discountImg:'/assets/img-1-discount.png', title:'first-img'},
    {imgUrl: '/assets/img4.jpg', footerImg:'/assets/footer-yellow-savills.png', discountImg:'/assets/img-2-discount.png', title:'first-img'},
    {imgUrl: '/assets/img5.jpg', footerImg:'/assets/sothebys.png', discountImg:'/assets/img-1-discount.png', title:'first-img'},
  ]

  return (
    <div className="container w-full mx-auto">
      <div className="flex flex-col">
      <div className="upperDiv flex justify-between items-center mb-2 w-full uppercase min-w-[350px] px-2 md:px-0">
      <div className="flex-1 text-left text-2xl tracking-[2px]  md:text-3xl" >Featured</div>
      <div className="flex-1 text-center text-3xl tracking-[2px] hidden md:block">View all Homes</div>
      <div className="flex-1  text-right text-black text-5xl md:text-6xl">
        <span className="mr-4">&lt;</span>
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
