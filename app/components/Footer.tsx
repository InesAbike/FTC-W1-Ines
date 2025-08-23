import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-deep-violet">
      <div className="mx-auto max-w-7xl px-5 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 max-w-5xl">

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium mb-6">Contact</h3>
              <div className="space-y-3 text-gray-300 font-light">
                <p className="leading-relaxed">
                  Work inquiries: work@vaultflow.com
                </p>
                <p className="leading-relaxed">
                  PR and speaking: press@vaultflow.com
                </p>
                <p className="leading-relaxed">
                  New business: newbusiness@vaultflow.com
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-6">Address</h3>
            <div className="text-gray-300 space-y-2 font-light">
              <p className="leading-relaxed">398 11th Street, Floor 2</p>
              <p className="leading-relaxed">San Francisco, CA 94103</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-6">Careers</h3>
            <p className="text-gray-300 font-light leading-relaxed">
              Careers@vaultflow.com
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-6">Social</h3>
            <div className="space-y-3 font-light">
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Tik Tok
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-[#939393] text-sm mb-4 lg:mb-0 font-light">
            &copy; {new Date().getFullYear()} Vaultflow. All Rights Reserved.
          </p>

          <Link href="#" className="flex items-center space-x-2">
            <Image
              src="/logos/logo.svg"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;