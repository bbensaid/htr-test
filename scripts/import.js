// scripts/import.js
const { createClient } = require("next-sanity");
const path = require("path");
const fs = require("fs");

// Load env
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

if (!process.env.SANITY_WRITE_TOKEN) {
  console.error("❌ ERROR: SANITY_WRITE_TOKEN is missing.");
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  token: process.env.SANITY_WRITE_TOKEN,
  apiVersion: "2023-10-01",
  useCdn: false,
});

// 1. GET FILE NAME FROM COMMAND LINE
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error(
    "❌ Usage Error. Correct command: node scripts/import.js <filename.json>"
  );
  process.exit(1);
}

const fileName = args[0];
const filePath = path.resolve(process.cwd(), fileName);

async function runImport() {
  try {
    // 2. READ THE CONTENT FILE
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    const rawData = fs.readFileSync(filePath, "utf8");
    const articleData = JSON.parse(rawData);

    // 3. VALIDATE CRITICAL FIELDS
    if (!articleData.title || !articleData.body) {
      throw new Error("Invalid JSON: Missing 'title' or 'body'.");
    }

    console.log(`🚀 Importing: "${articleData.title}"...`);

    // 4. PUBLISH TO SANITY
    const result = await client.create({
      _type: "policyAnalysis", // The schema type
      ...articleData,
    });

    console.log(`✅ Success! Article Live. ID: ${result._id}`);
  } catch (err) {
    console.error("❌ Import Failed:", err.message);
  }
}

runImport();
