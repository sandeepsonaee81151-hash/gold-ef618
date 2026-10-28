import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDc_XSDl8RXs9WhPQPEphd2eTS-P59EZVM",
    authDomain: "sanjay123-5b4c8.firebaseapp.com",
    projectId: "sanjay123-5b4c8",
    storageBucket: "sanjay123-5b4c8.firebasestorage.app",
    messagingSenderId: "169504936791",
    appId: "1:169504936791:web:52855a6918f314411f2412",
    measurementId: "G-84MSG4EY9J"
});
const db = getFirestore(firebaseApp);
const LANGUAGE_KEY = 'sanjay-jewellery-language';
let activeLanguage = localStorage.getItem(LANGUAGE_KEY) === 'en' ? 'en' : 'hi';

// ============================================
// Sanjay Jewellery — JavaScript
// ============================================

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Collection filter tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const collectionCards = document.querySelectorAll('.collection-card');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active from all
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        collectionCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.4s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const submitButton = contactForm.querySelector('[type="submit"]');
    submitButton.disabled = true;
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'भेजा जा रहा है…';

    try {
        await addDoc(collection(db, 'contactMessages'), {
            name: name.trim(),
            phone: phone.trim(),
            email: email.trim(),
            message: message.trim(),
            createdAt: serverTimestamp(),
            source: 'sanjay-jewellery-website'
        });
    } catch (error) {
        console.error('Firebase contact message save failed:', error);
        alert('संदेश Firebase में सेव नहीं हो सका। कृपया थोड़ी देर बाद फिर कोशिश करें।');
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
        return;
    }

    // Create WhatsApp message after Firestore confirms the save.
    const waMessage = `नमस्ते Sanjay Jewellery!%0A%0Aनाम: ${name}%0Aफोन: ${phone}%0Aईमेल: ${email}%0Aसंदेश: ${message}%0A%0Aकृपया मुझसे संपर्क करें।`;
    window.open(`https://wa.me/918115150061?text=${waMessage}`, '_blank');

    // Reset form
    contactForm.reset();

    // Show confirmation
    alert('धन्यवाद! आपका संदेश Firebase में सुरक्षित हो गया है। WhatsApp भी खुल रहा है।');
    submitButton.disabled = false;
    submitButton.textContent = originalButtonText;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.querySelectorAll('.collection-card, .service-card, .testimonial-card, .highlight-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// Jewellery SVG icons
// ============================================
const ICONS = {
    ring: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="60" r="25" fill="none" stroke="url(#goldGrad)" stroke-width="10"/>
        <polygon points="50,12 66,28 50,44 34,28" fill="url(#diamondGrad)"/>
        <polygon points="50,12 66,28 50,28" fill="#ffffff" opacity="0.5"/>
        <line x1="34" y1="28" x2="34" y2="44" stroke="#ffffff" stroke-width="1.5" opacity="0.4"/>
        <line x1="66" y1="28" x2="66" y2="44" stroke="#ffffff" stroke-width="1.5" opacity="0.4"/>
    </svg>`,
    bangles: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="55" r="30" fill="none" stroke="url(#goldGrad)" stroke-width="10"/>
        <polygon points="50,12 62,24 50,36 38,24" fill="url(#diamondGrad)"/>
        <circle cx="50" cy="85" r="3" fill="url(#goldGrad)"/>
    </svg>`,
    necklace: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 20 Q50 85 85 20" fill="none" stroke="url(#goldGrad)" stroke-width="4"/>
        <circle cx="15" cy="20" r="4" fill="url(#goldGrad)"/>
        <circle cx="85" cy="20" r="4" fill="url(#goldGrad)"/>
        <polygon points="50,60 56,68 50,76 44,68" fill="url(#diamondGrad)"/>
        <path d="M50 72 l10 14 -10 8 -10 -8 z" fill="url(#goldGrad)"/>
    </svg>`,
    jhumka: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="24" r="6" fill="url(#goldGrad)"/>
        <line x1="50" y1="30" x2="50" y2="42" stroke="url(#goldGrad)" stroke-width="3"/>
        <path d="M30 42 Q50 34 70 42 L66 62 Q50 70 34 62 Z" fill="url(#goldGrad)"/>
        <circle cx="50" cy="52" r="5" fill="url(#diamondGrad)"/>
        <line x1="38" y1="66" x2="38" y2="78" stroke="url(#goldGrad)" stroke-width="2"/>
        <line x1="50" y1="68" x2="50" y2="82" stroke="url(#goldGrad)" stroke-width="2"/>
        <line x1="62" y1="66" x2="62" y2="78" stroke="url(#goldGrad)" stroke-width="2"/>
        <circle cx="38" cy="80" r="3" fill="url(#goldGrad)"/>
        <circle cx="50" cy="84" r="3" fill="url(#goldGrad)"/>
        <circle cx="62" cy="80" r="3" fill="url(#goldGrad)"/>
    </svg>`,
    watch: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="44" y="12" width="12" height="12" rx="3" fill="url(#silverGrad)"/>
        <rect x="44" y="76" width="12" height="12" rx="3" fill="url(#silverGrad)"/>
        <circle cx="50" cy="50" r="24" fill="#ffffff" stroke="url(#silverGrad)" stroke-width="7"/>
        <line x1="50" y1="50" x2="50" y2="36" stroke="#333333" stroke-width="2.5"/>
        <line x1="50" y1="50" x2="60" y2="50" stroke="#333333" stroke-width="2.5"/>
        <circle cx="50" cy="50" r="2.5" fill="#333333"/>
    </svg>`,
    earring: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="18" r="5" fill="url(#silverGrad)"/>
        <line x1="50" y1="23" x2="50" y2="36" stroke="url(#silverGrad)" stroke-width="3"/>
        <path d="M34 36 Q50 30 66 36 L60 58 Q50 64 40 58 Z" fill="url(#silverGrad)"/>
        <circle cx="50" cy="48" r="5" fill="#ffffff"/>
        <circle cx="40" cy="62" r="4" fill="url(#silverGrad)"/>
        <circle cx="50" cy="66" r="4" fill="url(#silverGrad)"/>
        <circle cx="60" cy="62" r="4" fill="url(#silverGrad)"/>
    </svg>`,
    bridal: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 40 L30 20 L40 36 L50 16 L60 36 L70 20 L80 40 Z" fill="url(#goldGrad)"/>
        <polygon points="50,16 54,24 50,32 46,24" fill="url(#diamondGrad)"/>
        <path d="M22 52 Q50 84 78 52" fill="none" stroke="url(#goldGrad)" stroke-width="4"/>
        <polygon points="50,60 55,66 50,72 45,66" fill="url(#diamondGrad)"/>
        <path d="M50 66 l9 12 -9 8 -9 -8 z" fill="url(#goldGrad)"/>
    </svg>`,
    tikka: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 6 Q82 26 82 58" fill="none" stroke="url(#goldGrad)" stroke-width="4"/>
        <line x1="50" y1="6" x2="50" y2="50" stroke="url(#goldGrad)" stroke-width="4"/>
        <path d="M50 50 l14 16 -14 20 -14 -20 z" fill="url(#goldGrad)"/>
        <polygon points="50,54 56,62 50,70 44,62" fill="url(#diamondGrad)"/>
        <circle cx="50" cy="50" r="5" fill="url(#goldGrad)"/>
    </svg>`
};

// Inject icons into every .jewel placeholder
document.querySelectorAll('.jewel').forEach(el => {
    const key = el.getAttribute('data-icon');
    if (key && ICONS[key]) {
        el.innerHTML = ICONS[key];
    }
});

// ============================================
// Live Preview modal
// ============================================
const previewModal = document.getElementById('previewModal');
const modalImage = document.getElementById('modalImage');

function openPreview(data) {
    // Prefer a real product photo when available.
    if (data.image) {
        modalImage.src = data.image;
        modalImage.alt = data.title || 'आभूषण';
        modalImage.style.display = 'block';
        previewModal.querySelector('.modal-image .jewel')?.style.setProperty('display', 'none');
    } else {
        // Fallback to SVG icon.
        modalImage.style.display = 'none';
        const jewelEl = previewModal.querySelector('.jewel');
        if (jewelEl) {
            jewelEl.style.display = '';
            jewelEl.setAttribute('data-icon', data.icon);
            jewelEl.innerHTML = ICONS[data.icon] || '';
        }
    }

    document.getElementById('modalTitle').textContent = localizedCopy(data.title);
    document.getElementById('modalDesc').textContent = localizedCopy(data.desc);
    document.getElementById('modalPrice').textContent = localizedCopy(data.price);

    const whats = document.getElementById('modalWhats');
    whats.href = 'https://wa.me/918115150061?text=' +
        encodeURIComponent('नमस्ते Sanjay Jewellery! मुझे "' + data.title + '" आभूषण देखना है।');

    previewModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closePreview() {
    previewModal.classList.remove('open');
    document.body.style.overflow = '';
}

// Collection cards -> Live Preview button
document.querySelectorAll('.btn-preview').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        openPreview(this.dataset);
    });
});

