// quartz/components/ProjectsGrid.tsx
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import type { QuartzPluginData } from "../plugins/vfile"

type Options = {
  folderSlug?: string // e.g. "projects/"
  defaultImage?: string // fallback if no image in frontmatter
}

const css = `
.tile-grid {
  --tile-size: 300px;
  --tile-gap: 12px;
  --tile-radius: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, var(--tile-size)), 1fr));
  gap: var(--tile-gap);
  margin-top: 1rem;
}

a.tile {
  position: relative;
  aspect-ratio: 1 / 1;
  border: 3px solid var(--highlight);
  border-radius: var(--tile-radius);
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0,0,0,.08);
  transition: transform .12s ease, box-shadow .12s ease;
}

a.tile:focus-visible {
  outline: 2px solid var(--text-accent, #7aa2f7);
  outline-offset: 2px;
}

a.tile:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0,0,0,.15);
}

a.tile > img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform .25s ease;
  margin: 0;
}

a.tile:hover > img {
  transform: scale(1.05);
}

.tile-title {
  position: absolute;
  inset: 0 auto auto 0;
  right: 0;
  padding: 8px 10px;
  font-size: 1.35rem;
  font-weight: 800;
  line-height: 1;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0,0,0,.5);
  background: linear-gradient(180deg, rgba(0,0,0,.9) 0%, rgba(0,0,0,.5) 65%, rgba(0,0,0,.2) 85%, rgba(0,0,0,0) 100%);
  pointer-events: none;
}
`

export default ((opts: Options = {}): QuartzComponent => {
  const folder = (opts.folderSlug ?? "projects/").endsWith("/")
    ? (opts.folderSlug ?? "projects/")
    : (opts.folderSlug ?? "projects/") + "/"
  const indexSlug = `${folder}index`
  const defaultImage = opts.defaultImage ?? ""

  console.log(`Index: ${indexSlug}`)

  function strFromFM(fm: QuartzPluginData["frontmatter"] | undefined, key: string): string | undefined {
    const v = (fm as Record<string, unknown> | undefined)?.[key]
    return typeof v === "string" && v.trim() ? v.trim() : undefined
  }

  function ProjectsGrid({ fileData, allFiles }: QuartzComponentProps) {
    if ((fileData.slug ?? "") !== indexSlug) return null

    const pages = allFiles ?? []

    const projects = pages
      .filter((p) => {
        const slug = p.slug ?? ""
        return slug.startsWith(folder) && slug !== indexSlug && !slug.endsWith("/index")
      })
      .map((p) => {
        const slug = p.slug ?? ""
        const fm = p.frontmatter

        const title =
          strFromFM(fm, "title") ||
          (slug ? slug.split("/").pop()! : "Untitled")

        const imgSrc =
          ["image", "cover", "banner", "thumbnail"]
            .map((k) => strFromFM(fm, k))
            .find(Boolean) ||
          defaultImage

        const aria = strFromFM(fm, "ariaLabel") || `View details about ${title}`
        const altText = strFromFM(fm, "alt") || `Image for ${title}`
        const href = `/${slug}`

        return { title, imgSrc, aria, altText, href }
      })
      .sort((a, b) => a.title.localeCompare(b.title))

    if (projects.length === 0) {
      return (
        <>
          <style>{css}</style>
          <div class="tile-grid">
            <p style="opacity:.7">No projects found under <code>{folder}</code>.</p>
          </div>
        </>
      )
    }

    return (
      <>
        <style>{css}</style>
        <div class="tile-grid" role="list">
          {projects.map(({ href, aria, imgSrc, altText, title }) => (
            <a
              key={href}
              class="tile"
              href={href}
              aria-label={aria}
              role="listitem"
            >
              <img src={imgSrc} alt={altText} loading="lazy" decoding="async" />
              <div class="tile-title">{title}</div>
            </a>
          ))}
        </div>
      </>
    )
  }

  ;(ProjectsGrid as any).css = css
  return ProjectsGrid
}) satisfies QuartzComponentConstructor
