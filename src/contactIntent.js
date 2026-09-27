import { createContext, useContext } from "react";

// Which contact reason is preselected in the form: "fulltime" | "project" | "partnership".
// Hero CTAs set it; the Contact form reads it.
export const INTENTS = ["fulltime", "project", "partnership"];

export const ContactIntentContext = createContext(["fulltime", () => {}]);

export const useContactIntent = () => useContext(ContactIntentContext);
