// ─── EmailJS ───
(function () {
    emailjs.init("ljvafDc51_oOyjf91");
})();

// ═══════════════════════════════════════════
// TRANSLATIONS (gaul-semiformal style)
// ═══════════════════════════════════════════
const translations = {
    EN: {
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",

        hero_eyebrow: "D3 Informatics · Student Developer",
        hero_greet: "Hello, I'm",
        hero_desc: "Junior IT Support & Frontend Developer based in Kapan, Nepal. Building clean interfaces, data-driven systems, and interactive experiences.",
        hero_btn_download: "Download CV / Resume",
        hero_btn_projects: "View Projects",

        about_label: "Who I Am",
        about_title: "About Me",
        about_heading: "Informatics Student &<br />Junior Developer",
        about_p1: "I'm <strong>Sabin Dhungel</strong>, an Informatics student with hands-on experience in programming, frontend web development, Flutter mobile apps, multimedia, game development, and data processing.",
        about_p2: "Currently available for remote and hybrid work opportunities in IT Support, Fullstack Development, UI/UX Design, and Game Development.",
        about_stat_projects: "Projects",
        about_stat_skills: "Skill Areas",
        about_stat_angkatan: "Batch",
        about_p3: "Skilled in VS Code, Microsoft Office Suite, Adobe Premiere Pro, After Effects, Photoshop, Figma, Canva, Unity, Jupyter Notebook, Google Colab, and more.",
        about_btn_cv: "Download CV",
        about_btn_contact: "Get In Touch",

        skills_label: "What I Know",
        skills_title: "Technical Proficiency",
        skills_subtitle: "An overview of my current skills as a Junior IT Support and Web Developer. I focus on reliable execution, basic troubleshooting, and continuous improvement.",

        sk1_title: "Programming", sk1_desc: "Basic proficiency in C, C#, Java, and Python.",
        sk1_i1_h: "IDEs", sk1_i1_p: "VSCode, CodeBlocks, NetBeans",
        sk1_i2_h: "Troubleshooting", sk1_i2_p: "Debugging, workflow understanding, less blind-rate coding",
        sk1_i3_h: "Coding Efficiency", sk1_i3_p: "Avoiding memory leaks, clean code practices",

        sk2_title: "Frontend Web Development", sk2_desc: "Building responsive, clean-layout websites.",
        sk2_i1_h: "Core Technologies", sk2_i1_p: "HTML5, CSS3, JavaScript",
        sk2_i2_h: "UI Implementation", sk2_i2_p: "Converting designs into web layouts from mockups",
        sk2_i3_h: "Responsive Design", sk2_i3_p: "Flexbox, Grid, and media queries",

        sk3_title: "Mobile Apps Development", sk3_desc: "Flutter-based Android apps with Dart.",
        sk3_i1_h: "Framework", sk3_i1_p: "Flutter (Dart)",
        sk3_i2_h: "Structure", sk3_i2_p: "Navigation, widgets, simple state management",
        sk3_i3_h: "Workflow", sk3_i3_p: "VSCode, emulator testing, basic debugging",

        sk4_title: "IT Support & System Assistance", sk4_desc: "Basic maintenance and troubleshooting.",
        sk4_i1_h: "System Support", sk4_i1_p: "Windows installation, configuration, app setup",
        sk4_i2_h: "Troubleshooting", sk4_i2_p: "Identifying common hardware and software issues",
        sk4_i3_h: "Hardware", sk4_i3_p: "Basic computer components and peripherals",

        sk5_title: "Multimedia & Design", sk5_desc: "Visual content, editing, and UI mockups.",
        sk5_i1_h: "Design Tools", sk5_i1_p: "Figma, Canva",
        sk5_i2_h: "Editing Software", sk5_i2_p: "Adobe Premiere Pro, After Effects, Photoshop",
        sk5_i3_h: "Use Cases", sk5_i3_p: "Video editing, image editing, UI mockups",

        sk6_title: "Game Development", sk6_desc: "Unity and Roblox Studio projects.",
        sk6_i1_h: "Engines", sk6_i1_p: "Unity, Roblox Studio",
        sk6_i2_h: "Programming", sk6_i2_p: "C# scripting, Lua scripting, gameplay logic",
        sk6_i3_h: "Tasks", sk6_i3_p: "UI systems, player interactions, asset integration",

        sk7_title: "Data Processing", sk7_desc: "Cleaning, analysis, and visualization with Python.",
        sk7_i1_h: "Tools", sk7_i1_p: "Google Colab, Jupyter Notebook",
        sk7_i2_h: "Libraries", sk7_i2_p: "Pandas, NumPy, Matplotlib, Seaborn",
        sk7_i3_h: "Machine Learning", sk7_i3_p: "TF-IDF, Complement Naive Bayes, classification models",

        projects_label: "My Work",
        projects_title: "Projects",
        projects_subtitle: "A showcase of academic, personal, and team projects across web, mobile, AI, game, and data domains.",
        see_more: "See More",

        p1_title: "Multimedia GUI - Roblox Studio",
        p1_desc: "Led the UI/UX division for interactive Roblox elements. Designed in Figma, built in Roblox Studio with Lua scripting.",
        p2_title: "Database - Hotel Booking",
        p2_desc: "Designed a normalized hotel tourism booking database (UNF → 3NF) from Kaggle data, imported via phpMyAdmin on XAMPP.",
        p3_title: "Network - Internet Cafe Topology",
        p3_desc: "Designed and simulated an Internet Cafe network in Cisco Packet Tracer with LAN cabling, subnets, inter-router routing, and DHCP pools.",
        p4_title: "Database - SIAKAD Vocation",
        p4_desc: "Web-based Academic Information System for D3 Informatics supporting registration, grading, attendance, and parent monitoring with role-based access using PHP & MySQL.",
        p5_title: "Web Programming - LokerIn Job Portal",
        p5_desc: "Full-stack PHP/MySQL job portal with dual-role auth, real-time messaging, application tracking, skill gap analyzer, and a company analytics dashboard on a LAMP stack.",
        p6_title: "Mobile - ViAuo Music & Video Player",
        p6_desc: "Android music and video player built with Flutter featuring multi-page navigation, media search, playback history, and modern permission handling.",
        p7_title: "My Portfolio Website",
        p7_desc: "Personal portfolio built with HTML, CSS, and JavaScript showcasing profile, skills, and projects as a digital resume for IT and development roles.",
        p8_title: "Multimedia Midterm Exam Project",
        p8_desc: "Mobile application UI/UX design for academic services, focusing on accessibility and usability for students through structured, user-friendly interface design.",
        p9_title: "Multimedia Group-5 - Healthy Drinks App",
        p9_desc: "Team-based UI/UX design in Figma for a healthy drink ordering mobile app, built on user personas for visual consistency and audience alignment.",
        p10_title: "AI Chess Game - Minimax Algorithm",
        p10_desc: "Python chess game using Minimax with Alpha-Beta Pruning. Interactive Pygame interface for playing against the AI.",
        p11_title: "Simple Face Recognition - Python",
        p11_desc: "Real-time face recognition with Python, OpenCV, and face_recognition - detects and identifies faces from a predefined dataset.",
        p12_title: "Interpolation Newton-Gregory Program",
        p12_desc: "Python numerical computing app implementing Linear Interpolation, Newton Divided Differences, Forward and Backward methods with CSV support and data visualization.",
        p13_title: "Decision Support System - Bakery Sales",
        p13_desc: "Python analytics system on 2006–2019 bakery data using SAW and TOPSIS for promotional budget and product prioritization recommendations.",
        p14_title: "Sentiment Analysis - Machine Learning",
        p14_desc: "Flask web app classifying e-commerce reviews using TF-IDF and Complement Naive Bayes, with interactive visualizations and confidence scores.",
        p15_title: "Collect The Stars - Unity",
        p15_desc: "Simple 3D Unity game where players collect stars. Features C# scripting for UI, restart functionality, sound effects, and gameplay interactions.",
        p16_title: "Interactive Map - Ethnic Diversity",
        p16_desc: "Web map exploring ethnic diversity across regions using Leaflet.js, with cultural heritage and regional statistics.",
        p17_title: "Interactive Map - Mountain Trails",
        p17_desc: "Leaflet.js map of regional mountain ranges with search, geographic info, dark mode, and responsive design for educational exploration.",
        p18_title: "Education Game - Roblox Learning",
        p18_desc: "An educational Roblox game that introduces cultural landmarks, quizzes, and exploration, creating a fun learning experience for players of all ages.",

        contact_label: "Get In Touch",
        contact_title: "Let's Work Together",
        contact_subtitle: "Open to opportunities in IT Support, Programming, Frontend Web Development, UI/UX Design, Flutter, and multimedia. Say hello - I'll respond as soon as possible.",
        contact_email_label: "Email",
        contact_linkedin_label: "LinkedIn",
        contact_github_label: "GitHub",
        contact_ig_label: "Instagram",
        contact_yt_label: "YouTube",
        contact_tiktok_label: "TikTok",
        contact_location_label: "Location",
        contact_location_value: "Kapan, Kathmandu, Nepal",
        contact_form_title: "Send a Message",
        form_name_label: "Name",
        form_name_ph: "Your name",
        form_email_label: "Email",
        form_email_ph: "your@email.com",
        form_subject_label: "Subject",
        form_subject_ph: "What's this about?",
        form_message_label: "Message",
        form_message_ph: "Tell me more...",
        form_submit: "Send Message",

        footer_rights: "All rights reserved.",
        alert_fill_fields: "Please fill all required fields.",
        sending: "Sending…",
        send_success: "Message sent successfully!",
        send_fail: "Failed to send. Please try again.",
    },

    ID: {
        nav_home: "होम",
        nav_about: "मेरे बारे में",
        nav_skills: "कौशल",
        nav_projects: "प्रोजेक्ट्स",
        nav_contact: "संपर्क",

        hero_eyebrow: "D3 Informatics · Student Developer",
        hero_greet: "नमस्ते, मैं हूँ",
        hero_desc: "कपन, नेपाल में स्थित जूनियर IT सपोर्ट और फ्रंटएंड डेवलपर। मैं साफ-सुथरे इंटरफेस, डेटा-आधारित सिस्टम और इंटरैक्टिव अनुभव बनाता हूँ।",
        hero_btn_download: "CV / Resume डाउनलोड करें",
        hero_btn_projects: "प्रोजेक्ट्स देखें",

        about_label: "मैं कौन हूँ",
        about_title: "मेरे बारे में",
        about_heading: "इन्फॉर्मेटिक्स छात्र एवं<br />जूनियर डेवलपर",
        about_p1: "मैं <strong>Sabin Dhungel</strong> हूँ, एक इन्फॉर्मेटिक्स छात्र हूँ और मुझे प्रोग्रामिंग, फ्रंटएंड वेब डेवलपमेंट, Flutter मोबाइल ऐप्स, मल्टीमीडिया, गेम डेवलपमेंट और डेटा प्रोसेसिंग का व्यावहारिक अनुभव है।",
        about_p2: "वर्तमान में मैं IT Support, Fullstack Development, UI/UX Design और Game Development में remote और hybrid काम के अवसरों के लिए उपलब्ध हूँ।",
        about_stat_projects: "प्रोजेक्ट्स",
        about_stat_skills: "स्किल क्षेत्र",
        about_stat_angkatan: "बैच",
        about_p3: "VS Code, Microsoft Office Suite, Adobe Premiere Pro, After Effects, Photoshop, Figma, Canva, Unity, Jupyter Notebook, Google Colab और अन्य टूल्स का उपयोग कर सकता हूँ।",
        about_btn_cv: "CV डाउनलोड करें",
        about_btn_contact: "संपर्क करें",

        skills_label: "मुझे क्या आता है",
        skills_title: "तकनीकी कौशल",
        skills_subtitle: "Junior IT Support और Web Developer के रूप में मेरे वर्तमान कौशल का अवलोकन। मैं भरोसेमंद कार्य, बेसिक troubleshooting और लगातार सुधार पर ध्यान देता हूँ।",

        sk1_title: "Programming",
        sk1_desc: "C, C#, Java और Python में बुनियादी दक्षता।",
        sk1_i1_h: "IDEs",
        sk1_i1_p: "VSCode, CodeBlocks, NetBeans",
        sk1_i2_h: "Troubleshooting",
        sk1_i2_p: "Debugging और workflow की समझ",
        sk1_i3_h: "Coding Efficiency",
        sk1_i3_p: "Memory leaks से बचना और clean code practices",

        sk2_title: "Frontend Web Development",
        sk2_desc: "Responsive और साफ-सुथरी layout वाली websites बनाना।",
        sk2_i1_h: "मुख्य तकनीक",
        sk2_i1_p: "HTML5, CSS3, JavaScript",
        sk2_i2_h: "UI Implementation",
        sk2_i2_p: "Mockups से web layouts बनाना",
        sk2_i3_h: "Responsive Design",
        sk2_i3_p: "Flexbox, Grid और media queries",

        sk3_title: "Mobile App Development",
        sk3_desc: "Dart के साथ Flutter आधारित Android applications।",
        sk3_i1_h: "Framework",
        sk3_i1_p: "Flutter (Dart)",
        sk3_i2_h: "Structure",
        sk3_i2_p: "Navigation, widgets और basic state management",
        sk3_i3_h: "Workflow",
        sk3_i3_p: "VSCode, emulator testing और basic debugging",

        sk4_title: "IT Support & System Assistance",
        sk4_desc: "Basic maintenance और troubleshooting।",
        sk4_i1_h: "System Support",
        sk4_i1_p: "Windows installation, configuration और app setup",
        sk4_i2_h: "Troubleshooting",
        sk4_i2_p: "Common hardware और software समस्याओं की पहचान",
        sk4_i3_h: "Hardware",
        sk4_i3_p: "Basic computer components और peripherals",

        sk5_title: "Multimedia & Design",
        sk5_desc: "Visual content, editing और UI mockups।",
        sk5_i1_h: "Design Tools",
        sk5_i1_p: "Figma, Canva",
        sk5_i2_h: "Editing Software",
        sk5_i2_p: "Adobe Premiere Pro, After Effects, Photoshop",
        sk5_i3_h: "Use Cases",
        sk5_i3_p: "Video editing, image editing और UI mockups",

        sk6_title: "Game Development",
        sk6_desc: "Unity और Roblox Studio projects।",
        sk6_i1_h: "Engines",
        sk6_i1_p: "Unity, Roblox Studio",
        sk6_i2_h: "Programming",
        sk6_i2_p: "C# scripting, Lua scripting और gameplay logic",
        sk6_i3_h: "Tasks",
        sk6_i3_p: "UI systems, player interactions और asset integration",

        sk7_title: "Data Processing",
        sk7_desc: "Python के साथ data cleaning, analysis और visualization।",
        sk7_i1_h: "Tools",
        sk7_i1_p: "Google Colab, Jupyter Notebook",
        sk7_i2_h: "Libraries",
        sk7_i2_p: "Pandas, NumPy, Matplotlib, Seaborn",
        sk7_i3_h: "Machine Learning",
        sk7_i3_p: "TF-IDF, Complement Naive Bayes और classification models",

        projects_label: "मेरा काम",
        projects_title: "प्रोजेक्ट्स",
        projects_subtitle: "Web, mobile, AI, game और data क्षेत्रों में मेरे academic, personal और team projects।",
        see_more: "और देखें",

        p1_title: "Multimedia GUI - Roblox Studio",
        p1_desc: "Interactive Roblox elements के लिए UI/UX division का नेतृत्व किया। Figma में design और Roblox Studio में Lua scripting के साथ बनाया।",
        p2_title: "Database - Hotel Booking",
        p2_desc: "Kaggle data से normalized hotel tourism booking database डिजाइन किया।",
        p3_title: "Network - Internet Cafe Topology",
        p3_desc: "Cisco Packet Tracer में LAN cabling, subnets, routing और DHCP pools के साथ Internet Cafe network design और simulation।",
        p4_title: "Database - SIAKAD Vocation",
        p4_desc: "PHP और MySQL का उपयोग करके web-based Academic Information System।",
        p5_title: "Web Programming - LokerIn Job Portal",
        p5_desc: "Full-stack PHP/MySQL job portal।",
        p6_title: "Mobile - ViAuo Music & Video Player",
        p6_desc: "Flutter से बनाया गया Android music और video player।",
        p7_title: "My Portfolio Website",
        p7_desc: "HTML, CSS और JavaScript से बनाया गया personal portfolio।",
        p8_title: "Multimedia Midterm Exam Project",
        p8_desc: "Academic services के लिए mobile application UI/UX design।",
        p9_title: "Multimedia Group-5 - Healthy Drinks App",
        p9_desc: "Figma में team-based healthy drink ordering app का UI/UX design।",
        p10_title: "AI Chess Game - Minimax Algorithm",
        p10_desc: "Minimax और Alpha-Beta Pruning का उपयोग करके Python chess game।",
        p11_title: "Simple Face Recognition - Python",
        p11_desc: "Python और OpenCV का उपयोग करके real-time face recognition।",
        p12_title: "Interpolation Newton-Gregory Program",
        p12_desc: "Python आधारित numerical computing application।",
        p13_title: "Decision Support System - Bakery Sales",
        p13_desc: "SAW और TOPSIS का उपयोग करके Python आधारित analytics system।",
        p14_title: "Sentiment Analysis - Machine Learning",
        p14_desc: "TF-IDF और Complement Naive Bayes का उपयोग करके Flask web application।",
        p15_title: "Collect The Stars - Unity",
        p15_desc: "Simple 3D Unity game जिसमें players stars collect करते हैं।",
        p16_title: "Interactive Map - Ethnic Diversity",
        p16_desc: "Leaflet.js का उपयोग करके ethnic diversity को दिखाने वाला interactive web map।",
        p17_title: "Interactive Map - Mountain Trails",
        p17_desc: "Search, geographic information और dark mode वाला Leaflet.js map।",
        p18_title: "Education Game - Roblox Learning",
        p18_desc: "Cultural landmarks, quizzes और exploration वाला educational Roblox game।",

        contact_label: "संपर्क करें",
        contact_title: "आइए साथ काम करें",
        contact_subtitle: "IT Support, Programming, Frontend Web Development, UI/UX Design, Flutter और multimedia में अवसरों के लिए उपलब्ध हूँ। संदेश भेजें, मैं जल्द से जल्द जवाब दूँगा।",
        contact_email_label: "Email",
        contact_linkedin_label: "LinkedIn",
        contact_github_label: "GitHub",
        contact_ig_label: "Instagram",
        contact_yt_label: "YouTube",
        contact_tiktok_label: "TikTok",
        contact_location_label: "स्थान",
        contact_location_value: "कपन, काठमांडू, नेपाल",
        contact_form_title: "संदेश भेजें",
        form_name_label: "नाम",
        form_name_ph: "आपका नाम",
        form_email_label: "Email",
        form_email_ph: "your@email.com",
        form_subject_label: "विषय",
        form_subject_ph: "यह किस बारे में है?",
        form_message_label: "संदेश",
        form_message_ph: "अपने बारे में बताएं...",
        form_submit: "संदेश भेजें",

        footer_rights: "सर्वाधिकार सुरक्षित।",
        alert_fill_fields: "कृपया सभी आवश्यक फ़ील्ड भरें।",
        sending: "भेजा जा रहा है…",
        send_success: "संदेश सफलतापूर्वक भेजा गया!",
        send_fail: "संदेश भेजने में विफल। कृपया पुनः प्रयास करें।",
    },

    JA: {
        nav_home: "गृहपृष्ठ",
        nav_about: "मेरो बारेमा",
        nav_skills: "सीपहरू",
        nav_projects: "परियोजनाहरू",
        nav_contact: "सम्पर्क",

        hero_eyebrow: "D3 Informatics · विद्यार्थी Developer",
        hero_greet: "नमस्ते, म",
        hero_desc: "कपन, नेपालमा आधारित Junior IT Support र Frontend Developer। सफा interface, data-driven system र interactive experience निर्माण गर्छु।",
        hero_btn_download: "CV / Resume डाउनलोड गर्नुहोस्",
        hero_btn_projects: "परियोजनाहरू हेर्नुहोस्",

        about_label: "म को हुँ",
        about_title: "मेरो बारेमा",
        about_heading: "Informatics विद्यार्थी तथा<br />Junior Developer",
        about_p1: "म <strong>Sabin Dhungel</strong> हुँ। मलाई programming, frontend web development, Flutter mobile apps, multimedia, game development र data processing मा व्यावहारिक अनुभव छ।",
        about_p2: "हाल IT Support, Fullstack Development, UI/UX Design र Game Development मा remote तथा hybrid कामका अवसरहरूका लागि उपलब्ध छु।",
        about_stat_projects: "परियोजनाहरू",
        about_stat_skills: "सीप क्षेत्रहरू",
        about_stat_angkatan: "ब्याच",
        about_p3: "VS Code, Microsoft Office Suite, Adobe Premiere Pro, After Effects, Photoshop, Figma, Canva, Unity, Jupyter Notebook, Google Colab लगायतका tools प्रयोग गर्न सक्छु।",
        about_btn_cv: "CV डाउनलोड गर्नुहोस्",
        about_btn_contact: "सम्पर्क गर्नुहोस्",

        skills_label: "मलाई के आउँछ",
        skills_title: "प्राविधिक सीप",
        skills_subtitle: "Junior IT Support र Web Developer का रूपमा मेरा हालका सीपहरूको संक्षिप्त जानकारी। म भरपर्दो काम, आधारभूत troubleshooting र निरन्तर सुधारमा ध्यान दिन्छु।",

        sk1_title: "Programming",
        sk1_desc: "C, C#, Java र Python मा आधारभूत ज्ञान।",
        sk1_i1_h: "IDEs",
        sk1_i1_p: "VSCode, CodeBlocks, NetBeans",
        sk1_i2_h: "Troubleshooting",
        sk1_i2_p: "Debugging र workflow को बुझाइ",
        sk1_i3_h: "Coding Efficiency",
        sk1_i3_p: "Memory leak बाट बच्ने र clean code practices",

        sk2_title: "Frontend Web Development",
        sk2_desc: "Responsive र सफा layout भएका websites निर्माण।",
        sk2_i1_h: "मुख्य प्रविधिहरू",
        sk2_i1_p: "HTML5, CSS3, JavaScript",
        sk2_i2_h: "UI Implementation",
        sk2_i2_p: "Mockup बाट web layout तयार गर्ने",
        sk2_i3_h: "Responsive Design",
        sk2_i3_p: "Flexbox, Grid र media queries",

        sk3_title: "Mobile App Development",
        sk3_desc: "Dart प्रयोग गरेर Flutter आधारित Android apps।",
        sk3_i1_h: "Framework",
        sk3_i1_p: "Flutter (Dart)",
        sk3_i2_h: "Structure",
        sk3_i2_p: "Navigation, widgets र basic state management",
        sk3_i3_h: "Workflow",
        sk3_i3_p: "VSCode, emulator testing र basic debugging",

        sk4_title: "IT Support & System Assistance",
        sk4_desc: "आधारभूत maintenance र troubleshooting।",
        sk4_i1_h: "System Support",
        sk4_i1_p: "Windows installation, configuration र app setup",
        sk4_i2_h: "Troubleshooting",
        sk4_i2_p: "सामान्य hardware र software समस्याहरू पहिचान गर्ने",
        sk4_i3_h: "Hardware",
        sk4_i3_p: "आधारभूत computer components र peripherals",

        sk5_title: "Multimedia & Design",
        sk5_desc: "Visual content, editing र UI mockups।",
        sk5_i1_h: "Design Tools",
        sk5_i1_p: "Figma, Canva",
        sk5_i2_h: "Editing Software",
        sk5_i2_p: "Adobe Premiere Pro, After Effects, Photoshop",
        sk5_i3_h: "प्रयोग",
        sk5_i3_p: "Video editing, image editing र UI mockups",

        sk6_title: "Game Development",
        sk6_desc: "Unity र Roblox Studio projects।",
        sk6_i1_h: "Engines",
        sk6_i1_p: "Unity, Roblox Studio",
        sk6_i2_h: "Programming",
        sk6_i2_p: "C# scripting, Lua scripting र gameplay logic",
        sk6_i3_h: "Tasks",
        sk6_i3_p: "UI systems, player interactions र asset integration",

        sk7_title: "Data Processing",
        sk7_desc: "Python प्रयोग गरेर data cleaning, analysis र visualization।",
        sk7_i1_h: "Tools",
        sk7_i1_p: "Google Colab, Jupyter Notebook",
        sk7_i2_h: "Libraries",
        sk7_i2_p: "Pandas, NumPy, Matplotlib, Seaborn",
        sk7_i3_h: "Machine Learning",
        sk7_i3_p: "TF-IDF, Complement Naive Bayes र classification models",

        projects_label: "मेरो काम",
        projects_title: "परियोजनाहरू",
        projects_subtitle: "Web, mobile, AI, game र data क्षेत्रका academic, personal तथा team projects।",
        see_more: "थप हेर्नुहोस्",

        p1_title: "Multimedia GUI - Roblox Studio",
        p1_desc: "Interactive Roblox elements का लागि UI/UX division को नेतृत्व। Figma मा design र Roblox Studio मा Lua scripting प्रयोग गरेर निर्माण।",
        p2_title: "Database - Hotel Booking",
        p2_desc: "Kaggle data प्रयोग गरेर normalized hotel tourism booking database डिजाइन।",
        p3_title: "Network - Internet Cafe Topology",
        p3_desc: "Cisco Packet Tracer मा LAN cabling, subnets, routing र DHCP pools सहित Internet Cafe network design र simulation।",
        p4_title: "Database - SIAKAD Vocation",
        p4_desc: "PHP र MySQL प्रयोग गरेर web-based Academic Information System।",
        p5_title: "Web Programming - LokerIn Job Portal",
        p5_desc: "Full-stack PHP/MySQL job portal।",
        p6_title: "Mobile - ViAuo Music & Video Player",
        p6_desc: "Flutter प्रयोग गरेर बनाइएको Android music र video player।",
        p7_title: "My Portfolio Website",
        p7_desc: "HTML, CSS र JavaScript प्रयोग गरेर बनाइएको personal portfolio।",
        p8_title: "Multimedia Midterm Exam Project",
        p8_desc: "Academic services का लागि mobile application UI/UX design।",
        p9_title: "Multimedia Group-5 - Healthy Drinks App",
        p9_desc: "Figma मा team-based healthy drink ordering app को UI/UX design।",
        p10_title: "AI Chess Game - Minimax Algorithm",
        p10_desc: "Minimax र Alpha-Beta Pruning प्रयोग गरेर बनाइएको Python chess game।",
        p11_title: "Simple Face Recognition - Python",
        p11_desc: "Python र OpenCV प्रयोग गरेर real-time face recognition।",
        p12_title: "Interpolation Newton-Gregory Program",
        p12_desc: "Python आधारित numerical computing application।",
        p13_title: "Decision Support System - Bakery Sales",
        p13_desc: "SAW र TOPSIS प्रयोग गरेर Python आधारित analytics system।",
        p14_title: "Sentiment Analysis - Machine Learning",
        p14_desc: "TF-IDF र Complement Naive Bayes प्रयोग गरेर Flask web application।",
        p15_title: "Collect The Stars - Unity",
        p15_desc: "Players ले stars collect गर्ने simple 3D Unity game।",
        p16_title: "Interactive Map - Ethnic Diversity",
        p16_desc: "Leaflet.js प्रयोग गरेर विभिन्न क्षेत्रको ethnic diversity देखाउने interactive web map।",
        p17_title: "Interactive Map - Mountain Trails",
        p17_desc: "Search, geographic information र dark mode सहितको Leaflet.js map।",
        p18_title: "Education Game - Roblox Learning",
        p18_desc: "Cultural landmarks, quizzes र exploration समावेश भएको educational Roblox game।",

        contact_label: "सम्पर्क गर्नुहोस्",
        contact_title: "सँगै काम गरौँ",
        contact_subtitle: "IT Support, Programming, Frontend Web Development, UI/UX Design, Flutter र multimedia मा अवसरका लागि उपलब्ध छु। सन्देश पठाउनुहोस्, सकेसम्म छिटो जवाफ दिनेछु।",
        contact_email_label: "Email",
        contact_linkedin_label: "LinkedIn",
        contact_github_label: "GitHub",
        contact_ig_label: "Instagram",
        contact_yt_label: "YouTube",
        contact_tiktok_label: "TikTok",
        contact_location_label: "स्थान",
        contact_location_value: "कपन, काठमाडौं, नेपाल",
        contact_form_title: "सन्देश पठाउनुहोस्",
        form_name_label: "नाम",
        form_name_ph: "तपाईंको नाम",
        form_email_label: "Email",
        form_email_ph: "your@email.com",
        form_subject_label: "विषय",
        form_subject_ph: "यो के सम्बन्धमा हो?",
        form_message_label: "सन्देश",
        form_message_ph: "थप जानकारी लेख्नुहोस्...",
        form_submit: "सन्देश पठाउनुहोस्",

        footer_rights: "सबै अधिकार सुरक्षित।",
        alert_fill_fields: "कृपया सबै आवश्यक field हरू भर्नुहोस्।",
        sending: "पठाउँदै…",
        send_success: "सन्देश सफलतापूर्वक पठाइयो!",
        send_fail: "पठाउन असफल भयो। कृपया फेरि प्रयास गर्नुहोस्।",
    },
};

