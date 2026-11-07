// TODO(client): courses, sessions, events and student voices are demo content, replace with real details before launch.

const en = {
  nav: {
    about: "About",
    courses: "Courses",
    sessions: "Sessions",
    founder: "Founder",
    faq: "FAQ",
    events: "Events",
    gallery: "Gallery",
    contact: "Contact",
    join: "Join a session",
  },
  hero: {
    title: "Yoga for health, peace and harmony",
    sub: "Bangladesh Yoga Foundation teaches yoga through open-air sessions, beginner courses and live online classes.",
    cta: "Join a session",
    cta2: "See courses",
  },
  about: {
    label: "About",
    title: "A foundation built to bring yoga into everyday life in Bangladesh",
    body: "Yoga is more than exercise. It is a daily practice for the body, the breath and the mind. The foundation gives people in Bangladesh a place to learn it properly, practise it together and carry it home.",
    pillars: [
      { t: "Health", d: "Strength, flexibility and rest for the body" },
      { t: "Peace", d: "Breath and stillness for a quieter mind" },
      {
        t: "Harmony",
        d: "Practice that connects people to each other and to nature",
      },
    ],
  },
  now: {
    label: "What we do now",
    title: "Four ways to practise with us",
    items: [
      { t: "Open-air sessions", d: "Group practice in parks at sunrise" },
      {
        t: "Beginner courses",
        d: "Step-by-step programs for first-time students",
      },
      { t: "Live online classes", d: "Join from home, anywhere in Bangladesh" },
      {
        t: "Community programs",
        d: "Workshops for schools, offices and neighbourhoods",
      },
    ],
  },
  courses: {
    label: "Courses",
    title: "Courses for every stage",
    cta: "Ask about this course",
    items: [
      {
        t: "Yoga Foundations",
        level: "Beginner",
        len: "8 weeks",
        d: "Basic postures, breathing and alignment, taught slowly and safely.",
      },
      {
        t: "Daily Practice",
        level: "All levels",
        len: "12 weeks",
        d: "Build a morning routine with sun salutations and standing sequences.",
      },
      {
        t: "Breath and Stillness",
        level: "All levels",
        len: "6 weeks",
        d: "Pranayama and seated meditation for a calmer, steadier mind.",
      },
    ],
  },
  sessions: {
    label: "Sessions",
    title: "Where and when we practise",
    tabs: [
      {
        k: "Open air",
        place: "City parks, Dhaka",
        rows: [
          ["Friday", "6:00 am", "All levels"],
          ["Saturday", "6:00 am", "Beginners"],
        ],
      },
      {
        k: "Studio",
        place: "Community hall",
        rows: [
          ["Sunday", "7:00 am", "All levels"],
          ["Tuesday", "6:30 pm", "Beginners"],
        ],
      },
      {
        k: "Online",
        place: "Live, from your home",
        rows: [
          ["Monday", "7:00 pm", "All levels"],
          ["Thursday", "7:00 pm", "All levels"],
        ],
      },
    ],
  },
  events: {
    label: "Events",
    title: "Coming up",
    cta: "Reserve a spot",
    items: [
      {
        day: "12",
        mon: "Dec",
        t: "Winter sunrise yoga",
        d: "Open-air group practice for all levels",
        where: "City park, Dhaka · 6:30 am",
      },
      {
        day: "20",
        mon: "Dec",
        t: "First steps in yoga",
        d: "A half-day workshop for complete beginners",
        where: "Community hall · 9:00 am",
      },
      {
        day: "03",
        mon: "Jan",
        t: "Breath and stillness evening",
        d: "Guided pranayama and silent sitting, live online",
        where: "Online · 7:30 pm",
      },
    ],
  },
  voices: {
    label: "Student voices",
    title: "What students say",
    items: [
      {
        q: "I came for my back pain and stayed for the mornings. The park sessions are the calmest part of my week.",
        n: "Nusrat",
        r: "Student, Dhaka",
      },
      {
        q: "I had never done yoga before. The beginner course went slowly enough that I never felt behind.",
        n: "Rafiq",
        r: "Office worker",
      },
      {
        q: "The online class fits around my evenings, and the breathing practice helps me sleep.",
        n: "Farzana",
        r: "Retired teacher",
      },
    ],
  },
  coursesPage: {
    title: "Courses",
    intro:
      "Three courses, taught in small groups. Start with Foundations if yoga is new to you.",
    learn: "What you will learn",
    who: "Who it is for",
    when: "When",
    cta: "Ask about this course",
    items: [
      {
        learn: [
          "Standing and seated postures, one step at a time",
          "Breathing basics and body awareness",
          "Alignment cues so you can practise safely",
        ],
        who: "Anyone starting yoga, at any age",
        when: "Saturdays, 6:00 am, open air",
      },
      {
        learn: [
          "Sun salutations (Surya Namaskar)",
          "Standing sequences for strength and balance",
          "A 20 minute routine you can repeat at home",
        ],
        who: "Students who finished Foundations, or who already practise a little",
        when: "Fridays, 6:00 am and Sundays, 7:00 am",
      },
      {
        learn: [
          "Pranayama, built up slowly",
          "Seated meditation for 10 to 20 minutes",
          "Ways to bring stillness into a busy day",
        ],
        who: "Everyone, no flexibility needed",
        when: "Thursdays, 7:00 pm, online",
      },
    ],
  },
  gallery: {
    title: "Gallery",
    intro: "Moments from our sessions",
    close: "Close",
    captions: [
      "Open-air practice at sunrise",
      "Downward dog in the park",
      "Standing together by the sea",
      "Stillness at golden hour",
      "Reaching toward the light",
      "Evening silhouette",
      "A quiet pose on the rock",
    ],
  },
  contact: {
    title: "Contact",
    intro:
      "Tell us what you would like to join and we will reply with the next session near you.",
    name: "Your name",
    phone: "Phone",
    interest: "I am interested in",
    message: "Message (optional)",
    send: "Send email",
    note: "This opens your email app with the message ready to send.",
    subject: "Session enquiry",
    where: "Where we practise",
    whereBody:
      "City parks and a community hall in Dhaka, and live online classes for anyone in Bangladesh.",
    msg: "Hello, I would like to join:",
  },
  founder: {
    label: "Founder",
    name: "Kazi Mahtab Shuman",
    body: "Kazi Mahtab Shuman is the founder of Bangladesh Yoga Foundation. He completed Inner Engineering, the program offered by Sadhguru, and took part in the International Day of Yoga 2026 live stream organised by MDNIY, the Ministry of Ayush and Habuild.",
    creds: [
      { t: "Inner Engineering", d: "Completed, program offered by Sadhguru" },
      {
        t: "Promise of Yoga365",
        d: "Participant, most viewers for a yoga live stream on YouTube, 14 June 2026",
      },
    ],
    cert: "Certificate of participation",
  },
  faq: {
    label: "Questions",
    title: "Before you join",
    items: [
      {
        q: "Do I need experience?",
        a: "No. Beginner sessions and the Foundations course start from the basics.",
      },
      {
        q: "What should I wear and bring?",
        a: "Comfortable clothes, a mat and water. Open-air sessions also suit a light towel.",
      },
      {
        q: "Can I join online?",
        a: "Yes. Live online classes are open to anyone in Bangladesh with an internet connection.",
      },
      {
        q: "How do I join?",
        a: "Send us a message and we will tell you about the next session near you.",
      },
    ],
  },
  join: {
    title: "Come to the next session",
    body: "Message us and we will tell you where it is.",
    cta: "Send us a message",
  },
// TODO(client): policy text is a plain template, have it reviewed against how the foundation really works before launch.
  privacy: {
    title: "Privacy policy",
    updated: "Last updated: November 2026",
    sections: [
      { h: "What we collect", p: "When you write to us through the contact form, we receive the name, phone number and message you type. Your message is sent from your own email app, so the website itself does not store it." },
      { h: "How we use it", p: "We use your details only to reply to you, to tell you about the session or course you asked about, and to run our classes safely. We do not sell or share your details with anyone else." },
      { h: "Cookies and storage", p: "The website does not use tracking or advertising cookies. It saves only your language choice in your own browser." },
      { h: "Health information", p: "If you tell us about an injury or a health condition so that we can guide you safely, we keep that information private and use it only for your practice." },
      { h: "Your choices", p: "You can ask us at any time to see, correct or delete the details we hold about you. Contact us using the details in the footer." },
    ],
  },
  refund: {
    title: "Refund policy",
    updated: "Last updated: November 2026",
    sections: [
      { h: "Before a course starts", p: "If you cancel at least 3 days before a course begins, we refund the full fee." },
      { h: "After a course starts", p: "If you leave within the first week, we refund the fee for the remaining weeks. After the first week, fees are not refunded, but you may move to a later course." },
      { h: "If we cancel", p: "If we cancel or reschedule a session or course, you can choose a full refund or a place in the new date." },
      { h: "Free sessions", p: "Open-air community sessions are free, so no refund applies." },
      { h: "How to ask", p: "Contact us using the details in the footer, with your name and the course you joined. We reply within a few days and pay refunds back by the method you used to pay." },
    ],
  },
  footer: {
    tag: "Yoga for health, peace & harmony",
    credit: "Photos from Unsplash by",
    privacy: "Privacy policy",
    refund: "Refund policy",
    contact: "Contact",
    follow: "Follow us",
  },
};

