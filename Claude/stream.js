// Input States
let accountAge = 14;
let userHasParentalConsent = false;
let contentRating = "R-18"; // Options: "G", "PG", "R-18"
let profileType = "Kids Profile"; // Options: "Adult Profile", "Kids Profile"

// Comprehensive condition maps
let isChild = accountAge < 13;
let isTeenager = accountAge >= 13 && accountAge < 18;
let isAdult = accountAge >= 18;
let isRestrictedContent = contentRating === "R-18";

// Exhaustive step-by-step permission check
if (isAdult && profileType === "Adult Profile") {
    console.log("Gatekeeper Status: Access granted. Full media library unlocked.");
} 
else if (isAdult && profileType === "Kids Profile") {
    if (isRestrictedContent) {
        console.log("Gatekeeper Status: Blocked. You are an adult, but using a restricted Kids Profile.");
    } else {
        console.log("Gatekeeper Status: Allowed. Safe general content loading on Kids Profile.");
    }
} 
else if (isTeenager && userHasParentalConsent) {
    if (profileType === "Adult Profile") {
        console.log("Gatekeeper Status: Access granted via verified parental override.");
    } else {
        console.log("Gatekeeper Status: Restricted. Switch to primary profile to apply parental bypass.");
    }
} 
else if (isTeenager && !userHasParentalConsent) {
    if (isRestrictedContent) {
        console.log("Gatekeeper Status: Strictly Blocked. Teenager profile lacks parental authorization flags.");
    } else {
        console.log("Gatekeeper Status: Access Granted. General/PG catalog curated for viewing.");
    }
} 
else if (isChild) {
    if (isRestrictedContent || profileType === "Adult Profile") {
        console.log("Gatekeeper Status: Access Denied. Automated safety protocols triggered for child account.");
    } else {
        console.log("Gatekeeper Status: Access Granted. Strictly child-safe media playlist loading.");
    }
} 
else {
    console.log("System Warning: Invalid age or profile configurations detected.");
}
