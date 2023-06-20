import React from 'react'
import CardSlider from './CardSlider';
import CardButton from './CardButton';


const CardWrapper = () => {
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
        <div className='container  mx-auto relative min-h-screen w-[300px]  '>
            <div className="h-[450px]">
                <CardSlider slides={slides} />
            </div>
            <CardButton />
        </div>
    )
}

export default CardWrapper