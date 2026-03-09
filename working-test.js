function testBot() {
  console.log("Testing the bot!");
  console.error("Debug output");
  console.warn("Another debug line");
  
  // TODO: Add error handling
  // FIXME: Validate inputs
  
  return true;
}
```

5. Scroll down → **Select "Create a new branch"** ⚫ (CRITICAL!)

6. Click **"Propose new file"**

7. Click **"Create pull request"** (green button)

8. Click **"Create pull request"** again

---

## Step 3: Wait & Check GitHub

**After creating the PR:**

1. **Wait 10-15 seconds** ⏱️
2. **Refresh the PR page** (press F5)
3. **Look for a bot comment!**

**You should see:**
```
🤖 Automated Code Review

⚠️ Debug Statements Detected
- working-test.js: Found 3 console statement(s)

📝 TODO Comments Added
- working-test.js: Found 2 TODO/FIXME comment(s)

...
