import Head from "next/head";
import styles from "../styles/Home.module.css";
import "tailwindcss/tailwind.css";

import { AppProvider } from "./AppContext";
import App from "./App";


export default function Home() {
  return (
    <AppProvider>
      <div className="">
        <App />
      </div>
    </AppProvider>
  );
}