// Gallery items -> click to preview
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function () {
        openPreview(this.dataset);
    });
});

// Close handlers
document.getElementById('modalClose').addEventListener('click', closePreview);
previewModal.querySelector('.modal-backdrop').addEventListener('click', closePreview);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closePreview();
});

// Live international spot prices converted to INR per gram.
const METAL_RATE_CACHE = 'sanjay-jewellery-metal-rates-v1';
const TROY_OUNCE_GRAMS = 31.1034768;

async function fetchRateJson(url) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 9000);
    try {
        const response = await fetch(url, { signal: controller.signal, cache: 'no-store' });
        if (!response.ok) throw new Error(`Rate API returned ${response.status}`);
        return await response.json();
    } finally {
        clearTimeout(timeout);
    }
}

function pricePerOunce(data, symbol) {
    const direct = Number(data?.price ?? data?.priceUsd ?? data?.[symbol]);
    if (Number.isFinite(direct) && direct > 0) return direct;
    const rows = Array.isArray(data) ? data : Array.isArray(data?.data) ? data.data : [];
    for (const row of rows) {
        const value = Number(row?.[symbol.toLowerCase()] ?? row?.[symbol] ?? row?.price);
        if (Number.isFinite(value) && value > 0) return value;
    }
    throw new Error(`No ${symbol} spot price in API response`);
}

