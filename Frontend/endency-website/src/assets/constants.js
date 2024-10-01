import OurTeamCardMember1 from './OurTeamCardMember1.png'
import OurTeamCardMember2 from './OurTeamCardMember2.png'
import OurTeamCardMember3 from './OurTeamCardMember3.png'
import OurTeamInstagramIcon from './OurTeamInstagramIcon.png'
import OurTeamLinkedinIcon from './OurTeamLinkedinIcon.png'
import OurTeamGithubIcon from './OurTeamGithubIcon.png'
import FeatureCard1 from './FeatureCard1.png'
import FeatureCard2 from './FeatureCard2.png'

export const features = [
    {
        name: 'Voice Control',
        text: 'Our revolutionary Voice Control feature empowers developers to seamlessly integrate verbal commands, elevating the creation process. Imagine designing menus, character interactions, and strategic moves—all effortlessly controlled by voice. Endency redefines game development by making voice a dynamic tool, enhancing both accessibility and immersion. Developers, step into a new era of game design where your voice shapes the engine, crafting intuitive and engaging experiences.',
        image: FeatureCard1
    },
    {
        name: 'Artificial Intelignece',
        text: 'Endency integrates advanced AI tools directly into its game engine, giving developers powerful capabilities to streamline their work. From intelligent NPC behavior to automated level design suggestions, our AI-driven features enhance creativity and efficiency. Whether you’re optimizing game logic or designing dynamic environments, Endency’s AI tools adapt to your needs, helping you focus on what matters most: building unique and immersive experiences. The possibilities are limitless.',
        image: FeatureCard2
    }
]

