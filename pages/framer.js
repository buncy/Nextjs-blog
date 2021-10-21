import React, { useRef } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const BackgroundDiv = styled(motion.div)`
  width: 100%auto;
  height: 100vh;
  background-image: url("/images/spot-light.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const GreetingDiv = styled(motion.div)`
  position: relative;
  display: flex;
  top: 10%;
  left: 10%;
  width: 20rem;
  height: 10rem;
`;

const GreetH1 = styled(motion.h1)`
  color: white;
  font-size: 7rem;
`;
const GreetH2 = styled(motion.h1)`
  color: red;
  font-size: 7rem;
`;
const NameSvg = styled(motion.svg)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default function test() {
  let svgVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 3,
        duration: 1,
      },
    },
  };
  let pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        delay: 3,
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  let divVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <BackgroundDiv variants={divVariants} initial="hidden" animate="visible">
      <GreetingDiv>
        <GreetH1> Hi,</GreetH1>
        <GreetH2>&nbsp;I&aposm</GreetH2>
      </GreetingDiv>
      <NameSvg
        id="logo"
        width="484"
        height="122"
        viewBox="0 0 484 122"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <mask
          id="path-1-outside-1"
          maskUnits="userSpaceOnUse"
          x="0.0880127"
          y="0.415985"
          width="484"
          height="121"
          fill="black"
        >
          <rect
            fill="white"
            x="0.0880127"
            y="0.415985"
            width="484"
            height="121"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={pathVariants}
            d="M49.152 115L18.192 80.152V115H5.08801V8.43999H18.192V71.08L48.576 36.088H66.864L29.712 75.4L67.008 115H49.152Z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={pathVariants}
            d="M74.3014 75.256C74.3014 67.192 75.9334 60.136 79.1974 54.088C82.4614 47.944 86.9254 43.192 92.5894 39.832C98.3494 36.472 104.733 34.792 111.741 34.792C118.653 34.792 124.653 36.28 129.741 39.256C134.829 42.232 138.621 45.976 141.117 50.488V36.088H154.365V115H141.117V100.312C138.525 104.92 134.637 108.76 129.453 111.832C124.365 114.808 118.413 116.296 111.597 116.296C104.589 116.296 98.2534 114.568 92.5894 111.112C86.9254 107.656 82.4614 102.808 79.1974 96.568C75.9334 90.328 74.3014 83.224 74.3014 75.256ZM141.117 75.4C141.117 69.448 139.917 64.264 137.517 59.848C135.117 55.432 131.853 52.072 127.725 49.768C123.693 47.368 119.229 46.168 114.333 46.168C109.437 46.168 104.973 47.32 100.941 49.624C96.9094 51.928 93.6934 55.288 91.2934 59.704C88.8934 64.12 87.6934 69.304 87.6934 75.256C87.6934 81.304 88.8934 86.584 91.2934 91.096C93.6934 95.512 96.9094 98.92 100.941 101.32C104.973 103.624 109.437 104.776 114.333 104.776C119.229 104.776 123.693 103.624 127.725 101.32C131.853 98.92 135.117 95.512 137.517 91.096C139.917 86.584 141.117 81.352 141.117 75.4Z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={pathVariants}
            d="M189.614 48.904C191.918 44.392 195.182 40.888 199.406 38.392C203.726 35.896 208.958 34.648 215.102 34.648V48.184H211.646C196.958 48.184 189.614 56.152 189.614 72.088V115H176.51V36.088H189.614V48.904Z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={pathVariants}
            d="M246.213 46.888V93.4C246.213 97.24 247.029 99.976 248.661 101.608C250.293 103.144 253.125 103.912 257.157 103.912H266.805V115H254.997C247.701 115 242.229 113.32 238.581 109.96C234.933 106.6 233.109 101.08 233.109 93.4V46.888H222.885V36.088H233.109V16.216H246.213V36.088H266.805V46.888H246.213Z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={pathVariants}
            d="M321.85 34.648C327.802 34.648 333.178 35.944 337.978 38.536C342.778 41.032 346.522 44.824 349.21 49.912C351.994 55 353.386 61.192 353.386 68.488V115H340.426V70.36C340.426 62.488 338.458 56.488 334.522 52.36C330.586 48.136 325.21 46.024 318.394 46.024C311.482 46.024 305.962 48.184 301.834 52.504C297.802 56.824 295.786 63.112 295.786 71.368V115H282.682V8.43999H295.786V47.32C298.378 43.288 301.93 40.168 306.442 37.96C311.05 35.752 316.186 34.648 321.85 34.648Z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={pathVariants}
            d="M381.559 23.272C379.063 23.272 376.951 22.408 375.223 20.68C373.495 18.952 372.631 16.84 372.631 14.344C372.631 11.848 373.495 9.73599 375.223 8.00799C376.951 6.27999 379.063 5.41599 381.559 5.41599C383.959 5.41599 385.975 6.27999 387.607 8.00799C389.335 9.73599 390.199 11.848 390.199 14.344C390.199 16.84 389.335 18.952 387.607 20.68C385.975 22.408 383.959 23.272 381.559 23.272ZM387.895 36.088V115H374.791V36.088H387.895Z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={pathVariants}
            d="M454.293 115L423.333 80.152V115H410.229V8.43999H423.333V71.08L453.717 36.088H472.005L434.853 75.4L472.149 115H454.293Z"
          />
        </mask>
        <motion.path
          initial="hidden"
          animate="visible"
          variants={pathVariants}
          d="M49.152 115L18.192 80.152V115H5.08801V8.43999H18.192V71.08L48.576 36.088H66.864L29.712 75.4L67.008 115H49.152Z"
          stroke="white"
          strokeWidth="10"
          mask="url(#path-1-outside-1)"
        />
        <motion.path
          initial="hidden"
          animate="visible"
          variants={pathVariants}
          d="M74.3014 75.256C74.3014 67.192 75.9334 60.136 79.1974 54.088C82.4614 47.944 86.9254 43.192 92.5894 39.832C98.3494 36.472 104.733 34.792 111.741 34.792C118.653 34.792 124.653 36.28 129.741 39.256C134.829 42.232 138.621 45.976 141.117 50.488V36.088H154.365V115H141.117V100.312C138.525 104.92 134.637 108.76 129.453 111.832C124.365 114.808 118.413 116.296 111.597 116.296C104.589 116.296 98.2534 114.568 92.5894 111.112C86.9254 107.656 82.4614 102.808 79.1974 96.568C75.9334 90.328 74.3014 83.224 74.3014 75.256ZM141.117 75.4C141.117 69.448 139.917 64.264 137.517 59.848C135.117 55.432 131.853 52.072 127.725 49.768C123.693 47.368 119.229 46.168 114.333 46.168C109.437 46.168 104.973 47.32 100.941 49.624C96.9094 51.928 93.6934 55.288 91.2934 59.704C88.8934 64.12 87.6934 69.304 87.6934 75.256C87.6934 81.304 88.8934 86.584 91.2934 91.096C93.6934 95.512 96.9094 98.92 100.941 101.32C104.973 103.624 109.437 104.776 114.333 104.776C119.229 104.776 123.693 103.624 127.725 101.32C131.853 98.92 135.117 95.512 137.517 91.096C139.917 86.584 141.117 81.352 141.117 75.4Z"
          stroke="white"
          strokeWidth="10"
          mask="url(#path-1-outside-1)"
        />
        <motion.path
          initial="hidden"
          animate="visible"
          variants={pathVariants}
          d="M189.614 48.904C191.918 44.392 195.182 40.888 199.406 38.392C203.726 35.896 208.958 34.648 215.102 34.648V48.184H211.646C196.958 48.184 189.614 56.152 189.614 72.088V115H176.51V36.088H189.614V48.904Z"
          stroke="white"
          strokeWidth="10"
          mask="url(#path-1-outside-1)"
        />
        <motion.path
          initial="hidden"
          animate="visible"
          variants={pathVariants}
          d="M246.213 46.888V93.4C246.213 97.24 247.029 99.976 248.661 101.608C250.293 103.144 253.125 103.912 257.157 103.912H266.805V115H254.997C247.701 115 242.229 113.32 238.581 109.96C234.933 106.6 233.109 101.08 233.109 93.4V46.888H222.885V36.088H233.109V16.216H246.213V36.088H266.805V46.888H246.213Z"
          stroke="white"
          strokeWidth="10"
          mask="url(#path-1-outside-1)"
        />
        <motion.path
          initial="hidden"
          animate="visible"
          variants={pathVariants}
          d="M321.85 34.648C327.802 34.648 333.178 35.944 337.978 38.536C342.778 41.032 346.522 44.824 349.21 49.912C351.994 55 353.386 61.192 353.386 68.488V115H340.426V70.36C340.426 62.488 338.458 56.488 334.522 52.36C330.586 48.136 325.21 46.024 318.394 46.024C311.482 46.024 305.962 48.184 301.834 52.504C297.802 56.824 295.786 63.112 295.786 71.368V115H282.682V8.43999H295.786V47.32C298.378 43.288 301.93 40.168 306.442 37.96C311.05 35.752 316.186 34.648 321.85 34.648Z"
          stroke="white"
          strokeWidth="10"
          mask="url(#path-1-outside-1)"
        />
        <motion.path
          initial="hidden"
          animate="visible"
          variants={pathVariants}
          d="M381.559 23.272C379.063 23.272 376.951 22.408 375.223 20.68C373.495 18.952 372.631 16.84 372.631 14.344C372.631 11.848 373.495 9.73599 375.223 8.00799C376.951 6.27999 379.063 5.41599 381.559 5.41599C383.959 5.41599 385.975 6.27999 387.607 8.00799C389.335 9.73599 390.199 11.848 390.199 14.344C390.199 16.84 389.335 18.952 387.607 20.68C385.975 22.408 383.959 23.272 381.559 23.272ZM387.895 36.088V115H374.791V36.088H387.895Z"
          stroke="white"
          strokeWidth="10"
          mask="url(#path-1-outside-1)"
        />
        <motion.path
          initial="hidden"
          animate="visible"
          variants={pathVariants}
          d="M454.293 115L423.333 80.152V115H410.229V8.43999H423.333V71.08L453.717 36.088H472.005L434.853 75.4L472.149 115H454.293Z"
          stroke="white"
          strokeWidth="10"
          mask="url(#path-1-outside-1)"
        />
      </NameSvg>
    </BackgroundDiv>
  );
}
