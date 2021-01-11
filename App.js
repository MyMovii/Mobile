import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Routes from "./src/routes.js";

export default function App() {
  return (
    <>
    <StatusBar style="light" />
    <Routes />
    </>
  );
}