import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// 仮のユーザーごとのサブスク状態
const userSubs: Record<string, boolean> = {
  "tony": true,   // トニー様 → 広告なし
  "test": false,  // testユーザー → 広告あり
};

app.get("/checkSub", (req, res) => {
  const userId = req.query.userId as string;
  const active = userSubs[userId] ?? false;  // デフォルトはfalse
  res.json({ userId, active });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
