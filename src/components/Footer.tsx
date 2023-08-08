import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-walterWhite p-5 flex flex-col justify-center items-center">
      <Image src="/logo.png" width={133} height={23} alt="next trips" />
      <p className="text-sm font-medium text-primary mt-1">
        Todos os direitos reservados. ©
      </p>
    </div>
  );
};

export default Footer;
