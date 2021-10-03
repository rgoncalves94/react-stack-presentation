import React, { FunctionComponent } from "react";
import { useLocation } from "react-router";
import { Content } from "../common/Content";
import { Footer } from "../common/Footer";
import { Header } from "../common/Header";

const Home: FunctionComponent = () => {
  const { search } = useLocation<{ reason: string | undefined }>();

  const isUnauthorized = /unauthorized$/.test(search);

  return (
    <>
      <Header />
      <Content>Welcome! {isUnauthorized && "Identification required!"}</Content>
      <Footer />
    </>
  );
};

export { Home };
