const about = document.getElementById('about');
const name = document.getElementById('name');
const designation = document.getElementById('designation');
const profile = document.getElementById('profile-image');

const profiles = [
  {
    name: 'Tanya Sinclair',
    designation: 'Ux Engineer',
    about: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    src: './images/image-tanya.jpg'
  },
  {
    name: 'John Tarkpor',
    designation: 'Junior Front-end Developer',
    about: ' “If you want to lay the best foundation possible I’d recommend taking this course.The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”  ',
    src: './images/image-john.jpg'
  }
];

let current = 0;
function updateData(current) {
  name.innerText = `${profiles[current].name}`;
  designation.innerText = `${profiles[current].designation}`;
  about.innerText = `${profiles[current].about}`;
  profile.src = `${profiles[current].src}`;
}

window.addEventListener('load', updateData(0));

function next() {
  current + 1 >= profiles.length ? current = 0 : ++current;
  updateData(current);
}

function prev() {
  current - 1 <= 0 ? current = 0 : --current;
  updateData(current);
}






