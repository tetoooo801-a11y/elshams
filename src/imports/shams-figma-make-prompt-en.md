# Figma Make Prompt — Shams Transport Company Website

Paste this entire prompt into Figma Make.

---

## General Brief

Design a full website for an Egyptian freight & logistics company called **"Shams Transport"** (شركة الشمس للنقل). The company was founded in 2002 in 10th of Ramadan City, and serves large industrial factories and companies across Egypt and the Arab region. Design direction: **calm Editorial Premium**, not a loud generic logistics template. Primary language is Arabic (RTL) — all page copy is written in Arabic below and must be displayed exactly as given, right-to-left. The site will later become bilingual (AR/EN), so build the layout so it can be mirrored easily.

Strict rules:
- **Soft rounded corners everywhere** (cards, images, buttons, containers). No sharp 90° corners anywhere.
- **No emoji anywhere** on the site.
- Images must feel real/human (photography-led), never AI-generic or illustrated.
- Direction: RTL, `dir="rtl"`, `lang="ar"`.

---

## Design Tokens

### Colors
| Name | Value | Usage |
|---|---|---|
| Ink (primary dark) | `#0E2233` | dark backgrounds, headline text, sticky header |
| Ink Soft | `#173C52` | gradients with Ink |
| Ink Softer | `#20495F` | gradients with Ink |
| Sun (primary accent) | `#E7A73C` | brand accent ("sun") — buttons, icons, highlights |
| Sun Deep | `#C9862A` | hover state for Sun |
| Sand (base background) | `#F4EFE4` | overall page background |
| Paper | `#FBF8F3` | light card backgrounds on top of Sand |
| Steel | `#5C6773` | muted secondary text |
| Text | `#1B2A35` | primary body text |
| Text Soft | `#4B5A64` | secondary paragraph text |
| Line | `#E3DBC9` | subtle borders |

### Typography (Google Fonts)
- **Display / Headlines**: `Noto Serif Arabic` — weights 400/600/700/900
- **Body**: `IBM Plex Sans Arabic` — weights 300/400/500/600/700
- **Numbers / Stats (Mono)**: `IBM Plex Mono` — weights 500/600, used with `direction:ltr` for numerals even inside Arabic context

### Radius Scale
- Large: `32px` (hero, large images)
- Medium: `22px` (cards, mid-size images)
- Small: `14px`
- Pills/buttons: `100px` (fully rounded)

### Container
- Max content width: `1240px` with `32px` side padding

---

## Page Structure — Homepage (top to bottom)

### 1) Header (Sticky)
- Translucent cream background with light blur on scroll (`backdrop-filter: blur(10px)`), thin bottom border in Line color.
- Left (in RTL, visually on the right): circular logo mark (radial gradient from Sun to Sun Deep) + company name "الشمس للنقل" in Noto Serif Arabic.
- Center nav links: الرئيسية / من نحن / خدماتنا / الأسطول / الأخبار / تواصل معنا (Home / About / Services / Fleet / News / Contact).
- Right: ghost button "تتبع الشحنة" ("Track Shipment" — placeholder for a future feature) + dark primary button "اطلب عرض سعر" ("Request a Quote").

### 2) Hero
- Full-width background photo with large rounded corners (32px), min-height 640px, dark gradient overlay bottom-to-top (from `rgba(11,25,38,.92)` at bottom to transparent at top) to keep white text legible.
- **Giant transparent "الشمس" typographic background** sitting behind the hero card, Noto Serif Arabic weight 900, ~200px size, 6% opacity, partially visible around/behind the card — this is a key signature element of the design.
- All hero content is **center-aligned** (not left-aligned):
  - Top badge, translucent with a thin border: "شريكك الموثوق منذ 2002" ("Your trusted partner since 2002") + small Sun-colored dot — **gently floats up and down continuously** (vertical float animation, ~10px range, 4.5s duration, infinite loop).
  - Large H1 (60px), white: "نُحرّك **بضاعتك** برًا وبحرًا وجوًا" ("We move your goods by land, sea, and air") — the word "بضاعتك" (your goods) is Sun-colored.
  - Description paragraph (18px): "أكثر من 20 عامًا من الخبرة في خدمة المصانع والشركات الصناعية، بأسطول متكامل وتغطية تمتد من العاشر من رمضان إلى دول الخليج والعالم العربي." ("Over 20 years of experience serving factories and industrial companies, with a complete fleet and coverage extending from 10th of Ramadan City to the Gulf and the Arab world.")
  - Two side-by-side buttons: "اطلب عرض سعر" (dark primary) and "تعرف على خدماتنا" (ghost/translucent over the image).
