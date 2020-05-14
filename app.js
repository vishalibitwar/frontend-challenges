const projects = [
  {
    name: 'four-card-feature-section'
  },
  {
    name: 'huddle-landing-page'
  },
  {
    name: 'single-price-grid-component'
  }
];

const color = ['cyan', 'magenta', 'lightgreen', 'blueviolet', 'orangered', 'aquamarine'];

const list = document.getElementById('list');

projects.forEach(({ name }, i) => {
  const listItem = document.createElement('li');
  listItem.style.borderBottomColor = color[i];

  listItem.innerHTML = `
		<a href="./${name}/index.html" target="_blank">
			<img src="./${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${formatProjectName(name)}</p>
		</a>
	`;

  list.appendChild(listItem);
});

function formatProjectName(name) {
  return name.split('-').map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');

}