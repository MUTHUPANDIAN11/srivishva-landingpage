import { SHOP, PRODUCTS } from "../data.js";

export default function Home() {
  return (
    <main className="wrap">
      <div className="hero">
        <div>
          <h1>Gold and silver, made with care</h1>
          <p>
            Sri Vishva Jewellers makes and sells gold, silver and diamond jewellery for families
            and celebrations. Visit the shop or email us to place an order.
          </p>
          <a className="btn" href={`mailto:${SHOP.email}`}>Email the shop</a>
        </div>
        <div className="ring" aria-hidden="true"><span>SV</span></div>
      </div>

      <section>
        <h2>What we offer</h2>
        <div className="grid">
          {PRODUCTS.map(([title, text]) => (
            <div className="item" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Visit us</h2>
        <dl>
          <dt>Address</dt>
          <dd>{SHOP.address}</dd>
          <dt>Email</dt>
          <dd><a href={`mailto:${SHOP.email}`}>{SHOP.email}</a></dd>
        </dl>
      </section>
    </main>
  );
}
