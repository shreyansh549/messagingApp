export async function checkAuth(req, res, next) {
  if (!req.user) {
    res.status(401).json({ message: "Unautorized" });
    return;
  }

  res.status(200).json(req.user);
}
