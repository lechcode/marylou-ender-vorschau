/* Sprachumschalter DE/EN — marylou.at
   Deutsch bleibt die Quelle im HTML. Englisch liegt hier als Wörterbuch,
   adressiert über CSS-Selektoren (kein Umbau des HTML nötig).
   Aufruf: ?lang=en in der Adresse oder Klick auf DE/EN oben rechts.
   Kein Cookie, kein Speicher — die Sprache steckt nur in der Adresse. */
(function(){
  'use strict';

  /* [Selektor, englischer Inhalt, Modus]
     Modus fehlt  -> innerHTML wird ersetzt
     Modus 'text' -> nur der erste Textknoten (für Buttons mit Icon) */
  var EN = [
    /* Navigation & Marke */
    ['.brand .btxt > span', 'Guidance · Music · Retreats · Yoga · Femininity'],
    ['.navlinks a[href$="#angebote"]', 'Offerings'],
    ['.navlinks a[href$="#retreat"]', 'Retreat'],
    ['.navlinks a[href$="#musik"]', 'Music'],
    ['.navlinks a[href$="#ueber"]', 'About me'],
    ['.navlinks a[href^="community.html"]', 'Community'],
    ['.navlinks .btn', 'Get in touch <span class="ar">→</span>'],
    ['a[href="#inhalt"]', 'Skip to content'],

    /* Hero */
    ['.hero .lede', 'I walk a stretch of your journey with you. In my spaces you are invited to fully arrive within yourself again ~ and to show up with all your facets, your voice and your feelings.'],
    ['.hero-cta .btn-primary', 'My offerings <span class="ar">→</span>'],
    ['.hero-cta .btn-ghost', 'More about me'],

    /* Angebote */
    ['#angebote .eyebrow', 'Offerings'],
    ['#angebote .sec-head h2', 'Ways back to <em>you.</em>'],
    ['#angebote .sec-head p', 'Because true healing begins where we meet each other without judgment ~ and don’t have to be perfect.'],
    ['.karte.-begleitung h3', 'One-to-one guidance'],
    ['.karte.-begleitung p', 'Your safe harbour. Through deep listening, breath and sound we create space again for your inner voice and your very own strength.'],
    ['.karte.-begleitung .mehr', 'Enquire <span class="ar">↗</span>'],
    ['.karte.-retreats h3', 'Retreats'],
    ['.karte.-retreats p', 'Your time out in community ~ with yoga, my music and true connection in special places.'],
    ['.karte.-retreats .mehr', 'WE TREAT Morocco 2026 <span class="ar">→</span>'],
    ['.karte.-yoga h3', 'Yoga'],
    ['.karte.-yoga p', 'Through gentle, grounding Yin Yoga I invite you to travel deep into your body. One-to-one or in a group.'],
    ['.karte.-yoga .mehr', 'Join the yoga group <span class="ar">↗</span>'],
    ['.karte.-frauen h3', 'Women’s circles'],
    ['.karte.-frauen p', 'A place for sharing, healing and feminine strength. Here we reconnect with our intuition and the carrying magic of true sisterhood.'],
    ['.karte.-frauen .mehr', 'Join the circle <span class="ar">↗</span>'],

    /* Musik */
    ['#musik .eyebrow', 'Music'],
    ['#musik .sec-head h2', 'Medicine for heart and <em>soul.</em>'],
    ['#musik .sec-head p:nth-of-type(1)', 'Like my guidance, my music is born from vulnerability and deep connection. To me it is more than sound: a language without words, gentle medicine for your nervous system and a reminder of who you are at your core.'],
    ['#musik .sec-head p:nth-of-type(2)', 'Take a moment for yourself, breathe, and let the sounds work on you:'],
    ['.player-links .-spotify', ' All songs on Spotify ', 'text'],
    ['.musik-anlass p', 'I also share my music at private ceremonies or for a very personal occasion ~ feel free to reach out.'],
    ['.musik-anlass .btn', 'Get in touch <span class="ar">→</span>'],

    /* Über mich */
    ['#ueber .eyebrow', 'About me'],
    ['.ueber-text h2', 'Gentle. Feminine. <em>Connecting.</em>'],
    ['.ueber-text p:nth-of-type(1)', 'Music has always been so much more to me than beautiful sound ~ it is my personal way back to myself, my anchor and my most honest language.'],
    ['.ueber-text p:nth-of-type(2)', 'Over the years I have come to experience how deeply sound heals when it is woven together with mindful body and breath work. Out of this conviction I have combined music with Yin Yoga, breathwork and the power of conscious community. To me these are not just methods, but gentle tools that help us mute the noise of the world and fully arrive back home in our own bodies.'],
    ['.ueber-text p:nth-of-type(3)', 'Today I accompany people on exactly this journey home to themselves: in personal one-to-one sessions, on multi-day retreats and in nourishing women’s circles. What matters most to me is creating a calm, protected space ~ a place free of pressure, where every emotion has room, masks may fall and every voice is truly heard.'],

    /* Retreat */
    ['#retreat .eyebrow', 'Next retreat'],
    ['#retreat .sec-head h2', 'WE&nbsp;·&nbsp;TREAT ~ Taghazout, <em>Morocco.</em>'],
    ['#retreat .sec-head p:nth-of-type(1)', 'Five days of yoga, surf, music and community on Morocco’s Atlantic coast ~ my retreat in Africa, together with Katharina Eller (Yoga Vila).'],
    ['#retreat .sec-head .btn', 'Find all the details here <span class="ar">↗</span>'],
    ['.retreat-body h3', 'Your time out right by the Atlantic'],
    ['.retreat-meta span:nth-child(1) b', '29 October – 2 November 2026'],
    ['.retreat-meta span:nth-child(2)', 'Taghazout, Morocco'],
    ['.incl li:nth-child(1)', 'Daily yoga &amp; movement, evening circles with music &amp; meditation'],
    ['.incl li:nth-child(2)', 'Surf sessions incl. equipment'],
    ['.incl li:nth-child(3)', 'Brunch &amp; dinner, accommodation at the Ocean House with sea view'],
    ['.incl li:nth-child(4)', 'True community ~ no packed schedule, but space for you'],
    ['.retreat-cta .cta-zeile:nth-child(1) .frage', 'Want to join?'],
    ['.retreat-cta .cta-zeile:nth-child(1) .btn', 'Sign up here <span class="ar">↗</span>'],
    ['.retreat-cta .cta-zeile:nth-child(2) .frage', 'Still have questions?'],
    ['.retreat-cta .cta-zeile:nth-child(2) .btn', 'Let’s talk <span class="ar">↗</span>'],

    /* Community-Teaser (Startseite) */
    ['#circles .eyebrow', 'My community'],
    ['.com-h2', 'A place to drop in and <em>belong.</em>'],
    ['.com-p', 'Free circles to be part of: Women Circle Connection, S O U L talk and Yoga for Peace.'],
    ['.com-cta', 'To the community <span class="ar">→</span>'],

    /* Kontakt */
    ['#kontakt .eyebrow', 'Contact'],
    ['#kontakt h2', 'Reach out ~ I’m looking forward to meeting you.'],
    ['.weg:nth-child(1) p', 'The quickest way to reach me is a message.'],
    ['.weg:nth-child(2) h3', 'Email'],
    ['.weg:nth-child(2) p', 'Write to me whenever you like ~ I’ll get back to you personally.'],
    ['.weg:nth-child(3) h3', 'Book a call'],
    ['.weg:nth-child(3) p', 'Prefer to talk? Pick a time that suits you.'],
    ['.weg:nth-child(3) .weg-cta', 'Choose a time <span class="ar">↗</span>'],

    /* Community-Seite */
    ['.zurueck', '← Back to the homepage'],
    ['.uhead .eyebrow', 'My community'],
    ['.uhead h1', 'A place to drop in and <em>belong.</em>'],
    ['.uhead .wrap > p', 'Our community is like a small, quiet refuge. A free space where we connect, breathe together and are there for one another – relaxed, without expectations and without pressure.'],
    ['.circle.-women p', 'My intention is to create a space from woman to woman. For honest sharing, warmth and the feeling of being held.'],
    ['.circle.-soul p', 'Open conversations about what lies beneath the surface. A place to listen and to speak ~ heart to heart, entirely without judgment.'],
    ['.circle.-yoga p', 'Shared yoga and stillness to calm the nervous system and feel more peace within ourselves again.'],
    ['.circle-link', 'Join now <span class="ar">↗</span>'],
    ['.community-schluss p', 'Just come as you are. Take your time to look around and feel into exactly the spaces that do you good right now.'],
    ['#instagram h2', 'Glimpses of my <em>life.</em>'],
    ['#instagram .sec-head p', 'Here I share what moves me right now and what is coming to life.'],
    ['.ig-cta', 'Follow on Instagram <span class="ar">↗</span>'],
    ['#kooperationen .eyebrow', 'Partnerships'],
    ['#kooperationen h2', 'My <em>partners.</em>'],
    ['#kooperationen .sec-head p', 'People and brands I wholeheartedly stand behind.'],
    ['.partner h3', 'For all women'],
    ['.partner p', 'For a body that feels safe and held on every day of your cycle, I wholeheartedly recommend the sustainable period underwear by The Female Company – with the code <b class="code">TFC_MARYLOU</b> you save directly on your order.'],
    ['.partner .btn', 'To my heartfelt recommendation <span class="ar">↗</span>'],

    /* Fußzeile */
    ['.foot-top > div:nth-child(1) p', 'One-to-one guidance, yoga, women’s circles, retreats and music'],
    ['.foot-top > div:nth-child(2) h4', 'Pages'],
    ['.foot-top > div:nth-child(3) h4', 'Legal &amp; more'],
    ['footer a[href$="#angebote"]', 'Offerings'],
    ['footer a[href$="#musik"]', 'Music'],
    ['footer a[href$="#ueber"]', 'About me'],
    ['footer a[href$="#kontakt"]', 'Contact'],
    ['footer a[href="impressum.html"]', 'Legal notice'],
    ['footer a[href="datenschutz.html"]', 'Privacy'],
    ['.foot-bot .made', 'Built by <a href="https://lechcode.de" target="_blank" rel="noopener">Lechcode</a>, cookie-free &amp; without tracking']
  ];

  /* [Selektor, Attribut, englischer Wert] */
  var EN_ATTR = [
    ['#nav', 'aria-label', 'Main navigation'],
    ['#burger', 'aria-label', 'Open menu'],
    ['.lang', 'aria-label', 'Choose language'],
    ['.hero-photo img', 'alt', 'Mary Lou on the beach, smiling with a flower'],
    ['#retreat .sec-head .btn', 'aria-label', 'Find all the details here — opens PDF'],
    ['.embed-load[data-yt="pUsuwRtbtDU"]', 'aria-label', 'Load YouTube video and play: Love in Wrong Places'],
    ['.embed-load[data-yt="2egmas7aCOo"]', 'aria-label', 'Load YouTube video and play: Inner Child']
  ];

  var META = document.querySelector('.uhead')
    ? { title: 'My community — women’s circles, Soul Talk & Yoga for Peace | Mary Lou',
        desc:  'Free circles to drop into: Women Circle Connection, S O U L talk and Yoga for Peace — come as you are.' }
    : { title: 'One-to-one guidance, yoga, women’s circles & retreats | Mary Lou',
        desc:  'Mary Lou guides you back to yourself with one-to-one guidance, yoga, women’s circles, retreats and music.' };

  var store = null;          // eingesammelte Originale (einmalig)
  var descEl = document.querySelector('meta[name="description"]');
  var origTitle = document.title, origDesc = descEl ? descEl.getAttribute('content') : '';

  function firstTextNode(el){
    for (var n = el.firstChild; n; n = n.nextSibling)
      if (n.nodeType === 3 && n.nodeValue.trim()) return n;
    return null;
  }

  function sammeln(){
    store = { html: [], text: [], attr: [] };
    EN.forEach(function(e){
      document.querySelectorAll(e[0]).forEach(function(el){
        if (e[2] === 'text') { var t = firstTextNode(el); if (t) store.text.push([t, t.nodeValue, e[1]]); }
        else store.html.push([el, el.innerHTML, e[1]]);
      });
    });
    EN_ATTR.forEach(function(e){
      document.querySelectorAll(e[0]).forEach(function(el){
        store.attr.push([el, e[1], el.getAttribute(e[1]), e[2]]);
      });
    });
  }

  function linksAnpassen(l){
    document.querySelectorAll('a[href]').forEach(function(a){
      var h = a.getAttribute('href');
      var m = h.match(/^(index\.html|community\.html)(\?[^#]*)?(#.*)?$/);
      if (!m) return;
      a.setAttribute('href', m[1] + (l === 'en' ? '?lang=en' : '') + (m[3] || ''));
    });
  }

  function setzeSprache(l, adresseMerken){
    if (!store) sammeln();
    var en = (l === 'en');
    store.html.forEach(function(o){ o[0].innerHTML = en ? o[2] : o[1]; });
    store.text.forEach(function(o){ o[0].nodeValue = en ? o[2] : o[1]; });
    store.attr.forEach(function(o){ o[0].setAttribute(o[1], en ? o[3] : o[2]); });
    document.documentElement.lang = l;
    document.title = en ? META.title : origTitle;
    if (descEl) descEl.setAttribute('content', en ? META.desc : origDesc);
    linksAnpassen(l);
    document.querySelectorAll('.lang a').forEach(function(a){
      a.setAttribute('aria-current', a.getAttribute('data-lang') === l ? 'true' : 'false');
    });
    if (adresseMerken && history.replaceState) {
      var u = new URL(location.href);
      if (en) u.searchParams.set('lang', 'en'); else u.searchParams.delete('lang');
      history.replaceState(null, '', u.toString());
    }
  }

  var gewuenscht = new URLSearchParams(location.search).get('lang');
  if (gewuenscht === 'en') setzeSprache('en', false);

  document.querySelectorAll('.lang a').forEach(function(a){
    a.addEventListener('click', function(ev){
      ev.preventDefault();
      setzeSprache(a.getAttribute('data-lang') === 'en' ? 'en' : 'de', true);
    });
  });
})();
