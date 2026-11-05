// Progress rings: set stroke-dasharray from data-percent
document.querySelectorAll('[data-percent]').forEach((circle) => {
  const percent = Number(circle.dataset.percent);
  const r = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * r;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference;
  // Animate to the target value on load
  requestAnimationFrame(() => {
    circle.style.strokeDashoffset = circumference * (1 - percent / 100);
  });
});

// Sidebar: active item
const navItems = document.querySelectorAll('#nav .nav-item');
navItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    navItems.forEach((n) => n.classList.remove('active'));
    item.classList.add('active');
  });
});

// Buttons with actions (replace with real navigation later)
document.querySelectorAll('[data-action]').forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log('Action:', btn.dataset.action);
  });
});

// Keep "#" links from jumping to the top of the page
document.querySelectorAll('a[href="#"]').forEach((a) => {
  a.addEventListener('click', (e) => e.preventDefault());
});