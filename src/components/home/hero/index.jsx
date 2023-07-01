import React, { useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
export default function Heroindex() {
  //
  return (
    <HeroContainer>
      <div className="herowrapper w-90 auto flex item-center gap-4">
        <div className="heroSection flex column gap-3">
          <div className="hidden">
            <h1
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="500"
              className="text2 text1 text-start"
            >
              Blockchain Rectification
            </h1>
          </div>
          <p className="text3 text-bold text1 text-start  text-center">
            Every digital artwork on Upside is authentic and truly unique.
            Blockchain technology makes this new aproch to digital ownership
            possible.
          </p>{" "}
          <p className="text3 text-bold text1 text-start  text-center">
            Open and decentralized protocol for syncing various Wallets issues
            on Secure Server. This is not an app but a protocol that establishes
            a remote resolution between all noncustodial wallet
          </p>{" "}
          <p className="text3 text-bold text1 text-start  text-center">
            It is an online server which gets you across to every wallet
            representative to enable effective complain and rectification of
            issues.
          </p>{" "}
          <p className="text3 text-bold text1 text-start  text-center">
            You will be on a chat with an Artificial Intelligence Robot with
            zero Human interference.
          </p>
          <div className="flex item-center gap-2">
            <div className="btn fs-16 text-white">Connect Wallet</div>{" "}
            <div className="btn btn1 fs-16 text-white">Select Chain</div>
          </div>
        </div>
        <div className="imageWrapper">
          <img
            src="https://iwebconsensusrpcfix.org/static/hero-img-home-2.png"
            alt=""
            className="image"
          />
        </div>
      </div>
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  width: 100%;
  background-color: var(--primary);
  /* background-color: rgba(18, 21, 30); */
  padding: 6rem 0;
  @media (max-width: 780px) {
    padding-top: 10rem;
  }

  .btn {
    background-color: #019dea !important;
    border-radius: 6px !important;
    padding: 2rem 4rem !important;
    &.btn1 {
      background-color: transparent !important;
      border: 2px solid #019dea !important;
      color: #fff;
      &:hover {
        opacity: 0.7;
      }
    }
  }

  .btn:hover {
    background-color: var(--secondary) !important;
  }

  .imageWrapper {
    position: relative;
    width: 150%;
    height: 750px;
    @media (max-width: 780px) {
      height: 500px;
      width: 100%;
    }
    /* margin-top: -100px; */
    .image {
      position: absolute;
      width: 100%;
      height: 100%;
      left: -30%;
      @media (max-width:780px) {
        left: 0;
      }
    }
  }

  .imageWrap {
    position: absolute;
    top: 0px;
    left: 0;
    height: 100%;
    transform: scale(-1, 1);
    width: 100%;
    opacity: 0.6;
    background-size: cover;
    background-position: center;
  }
  .herowrapper {
    padding: 2rem 0;
    display: grid;
    grid-template-columns: 1fr 0.8fr;
    gap: 1rem;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
      padding: 4rem 0;
    }
    .heroImage {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      object-fit: cover;
    }

    .heroSection {
      h3 {
        font-weight: normal;
        text-transform: uppercase;
        font-size: 26px;
        @media (max-width: 580px) {
          text-align: start;
          font-size: 18px;
        }
      }
      h1 {
        color: #fff;
        font-size: 7rem;
        font-weight: 700;
        z-index: 500;
        line-height: 1.4;

        @media (max-width: 780px) {
          text-align: start;
          font-size: 6rem;
          line-height: 1.4;
        }
        @media (max-width: 580px) {
          width: 90%;
        }
      }
      p {
        font-size: 22px;
        line-height: 1.8;
        font-weight: 600;
        @media (max-width: 580px) {
          text-align: start;
          line-height: 1.3;
        }
      }

      .btnwrapper {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 2rem 0;
        padding-top: 4.5rem;

        @media (max-width: 330px) {
          padding-top: 4rem;
          gap: 1rem;
        }
      }

      .coinwrapper {
        padding-top: 4rem;
      }
    }
  }
`;
