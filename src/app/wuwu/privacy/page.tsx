import type { Metadata } from "next";
import { Shield } from "lucide-react";
import { LegalShell } from "@/components/wuwu/LegalShell";

const SITE = "https://www.98goats.com";
const CONTACT = "hello@98goats.com";

export const metadata: Metadata = {
  title: "Privacy Policy | Wu-Wu",
  description: "How Wu-Wu handles information when you use our website at 98goats.com.",
  alternates: { canonical: `${SITE}/wuwu/privacy` },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      effectiveDate="April 7, 2026"
      icon={Shield}
    >
      <p>
        Welcome to Wu-Wu. This Privacy Policy describes how we handle
        information when you use our website at <a href={SITE}>{SITE}</a> (the
        &quot;Site&quot;). Wu-Wu is the product; the Site is operated for Wu-Wu
        on this domain.
      </p>

      <section>
        <h2>1. No accounts or sign-in</h2>
        <p>
          The Site does not offer user accounts, sign-in, or public profiles.
          You browse as a visitor only.{" "}
          <strong>
            We do not collect passwords or profile data through this Site.
          </strong>{" "}
          If we add Wu-Wu features in the future, user profiles will be private
          by default unless we clearly disclose otherwise.
        </p>
      </section>

      <section>
        <h2>2. Information we may collect</h2>
        <h3>Technical &amp; usage data</h3>
        <ul>
          <li>
            <strong>Server logs:</strong> Our hosting provider may log requests
            (e.g. IP address, user agent, timestamps, URLs) for security and
            reliability.
          </li>
          <li>
            <strong>Analytics (if enabled):</strong> We may use privacy-focused
            or standard analytics to understand aggregate traffic. You can use
            browser controls to limit cookies where applicable.
          </li>
        </ul>
        <h3>Communications</h3>
        <p>
          If you email us about Wu-Wu, we receive your address and message
          content so we can respond.
        </p>
      </section>

      <section>
        <h2>3. How we use information</h2>
        <ul>
          <li>Operate, secure, and improve the Site and Wu-Wu-related services</li>
          <li>Respond to inquiries you send us</li>
          <li>Comply with law and protect rights and safety</li>
        </ul>
      </section>

      <section>
        <h2>4. Sharing</h2>
        <p>
          We do not sell your personal information. We may share data with
          vendors who help us host or operate the Site (e.g. cloud infrastructure
          such as Vercel), bound by appropriate safeguards.
        </p>
      </section>

      <section>
        <h2>5. Retention</h2>
        <p>
          We keep information only as long as needed for the purposes above or as
          required by law. Server logs are typically rotated on a short cycle.
        </p>
      </section>

      <section>
        <h2>6. Children</h2>
        <p>
          The Site is not directed at children under 13, and we do not knowingly
          collect their personal information.
        </p>
      </section>

      <section>
        <h2>7. Your choices</h2>
        <p>
          Depending on where you live, you may have rights to access, correct,
          or delete personal data, or to object to certain processing. Contact us
          at the email below and we will respond in line with applicable law.
        </p>
      </section>

      <section>
        <h2>8. Changes</h2>
        <p>
          We may update this policy from time to time. The effective date at the
          top will change when we do; continued use of the Site after updates
          means you accept the revised policy.
        </p>
      </section>

      <section>
        <h2>9. Contact</h2>
        <p>
          Questions about this Privacy Policy or Wu-Wu:{" "}
          <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
        </p>
      </section>
    </LegalShell>
  );
}
