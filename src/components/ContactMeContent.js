import React from "react";
import { constants } from "./constants/constants";
import { ReactComponent as LinkedInIcon } from "../icons/linkedin.svg";
import { ReactComponent as GmailIcon } from "../icons/gmail.svg";
import { ReactComponent as GithubIcon } from "../icons/github.svg";

const ContactMeContent = ({ textColor, className }) => {
  return (
    <div
      className={`w-full h-full pt-10 text-2xl text-${textColor} font-bebas ${className}`}
    >
      <div className="content-wrapper text-white flex flex-row w-full justify-between">
        <div>
          <a target="_blank" href={constants.linkedinURL}>
            <button class="group h-14 w-14 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-300 font-bold flex justify-center gap-2 items-center p-2">
              <LinkedInIcon />
            </button>
          </a>
        </div>

        <div>
          <a
            target="_blank"
            href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${constants.email}`}
          >
            <button className="group hover:bg-neutral-300 relative bg-neutral-50 rounded text-neutral-50 duration-100 font-bold flex justify-center gap-2 items-center p-2">
              <GmailIcon />
            </button>
          </a>
        </div>

        <div>
          <a target="_blank" href={constants.githubURL}>
            <button className="group icon-button hover:bg-[#222222] relative bg-neutral-50 rounded text-neutral-50 duration-100 font-bold flex justify-center gap-2 items-center p-2">
              <GithubIcon className="icon" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMeContent;
