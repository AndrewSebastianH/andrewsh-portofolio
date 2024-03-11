import React from "react";
import { constants } from "./constants/constants";

const ContactMeContent = ({ textColor, className }) => {
  return (
    <div
      className={`w-full h-full pt-10 text-2xl text-${textColor} font-bebas ${className}`}
    >
      <div className="flex flex-row w-full justify-between">
        <div>
          <a target="_blank" href={constants.linkedinURL}>
            Linkedin
          </a>
        </div>

        <a
          target="_blank"
          href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${constants.email}`}
        >
          Email
        </a>

        <div>
          <a target="_blank" href={constants.githubURL}>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMeContent;
