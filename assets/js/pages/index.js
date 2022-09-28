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
    title: 'New Pages',
    urls: [
      'accessibility.html',
      'all-topics.html',
      'article.html',
      'dashboard-loader.html',
      'experiences-loader.html',
      'explore-loader.html',
      'feedback.html',
      'help-loader.html',
      'host-liability-insurance.html',
      'host-protection-insurance.html',
      'media-assets.html',
      'media-assets-search.html',
      'media-category.html',
      'media-contact.html',
      'media-home.html',
      'media-search.html',
      'messages.html',
      'messages-loader.html',
      'onlinehost.html',
      'searching-and-booking.html',
      'searching-for-stays.html',
      'search-tips.html',
      'social-impact-host.html',
      'ticket-selection.html',
      'topic.html',
      'video.html',
      'wishlist-loader.html',
    ],
  },
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
    title: 'Add/Edit Listings',
    urls: [
      'edit/about.html',
      'edit/bring.html',
      'edit/GuestReq.html',
      'edit/photos.html',
      'edit/title.html',
      'edit/what.html',
      'submission/about.html',
      'submission/basic.html',
      'submission/basics-error.html',
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
  {
    title: 'Listings & Product',
    urls: [
      'listings-product/contact-host.html',
      'listings-product/explore.html',
      'listings-product/explore-when.html',
      'listings-product/explore-where.html',
      'listings-product/explore-who.html',
      'listings-product/gift.html',
      'listings-product/online-experience.html',
      'listings-product/places.html',
      'listings-product/products.html',
      'listings-product/products-luxe.html',
      'listings-product/products-plus.html',
      'listings-product/specific_trip.html',
      'listings-product/trips.html',
      'listings-product/wishlist.html',
      'listings-product/wishlists.html',
    ],
  },
  {
    title: 'LPs and Resources',
    urls: [
      'lps-resources/404.html',
      'lps-resources/covidsafety.html',
      'lps-resources/help.html',
      'lps-resources/merchandising.html',
      'lps-resources/press-release.html',
      'lps-resources/resources.html',
    ],
  },
  {
    title: 'Messaging',
    urls: ['messaging/inbox.html', 'messaging/notifications.html'],
  },
  {
    title: 'Online Experience',
    urls: [
      'online-experience/calendar_agenda.html',
      'online-experience/calendar.html',
      'online-experience/calendar_week.html',
      'online-experience/dashboard.html',
      'online-experience/experiences.html',
      'online-experience/insights.html',
    ],
  },
  {
    title: 'Payments',
    urls: [
      'payments/guest-contributions.html',
      'payments/payment.html',
      'payments/payment-methods.html',
      'payments/payout-methods.html',
      'payments/resolutions_2.html',
      'payments/resolutions_3.html',
      'payments/resolutions.html',
      'payments/resolutions_pay.html',
      'payments/tax-info.html',
      'payments/your-payments.html',
    ],
  },
  {
    title: 'Reviews',
    urls: [
      'reviews/profile-reviews.html',
      'reviews/reviews.html',
      'reviews/reviews-tell-us.html',
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
    `Search in ${document.querySelectorAll('a').length} pages...`
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
