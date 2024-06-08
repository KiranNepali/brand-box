import React from "react";
import ServicesAd from "./ServiceAd";
import ServiceLogo from "./ServiceLogo";
import ServicePackage from "./ServicePackage";
import ServiceEcommerce from "./ServiceEcommerce";
import ServicePhotography from "./ServicePhotography";
import ServiceCompany from "./ServiceCompany";

type Props = {};

function ServiceMain({}: Props) {
  return (
    <>
      <ServicesAd />
      <ServiceLogo />
      <ServicePackage />
      <ServiceEcommerce />
      <ServicePhotography />
      <ServiceCompany />
    </>
  );
}

export default ServiceMain;
