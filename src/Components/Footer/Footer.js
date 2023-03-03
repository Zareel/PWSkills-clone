import React from "react";
import whiteLogo from "../../img/whitelogo.png";
import iso from "../../img/iso.svg";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="bg-footerDark py-16">
      <div className="max-w-6xl mx-auto text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-8">
        {/* column 1 */}
        <div className="flex flex-col gap-6">
          <img className="w-[150px]" src={whiteLogo} alt="whitelogo" />
          <div className="flex gap-4">
            <span>
              <EmailIcon />
            </span>
            <span>Email us: support@pwskills.com</span>
          </div>
          <div className="flex gap-4">
            <span>
              <FacebookIcon />
            </span>
            <span>
              <YouTubeIcon />
            </span>
            <span>
              <TwitterIcon />
            </span>
            <span>
              <LinkedInIcon />
            </span>
            <span>
              <InstagramIcon />
            </span>
          </div>
          <img className="w-[80px]" src={iso} alt="iso" />
          <p>ISO 9001</p>
        </div>

        {/* column 2 */}

        <div>
          <h1 className="w-[170px] font-roboto text-[27px] font-semibold border-[2px] border-transparent border-b-orange-400 pb-4 tracking-wider">
            PW Skills
          </h1>
          <div className="flex gap-10 font-poppins text-sm py-4 mt-4 tracking-wider">
            <div className="flex flex-col gap-3">
              <p>About Us</p>
              <p>FAQ,s</p>
              <p>Privacy Policy</p>
            </div>
            <div className="flex flex-col gap-3">
              <p>Contact Us</p>
              <p>Job Assistance</p>
              <p>Terms and Conditions</p>
            </div>
          </div>
        </div>
        {/*column 3*/}

        <div className="lg:px-10">
          <h1 className="w-[170px] font-roboto text-[27px] font-semibold border-[2px] border-transparent border-b-orange-400 pb-4 tracking-wider">
            Products
          </h1>
          <div className="flex flex-col gap-3 font-poppins text-sm py-4 mt-4 tracking-wider">
            <p>PW Skills Lab</p>
            <p>Job Portal</p>
            <p>Exprience Portal</p>
            <p>Become an affiliate</p>
            <p>Hall of Fame</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
