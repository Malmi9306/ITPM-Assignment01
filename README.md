# IT3040 – ITPM Assignment 1

## Singlish to Sinhala Translator – Automated Testing (Playwright)

## Overview

This project includes automated functional and UI test cases implemented using **Playwright** to evaluate the **accuracy**, **robustness**, and **usability** of the *Swift Translator* web application.

**Tested Application:** Swift Translator Web App
**URL:** [https://www.swifttranslator.com/]

The primary objective of this assignment is to assess how accurately **Singlish** input is translated into **Sinhala**, while also validating the application’s **real-time UI behavior** under different input conditions.

---

## Objectives

* Verify correct Singlish-to-Sinhala translation accuracy
* Identify incorrect, partial, or failed translation scenarios
* Test robustness with mixed languages, slang, formatting, and long inputs
* Validate real-time UI behavior during user input
* Automate all identified test scenarios using Playwright

---

## Test Coverage

The following input categories are covered in the automated test suite:

* Simple, compound, and complex sentences
* Interrogative and imperative sentence forms
* Positive and negative sentence structures
* Tense variations (past, present, and future)
* Pronoun usage and plural variations
* Greetings, requests, and conversational responses
* Polite and informal language usage
* Mixed Singlish and English inputs
* English technical terms and brand names
* Abbreviations and commonly used short forms
* Punctuation, numbers, dates, and measurement units
* Formatting scenarios including extra spaces, line breaks, and paragraphs
* Real-time UI output update behavior

---

## Prerequisites

Before running the tests, ensure the following are installed on your system:

* **Node.js** (version 18 or higher)
* **npm** (Node Package Manager)
* A modern web browser (Chrome, Edge, or Firefox)

---

## Installation

Follow the steps below to set up the project locally:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd <project-folder-name>
npm install
npx playwright install
```

---

## Running the Tests

Use the following command to execute all automated Playwright test cases:

```bash
npx playwright test
```

---

## Notes

* All test cases are designed to validate both **functional accuracy** and **user interface behavior**.
* Real-time translation updates are closely monitored to ensure smooth usability.
* Test results can be reviewed using Playwright’s built-in HTML report.
