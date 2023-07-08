//import 'supUkr.css';

const supUkrList = [
{
title: 'Save the Children',
url:
'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
img: './images/image 4.png',
},
{
title: 'Project HOPE',
url: 'https://www.projecthope.org/country/ukraine/',
img: '../images/logo_project_Hope.png',
},
{
title: 'UNITED24',
url: 'https://u24.gov.ua/uk',
img: '/images/logo_united24.png',
},
{
title: 'International Medical Corps',
url: 'https://internationalmedicalcorps.org/country/ukraine/',
img: '/src/images/logo_IMC.png',
},
{
title: 'Medicins Sans Frontieres',
url: 'https://www.msf.org/ukraine',
img: null,
},
{
title: 'RAZOM',
url: 'https://www.razomforukraine.org/',
img: null,
},
{
title: 'Action against hunger',
url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
img: null,
},
{
title: 'World vision',
url: 'https://www.wvi.org/emergencies/ukraine',
img: null,
},
{
title: 'Serhiy Prytula Charity Foundation',
url: 'https://prytulafoundation.org/en',
img: null,
},
]

const supportUkraineList = document.querySelector('.supportUkraine__list');

createListOrg(supUkrList);

function createListOrg(supUkrList) {
    const createCardOrg = supUkrList.map(
        ({
            title,
            url,
            img,
        }, index) => {
            const listNumber = "0"+ (index + 1);
            return `<div class="supportUkraine__list-card">
        <p>${listNumber.slice(-2)}</p>
    <a href="${url}" target ="_blank">
      <img class="photo-img" src="${img}" alt="${title}" loading="lazy" />
    </a>
    </div>`;
        }
    )
    .join(''); 
    supportUkraineList.insertAdjacentHTML('beforeend', createCardOrg);
}