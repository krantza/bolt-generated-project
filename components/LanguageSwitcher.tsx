import { useRouter } from "next/router";
    import { useTranslation } from "next-translate";

    const LanguageSwitcher = () => {
      const router = useRouter();
      const { locales, locale } = router;
      const { t } = useTranslation("common");

      const changeLanguage = (newLocale: string) => {
        router.push(router.asPath, router.asPath, { locale: newLocale });
      };

      return (
        <div>
          {locales?.map((loc) => (
            <button key={loc} onClick={() => changeLanguage(loc)}>
              {t(`languages.${loc}`)}
            </button>
          ))}
        </div>
      );
    };

    export default LanguageSwitcher;
