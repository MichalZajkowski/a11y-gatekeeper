# A11y-Gatekeeper 🤖

A free and open-source CI/CD bot (GitHub Action) that automates accessibility audits, helping open-source projects build more inclusive and trustworthy applications for everyone.

---

## The Problem: The Accessibility Gap in the Digital Commons

The open-source ecosystem, a cornerstone of the "digital commons" philosophy, often unintentionally excludes people with disabilities. Manual accessibility (a11y) audits are sporadic and resource-intensive, leaving most projects vulnerable to introducing barriers with every code change. This gap undermines the core NGI values of building an open and human-centric internet for all.

## The Solution: An Automated Guardian for Accessibility

`A11y-Gatekeeper` acts as an automated accessibility guardian integrated directly into the development workflow (CI/CD). It scans every new code change (Pull Request) for WCAG violations using powerful engines like `axe-core`. Its key innovation is translating complex technical reports into simple, understandable, and actionable advice for developers, radically lowering the barrier to creating accessible software.

## ✨ Core Features

* **Automated Scanning:** Integrates with GitHub Actions to analyze Pull Requests.
* **Intelligent Reporting:** Posts comments directly in Pull Requests, highlighting specific issues.
* **AI-Powered Translations:** Transforms technical jargon into clear, helpful suggestions.
* **Fully Configurable:** Allows customization of failure thresholds and WCAG standards.

## 🌍 Project Philosophy & NGI Alignment

We believe that digital accessibility is not a "feature" but a fundamental right in an open internet. `A11y-Gatekeeper` is built as a **digital common** to empower thousands of FOSS developers to build better, more inclusive technology. Our project directly supports the **Next Generation Internet** vision by creating a tool that promotes **trust, openness, and a human-centric internet**.

## 🚦 Current Status

The project is currently at the **Proof of Concept** stage. The core scanning mechanisms have been implemented, and the technical feasibility has been confirmed.

## 🗺️ Roadmap

* **Phase 1: Core Engine.** Develop the core GitHub Action and integrate the scanner.
* **Phase 2: Intelligent Reporting.** Implement Pull Request commenting and AI-powered reporting.
* **Phase 3: Configuration & Release.** Add configuration options, create comprehensive documentation, and publish to the GitHub Marketplace.

## 🚀 Getting Started

To test the Proof of Concept locally:

1.  Clone the repository: `git clone https://github.com/MichalZajkowski/a11y-gatekeeper.git`
2.  Install dependencies: `npm install`
3.  Run the script: `node scan.js`

## 🙌 How to Contribute

This project is and always will be open-source. We welcome and encourage community contributions.

Please read our **[CONTRIBUTING.md](CONTRIBUTING.md)** file for details on how to get started, our code of conduct, and the process for submitting pull requests.

## 📄 License

This project is licensed under the **MIT License**.
