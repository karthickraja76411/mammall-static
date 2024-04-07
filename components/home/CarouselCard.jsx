import React from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';

function CarouselCard(props) {
    const data = props?.data;
    return (
        <React.Fragment>
            {data && <div className='clsx-carousel-banner'>
                <div className='clsx-title-center'>
                    <span className='d-flex align-items-center gap-2 mb-3'>
                        <Image src={"/assets/img/home/star.svg"} alt='img' width={20} height={20} loading='lazy' />
                        {data?.label}
                    </span>
                    <p>{data?.title}</p>
                </div>

                <Carousel interval={2000} indicators={false}>
                    <Carousel.Item>
                        <div className="card">
                            <div className="row">
                                <div className="col-6 img-wrap">
                                    <Image src={"/assets/img/home/carousel1.svg"} alt='' width={300} height={200} className='w-100 h-100' />
                                </div>
                                <div className="col-6 d-flex align-items-center">
                                    <div className="card-body">
                                        <span className="label">Step-1</span>
                                        <h4 className="title">Registration</h4>
                                        <p className="text">Download Mammal Mobile Application. Start with your mobile number to create a new account</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card">
                            <div className="row">
                                <div className="col-6 img-wrap">
                                    <Image src={"/assets/img/home/carousel1.svg"} alt='' width={300} height={200} className='w-100 h-100' />
                                </div>
                                <div className="col-6 d-flex align-items-center">
                                    <div className="card-body">
                                        <span className="label">Step-1</span>
                                        <h4 className="title">Registration</h4>
                                        <p className="text">Download Mammal Mobile Application. Start with your mobile number to create a new account</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card">
                            <div className="row">
                                <div className="col-6 img-wrap">
                                    <Image src={"/assets/img/home/carousel1.svg"} alt='' width={300} height={200} className='w-100 h-100' />
                                </div>
                                <div className="col-6 d-flex align-items-center">
                                    <div className="card-body">
                                        <span className="label">Step-1</span>
                                        <h4 className="title">Registration</h4>
                                        <p className="text">Download Mammal Mobile Application. Start with your mobile number to create a new account</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>}
        </React.Fragment>
    )
}

export default CarouselCard