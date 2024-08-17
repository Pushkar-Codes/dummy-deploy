import React from "react";

// Define the props interface
interface ServiceCardProps {
  title: string;
  descriptions: string[];
  linkText: string;
  linkUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  descriptions,
  linkText,
  linkUrl,
}) => {
  return (
    <div className="">
      <div
        className="max-w-[90%] mx-auto bg-[#212020] lg:w-[400px] rounded-lg overflow-hidden"
        style={{ boxShadow: "0 20px 30px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>

          <hr className="w-[170px] lg:w-[350px]" />

          {descriptions.map((description, index) => (
            <div className="flex items-center mb-4 mt-8" key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#5f6368"
                className="mr-6"
              >
                <path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
              <p className="text-lg text-white">{description}</p>
            </div>
          ))}

          <div className="flex items-center mt-6 space-x-2">
            <a href={linkUrl} className="text-blue-400 hover:underline ml-12">
              {linkText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
