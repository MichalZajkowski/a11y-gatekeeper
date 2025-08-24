/**
 * @file A Proof of Concept script for the A11y-Gatekeeper project.
 * This script uses Playwright to launch a browser, navigate to a page,
 * and then uses axe-core to perform an accessibility scan.
 * The results are printed to the console in a human-readable format.
 */

// Import necessary libraries
const { chromium } = require('playwright');
const { AxeBuilder } = require('@axe-core/playwright');

// Main function to run the scan
(async () => {
  console.log('🚀 Starting A11y-Gatekeeper Proof of Concept...');

  const browser = await chromium.launch();
  
  // --- ZMIANA 1: Stworzenie kontekstu przeglądarki ---
  // Zamiast tworzyć stronę bezpośrednio, najpierw tworzymy "kontekst".
  // Jest to nowa, wymagana przez @axe-core/playwright najlepsza praktyka.
  const context = await browser.newContext();
  const page = await context.newPage();
  // --- Koniec ZMIANY 1 ---

  // We will test a demonstration page from W3C known to have accessibility issues.
  // This ensures our PoC will find and report violations.
  const targetUrl = 'https://www.w3.org/WAI/demos/bad/before/home.html';
  console.log(`🔎 Navigating to: ${targetUrl}`);
  await page.goto(targetUrl);

  console.log('♿️ Running Accessibility Scan with axe-core...');
  
  // Create a new AxeBuilder instance and run the analysis.
  const accessibilityScanResults = await new AxeBuilder({ page })
  .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']) // Configure standards
  .analyze();

  console.log('📊 Scan Complete. Generating report...');
  console.log('-----------------------------------------');

  // Check if there are any violations
  if (accessibilityScanResults.violations.length === 0) {
    console.log('✅ No accessibility violations found. Great job!');
  } else {
    console.log(`❌ Found ${accessibilityScanResults.violations.length} accessibility violations:`);
    
    // Print details for each violation
    accessibilityScanResults.violations.forEach((violation, index) => {
      console.log(`\nViolation #${index + 1}:`);
      console.log(`   - Rule: ${violation.id} (${violation.impact.toUpperCase()})`);
      console.log(`   - Description: ${violation.description}`);
      console.log(`   - Help: ${violation.helpUrl}`);
      console.log(`   - Found ${violation.nodes.length} element(s) with this issue.`);
    });
  }

  console.log('-----------------------------------------');
  
  // --- ZMIANA 2: Prawidłowe zamknięcie zasobów ---
  // Zamykamy kontekst przed zamknięciem przeglądarki.
  await context.close();
  // --- Koniec ZMIANY 2 ---
  await browser.close();
  console.log('✅ Proof of Concept finished successfully.');
})();