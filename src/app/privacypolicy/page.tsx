"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "../globals.css";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-[#212020]">
      <Navbar />
      {/* Section 1 here... */}
      <div className="w-full h-auto bg-white">
        <div className="bg-gray-100 text-gray-800">
          <div className="max-w-3xl mx-auto p-6 bg-white shadow-md mt-10">
            <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
            <p className="mb-6">
              <strong>Last Updated: August 31, 2024</strong>
            </p>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
              <p>
                Welcome to SN Power & Infra. We are committed to protecting your
                privacy and ensuring that your personal information is handled
                in a safe and responsible manner. This Privacy Policy outlines
                how we collect, use, and protect your data when you interact
                with our website and services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                2. Company Overview
              </h2>
              <p>
                SN Power & Infra, established in 2023, is a proprietorship
                consultancy firm specializing in Power Distribution, Civil, and
                other sectors. Our mission is to provide top-notch,
                cost-effective, and environmentally friendly solutions to our
                clients while adhering to Indian and international standards.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">3. Data Collection</h2>
              <p>
                Currently, SN Power & Infra does not collect any personal data
                from users. We do not use cookies or any other tracking
                mechanisms on our website at this time. However, we may
                implement cookies or other data collection methods in the future
                to enhance user experience.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">4. Use of Data</h2>
              <p>
                As we do not collect any personal data at this time, we do not
                use or process any user information. Should we begin collecting
                data in the future, this section will be updated to reflect how
                such data will be used, including purposes such as improving our
                services, personalizing user experiences, or providing targeted
                information.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">5. Data Sharing</h2>
              <p>
                SN Power & Infra does not share, sell, or disclose any personal
                information to third parties. Should data collection practices
                change, we will provide clear information about any data sharing
                practices, including who we may share your information with and
                for what purpose.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">6. Data Security</h2>
              <p>
                We are committed to ensuring that any future data collection and
                storage practices meet the highest standards of security.
                Although we currently do not collect any data, we plan to
                implement robust security measures if data collection begins, to
                protect your information from unauthorized access or disclosure.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">7. User Rights</h2>
              <p>
                As we do not collect any personal data, there are no user rights
                associated with data access, correction, or deletion at this
                time. Should we start collecting data, we will outline your
                rights in this section, including how you can access, correct,
                or delete your personal information.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">8. Cookies</h2>
              <p>
                Currently, SN Power & Infra does not use cookies on our website.
                In the future, if cookies are used, this section will be updated
                to explain how cookies work, what types of cookies we use, and
                how users can manage cookie settings.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                9. Changes to this Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We encourage you to review this page
                periodically to stay informed about how we are protecting your
                information.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy
                or SN Power & Infra’s practices, please contact us at:
              </p>
              <br />
              <br />
              <p>
                <strong>SN Power & Infra</strong>
                <br />
                <br />
                Phone: +91 9555494092
                <br />
                Email: snpowerinfrainfo@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
