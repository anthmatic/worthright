import Head from "next/head";
import styles from "../styles/Home.module.css";
import "tailwindcss/tailwind.css";

import EstimateScreen from "../screens/EstimateScreen";


export default function Estimate() {
  return (
      <div className="">
        <EstimateScreen />
        </div>
  );
}