export const ourTeam = [
        {
            name: 'Maciej Milewski', 
            image: OurTeamCardMember1, 
            text: `Moja przygoda z programowaniem zaczęła się w 7 klasie podstawówki. 
                  Wtedy nauczyłem się podstaw Pythona i napisałem moją pierwszą grę. 
                  Było to kółko i krzyżyk. Już wtedy wiedziałem, że w przyszłości chcę 
                  zajmować się programowaniem. Interesowało mnie też samo pojęcie tworzenia gier. 
                  Za to, co może być zaskakujące, samo granie niezbyt mnie pociągało. 
                  Gdy rozpocząłem naukę w technikum, podszedłem do nauki programowania na poważnie 
                  i zacząłem tworzyć własne projekty. Podczas pracy nad tymi projektami zauważyłem, 
                  że to, co daje mi największą satysfakcję z pracy i motywuje mnie do działania 
                  to nie sam efekt pracy i jej proces, co widok ludzi, którzy są podekscytowani 
                  pracowaniem ze mną oraz ideą tego, do czego wspólnie dążymy.`,
            role: 'CEO',
            media: [
                {
                  destination: 'https://github.com/miciex',
                  icon: OurTeamGithubIcon
                },
                {
                  destination: 'https://www.linkedin.com/in/maciej-milewski-166897302/',
                  icon: OurTeamLinkedinIcon
                }
              ]
        },
        {
            name: 'Władysława Wolska', 
            image: OurTeamCardMember2, 
            text: `Już od 7 klasy szkoły podstawowej wiedziałam, że w moją karierę zawodową 
                  chcę związać z programowaniem. Choć aż do czasu pójścia do technikum nie 
                  poczyniłam w tym kierunku żadnych kroków to uważam że teraz jak najbardziej 
                  to nadrobiłam. W technikum tworzyłam mniejsze projekty ale zawsze sama i chciałam 
                  spróbować stworzyć coś grupowo dlatego dołączyłam do Muniffica i uważam że był to 
                  strzał w dziesiątkę gdyż poczucie satysfakcji daję mi nie tylko myśl że pracuję z 
                  ludzim tak samo oddanym projektowi jak ja ale również to że widzę 
                  jak bardzo rozwinęłam się dzięki pracy nad tym projektem.`,
            role: 'UI/UX developer',
            media: [
                {
                  destination: 'https://github.com/lunaru100',
                  icon: OurTeamGithubIcon
                },
                {
                  destination: 'https://www.linkedin.com/in/wladyslawa-wolska/',
                  icon: OurTeamLinkedinIcon
                }
              ]
        },
        {
          name: 'Adam Powęski', 
          image: OurTeamCardMember2, 
          text: `Programuję od 8 klasy podstawówki. Zaczynałem od minecraftowych 
                komend i pluginów, później zaprogramowałem bota Discord. Zawsze lubiłem automatyzować 
                zadania za pomocą komputera i tworzyć pomysły na gry. Gdy grałem w gry, zawsze myślałem, 
                co można by do nich dodać lub jak sprawić, by dawały jeszcze więcej satysfakcji i zabawy. 
                Wybierając drogę życiową, postanowiłem dążyć za pasją i nauczyć się programować. Podczas 
                tworzenia gier zawsze irytowało mnie skomplikowanie silników do tego przeznaczonych. 
                Pomagam przy tworzeniu Muniffic, by pozbyć się tego problemu.`,
          role: 'Graphics Programmer',
          media: [
              {
                destination: 'https://github.com/WellFailed',
                icon: OurTeamGithubIcon
              },
              {
                destination: 'https://www.linkedin.com/in/adam-powęski-8b8271283/',
                icon: OurTeamLinkedinIcon
              }
            ]
        },
        {
          name: 'Natalia Przemyłska', 
          image: OurTeamCardMember2, 
          text: `Tak, byłam jednym z tych dzieciaków które spędzały niezliczone ilości godzin w scratchu. 
                Pamiętam kiedy pierwszy raz napotkałam projekt który rysował labirynt 3D. Kiedy analizowałam 
                bloczki i zauważyłam że ktoś narysował całą scene za pomocą narzędzi ołówka, po prostu mnie zatkało. 
                Chciałam również robić takie niesamowite prace. Teraz, kiedy jestem częścią nieco bardziej zaawansowanego 
                projektu, widzę że samo stworzenie działającej sceny nie jest najważniejsze. Wiem już, że istotne są takie 
                aspekty jak jakość kodu, rozwój, praca w grupie i cele do których wspólnie dążymy. Są to również rzeczy 
                które najbardziej motywują mnie do dalszego działania oraz które najbardziej kocham.`,
          role: 'Graphics Programmer',
          media: [
              {
                destination: 'https://github.com/WellFailed',
                icon: OurTeamGithubIcon
              },
              {
                destination: 'https://www.linkedin.com/in/adam-powęski-8b8271283/',
                icon: OurTeamLinkedinIcon
              }
            ]
        },
        {
          name: 'Szymon Niedziółka', 
          image: OurTeamCardMember3, 
          text: `Swoją przygodę z programowaniem zacząłem w 8 klasie podstawówki tworząc proste strony internetowe w HTML, oraz
                  proste gry w JAVIE. Proces tworzenia bardzo mi się spodobał i od razu poczułem, że chciałbym rozwijać się w tym
                  kierunku. Zauważyłem potencjał w projekcie Muniffic i postanowiłem do niego dołączyć. Praca nad Muniffic daje mi 
                  poczucie spełnienia, satysfakcję i motywację do dalszego rozwoju. Nauczyłem się jak ważna jest współpraca w grupie, jakość wykonywanej
                  przeze mnie pracy oraz stawianie sobie coraz to nowych celów.`,
          role: 'AI/ Media Team',
          media: [
              {
                destination: 'https://github.com/szymix200006',
                icon: OurTeamGithubIcon
              },
              {
                destination: 'https://www.linkedin.com/in/szymon-niedziółka-07a69721b/?originalSubdomain=pl',
                icon: OurTeamLinkedinIcon
              }
            ]
        },
        {
          name: 'Maciej Szymaniak', 
          image: OurTeamCardMember2, 
          text: `Gdy byłem w przedszkolu chciałem zostać astronautą. Potem jednak zmieniłem zdanie i stwierdziłem że 
                chciałbym jednak być programistą i tak mi już zostało. Swój cel zacząłem już w 7 klasie, gdzie stworzyłem 
                pierwszą grę w Scratchu. Potem na szczęście dostałem się na kierunek programistyczny i zacząłem prawdziwe 
                programowanie. Największą satysfakcję daje mi uczenie się nowych umiejętności i programowanie gier, 
                do tego lubię fizykę. Dlateto też dołączyłem do zespołu Maćka przy tworzeniu silnika i zajmuję się kodowaniem fizyki.`,
          role: 'Physics Programmer',
          media: [
              {
                destination: 'https://github.com/szymix200006',
                icon: OurTeamGithubIcon
              },
              {
                destination: 'https://www.linkedin.com/in/szymon-niedziółka-07a69721b/?originalSubdomain=pl',
                icon: OurTeamLinkedinIcon
              }
            ]
        },
    ]
