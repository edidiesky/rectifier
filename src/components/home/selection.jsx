import React, { useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import { FiCheckCircle } from "react-icons/fi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { FaOilWell } from "react-icons/fa6";
import { GiPieChart, GiAlarmClock, GiCoinsPile } from "react-icons/gi";
import { BsFillCalculatorFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";

const selectiondata = [
  {
    text: "Migration Issues",
    subtext: "Click here for migration related issues",
    icon: <FiCheckCircle fontSize={"50px"} />,
  },
  {
    text: "Assets Recovery",
    subtext: "Click here for assets recovery issues",
    icon: <HiOutlineBuildingLibrary fontSize={"60px"} />,
  },
  {
    text: "Rectification",
    subtext: "Click here for rectify issues",
    icon: <HiOutlineBuildingLibrary fontSize={"60px"} />,
  },
  {
    text: "High Gas Fees",
    subtext: "Click here for gas fee related issues.",
    icon: <FaOilWell fontSize={"60px"} />,
  },
  {
    text: "Slippage Error",
    subtext: "Click here for slippage rrlated error during trade.",
    icon: <GiPieChart fontSize={"60px"} />,
  },
  {
    text: "Transaction Error",
    subtext: "Click here for transaction related issues.",
    icon: <BsFillCalculatorFill fontSize={"60px"} />,
  },
  {
    text: "Cross Chain Transfer",
    subtext: "Click here for cross chain bridge issues.",
    icon: <IoStatsChart fontSize={"60px"} />,
  },
  {
    text: "Staking Issues",
    subtext: "click here for staking related issues.",
    icon: <GiAlarmClock fontSize={"60px"} />,
  },
  {
    text: "Swap/Exchange",
    subtext: "Click here for swap/exchange related issues.",
    icon: <GiCoinsPile fontSize={"60px"} />,
  },
  {
    text: "Connect to Dapps",
    subtext: "Click here for connect to dapps related issues.",
    icon: <IoStatsChart fontSize={"60px"} />,
  },
  {
    text: "Claim Reflection",
    subtext: "Click here for claim reflection related issues.",
    icon: <GiCoinsPile fontSize={"60px"} />,
  },
  {
    text: "Migration Issues",
    subtext: "Click here for migration related issues",
    icon: <FiCheckCircle />,
  },
  {
    text: "Migration Issues",
    subtext: "Click here for migration related issues",
    icon: <FiCheckCircle />,
  },
  {
    text: "Migration Issues",
    subtext: "Click here for migration related issues",
    icon: <FiCheckCircle />,
  },
  {
    text: "Migration Issues",
    subtext: "Click here for migration related issues",
    icon: <FiCheckCircle />,
  },
];

export default function Selectionindex() {
  //
  return (
    <SelectionContainer>
      <div className="Selectionwrapper column w-90 auto flex gap-3">
        <div className="SelectionSection w-100 flex column gap-1">
          <div className="hidden w-100">
            <h1
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="500"
              className="text2 text1 text-start"
            >
              Make Your Selection Below
            </h1>
          </div>

          <div className="w-100 py-2 coinwrapper">
            {selectiondata.map((x, index) => {
              return (
                <div className="flex card fs-16 text-white item-start column gap-2">
                  {x.icon}
                  <span className="block fs-24 text-bold">
                    {x.text}

                    <span className="text-grey text-light py-2 fs-18 block">
                      {x.subtext}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SelectionContainer>
  );
}

const SelectionContainer = styled.section`
  width: 100%;
  /* background-color: var(--primary); */
  background-color: var(--primary-dark);
  padding: 8rem 0;
  @media (max-width: 780px) {
    padding-top: 10rem;
  }

  svg {
    color: #0d6efd;
  }

  .text1,
  .text2,
  .text3 {
    transform: translate3d(0, 100px, 0);
  }
  .coinwrapper {
    padding-top: 4rem;
    display: grid;
    grid-gap: 2.5rem;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 980px) {
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    }
  }

  .Selectionwrapper {
    padding: 2rem 0;
    gap: 1rem;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
      padding: 4rem 0;
    }
    .SelectionImage {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      object-fit: cover;
    }
    .card {
      background-color: var(--primary-light);
      padding: 3rem 4rem;
      border-radius: 20px;
      transition: all 0.5s;
      &:hover {
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
      }
    }

    .SelectionSection {
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
        font-size: 4.6rem;
        font-weight: 700;
        z-index: 500;
        width: 100%;

        @media (max-width: 780px) {
          text-align: start;
          font-size: 5rem;
          line-height: 1;
        }
        @media (max-width: 580px) {
          font-size: 4.5rem !important;
          width: 90%;
        }
      }
      p {
        font-size: 22px;
        font-weight: normal;
        @media (max-width: 580px) {
          text-align: start;
          line-height: 1.3;
        }
        @media (max-width: 580px) {
          width: 90%;
          font-size: 17px;
        }
      }
      .btn:hover {
        background-color: var(--secondary) !important;
      }
      .btn1 {
        background-color: var(--secondary);
        color: #fff;
        border: none !important;
        &:hover {
          opacity: 0.7;
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
    }
  }
`;
