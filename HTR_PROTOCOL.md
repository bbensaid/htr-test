Here is the **HTR Content Protocol**. This is the "Contract."

Save this as **`HTR_PROTOCOL.md`** in your root folder.

Whenever you want me to generate an article, you will simply say: **"Generate Article \#[X] following the Protocol."** I will strictly adhere to the JSON schema defined below.

---

# HTR Content Protocol (v1.0)

**Objective:** Generate zero-error JSON payloads for the `policyAnalysis` schema that import directly via `scripts/import.js`.

---

## 1\. The Output Rules (AI Instructions)

The AI must generate a **single JSON object** adhering to these strict constraints:

- **File Name:** `sanity/content/article.json`
- **Root Type:** `"_type": "policyAnalysis"`
- **Slug:** Must be an object: `"slug": { "current": "kebab-case-string" }`
- **Pillar:** Single String. **Allowed Values:** `"Policy"`, `"Economics"`, `"Technology"`, `"Operations"`, `"Science"`.
- **Status:** Single String. **Allowed Values:** `"Active"`, `"Proposed"`, `"In Committee"`.
- **Impact Level:** Single String. **Allowed Values:** `"Critical"`, `"High"`, `"Medium"`.
- **Body Content:** Must be a **Portable Text Array** (Sanity Blocks). **NO Markdown strings.**

---

## 2\. The Content Block Formatting

The `body` array can only contain these specific block structures:

### **A. Standard Text (Paragraphs)**

```json
{
  "_type": "block",
  "_key": "unique_id",
  "style": "normal",
  "children": [
    {
      "_type": "span",
      "_key": "span_id",
      "text": "Text content here.",
      "marks": []
    }
  ],
  "markDefs": []
}
```

- **Bold Text:** Add `"strong"` to `marks`.
- **Italic Text:** Add `"em"` to `marks`.

### **B. Headers (H2 or H3 only)**

- **Style:** `"h2"` or `"h3"`. (Do **NOT** use h1 or h4).

<!-- end list -->

```json
{
  "_type": "block",
  "_key": "header_id",
  "style": "h2",
  "children": [
    { "_type": "span", "_key": "span_id", "text": "Section Title", "marks": [] }
  ]
}
```

### **C. Quotes (Blockquote)**

- **Style:** `"blockquote"`.
- **Marks:** Use schema colors: `"highlight-policy"`, `"highlight-economics"`, `"highlight-tech"`.

<!-- end list -->

```json
{
  "_type": "block",
  "_key": "quote_id",
  "style": "blockquote",
  "children": [
    {
      "_type": "span",
      "_key": "span_id",
      "text": "“Quote text here.”",
      "marks": ["highlight-economics"]
    }
  ]
}
```

### **D. Data Tables (Code Block)**

- **Format:** JSON Array of Objects stringified inside the `code` field.
- **Language:** `"json"`.

<!-- end list -->

```json
{
  "_type": "code",
  "_key": "table_id",
  "language": "json",
  "code": "[{\"Metric\": \"Revenue\", \"Growth\": \"+10%\"}, {\"Metric\": \"Cost\", \"Growth\": \"+5%\"}]"
}
```

### **E. Images (Placeholder)**

- **Note:** Do not include `asset` reference unless a valid ID exists. Use for structure only.

<!-- end list -->

```json
{
  "_type": "image",
  "_key": "img_id",
  "caption": "Figure 1: Description of the chart.",
  "alt": "Alt text for accessibility"
}
```

### **F. Videos (YouTube/Vimeo)**

```json
{
  "_type": "video",
  "_key": "vid_id",
  "url": "https://www.youtube.com/watch?v=VIDEO_ID",
  "caption": "Video Title"
}
```

---

## 3\. The Execution Steps (User)

**1. Generate Content**
Ask the AI: _"Generate Article \#[X] following the Protocol."_

**2. Save File**
Copy the JSON output and overwrite **`sanity/content/article.json`**.

**3. Run Script**
Execute the import script from the project root:

```bash
node scripts/import.js article.json
```

---

**Are we agreed on this Protocol? If so, I am ready to generate Article \#2.**