// Keep original (EN) text as fallback source, captured from DOM on load.
const originalTexts = {};
const originalPlaceholders = {};

function captureOriginals() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        originalTexts[key] = el.innerHTML;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        originalPlaceholders[key] = el.getAttribute("placeholder");
    });
}

// ═══════════════════════════════════════════
// TYPING ANIMATION
// ═══════════════════════════════════════════
function typeInto(el, html, speed) {
    if (el._typingTimer) {
        clearTimeout(el._typingTimer);
        el._typingTimer = null;
    }

    el.innerHTML = "";
    el.classList.add("typing");

    const tokens = [];
    const tagRegex = /(<[^>]+>)/g;
    let lastIndex = 0;
    let match;
    while ((match = tagRegex.exec(html)) !== null) {
        const textChunk = html.slice(lastIndex, match.index);
        for (const ch of textChunk) tokens.push(ch);
        tokens.push(match[0]);
        lastIndex = match.index + match[0].length;
    }
    const tail = html.slice(lastIndex);
    for (const ch of tail) tokens.push(ch);

    let i = 0;
    let buffer = "";

    function finish() {
        el.innerHTML = buffer;
        el.classList.remove("typing");
        el._typingTimer = null;
    }

    function step() {
        if (i >= tokens.length) {
            finish();
            return;
        }
        buffer += tokens[i];
        i++;
        if (i >= tokens.length) {
            finish();
            return;
        }
        el.innerHTML = buffer + '<span class="type-cursor">▍</span>';
        el._typingTimer = setTimeout(step, speed);
    }
    step();
}

