from pathlib import Path
import re

base = Path('.')
files = sorted(base.rglob('*.html'))
for path in files:
    text = path.read_text(encoding='utf-8')
    rel = path.parent
    logo_path = Path('images/logo.png').relative_to(rel).as_posix() if rel != Path('.') else 'images/logo.png'
    favicon_path = Path('images/favicon.png').relative_to(rel).as_posix() if rel != Path('.') else 'images/favicon.png'

    if 'rel="icon"' not in text:
        text, n = re.subn(r'(<link rel="stylesheet" href="[^"]+">)', r'\1\n    <link rel="icon" href="' + favicon_path + '">', text, count=1)
        if n == 0:
            print(f'Warning: stylesheet link not found in {path}')

    def replace_brand(match):
        attrs = match.group(1)
        return f'<a{attrs}><img src="{logo_path}" alt="Tunza Dada logo"><span>Tunza Dada</span></a>'
    text, n_brand = re.subn(r'<a([^>]*class="brand"[^>]*)>.*?</a>', replace_brand, text, count=1, flags=re.S)

    contact_link = Path('pages/contact.html').relative_to(rel).as_posix() if rel != Path('.') else 'pages/contact.html'
    donate_link = Path('pages/donate.html').relative_to(rel).as_posix() if rel != Path('.') else 'pages/donate.html'
    programs_link = Path('pages/programs.html').relative_to(rel).as_posix() if rel != Path('.') else 'pages/programs.html'
    volunteer_link = Path('volunteer').relative_to(rel).as_posix() if rel != Path('.') else 'volunteer/'
    if not volunteer_link.endswith('/'):
        volunteer_link += '/'

    footer_html = f'''<footer class="site-footer">
        <div class="container footer-inner">
            <div class="footer-main">
                <div class="footer-logo">
                    <img src="{logo_path}" alt="Tunza Dada logo">
                    <span>Tunza Dada</span>
                </div>
                <div class="footer-links">
                    <a href="{contact_link}">Contact</a>
                    <a href="{volunteer_link}">Volunteer</a>
                    <a href="{programs_link}">Programs</a>
                    <a href="{donate_link}">Donate</a>
                </div>
            </div>
            <div class="footer-bottom-row">
                <div class="social-links">
                    <a href="https://www.linkedin.com/company/tunzadada" target="_blank" aria-label="LinkedIn">in</a>
                    <a href="https://www.instagram.com/tunza.dada/" target="_blank" aria-label="Instagram">📷</a>
                    <a href="https://web.facebook.com/tunzadada/" target="_blank" aria-label="Facebook">f</a>
                </div>
                <div class="footer-contact">
                    <p>hello@tunzadada.org | hellotunza@gmail.com<br>+254 733 708 224</p>
                </div>
            </div>
            <div class="footer-copyright">
                <p>© 2026 Tunza Dada. All rights reserved.</p>
            </div>
        </div>
    </footer>'''

    footer_rx = re.compile(r'(?s)<footer\s+class=["\"]site-footer["\"][^>]*>.*?</footer>')
    if not footer_rx.search(text):
        footer_rx = re.compile(r'(?s)<footer\s+class=\\?["\"]site-footer\\?["\"][^>]*>.*?</footer>')
    text, n_footer = footer_rx.subn(footer_html, text, count=1)

    path.write_text(text, encoding='utf-8')
    print(f'Updated {path} (brand {n_brand}, footer {n_footer})')
