import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useReveal } from "../hooks/useReveal"
import { useLang } from "../context/LangContext"
import contactHeaderImg from "../imports/Gemini_Generated_Image_863cds863cds863c-1.jpeg"
import ShimmerText from "../components/ui/shimmer-text"

export default function Contact() {
  useReveal()
  const { lang } = useLang()
  const isAr = lang === "ar"

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <div className="page-header-wrap" style={{ position: "relative" }}>
        <div className="page-header">
          <img src={contactHeaderImg} alt={isAr ? "تواصل معنا" : "Contact Us"} />
          <div className="page-header-overlay" />
          <div className="page-header-content">
            <ShimmerText as="h1" duration={2.2} delay={0.5}>{isAr ? "تواصل معنا" : "Contact Us"}</ShimmerText>
            <div className="breadcrumb">
              <NavLink to="/">{isAr ? "الرئيسية" : "Home"}</NavLink> / {isAr ? "تواصل معنا" : "Contact Us"}
            </div>
          </div>
        </div>
        <div className="page-header-notch">{isAr ? "تواصل معنا" : "Contact Us"}</div>
      </div>

      <section>
        <div className="wrap">
          <div className="section-head reveal" style={{ marginBottom: 48 }}>
            <div className="eyebrow">{isAr ? "نحن هنا" : "We're Here"}</div>
            <ShimmerText as="h2" duration={2} delay={0.3}>{isAr ? "تحدث معنا مباشرةً" : "Talk to Us Directly"}</ShimmerText>
            <p>{isAr ? "فريقنا جاهز للإجابة على جميع استفساراتك وتقديم عروض أسعار مخصصة لاحتياجاتك." : "Our team is ready to answer all your inquiries and provide customized quotes tailored to your needs."}</p>
          </div>
          <div className="contact-grid reveal">
            {/* FORM */}
            <div className="contact-form">
              <h2>{isAr ? "أرسل لنا رسالة" : "Send Us a Message"}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>{isAr ? "الاسم الكامل" : "Full Name"}</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder={isAr ? "أدخل اسمك" : "Enter your name"} />
                  </div>
                  <div className="form-group">
                    <label>{isAr ? "اسم الشركة" : "Company Name"}</label>
                    <input name="company" value={form.company} onChange={handleChange} placeholder={isAr ? "اسم شركتك" : "Your company name"} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>{isAr ? "البريد الإلكتروني" : "Email"}</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="example@company.com" />
                  </div>
                  <div className="form-group">
                    <label>{isAr ? "رقم الهاتف" : "Phone Number"}</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+20 xxx xxx xxxx" />
                  </div>
                </div>
                <div className="form-group">
                  <label>{isAr ? "نوع الخدمة" : "Service Type"}</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">{isAr ? "اختر نوع الخدمة" : "Select a service type"}</option>
                    <option>{isAr ? "نقل بري داخلي" : "Domestic Land Transport"}</option>
                    <option>{isAr ? "نقل بري دولي" : "International Land Transport"}</option>
                    <option>{isAr ? "شحن بحري" : "Sea Freight"}</option>
                    <option>{isAr ? "شحن جوي" : "Air Freight"}</option>
                    <option>{isAr ? "وساطة لوجستية" : "Logistics Brokerage"}</option>
                    <option>{isAr ? "إدارة سلاسل الإمداد" : "Supply Chain Management"}</option>
                    <option>{isAr ? "خدمات مؤسسية" : "Corporate Services"}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>{isAr ? "رسالتك" : "Your Message"}</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder={isAr ? "صف احتياجاتك بالتفصيل..." : "Describe your needs in detail..."} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", padding: "15px 32px", fontSize: 15 }}>
                  {isAr ? "إرسال الطلب" : "Submit Request"}
                </button>
              </form>
            </div>

            {/* INFO */}
            <div className="contact-info">
              <h2>{isAr ? "معلومات التواصل" : "Contact Information"}</h2>
              <p className="desc">{isAr ? "يسعدنا تلقي استفساراتكم على مدار الساعة. تواصلوا معنا عبر أي من الوسائل التالية." : "We're happy to receive your inquiries around the clock. Reach out to us through any of the following channels."}</p>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E7A73C" strokeWidth="1.8">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4>{isAr ? "العنوان" : "Address"}</h4>
                  <p>{isAr ? <>مدينة العاشر من رمضان – محافظة الشرقية<br />منطقة الأردنية – مجمع أسواق الجملة<br />المرحلة الرابعة – الدور الثاني – مكتب رقم 16</> : <>10th of Ramadan City – Sharqia Governorate<br />Al-Ordonia Area – Wholesale Markets Complex<br />Phase Four – Second Floor – Office No. 16</>}</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E7A73C" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07A19.5 19.5 0 014.11 12a19.8 19.8 0 01-3.07-8.67A2 2 0 013.05 1.12h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91A16 16 0 0013 14.82l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4>{isAr ? "الهاتف" : "Phone"}</h4>
                  <p style={{ direction: "ltr", textAlign: "right" }}>+20 55 XXX XXXX</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E7A73C" strokeWidth="1.8">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4>{isAr ? "البريد الإلكتروني" : "Email"}</h4>
                  <p>info@shams-transport.com</p>
                </div>
              </div>

              <div className="map-placeholder">
                <img
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&h=300&fit=crop&auto=format"
                  alt={isAr ? "خريطة" : "Map"}
                />
                <div className="map-overlay">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E7A73C" strokeWidth="1.8">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <p>{isAr ? "العاشر من رمضان – الشرقية" : "10th of Ramadan – Sharqia"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
