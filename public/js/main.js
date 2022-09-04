// select
for (const dropdown of document.querySelectorAll(".switch-lang-wrapper")) {
    dropdown.addEventListener('click', function() {
        this.querySelector('.switch-lang-container').classList.toggle('open');
    })
}

for (const option of document.querySelectorAll(".switch-lang-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.switch-lang-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.switch-lang-container').querySelector('.switch-lang-trigger span').innerHTML = this.innerHTML;
        }
    })
}

window.addEventListener('click', function(e) {
    for (const select of document.querySelectorAll('.switch-lang-container')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});



// FAQ Accordion

const items = document.querySelectorAll(".faq-accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));