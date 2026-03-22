"use client";

import data from "@/content/content.json";
import type { BusinessData } from "@/types/data";
import { useState } from "react";
import Classic from "@/app/components/classic";
import Modern from "@/app/components/Modern";
import Bold from "@/app/components/Bold";
const siteData = data as BusinessData;

type Template = "classic" | "modern" | "bold";

export default function Page() {
  const [template, setTemplate] = useState<Template>("classic");

  return (
    <main>
      {/* TEMPLATE SWITCHER */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white shadow rounded-full px-4 py-2 flex gap-2">
        <button onClick={() => setTemplate("classic")}>Classic</button>
        <button onClick={() => setTemplate("modern")}>Modern</button>
        <button onClick={() => setTemplate("bold")}>Bold</button>
      </div>

      {/* TEMPLATE RENDER */}
        {template === "classic" && <Classic data={siteData} />}
        {template === "modern" && <Modern data={siteData} />}
        {template === "bold" && <Bold data={siteData} />}
    </main>
  );
}