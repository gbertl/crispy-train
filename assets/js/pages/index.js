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
    title: 'Root',
    urls: [
      '404.html',
      'account-notifications.html',
      'account-settings.html',
      'airbnb-for-work.html',
      'basics-error.html',
      'calendar_agenda.html',
      'calendar.html',
      'calendar_week.html',
      'contact-host.html',
      'covidsafety.html',
      'dashboard.html',
      'edit-photo.html',
      'experiences.html',
      'experienceType.html',
      'explore.html',
      'explore-when.html',
      'explore-where.html',
      'explore-who.html',
      'forgot_password.html',
      'gift.html',
      'help.html',
      'inbox.html',
      'index.html',
      'insights.html',
      'invite-friends.html',
      'login-security.html',
      'merchandising.html',
      'notifications.html',
      'online-experience.html',
      'payment.html',
      'personal-info.html',
      'places.html',
      'preferences.html',
      'press-release.html',
      'privacy-and-sharing.html',
      'products.html',
      'products-luxe.html',
      'products-plus.html',
      'professional-hosting.html',
      'profile.html',
      'profile-reviews.html',
      'resolutions_2.html',
      'resolutions_3.html',
      'resolutions.html',
      'resolutions_pay.html',
      'resources.html',
      'reviews.html',
      'reviews-tell-us.html',
      'signup_login.html',
      'specific_trip.html',
      'transaction_history.html',
      'trips.html',
      'welcome_back.html',
      'wishlist.html',
      'wishlists.html',
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
    title: 'Edit',
    urls: [
      'edit/about.html',
      'edit/bring.html',
      'edit/GuestReq.html',
      'edit/photos.html',
      'edit/title.html',
      'edit/what.html',
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
  {
    title: 'Submission',
    urls: [
      'submission/about.html',
      'submission/basic.html',
      'submission/booking.html',
      'submission/bring.html',
      'submission/cancel.html',
      'submission/discounts.html',
      'submission/etd.html',
      'submission/expertise.html',
      'submission/exp_type.html',
      'submission/GeneralV.html',
      'submission/GroupSize.html',
      'submission/GuestP.html',
      'submission/guestReq.html',
      'submission/overview.html',
      'submission/participation.html',
      'submission/photo.html',
      'submission/review.html',
      'submission/theme.html',
      'submission/title.html',
      'submission/tq.html',
      'submission/video.html',
      'submission/wwd.html',
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
