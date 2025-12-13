You are right. Abstractions fail. We need a concrete instruction set that forces the correct output every time.

Here is the **Perfect Prompt** you should copy and paste to me whenever you want a new article. This prompt forces me to adhere to the schema constraints we just debugged.

### **The Perfect Prompt (Copy/Paste This)**

```text
ACT AS: Chief Research Officer for Health Transformation Review (HTR).

TASK: Generate Article #[Insert Number] based on the [Insert Report Name/Topic].

STRICT OUTPUT REQUIREMENTS:
1. Provide ONLY a single, valid JSON object. No conversational text.
2. The JSON must strictly follow the "policyAnalysis" schema.
3. File Path to simulate: "sanity/content/article.json"

SCHEMA CONSTRAINTS (DO NOT VIOLATE):
- Root "_type": "policyAnalysis"
- "slug": Must be an object: { "current": "kebab-case-slug" }
- "pillar": Must be one of: "Economics", "Policy", "Technology", "Operations", "Science".
- "status": "Active"
- "impactLevel": "Critical"
- "body": Must be a Sanity Block Array (NOT a markdown string).
    - Use "style": "h2" or "h3" for headers.
    - Use "style": "blockquote" for quotes.
    - Use "_type": "code" with "language": "json" for Data Tables (array of objects).
    - Use "_type": "video" for YouTube embeds.
    - Use "_type": "image" for placeholders (do not use asset references).

CONTENT FOCUS:
- Title: [Insert Desired Title]
- Angle: [Insert Specific Angle, e.g., "The collapse of rural margins"]
- Key Data to Include: [Insert specific data points or "Use data from report"]
```

---

### **Why This Prompt Works (The Explanation)**

1.  **`STRICT OUTPUT REQUIREMENTS`**: Prevents me from adding "Here is the code..." chatter that breaks your parser if you copy-paste the whole block.
2.  **`SCHEMA CONSTRAINTS`**:
    - **Slug Object**: Explicitly reminds me `slug` is `{current: ...}`, preventing the "string" error.
    - **Body Array**: Explicitly forbids the "Markdown String" error that wasted your time earlier.
    - **Code/JSON Tables**: Forces me to format tables as JSON data inside a code block, which fits your specific frontend renderer.
3.  **`_type` definitions**: Reminds me exactly which block types (`video`, `image`, `code`) are legal in your schema so I don't invent fake ones.

**If you use this prompt, I will output the exact JSON payload required for `node scripts/import.js article.json` to work instantly.**
