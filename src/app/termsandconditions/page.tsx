"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "../globals.css";

export default function TermsCondition() {
  return (
    <div className="flex flex-col min-h-screen bg-[#212020]">
      <Navbar />
      <div className="w-full h-auto bg-gray-100 text-gray-800">
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md mt-10">
          <h2 className="text-2xl font-semibold mb-4">Terms and Conditions</h2>

          <p className="mb-6">
            <strong>Last Updated: August 31, 2024</strong>
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">1. Introduction</h3>
            <p>
              Welcome to N Power &amp; Infra. These Terms and Conditions outline
              the rules and regulations for the use of SN Power &amp;
              Infra&apos;s website and services. By accessing or using our
              website and services, you agree to comply with and be bound by
              these terms. If you do not agree with any part of these terms, you
              should not use our website or services.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">2. Services Provided</h3>
            <p>
              S N Power &amp; Infra provides consultancy services in the areas
              of Power Distribution, Civil Infrastructure, and Rain Water
              Harvesting. We strive to deliver the best solutions in an
              efficient and effective manner.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">
              3. User Responsibilities
            </h3>
            <p>
              Users are responsible for maintaining the confidentiality of their
              account and password. You agree to accept responsibility for all
              activities that occur under your account. You must notify us
              immediately of any unauthorized use of your account or any other
              breach of security.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">
              4. Intellectual Property
            </h3>
            <p>
              All content on our website, including but not limited to text,
              graphics, logos, images, and software, is the property of S N
              Power &amp; Infra or its content suppliers and is protected by
              intellectual property laws. Unauthorized use of this content is
              prohibited.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">
              5. Limitation of Liability
            </h3>
            <p>
              S N Power &amp; Infra shall not be liable for any indirect,
              incidental, special, or consequential damages, or any loss of data
              or profits, arising out of or in connection with your use of our
              website or services. Our liability is limited to the maximum
              extent permitted by law.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">6. Changes to Terms</h3>
            <p>
              We reserve the right to update or modify these Terms and
              Conditions at any time. Changes will be effective immediately upon
              posting on our website. Your continued use of our services after
              any changes constitutes your acceptance of the new terms.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">7. Governing Law</h3>
            <p>
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of the jurisdiction in which S N Power
              &amp; Infra is established. Any disputes arising from these terms
              will be resolved in the courts of that jurisdiction.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">
              8. Contact Information
            </h3>
            <p>
              For any questions or concerns regarding these terms and
              conditions, please contact us at:
            </p>
            <br />
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:snpowerinfrainfo@gmail.com"
                className="text-blue-600 hover:underline"
              >
                snpowerinfrainfo@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+9195555494092"
                className="text-blue-600 hover:underline"
              >
                +91 9555494092
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
