import React from "react";
import SVG from "react-inlinesvg";

const Svg = ({ src, ...props }) => <SVG src={src} {...props} />;

export default Svg;
