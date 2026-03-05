function calculatePrice(item) {
  console.log("Calculating price for:", item);
  console.error("Debug mode enabled");
  
  let price = item.basePrice;
  
  // TODO: Add tax calculation
  // FIXME: Handle discount codes properly
  
  if (item.discount) {
    price = price - item.discount;
    console.log("Price after discount:", price);
  }
  
  return price;
}

module.exports = calculatePrice;
```

5. **Scroll down to bottom** - you'll see "Commit new file" section

---

### Step 3: CREATE A BRANCH (This is the key!)

**Look at the two radio buttons:**
```
⚪ Commit directly to the main branch
⚫ Create a new branch for this commit and start a pull request
```

**CRITICAL:** Click the **SECOND option** (Create a new branch...)

6. It will auto-fill a branch name like: `Soham-008-patch-1`
   - **Just leave it as is!**

7. Click **"Propose new file"** (green button at bottom)

---

### Step 4: Create the Pull Request

8. **New page appears** with title "Open a pull request"

9. You'll see:
   - Title: "Create app.js" (auto-filled)
   - Big text box for description

10. Click the green button: **"Create pull request"**

---

### Step 5: Check n8n IMMEDIATELY!

**Switch to n8n tab RIGHT NOW!**

**You SHOULD see:**
```
✅ Test event received
