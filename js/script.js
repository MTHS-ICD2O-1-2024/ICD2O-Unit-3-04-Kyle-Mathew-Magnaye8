// Copyright (c) 2025 Kyle Matthew Magnaye
//
// Created by: Kyle Matthew Magnaye
// Created on: Apr 2025
// This file contains the JS functions for index.html

const fahrenheitInput = document.getElementById("fahrenheit")
const celsiusInput = document.getElementById("celsius")

fahrenheitInput.addEventListener("input", () => {
  const fahrenheit = parseFloat(fahrenheitInput.value)
  if (!isNaN(fahrenheit)) {
    const celsius = (((fahrenheit - 32) * 5) / 9).toFixed(2)
    celsiusInput.value = celsius + " °C"
  } else {
    celsiusInput.value = ""
  }
})
