import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen">
      <div className="relative py-32 bg-gradient-to-br from-orange-500 via-blue-600 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6"
          >
            <FileText className="w-16 h-16" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Please read these terms carefully
          </motion.p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-gray-600 mb-8">
              <strong>Effective Date:</strong> January 1, 2024
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using Pranexity AI Solutions' website and services, you accept and agree to be bound
                  by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Use of Services</h2>
                <p className="text-gray-600 leading-relaxed mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit any harmful or malicious code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use our services for any fraudulent or unlawful purpose</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed">
                  All content, features, and functionality on our website, including but not limited to text, graphics,
                  logos, and software, are the exclusive property of Pranexity AI Solutions and are protected by
                  international copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Service Availability</h2>
                <p className="text-gray-600 leading-relaxed">
                  We strive to ensure that our services are available at all times. However, we do not guarantee
                  uninterrupted access and reserve the right to modify, suspend, or discontinue services at any time
                  without notice.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">5. User Content</h2>
                <p className="text-gray-600 leading-relaxed">
                  You retain ownership of any content you submit to us. By submitting content, you grant us a
                  worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content in
                  connection with providing our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  To the fullest extent permitted by law, Pranexity AI Solutions shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages arising out of or relating to your use of our
                  services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Indemnification</h2>
                <p className="text-gray-600 leading-relaxed">
                  You agree to indemnify and hold harmless Pranexity AI Solutions from any claims, damages, losses, and
                  expenses arising out of your use of our services or violation of these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes
                  arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Bangalore,
                  Karnataka.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes
                  by posting the updated Terms on our website. Your continued use of our services after such changes
                  constitutes acceptance of the new Terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-6 bg-gray-50 rounded-xl">
                  <p className="text-gray-900 font-semibold">Pranexity AI Solutions</p>
                  <p className="text-gray-600">Email: legal@pranexity.com</p>
                  <p className="text-gray-600">Phone: +91 80 1234 5678</p>
                  <p className="text-gray-600">Address: Koramangala, Bangalore, Karnataka 560095, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
