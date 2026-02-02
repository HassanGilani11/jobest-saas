# Jobest - Job Posting and Job-Seeking SaaS

Jobest is a modern, full-featured Job Portal SaaS application built with **Next.js 15**, **Prisma**, and **PostgreSQL**. It connects candidates with employers, offering advanced dashboards, multi-language support (English, French, Arabic), and seamless job management.

## 🚀 Tech Stack

-   **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
-   **Database**: PostgreSQL (via [Prisma ORM](https://www.prisma.io/))
-   **Authentication**: [NextAuth.js](https://next-auth.js.org/) (Google, GitHub, Credentials)
-   **Styling**: Bootstrap 5, Sass, Custom CSS
-   **Image Uploads**: [Cloudinary](https://cloudinary.com/)
-   **Internationalization**: Custom i18n implementation (en, fr, ar)

## ✨ Key Features

### For Candidates
-   **Professional Profile**: Manage experience, education, and skills.
-   **Job Search**: Advanced filtering by category, location, and type.
-   **Applications**: Track applied jobs and status in real-time.
-   **CV Upload**: Resume management via Cloudinary.

### For Employers
-   **Company Profile**: Manage company details and branding.
-   **Job Posting**: Create and manage job listings with rich details.
-   **Applicant Tracking**: View and manage candidate applications.

### Admin Dashboard
-   **Overview**: System-wide statistics.
-   **Management**: Moderate companies, jobs, and users.

## 🛠️ Getting Started

### Prerequisites
-   Node.js 18+
-   PostgreSQL Database (Local or Cloud like Neon/Supabase)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/HassanGilani11/jobest-saas.git
    cd jobest-saas
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Environment Setup**:
    Create a `.env` file in the root directory (copy `.env.example` if available) and add:
    ```env
    # Database
    DATABASE_URL="postgresql://user:password@host:port/dbname?schema=public"

    # NextAuth
    NEXTAUTH_URL="http://localhost:3000"
    NEXTAUTH_SECRET="your-super-secret-key"

    # Auth Providers
    GITHUB_ID="your-github-id"
    GITHUB_SECRET="your-github-secret"
    GOOGLE_CLIENT_ID="your-google-client-id"
    GOOGLE_CLIENT_SECRET="your-google-client-secret"

    # Cloudinary
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
    NEXT_PUBLIC_CLOUDINARY_PRESET="your-upload-preset"
    CLOUDINARY_URL="cloudinary://key:secret@cloud_name"
    ```

4.  **Database Setup**:
    Push the schema to your database:
    ```bash
    npx prisma db push
    ```

5.  **Run the Application**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 Admin Access (Development Only)

By default, new users are registered with the `USER` role. To access the Admin Dashboard during development:

1.  Register/Login as a normal user.
2.  Visit this temporary URL: **[http://localhost:3000/api/admin/promote-me](http://localhost:3000/api/admin/promote-me)**
3.  You will receive a success message promoting you to `ADMIN`.
4.  Access the dashboard at **[http://localhost:3000/en/admin/dashboard](http://localhost:3000/en/admin/dashboard)**.

> **Note**: Remove the `/api/admin/promote-me` route before deploying to production!

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
