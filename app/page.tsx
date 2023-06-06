const FONT: "roboto_flex" | "univers" | "roboto" = "roboto";

export default function Home() {
  return (
    <>
      {FONT === "roboto_flex" ? (
        <div className="flex min-h-screen max-w-3xl flex-col mx-auto gap-2 p-24 font-roboto-flex">
          <header>
            <h1 className="zep-headline-xl-italic-roboto-flex">
              Wir haben das Zeug dazu! - ROBOTO FLEX BLACK
            </h1>
            <br />
            <h1 className="zep-headline-xl-condensed-roboto-flex">
              Let&#39;s do the work - ROBOTO FLEX BOLD
            </h1>
          </header>
          <main>
            <h2 className="mt-8 mb-6 text-lg font-bold">
              Headline - Roboto Flex bold
            </h2>
            <p>
              Roboto Flex regular - Labore eu eu culpa est voluptate. Incididunt
              deserunt commodo id labore velit adipisicing cupidatat nisi est
              occaecat laborum cillum nostrud. Eiusmod aliquip ut commodo anim,
              eiusmod consectetur consequat voluptate magna. Excepteur dolor
              fugiat fugiat eu. Aute quis voluptate id do voluptate qui.
            </p>
            <section className="grid mt-10 gap-6">
              <h3 className="font-bold text-md">
                Subheadline - Roboto Flex bold
              </h3>
              <p className="font-medium">
                Roboto Flex medium - Exercitation veniam do elit exercitation
                voluptate sunt nostrud ea incididunt commodo aliquip tempor sint
                dolore ut. Consequat aliqua ea cupidatat velit quis eu ea non
                elit occaecat veniam commodo elit anim. Tempor sunt pariatur
                excepteur. Elit cillum velit excepteur reprehenderit sint ut
                duis nostrud incididunt incididunt dolor sunt pariatur eu ad.
                Quis do nostrud officia qui nulla ad quis enim non ullamco enim
                id. Irure proident nulla sint laborum sit ea fugiat fugiat.
              </p>
              <p>
                Roboto Flex regular - Quis in laborum excepteur consequat ipsum
                mollit adipisicing occaecat. Dolor excepteur mollit in esse
                eiusmod sunt ut amet in. Ad aute nostrud Lorem. Cillum culpa non
                sit Lorem culpa amet. Irure veniam sint in magna sunt culpa
                excepteur. Ad occaecat sunt reprehenderit eiusmod dolore
                incididunt amet Lorem est veniam aliquip aute ad officia nisi.
                Velit minim ipsum incididunt pariatur ut qui sunt sunt
                reprehenderit fugiat aliquip mollit. Cupidatat mollit id eu
                eiusmod amet enim aliquip magna magna ad proident tempor
                consequat.
              </p>
              <p>
                Roboto Flex regular - Do ut incididunt exercitation mollit
                labore quis consectetur commodo sunt. Minim enim dolore eiusmod
                velit. Et cupidatat veniam aute eiusmod consectetur veniam ad
                est consectetur eu anim duis do anim. Ex nulla sit elit irure.
                Ipsum enim mollit laboris eiusmod in dolor proident tempor
                tempor excepteur culpa pariatur commodo do. Nisi tempor non do
                aliqua ex minim officia fugiat ea ut amet dolore excepteur.
                Veniam nisi nisi veniam non.
              </p>
            </section>
          </main>
        </div>
      ) : FONT === "univers" ? (
        <div className="flex min-h-screen max-w-3xl flex-col mx-auto gap-2 p-24 font-univers">
          <header>
            <h1 className="zep-headline-xl-italic-univers">
              Wir haben das Zeug dazu! - UNIVERS BLACK Oblique
            </h1>
            <br />
            <h1 className="zep-headline-xl-condensed-univers">
              Let&#39;s do the work - UNIVERS BOLD
            </h1>
          </header>
          <main>
            <h2 className="mt-8 mb-6 text-lg font-bold">
              Headline - Univers bold
            </h2>
            <p>
              Univers regular - Labore eu eu culpa est voluptate. Incididunt
              deserunt commodo id labore velit adipisicing cupidatat nisi est
              occaecat laborum cillum nostrud. Eiusmod aliquip ut commodo anim,
              eiusmod consectetur consequat voluptate magna. Excepteur dolor
              fugiat fugiat eu. Aute quis voluptate id do voluptate qui.
            </p>
            <section className="grid mt-10 gap-6">
              <h3 className="font-bold text-md">Subheadline - Univers bold</h3>
              <p className="font-light">
                Univers light - Exercitation veniam do elit exercitation
                voluptate sunt nostrud ea incididunt commodo aliquip tempor sint
                dolore ut. Consequat aliqua ea cupidatat velit quis eu ea non
                elit occaecat veniam commodo elit anim. Tempor sunt pariatur
                excepteur. Elit cillum velit excepteur reprehenderit sint ut
                duis nostrud incididunt incididunt dolor sunt pariatur eu ad.
                Quis do nostrud officia qui nulla ad quis enim non ullamco enim
                id. Irure proident nulla sint laborum sit ea fugiat fugiat.
              </p>
              <p>
                Univers regular - Quis in laborum excepteur consequat ipsum
                mollit adipisicing occaecat. Dolor excepteur mollit in esse
                eiusmod sunt ut amet in. Ad aute nostrud Lorem. Cillum culpa non
                sit Lorem culpa amet. Irure veniam sint in magna sunt culpa
                excepteur. Ad occaecat sunt reprehenderit eiusmod dolore
                incididunt amet Lorem est veniam aliquip aute ad officia nisi.
                Velit minim ipsum incididunt pariatur ut qui sunt sunt
                reprehenderit fugiat aliquip mollit. Cupidatat mollit id eu
                eiusmod amet enim aliquip magna magna ad proident tempor
                consequat.
              </p>
              <p>
                Univers regular - Do ut incididunt exercitation mollit labore
                quis consectetur commodo sunt. Minim enim dolore eiusmod velit.
                Et cupidatat veniam aute eiusmod consectetur veniam ad est
                consectetur eu anim duis do anim. Ex nulla sit elit irure. Ipsum
                enim mollit laboris eiusmod in dolor proident tempor tempor
                excepteur culpa pariatur commodo do. Nisi tempor non do aliqua
                ex minim officia fugiat ea ut amet dolore excepteur. Veniam nisi
                nisi veniam non.
              </p>
            </section>
          </main>
        </div>
      ) : (
        <div className="flex min-h-screen max-w-3xl flex-col mx-auto gap-2 p-24 font-roboto">
          <header>
            <h1 className="zep-headline-xl-italic-roboto">
              Wir haben das Zeug dazu! - ROBOTO BLACK
            </h1>
            <br />
            <h1 className="zep-headline-xl-condensed-roboto">
              Let&#39;s do the work - ROBOTO condensed BOLD
            </h1>
          </header>
          <main>
            <h2 className="mt-8 mb-6 text-lg font-bold">
              Headline - Roboto bold
            </h2>
            <p>
              Roboto regular - Labore eu eu culpa est voluptate. Incididunt
              deserunt commodo id labore velit adipisicing cupidatat nisi est
              occaecat laborum cillum nostrud. Eiusmod aliquip ut commodo anim,
              eiusmod consectetur consequat voluptate magna. Excepteur dolor
              fugiat fugiat eu. Aute quis voluptate id do voluptate qui.
            </p>
            <section className="grid mt-10 gap-6">
              <h3 className="font-bold text-md">Subheadline - Roboto bold</h3>
              <p className="font-medium">
                Roboto medium - Exercitation veniam do elit exercitation
                voluptate sunt nostrud ea incididunt commodo aliquip tempor sint
                dolore ut. Consequat aliqua ea cupidatat velit quis eu ea non
                elit occaecat veniam commodo elit anim. Tempor sunt pariatur
                excepteur. Elit cillum velit excepteur reprehenderit sint ut
                duis nostrud incididunt incididunt dolor sunt pariatur eu ad.
                Quis do nostrud officia qui nulla ad quis enim non ullamco enim
                id. Irure proident nulla sint laborum sit ea fugiat fugiat.
              </p>
              <p>
                Roboto regular - Quis in laborum excepteur consequat ipsum
                mollit adipisicing occaecat. Dolor excepteur mollit in esse
                eiusmod sunt ut amet in. Ad aute nostrud Lorem. Cillum culpa non
                sit Lorem culpa amet. Irure veniam sint in magna sunt culpa
                excepteur. Ad occaecat sunt reprehenderit eiusmod dolore
                incididunt amet Lorem est veniam aliquip aute ad officia nisi.
                Velit minim ipsum incididunt pariatur ut qui sunt sunt
                reprehenderit fugiat aliquip mollit. Cupidatat mollit id eu
                eiusmod amet enim aliquip magna magna ad proident tempor
                consequat.
              </p>
              <p>
                Roboto regular - Do ut incididunt exercitation mollit labore
                quis consectetur commodo sunt. Minim enim dolore eiusmod velit.
                Et cupidatat veniam aute eiusmod consectetur veniam ad est
                consectetur eu anim duis do anim. Ex nulla sit elit irure. Ipsum
                enim mollit laboris eiusmod in dolor proident tempor tempor
                excepteur culpa pariatur commodo do. Nisi tempor non do aliqua
                ex minim officia fugiat ea ut amet dolore excepteur. Veniam nisi
                nisi veniam non.
              </p>
            </section>
          </main>
        </div>
      )}
    </>
  );
}
