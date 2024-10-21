import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import TeamMembers from "./team-members";
import Footer from "@/src/layout/footers/footer";

const Team = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="HEKİMLERİMİZ" page_title="HEKİMLERİMİZ" />
        <TeamMembers />
      </main>
      <Footer />
    </>
  );
};

export default Team;
