export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/changelog-modul/start/main/start.lua",
      {
        headers: {
          "User-Agent": "Vercel-Proxy"
        }
      }
    )

    if (!response.ok) {
      return res.status(500).send("-- Failed to fetch script")
    }

    const text = await response.text()

    res.setHeader("Content-Type", "text/plain")
    res.status(200).send(text)

  } catch (err) {
    res.status(500).send("-- Proxy error")
  }
}
