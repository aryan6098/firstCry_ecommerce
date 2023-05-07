import React from "react";
import Navbar from "./Navbar";
import Slider from "./components/Slider";
import Layout from "./components/Layout";
import Premium from "./Premium/Premium";
import SummerSection from "./SummerSection";
import Footer from "../Footer";
const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Layout  backgroundColor="#eeeeee">
        <Premium />
      </Layout>
      <Layout  backgroundColor="#F6F6F6" >
        <SummerSection />
      </Layout>
      <Footer />
    </>
  );
};

export default Dashboard;
