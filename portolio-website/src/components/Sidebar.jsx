import { useState } from 'react'
import { FiHome, FiUser, FiBriefcase, FiFolder, FiMail } from 'react-icons/fi'
import { FaLinkedin, FaGitlab, FaGithub } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'

const navItems = [
  { icon: <FiHome size={20} />, label: 'Home' },
  { icon: <FiUser size={20} />, label: 'About' },
  { icon: <FiBriefcase size={20} />, label: 'Work' },
  { icon: <FiFolder size={20} />, label: 'Portfolio' },
  { icon: <FiMail size={20} />, label: 'Contact' },
]

const socialLinks = [
  { icon: <FaLinkedin size={18} />, href: 'https://linkedin.com/in/ryan-vinh-bui', label: 'LinkedIn' },
  { icon: <FaGithub size={18} />, href: 'https://github.com/Jaehyoonx', label: 'GitHub' },
  { icon: <FaGitlab size={18} />, href: 'https://gitlab.com/rbjae', label: 'GitLab' },
  { icon: <SiDevpost size={18} />, href: 'https://devpost.com/vinhryan', label: 'Devpost' },
]

export default function Sidebar() {
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <div className="flex flex-col items-center justify-between w-14 h-screen bg-[#0d0d0d] py-5 shrink-0" style={{ overflow: 'visible', zIndex: 50 }}>
      {/* Logo */}
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #4a1a8a, #c2476b)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 12px rgba(194, 71, 107, 0.4)',
        }}
      >
        <span style={{ color: 'white', fontWeight: '800', fontSize: '13px', letterSpacing: '0.5px', fontFamily: 'system-ui' }}>
          RB
        </span>
      </div>

      {/* Nav icons */}
      <nav className="flex flex-col items-center gap-7">
        {navItems.map((item) => (
          <div
            key={item.label}
            style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
            onMouseEnter={() => setHoveredItem(item.label)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <button
              style={{ color: hoveredItem === item.label ? 'white' : '#6b7280', transition: 'color 0.2s', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
            >
              {item.icon}
            </button>
            <span
              style={{
                position: 'absolute',
                left: '2.5rem',
                backgroundColor: '#1a1a1a',
                color: 'white',
                fontSize: '11px',
                fontWeight: '500',
                letterSpacing: '0.08em',
                padding: '4px 10px',
                borderRadius: '6px',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                opacity: hoveredItem === item.label ? 1 : 0,
                transform: hoveredItem === item.label ? 'translateX(0)' : 'translateX(-4px)',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
                zIndex: 100,
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </nav>

      {/* Social links */}
      <div className="flex flex-col items-center gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={link.label}
            className="text-gray-500 hover:text-white transition-colors duration-200"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  )
}
