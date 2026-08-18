import { useEffect } from "react"
import { NavLink, useParams } from "react-router-dom"
import { useReveal } from "../hooks/useReveal"
import { articles } from "./News"
import { useLang } from "../context/LangContext"

export default function Article() {
  useReveal()
  const { id } = useParams()
  const { lang } = useLang()
  const isAr = lang === "ar"

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const article = articles.find((a) => a.id === id) ?? articles[0]
  const related = articles.filter((a) => a.id !== article.id).slice(0, 3)

  return (
    <>
      <div className="article-cover">
        <img src={article.img} alt={isAr ? article.alt.ar : article.alt.en} />
        <div className="article-cover-overlay" />
      </div>

      <div className="article-body">
        <div className="news-meta" style={{ marginBottom: 20 }}>
          <NavLink to="/news" style={{ color: "var(--sun-deep)", fontWeight: 600 }}>{isAr ? "الأخبار" : "News"}</NavLink>
          <span className="dot" style={{ background: "var(--line)" }} />
          <span>{isAr ? article.category.ar : article.category.en}</span>
        </div>
        <h1>{isAr ? article.title.ar : article.title.en}</h1>
        <div className="article-meta">
          <span>{isAr ? article.date.ar : article.date.en}</span>
          <span className="dot" style={{ background: "var(--line)", width: 4, height: 4, borderRadius: "50%", display: "inline-block" }} />
          <span>{isAr ? `${article.readTime.ar} للقراءة` : `${article.readTime.en} read`}</span>
        </div>
        <div className="article-content">
          <p>{isAr ? article.excerpt.ar : article.excerpt.en}</p>
          <p>
            {isAr
              ? "تعمل شركة الشمس للنقل منذ تأسيسها عام 2002 على توفير أفضل حلول النقل واللوجستيات لعملائها في مصر والمنطقة العربية، وقد أسهمت هذه الخطوة في تعزيز مكانتها كشريك موثوق في القطاع الصناعي."
              : "Since its founding in 2002, Al-Shams Transport has worked to provide the best transport and logistics solutions for its clients in Egypt and the Arab region, and this step has helped strengthen its position as a trusted partner in the industrial sector."}
          </p>
          <h2>{isAr ? "التفاصيل الكاملة" : "Full Details"}</h2>
          <p>
            {isAr
              ? "تأتي هذه الخطوة في إطار الخطة الاستراتيجية للشركة للتوسع وتعزيز خدماتها، إذ تسعى الشمس للنقل دومًا إلى تقديم أحدث الحلول اللوجستية التي تلبي احتياجات السوق المتنامية."
              : "This step comes as part of the company's strategic plan to expand and enhance its services, as Al-Shams Transport always strives to offer the latest logistics solutions that meet the needs of a growing market."}
          </p>
          <p>
            {isAr
              ? "وقد أكد المسؤولون في الشركة أن هذا التطور يأتي استجابةً لمتطلبات العملاء وتنامي حجم الأعمال، مشيرين إلى أن الشركة ستواصل مسيرتها في الاستثمار وتطوير كوادرها البشرية وأسطولها."
              : "Company officials confirmed that this development comes in response to client demands and the growing volume of business, noting that the company will continue its journey of investment and the development of its human resources and fleet."}
          </p>
        </div>
      </div>

      {/* Related articles */}
      <div className="wrap related-articles">
        <h2>{isAr ? "مقالات ذات صلة" : "Related Articles"}</h2>
        <div className="news-grid reveal-stagger">
          {related.map((a) => (
            <NavLink to={`/news/${a.id}`} className="news-card" key={a.id} style={{ display: "block" }}>
              <div className="news-card-img">
                <img src={a.img} alt={isAr ? a.alt.ar : a.alt.en} />
              </div>
              <div className="news-card-body">
                <div className="news-meta">
                  <span>{isAr ? a.date.ar : a.date.en}</span>
                  <span className="dot" />
                  <span>{isAr ? a.category.ar : a.category.en}</span>
                </div>
                <h3>{isAr ? a.title.ar : a.title.en}</h3>
                <span className="read-more">{isAr ? "اقرأ المزيد ←" : "Read more →"}</span>
              </div>
            </NavLink>
          ))}
        </div>
        <div style={{ height: 80 }} />
      </div>
    </>
  )
}
