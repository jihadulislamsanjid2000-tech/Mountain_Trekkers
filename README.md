# মাউন্টেন ট্রেকার্স — চালু করার নিয়ম

## ১. GitHub-এ আপলোড
1. github.com-এ নতুন রিপোজিটরি খুলুন (যেমন `mountain-trekkers`)।
2. এই জিপ আনজিপ করে ভেতরের সব ফাইল-ফোল্ডার (`public`, `netlify`, `netlify.toml`, `package.json`) রিপোজিটরিতে আপলোড করুন।
   ফোল্ডার কাঠামো ঠিক এমন থাকতে হবে:
   - public/index.html
   - netlify/functions/api.mjs
   - netlify.toml
   - package.json

## ২. Netlify-তে ডিপ্লয়
1. netlify.com → Add new site → Import an existing project → GitHub → রিপোজিটরি বেছে নিন।
2. Build command ও Publish directory যা দেখায় তাই থাকুক (ফাঁকা বা netlify.toml থেকে নেবে)। Deploy চাপুন।

## ৩. অ্যাডমিন পাসওয়ার্ড বসানো (জরুরি)
1. Netlify → Site configuration → Environment variables → Add a variable।
2. Key: `ADMIN_PASSWORD`, Value: আপনার পছন্দের শক্ত পাসওয়ার্ড।
3. তারপর Deploys → Trigger deploy → Deploy site (নতুন করে ডিপ্লয় না করলে পাসওয়ার্ড কাজ করবে না)।

## ৪. ব্যবহার
- সাইটের একদম নিচে ফুটারে "অ্যাডমিন" লিংকে ক্লিক → পাসওয়ার্ড দিন।
- নিচে ডানে "⚙️ অ্যাডমিন" বাটন আসবে → প্যাকেজ, ছবি, ডিসকাউন্ট, সেটিং এডিট করুন → "সেভ ও প্রকাশ" চাপুন।
- সেভ করলেই সাইট সঙ্গে সঙ্গে আপডেট হবে, আর GitHub-এ কিছু আপলোড করতে হবে না।
- ওয়েবসাইট সেটিং-এ WhatsApp নাম্বার দেশ কোড সহ দিন: `8801XXXXXXXXX` (+ বা ০ ছাড়া)।
