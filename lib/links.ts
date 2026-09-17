// Outbound links to the practice's other properties.
//
// The patient portal is MDHQ (md-hq.com). It carried a "Patient Portal" button
// in the footer of every page on the WordPress site this build replaced, but
// the autobuild's scrape captured page text only — links and buttons were
// stripped — so the button was lost in the rebuild. The footer's own legal line
// still referred to "a secure patient portal" with nothing to click.
//
// rel="noreferrer" is deliberate here (unlike the store links, which need the
// referrer for attribution): there is no reason to tell MDHQ which page of the
// site a patient was reading before they logged in.
export const PATIENT_PORTAL_URL = 'https://encompassportal.md-hq.com/'
