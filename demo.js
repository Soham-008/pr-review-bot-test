const data = $input.first().json;

// Start building the comment
let comment = '## 🤖 Automated Code Review\n\n';

let hasIssues = false;

// Console/Print statements
if (data.console_issues && data.console_issues.length > 0) {
  hasIssues = true;
  comment += '### ⚠️ Debug Statements Detected\n\n';
  data.console_issues.forEach(issue => {
    comment += `- **\`${issue.file}\`**: ${issue.message}\n`;
  });
  comment += '\n💡 *Consider removing debug statements before merging*\n\n';
}

// TODO comments
if (data.todo_issues && data.todo_issues.length > 0) {
  hasIssues = true;
  comment += '### 📝 TODO Comments Added\n\n';
  data.todo_issues.forEach(issue => {
    comment += `- **\`${issue.file}\`**: ${issue.message}\n`;
  });
  comment += '\n📌 *Make sure TODOs are tracked*\n\n';
}

// Large files
if (data.size_issues && data.size_issues.length > 0) {
  hasIssues = true;
  comment += '### 📏 Large Changes Detected\n\n';
  data.size_issues.forEach(issue => {
    comment += `- **\`${issue.file}\`**: ${issue.message}\n`;
  });
  comment += '\n🔍 *Consider breaking into smaller PRs for easier review*\n\n';
}

// Summary
if (!hasIssues) {
  comment += '✅ **All automated checks passed!** 🎉\n\n';
  comment += 'Great job keeping the code clean!\n';
} else {
  comment += '---\n\n';
  comment += `**Total Issues Found:** ${data.total_issues}\n\n`;
  comment += '*These are suggestions, not blocking merge* ✨\n';
}

comment += '\n\n*Automated by n8n PR Review Bot* 🤖';

return [{ json: { comment: comment } }];
```

3. **Rename:** `Generate Comment`
4. **Execute** - you should see formatted markdown comment

---

### Step 2.14: Post Comment to GitHub

1. **From "Generate Comment"** → Add **HTTP Request** node
2. **Configure:**
   - **Method:** `POST`
   - **URL:** 
```
     {{ $('Extract PR Info').item.json.pr_comments_url }}
