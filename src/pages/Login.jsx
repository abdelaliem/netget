import React, { useState } from 'react';
import { Eye, EyeOff, Lock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10"
      style={{
        background: 'radial-gradient(circle, #FFFFFF 0%, #FDEEE9 100%)',
        fontFamily: "'Orbitron', sans-serif",
      }}
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <img
          src="/netget-icon-bg.png"
          alt=""
          className="h-[520px] w-[520px] sm:h-[760px] sm:w-[760px]"
          style={{ opacity: 0.22 }}
        />
      </div>

      <section className="relative z-10 w-full max-w-2xl rounded-xl border border-white/50 bg-white/68 p-6 shadow-[0px_10px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4px] sm:p-10">
        <header className="relative mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-wide text-[#111827]">
            Welcome to NET<span className="text-[#F15A24]">GET</span>
          </h1>
          <p className="mt-1 text-4xl font-black uppercase tracking-[0.08em] text-[#111827]">LOGIN</p>
        </header>

        <form className="relative space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-[#111827]">Admin ID / Email</span>
            <div className="relative">
              <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]" />
              <input
                type="email"
                placeholder="admin@netget.io"
                className="h-11 w-full rounded-md border border-[#D1D3D4] bg-white pl-10 pr-3 text-sm outline-none transition focus:border-[#F15A24] focus:ring-2 focus:ring-[#F15A24]/20"
              />
            </div>
          </label>

          <label className="block">
            <div className="mb-1.5 flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[#111827]">Password</span>
              <button type="button" className="text-xs font-semibold text-[#F15A24] hover:opacity-80">
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="********"
                className="h-11 w-full rounded-md border border-[#D1D3D4] bg-white pl-10 pr-12 text-sm outline-none transition focus:border-[#F15A24] focus:ring-2 focus:ring-[#F15A24]/20"
              />
              <button
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] transition hover:text-[#F15A24]"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </label>

          <label className="mt-1 inline-flex cursor-pointer items-center gap-2 text-xs text-[#4B5563]">
            <input type="checkbox" className="h-4 w-4 rounded border-[#D1D3D4] accent-[#F15A24]" />
            Stay logged in
          </label>

          <button
            type="submit"
            className="mt-2 h-11 w-full rounded-md bg-[#F15A24] text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_4px_12px_rgba(241,90,36,0.35)] transition hover:bg-[#d84d1a]"
          >
            login
          </button>
        </form>

        <footer className="relative mt-6 border-t border-[#E5E7EB] pt-4 text-center">
          <p className="inline-flex items-center justify-center rounded-full border border-[#F15A24]/35 bg-[#F15A24]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#F15A24] sm:text-[11px]">
            Two-Factor Authentication (2FA) Secured
          </p>
          <p className="mt-2 text-[11px] font-medium text-[#6B7280]">Enterprise Infrastructure Access Control</p>
          <p className="mt-1 text-[11px] text-[#9CA3AF]">© 2026 NETGET Network Solutions</p>
          <p className="mt-2 text-xs text-[#6B7280]">
            New admin?{' '}
            <Link to="/register" className="font-semibold text-[#F15A24] hover:opacity-80">
              Create account
            </Link>
          </p>
        </footer>
      </section>
    </main>
  );
}

export default Login;
