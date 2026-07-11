import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "MyBeSix privacy information.",
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy"
      title="Privacy principles for the MyBeSix website."
      description="This starter policy explains the intended website behaviour. The company should have local counsel adapt it to the final operating jurisdictions, software behaviour, and data suppliers before launch."
    >
      <div className="prose-shell">
        <section>
          <h2>Information entered on the website</h2>
          <p>The people-search form may receive a name, phone number, email address, current address, and previous address. The removal form receives a name, email address, and phone number. In this first version, submitted details are stored only in the current browser tab using session storage so the selected preparation screen can continue after navigation.</p>
        </section>
        <section>
          <h2>Information the website may log</h2>
          <p>The hosting provider may record ordinary technical information such as IP address, browser type, device type, request time, error logs, and downloaded file requests. These records should be retained only as long as reasonably needed for security, reliability, and abuse prevention.</p>
        </section>
        <section>
          <h2>The downloadable software</h2>
          <p>The people-search software and any official removal-report package are separate downloadable components. Their final privacy notices must explain what they collect, where information is sent, which sources are used, how reports are stored, and how related data can be deleted.</p>
        </section>
        <section>
          <h2>USDT support</h2>
          <p>Blockchain transactions are public on the relevant network. A wallet address and transaction amount may be visible to anyone using a blockchain explorer. MyBeSix does not require a contribution before allowing a download.</p>
        </section>
        <section>
          <h2>Your choices</h2>
          <p>Users may close the browser tab to clear active session data, request assistance, report suspected abuse, or start the dedicated information-removal process. Both searches are blocked on mobile devices after form submission.</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>Privacy questions should be sent to support@mybesix.com. Do not send full identity numbers or unredacted identity documents through ordinary email.</p>
        </section>
      </div>
    </PageShell>
  );
}
