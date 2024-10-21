import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import TeamDetailsArea from "./team-details-area";
import Footer from "@/src/layout/footers/footer";

const TeamDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <TeamDetailsArea />
      </main>
      <Footer />
    </>
  );
};

export default TeamDetails;
