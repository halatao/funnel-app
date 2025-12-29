import Image from "next/image"
import FreeConsultCTA from "../components/FreeConsultCTA"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Top navigation (updated: centered nav, provided logo and brand text) */}
      <header className="bg-black text-white sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center">
          <div className="flex items-center gap-3">
            <Image
              src="https://o6fq1e4v.k01.konverzky.cz//build/images/funnels/sell_15/a2f2fdaaeaf028128fbd02f091d6f154.svg"
              alt="logo"
              width={150}
              height={48}
              unoptimized
              className="block"
            />
          </div>

          <nav className="flex-1 flex justify-center gap-6 font-medium hidden md:flex">
            <a href="#reference" className="hover:underline">Reference</a>
            <a href="#pripadove-studie" className="hover:underline">Případové studie</a>
            <a href="#team" className="hover:underline">Náš tým</a>
            <a href="#kontakt" className="hover:underline">Kontakt</a>
          </nav>

          <div className="ml-auto">
            <a href="#kontakt" className="ml-4 inline-block rounded-full bg-white px-5 py-2 text-black font-semibold">Chci funnel ZDARMA</a>
          </div>
        </div>
      </header>
      {/* HERO (smaller, no buttons) */}
      <section className="relative bg-[#0b1113] text-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 40%, rgba(255,255,255,0.02), transparent 20%), radial-gradient(circle at 10% 75%, rgba(255,255,255,0.01), transparent 35%)',
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
          <div className="inline-flex items-center gap-3 rounded-lg bg-black/60 px-4 py-2 text-sm font-medium mx-auto mb-6">
            <span className="h-3 w-3 rounded-full bg-red-500 shadow-md" />
            <span>NOVINKA VE SVĚTĚ MARKETINGU...</span>
          </div>

          <h1 className="mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-[1.02] font-extrabold tracking-tight max-w-4xl">
            Konečně někdo, kdo vám<br />postaví funnel ZDARMA. A hned<br />vám ukáže, jak díky němu<br />začnou chodit noví klienti.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-gray-300">
            Ne, nezbláznili jsme se. Jen víme, že když <strong>dostanete do ruky funnel, který nakopne váš byznys jako steroidy</strong>... už nikdy nebudete chtít pracovat s nikým jiným.
          </p>
        </div>
      </section>

      <section className="relative bg-white py-8 overflow-hidden">
        {/* decorative rounded bars */}
        <div className="absolute -top-6 left-6 w-56 h-10 rounded-full bg-[#c81f2d] opacity-100" />
        <div className="absolute -top-4 left-40 w-40 h-10 rounded-full bg-[#3b3242]" />
        <div className="absolute top-6 right-6 w-64 h-12 rounded-full bg-[#c81f2d]" />
        <div className="absolute top-16 right-40 w-44 h-10 rounded-full bg-[#3b3242]" />

        <div className="mx-auto max-w-3xl px-6">
          <div className="mx-auto max-w-5xl rounded-3xl overflow-hidden shadow-2xl mb-4">
            <div className="w-full h-[42vh] sm:h-[33vh] md:h-[39vh] lg:h-[46.5vh] bg-black">
              <iframe
                src="https://player.vimeo.com/video/1069503727?&autoplay=0&muted=0&controls=1&loop=0"
                title="Vimeo proof"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                className="w-full h-full block"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-6 relative">
          <div className="text-center">
            <p className="font-bold mb-2">Od stolu Lenky Masarykové: aktualizováno 16. 12. 2025</p>
          </div>
          <div className="mt-8 mx-auto max-w-prose text-gray-700 text-base leading-relaxed">
            <p className="mb-4">Vážení podnikatelé,</p>

            <p className="mb-4"><strong>pokud čtete tuhle stránku, znamená to obvykle jednu z těchto dvou věcí:</strong></p>

            <p className="mb-3"><strong>Buď A) –</strong> víte, že vaše podnikání má na víc… ale nikdo vám zatím neukázal cestu, která by vám na předvídatelné bázi generovala nové leady a klienty.</p>

            <p className="mb-3"><strong>Nebo B) –</strong> zrovna jste před nebo po schůzce se mnou či mým týmem, líbí se vám naše nabídka… ale váš vnitřní skeptik šeptá:</p>

            <p className="mb-3 italic">„Zní to hezky… ale bude to fungovat i mně?”</p>

            <p className="mb-3"><strong>A víte co?</strong></p>

            <p className="mb-3"><strong>Chápu vás.</strong> Opravdu vám rozumím.</p>

            <p className="mb-3">Je to doba, kdy každý druhý <em>„expert”</em>, co pije matcha laté, vykřikuje, že našel zázračnou pilulku, která vám zachrání podnikání, vyřeší marketing a otevře nebeské brány klientů, kteří jen čekají, až jim předložíte nabídku.</p>

            <p className="mb-3">Tohle se ovšem... jak již možná tušíte... neděje.</p>

            <p className="mb-3">Podnikání je mnohem těžší hra.</p>

            <p className="mb-3">Proto nejsou všichni hyper úspěšní boháči s krásným vyrýsovaným tělem a dokonalým milostným životem.</p>

            <p className="mb-3"><strong>Ale...</strong></p>

            <p className="mb-3">Vy nejste běžný pán či paní. Vy máte podnikání, už jste úspěšní, ale chcete ještě zvýšit svůj dopad na tento svět.</p>

            <p className="mb-3"><strong>A existuje zkratka, díky které své podnikání můžete dále rozvíjet...</strong></p>

            <p className="mb-3">Je ovšem potřeba na to jít <strong>JINAK</strong>. Protože marketing se již v roce 2025 mění.</p>

            <p className="mb-3">Neříkám, že máme <em>„zázračnou pilulku”</em>, která vám získá stovky leadů a uzavřených klientů.</p>

            <p className="mb-3">Pokud půjdeme do spolupráce, bude to <strong>SPOLU-PRÁCE</strong>. Budeme společně pracovat a posouvat vaše podnikání.</p>

            <p className="mb-3">Ale vyplatí se to dělat <strong>JINAK</strong>. Tady jsou fakta...</p>
          </div>
        </div>
      </section>
      {/* Lead-generation case section: video + text */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-6 relative">
          <h2 className="text-3xl font-extrabold text-left md:text-center md:text-4xl mb-6">Takto získáváme stovky leadů našim klientům...</h2>
          <div className="mx-auto max-w-3xl px-6">
            <div className="mx-auto max-w-5xl rounded-3xl overflow-hidden shadow-2xl mb-4">
              <div className="w-full h-[42vh] sm:h-[33vh] md:h-[39vh] lg:h-[46.5vh] bg-black">
                <iframe
                  src="https://player.vimeo.com/video/1069503727?&autoplay=0&muted=0&controls=1&loop=0"
                  title="Vimeo proof"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  className="w-full h-full block"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="mt-8 mx-auto max-w-prose text-gray-700 text-base leading-relaxed">
              <p className="font-semibold">Podnikání se totiž stává jednodušší, když máte systém...</p>

              <p className="mb-3">...systém, díky kterému předvídatelně víte, že každý měsíc získáte nové poptávky po vašich službách. Systém, díky kterému vy nebo vaši obchodníci budou znovu a znovu uzavírat další klienty...</p>

              <p className="font-semibold">A my tento systém máme.</p>

              <ul className="mt-4 space-y-3 list-none">
                <li className="flex items-start gap-3"><span className="text-2xl">💰</span><span>Pomohli jsme dotační skupině Úsporami získat desítky tisíc leadů na dotační programy, zateplení i tepelné čerpadla…</span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">💰</span><span>Pomohli jsme NLP koučce Lence Diblíkové dostat její podnikání na 300 000 Kč měsíčně, aby mohla odejít ze zaměstnání v korporátu…</span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">💰</span><span>Pomohli jsme mistrini Evropy ve sportovním aerobiku Hance Toufarové prodat digitální produkty, které ji živí na autopilota…</span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">💰</span><span>A pomůžeme i vám, pokud potřebujete své podnikání zaplavit přívalem nových zákazníků!</span></li>
              </ul>

              <p className="mt-4">Teď můžete doufat v lepší zítřky. V to, že nějakým zázrakem začnou fungovat vaše staré webovky a najednou se začnou hrnout poptávky.</p>

              <p className="mb-3">Že nějakým zázrakem začne fungovat marketing, který děláte nyní.</p>

              <p className="mb-3">Že se stane něco divného s algoritmem sociálních sítí a budou se k vám hrnout davy zákazníků.</p>

              <p className="mb-3">Možná se budete dále spoléhat na doporučení, ale pak budete mít podnikání postavené na úplné náhodě.</p>

              <p className="mt-4 font-semibold">A nebo si prostě dovolíte kliknout na tlačítko níže.</p>
            </div>
            <div className="mt-6">
              <FreeConsultCTA href="#kontakt" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mt-8 mx-auto max-w-prose text-gray-700 text-base leading-relaxed">
            <div className="mx-auto max-w-full mb-6">
              <Image
                src="https://assets.konverzkyapp.cz/data/projects/72933/minified/GAQ1CKg72wRI0CWVp80wgf2JrwTwrNj_xplNryJlweE-1765106393.gif"
                alt="svetovy marketing"
                width={920}
                height={300}
                unoptimized
                className="mx-auto rounded-lg shadow mb-6"
              />
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-4">Světový marketing pro české podnikatele</h2>

            <p className="mb-3 font-semibold underline">V marketingu platí jedno jediné pravidlo:</p>

            <p className="mb-3">kdo používá zastaralé metody, skončí na místě. A kdo sleduje světové špičky, ten roste rychleji než ostatní.</p>

            <p className="mb-3">Proto jdeme cestou: <strong>„vezměme to, co právě teď funguje u nejlepších na světě… a přetavme to do české reality.“</strong></p>

            <p className="mb-3">Každý měsíc studujeme funnely, reklamy a prodejní strategie od lidí, kteří hýbou trhem v USA, Británii nebo Austrálii.</p>

            <p className="mb-3">Možná to nezní tak sexy, jak jste doufali, ale funguje to.</p>

            <p className="mb-3">Je to poctivá práce.</p>

            <p className="mb-3">Je to chytré přizpůsobení toho nejlepšího ze světa na český trh.</p>

            <p className="mb-3">Je to metoda, která dává podnikatelům náskok, protože využívají strategie, které se do Česka dostanou klidně o roky později.</p>

            <p className="mb-3 font-semibold">My je máme teď. A vy je můžete mít taky.</p>

            <h3 className="text-2xl md:text-3xl font-extrabold text-center my-6">Získejte funnel, který bude vaše podnikání živit v následujících letech.</h3>

            <div className="mx-auto max-w-xl mb-6">
              <Image
                src="https://assets.konverzkyapp.cz/data/projects/72933/minified/qoCntjCXUb3X46n2dIHcjjOL-B3Dc756Ob4ocwLX3Ms-1765107291.jpg"
                alt="funnel illustration"
                width={520}
                height={320}
                unoptimized
                className="mx-auto rounded-lg shadow mb-6"
              />
            </div>

            <p className="mb-3">Zapomeňte na slepé experimenty a nekonečné pokusy metodou „snad to nějak vyjde“.</p>

            <p className="mb-3">Tohle není hra na štěstí. A vy už nemáte čas učit se všechno od nuly... a ještě doufat, že se trefíte.</p>

            <p className="mb-6">Místo toho začněte stavět své podnikání na <strong>ověřených funnelech, které umí přitahovat klienty</strong>, na strategiích testovaných v reálném světě a na procesech, které fungují opakovaně.</p>

            <div className="text-center">
              <a href="#kontakt" className="inline-block bg-[#86d33a] text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-[#76c02f]">Chci funnel ZDARMA</a>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence / Testimonials section */}
      <section id="reference" className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6">To všechno sice zní fajn... ale proč by to mělo fungovat pro mé podnikání?</h1>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Zde jsou důkazy místo slibů...</h2>

          <div className="mt-8 space-y-12">
            <div>
              <div className="flex items-center justify-center gap-4 px-6">
                <p className="text-sm italic mb-0 inline-block text-center max-w-prose">„Za poslední měsíce jsme se dostaly na tržby přes 300 000 Kč měsíčně, odešla jsem ze zaměstnání”</p>
                <div className="flex-shrink-0">
                  <Image src="https://o6fq1e4v.k01.konverzky.cz//build/images/funnels/demand_02/img_11.png" alt="arrow-down" width={96} height={48} unoptimized className="w-20" />
                </div>
              </div>

              <div className="mx-auto max-w-3xl px-6 mt-4">
                <div className="mx-auto max-w-5xl rounded-3xl overflow-hidden shadow-2xl mb-2">
                  <div className="w-full h-[42vh] sm:h-[33vh] md:h-[39vh] lg:h-[46.5vh] bg-black">
                    <iframe
                      src="https://player.vimeo.com/video/1069503727?&autoplay=0&muted=0&controls=1&loop=0"
                      title="testimonial-1"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      className="w-full h-full block"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-4 px-6">
                <div className="flex-shrink-0">
                  <Image src="https://o6fq1e4v.k01.konverzky.cz//build/images/funnels/demand_02/img_13.png" alt="arrow-up" width={96} height={48} unoptimized className="w-20" />
                </div>
                <p className="text-sm mt-0 inline-block text-center">a nedávno jsem se stala držitelkou Zlaté milionové desky z Konverzek</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center gap-4 px-6">
                <p className="text-sm italic mb-0 inline-block text-center max-w-prose">„Spolupracovala jsem s různými agenturami, které slibovaly zázračné výsledky”</p>
                <div className="flex-shrink-0">
                  <Image src="https://o6fq1e4v.k01.konverzky.cz//build/images/funnels/demand_02/img_11.png" alt="arrow-down" width={96} height={48} unoptimized className="w-20" />
                </div>
              </div>

              <div className="mx-auto max-w-3xl px-6 mt-4">
                <div className="mx-auto max-w-5xl rounded-3xl overflow-hidden shadow-2xl mb-2">
                  <div className="w-full h-[42vh] sm:h-[33vh] md:h-[39vh] lg:h-[46.5vh] bg-black relative">
                    <iframe
                      src="https://player.vimeo.com/video/1069503727?&autoplay=0&muted=0&controls=1&loop=0"
                      title="testimonial-2"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      className="w-full h-full block"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-4 px-6">
                <div className="flex-shrink-0">
                  <Image src="https://o6fq1e4v.k01.konverzky.cz//build/images/funnels/demand_02/img_13.png" alt="arrow-up" width={96} height={48} unoptimized className="w-20" />
                </div>
                <p className="text-sm mt-0 inline-block text-center">ale až tady mi mé podnikání pomohli nakopnout!</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center gap-4 px-6">
                <p className="text-sm italic mb-0 inline-block text-center max-w-prose">„Můžu s čistým svědomím říct, že dávají do své práce více než 100 %”</p>
                <div className="flex-shrink-0">
                  <Image src="https://o6fq1e4v.k01.konverzky.cz//build/images/funnels/demand_02/img_11.png" alt="arrow-down" width={96} height={48} unoptimized className="w-20" />
                </div>
              </div>

              <div className="mx-auto max-w-3xl px-6 mt-4">
                <div className="mx-auto max-w-5xl rounded-3xl overflow-hidden shadow-2xl mb-2">
                  <div className="w-full h-[42vh] sm:h-[33vh] md:h-[39vh] lg:h-[46.5vh] bg-black">
                    <iframe
                      src="https://player.vimeo.com/video/1069503727?&autoplay=0&muted=0&controls=1&loop=0"
                      title="testimonial-3"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      className="w-full h-full block"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-4 px-6">
                <div className="flex-shrink-0">
                  <Image src="https://o6fq1e4v.k01.konverzky.cz//build/images/funnels/demand_02/img_13.png" alt="arrow-up" width={96} height={48} unoptimized className="w-20" />
                </div>
                <p className="text-sm mt-0 inline-block text-center">Opravdu jim záleží na tom, aby moje podnikání fungovalo</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-3xl font-extrabold mb-4">Nejsme jen další “marketingová” agentura. Pomáháme podnikatelům růst. A taky získávat Zlaté MILIONOVÉ desky.</h3>

            <div className="mt-6 flex justify-center items-center gap-6">
              <div className="flex-shrink-0">
                <Image
                  src="https://assets.konverzkyapp.cz/data/projects/72933/minified/AQexzyn6qVAXm6YpBbX2u7yY4xP9GuTz9OFUADkA2ns-1765102506.png"
                  alt="plaque1"
                  width={1280}
                  height={960}
                  unoptimized
                  className="rounded shadow-lg mx-auto w-full max-w-4xl"
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <a href="#kontakt" className="inline-block bg-[#86d33a] text-white font-extrabold px-6 py-3 rounded-full shadow-lg hover:bg-[#76c02f]">TAK UŽ KONEČNĚ ZMÁČKNĚTE TOHLE ZATRACENÉ TLAČÍTKO</a>
            </div>
          </div>
        </div>
      </section>

      {/* Team section from provided HTML */}
      <section id="team" className="py-12 bg-gray-100">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h3 className="text-2xl font-bold">Představujeme vám náš tým</h3>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{
              name: 'Lenka Masaryková', img: 'https://assets.konverzkyapp.cz/data/projects/72933/minified/PCD6-qeUcEJohP5eCygkFSSxaBhiM--QkKaiuHtrxyk-1765101711.png', title: 'Zakladatelka a hlava obchodu'
            }, {
              name: 'Petr', img: 'https://assets.konverzkyapp.cz/data/projects/72933/minified/prhVqQgrZU0MFfJohdtsPumJ0LrylhXbZ598Iqhi_Ek-1765101745.png', title: 'Zakladatel'
            }, {
              name: 'Natálie Francová', img: 'https://assets.konverzkyapp.cz/data/projects/72933/minified/WzKnz7d6OXPkbxqVEQFevo_3sjCAoJVaS4SqGeoZn9U-1765101739.png', title: 'Marketingová specialistka'
            }, {
              name: 'Tomáš Horváth', img: 'https://assets.konverzkyapp.cz/data/projects/72933/minified/oPD_RtDZgwHcSwNaBQLGvHzRCJdWFYIQY2PgrM5LE_w-1765101731.png', title: 'Marketingový specialista'
            }].map((p) => (
              <div key={p.name} className="text-center">
                <Image src={p.img} alt={p.name} width={144} height={144} unoptimized className="mx-auto object-cover rounded" />
                <p className="mt-3 font-semibold">{p.name}</p>
                <p className="text-sm text-gray-600">{p.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 mx-auto max-w-prose text-gray-700 text-base text-left leading-relaxed">
            <p className="mb-3">
              <strong>P.S.: No ahoj… pořád ještě váháte, co?</strong>
            </p>


            <p className="mb-3">Dobře, tak si řekněme pravdu.</p>

            <p className="mb-3">Můžete to dál táhnout sami... dřít od rána do noci, hasit stres, řešit nejistotu a přemýšlet, odkud se objeví další klient.</p>

            <p className="mb-3">Můžete dál sedět nad chaosem, který vám marketingové agentury v minulosti zanechaly, a doufat, že tentokrát to půjde nějak líp.</p>

            <p className="mb-3">Můžete se dál probírat reklamami, které se zobrazují, ale reálně nic nepřináší.</p>

            <p className="mb-3">Můžete doufat v organický marketing a doporučení.</p>

            <p className="mb-3">A nebo…</p>

            <p className="mb-3">Můžete kliknout níže, domluvit si krátkou schůzku a zjistit, jak rychle lze převrátit směr vašeho podnikání, když máte po boku tým, který ví, co dělá.</p>

            <p className="mb-3">Promluvíme si brzy.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* Full-width promo section with background image */}
      <section
        aria-label="Promo - push the button"
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: "url('https://assets.konverzkyapp.cz/data/projects/72933/minified/3CZuZMls0LoPI9e8Aga3sqGtlxmtObFcX_aHRJDfewE-1765106846.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center text-white">
          <h2 className="mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.02] font-extrabold tracking-tight max-w-4xl">
            TAK NA CO JEŠTĚ ČEKÁTE? SNAŽÍME SE VÁM CELOU DOBU ŘÍCT, AŤ KLIKNETE NA TO TLAČÍTKO.
          </h2>

          <div className="mt-10">
            <a
              href="#kontakt"
              className="inline-block bg-[#86d33a] text-white font-extrabold px-10 py-4 rounded-full shadow-lg hover:bg-[#76c02f] text-lg md:text-xl"
            >
              ZMÁČKNĚTE UŽ KONEČNĚ TOHLE ZATRACENÉ TLAČÍTKO
            </a>
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center">
          <div className="mx-auto mb-6">
            <Image
              src="https://o6fq1e4v.k01.konverzky.cz//build/images/funnels/sell_15/a2f2fdaaeaf028128fbd02f091d6f154.svg"
              alt="logo"
              width={150}
              height={48}
              unoptimized
              className="mx-auto"
            />
          </div>

          <div className="mb-6">
            <p className="font-semibold">Máte dotaz?</p>
            <p className="text-gray-300">lenka@jaknaklienty.cz</p>
          </div>

          <div className="flex items-center justify-between text-white max-w-6xl mx-auto px-6">
            <a href="#" className="hover:underline">Ochrana osobních údajů</a>
            <a href="#kontakt" className="hover:underline">Kontakt</a>
          </div>

          <p className="mt-8 text-sm text-gray-400">© {new Date().getFullYear()} JaknaKlienty.cz, všechna práva vyhrazena</p>
        </div>
      </footer>
    </main >
  )
}
