// quartz/components/ProjectsGrid.tsx
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { QuartzPluginData } from "../plugins/vfile"

type Options = {
  folderSlug?: string // slug prefix to include, e.g. "projects/"
  defaultImage?: string // used if no image found in frontmatter
}

const imageKeys = ["image", "cover", "banner", "thumbnail"] as const

export default ((opts: Options = {}): QuartzComponent => {
  const {
    folderSlug = "projects/",
    defaultImage = "/static/placeholder.png",
  } = opts

  function ProjectsGrid({ fileData, allPages }: QuartzComponentProps) {
    console.log("Hello!")
    if (fileData.slug !== "projects/index") {
      return null
    }

    const projects = allPages
      .filter((p: QuartzPluginData) => {
        const slug = p.slug ?? ""
        // Typical Quartz slugs look like "projects/foo" (no .md)
        return slug.startsWith(folderSlug)
      })
      .map((p: any) => {
        const fm = p.frontmatter
        const title =
          (typeof fm?.title === "string" && fm?.title.trim()) ||
          (p.slug ? p.slug.split("/").pop() : "Untitled")

        // Try multiple possible frontmatter keys for an image
        let img: string | undefined
        for (const k of imageKeys) {
          const val = (p.frontmatter as Record<string, unknown>)[k]
          if (typeof val === "string" && val.trim()) {
            img = val
            break
          }
        }
        const imgSrc = img ?? defaultImage

        const aria =
          (typeof (fm as Record<string, unknown>).ariaLabel === "string" &&
            (fm as Record<string, string>).ariaLabel.trim()) ||
          `View details about ${title}`

        const altText =
          (typeof (fm as Record<string, unknown>).alt === "string" &&
            (fm as Record<string, string>).alt.trim()) ||
          `Image for ${title}`

        const href = `/${p.slug}` // Quartz routes by slug

        return { title, imgSrc, aria, altText, href }
      })

    if (projects.length === 0) {
      return (
        <div class="obsidian-tile-grid">
          <p style="opacity:.7">No projects found under <code>{folderSlug}</code>.</p>
        </div>
      )
    }

    return (
      <>
        <style>{css}</style>
        <div class="obsidian-tile-grid" role="list">
          {projects.map((proj: any) => (
            <a
              class="internal obsidian-tile"
              href={proj.href}
              aria-label={proj.aria}
              role="listitem"
            >
              <img src={proj.imgSrc} alt={proj.altText} loading="lazy" decoding="async" />
              <div class="obsidian-tile-title">{proj.title}</div>
            </a>
          ))}
        </div>
      </>
    )
  }

  ProjectsGrid.css = css
  return ProjectsGrid
}) satisfies QuartzComponentConstructor

const css = `
.obsidian-tile-grid {
  --tile-size: 300px;
  --tile-gap: 12px;
  --tile-radius: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, var(--tile-size)), 1fr));
  gap: var(--tile-gap);
}
a.internal.obsidian-tile {
  position: relative;
  aspect-ratio: 1 / 1;
  border: 3px solid var(--highlight);
  border-radius: var(--tile-radius);
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .08);
  transition: transform .12s ease, box-shadow .12s ease;
}
.obsidian-tile:focus-visible {
  outline: 2px solid var(--text-accent, #7aa2f7);
  outline-offset: 2px;
}
.obsidian-tile:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, .15);
}
.obsidian-tile img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform .25s ease;
  margin: 0;
}
.obsidian-tile:hover img {
  transform: scale(1.05);
}
.obsidian-tile-title {
  position: absolute;
  inset: 0 auto auto 0;
  right: 0;
  padding: 8px 10px;
  font-size: 1.35rem;
  text-align: center;
  font-weight: 800;
  line-height: 1;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .5);
  background: linear-gradient(180deg, rgba(0,0,0,.9) 0%, rgba(0,0,0,.5) 65%, rgba(0,0,0,.2) 85%, rgba(0,0,0,0) 100%);
  pointer-events: none;
}
`
