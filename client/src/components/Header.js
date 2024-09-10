import React from "react";
import "../index.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

export const Header = () => {
  return (
    <div className="h-[10vh] border-2 border-black-1000 w-[100vw] max-w-full bg-green-400 flex justify-around items-center text-xl md:text-2xl">
      <BsFacebook
        onClick={() =>
          (window.location.href =
            "https://www.facebook.com/profile.php?id=100030118779626")
        }
      />

      <BsInstagram
        onClick={() =>
          (window.location.href = "https://www.instagram.com/mr.magar35/")
        }
      />
      <BsLinkedin
        onClick={() =>
          (window.location.href =
            "https://www.linkedin.com/in/prem-pachabhaiya-773995229//")
        }
      />
      <BsGithub
        onClick={() =>
          (window.location.href = "https://github.com/PremPachabhaiyamagar")
        }
      />
    </div>
  );
};
export default Header;
