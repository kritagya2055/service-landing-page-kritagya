"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  FLODESK_EMBED_HTML,
  FLODESK_FORM_ID,
  FLODESK_ROOT_CLASS,
} from "./flodeskEmbed";

// Short post-success buffer so Flodesk can finish posting the lead and
// kicking off its automations before the page navigates away.
const REDIRECT_DELAY_MS = 2500;

export default function FlodeskForm() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current?.querySelector(
      `.${FLODESK_ROOT_CLASS}`,
    ) as HTMLElement | null;
    if (!root) return;

    let redirectTimer: ReturnType<typeof setTimeout> | undefined;

    const handleSuccess = () => {
      if (redirectTimer) return; // already armed
      redirectTimer = setTimeout(() => {
        router.push("/thanks");
      }, REDIRECT_DELAY_MS);
    };

    // If Flodesk already flipped state to "success" before we observed it.
    if (root.getAttribute("data-ff-stage") === "success") {
      handleSuccess();
    }

    const observer = new MutationObserver(() => {
      if (root.getAttribute("data-ff-stage") === "success") {
        handleSuccess();
      }
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-ff-stage"],
    });

    return () => {
      observer.disconnect();
      if (redirectTimer) clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div className="flodesk-wrap" ref={containerRef}>
      <div dangerouslySetInnerHTML={{ __html: FLODESK_EMBED_HTML }} />

      {/* The original Flodesk loader + form:handle init. Combined into a
          single script so they execute in order on the client. Scripts
          inserted via innerHTML do not run, which is why these live here
          via next/script instead of inside the embed HTML above. */}
      <Script id="flodesk-init" strategy="afterInteractive">
        {`
          (function(w, d, t, h, s, n) {
            if (w.FlodeskObject && w[w.FlodeskObject]) return;
            w.FlodeskObject = n;
            var fn = function() {
              (w[n].q = w[n].q || []).push(arguments);
            };
            w[n] = w[n] || fn;
            var f = d.getElementsByTagName(t)[0];
            var v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
            var sm = d.createElement(t);
            sm.async = true;
            sm.type = 'module';
            sm.src = h + s + '.mjs' + v;
            f.parentNode.insertBefore(sm, f);
            var sn = d.createElement(t);
            sn.async = true;
            sn.noModule = true;
            sn.src = h + s + '.js' + v;
            f.parentNode.insertBefore(sn, f);
          })(window, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');
          window.fd('form:handle', {
            formId: '${FLODESK_FORM_ID}',
            rootEl: '.${FLODESK_ROOT_CLASS}',
          });
        `}
      </Script>
    </div>
  );
}
