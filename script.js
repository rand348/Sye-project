const branches = document.querySelectorAll('.branch');

const cardsSections = document.querySelectorAll('.cards-section');

branches.forEach(branch => {

  branch.addEventListener('click', () => {

    const targetId = branch.getAttribute('data-target');

    cardsSections.forEach(section => {

      if(section.id === targetId){

        section.classList.toggle('active');

      } else {

        section.classList.remove('active');

      }

    });

    // Close all card contents

    document.querySelectorAll('.card-content').forEach(content => {const branches = document.querySelectorAll('.branch');

const cardsSections = document.querySelectorAll('.cards-section');

branches.forEach(branch => {

  branch.addEventListener('click', () => {

    const targetId = branch.getAttribute('data-target');

    cardsSections.forEach(section => {

      if(section.id === targetId){

        section.classList.toggle('active');

      } else {

        section.classList.remove('active');

      }

    });document.querySelectorAll('.card-content').forEach(content => {

      content.style.display = 'none';

    });

  });

});

document.querySelectorAll('.card').forEach(card => {

  card.addEventListener('click', () => {

    const content = card.querySelector('.card-content');

    if(!content) return;

    document.querySelectorAll('.card-content').forEach(c => {

      if(c !== content){c.style.display = 'none';

      }

    });

    content.style.display = content.style.display === 'block' ? 'none' : 'block';

  });

});
