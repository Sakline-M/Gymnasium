import React from "react";
import Layout from "../../components/Layouts/Layout";
import HomeBanner from "./HomeComponents/HomeBanner";
import YouTubeVideo from "./VideoSection/YouTubeVideo";
import Branchs from "./Branchs/Branchs";
import Exprence from "./Exprence/Exprence";
import Fitness from "./Fitness/Fitness";
import Facilities from "./Facilities/Facilities";
import Transformed from "./Transformed/Transformed";
import Clinets from "../Clients/Clinets";


const Home = () => {
  return (
    <div>
      <Layout>
        <HomeBanner></HomeBanner>
        <YouTubeVideo></YouTubeVideo>
        <Branchs></Branchs>
        <Exprence></Exprence>
        <Fitness></Fitness>
        <Facilities></Facilities>
        <Transformed></Transformed>
        <Clinets></Clinets>
      </Layout>
    </div>
  );
};

export default Home;
