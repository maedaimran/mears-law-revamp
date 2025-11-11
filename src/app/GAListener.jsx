'use client';

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function pageview(url) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-Y12C9LM2EK", { page_path: url });
  }
}

export default function GAListener() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const q = searchParams?.toString();
    const url = q ? `${pathname}?${q}` : pathname;
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}