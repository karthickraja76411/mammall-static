import React from 'react';
import ContainerLayout from '~/components/ContainerLayout';
import MainBanner from '~/components/aboutus/MainBanner';
import Values from '~/components/aboutus/Values';

const Index = (props) => {
    const data = props?.data;
    return (
        <ContainerLayout>
            <MainBanner data={data?.mainHeader} />
            <Values data={data?.ourValues} />
        </ContainerLayout>
    )
}

export default Index