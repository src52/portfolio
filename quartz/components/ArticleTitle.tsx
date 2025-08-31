import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { Date, getDate } from "./Date"

const ArticleTitle: QuartzComponent = ({ cfg, fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.navTitle ?? fileData.frontmatter?.title

  if (!title) return null

  const slug = fileData.slug ?? ""
  const isBlogPost =
    slug.startsWith("blog/") &&
    slug !== "blog/" &&
    slug !== "blog/index"
  const dateEl =
    isBlogPost && fileData.dates ? (
      <em style="font-weight:normal;;"> -  <Date date={getDate(cfg, fileData)!} locale={cfg.locale} />
      </em>
    ) : null

  return (
    <h1 class={classNames(displayClass, "article-title")}>
      {title}
      {dateEl}
    </h1>
  )
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 2.5rem 0;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
