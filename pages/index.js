import React from "react";
import MainBanner from "~/components/home/MainBanner";
import OurMission from "~/components/home/OurMission";
import Service from "~/components/home/Service";
import ContainerLayout from "~/components/ContainerLayout";
import Solution from "~/components/home/Solution";
import Business from "~/components/home/Business";
import DownloadBanner from "~/components/DownloadBanner";
import CarouselCard from "~/components/home/CarouselCard";


export default function Home(props) {
  const data = props?.data;
  return (
    <React.Fragment>
      <MainBanner data={data?.mainBanner} />
      <ContainerLayout>
        <OurMission data={data?.missionVission} />
        <Service data={data?.serviceSolution} />
        <CarouselCard data={data?.works} />
        <Solution data={data?.digitalSolutions} />
        <Business data={data?.businessPortfolio} />
        <DownloadBanner data={data?.mainBanner} />
      </ContainerLayout>
    </React.Fragment>
  );
}
