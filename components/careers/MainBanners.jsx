import React from 'react';
import Image from 'next/image';

const MainBanners = (props) => {
    const data = props?.data;
    return (
        <React.Fragment>
            {data && <div className='clsx-careers-banner'>
                <div className='clsx-title-center'>
                    <p>{data?.title}</p>
                    <p className='fs-6'>{data?.subTitle}</p>
                </div>
                <div className="row g-3">
                    {data?.banners && data?.banners.map(x => (
                        <div className="col-lg-4 col-md-6 d-flex flex-streach" key={x.id}>
                            <div className="card">
                                <div className="card-img-top">
                                    <Image src={`/assets/img/careers/${x?.img}`} alt='' width={400} height={200} className='w-100 h-100' />
                                </div>
                                <div className="card-body">
                                    <div className="title">{x?.title}</div>
                                    <div className="text">{x?.text}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>}
        </React.Fragment >
    )
}

export default MainBanners