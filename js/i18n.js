// Calmino i18n — Hebrew / English
const translations = {
  he: {
    nav_features: "הבעיה?", nav_tools: "הגישה שלנו", nav_security: "אבטחה", nav_pricing: "תמחור", nav_cta: "הורדת האפליקציה",
    hero_badge: "זמין עכשיו ב-App Store",
    hero_h1a: "העולם של הילד.", hero_h1b: "בכף היד.",
    hero_sub: "מעקב חכם, תובנות לאורך זמן ושיתוף פשוט בין הורים, מטפלים ובייביסיטרים.",
    hero_btn: "הורדה חינם", hero_btn2: "ראה תוכניות",
    hero_note: "ללא כרטיס אשראי · התקנה מהירה · iOS & Android",
    stat1_num: "15+", stat1_label: "כלי מעקב מובנים",
    stat2_num: "WHO", stat2_label: "עקומות גדילה מבוססות תקן",
    stat3_num: "256", stat3_label: "הצפנה מלאה",
    stat4_num: "∞", stat4_label: "סנכרון משפחתי בזמן אמת",
    prob_label: "הבעיה", prob_title: "הורות לא צריכה להרגיש ככה.",
    prob_sub: "90% מההורים מנהלים את הכל דרך הזיכרון, העומס המנטלי הוא אמיתי.",
    prob1_q: "מתי בפעם האחרונה...?", prob1_d: "כשהכל מתנהל בראש ובהודעות קשה לעקוב, לזכור ולהיות בטוח מה קרה ומה נדרש לעשות.",
    prob2_q: "בלי שיתוף מידע אין תיאום אמיתי", prob2_d: "חוסר בשיתוף מידע מוביל לאיבוד נתונים, חוסר בתיאום ולאי שקיפות מלאה בין בני המשפחה וגורמים מקצועיים.",
    prob3_q: "חוסר בעקביות מוביל לחוסר בתובנות.", prob3_d: "היסטוריה ונתונים הם חלק בלתי נפרד מזיהוי מגמות וקבלת תובנות במיוחד שזה נוגע ליקר לנו מכל.",
    prob4_q: "על מי אני יכול/ה לסמוך?", prob4_d: "החיפוש אחר בייביסיטר רווי בחששות לגבי אמינות המועמדים ובקושי לסנכרן דרישות ולו\"ז, ריכוז התהליך במקום אחד מאפשר סינון מקצועי והעברת מידע קריטי שמעניקים שקט",
    pos_label: "הגישה שלנו", pos_title: "פלטפורמה אחת. שקט נפשי מוחלט.",
    pos_sub: "Calmino מרכזת את כל מה שצריך — מעקב רפואי, ניהול משפחה, ומאגר בייביסיטרים — במקום אחד, עם עיצוב שמרגיש כמו חלק מהמכשיר.",
    pos1_h: "מעקב חכם", pos1_p: "שינה, האכלה, החתלה, תרופות, חיסונים, מעקב שיניים ורגעים קסומים הכל במקום אחד עם סנכרון מיידי בין כל בני המשפחה.",
    pos2_h: "תובנות מבוססות נתונים", pos2_p: "דוחות שבועיים וחודשיים, עקומות גדילה לפי ארגון הבריאות העולמי (WHO), ניתוח דפוסי שינה והאכלה וייצוא PDF לרופא בלחיצה.",
    pos3_h: "מאגר בייביסיטרים", pos3_p: "מצאו בייביסיטרים לפי מיקום וזמינות, עיינו בפרופילים עם ניסיון והמלצות מהורים, ובחרו את הבייביסיטר המתאימה ביותר.",
    ft1_label: "טיימרים חכמים", ft1_title_a: "שליטה מלאה.", ft1_title_b: "מהמסך הנעול.",
    ft1_sub: "הפעילו טיימר — ותראו אותו על מסך הנעילה עם Live Activities של iOS. שמירה אוטומטית, סנכרון בין הורים, והיסטוריה מלאה.",
    ft1_li1: "טיימרים להאכלה (חזה / בקבוק / שאיבה), שינה, החתלה, תרופות",
    ft1_li2: "Live Activities — שליטה ישירות ממסך הנעילה ומ-Dynamic Island",
    ft1_li3: "סנכרון מיידי בין בני משפחה ומטפלים עם הרשאות מותאמות",
    ft1_li4: "היסטוריה מלאה עם Timeline יומי — אוטומטית",
    la_name: "Calmino", la_now: "עכשיו", la_title: "האכלה פעילה", la_start: "התחלה 14:22",
    ft2_label: "תובנות מבוססות נתונים", ft2_title_a: "מתרגמים נתונים לשקט שלכם.", ft2_title_b: "",
    ft2_sub: "",
    ft2_li1: "דוחות ופילוח נתונים בהתאמה לתקופת זמן.",
    ft2_li2: "ניתוח דפוסים, תובנות מבוססות נתונים ושיקוף יעדים.",
    ft2_li3: "ייצוא PDF לשימוש ולשיקוף גורמים מקצועיים.",
    ft2_li4: "מדדי גדילה המבוססים על תקני ארגון הבריאות העולמי.",
    rpt_title: "סיכום שבועי", rpt_period: "19–25 ינואר 2026",
    rpt_legend_sleep: "שינה", rpt_legend_feed: "האכלות",
    rpt_insight_tag: "תובנה", rpt_insight: "ממוצע שינה השבוע: 13.2 שעות ליום — עלייה של 8% לעומת השבוע הקודם. דפוס השינה מתייצב.",
    ft3_label: "מאגר בייביסיטרים", ft3_title_a: "למצוא מישהו/י", ft3_title_b: "שאפשר לסמוך עליו.",
    ft3_sub: "מאגר בייביסיטרים מובנה באפליקציה — עם אימות זהות, ביקורות מהורים אמיתיים, צ'אט פנימי, ומעקב הזמנות. בלי ווטסאפ. בלי מזל.",
    ft3_li1: "פרופילים מאומתים עם תעודת זהות, ניסיון ואישורים",
    ft3_li2: "ביקורות ודירוגים מהורים אמיתיים",
    ft3_li3: "צ'אט מובנה, הזמנה ישירה ומעקב הזמנות",
    ft3_new1: "מציאת בייביסיטר במהירות לפי מיקום וזמינות.",
    ft3_new2: "פרופילים מאומתים עם המלצות אמיתיות.",
    ft3_new3: "התאמה טובה יותר לצרכי הילד.",
    ft3_new4: "היכרות מוקדמת עם המטפלת לפני ההגעה.",
    ft3_new5: "עדכונים בזמן אמת במהלך השמירה.",
    ft3_new6: "מאגר בייביסיטרים קבוע למשפחה.",
    ft3_new7: "שקיפות מלאה בפרופילים, בדירוגים ובהמלצות.",
    ft3_new8: "חיבור הבייביסיטר לעולם המידע של הילד.",
    ft3_li4: "התאמה לפי מיקום, זמינות וניסיון",
    sitter_nearby: "בייביסיטרים בקרבתך",
    sitter1: "שירה כ.", sitter1_meta: "4.9 · 3 שנות ניסיון", sitter1_badge: "מאומתת ✓",
    sitter2: "דניאל מ.", sitter2_meta: "4.8 · 5 שנות ניסיון", sitter2_badge: "מאומת ✓",
    sitter3: "נועה ר.", sitter3_meta: "4.7 · 2 שנות ניסיון", sitter3_badge: "מאומתת ✓",
    tools_label: "מעקב חכם", tools_title_a: "מעל 10 כלים מובנים שכל הורה צריך.", tools_title_b: "",
    tools_sub: "",
    tool1_h: "מעקב חיסונים", tool1_p: "תיעוד חיסונים לפי גיל, תזכורות למועדים הקרובים והיסטוריה מלאה.",
    tool2_h: "תוספי תזונה", tool2_p: "מעקב יומי אחר ויטמין D, ברזל ותוספים נוספים עם תזכורות מותאמות.",
    tool3_h: "מעקב שיניים", tool3_p: "מפה ויזואלית אינטראקטיבית לתיעוד בקיעת שיניים לפי תאריך.",
    tool4_h: "רעש לבן", tool4_p: "מגוון צלילי רקע מרגיעים מובנים להירדמות קלה ושקטה יותר.",
    tool5_h: "רגעים קסומים", tool5_p: "שמרו רגעים מיוחדים באלבום דיגיטלי מותאם אישית שגדל יחד עם התינוק.",
    tool6_h: "שינה", tool6_p: "תיעוד שעות שינה ויקיצות, ניתוח דפוסי שינה וגרפים לזיהוי מגמות.",
    tool7_h: "האכלה", tool7_p: "מעקב האכלות חזה, בקבוק ושאיבה עם טיימר חכם, היסטוריה וסיכום יומי.",
    tool8_h: "מעקב גדילה", tool8_p: "מדידות משקל, גובה והיקף ראש עם עקומות גדילה לפי ארגון הבריאות העולמי (WHO).",
    sec_label: "אבטחה ופרטיות", sec_title: "המידע שלכם. רק שלכם.",
    sec_sub: "המידע שלכם נשמר באופן מוצפן ומאובטח בטכנולוגיות ההגנה המתקדמות ביותר.",
    sec1_h: "נעילה ביומטרית", sec1_p: "גישה לאפליקציה מאובטחת באמצעות זיהוי ביומטרי מובנה.<br>Face ID ו-Touch ID מאפשרים פתיחה מהירה תוך שמירה על פרטיות מלאה.",
    sec2_h: "הצפנה מלאה", sec2_p: "כל המידע מוצפן הצפנה מלאה ונגיש רק לכם ולמי שבחרתם להעניק לו גישה",
    sec3_h: "אפס מכירת מידע", sec3_p: "המידע שלכם נשמר לשימושכם בלבד בתוך המערכת.<br>אנחנו לא מוכרים, משתפים או עושים בו שימוש מחוץ לפעילות האפליקציה.",
    sec4_h: "תאימות GDPR ו-COPPA", sec4_p: "המידע מאובטח בהתאם לתקני פרטיות בינלאומיים מחמירים, כולל תקנת הגנת המידע הכללית (GDPR) וחוק הגנת פרטיות הילדים ברשת (COPPA).",
    test_label: "מה הורים אומרים", test_title: "בנוי על ידי הורים. להורים.",
    test1_text: "״מאז שהתחלנו להשתמש ב-Calmino, אני ובעלי סוף סוף מסונכרנים. הוא רואה בדיוק מתי האכלתי, ואני רואה מתי הוא החליף. זה שינה לנו את הלילות.״",
    test1_name: "מור ש.", test1_role: "אמא לתינוק בן 4 חודשים",
    test2_text: "״הגרפים של עקומות הגדילה הם מדהימים. הגעתי לביקור אצל רופא הילדים עם PDF מוכן — הרופא התלהב ושאל מאיפה זה.״",
    test2_name: "אלון ד.", test2_role: "אבא לילדה בת שנה",
    test3_text: "״מצאתי בייביסיטר דרך האפליקציה תוך 10 דקות. מאומתת, עם ביקורות מעולות, והצ'אט המובנה חסך לי עשרות הודעות בוואטסאפ.״",
    test3_name: "דנה כ.", test3_role: "אמא לשני ילדים",
    price_label: "Premium", price_title_a: "חינם להתחיל.", price_title_b: "פרימיום למי שרוצה הכל.",
    price_sub: "הגרסה החינמית מכסה את כל הבסיס. הפרימיום פותח את כל היכולות — מדוחות מתקדמים ועד מאגר בייביסיטרים מלא.",
    free_name: "חינם", free_price: "₪0", free_desc: "לתמיד. בלי הגבלות זמן.",
    free_f1: "טיימרים חכמים (האכלה, שינה, חיתול)", free_f2: "Live Activities על מסך הנעילה",
    free_f3: "סנכרון בין הורים", free_f4: "היסטוריית מעקב בסיסית", free_f5: "מעקב חיסונים ותוספים",
    plus_name: "Calmino+", plus_price_num: "₪29", plus_price_per: "/ חודש",
    plus_desc: "הכל ללא הגבלה. ניסיון חינם ל-7 ימים.", plus_badge: "הכי פופולרי",
    plus_f1: "כל הפיצ'רים של החינמי", plus_f2: "דוחות ותובנות מתקדמים", plus_f3: "עקומות גדילה WHO מלאות",
    plus_f4: "מאגר בייביסיטרים מלא + צ'אט", plus_f5: "ייצוא PDF לרופא", plus_f6: "נעילה ביומטרית (Face ID)",
    plus_f7: "רגעים קסומים ואלבום דיגיטלי", plus_f8: "תמיכה עדיפה",
    cta_title_a: "פחות עומס.", cta_title_b: "יותר הורות.",
    cta_sub: "הצטרפו לאלפי הורים שכבר עברו לניהול חכם. חינם. פשוט. מיידי.",
    cta_btn: "הורדה מ-App Store",
    footer_terms: "תנאי שימוש", footer_privacy: "מדיניות פרטיות", footer_contact: "צרו קשר",
    footer_copy: "© 2026 Calmino. כל הזכויות שמורות."
  },
  en: {
    nav_features: "Features", nav_tools: "Tools", nav_security: "Security", nav_pricing: "Pricing", nav_cta: "Download App",
    hero_badge: "Available now on the App Store",
    hero_h1a: "Modern Parenting.", hero_h1b: "Without the Overload.",
    hero_sub: "Smart tools for daily parenting management, smart daily documentation, accurate developmental tracking, and connection to quality babysitters - true peace of mind starts with control.",
    hero_btn: "Download Free", hero_btn2: "See Plans",
    hero_note: "No credit card · Install in 30 seconds · iOS & Android",
    stat1_num: "15+", stat1_label: "Built-in Tracking Tools",
    stat2_num: "WHO", stat2_label: "Standard-Based Growth Curves",
    stat3_num: "256", stat3_label: "AES-bit Encryption",
    stat4_num: "∞", stat4_label: "Real-Time Family Sync",
    prob_label: "THE PROBLEM", prob_title: "Parenting shouldn't feel like this.",
    prob_sub: "90% of parents manage everything from memory. Notes, WhatsApp, spreadsheets. The mental load is real.",
    prob1_q: '"When did he last eat?"', prob1_d: "After a broken night — everything's blurry. Amount, time, type. You can't remember it all.",
    prob2_q: '"Without shared documentation - there is no real coordination"', prob2_d: "Babysitter groups, parent groups, endless coordination. Exhausting logistics.",
    prob3_q: '"Lack of continuity leads to lack of insights."', prob3_d: "Without history and lacking insights - difficulty in making decisions.",
    prob4_q: '"Who can I really trust?"', prob4_d: "Searching for a babysitter is an exhausting process — no clear supply, no transparency, and no real certainty.",
    pos_label: "OUR APPROACH", pos_title: "One platform. Complete peace of mind.",
    pos_sub: "Calmino centralizes everything — medical tracking, family management, and a babysitter marketplace — in one place, designed to feel native.",
    pos1_h: "Smart Tracking", pos1_p: "Timers for feeding, sleep, diapers, medications & vaccines. With iOS Live Activities on your lock screen.",
    pos2_h: "Data-Driven Insights", pos2_p: "Graphs, weekly reports, WHO growth curves. Insights to identify patterns and make informed decisions.",
    pos3_h: "Babysitter Marketplace", pos3_p: "Verified profiles, real parent reviews, built-in chat & direct booking. All inside the app.",
    ft1_label: "SMART TIMERS", ft1_title_a: "Full control.", ft1_title_b: "From the lock screen.",
    ft1_sub: "Start a timer — and see it on your lock screen with iOS Live Activities. Auto-save, parent sync, and full history.",
    ft1_li1: "Timers for feeding (breast / bottle / pump), sleep, diapers, medications",
    ft1_li2: "Live Activities — control directly from lock screen & Dynamic Island",
    ft1_li3: "Instant sync between family members & caregivers with role-based access",
    ft1_li4: "Complete history with Daily Timeline — automatic",
    la_name: "Calmino", la_now: "Now", la_title: "Feeding Active", la_start: "Started 14:22",
    ft2_label: "REPORTS & INSIGHTS", ft2_title_a: "Not just data.", ft2_title_b: "Real understanding.",
    ft2_sub: "Visual graphs, WHO growth curves, weekly summaries, and pattern analysis. Export PDF to your pediatrician in one tap.",
    ft2_li1: "Automatic weekly & monthly reports with trend analysis",
    ft2_li2: "Growth curves (weight, height, head circumference) per WHO standards",
    ft2_li3: "Data-driven insights — not gut feelings",
    ft2_li4: "Detailed PDF export for sharing with your pediatrician",
    rpt_title: "Weekly Summary", rpt_period: "Jan 19–25, 2026",
    rpt_legend_sleep: "Sleep", rpt_legend_feed: "Feeds",
    rpt_insight_tag: "Insight", rpt_insight: "Average sleep this week: 13.2 hours/day — up 8% from last week. Sleep pattern stabilizing.",
    ft3_label: "BABYSITTER MARKETPLACE", ft3_title_a: "Find someone", ft3_title_b: "you can trust.",
    ft3_sub: "Built-in babysitter marketplace — with ID verification, real parent reviews, in-app chat, and booking management. No WhatsApp. No luck.",
    ft3_li1: "Verified profiles with ID, experience & certifications",
    ft3_li2: "Reviews & ratings from real parents",
    ft3_li3: "Built-in chat, direct booking & order tracking",
    ft3_li4: "Match by location, availability & experience",
    sitter_nearby: "Babysitters near you",
    sitter1: "Shira K.", sitter1_meta: "4.9 · 3 years exp", sitter1_badge: "Verified ✓",
    sitter2: "Daniel M.", sitter2_meta: "4.8 · 5 years exp", sitter2_badge: "Verified ✓",
    sitter3: "Noa R.", sitter3_meta: "4.7 · 2 years exp", sitter3_badge: "Verified ✓",
    tools_label: "TOOLBOX", tools_title_a: "10+ more built-in tools", tools_title_b: "every parent needs.",
    tools_sub: "Calmino isn't just a tracking app. It's a complete platform that eliminates overload — from smart reminders to vaccine tracking to sleep melodies.",
    tool1_h: "Vaccine Tracker", tool1_p: "Full age-based vaccine list. Mark what's done and when.",
    tool2_h: "Supplements", tool2_p: "Track Vitamin D, iron & more. Daily reminders so you never miss.",
    tool3_h: "Teeth Tracker", tool3_p: "Document every tooth eruption. Visual intuitive dental map.",
    tool4_h: "White Noise", tool4_p: "Built-in soothing sounds and white noise. No extra app needed.",
    tool5_h: "Magic Moments", tool5_p: "Capture photos & milestones. A digital album that grows with your baby.",
    tool6_h: "Night Light", tool6_p: "Digital night light with calming colors — right from your screen.",
    tool7_h: "Emergency Mode", tool7_p: "Quick-dial to clinic, ambulance & pediatrician. When every second counts.",
    tool8_h: "Checklist", tool8_p: "Custom lists — track changes, visits, or anything you need.",
    sec_label: "SECURITY & PRIVACY", sec_title: "Your data. Only yours.",
    sec_sub: "Privacy isn't a feature — it's a design principle. Your family's data is protected with the highest standards.",
    sec1_h: "Biometric Lock", sec1_p: "Built-in Face ID & Touch ID. Only you can access the app and view your data.",
    sec2_h: "End-to-End Encryption", sec2_p: "All data encrypted in transit (TLS 1.2+) and at rest. Firebase Security Rules ensure only you access your information.",
    sec3_h: "Zero Data Sales", sec3_p: "We never sell, rent, trade, or use your data for advertising. Ever. Period.",
    sec4_h: "GDPR & COPPA Compliant", sec4_p: "Full compliance with international privacy standards and Israeli privacy law. Delete your data in one tap.",
    test_label: "WHAT PARENTS SAY", test_title: "Built by parents. For parents.",
    test1_text: '"Since we started using Calmino, my partner and I are finally in sync. He sees exactly when I fed, and I see when he changed. It transformed our nights."',
    test1_name: "Mor S.", test1_role: "Mom of a 4-month-old",
    test2_text: '"The growth curve charts are incredible. I showed up at the pediatrician with a ready PDF — the doctor was amazed and asked where it came from."',
    test2_name: "Alon D.", test2_role: "Dad of a 1-year-old girl",
    test3_text: '"I found a babysitter through the app in 10 minutes. Verified, with great reviews, and the built-in chat saved me dozens of WhatsApp messages."',
    test3_name: "Dana K.", test3_role: "Mom of two kids",
    price_label: "Premium", price_title_a: "Free to start.", price_title_b: "Premium for everything.",
    price_sub: "The free plan covers the basics. Premium unlocks all capabilities — from advanced reports to the full babysitter marketplace.",
    free_name: "Free", free_price: "$0", free_desc: "Forever. No time limits.",
    free_f1: "Smart timers (feeding, sleep, diapers)", free_f2: "Live Activities on lock screen",
    free_f3: "Parent sync", free_f4: "Basic tracking history", free_f5: "Vaccine & supplement tracking",
    plus_name: "Calmino+", plus_price_num: "$7.99", plus_price_per: "/ month",
    plus_desc: "Everything unlimited. 7-day free trial.", plus_badge: "Most Popular",
    plus_f1: "All free features included", plus_f2: "Advanced reports & insights", plus_f3: "Full WHO growth curves",
    plus_f4: "Full babysitter marketplace + chat", plus_f5: "PDF export for doctor", plus_f6: "Biometric lock (Face ID)",
    plus_f7: "Magic Moments & digital album", plus_f8: "Priority support",
    cta_title_a: "Less overload.", cta_title_b: "More parenting.",
    cta_sub: "Join thousands of parents who switched to smart management. Free. Simple. Instant.",
    cta_btn: "Download from App Store",
    footer_terms: "Terms of Service", footer_privacy: "Privacy Policy", footer_contact: "Contact Us",
    footer_copy: "© 2026 Calmino. All rights reserved."
  }
};

let currentLang = 'he';

function setLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  const dir = lang === 'he' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', dir);
  document.documentElement.setAttribute('lang', lang);
  document.body.setAttribute('dir', dir);

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  // Update data-i18n-html (for innerHTML) — wrap second part in <span> for gradient styling
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const keys = el.getAttribute('data-i18n-html').split('+');
    if (el.tagName === 'H1' && keys.length === 2) {
      el.innerHTML = (t[keys[0].trim()] || keys[0]) + '<br><span>' + (t[keys[1].trim()] || keys[1]) + '</span>';
    } else {
      el.innerHTML = keys.map(k => k.trim() in t ? t[k.trim()] : k).join('<br>');
    }
  });

  // Update badge data attr
  const featuredCard = document.querySelector('.tier-card.featured');
  if (featuredCard) featuredCard.setAttribute('data-badge', t.plus_badge);

  // Toggle active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  localStorage.setItem('calmino-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('calmino-lang');
  if (saved && translations[saved]) setLang(saved);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
  });
});
