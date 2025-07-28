# 🚀 IdeaSynth

![MIT License](https://img.shields.io/badge/license-MIT-green)
![Build Status](https://img.shields.io/github/actions/workflow/status/akash-vcomply/IdeaFoundry/ci.yml?branch=main)
![Discussions](https://img.shields.io/github/discussions/akash-vcomply/IdeaFoundry)
![Issues](https://img.shields.io/github/issues/akash-vcomply/IdeaFoundry)

AI-assisted platform to collect, manage, and auto-generate structured product ideas (PRDs) with GPT-suggested tech stacks and ready-to-use prompts.

---

## 🧠 What It Does
- Collects and stores product ideas
- Uses GPT to summarize and add metadata
- Generates PRDs and agentic prompts
- Suggests tech stacks
- Dashboard for viewing and generating outputs

---

## 🛠️ Tech Stack
- Frontend: Next.js + React
- Backend: Node.js or FastAPI
- DB: PostgreSQL (Supabase) or MongoDB
- Auth: Supabase Auth / Clerk / Firebase
- LLM: OpenAI GPT-4o/4.5
- Extras: Prisma, LangChain

---

## 🗂️ Folder Structure
```
ideaSynth/
├── components/
├── pages/
├── api/
├── lib/
├── prisma/
├── prompts/
```

---

## 💻 Local Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/akash-vcomply/IdeaFoundry.git
   cd IdeaFoundry/projects/ideaSynth
   ```
2. **Install dependencies**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Set up environment variables**
   - Create a `.env.local` file:
     ```env
     OPENAI_API_KEY=your_openai_key_here
     DATABASE_URL=your_database_url_here
     ```
4. **Run database migrations (if using Prisma)**
   ```sh
   npx prisma migrate dev
   ```
5. **Start the development server**
   ```sh
   npm run dev
   # or
   yarn dev
   ```
6. **Access the app**
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📚 Usage
- Submit ideas via the dashboard
- Generate PRDs and prompts with one click
- View, edit, and copy outputs for agentic platforms

---

## 🤝 Contributing
See the main [CONTRIBUTING.md](../../CONTRIBUTING.md) for guidelines.

---

## 📜 License
MIT License. See [LICENSE](../../LICENSE).