const bn: typeof en = {
  nav: {
    about: "আমাদের কথা",
    courses: "কোর্স",
    sessions: "সেশন",
    founder: "প্রতিষ্ঠাতা",
    faq: "প্রশ্নোত্তর",
    events: "অনুষ্ঠান",
    gallery: "গ্যালারি",
    contact: "যোগাযোগ",
    join: "সেশনে যোগ দিন",
  },
  hero: {
    title: "স্বাস্থ্য, শান্তি ও সম্প্রীতির জন্য যোগ",
    sub: "বাংলাদেশ যোগ ফাউন্ডেশন খোলা আকাশের সেশন, নতুনদের কোর্স ও অনলাইন লাইভ ক্লাসের মাধ্যমে যোগ শেখায়।",
    cta: "সেশনে যোগ দিন",
    cta2: "কোর্স দেখুন",
  },
  about: {
    label: "আমাদের কথা",
    title: "বাংলাদেশের প্রতিদিনের জীবনে যোগকে পৌঁছে দিতে একটি ফাউন্ডেশন",
    body: "যোগ শুধু ব্যায়াম নয়। এটি শরীর, শ্বাস ও মনের জন্য একটি নিত্য অনুশীলন। ফাউন্ডেশন বাংলাদেশের মানুষকে যোগ সঠিকভাবে শেখার, একসঙ্গে অনুশীলন করার এবং ঘরে নিয়ে যাওয়ার সুযোগ দেয়।",
    pillars: [
      { t: "স্বাস্থ্য", d: "শরীরের শক্তি, নমনীয়তা ও বিশ্রাম" },
      { t: "শান্তি", d: "শান্ত মনের জন্য শ্বাস ও স্থিরতা" },
      {
        t: "সম্প্রীতি",
        d: "যে অনুশীলন মানুষকে একে অপরের ও প্রকৃতির সঙ্গে যুক্ত করে",
      },
    ],
  },
  now: {
    label: "এখন আমরা যা করছি",
    title: "আমাদের সঙ্গে অনুশীলনের চারটি উপায়",
    items: [
      { t: "খোলা আকাশের সেশন", d: "সূর্যোদয়ের সময় পার্কে দলগত অনুশীলন" },
      {
        t: "নতুনদের কোর্স",
        d: "প্রথমবার যোগ শেখা মানুষের জন্য ধাপে ধাপে কর্মসূচি",
      },
      {
        t: "অনলাইন লাইভ ক্লাস",
        d: "বাংলাদেশের যেকোনো জায়গা থেকে ঘরে বসে যুক্ত হোন",
      },
      { t: "কমিউনিটি কর্মসূচি", d: "স্কুল, অফিস ও পাড়ার জন্য কর্মশালা" },
    ],
  },
  courses: {
    label: "কোর্স",
    title: "প্রতিটি স্তরের জন্য কোর্স",
    cta: "এই কোর্স সম্পর্কে জানুন",
    items: [
      {
        t: "যোগের ভিত্তি",
        level: "নতুনদের জন্য",
        len: "৮ সপ্তাহ",
        d: "মৌলিক আসন, শ্বাস ও সঠিক ভঙ্গি, ধীরে ও নিরাপদে শেখানো হয়।",
      },
      {
        t: "প্রতিদিনের অনুশীলন",
        level: "সব স্তরের জন্য",
        len: "১২ সপ্তাহ",
        d: "সূর্যনমস্কার ও দাঁড়িয়ে করা আসনের মাধ্যমে সকালের রুটিন গড়ুন।",
      },
      {
        t: "শ্বাস ও স্থিরতা",
        level: "সব স্তরের জন্য",
        len: "৬ সপ্তাহ",
        d: "শান্ত ও স্থির মনের জন্য প্রাণায়াম ও বসে ধ্যান।",
      },
    ],
  },
  sessions: {
    label: "সেশন",
    title: "কোথায় ও কখন আমরা অনুশীলন করি",
    tabs: [
      {
        k: "খোলা আকাশ",
        place: "ঢাকার পার্ক",
        rows: [
          ["শুক্রবার", "সকাল ৬:০০", "সব স্তর"],
          ["শনিবার", "সকাল ৬:০০", "নতুনদের জন্য"],
        ],
      },
      {
        k: "স্টুডিও",
        place: "কমিউনিটি হল",
        rows: [
          ["রবিবার", "সকাল ৭:০০", "সব স্তর"],
          ["মঙ্গলবার", "সন্ধ্যা ৬:৩০", "নতুনদের জন্য"],
        ],
      },
      {
        k: "অনলাইন",
        place: "লাইভ, আপনার ঘর থেকে",
        rows: [
          ["সোমবার", "সন্ধ্যা ৭:০০", "সব স্তর"],
          ["বৃহস্পতিবার", "সন্ধ্যা ৭:০০", "সব স্তর"],
        ],
      },
    ],
  },
  events: {
    label: "অনুষ্ঠান",
    title: "আসছে",
    cta: "জায়গা রাখুন",
    items: [
      {
        day: "১২",
        mon: "ডিসেম্বর",
        t: "শীতের সূর্যোদয়ে যোগ",
        d: "সব স্তরের জন্য খোলা আকাশের দলগত অনুশীলন",
        where: "ঢাকার পার্ক · সকাল ৬:৩০",
      },
      {
        day: "২০",
        mon: "ডিসেম্বর",
        t: "যোগের প্রথম ধাপ",
        d: "একেবারে নতুনদের জন্য অর্ধদিনের কর্মশালা",
        where: "কমিউনিটি হল · সকাল ৯:০০",
      },
      {
        day: "০৩",
        mon: "জানুয়ারি",
        t: "শ্বাস ও স্থিরতার সন্ধ্যা",
        d: "নির্দেশিত প্রাণায়াম ও নীরব ধ্যান, অনলাইন লাইভ",
        where: "অনলাইন · সন্ধ্যা ৭:৩০",
      },
    ],
  },
  voices: {
    label: "শিক্ষার্থীদের কথা",
    title: "শিক্ষার্থীরা কী বলেন",
    items: [
      {
        q: "পিঠের ব্যথার জন্য এসেছিলাম, থেকে গেছি সকালগুলোর জন্য। পার্কের সেশনগুলো আমার সপ্তাহের সবচেয়ে শান্ত সময়।",
        n: "নুসরাত",
        r: "শিক্ষার্থী, ঢাকা",
      },
      {
        q: "আগে কখনো যোগ করিনি। নতুনদের কোর্স এত ধীরে এগিয়েছে যে কখনো পিছিয়ে পড়েছি মনে হয়নি।",
        n: "রফিক",
        r: "অফিস কর্মী",
      },
      {
        q: "অনলাইন ক্লাস আমার সন্ধ্যার সঙ্গে মিলে যায়, আর শ্বাসের অনুশীলন ঘুমাতে সাহায্য করে।",
        n: "ফারজানা",
        r: "অবসরপ্রাপ্ত শিক্ষিকা",
      },
    ],
  },
  coursesPage: {
    title: "কোর্স",
    intro:
      "ছোট দলে পড়ানো তিনটি কোর্স। যোগ আপনার কাছে নতুন হলে ‘যোগের ভিত্তি’ দিয়ে শুরু করুন।",
    learn: "যা শিখবেন",
    who: "কাদের জন্য",
    when: "কখন",
    cta: "এই কোর্স সম্পর্কে জানুন",
    items: [
      {
        learn: [
          "দাঁড়িয়ে ও বসে করা আসন, একটি একটি করে",
          "শ্বাসের গোড়ার কথা ও শরীর সচেতনতা",
          "নিরাপদে অনুশীলনের জন্য সঠিক ভঙ্গির নির্দেশনা",
        ],
        who: "যেকোনো বয়সের যারা যোগ শুরু করছেন",
        when: "শনিবার, সকাল ৬:০০, খোলা আকাশে",
      },
      {
        learn: [
          "সূর্যনমস্কার",
          "শক্তি ও ভারসাম্যের জন্য দাঁড়িয়ে করা ধারা",
          "ঘরে পুনরায় করার মতো ২০ মিনিটের রুটিন",
        ],
        who: "যারা ‘যোগের ভিত্তি’ শেষ করেছেন বা কিছুটা অনুশীলন করেন",
        when: "শুক্রবার, সকাল ৬:০০ ও রবিবার, সকাল ৭:০০",
      },
      {
        learn: [
          "ধীরে ধীরে গড়ে ওঠা প্রাণায়াম",
          "১০ থেকে ২০ মিনিটের বসে ধ্যান",
          "ব্যস্ত দিনেও স্থিরতা আনার উপায়",
        ],
        who: "সবাই, নমনীয়তা লাগবে না",
        when: "বৃহস্পতিবার, সন্ধ্যা ৭:০০, অনলাইনে",
      },
    ],
  },
  gallery: {
    title: "গ্যালারি",
    intro: "আমাদের সেশনের কিছু মুহূর্ত",
    close: "বন্ধ করুন",
    captions: [
      "সূর্যোদয়ে খোলা আকাশের অনুশীলন",
      "পার্কে অধোমুখ আসন",
      "সমুদ্রের ধারে একসঙ্গে",
      "সোনালি আলোয় স্থিরতা",
      "আলোর দিকে হাত তুলে",
      "সন্ধ্যার ছায়াছবি",
      "পাথরের ওপর একটি শান্ত আসন",
    ],
  },
  contact: {
    title: "যোগাযোগ",
    intro:
      "কোনটিতে যোগ দিতে চান জানান, আপনার কাছের পরবর্তী সেশনের কথা জানিয়ে দেব।",
    name: "আপনার নাম",
    phone: "ফোন",
    interest: "আমি আগ্রহী",
    message: "বার্তা (ঐচ্ছিক)",
    send: "ইমেইল পাঠান",
    note: "এতে আপনার ইমেইল অ্যাপ বার্তা তৈরি অবস্থায় খুলবে।",
    subject: "সেশন সম্পর্কে জিজ্ঞাসা",
    where: "কোথায় অনুশীলন করি",
    whereBody:
      "ঢাকার পার্ক ও একটি কমিউনিটি হল, আর বাংলাদেশের যে কারও জন্য অনলাইন লাইভ ক্লাস।",
    msg: "আমি যোগ দিতে চাই:",
  },
  founder: {
    label: "প্রতিষ্ঠাতা",
    name: "কাজী মাহতাব সুমন",
    body: "কাজী মাহতাব সুমন বাংলাদেশ যোগ ফাউন্ডেশনের প্রতিষ্ঠাতা। তিনি সদগুরু প্রদত্ত ইনার ইঞ্জিনিয়ারিং কোর্স সম্পন্ন করেছেন এবং এমডিএনআইওয়াই, আয়ুষ মন্ত্রণালয় ও হ্যাবিল্ড আয়োজিত আন্তর্জাতিক যোগ দিবস ২০২৬-এর লাইভ স্ট্রিমে অংশ নিয়েছেন।",
    creds: [
      { t: "ইনার ইঞ্জিনিয়ারিং", d: "সম্পন্ন, সদগুরু প্রদত্ত কোর্স" },
      {
        t: "প্রমিস অব যোগা৩৬৫",
        d: "অংশগ্রহণকারী, ইউটিউবে যোগের সবচেয়ে বেশি দর্শকের লাইভ স্ট্রিম, ১৪ জুন ২০২৬",
      },
    ],
    cert: "অংশগ্রহণের সনদ",
  },
  faq: {
    label: "প্রশ্ন",
    title: "যোগ দেওয়ার আগে",
    items: [
      {
        q: "আমার কি অভিজ্ঞতা লাগবে?",
        a: "না। নতুনদের সেশন ও যোগের ভিত্তি কোর্স একেবারে গোড়া থেকে শুরু হয়।",
      },
      {
        q: "কী পরে আসব এবং কী আনব?",
        a: "আরামদায়ক পোশাক, একটি ম্যাট ও পানি। খোলা আকাশের সেশনে একটি হালকা তোয়ালেও কাজে লাগে।",
      },
      {
        q: "আমি কি অনলাইনে যোগ দিতে পারি?",
        a: "হ্যাঁ। ইন্টারনেট সংযোগ থাকলে বাংলাদেশের যে কেউ অনলাইন লাইভ ক্লাসে যুক্ত হতে পারেন।",
      },
      {
        q: "কীভাবে যোগ দেব?",
        a: "আমাদের বার্তা পাঠান, আপনার কাছের পরবর্তী সেশনের কথা জানিয়ে দেব।",
      },
    ],
  },
  join: {
    title: "পরবর্তী সেশনে আসুন",
    body: "বার্তা পাঠান, কোথায় হচ্ছে জানিয়ে দেব।",
    cta: "আমাদের বার্তা পাঠান",
  },
// TODO(client): policy text is a plain template, have it reviewed against how the foundation really works before launch.
  privacy: {
    title: "গোপনীয়তা নীতি",
    updated: "সর্বশেষ হালনাগাদ: নভেম্বর ২০২৬",
    sections: [
      { h: "আমরা কী সংগ্রহ করি", p: "যোগাযোগ ফর্মের মাধ্যমে আপনি যে নাম, ফোন নম্বর ও বার্তা লেখেন তা আমরা পাই। বার্তাটি আপনার নিজের ইমেইল অ্যাপ থেকে পাঠানো হয়, তাই ওয়েবসাইট নিজে তা সংরক্ষণ করে না।" },
      { h: "কীভাবে ব্যবহার করি", p: "আপনার তথ্য আমরা শুধু আপনাকে উত্তর দিতে, আপনার জানতে চাওয়া সেশন বা কোর্স সম্পর্কে জানাতে এবং ক্লাস নিরাপদে চালাতে ব্যবহার করি। আপনার তথ্য আমরা বিক্রি করি না বা অন্য কারও সঙ্গে ভাগ করি না।" },
      { h: "কুকি ও সংরক্ষণ", p: "ওয়েবসাইট কোনো ট্র্যাকিং বা বিজ্ঞাপনের কুকি ব্যবহার করে না। শুধু আপনার ভাষার পছন্দ আপনার নিজের ব্রাউজারে সংরক্ষণ করে।" },
      { h: "স্বাস্থ্যসংক্রান্ত তথ্য", p: "নিরাপদে নির্দেশনা দিতে আপনি আঘাত বা স্বাস্থ্য সমস্যার কথা জানালে আমরা তা গোপন রাখি এবং শুধু আপনার অনুশীলনের জন্য ব্যবহার করি।" },
      { h: "আপনার সিদ্ধান্ত", p: "আপনার সম্পর্কে আমাদের কাছে থাকা তথ্য দেখতে, ঠিক করতে বা মুছে ফেলতে যেকোনো সময় আমাদের জানাতে পারেন। ফুটারের যোগাযোগের তথ্য ব্যবহার করুন।" },
    ],
  },
  refund: {
    title: "রিফান্ড নীতি",
    updated: "সর্বশেষ হালনাগাদ: নভেম্বর ২০২৬",
    sections: [
      { h: "কোর্স শুরুর আগে", p: "কোর্স শুরুর অন্তত ৩ দিন আগে বাতিল করলে আমরা পুরো ফি ফেরত দিই।" },
      { h: "কোর্স শুরুর পরে", p: "প্রথম সপ্তাহের মধ্যে ছেড়ে দিলে বাকি সপ্তাহগুলোর ফি ফেরত দিই। প্রথম সপ্তাহের পরে ফি ফেরত হয় না, তবে আপনি পরের কোনো কোর্সে যেতে পারেন।" },
      { h: "আমরা বাতিল করলে", p: "আমরা কোনো সেশন বা কোর্স বাতিল বা পিছিয়ে দিলে আপনি পুরো ফেরত অথবা নতুন তারিখে একটি আসন বেছে নিতে পারেন।" },
      { h: "বিনামূল্যের সেশন", p: "খোলা আকাশের কমিউনিটি সেশন বিনামূল্যে, তাই এতে রিফান্ড প্রযোজ্য নয়।" },
      { h: "কীভাবে জানাবেন", p: "ফুটারের যোগাযোগের তথ্য ব্যবহার করে আপনার নাম ও কোর্সের নাম জানান। আমরা কয়েক দিনের মধ্যে উত্তর দিই এবং আপনি যে পদ্ধতিতে দিয়েছিলেন সেভাবেই ফেরত দিই।" },
    ],
  },
  footer: {
    tag: "স্বাস্থ্য, শান্তি ও সম্প্রীতির জন্য যোগ",
    credit: "ছবি: আনস্প্ল্যাশ, আলোকচিত্রী",
    privacy: "গোপনীয়তা নীতি",
    refund: "রিফান্ড নীতি",
    contact: "যোগাযোগ",
    follow: "আমাদের অনুসরণ করুন",
  },
};

export const content = { en, bn };
export type Lang = keyof typeof content;