function typeIntoPlaceholder(el, text, speed) {
    if (el._phTimer) {
        clearTimeout(el._phTimer);
        el._phTimer = null;
    }
    el.setAttribute("placeholder", "");
    let i = 0;
    function step() {
        if (i > text.length) {
            el._phTimer = null;
            return;
        }
        el.setAttribute("placeholder", text.slice(0, i));
        i++;
        el._phTimer = setTimeout(step, speed);
    }
    step();
}

function applyLanguage(lang, animate) {
    const dict = translations[lang] || translations.EN;
    const speed = 14;

    let delay = 0;
    const stagger = 40;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const value = dict[key] !== undefined ? dict[key] : (originalTexts[key] || "");
        if (!animate) {
            el.innerHTML = value;
            return;
        }
        const thisDelay = delay;
        delay += stagger;
        setTimeout(() => typeInto(el, value, speed), thisDelay);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        const value = dict[key] !== undefined ? dict[key] : (originalPlaceholders[key] || "");
        if (!animate) {
            el.setAttribute("placeholder", value);
            return;
        }
        const thisDelay = delay;
        delay += stagger;
        setTimeout(() => typeIntoPlaceholder(el, value, speed), thisDelay);
    });

    document.documentElement.setAttribute("lang", lang.toLowerCase());
    refreshCopyright();
}

