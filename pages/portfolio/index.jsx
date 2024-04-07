import React from 'react';
import ContainerLayout from '~/components/ContainerLayout';
import DownloadBanner from '~/components/DownloadBanner';
import MainBanners from '~/components/portfolio/MainBanners';


const Index = (props) => {
    const data = props?.data;
    return (
        <ContainerLayout>
            <MainBanners data={data?.ourBanners} />
            <DownloadBanner />
        </ContainerLayout>
    )
}

export default Index;