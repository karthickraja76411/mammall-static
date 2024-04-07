import React from 'react';
import Image from 'next/image';

const MainBanner = (props) => {
    const data = props?.data;
    return (
        <React.Fragment>
            {data && <div className='clsx-serices-banner'>
                <div className='clsx-title-center'>
                    <p>{data?.title}</p>
                </div>

                <div className='d-flex flex-column gap-5'>
                    <div className="card border-0">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className='img-wrap'>
                                    <Image src={`/assets/img/services/${data?.banner1?.img}`} alt='' width={500} height={300} loading='lazy' className='w-100 h-100' />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className='card-body py-4 py-lg-0'>
                                    <h3 className="title">{data?.banner1?.title}</h3>
                                    <p className="text">
                                        {data?.banner1?.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card border-0">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className='card-body py-4 py-lg-0'>
                                    <h3 className="title">{data?.banner2?.title}</h3>
                                    <p className="text">
                                        {data?.banner2?.text}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className='img-wrap'>
                                    <Image src={`/assets/img/services/${data?.banner2?.img}`} alt='' width={500} height={300} loading='lazy' className='w-100 h-100' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </React.Fragment>
    )
}

export default MainBanner