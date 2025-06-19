// Copyright (c) 2025 Kyle Matthew Magnaye
//
// Created by: Kyle Matthew Magnaye
// Created on: Apr 2025
// This file contains the JS functions for index.html

const fahrenheitInput = document.getElementById("fahrenheit");
const celsiusInput = document.getElementById("celsius");

fahrenheitInput.addEventListener("input", function () {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  if (typeof fahrenheit === "number" && fahrenheitInput.value !== "") {
    const celsius = (((fahrenheit - 32) * 5) / 9).toFixed(3);
    celsiusInput.value = celsius + " °C";
  } else {
    celsiusInput.value = "";
  }
});
