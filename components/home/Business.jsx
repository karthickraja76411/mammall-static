import React from 'react';
import Image from "next/image";

const Business = (props) => {
    const data = props?.data;
    return (
        <div className='clsx-home-business'>
            <div className='clsx-title-center'>
                <span className='d-flex align-items-center gap-2 mb-3'>
                    <Image src={"/assets/img/home/star.svg"} alt='img' width={20} height={20} loading='lazy' />
                    {data?.label}
                </span>
                <p>{data?.title}</p>
            </div>

            <div className="row g-3">
                {data?.details && data.details.map(x => (
                    <div className="col-lg-4 col-md-6 d-flex flex-streach" key={x.id}>
                        <div className="card">
                            <div className='img-wrap'>
                                <Image src={`/assets/img/home/${x.img}`} alt='' width={500} height={300} loading='lazy' />
                            </div>
                            <div className="card-body">
                                <div className="card-title">{x.title}</div>
                                <div className="card-text">
                                    {x.text}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Business