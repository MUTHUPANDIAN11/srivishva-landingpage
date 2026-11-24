import { SHOP } from "../data.js";

export default function Privacy() {
  return (
    <main className="wrap">
      <article className="doc">
        <h1>Privacy policy</h1>
        <p>
          This policy explains how {SHOP.name} ("we", "us") handles your personal information
          when you visit {SHOP.domain}, contact us, or buy from our shop.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li>Contact details you share with us: name, phone number, email and address.</li>
          <li>Order details: items, sizes, designs and payment status.</li>
          <li>Basic website data such as browser type and pages visited, if analytics are enabled.</li>
        </ul>

        <h2>How we use it</h2>
        <ul>
          <li>To reply to your enquiries and process orders.</li>
          <li>To arrange delivery, repairs or custom work.</li>
          <li>To meet legal and tax requirements, including invoicing and KYC rules for jewellery purchases.</li>
        </ul>

        <h2>Sharing</h2>
        <p>
          We do not sell your information. We share it only with delivery partners, payment
          providers or authorities when needed to complete your order or when the law requires it.
        </p>

        <h2>Cookies</h2>
        <p>
          This website does not set cookies for tracking unless we say so on the site. If we add
          analytics later, we will update this page.
        </p>

        <h2>Storage and security</h2>
        <p>
          We keep your information only as long as needed for the purposes above or as the law
          requires, and we take reasonable steps to protect it.
        </p>

        <h2>Your choices</h2>
        <p>
          You may ask us to see, correct or delete the personal information we hold about you by
          writing to <a href={`mailto:${SHOP.email}`}>{SHOP.email}</a>.
        </p>

        <h2>Changes</h2>
        <p>We may update this policy from time to time. The latest version is always on this page.</p>

        <h2>Contact us</h2>
        <p>
          {SHOP.name}<br />
          {SHOP.address}<br />
          {SHOP.email}
        </p>
      </article>
    </main>
  );
}
