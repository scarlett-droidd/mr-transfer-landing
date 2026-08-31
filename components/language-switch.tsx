"use client"

import { useLanguage } from "@/context/language-context"

export function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Cambiar idioma / Switch language"
      className="relative flex items-center gap-1 rounded-full border border-[#C9A86A]/40 bg-[#1C2740]/60 px-1 py-1 text-xs font-bold backdrop-blur-sm transition-all duration-300 hover:border-[#C9A86A]/70"
    >
      <span
        className={`rounded-full px-3 py-1 transition-all duration-300 ${language === "es" ? "bg-[#C9A86A] text-[#1C2740]" : "text-[#C9A86A]/60"}`}
      >
        ES
      </span>
      <span
        className={`rounded-full px-3 py-1 transition-all duration-300 ${language === "en" ? "bg-[#C9A86A] text-[#1C2740]" : "text-[#C9A86A]/60"}`}
      >
        EN
      </span>
    </button>
  )
}
