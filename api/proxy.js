export default async function handler(req, res) {
  try {
    const r = await fetch(
      "https://raw.githubusercontent.com/changelog-modul/start/main/start.lua"
    )

    const text = await r.text()

    res.setHeader("Content-Type", "text/plain")
    res.setHeader("Cache-Control", "no-store")
    res.status(200).send(text)

  } catch (e) {
    res.status(500).send("-- Proxy error")
  }
}
