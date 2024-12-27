import React from 'react'
import './FormFooter.scss';
import DigitalIndia from "../../assets/images/logo/DigitalIndia.svg";

export default function FormFooter() {
  return (
    <div className="form-footer">
        <span>powered by </span>
        <img src={DigitalIndia} alt="DigitalIndia" />
    </div>
  )
}
