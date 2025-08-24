A11y-Gatekeeper ♿️🤖
An AI-Enhanced CI/CD Bot for Automated Accessibility Audits. This project is currently in the proposal stage for the NGI Zero Commons Fund.

The Problem
The open-source ecosystem often overlooks digital accessibility (a11y), creating barriers for users with disabilities. This contradicts the vision of an inclusive, human-centric internet. Manual accessibility audits are sporadic and resource-intensive, leaving most projects vulnerable to introducing accessibility regressions with every code change.

The Solution
A11y-Gatekeeper will be a free and open-source GitHub Action that automates accessibility testing directly within the development workflow. It will leverage established engines like axe-core and Playwright to scan pull requests for accessibility issues.

Its key innovation will be the use of AI to translate complex technical reports into clear, actionable, and human-readable comments, empowering developers of all skill levels to fix issues efficiently.

Project Goals (High-Level)
Phase 1: Core Engine. Develop a robust GitHub Action that can run axe-core scans on a target URL.

Phase 2: Intelligent Reporting. Integrate an AI model to translate scan results into developer-friendly comments on pull requests.

Phase 3: Configuration & Release. Add configuration options (e.g., failure thresholds, specific rules to ignore) and publish the action to the GitHub Marketplace.

License
This project will be licensed under the MIT License.
