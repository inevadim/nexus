import s from "./PageNotFound.module.scss"

export const PageNotFound = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>404</h1>
      <h2 className={s.subtitle}>Page not found</h2>
    </div>
  )
}
