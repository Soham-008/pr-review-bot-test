function calculateTotal(items) {
  console.log("Starting calculation");
  console.error("Debug mode active");
  console.warn("Warning message");
  
  let total = 0;
  
  // TODO: Add tax calculation
  // FIXME: Handle edge cases
  // TODO: Add validation
  
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
    console.log("Adding item:", items[i]);
  }
  
  return total;
}

module.exports = calculateTotal;
```

5. **Scroll down** → Select **"Create a new branch"** ⚫ (IMPORTANT!)

6. **Click "Propose new file"**

7. **Click "Create pull request"** (green button)

8. **Click "Create pull request"** again

9. **Wait 10 seconds** ⏱️

10. **Refresh the PR page** 🔄

---

## 🤖 What You Should See:

**Your bot should post a comment like:**
```
🤖 Automated Code Review

⚠️ Debug Statements Detected
- bot-test.js: Found 4 console statement(s)

💡 Consider removing debug statements before merging

📝 TODO Comments Added
- bot-test.js: Found 3 TODO/FIXME comment(s)

📌 Make sure TODOs are tracked

---

Total Issues Found: 2

These are suggestions, not blocking merge ✨

Automated by n8n PR Review Bot 🤖
