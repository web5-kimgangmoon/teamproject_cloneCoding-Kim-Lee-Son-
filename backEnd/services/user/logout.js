export default async (req, res) => {
  try {
    await res.cookie("user", "", {
      maxAge: 0,
      signed: true,
    });
    await res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};
