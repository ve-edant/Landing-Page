import React from "react";
import ServicesCard from "../components/ServicesCard";

const Marketing = () => {
  return (
    <div>
      <ServicesCard
        title="DeFi Development"
        description="BRT Multi Software offers comprehensive DeFi development services that enable businesses to launch decentralized financial platforms. We help create decentralized applications, protocols, and platforms that eliminate intermediaries, empowering users to access financial services directly. Our DeFi solutions include:"
        subpoints={[
          "Smart Contract Development",
          "Decentralized Application (DApp) Development",
          "Tokenomics and Token Development",
        ]}
        imageSrc="/images/uiux-service.jpg"
      />
    </div>
  );
};

export default Marketing;