- **Floating stats card** overlapping the bottom of the hero image (~40px overlap), Paper background, 4 columns separated by thin dividers:
  - `20+` سنة خبرة (years of experience)
  - `03` أنواع شحن متكاملة (integrated shipping modes)
  - `06+` دول تغطية إقليمية (regional coverage countries)
  - `24/7` دعم ومتابعة (support & tracking)
  (numbers in IBM Plex Mono)

### 3) Mode Strip (three transport modes)
Directly below the hero, 3 horizontal cards side by side (circular icon + title + one-line description):
- **نقل بري** (Land Transport) — "تغطية داخل مصر والدول العربية" (Coverage within Egypt and Arab countries)
- **شحن بحري** (Sea Freight) — "حاويات 20 و40 قدم لكل الموانئ" (20ft and 40ft containers to all ports)
- **شحن جوي** (Air Freight) — "سرعة تسليم حسب أولوية الشحنة" (Delivery speed based on shipment priority)

Each card lifts 5px on hover.

### 4) Trust Strip
Thin horizontal bar, dark Ink background, light text, 4 items separated by dividers:
`ISO` معايير جودة وسلامة معتمدة (certified quality & safety standards) · `24/7` متابعة ودعم مستمر (continuous tracking & support) · `+20` عامًا في خدمة الصناعة المصرية (years serving Egyptian industry) · `EG · GCC` تغطية محلية وإقليمية (local & regional coverage)

### 5) About
Two-column layout (image 45% / text 55%):
- **Image side**: real photo (port/containers), large rounded corners, 4:5 aspect ratio. **A floating circular badge** overlaps the bottom corner of the image (Sun background, 6px Sand-colored border): "20+" large in Mono font + "سنة خبرة في خدمة الصناعة" ("years of experience serving industry") — this badge also gently floats continuously (~10px range, 5.5s duration).
- **Text side**, center-aligned:
  - Eyebrow: "من نحن" (About Us)
  - Heading: "شراكة صناعية ممتدة منذ العاشر من رمضان" ("An industrial partnership spanning since 10th of Ramadan City")
  - Two paragraphs: "تأسست شركة الشمس للنقل عام 2002 في قلب المنطقة الصناعية بمدينة العاشر من رمضان، لتصبح على مدار أكثر من عقدين شريكًا موثوقًا للمصانع والشركات التجارية داخل مصر وخارجها." / "نجمع بين السرعة والالتزام والأمان، مع أسطول متنوع وحلول نقل مرنة تناسب كل نوع من أنواع البضائع."
  - 3 rounded pills: "تأسست 2002" (Founded 2002) / "العاشر من رمضان" (10th of Ramadan City) / "نقل بري وبحري وجوي" (Land, sea & air transport)

### 6) Services
Center-aligned section head (eyebrow + heading "حلول نقل متكاملة تحت سقف واحد" ["Integrated transport solutions under one roof"] + description), followed by a grid of cards (3×2 or similar), each with a thin-line circular icon on dark Ink background, a title, and a two-line description. Full copy for all seven services:

1. **النقل البري الدولي** (International Land Transport) — "تغطية شاملة داخل مصر وخارجها بأسطول شاحنات متنوع يلبي كل أنواع الحمولات." (Full coverage inside and outside Egypt with a diverse truck fleet for all cargo types.)
2. **الشحن البحري** (Sea Freight) — "حاويات 20 و40 قدم بجاهزية كاملة للشحن الدولي عبر أهم الموانئ." (20ft and 40ft containers, fully ready for international shipping through major ports.)
3. **الشحن الجوي** (Air Freight) — "حلول شحن جوي سريعة تناسب طبيعة وكمية الشحنة وأولوية التسليم." (Fast air freight solutions matching shipment nature, volume, and delivery priority.)
4. **الوساطة اللوجستية** (Freight Forwarding) — "احترافية تربط بين مختلف وسائل النقل بسلاسة." (Professional service seamlessly connecting different transport modes.)
5. **إدارة سلاسل الإمداد** (Supply Chain Management) — "إدارة كاملة لعمليات النقل تضمن كفاءة تشغيلية والتزامًا بالمواعيد." (Complete transport operations management ensuring efficiency and on-time delivery.)
6. **نقل المواد والمنتجات** (Raw Materials & Products Transport) — "نقل آمن للمواد الخام والمنتجات النهائية بمعايير سلامة صارمة." (Safe transport of raw materials and finished products under strict safety standards.)
7. **خدمات النقل للمصانع والشركات** (Transport Services for Factories & Companies) — add as a seventh card in the same style.

Section background: Paper (slightly lighter than the overall Sand background).

