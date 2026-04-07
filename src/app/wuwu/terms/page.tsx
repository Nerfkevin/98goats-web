import type { Metadata } from "next";
import Link from "next/link";
import { FileText } from "lucide-react";
import { LegalShell } from "@/components/wuwu/LegalShell";

const SITE = "https://www.98goats.com";
const CONTACT = "hello@98goats.com";

export const metadata: Metadata = {
  title: "Terms of Service | Wu-Wu",
  description: "Terms governing use of the Wu-Wu website at 98goats.com.",
  alternates: { canonical: `${SITE}/wuwu/terms` },
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of Service"
      effectiveDate="April 7, 2026"
      icon={FileText}
    >
      <p>
        Welcome to Wu-Wu. By accessing or using our website at{" "}
        <a href={SITE}>{SITE}</a> (the &quot;Site&quot;), you agree to these
        Terms of Service (&quot;Terms&quot;) for the Wu-Wu product and related
        materials we publish here. If you do not agree, do not use the Site.
      </p>

      <section>
        <h2>1. The service</h2>
        <p>
          We provide informational and promotional content about Wu-Wu through
          the Site.{" "}
          <strong>
            The Site does not include user sign-in, accounts, or public profiles.
          </strong>{" "}
          Any future Wu-Wu features will be described separately; profiles will
          remain private by default unless we state otherwise in writing.
        </p>
      </section>

      <section>
        <h2>2. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Site in violation of any law or regulation</li>
          <li>
            Attempt to probe, scan, or test the vulnerability of our systems, or
            breach security or authentication measures
          </li>
          <li>
            Interfere with or disrupt the Site (including by overloading or
            automated scraping beyond reasonable indexing)
          </li>
          <li>Misrepresent your affiliation with Wu-Wu</li>
        </ul>
        <p>
          We may suspend or block access if we reasonably believe you have
          violated these Terms.
        </p>
      </section>

      <section>
        <h2>3. Intellectual property</h2>
        <p>
          The Site, including its design, text, graphics, logos, and branding for
          Wu-Wu, is owned by us or our licensors and is protected by intellectual
          property laws. You may not copy, modify, or distribute our materials
          without prior written permission, except as allowed by law (e.g.
          temporary copies in your browser cache).
        </p>
      </section>

      <section>
        <h2>4. Third-party links</h2>
        <p>
          The Site may link to third-party sites or services. We are not
          responsible for their content or practices; your use of third-party
          sites is at your own risk.
        </p>
      </section>

      <section>
        <h2>5. Disclaimers</h2>
        <p>
          The Site is provided <strong>&quot;as is&quot;</strong> and{" "}
          <strong>&quot;as available&quot;</strong> without warranties of any
          kind, whether express or implied, including merchantability, fitness for
          a particular purpose, and non-infringement. We do not warrant that the
          Site will be uninterrupted or error-free.
        </p>
      </section>

      <section>
        <h2>6. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Wu-Wu, its operators, and team
          will not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or any loss of profits or data,
          arising from your use of the Site. Our total liability for any claim
          relating to the Site is limited to the greater of (a) the amount you
          paid us for the specific service giving rise to the claim in the twelve
          months before the claim or (b) one hundred U.S. dollars (USD $100), if
          you paid nothing.
        </p>
      </section>

      <section>
        <h2>7. Indemnity</h2>
        <p>
          You agree to defend and indemnify Wu-Wu and its operators against
          claims, damages, and expenses (including reasonable attorneys&apos; fees)
          arising from your misuse of the Site or violation of these Terms.
        </p>
      </section>

      <section>
        <h2>8. Privacy</h2>
        <p>
          Our{" "}
          <Link href="/wuwu/privacy" className="text-violet-400 underline">
            Privacy Policy
          </Link>{" "}
          explains how we handle information. It is incorporated into these Terms
          by reference.
        </p>
      </section>

      <section>
        <h2>9. Changes</h2>
        <p>
          We may update these Terms from time to time. We will post the new
          effective date on this page. Your continued use of the Site after
          changes constitutes acceptance of the updated Terms.
        </p>
      </section>

      <section>
        <h2>10. Governing law</h2>
        <p>
          These Terms are governed by the laws applicable to Wu-Wu&apos;s
          operations, without regard to conflict-of-law rules. Courts in that
          jurisdiction have exclusive venue for disputes, unless applicable law
          requires otherwise.
        </p>
      </section>

      <section>
        <h2>11. Contact</h2>
        <p>
          For questions about these Terms or Wu-Wu:{" "}
          <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
        </p>
      </section>
    </LegalShell>
  );
}