function t(key) {
    const dict = translations[currentLanguage] || translations.EN;
    return dict[key] !== undefined ? dict[key] : (translations.EN[key] || key);
}

// ─── Language Changer ───
const langChangBtn = document.getElementById("langChanger");
const languageOptions = document.getElementById("languageOptions");
const langOptionLeft = document.getElementById("langOptionLeft");
const langOptionRight = document.getElementById("langOptionRight");

const langNeighbors = {
    EN: { left: "ID", right: "JA" },
    ID: { left: null, right: "EN" },
    JA: { left: "EN", right: null },
};

let currentLanguage = "EN";
let selectedLanguage = "EN";
let activeNeighbors = { left: null, right: null };

let startX = null;
let isHolding = false;

function isMobileLanguageSelector() {
    return window.matchMedia("(max-width: 768px)").matches;
}

function renderOptionSlot(el, lang) {
    if (!lang) {
        el.style.visibility = "hidden";
        el.dataset.lang = "";
        el.textContent = "";
        return;
    }
    el.style.visibility = "visible";
    el.dataset.lang = lang;
    el.textContent = getLanguageLabel(lang);
}

function openLanguageOptions() {
    activeNeighbors = langNeighbors[currentLanguage] || { left: null, right: null };
    renderOptionSlot(langOptionLeft, activeNeighbors.left);
    renderOptionSlot(langOptionRight, activeNeighbors.right);
    languageOptions.classList.add("active");
    langChangBtn.setAttribute("aria-expanded", "true");
    updateLanguagePreview();
}

