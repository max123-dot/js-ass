// Input States
let orderTotal = 35000; 
let loyaltyStatus = "Silver"; // Options: "Premium", "Silver", "Regular"
let hasCouponCode = true;

// Pre-evaluated boolean flags
let isBigSpender = orderTotal >= 50000;
let isPremiumMember = loyaltyStatus === "Premium";
let isSilverMember = loyaltyStatus === "Silver";

// Deeply split logic simulating step-by-step state verification
if (isBigSpender && isPremiumMember) {
    if (hasCouponCode) {
        console.log("VIP Treatment: 20% Automated Big Spender Discount + 10% Stacked Coupon Applied!");
    } else {
        console.log("VIP Treatment: 20% Automated Big Spender Discount Applied!");
    }
} 
else if (isBigSpender && !isPremiumMember) {
    if (isSilverMember) {
        console.log("Silver Spender Tier: 15% Discount Applied Based on Basket Size.");
    } else {
        console.log("Standard Big Spender Tier: 10% Volume Discount Applied.");
    }
} 
else if (!isBigSpender && isPremiumMember) {
    if (hasCouponCode) {
        console.log("Premium Member Perk: Flat 15% Loyalty Discount Active + Waived Delivery Fee.");
    } else {
        console.log("Premium Member Perk: Flat 10% Loyalty Discount Active.");
    }
} 
else if (!isBigSpender && isSilverMember) {
    if (hasCouponCode) {
        console.log("Silver Member Promotion: Coupon code validated for a 5% discount.");
    } else {
        console.log("Silver Member Notice: Spend ₦" + (50000 - orderTotal) + " more to unlock Big Spender perks.");
    }
} 
else if (!isBigSpender && !isPremiumMember && !isSilverMember) {
    if (hasCouponCode) {
        console.log("Guest Checkout: Base 5% Coupon discount deducted from total.");
    } else {
        console.log("Standard Checkout: Regular pricing applies. No active offers met.");
    }
} 
else {
    console.log("Critical Error: Checkout state could not be resolved.");
}
