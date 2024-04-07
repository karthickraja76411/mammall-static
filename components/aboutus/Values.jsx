import React from 'react';
import Image from "next/image";
import CardLayoutLeft from './CardLayoutLeft';
import CardLayoutRight from './CardLayoutRight';
import DownloadBanner from '../DownloadBanner';

const Values = (props) => {
    const data = props?.data;
    return (
        <React.Fragment>
            {data &&
                <div className='clsx-about-values'>
                    <div className='clsx-title-center'>
                        <span className='d-flex align-items-center gap-2 mb-3'>
                            <Image src={"/assets/img/home/star.svg"} alt='img' width={20} height={20} loading='lazy' />
                            {data?.label}
                        </span>
                        <p>{data?.title}</p>
                    </div>
                    <div className='d-flex flex-column gap-5'>
                        <CardLayoutLeft data={data?.banner1} />
                        <CardLayoutRight data={data?.banner2} />
                        <CardLayoutLeft data={data?.banner3} />
                        <CardLayoutRight data={data?.banner4} />
                        <CardLayoutLeft data={data?.banner5} />
                    </div>


                    <DownloadBanner />
                </div>}
        </React.Fragment>
    )
}

export default Values