async function fetchMetalUsd(symbol) {
    try {
        const data = await fetchRateJson(`https://api.gold-api.com/price/${symbol}`);
        return pricePerOunce(data, symbol);
    } catch (firstError) {
        const data = await fetchRateJson('https://api.metals.live/v1/spot');
        return pricePerOunce(data, symbol);
    }
}

async function fetchUsdInr() {
    try {
        const data = await fetchRateJson('https://open.er-api.com/v6/latest/USD');
        const rate = Number(data?.rates?.INR);
        if (Number.isFinite(rate) && rate > 0) return rate;
    } catch (error) { /* try fallback below */ }
    const data = await fetchRateJson('https://api.exchangerate-api.com/v4/latest/USD');
    const rate = Number(data?.rates?.INR);
    if (!Number.isFinite(rate) || rate <= 0) throw new Error('USD/INR rate unavailable');
    return rate;
}

function showMetalRates(rates, cached = false) {
    const format = value => '₹' + Math.round(value).toLocaleString('en-IN');
    document.getElementById('goldLiveRate').textContent = `${format(rates.gold)} / g`;
    document.getElementById('silverLiveRate').textContent = `${format(rates.silver)} / g`;
    const stamp = rates.time ? new Date(rates.time).toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' }) : '';
    document.getElementById('ratesUpdated').textContent = activeLanguage === 'en'
        ? (cached ? `Last rate${stamp ? ` • ${stamp}` : ''}` : `Updated ${stamp} • spot rate`)
        : (cached ? `पिछला भाव${stamp ? ` • ${stamp}` : ''}` : `अपडेट ${stamp} • spot भाव`);
}

async function refreshMetalRates() {
    const goldEl = document.getElementById('goldLiveRate');
    if (!goldEl) return;
    try {
        const [goldUsd, silverUsd, usdInr] = await Promise.all([
            fetchMetalUsd('XAU'), fetchMetalUsd('XAG'), fetchUsdInr()
        ]);
        const rates = {
            gold: goldUsd * usdInr / TROY_OUNCE_GRAMS,
            silver: silverUsd * usdInr / TROY_OUNCE_GRAMS,
            time: Date.now()
        };
        localStorage.setItem(METAL_RATE_CACHE, JSON.stringify(rates));
        showMetalRates(rates);
    } catch (error) {
        console.warn('Live metal rates unavailable:', error.message);
        try {
            const cached = JSON.parse(localStorage.getItem(METAL_RATE_CACHE) || 'null');
            if (cached?.gold && cached?.silver) showMetalRates(cached, true);
            else document.getElementById('ratesUpdated').textContent = activeLanguage === 'en' ? 'Live rates unavailable' : 'Live भाव अभी उपलब्ध नहीं';
        } catch (cacheError) {
            document.getElementById('ratesUpdated').textContent = activeLanguage === 'en' ? 'Live rates unavailable' : 'Live भाव अभी उपलब्ध नहीं';
        }
    }
}

