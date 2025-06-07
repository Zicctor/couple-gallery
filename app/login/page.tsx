import type { Metadata } from 'next';
import { LoginForm } from '@/components/LoginForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Login | Zunhee',
  description: 'Access your personal gallery and memories. Secure login to your Zunhee account.',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/login-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Optional: Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Background Pattern (now above video, below content) */}
      <div className="absolute inset-0 opacity-5 z-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2393E1D8' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="w-full max-w-md relative z-30">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
            <span className="font-cormorant text-3xl font-semibold text-[#93E1D8] group-hover:text-[#FFA69E] transition-colors">
              Zunhee
            </span>
          </Link>
          <h1 className="font-cormorant text-4xl font-light text-gray-800 mb-2">
            Chào mừng trở lại
          </h1>
        </div>

        {/* Login Form Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-[#93E1D8]/20 p-8">
          <LoginForm />
        </div>

        {/* Footer Links */}

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#93E1D8] transition-colors group"
          >
            <svg 
              className="h-4 w-4 group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Quay về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}