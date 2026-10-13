'use strict';
document.body.classList.add('js');
const nav = document.querySelector('#main-nav');
const toggle = document.querySelector('.menu-toggle');
const links = [...nav.querySelectorAll('a')];
function closeMenu() {
  nav.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', '메뉴 열기');
}
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
});
links.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('is-open')) {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
});
const sections = [...document.querySelectorAll('main section[id]')];
let scheduled = false;
function updateNavigation() {
  let current = sections[0].id;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 160) current = section.id;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = sections.at(-1).id;
  for (const link of links) {
    if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  scheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); }
}, { passive: true });
window.addEventListener('resize', () => { if (window.innerWidth >= 768) closeMenu(); updateNavigation(); });
updateNavigation();
const email = document.querySelector('#emailText').textContent.trim();
let copyTimer;
document.querySelector('#copyBtn').addEventListener('click', async () => {
  const label = document.querySelector('#copyBtnText');
  try {
    await navigator.clipboard.writeText(email);
    label.textContent = '복사됨!';
  } catch {
    window.prompt('이메일 주소를 복사해 주세요.', email);
    label.textContent = '복사';
  }
  clearTimeout(copyTimer);
  copyTimer = setTimeout(() => { label.textContent = '복사'; }, 2000);
});
document.querySelector('#copyBtnText').setAttribute('aria-live', 'polite');
document.querySelector('#contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const value = id => document.getElementById(id).value.trim();
  const subject = value('messageSubject');
  const body = `이름: ${value('senderName')}\n이메일: ${value('senderEmail')}\n\n${value('messageContent')}`;
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#formSuccessAlert').classList.remove('hidden');
});
