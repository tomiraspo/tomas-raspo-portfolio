import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { i18n } = useTranslation();

  // Función para alternar entre español e inglés
  const toggleLanguage = () => {
    const nextLang = i18n.language?.startsWith("es") ? "en" : "es";
    i18n.changeLanguage(nextLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="font-semibold transition-colors"
      title="Cambiar idioma / Change language"
    >
      {i18n.language?.startsWith("es") ? "EN" : "ES"}
    </Button>
  );
}