refreshMetalRates();
setInterval(refreshMetalRates, 60000);

const ENGLISH_COPY = {
    'होम': 'Home', 'हमारे बारे में': 'About Us', 'कलेक्शन': 'Collections', 'सेवाएं': 'Services', 'गैलरी': 'Gallery', 'संपर्क करें': 'Contact Us',
    'शानदार': 'Beautiful', 'आभूषण': 'Jewellery', 'परिवार की परंपरा, आपकी भरोसेमंद पहचान': 'A family tradition, your trusted choice',
    'सोने की शुद्धता, हीरों की चमक और हर खास मौके की खूबसूरत ज्वेलरी — यह सब एक ही जगह मिलता है।': 'Gold, diamonds and beautiful jewellery for every special occasion — all in one place.',
    'कलेक्शन देखें': 'Explore Collection', 'हर पल के लिए खास चमक': 'A special sparkle for every moment',
    'वर्षों का अनुभव': 'Years of experience', 'खुश ग्राहक': 'Happy customers', 'डिज़ाइन कलेक्शन': 'Design collections', 'हॉलमार्ट प्रमाणित': 'Hallmark information',
    'हमारे बारे में': 'About Us', 'हर खास मौके के लिए खूबसूरत आभूषण और भरोसेमंद सेवा': 'Beautiful jewellery and thoughtful service for every special occasion', 'हमारी कहानी': 'Our Story',
    'आभूषण सिर्फ़ सजने-सँवरने की चीज़ नहीं, बल्कि हमारी यादों और खास पलों का हिस्सा होते हैं। Sanjay Jewellery में हमारा उद्देश्य है कि आपको सोने, हीरे और अन्य आभूषणों के सुंदर डिज़ाइन एक ही जगह मिलें।': 'Jewellery is more than an accessory—it becomes part of our memories and special moments. At Sanjay Jewellery, we bring beautiful gold, diamond and other jewellery designs together in one place.',
    'शादी, त्योहार या रोज़मर्रा के लिए खरीदारी करते समय आपको धातु, शुद्धता, वजन और कीमत की जानकारी साफ़-साफ़ मिलनी चाहिए। हम आपकी पसंद और बजट समझकर सही विकल्प चुनने में मदद करते हैं—ताकि आप पूरे भरोसे के साथ अपना आभूषण चुन सकें।': 'Whether you are shopping for a wedding, festival or everyday wear, you should be able to understand the metal, purity, weight and price. We help you explore options that suit your taste and budget so you can choose with confidence.',
    'शुद्धता और वजन की स्पष्ट जानकारी': 'Clear purity and weight details', 'हर अवसर के लिए सुंदर डिज़ाइन': 'Beautiful designs for every occasion', 'कीमत और बजट में पारदर्शिता': 'Transparent pricing and budget options', 'पसंद के अनुसार चुनने में सहायता': 'Help choosing what suits you',
    'कीमत में पारदर्शिता': 'Transparent Pricing', 'आभूषण का वजन, शुद्धता और कीमत समझकर चुनें—हम खरीद से पहले ज़रूरी जानकारी स्पष्ट बताते हैं।': 'Choose with a clear understanding of jewellery weight, purity and price. Ask us for product details before buying.',
    'खरीद के बाद भी साथ': 'Here to Help After Purchase', 'आभूषण की देखभाल और सही उपयोग के लिए हमारी टीम से सलाह लें।': 'Contact our team for jewellery care and usage guidance.',
    'हमारे कलेक्शन': 'Our Collections', 'हर अवसर के लिए एक खास आभूषण — किसी भी आभूषण के पास': 'Find a special piece for every occasion — select Live Preview on any item', 'दबाएं': '', 'Live Preview': 'Live Preview',
    'आज का लाइव भाव': 'Live Market Rates Today', 'सोना 24K': 'Gold 24K', 'चांदी 999': 'Silver 999', 'भाव लोड हो रहा है…': 'Loading rate…', 'प्रति ग्राम': 'per gram', 'लाइव market rate': 'Live market rate',
    'लाइव अंतरराष्ट्रीय spot भाव का INR प्रति ग्राम रूपांतरण; आभूषण की अंतिम कीमत में purity, making charges और GST अलग हो सकते हैं।': 'International spot rates converted to INR per gram. Jewellery prices may also include purity differences, making charges and GST.',
    'सभी': 'All', 'सोना': 'Gold', 'हीरा': 'Diamond', 'चांदी': 'Silver', 'ब्राइडल': 'Bridal',
    'सोने की कंगन': 'Gold Bangles', '18K गोल्ड ब्रेसलेट और कंगन': '18K gold bracelets and bangles', 'सोने की माला': 'Gold Necklace', '22K सोने की डिज़ाइन माला': '22K gold design necklace',
    'हीरे की अंगूठी': 'Diamond Ring', 'LGC प्रमाणित हीरे की अंगूठी': 'LGC-certified diamond ring', 'हीरे की झुमकी': 'Diamond Earrings', 'डिज़ाइनर डायमंड झुमकी': 'Designer diamond earrings',
    'चांदी की कलाई घड़ी': 'Silver-Tone Wristwatch', 'मेटल ब्रेसलेट और सिल्वर डायल वाली क्लासिक एनालॉग घड़ी': 'Classic analogue watch with a metal bracelet and silver dial',
    'चांदी के कान के बाल': 'Silver Earrings', 'एंटीक सिल्वर ईयररिंग': 'Antique-finish silver earrings', 'ब्राइडल सेट': 'Bridal Set', 'पूरा ब्राइडल ज्वैलरी सेट': 'Complete bridal jewellery set', 'तिक्का सेट': 'Tikka Set', 'ब्राइडल माथे की टीका सेट': 'Bridal forehead tikka set',
    '₹25,000 से शुरू': 'From ₹25,000', '₹1,50,000 से शुरू': 'From ₹1,50,000', '₹15,000 से शुरू': 'From ₹15,000', '₹50,000 से शुरू': 'From ₹50,000', '₹3,000 से शुरू': 'From ₹3,000', '₹2,500 से शुरू': 'From ₹2,500', '₹2,00,000 से शुरू': 'From ₹2,00,000', '₹1,00,000 से शुरू': 'From ₹1,00,000',
    'हमारी सेवाएं': 'Our Services', 'खरीद से पहले जानकारी लें; उपलब्धता और शर्तें हर उत्पाद पर निर्भर हो सकती हैं।': 'Ask before buying; availability and terms can vary by product.',
    'उत्पाद की जानकारी': 'Product Details', 'शुद्धता, वजन, बनवाई शुल्क और प्रमाणपत्र की उपलब्धता हर उत्पाद में अलग हो सकती है—खरीद से पहले विवरण पूछें।': 'Purity, weight, making charges and certificates vary by item. Please ask for details before purchase.',
    'एक्सचेंज की शर्तें': 'Exchange Terms', 'पुराने आभूषण का विनिमय उपलब्ध है या नहीं, उसका मूल्यांकन और लागू कटौती—इनकी जानकारी पहले लें।': 'Ask whether exchange is available and confirm valuation and any deductions before proceeding.',
    'डिज़ाइन पर सलाह': 'Design Guidance', 'उपलब्ध डिज़ाइन और नाप के विकल्प देखें। विशेष ऑर्डर की कीमत और समय डिज़ाइन के अनुसार तय होगा।': 'Explore available designs and sizes. Custom order price and timing depend on the design.',
    'डिलीवरी की जानकारी': 'Delivery Details', 'डिलीवरी आपके PIN code और उत्पाद की उपलब्धता पर निर्भर है। शुल्क और अनुमानित समय ऑर्डर से पहले पूछें।': 'Delivery depends on your PIN code and product availability. Ask about charges and timing before ordering.',
    'गैलरी': 'Gallery', 'हमारी कुछ खास बनावटें — क्लिक करके Live Preview देखें': 'A few featured designs — click to view a Live Preview', 'सोना हार': 'Gold Necklace', 'डायमंड रिंग': 'Diamond Ring', 'सोने की चूड़ियां': 'Gold Bangles', 'टीका सेट': 'Tikka Set',
    'ग्राहकों की राय': 'Customer Reviews', 'आप सब की पसंद हमारी पहचान': 'Your trust means everything to us',
    'शादी के लिए सोना हार खरीदा, दाम बिल्कुल उचित था। हॉलमार्ट भी लगा हुआ मिला। सबने तारीफ की!': 'I bought a gold necklace for my wedding. The price was fair, and everyone admired the design.',
    'हीरे की अंगूठी ली, LGC प्रमाणपत्र के साथ। महंगा लेकिन भरोसा है। हर महीने माता को नया आभूषण लाता हूं।': 'I bought a diamond ring with an LGC certificate. The service made me feel confident about my purchase.',
    'पुराना सोना बदला और नया डिज़ाइन बनवाया। दुकानदार भैया ने सब समझाया। सेवा बहुत अच्छी है।': 'I exchanged old gold for a new design. Everything was explained clearly and the service was helpful.',
    'प्रिया शर्मा': 'Priya Sharma', 'राहुल गुप्ता': 'Rahul Gupta', 'सीता देवी': 'Sita Devi', 'दिल्ली': 'Delhi', 'लखनऊ': 'Lucknow', 'पटना': 'Patna',
    'संपर्क करें': 'Contact Us', 'आपकी सेवा में हम हमेशा तैयार हैं': 'We are happy to help', 'पता': 'Address', 'संजय ज्वैलर्स, गोपीगंज, ज्ञानपुर रोड, सोनखरी': 'Sanjay Jewellers, Gopiganj, Gyanpur Road, Sonkhri', 'शहर, पिनकोड': 'City, PIN code', 'फोन': 'Phone', 'ईमेल': 'Email', 'समय': 'Hours', 'सोमवार से शनिवार: सुबह 10:00 — शाम 7:00': 'Monday to Saturday: 10:00 AM — 7:00 PM',
    'संदेश भेजें': 'Send Message', 'आपका नाम': 'Your Name', 'फोन नंबर': 'Phone Number', 'संदेश': 'Message', 'नाम लिखें': 'Enter your name', 'ईमेल पता': 'Email address', 'आपका संदेश यहां लिखें...': 'Write your message here…',
    'सर्वाधिकार सुरक्षित।': 'All rights reserved.', 'प्रामाणिक ज्वैलरी • उचित दाम • सच्चा भरोसा': 'Jewellery • Clear pricing • Trusted service', 'BIS हॉलमार्ट प्रमाणित': 'BIS Hallmarked', 'LGC प्रमाणित हीरे': 'LGC-certified diamonds', 'फ्री क्लीनिंग सुविधा': 'Jewellery cleaning service', 'सुरक्षित होम डिलीवरी': 'Home delivery', 'WhatsApp पर पूछें': 'Ask on WhatsApp',
    'हिंदी / EN': 'English / हिंदी',
    'Music': 'Music',
    'Music On': 'Music On',
    'Music Off': 'Music Off',
    'संगीत चालू': 'Music On',
    'संगीत बंद': 'Music Off',
    'ग्राहक लॉगिन': 'Customer Login',
    'जल्द ही आ रहा है। अभी हमसे संपर्क करें।': 'Coming soon. Please contact us for now.',
    'फोन नंबर': 'Phone Number',
    '+91 00000 00000': '+91 00000 00000',
    '6 अंकों का OTP': '6-digit OTP',
    'लॉगिन करें': 'Login',
    'धन्यवाद! हम जल्द ही': 'Thanks! We will contact you soon at',
    'पर आपसे संपर्क करेंगे।': '.',
    'Thanks! We will contact you soon at': 'Thanks! We will contact you soon at',
    'Please enter a valid phone number.': 'Please enter a valid phone number.',
    'कृपया एक वैध फोन नंबर दर्ज करें।': 'Please enter a valid phone number.'
};

