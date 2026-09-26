import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { localeFromPath } from "./i18n";

export { locales } from "./i18n";

export function render(url) {
  return renderToString(
    <StrictMode>
      <App locale={localeFromPath(url)} />
    </StrictMode>
  );
}
