import React from "react";
import "./button.style.css";
import { Link } from "react-router-dom";
import { buttonOrangeInterface } from "./buttonOrange.module";

const ButtonOrange = ({
  textButton,
  direction,
}: buttonOrangeInterface): React.JSX.Element => {
  return (
    <>
      <Link
        to={direction} 
        type="submit"
        className="btn btn-primary mt-2 buttonstyle"
      >
        {textButton}
      </Link>
    </>
  );
};

export default ButtonOrange;