### 7) Fleet
Center-aligned section head ("أسطول مجهز لكل نوع حمولة" — "A fleet equipped for every cargo type"), followed by a 4-item grid of real photos (3:4 aspect ratio), rounded corners, dark bottom gradient with a white text label over each:
- حاويات جافة (Dry containers)
- حاويات مبردة (Refrigerated containers)
- سيارات فلات بيد (Flatbed trucks)
- دبابات النقل (Tankers)

On hover: image scales up ~6% inside the card, and the card itself lifts 6px.

### 8) Sectors
Dark Ink background. Light, center-aligned section head ("ثقة صناعات متنوعة" — "Trusted by diverse industries"). A row of rounded chips (small Sun-colored dot + text):
الصناعات الغذائية (Food industries) · الصناعات الدوائية (Pharmaceutical industries) · الصناعات الهندسية (Engineering industries) · الصناعات الكيماوية (Chemical industries) · الاستيراد والتصدير (Import/export) · التوزيع واللوجستيات (Distribution & logistics)

### 9) Marquee (scrolling ribbon)
A thin strip with an Ink background, text scrolling horizontally in an infinite loop (CSS `translateX` animation, ~26s duration, linear), repeating:
"الشمس للنقل · نقل بري · شحن بحري · شحن جوي · خدمات لوجستية ·" (bold serif font, small Sun-colored dot separating each word).

### 10) Clients
Center-aligned section, eyebrow "عملاؤنا" (Our Clients), a row of text wordmarks (serif) for: **EIPICO · Farm Frites · Americana · ICAPP** — 70% opacity, going to 100% on hover.

### 11) CTA Banner
Very large rounded card, gradient background from Sun to Sun Deep, dark Ink text: "جاهز تنقل بضاعتك معانا؟" ("Ready to move your goods with us?") + dark primary button "اطلب عرض سعر الآن" ("Request a quote now").

### 12) Footer
Ink background, 4 columns: (logo + short description) / (company links) / (address: "العاشر من رمضان – الشرقية، منطقة الأردنية – سوق الجملة") / (social links). Bottom line: copyright + "تصميم وتطوير Merge".

---

## Motion / Interaction Spec

1. **Scroll Reveal**: every section and every card inside a grid animates in with a fade + slide-up (from `opacity:0, translateY(28px)` to normal) as it enters the viewport while scrolling. Items within the same grid appear in a staggered sequence (~0.1s delay between each), not all at once.
2. **Card Hover**: all cards (services, fleet, mode strip, sector chips, pills) lift up by 4–6px on hover with a smooth ~0.3s transition; some also shift their border color to Sun Deep.
3. **Continuous Idle Float**: the hero's top badge and the circular stat badge in the About section gently float up and down continuously (not scroll-triggered), with a small range (~10px) and a 4.5–5.5s duration per cycle.
4. **Marquee**: constant-speed infinite horizontal scroll, does not pause on hover.

---

## Reference Note
The overall structure is partly inspired by the "Logiver" template's layout conventions (icon strip below the hero, large typographic text behind the hero, circular stat badge, marquee strip) **but without** its loud orange/red color scheme and without its sharp corners — both fully replaced by the color system and rounded-corner system defined above.

---
---

# Remaining Site Pages (5 additional pages)

This is **not a one-page site** — it is a **full 6-page multi-page site**: Home (above) + About + Services + Fleet + News + Contact. Every page uses the **exact same Design Tokens** (colors, fonts, radius system, header and footer), and the same motion spec (Scroll Reveal + Hover + Idle Float) described above. The header and footer are identical/persistent across all pages.

Every inner page below needs a **simple Page Header** at the top (not a big hero like the homepage): a shorter bar (~280px height) in the same style as the hero image (real photo + dark overlay + rounded corners), containing the page name in large white serif type + a small breadcrumb ("الرئيسية / [page name]").

---

## "من نحن" (About) Page

1. **Page Header**: "من نحن" (About Us) + a port/factory background photo.
2. **Detailed founding story**: same About copy as the homepage, expanded with an extra paragraph on the company's 20-year journey.
3. **Vision & Mission** (two side-by-side columns, each its own rounded card):
   - **Vision (الرؤية)**: "أن نكون من الشركات الرائدة في مجال النقل والخدمات اللوجستية في مصر والشرق الأوسط، من خلال تقديم خدمات عالية الجودة تعتمد على الكفاءة التشغيلية والابتكار والالتزام بمواعيد التسليم." (To be among the leading companies in transport and logistics in Egypt and the Middle East, through high-quality services built on operational efficiency, innovation, and on-time delivery commitment.)
   - **Mission (الرسالة)**: "نسعى إلى توفير حلول نقل وشحن متكاملة تساعد عملاءنا على إدارة سلاسل الإمداد بكفاءة، مع الحفاظ على أعلى معايير السلامة والجودة والاحترافية في جميع مراحل النقل." (We strive to provide integrated transport and shipping solutions that help our clients efficiently manage their supply chains, while maintaining the highest standards of safety, quality, and professionalism at every stage.)
