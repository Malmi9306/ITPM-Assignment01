# Singlish to Sinhala Translator - Automated Testing

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

> **IT3040 – ITPM Assignment 1**  
> Comprehensive automated testing suite for the Swift Translator web application using Playwright

---

## Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Test Coverage](#-test-coverage)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Running Tests](#-running-tests)
- [Viewing Test Reports](#-viewing-test-reports)
- [Project Structure](#-project-structure)
- [Test Scenarios](#-test-scenarios)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## Overview

This project implements a comprehensive automated testing suite using **Playwright** to evaluate the **accuracy**, **robustness**, and **usability** of the [Swift Translator](https://www.swifttranslator.com/) web application.

### Assignment Details

- **Course:** IT3040 - IT Project Management
- **Assignment:** Assignment 1
- **Student ID:** IT23819306
- **Testing Framework:** Playwright
- **Language:** TypeScript

### Primary Objectives

The main goal is to assess how accurately **Singlish** (Sinhala-English) input is translated into proper **Sinhala**, while validating the application's **real-time UI behavior** under various input conditions.

**Application Under Test:**
- **Name:** Swift Translator Web App
- **URL:** [https://www.swifttranslator.com/](https://www.swifttranslator.com/)
- **Primary Function:** Singlish to Sinhala translation

---

## Features

 **Comprehensive Test Coverage** - 40+ automated test scenarios  
 **Real-time UI Validation** - Tests dynamic translation behavior  
 **Cross-Browser Testing** - Supports Chrome, Firefox, and Edge  
 **Detailed Reporting** - HTML reports with screenshots and traces  
 **Robust Error Handling** - Handles edge cases and error scenarios  
 **CI/CD Ready** - Easy integration with continuous integration pipelines

---

## Test Coverage

The automated test suite covers the following categories:

### Language Structure Testing
-  Simple, compound, and complex sentences
-  Interrogative and imperative sentence forms
-  Positive and negative sentence structures
-  Tense variations (past, present, and future)
-  Pronoun usage and plural variations

### Conversational Testing
-  Greetings and common phrases
-  Polite and informal language usage
-  Requests and conversational responses

### Mixed Input Testing
-  Mixed Singlish and English inputs
-  English technical terms and brand names
-  Abbreviations and short forms

### Format & Special Characters
-  Punctuation marks
-  Numbers, dates, and measurement units
-  Extra spaces, line breaks, and paragraphs
-  Special characters and symbols

### UI/UX Validation
-  Real-time translation updates
-  Input field behavior
-  Output display consistency
-  Responsive design elements

---

## Prerequisites

Before you begin, ensure you have the following installed:

| Requirement | Version | Download |
|-------------|---------|----------|
| **Node.js** | 18.x or higher | [nodejs.org](https://nodejs.org/) |
| **npm** | 9.x or higher | Included with Node.js |
| **Git** | Latest | [git-scm.com](https://git-scm.com/) |

### System Requirements

- **OS:** Windows 10/11, macOS 10.15+, or Linux
- **RAM:** 4GB minimum (8GB recommended)
- **Browser:** Chrome, Firefox, or Edge (latest version)

---

## Installation

Follow these steps to set up the project locally:

### Clone the Repository

```bash
git clone https://github.com/Malmi9306/ITPM-Assignment01.git
cd IT23819306
```

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

This will download the required browser binaries (Chromium, Firefox, and WebKit).

### Verify Installation

```bash
npx playwright --version
```

---

## Running Tests

### Run All Tests

Execute all test cases across all browsers:

```bash
npx playwright test
```

### Run Tests in Headed Mode

See the browser while tests run:

```bash
npx playwright test --headed
```

### Run Specific Test File

```bash
npx playwright test tests/example.spec.ts
```

### Run Tests in Debug Mode

```bash
npx playwright test --debug
```

### Run Tests on Specific Browser

```bash
# Chrome only
npx playwright test --project=chromium

# Firefox only
npx playwright test --project=firefox

# WebKit (Safari) only
npx playwright test --project=webkit
```

### Run Tests in UI Mode

Interactive testing with UI:

```bash
npx playwright test --ui
```

---

## Viewing Test Reports

### HTML Report

After test execution, view the detailed HTML report:

```bash
npx playwright show-report
```

The report includes:
-  Test pass/fail status
-  Screenshots of failures
-  Video recordings (if enabled)
-  Execution traces
-  Performance metrics

### Generate Report Manually

```bash
npx playwright test --reporter=html
```

---

## Project Structure

```
IT23819306/
│
├── tests/                      # Test specifications
│   └── example.spec.ts        # Main test file
│
├── playwright.config.ts       # Playwright configuration
├── package.json              # Project dependencies
├── package-lock.json         # Dependency lock file
├── README.md                 # This file
│
├── test-results/             # Test execution results (generated)
├── playwright-report/        # HTML report files (generated)
└── node_modules/             # Dependencies (generated)
```

---

## Test Scenarios

### Sample Test Categories

1. **Basic Translation Tests**
   - Simple word translation
   - Phrase translation
   - Sentence translation

2. **Complex Sentence Tests**
   - Multi-clause sentences
   - Nested structures
   - Conditional statements

3. **Edge Case Tests**
   - Empty input handling
   - Very long text input
   - Special character inputs
   - Mixed language inputs

4. **UI Behavior Tests**
   - Real-time translation updates
   - Input validation
   - Error message display
   - Loading states

5. **Performance Tests**
   - Translation speed
   - Response time validation
   - Concurrent request handling

---

## Troubleshooting

### Common Issues and Solutions

#### Browser Installation Failed

```bash
# Try manual installation
npx playwright install --force

# Or install specific browser
npx playwright install chromium
```

#### Tests Timing Out

Increase timeout in `playwright.config.ts`:

```typescript
timeout: 60000, // 60 seconds
```

#### Port Already in Use

Check if another service is using the port:

```bash
# Windows
netstat -ano | findstr :PORT_NUMBER

# macOS/Linux
lsof -i :PORT_NUMBER
```

#### Network Issues

If the application is unreachable:

1. Check your internet connection
2. Verify the application URL is correct
3. Check if the website is down using [downdetector.com](https://downdetector.com)

#### Node Version Mismatch

Check your Node.js version:

```bash
node --version
```

Update to Node.js 18+ if needed.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards

- Follow TypeScript best practices
- Write descriptive test names
- Add comments for complex logic
- Keep test files organized and modular

---

## License

This project is created for academic purposes as part of IT3040 - ITPM Assignment 1.

**Student:** IT23819306  
**Institution:** SLIIT  
**Year:** 2026

---

## Contact

**Developer:** Malmi9306  
**GitHub:** [@Malmi9306](https://github.com/Malmi9306)  
**Project Link:** [ITPM-Assignment01](https://github.com/Malmi9306/ITPM-Assignment01)

---

## Acknowledgments

- [Playwright Documentation](https://playwright.dev/)
- [Swift Translator](https://www.swifttranslator.com/)
- IT3040 Course Instructors

---

<div align="center">

** If you find this project helpful, please consider giving it a star!**

....Made with love for IT3040 ITPM Assignment....

</div>