function localizedCopy(text) {
    return activeLanguage === 'en' ? (ENGLISH_COPY[text] || text) : text;
}

function applySiteLanguage(language) {
    activeLanguage = language === 'en' ? 'en' : 'hi';
    localStorage.setItem(LANGUAGE_KEY, activeLanguage);
    document.documentElement.lang = activeLanguage;
    languageTextNodes.forEach(({ node, originalValue, originalText }) => {
        node.nodeValue = originalValue.replace(originalText, localizedCopy(originalText));
    });
    document.querySelectorAll('.language-toggle').forEach(button => {
        const label = button.querySelector('#languageLabel');
        if (label) label.textContent = activeLanguage === 'hi' ? 'हिंदी / EN' : 'English / हिंदी';
        button.setAttribute('aria-label', activeLanguage === 'hi' ? 'Switch to English' : 'हिंदी में बदलें');
        button.setAttribute('aria-pressed', String(activeLanguage === 'en'));
    });
    const loginButton = document.getElementById('loginIcon');
    if (loginButton) {
        const label = activeLanguage === 'en' ? 'Customer login' : 'ग्राहक लॉगिन';
        loginButton.setAttribute('aria-label', label);
        loginButton.title = label;
    }
}

// Cache each original text node so language switching is reversible and safe.
const languageTextNodes = [];
const languageTextWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (languageTextWalker.nextNode()) {
    const node = languageTextWalker.currentNode;
    const original = node.nodeValue.trim();
    if (original && ENGLISH_COPY[original]) languageTextNodes.push({ node, originalValue: node.nodeValue, originalText: original });
}

