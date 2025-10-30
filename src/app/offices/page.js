// src/app/offices/page.js
export const metadata = { title: "Offices — Mears Law" };

import React from "react";

export default function OfficesPage() {
  const h = React.createElement;

  const css = `
    .offices-wrap{
      --navy:#0f223b; --ink:#0e1b2e; --muted:#42546b; --border:#e5e7eb;
      font-family: var(--font-inter), Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
      width:min(1060px,92%); margin:40px auto 60px;
    }
    .offices-title{ font-weight:900; letter-spacing:-.3px; font-size:clamp(26px,3.4vw,38px); color:var(--navy); margin:8px 0 8px; }
    .cards{ display:grid; grid-template-columns:1fr 1fr; gap:22px; }
    @media (max-width:900px){ .cards{ grid-template-columns:1fr; } }
    .office-card{ border:1px solid var(--border); border-radius:14px; padding:18px 18px; background:#fff; }
    .office-name{ font-weight:900; margin:0 0 10px; color:var(--navy); font-size:clamp(18px,2.2vw,24px); }
    .addr-block{ margin:0 0 10px; color:var(--navy); }
    .addr-line{ font-size:20px; line-height:1.32; }
    .spacer-10{ height:10px; }
    .spacer-14{ height:14px; }
    .links{ display:flex; gap:12px; flex-wrap:wrap; }
    .btn-link{
      display:inline-flex; align-items:center; gap:8px; padding:10px 16px; border-radius:10px;
      border:1px solid var(--border); text-decoration:none; color:var(--navy);
      background:#f3f6fa; font-weight:800; font-size:18px;
    }
    .btn-link:hover{ background:#fff; }
    .contact-row{ margin-top:8px; color:var(--navy); font-size:20px; }
    .label{ font-weight:900; }
    .tel .number{ font-weight:900; }
    .fax .number{ font-weight:900; } /* now bold like phone */
    .contact-row a{ color:var(--navy); text-decoration:none; }
    .contact-row a:hover{ text-decoration:underline; }
  `;

  const gmap = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

  // Canada (Toronto)
  const caLine1 = "Suite 2500, 120 Adelaide Street West";
  const caLine2 = "Toronto, Ontario, M5H 1T1";
  const caQuery = `${caLine1}, ${caLine2}`;
  const telCA = "(437) 888-2974";
  const faxCA = "(647) 374-0066";

  // Caribbean (Kingston)
  const jmLine1 = "19 Cargill Avenue";
  const jmLine2 = "Kingston 10, Jamaica";
  const jmQuery = `${jmLine1}, ${jmLine2}`;
  const telJM = "(876) 299-7746";

  return h(React.Fragment, null,
    h("style", { dangerouslySetInnerHTML: { __html: css } }),
    h("main", { className: "offices-wrap" },
      h("h1", { className: "offices-title" }, "Offices"),
      h("section", { className: "cards" },

        // Canada
        h("div", { className: "office-card" },
          h("h2", { className: "office-name" }, "Canada"),
          h("div", { className: "addr-block", "aria-label": "Toronto address" },
            h("div", { className: "addr-line" }, caLine1),
            h("div", { className: "addr-line" }, caLine2)
          ),
          h("div", { className: "spacer-10" }),
          h("div", { className: "links" },
            h("a", {
              className: "btn-link",
              href: gmap(caQuery),
              target: "_blank",
              rel: "noopener noreferrer"
            }, "See on Google Maps")
          ),
          h("div", { className: "spacer-14" }),
          h("div", { className: "contact-row tel" },
            h("span", { className: "label" }, "T: "),
            h("a", { className: "number", href: "tel:+14378882974" }, telCA)
          ),
          h("div", { className: "contact-row fax" },
            h("span", { className: "label" }, "Fax: "),
            h("span", { className: "number" }, faxCA)
          )
        ),

        // Caribbean
        h("div", { className: "office-card" },
          h("h2", { className: "office-name" }, "Caribbean"),
          h("div", { className: "addr-block", "aria-label": "Kingston address" },
            h("div", { className: "addr-line" }, jmLine1),
            h("div", { className: "addr-line" }, jmLine2)
          ),
          h("div", { className: "spacer-10" }),
          h("div", { className: "links" },
            h("a", {
              className: "btn-link",
              href: gmap(jmQuery),
              target: "_blank",
              rel: "noopener noreferrer"
            }, "See on Google Maps")
          ),
          h("div", { className: "spacer-14" }),
          h("div", { className: "contact-row tel" },
            h("span", { className: "label" }, "T: "),
            h("a", { className: "number", href: "tel:+18762997746" }, telJM)
          )
        )
      )
    )
  );
}