function selectLanguage(language) {
    if (!language || language === currentLanguage) {
        languageOptions.classList.remove("active");
        langChangBtn.setAttribute("aria-expanded", "false");
        return;
    }

    currentLanguage = language;
    langChangBtn.textContent = getLanguageLabel(currentLanguage);
    languageOptions.classList.remove("active");
    langChangBtn.setAttribute("aria-expanded", "false");
    applyLanguage(currentLanguage, true);
}

langChangBtn.addEventListener("pointerdown", (event) => {
    event.preventDefault();

    if (isMobileLanguageSelector()) {
        if (languageOptions.classList.contains("active")) {
            languageOptions.classList.remove("active");
            langChangBtn.setAttribute("aria-expanded", "false");
        } else {
            openLanguageOptions();
        }
        return;
    }

    startX = event.clientX;
    selectedLanguage = currentLanguage;
    isHolding = true;

    openLanguageOptions();
});

document.querySelectorAll(".lang-option").forEach((option) => {
    option.addEventListener("click", () => {
        if (isMobileLanguageSelector()) {
            selectLanguage(option.dataset.lang);
        }
    });
});

document.addEventListener("pointermove", (event) => {
    if (!isHolding || startX === null) {
        return;
    }

    const distance = event.clientX - startX;

    if (distance < -30 && activeNeighbors.left) {
        selectedLanguage = activeNeighbors.left;
    } else if (distance > 30 && activeNeighbors.right) {
        selectedLanguage = activeNeighbors.right;
    } else {
        selectedLanguage = currentLanguage;
    }
    updateLanguagePreview();
});

