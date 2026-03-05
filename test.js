console.log("Hello world");
   // TODO: Fix this later
```
   - Scroll down → Select **Create a new branch** → `test-pr`
   - Click **Propose new file**
   - Click **Create pull request**
   - Click **Create pull request** again

2. **Check n8n:**
   - Go back to your n8n tab
   - You should see **"Test Event Received"** ✅
   - Click **Stop Listening**
   - You'll see the webhook data appear

**If it doesn't work:**
- Go to GitHub repo → Settings → Webhooks
- Click your webhook → Scroll to "Recent Deliveries"
- Check if request was sent and response received

---

### Step 2.5: Add Filter Node (Process Only Relevant PRs)

**What this does:** Only trigger on PR open/update events, ignore other GitHub events

1. **Click the "+" on the Webhook node** → Search `IF`
2. Click **IF** node
3. **Configure:**
   - **Conditions:**
     - Click **Add Condition** → **String**
     - **Value 1:** Click field → **Expressions** tab → Type:
```
       {{ $json.action }}
```
     - **Operation:** `Equal to`
     - **Value 2:** Type: `opened`
   
4. **Add second condition (OR logic):**
   - Click **Add Condition** → **String**
   - **Value 1:** 
```
     {{ $json.action }}
```
   - **Operation:** `Equal to`
   - **Value 2:** `synchronize`
   
5. **Mode:** Change to `ANY condition is true` (dropdown at top)

6. Click **Execute Node** to test
   - Should go through "true" path

---

### Step 2.6: Extract PR Information

**What this does:** Gets the PR details we need for the next steps

1. **From IF node "true" output** → Click "+" → Search `Set`
2. Click **Set** node
3. **Configure:**
   - Click **Add Value** → **String**
     - **Name:** `pr_number`
     - **Value:** 
```
       {{ $json.pull_request.number }}
```
   
   - Click **Add Value** → **String**
     - **Name:** `repo_owner`
     - **Value:** 
```
       {{ $json.repository.owner.login }}
```
   
   - Click **Add Value** → **String**
     - **Name:** `repo_name`
     - **Value:** 
```
       {{ $json.repository.name }}
```
   
   - Click **Add Value** → **String**
     - **Name:** `pr_files_url`
     - **Value:** 
```
       {{ $json.pull_request.url }}/files
```
   
   - Click **Add Value** → **String**
     - **Name:** `pr_comments_url`
     - **Value:** 
```
       {{ $json.pull_request.comments_url }}
```

4. **Rename this node:** Click the three dots → **Rename** → `Extract PR Info`

---

### Step 2.7: Add GitHub Credentials

**Before we can call GitHub API, we need to add your token:**

1. **Click on n8n logo** (top left) → **Settings** → **Credentials**
2. Click **+ Add Credential**
3. Search for `GitHub`
4. Click **GitHub API** (not GitHub Trigger)

**Configure:**
5. **Credential Name:** `GitHub Bot Token`
6. **Authentication:** `Access Token`
7. **Access Token:** Paste your token from Step 1.2 (starts with `ghp_...`)
8. Click **Save**

---

### Step 2.8: Fetch PR Files

**What this does:** Gets list of all files changed in the PR

1. **From "Extract PR Info" node** → Click "+" → Search `HTTP Request`
2. Click **HTTP Request** node
3. **Configure:**
   - **Method:** `GET`
   - **URL:** 
```
     {{ $json.pr_files_url }}
