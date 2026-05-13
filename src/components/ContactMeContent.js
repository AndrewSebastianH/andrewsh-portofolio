import React from "react";
import { constants } from "./constants/constants";
import { ReactComponent as LinkedInIcon } from "../icons/linkedin.svg";
import { ReactComponent as GmailIcon } from "../icons/gmail.svg";
import { ReactComponent as GithubIcon } from "../icons/github.svg";

const SocialButton = ({ href, children, label, hoverClass, baseClass }) => (
  <a target="_blank" rel="noreferrer" href={href} className="flex flex-col items-center gap-2">
    <button
      className={`group flex justify-center items-center p-3 md:p-2 w-16 h-16 md:w-14 md:h-14 rounded-lg font-bold duration-200 transition-colors ${baseClass} ${hoverClass}`}
    >
      {children}
    </button>
    <span className="text-white font-jockey text-xs tracking-widest md:hidden">{label}</span>
  </a>
);

const ContactMeContent = ({ className }) => {
  return (
    <div className={`w-full pt-6 md:pt-10 ${className}`}>
      <div className="flex flex-row justify-center md:justify-between gap-8 md:gap-0 w-full">
        <SocialButton
          href={constants.linkedinURL}
          label="LINKEDIN"
          baseClass="bg-sky-700 text-neutral-50"
          hoverClass="hover:bg-sky-500"
        >
          <LinkedInIcon />
        </SocialButton>

        <SocialButton
          href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${constants.email}`}
          label="EMAIL"
          baseClass="bg-neutral-100 text-neutral-900"
          hoverClass="hover:bg-neutral-300"
        >
          <GmailIcon />
        </SocialButton>

        <SocialButton
          href={constants.githubURL}
          label="GITHUB"
          baseClass="icon-button bg-neutral-100 text-neutral-900"
          hoverClass="hover:bg-[#222222]"
        >
          <GithubIcon className="icon" />
        </SocialButton>
      </div>
    </div>
  );
};

export default ContactMeContent;
