import { readdirSync, statSync } from "fs"
import { join } from "path"
import type { SponsorImage } from "./SponsorCarousel"
import { ServicesSectionClient } from "./services-section-client"

function getSponsorImages(): SponsorImage[] {
  const sponsorsRoot = join(process.cwd(), "public", "sponsor-mrtransfer")
  const images: SponsorImage[] = []

  try {
    const sponsorDirs = readdirSync(sponsorsRoot).filter((name) => {
      try {
        return statSync(join(sponsorsRoot, name)).isDirectory() && !name.startsWith(".")
      } catch {
        return false
      }
    })

    for (const sponsorDir of sponsorDirs) {
      const sponsorPath = join(sponsorsRoot, sponsorDir)
      const files = readdirSync(sponsorPath).filter(
        (f) => !f.startsWith(".") && /\.(jpe?g|png|webp|avif|svg)$/i.test(f)
      )

      for (const file of files) {
        const encodedFile = file
          .split("")
          .map((c) => (/[a-zA-Z0-9._~!$&'()*+,;=:@/-]/.test(c) ? c : encodeURIComponent(c)))
          .join("")

        images.push({
          url: `/sponsor-mrtransfer/${sponsorDir}/${encodedFile}`,
          artist: sponsorDir.startsWith("@") ? sponsorDir.slice(1) : sponsorDir,
        })
      }
    }
  } catch (e) {
    console.error("Error reading sponsor images:", e)
  }

  return images
}

export async function ServicesSection() {
  const sponsorImages = getSponsorImages()
  return <ServicesSectionClient sponsorImages={sponsorImages} />
}
