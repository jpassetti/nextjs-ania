// components/Slide/Spacer.tsx
import React from "react";
import classnames from "classnames/bind";

import styles from "./subcomponents.module.scss";

const cx = classnames.bind(styles);

interface SpacerProps {
 spacerDetails: {
  width: "small" | "medium" | "large" | "xlarge";
 };
}

const Spacer: React.FC<SpacerProps> = ({ spacerDetails }) => {
 const { width } = spacerDetails;
 const spacerClasses = cx({
  spacer: true,
  small: width === "small",
  medium: width === "medium",
  large: width === "large",
  xlarge: width === "xlarge",
 });
 return <div className={spacerClasses} />;
};

export default Spacer;
