import React from 'react';
import Image from "next/image";

const OurMission = (props) => {
    const data = props?.data;
    return (
        <div className='clsx-our-mission'>
            <div className='clsx-title-center'>
                <span className='d-flex align-items-center gap-2 mb-3'>
                    <Image src={"/assets/img/home/star.svg"} alt='img' width={20} height={20} loading='lazy' />
                    {data?.label}
                </span>
                <p>{data?.title}</p>
            </div>
            <div className="card clsx-vision-card">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='clsx-card-img'>
                            <Image src={"/assets/img/home/missionBg.svg"} alt='' width={500} height={300} className="vissionBg" loading='lazy' />
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className='card-body'>
                            <h3 className="title">{data?.subTitle}</h3>
                            <p className="text">
                                {data?.text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurMission;