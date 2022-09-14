window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop) {
    document
      .querySelector('.input-search')
      .classList.add('input-search--scrolled');
  } else {
    document
      .querySelector('.input-search')
      .classList.remove('input-search--scrolled');
  }
});

let sitemap = [
  {
    title: 'Account',
    urls: [
      'account/account-notifications.html',
      'account/account-settings.html',
      'account/airbnb-for-work.html',
      'account/edit-photo.html',
      'account/forgot_password.html',
      'account/invite-friends.html',
      'account/login-security.html',
      'account/personal-info.html',
      'account/preferences.html',
      'account/privacy-and-sharing.html',
      'account/professional-hosting.html',
      'account/profile.html',
      'account/signup_login.html',
      'account/transaction_history.html',
      'account/welcome_back.html',
    ],
  },
  {
    title: 'Become a host',
    urls: [
      'become-a-host/amenities.html',
      'become-a-host/description.html',
      'become-a-host/floor-plan.html',
      'become-a-host/intro.html',
      'become-a-host/legal.html',
      'become-a-host/location.html',
      'become-a-host/photos.html',
      'become-a-host/preview.html',
      'become-a-host/price.html',
      'become-a-host/privacy-type.html',
      'become-a-host/property-type-group.html',
      'become-a-host/property-type.html',
      'become-a-host/title.html',
    ],
  },
  {
    title: 'Experience',
    urls: [
      'experience/edit/about.html',
      'experience/edit/bring.html',
      'experience/edit/GuestReq.html',
      'experience/edit/photos.html',
      'experience/edit/title.html',
      'experience/edit/what.html',
      'experience/submission/about.html',
      'experience/submission/basic.html',
      'experience/submission/basics-error.html',
      'experience/submission/booking.html',
      'experience/submission/bring.html',
      'experience/submission/cancel.html',
      'experience/submission/discounts.html',
      'experience/submission/etd.html',
      'experience/submission/expertise.html',
      'experience/submission/exp_type.html',
      'experience/submission/GeneralV.html',
      'experience/submission/GroupSize.html',
      'experience/submission/GuestP.html',
      'experience/submission/guestReq.html',
      'experience/submission/overview.html',
      'experience/submission/participation.html',
      'experience/submission/photo.html',
      'experience/submission/review.html',
      'experience/submission/theme.html',
      'experience/submission/title.html',
      'experience/submission/tq.html',
      'experience/submission/video.html',
      'experience/submission/wwd.html',
    ],
  },
  {
    title: 'Payments',
    urls: [
      'payments/guest-contributions.html',
      'payments/payment-methods.html',
      'payments/payout-methods.html',
      'payments/tax-info.html',
      'payments/your-payments.html',
    ],
  },
];

const updateContainer = (sitemapLocal) => {
  let containerDivs = [];

  sitemapLocal.forEach((map) => {
    const h1 = document.createElement('h1');
    const h1Text = document.createTextNode(map.title);
    const ul = document.createElement('ul');

    map.urls.forEach((url) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      const aText = document.createTextNode(url);

      a.appendChild(aText);
      a.setAttribute('href', url);
      a.setAttribute('target', '_blank');
      li.appendChild(a);
      ul.appendChild(li);
    });

    const div = document.createElement('div');
    const button = document.createElement('button');
    const bText = document.createTextNode(`Open ${map.urls.length}`);

    button.appendChild(bText);
    h1.appendChild(h1Text);

    div.appendChild(h1);
    if (map.urls.length > 1) div.appendChild(button);
    div.appendChild(ul);

    containerDivs.push(div.outerHTML);
  });

  document.querySelector('.container').innerHTML = containerDivs.join('');

  document.querySelectorAll('button').forEach((b) => {
    const followLink = (e) => {
      e.target
        .closest('div')
        .querySelectorAll('a')
        .forEach((aTag) => {
          window.open(aTag.getAttribute('href'), '_blank');
        });
    };
    b.removeEventListener('click', followLink);
    b.addEventListener('click', followLink);
  });
};

updateContainer(sitemap);

document
  .querySelector('.input-search')
  .setAttribute(
    'placeholder',
    `Search ${document.querySelectorAll('a').length} pages...`
  );

document.querySelector('.input-search').addEventListener('keyup', (e) => {
  const value = e.target.value.trim();

  if (!!value) {
    updateContainer(
      sitemap
        .map((map) => {
          return {
            ...map,
            urls: map.urls.filter((url) => url.includes(value)),
          };
        })
        .filter((map) => map.urls.length)
    );
  } else {
    updateContainer(sitemap);
  }
});
