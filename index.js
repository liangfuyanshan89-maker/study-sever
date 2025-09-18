const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/checkSub", (req, res) => {
  const userId = req.query.userId || "unknown";
  res.json({ userId, active: true });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
