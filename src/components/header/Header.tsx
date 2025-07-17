import React from 'react';
import styles from './HeaderStyles';

const Header: React.FC<{ isVisible: boolean; activeMenu: string }> = ({
  isVisible,
  activeMenu,
}) => {
  const menuItems = [
    { title: 'Work', href: ' ' },
    { title: 'About', href: ' ' },
    { title: 'Services', href: ' ' },
    { title: 'Ideas', href: ' ' },
    { title: 'Careers', href: ' ' },
    { title: 'Contact', href: ' ' },
  ];

  return (
    <header
      style={{
        ...styles.header,
        ...(isVisible ? styles.headerVisible : styles.headerHidden),
      }}
    >
      <div style={styles.headerBg}>
        <div style={styles.headerContainer}>
          <div style={styles.logo}>
            <img
              src="/LogoHeaderPutih.png"
              alt="Suitmedia Logo"
              style={styles.logoImage}
            />
          </div>

          <nav style={styles.nav}>
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                style={{
                  ...styles.navItem,
                  ...(activeMenu === item.title.toLowerCase()
                    ? styles.activeNavItem
                    : {}),
                }}
                className="nav-link"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <style>
        {`
          .nav-link {
            position: relative;
          }
          .nav-link::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            height: 3px;
            width: 0;
            background-color: white;
            transition: width 0.4s ease;
          }
          .nav-link:hover::after {
            width: 100%;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
