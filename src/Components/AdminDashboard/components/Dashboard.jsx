import React, { useEffect } from "react";
import styled from "styled-components";
import Analytics from "./Analytics";
import Earnings from "./Earnings";
import FAQ from "./FAQ";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Transfers from "./Transfers";
import scrollreveal from "scrollreveal";
import Content from "./Content";

export default function Dashboard() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        .row__two
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);
  return (
    <Section>
      <Navbar />
      <div className="grid">
          <Content />
      </div>
    </Section>
  );
}

const Section = styled.section`
  .grid {
    display: flex;
    flex-direction: column;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
  }
`;