document.getElementById('languageToggle')?.addEventListener('click', () => {
    applySiteLanguage(activeLanguage === 'hi' ? 'en' : 'hi');
});
const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');

function openLoginModal() {
    if (!loginModal) return;
    loginModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLoginModal() {
    if (!loginModal) return;
    loginModal.classList.remove('open');
    document.body.style.overflow = '';
    if (loginForm) loginForm.reset();
}

document.getElementById('loginIcon')?.addEventListener('click', openLoginModal);
document.getElementById('loginModalClose')?.addEventListener('click', closeLoginModal);
loginModal?.querySelector('.login-backdrop')?.addEventListener('click', closeLoginModal);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && loginModal?.classList.contains('open')) closeLoginModal();
});

loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const phone = document.getElementById('loginPhone')?.value?.trim();
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,20}$/;
    if (!phone || !phoneRegex.test(phone)) {
        alert(activeLanguage === 'en'
            ? 'Please enter a valid phone number.'
            : 'कृपया एक वैध फोन नंबर दर्ज करें।');
        return;
    }
    const message = activeLanguage === 'en'
        ? `Thanks! We will contact you soon at ${phone}.`
        : `धन्यवाद! हम जल्द ही ${phone} पर आपसे संपर्क करेंगे।`;
    alert(message);
    closeLoginModal();
});

