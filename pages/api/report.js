export default async function reportAPI(req, res) {
  try {
    let params = {
      username: "Monotone Report",
      avatar_url: "",
      content: JSON.stringify(req.body)
    };
    fetch(process.env.DISCORD_HOOK,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(params),
      }
    ).then(() => {
      res.status(200).json({
        message: "reported Post",
      });
    });
  } catch (err) {
      console.log(err)
    res.status(500).json({
      message: err.message,
    });
  }
}
