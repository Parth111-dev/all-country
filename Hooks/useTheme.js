import { useContext } from "react";
import { ThemeContext } from "../Context/themeContext";

export const useTheme = () => useContext(ThemeContext)