import React from 'react';
import Image from "next/image";

const CardLayoutRight = (props) => {
    const data = props?.data;
    return (
        <React.Fragment>
            {data && <div className="card card-rft">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='card-body'>
                            <h3 className="title">{data?.title}</h3>
                            <p className="text">
                                {data?.text}
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='clsx-card-img-rft h-100'>
                            <Image src={`/assets/img/aboutus/${data?.img}`} alt='' width={500} height={200} loading='lazy' className='w-100 h-100'/>
                        </div>
                    </div>
                </div>
            </div>}
        </React.Fragment>
    )
}

export default CardLayoutRight