document.addEventListener("pointerup", () => {
    if (!isHolding) {
        return;
    }

    const changed = selectedLanguage !== currentLanguage;

    startX = null;
    isHolding = false;

    if (changed) {
        selectLanguage(selectedLanguage);
    } else {
        languageOptions.classList.remove("active");
        langChangBtn.setAttribute("aria-expanded", "false");
    }
});

function getLanguageLabel(language) {
    if (language === "ID") {
        return "ID";
    }
    if (language === "JA") {
        return "あ";
    }
    return "EN";
}

function updateLanguagePreview() {
    [langOptionLeft, langOptionRight].forEach((option) => {
        option.classList.remove("active");
        if (option.dataset.lang && option.dataset.lang === selectedLanguage) {
            option.classList.remove("active");
        }
    });
}

// ─── Theme Toggle ───
const html = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");

const saved = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", saved);

toggleBtn.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
});

// ─── Mobile Nav Toggle ───
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinksMenu = document.getElementById("navLinks");
const navOverlay = document.getElementById("navOverlay");

function closeMobileNav() {
    navLinksMenu.classList.remove("active");
    hamburgerBtn.classList.remove("active");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    navOverlay.classList.remove("active");
    document.body.classList.remove("nav-open");
}

function toggleMobileNav() {
    const isActive = navLinksMenu.classList.toggle("active");
    hamburgerBtn.classList.toggle("active", isActive);
    hamburgerBtn.setAttribute("aria-expanded", String(isActive));
    navOverlay.classList.toggle("active", isActive);
    document.body.classList.toggle("nav-open", isActive);
}