// ============================================
// Background music toggle
// ============================================
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicLabel = document.getElementById('musicLabel');
let musicPlaying = false;

function updateMusicButton() {
    if (!musicToggle) return;
    musicToggle.classList.toggle('playing', musicPlaying);
    musicToggle.setAttribute('aria-pressed', String(musicPlaying));
    if (musicLabel) {
        musicLabel.textContent = activeLanguage === 'en'
            ? (musicPlaying ? 'Music On' : 'Music Off')
            : (musicPlaying ? 'संगीत चालू' : 'संगीत बंद');
    }
    musicToggle.setAttribute('aria-label', activeLanguage === 'en'
        ? (musicPlaying ? 'Turn music off' : 'Turn music on')
        : (musicPlaying ? 'संगीत बंद करें' : 'संगीत चालू करें'));
    musicToggle.setAttribute('title', activeLanguage === 'en'
        ? (musicPlaying ? 'Turn music off' : 'Turn music on')
        : (musicPlaying ? 'संगीत बंद करें' : 'संगीत चालू करें'));
}

async function toggleMusic() {
    if (!bgMusic) return;
    try {
        if (musicPlaying) {
            bgMusic.pause();
            musicPlaying = false;
        } else {
            await bgMusic.play();
            musicPlaying = true;
        }
    } catch (err) {
        console.warn('Music playback failed:', err.message);
        musicPlaying = false;
    }
    updateMusicButton();
}

musicToggle?.addEventListener('click', toggleMusic);

// Try autoplay on page load. Most browsers block this until the user interacts.
if (bgMusic) {
    bgMusic.volume = 0.35;
    bgMusic.play().then(() => {
        musicPlaying = true;
        updateMusicButton();
    }).catch(() => {
        // Autoplay blocked. User can click the music button to enable.
        musicPlaying = false;
        updateMusicButton();
    });
}

applySiteLanguage(activeLanguage);