4. **Why Shams (detailed)**: a grid of 8 points, each with a small icon:
   Over 20 years of experience · Integrated transport & shipping solutions · Local & regional coverage · A diverse fleet meeting varied needs · Commitment to delivery deadlines · Competitive pricing · Ongoing customer service & support · Experience serving factories and major companies.
5. **Coverage / Service Area**: a section with a dark Ink background featuring a visual (a simplified map or geographic dot pattern) showing coverage of all of Egypt plus Gulf and Arab countries, with the text: "تنطلق عمليات الشركة من مقرها بمدينة العاشر من رمضان، وتغطي خدماتها جميع أنحاء جمهورية مصر العربية، بالإضافة إلى الشحن الإقليمي والدولي لجميع دول الخليج والدول العربية."
6. **Clients strip** (same as homepage) but here paired with contextual copy: "شركاء نجاحنا على مدار أكثر من 20 عام" ("Our partners in success for over 20 years") instead of being a plain passing logo row.
7. **CTA Banner** (same design as homepage).

---

## "خدماتنا" (Services) Page — the largest page

1. **Page Header**: "خدماتنا" (Our Services).
2. **Short centered intro**: a sentence on the philosophy of integrated service.
3. **7 independent sections, one per service** (alternating image-right/text-left and text-right/image-left layout to break monotony), each containing: a large icon, a title, an expanded description paragraph (3–4 lines instead of the homepage's shorter two lines), and a bulleted list of sub-features:
   1. **النقل البري الدولي** (International Land Transport) — transport within and outside Egypt.
   2. **الشحن البحري** (Sea Freight) — 20ft and 40ft containers.
   3. **الشحن الجوي** (Air Freight) — based on shipment nature and volume.
   4. **الوساطة اللوجستية** (Freight Forwarding).
   5. **إدارة عمليات النقل وسلاسل الإمداد** (Transport & Supply Chain Operations Management).
   6. **نقل المواد الخام والمنتجات النهائية** (Raw Materials & Finished Products Transport).
   7. **خدمات النقل للمصانع والشركات والمؤسسات** (Transport Services for Factories, Companies & Institutions).
4. **Closing CTA Banner**.

---

## "الأسطول" (Fleet) Page

1. **Page Header**: "الأسطول" (Our Fleet).
2. **Centered intro** on the philosophy of matching the right vehicle to each cargo type.
3. **Full grid of every vehicle type** (larger cards than the homepage version, each with photo + title + short description):
   - شاحنات الحاويات الجافة (Dry container trucks)
   - شاحنات الحاويات المبردة (Refrigerated container trucks)
   - سيارات النقل المسطح — Flatbed (Flatbed transport vehicles)
   - سيارات النقل ذات الجوانب (Side-loader transport vehicles)
   - سيارات الجامبو (Jumbo vehicles)
   - الدبابات — Tankers (Tanker vehicles)
4. **CTA Banner**.

---

## "الأخبار" (News) Page

1. **Page Header**: "الأخبار" (News).
2. **Grid of article cards** (3 columns — image + date + title + two-line excerpt + "اقرأ المزيد" [Read more] link), rounded corners, hover lift.
3. **Pagination or a "تحميل المزيد" (Load more) button** below the grid.
4. **A single Article Template page** must also be designed separately: large rounded cover image, title, date + reading time, article body at a comfortable reading width (max-width ~720px), and a small "related articles" grid at the end.

---

## "تواصل معنا" (Contact) Page

1. **Page Header**: "تواصل معنا" (Contact Us).
2. **Two-column layout**: one side a contact form (name, company, email, phone number, service type dropdown, message, submit button), the other side direct contact info (full address: "مدينة العاشر من رمضان – محافظة الشرقية، منطقة الأردنية – مجمع أسواق الجملة، المرحلة الرابعة – الدور الثاني – مكتب رقم 16") + an embedded rounded-corner location map.
3. **No CTA banner at the bottom of this page** — the page itself is the CTA.

---

## Summary for the Figma Make designer
Build **6 separate pages** (Home / About / Services / Fleet / News / Contact) sharing the same persistent header and footer, the same Design Tokens, and the same motion system, with a consistent Page Header style across the five inner pages. The header nav links (Home, About, Services, Fleet, News, Contact) must actually link between these pages.
