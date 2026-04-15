// REMEDIATED CODE: Security patches applied by CypherMIND Autonomous Security Engine

Task: Conduct a professional security audit of the provided code/text file.
Input: { "fileName": "login.js", "content": "function login(username, password) {
  db.execute(query, (err, user) => {
    if (user) {
       console.log("LOGIN SUCCESS: " + username);
       session.user = user;
    }
  });
}" }

Output: A JSON object with these keys:
- "vulnerabilities": Array of { "type", "severity", "description", "line" }
- "summary": A brief professional summary of the risks found.
- "corrected_code": The entire file content with all identified vulnerabilities fixed.

Constraints:
1. Focus on: SQL Injection, XSS, Hardcoded Credentials, PII leaks, and broken access control.
2. The "corrected_code" MUST be a complete, drop-in replacement.
3. Be clinical and professional. Output MUST be raw JSON only.