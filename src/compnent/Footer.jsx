import React from "react";
import LanguageSelector from "./LanguageSelector";

const Footer = () => {
  return (
    <div className="text-[16px] text-gray-600 px-27 ">
      <div className="p-5 underline">Questions? Call 000-800-919-1743</div>
      <div className="flex justify-between items-center text-xl p-5 underline">
        <div>
          <span className="block"> FAQ</span>
          <span className="block">Investor Relations</span>
          <span className="block">Privacy</span>
          <span className="block">Speed Test</span>
        </div>
        <div>
          <span className="block">Help Centre</span>
          <span className="block">Jobs</span>
          <span className="block">Cookie Preferences</span>
          <span className="block">Legal Notices</span>
        </div>
        <div>
          <span className="block">Account</span>
          <span className="block">Ways to Watch</span>
          <span className="block">Corporate Information</span>
          <span className="block">Only on Netflix</span>
        </div>
        <div>
          <span className="block">Media Centre</span>
          <span className="block">Terms of Use</span>
          <span className="block">Contact Us</span>
          <span className="block">Only on Netflix</span>
        </div>
      </div>
      <div className="text-white p-5">
        <LanguageSelector />
      </div>
      <div className="p-5">Netflix India</div>
      <div className="flex">
        <div className="p-5">
          This page is protected by Google reCAPTCHA to ensure you're not a bot
        </div>
        <div className="text-blue-600 underline p-5">Learn more.</div>
      </div>
    </div>
  );
};

export default Footer;
