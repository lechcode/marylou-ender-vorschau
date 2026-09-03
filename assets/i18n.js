/* Sprachumschalter DE/EN — marylou.at
   Deutsch bleibt die Quelle im HTML. Englisch liegt hier als Wörterbuch,
   adressiert über CSS-Selektoren (kein Umbau des HTML nötig).
   Aufruf: ?lang=en in der Adresse oder Klick auf DE/EN oben rechts.
   Kein Cookie, kein Speicher — die Sprache steckt nur in der Adresse.
   Englisch ist frei übertragen (Ton: warm, nah, natürlich), nicht wörtlich. */
(function(){
  'use strict';

  /* [Selektor, englischer Inhalt, Modus]
     Modus fehlt  -> innerHTML wird ersetzt
     Modus 'text' -> nur der erste Textknoten (für Buttons mit Icon) */
  var EN = [
    /* Navigation & Marke */
    ['.brand .btxt > span', 'Guidance · Music · Retreats · Yoga · Femininity'],
    ['.navlinks a[href$="#angebote"]', 'What I offer'],
    ['.navlinks a[href$="#retreat"]', 'Retreat'],
    ['.navlinks a[href$="#musik"]', 'Music'],
    ['.navlinks a[href$="#ueber"]', 'About'],
    ['.navlinks a[href^="community.html"]', 'Community'],
    ['.navlinks .btn', 'Get in touch <span class="ar">→</span>'],
    ['a[href="#inhalt"]', 'Skip to content'],

    /* Hero */
    ['.hero .lede', 'I walk alongside you for part of your journey. In my spaces you can come home to yourself again ~ and show up with all of who you are: every facet, your voice, your feelings.'],
    ['.hero-cta .btn-primary', 'What I offer <span class="ar">→</span>'],
    ['.hero-cta .btn-ghost', 'More about me'],

    /* Angebote */
    ['#angebote .eyebrow', 'What I offer'],
    ['#angebote .sec-head h2', 'Ways back to <em>yourself.</em>'],
    ['#angebote .sec-head p', 'Because real healing begins where we meet without judgment ~ and no one has to be perfect.'],
    ['.karte.-begleitung h3', 'One-to-one guidance'],
    ['.karte.-begleitung p', 'Your safe harbour. Through deep listening, breath and sound, we make room again for your inner voice and the strength that is truly yours.'],
    ['.karte.-begleitung .mehr', 'Reach out <span class="ar">↗</span>'],
    ['.karte.-retreats h3', 'Retreats'],
    ['.karte.-retreats p', 'Time away, in good company ~ yoga, my music and real connection in beautiful places.'],
    ['.karte.-retreats .mehr', 'WE TREAT Morocco 2026 <span class="ar">→</span>'],
    ['.karte.-yoga h3', 'Yoga'],
    ['.karte.-yoga p', 'Through gentle, grounding Yin Yoga, I invite you to journey deep into your body ~ one-to-one or in a group.'],
    ['.karte.-yoga .mehr', 'Join the yoga group <span class="ar">↗</span>'],
    ['.karte.-frauen h3', 'Women’s circles'],
    ['.karte.-frauen p', 'A space for sharing, healing and feminine strength ~ where we reconnect with our intuition and the magic of being held in true sisterhood.'],
    ['.karte.-frauen .mehr', 'Join the circle <span class="ar">↗</span>'],

    /* Musik */
    ['#musik .eyebrow', 'Music'],
    ['#musik .sec-head h2', 'Medicine for heart and <em>soul.</em>'],
    ['#musik .sec-head p:nth-of-type(1)', 'Just like my guidance work, my music is born of vulnerability and deep connection. To me it’s more than sound: a language without words, gentle medicine for your nervous system, and a reminder of who you are at your core.'],
    ['#musik .sec-head p:nth-of-type(2)', 'Take a moment for yourself, breathe, and let the music do its work:'],
    ['.player-links .-spotify', ' Listen on Spotify ', 'text'],
    ['.musik-anlass p', 'I also play for private ceremonies and personal occasions ~ just reach out.'],
    ['.musik-anlass .btn', 'Get in touch <span class="ar">→</span>'],

    /* Über mich */
    ['#ueber .eyebrow', 'About me'],
    ['.ueber-text h2', 'Gentle. Feminine. <em>Connected.</em>'],
    ['.ueber-text p:nth-of-type(1)', 'Music has always been so much more to me than a beautiful sound ~ it’s my own way back to myself, my anchor, and the most honest language I have.'],
    ['.ueber-text p:nth-of-type(2)', 'Over the years I’ve experienced how deeply sound can heal when it’s woven together with mindful bodywork and breathwork. That’s why I bring music together with Yin Yoga, breathwork and the power of conscious community. To me, these aren’t just methods ~ they’re gentle tools that help us quiet the noise of the world and come all the way home to our own bodies.'],
    ['.ueber-text p:nth-of-type(3)', 'Today I accompany people on exactly that journey home to themselves: in one-to-one sessions, on multi-day retreats and in nourishing women’s circles. What matters most to me is holding a calm, safe space ~ a place with no pressure to perform, where every emotion is welcome, masks can come off, and every voice is truly heard.'],

    /* Retreat */
    ['#retreat .eyebrow', 'Next retreat'],
    ['#retreat .sec-head h2', 'WE&nbsp;·&nbsp;TREAT ~ Taghazout, <em>Morocco.</em>'],
    ['#retreat .sec-head p:nth-of-type(1)', 'Five days of yoga, surfing, music and community on Morocco’s Atlantic coast ~ my retreat in Africa, together with Katharina Eller (Yoga Vila).'],
    ['#retreat .sec-head .btn', 'All the details here <span class="ar">↗</span>'],
    ['.retreat-body h3', 'Your time out, right on the Atlantic'],
    ['.retreat-meta span:nth-child(1) b', '29 October – 2 November 2026'],
    ['.retreat-meta span:nth-child(2)', 'Taghazout, Morocco'],
    ['.incl li:nth-child(1)', 'Daily yoga &amp; movement, evening circles with music &amp; meditation'],
    ['.incl li:nth-child(2)', 'Surf sessions, equipment included'],
    ['.incl li:nth-child(3)', 'Brunch &amp; dinner, and your stay at the Ocean House with sea views'],
    ['.incl li:nth-child(4)', 'Real community ~ no packed schedule, just space for you'],
    ['.retreat-cta .cta-zeile:nth-child(1) .frage', 'Want to join us?'],
    ['.retreat-cta .cta-zeile:nth-child(1) .btn', 'Sign up here <span class="ar">↗</span>'],
    ['.retreat-cta .cta-zeile:nth-child(2) .frage', 'Got questions?'],
    ['.retreat-cta .cta-zeile:nth-child(2) .btn', 'Let’s talk <span class="ar">↗</span>'],

    /* Community-Teaser (Startseite) */
    ['#circles .eyebrow', 'My community'],
    ['.com-h2', 'A place to explore and <em>belong.</em>'],
    ['.com-p', 'Free circles you’re welcome to join: Women Circle Connection, S O U L talk and Yoga for Peace.'],
    ['.com-cta', 'Explore the community <span class="ar">→</span>'],

    /* Kontakt */
    ['#kontakt .eyebrow', 'Contact'],
    ['#kontakt h2', 'Say hello ~ I’d love to hear from you.'],
    ['.weg:nth-child(1) p', 'The quickest way to reach me is a DM.'],
    ['.weg:nth-child(2) h3', 'Email'],
    ['.weg:nth-child(2) p', 'Write whenever you like ~ I’ll reply personally.'],
    ['.weg:nth-child(3) h3', 'Book a call'],
    ['.weg:nth-child(3) p', 'Prefer to talk? Pick a time that suits you.'],
    ['.weg:nth-child(3) .weg-cta', 'Pick a time <span class="ar">↗</span>'],

    /* Community-Seite */
    ['.zurueck', '← Back to home'],
    ['.uhead .eyebrow', 'My community'],
    ['.uhead h1', 'A place to explore and <em>belong.</em>'],
    ['.uhead .wrap > p', 'Our community is a small, quiet refuge. A free space where we connect, breathe together and show up for one another – no strings, no expectations, no pressure.'],
    ['.circle.-women p', 'My intention is to hold a space from woman to woman ~ for honest sharing, warmth, and the feeling of being held.'],
    ['.circle.-soul p', 'Open conversations about what lies beneath the surface. A place to listen and be heard ~ heart to heart, no judgment.'],
    ['.circle.-yoga p', 'Yoga and stillness, practised together, to settle the nervous system and find a little more peace inside.'],
    ['.circle-link', 'Join now <span class="ar">↗</span>'],
    ['.community-schluss p', 'Come exactly as you are. Take your time, have a look around, and feel your way into whichever space is right for you right now.'],
    ['#instagram h2', 'A glimpse into my <em>life.</em>'],
    ['#instagram .sec-head p', 'This is where I share what’s moving me and what’s taking shape.'],
    ['.ig-cta', 'Follow me on Instagram <span class="ar">↗</span>'],
    ['#kooperationen .eyebrow', 'Partnerships'],
    ['#kooperationen h2', 'My <em>partners.</em>'],
    ['#kooperationen .sec-head p', 'People and brands I stand behind with all my heart.'],
    ['.partner h3', 'For all women'],
    ['.partner p', 'For feeling comfortable and at ease in your body on every day of your cycle, I can wholeheartedly recommend the sustainable period underwear from The Female Company – use the code <b class="code">TFC_MARYLOU</b> to save on your order.'],
    ['.partner .btn', 'See my recommendation <span class="ar">↗</span>'],

    /* Fußzeile */
    ['.foot-top > div:nth-child(1) p', 'One-to-one guidance, yoga, women’s circles, retreats and music'],
    ['.foot-top > div:nth-child(2) h4', 'Pages'],
    ['.foot-top > div:nth-child(3) h4', 'Legal &amp; more'],
    ['footer a[href$="#angebote"]', 'What I offer'],
    ['footer a[href$="#musik"]', 'Music'],
    ['footer a[href$="#ueber"]', 'About'],
    ['footer a[href$="#kontakt"]', 'Contact'],
    ['footer a[href="impressum.html"]', 'Legal notice'],
    ['footer a[href="datenschutz.html"]', 'Privacy policy'],
    ['.foot-bot .made', 'Built by <a href="https://lechcode.de" target="_blank" rel="noopener">Lechcode</a> ~ no cookies, no tracking']
  ];

  /* [Selektor, Attribut, englischer Wert] */
  var EN_ATTR = [
    ['#nav', 'aria-label', 'Main navigation'],
    ['#burger', 'aria-label', 'Open menu'],
    ['.lang', 'aria-label', 'Choose language'],
    ['.hero-photo img', 'alt', 'Mary Lou on the beach, smiling, a flower in her hand'],
    ['#retreat .sec-head .btn', 'aria-label', 'All the details here — opens PDF'],
    ['.embed-load[data-yt="pUsuwRtbtDU"]', 'aria-label', 'Load and play the YouTube video: Love in Wrong Places'],
    ['.embed-load[data-yt="2egmas7aCOo"]', 'aria-label', 'Load and play the YouTube video: Inner Child']
  ];

  var META = document.querySelector('.uhead')
    ? { title: 'My community — women’s circles, Soul Talk & Yoga for Peace | Mary Lou',
        desc:  'Free circles you’re welcome to join: Women Circle Connection, S O U L talk and Yoga for Peace — come as you are.' }
    : { title: 'One-to-one guidance, yoga, women’s circles & retreats | Mary Lou',
        desc:  'Mary Lou helps you find your way back to yourself ~ through one-to-one guidance, yoga, women’s circles, retreats and music.' };

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
