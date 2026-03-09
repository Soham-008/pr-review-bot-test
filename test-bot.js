function calculatePrice(item) {
  console.log("Calculating price");
  console.error("Debug mode");
  
  let price = item.basePrice;
  
  // TODO: Add tax calculation
  // FIXME: Handle discount codes
  
  if (item.discount) {
    price = price - item.discount;
    console.log("Price after discount:", price);
  }
  
  return price;
}

module.exports = calculatePrice;
```

5. **Scroll down to "Commit new file"**
6. **CRITICAL:** Select **"Create a new branch"** (second radio button!)
7. Click **"Propose new file"**
8. Click **"Create pull request"** (green button)
9. Click **"Create pull request"** again

---

## Step 11: Check for Bot Comment

1. **Wait 5-10 seconds**
2. **Refresh the PR page**
3. **Look for bot comment!**

**You should see:**
```
🤖 Automated Code Review

⚠️ Debug Statements Detected
- test-bot.js: Found 3 console statement(s)

💡 Consider removing debug statements before merging

📝 TODO Comments Added
- test-bot.js: Found 2 TODO/FIXME comment(s)

📌 Make sure TODOs are tracked

---

Total Issues Found: 2

These are suggestions, not blocking merge ✨

Automated by n8n PR Review Bot 🤖