hamburgerBtn.addEventListener("click", toggleMobileNav);
navOverlay.addEventListener("click", closeMobileNav);
navLinksMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileNav);
});

// ─── Contact Form ───
document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        const form = this;
        const btn = form.querySelector(".form-submit");
        if (
            !form.name.value.trim() ||
            !form.email.value.trim() ||
            !form.message.value.trim()
        ) {
            alert(t("alert_fill_fields"));
            return;
        }
        btn.textContent = t("sending");
        btn.disabled = true;
        emailjs.sendForm("service_71yica1", "template_3w0sswd", form).then(
            () => {
                alert(t("send_success"));
                form.reset();
                btn.textContent = t("form_submit");
                btn.disabled = false;
            },
            (err) => {
                alert(t("send_fail"));
                console.error(err);
                btn.textContent = t("form_submit");
                btn.disabled = false;
            },
        );
    });

// ─── Copyright ───
function refreshCopyright() {
    const start = 2025,
        now = new Date().getFullYear();
    const rights = t("footer_rights");
    document.getElementById("copyright").textContent =
        now === start
            ? `©${start} Sabin Dhungel. ${rights}`
            : `©${start}–${now} Sabin Dhungel. ${rights}`;
}

// ─── Image Modal ───
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
document.querySelectorAll(".project-media img").forEach((img) => {
    img.addEventListener("click", () => {
        modal.classList.add("active");
        modalImg.src = img.src;
    });
});
modal.addEventListener("click", () => modal.classList.remove("active"));
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.classList.remove("active");
        closeMobileNav();
    }
});

// ─── Scroll Reveal ───
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((el) => {
            if (el.isIntersecting) {
                el.target.classList.add("visible");
                observer.unobserve(el.target);
            }
        });
    },
    { threshold: 0.12 },
);
document
    .querySelectorAll(".reveal")
    .forEach((el) => observer.observe(el));

// ─── Active Nav Link ───
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
const io = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((a) => a.classList.remove("active"));
                const active = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`,
                );
                if (active) active.classList.add("active");
            }
        });
    },
    { threshold: 0.35 },
);
sections.forEach((s) => io.observe(s));

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// ─── Init ───
captureOriginals();
refreshCopyright();
