import logoUrl from "../imports/logo-02.svg"

export default function LoadingScreen({ visible }: { visible: boolean }) {
  return (
    <div className={`loading-screen${visible ? "" : " loading-screen--out"}`}>
      <div className="loading-logo-wrap">
        <img src={logoUrl} alt="Elshams" className="loading-logo" />
        <div className="loading-lines-wrap">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="loading-line" style={{ animationDelay: `${i * 0.12}s` }} />
          ))}
        </div>
      </div>
    </div>
  )
}
