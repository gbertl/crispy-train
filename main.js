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
      'airbnb-for-work.html',
      'basics.html',
      'calendar_agenda.html',
      'calendar_week.html',
      'covidsafety.html',
      'experiences.html',
      'experienceType.html',
      'gift.html',
      'help.html',
      'homepage.html',
      'homepage-when.html',
      'homepage-where.html',
      'inbox.html',
      'insights.html',
      'invite-friends.html',
      'merchandising.html',
      'notifications.html',
      'payment.html',
      'personal-info.html',
      'preferences.html',
      'press-release.html',
      'privacy-and-sharing.html',
      'professional-hosting.html',
      'profile-reviews.html',
      'resolutions_3.html',
      'resolutions_pay.html',
      'reviews.html',
      'reviews-tell-us.html',
      'signup_login.html',
      'specific_trip.html',
      'transaction_history.html',
      'wishlist.html',
      'wishlists.html',
      'account-settings.html',
      'calendar.html',
      'contact-host.html',
      'explore.html',
      'homepage-who.html',
      'login-security.html',
      'places.html',
      'products.html',
      'resolutions_2.html',
      'resources.html',
      'trips.html',
      'dashboard.html',
      'index.html',
      'profile.html',
      'resolutions.html',
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
      'become-a-host/_location.html',
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

    h1.appendChild(h1Text);
    div.appendChild(h1);
    div.appendChild(ul);

    containerDivs.push(div.outerHTML);
  });

  document.querySelector('.container').innerHTML = containerDivs.join('');
};

updateContainer(sitemap);

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
