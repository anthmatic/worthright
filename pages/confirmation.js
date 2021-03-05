import Head from "next/head";
import styles from "../styles/Home.module.css";
import "tailwindcss/tailwind.css";

import App from "../screens/App";
import ConfirmationScreen from "../screens/ConfirmationScreen";


export default function Confirmation() {
  return (
      <div className="">
        <ConfirmationScreen />
        </div>
  );
}
