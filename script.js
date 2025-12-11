// Story content in 24 parts
const storyParts = [
    {
        day: 1,
        title: "7:00 Uhr - Der Schneemann",
        content: `**7:00 Uhr morgens:** Petra kam als Erste ins LA OLA und stolperte sofort über eine Kiste mit der Aufschrift "Weihnachtsdeko - VORSICHT EXPLOSIV".

"Wieso steht da explosiv?", murmelte sie, während sie die Kiste öffnete. Eine Sekunde später schoss ein aufblasbarer Schneemann heraus, der sich selbst aufblies und Petra gegen die Wand drückte. "STEFFI! HILFEEE!"

Steffi kam angerannt, sah den gigantischen Schneemann und versuchte, ihn mit einem Besenstiel zu stoppen. Resultat: Der Schneemann rollte mit Petra zurück nach draußen, direkt auf den Parkplatz, wo sie in einem Schneehaufen landeten.`
    },
    {
        day: 2,
        title: "7:30 Uhr - Tom plant",
        content: `**7:30 Uhr - Im Technikraum:** Tom schaute auf seine ToDos "Okay Leute, heute wird entspannt. Einfach nur die Weihnachtsbeleuchtung anschließen, mehr nicht!"`
    },
    {
        day: 3,
        title: "8:00 Uhr - Der Bauschaum",
        content: `**8:00 Uhr:** Lena hatte ihre erste geniale Idee des Tages: "Was, wenn wir ÜBERALL Kunstschnee verteilen? Das wird so festlich!"

Was sie nicht wusste: Der "Kunstschnee" war eigentlich Bauschaum aus Toms Lager. Innerhalb von zehn Minuten war die komplette Rezeption, drei Umkleidekabinen und irgendwie auch Chef unter einem Meter weißem Schaum begraben.

"ICH KRIEG KEINE LUFT!", hörte man Christof dumpf schreien, während nur noch seine Hand aus dem Schaum ragte.`
    },
    {
        day: 4,
        title: "9:00 Uhr - Die Stammgäste",
        content: `**9:00 Uhr - Eine Stunde vor Öffnung:**

*KLOPF KLOPF KLOPF*

"HALLO? HALLOOO?!"

*KLOPF KLOPF KLOPF*

"WARUM MACHT KEINER AUF?!"

Petra, die gerade den Schneemann weggerollt hatte, schaute zur Eingangstür. Dort standen bereits fünfzehn Stammgäste und drückten ihre Gesichter gegen die Glastür.

Frau Müller, 73, Stammgast seit 1987, klopfte energisch: "WIR SEHEN EUCH DA DRIN! MACHT AUF! ES IST KALT HIER DRAUSSEN!"

Herr Schmidt, 79, rief: "Ich hab meine Badehose schon an! UNTER DER JACKE! MIR IST KALT!"`
    },
    {
        day: 5,
        title: "9:07 Uhr - Kekse",
        content: `"WIR ÖFFNEN ERST UM ZEHN!", brüllte Petra durch die Tür.

"ABER ES IST DOCH WEIHNACHTEN!" rief Frau Meier.

"ES IST DER 23. DEZEMBER!"

"GENAU! FAST WEIHNACHTEN!"

Steffi kam dazu: "Die stehen JEDES MAL zu früh hier."

"Ich weiß. Letztes Jahr standen sie um halb neun hier."

"Nächstes Jahr kommen sie wahrscheinlich am Vorabend und campen."

*KLOPF KLOPF KLOPF*

"ICH HAB KEKSE MITGEBRACHT!" rief eine Stimme von draußen.`
    },
    {
        day: 6,
        title: "9:08 Uhr - Die Früh-Armee",
        content: `Petra schaute Steffi an. Steffi schaute zurück. Beide schauten auf die Uhr: 9:07 Uhr.

"Denkt ihr, dass wir—" begann Steffi.

"AUF KEINEN FALL!" kam Kirstins Stimme aus dem Büro. "ZEHN UHR BEDEUTET ZEHN UHR!"

*KLOPF KLOPF KLOPF*

"WIR SEHEN DEN SCHAUM DA DRIN! IST WAS PASSIERT?!"

Kai kam vorbei, schaute zur Tür: "Oh Gott, die Früh-Armee ist da."

"Es ist 9:08 Uhr", seufzte Petra.

"Die werden nicht aufhören zu klopfen, oder?"

*KLOPF KLOPF KLOPF KLOPF KLOPF*

"NEIN!" schrien alle Stammgäste im Chor.`
    },
    {
        day: 7,
        title: "9:30 Uhr - We Will Rock You",
        content: `**9:30 Uhr - Das Klopfen wird lauter:**

Das Team versuchte verzweifelt, den Bauschaum zu beseitigen, während draußen das Klopfen rhythmisch wurde.

*KLOPF-KLOPF-KLOPF-KLOPF*

"Die machen jetzt Musik", stellte Jörg fest.

*KLOPF-KLOPF-KLATSCHEN-KLOPF-KLOPF-KLATSCHEN*

"Das ist We Will Rock You", sagte David fasziniert.

"IGNORIERT SIE EINFACH!" brüllte Kirstin.

*"WEEEE WIIIILL, WEEEE WIIIILL, SWIM YOU!"*

"Die singen jetzt", stellte Tom fest.

Christof, endlich aus dem Schaum befreit, schaute zur Tür: "Das sind mindestens dreißig Leute jetzt."`
    },
    {
        day: 8,
        title: "9:45 Uhr - Transparente",
        content: `Schichtführerin Lea schaute auf die Uhr: "Noch 25 Minuten. Wir halten durch!"

**9:45 Uhr - Der finale Countdown:**

Die Stammgäste hatten jetzt Transparente gemalt:

- "LASST UNS REIN - WIR ERFRIEREN"
- "ÖFFNET DAS TOR ZUM PARADIES"
- "HERR SCHMIDT HAT RHEUMA"

*KLOPF KLOPF KLOPF*

"NOCH 15 MINUTEN!" rief Frau Müller.

Die anderen Stammgäste hatten angefangen zu zählen: "14 MINUTEN UND 47 SEKUNDEN!"

Dennis flüsterte Julia zu: "Die haben eine Stoppuhr."

"Die haben IMMER eine Stoppuhr", flüsterte Julia zurück.`
    },
    {
        day: 9,
        title: "9:58 Uhr - Der Countdown",
        content: `**9:58 Uhr:**

Die Stammgäste standen in Formation, Badetaschen kampfbereit in der Hand.

"ZWEI MINUTEN!" rief die Menge.

Das Team stand hinter der Tür, bereit zum Öffnen.

Petra hatte die Hand am Türgriff.

"EINE MINUTE!"

"Macht euch bereit", flüsterte Lea ins Walkie-Talkie.

"DREISSIG SEKUNDEN!"

Jonas zu Lisa: "Das ist wie die Eröffnung eines Apple Stores."

"ZEHN... NEUN... ACHT..."

Das ganze Team zählte jetzt mit.`
    },
    {
        day: 10,
        title: "10:00 Uhr - Die Flutwelle",
        content: `"SIEBEN... SECHS... FÜNF..."

Christof: "Warum machen wir das?"

Kirstin: "Weil du ihnen letztes Jahr versprochen hast, pünktlich um zehn zu öffnen."

"VIER... DREI... ZWEI..."

**10:00 Uhr - Die Tore öffnen sich:**

Petra riss die Tür auf.

Die Stammgast-Armee stürmte herein wie eine Flutwelle. Dreißig Menschen zwischen 65 und 85 Jahren rasten durch den Eingang, an der Kasse vorbei (Geldkarten schon in der Hand!), durch die Umkleiden (Badehosen schon drunter!) und

PLATSCH PLATSCH PLATSCH PLATSCH

Alle dreißig sprangen gleichzeitig ins Wasser.`
    },
    {
        day: 11,
        title: "10:05 Uhr - Kekse im Wasser",
        content: `"ENDLICH!" rief Herr Schmidt.

"DAS HAT SICH GELOHNT!" rief Frau Müller.

Frau Meier verteilte die versprochenen Kekse - im Wasser. Die schwammen jetzt wie kleine Boote herum.

Petra schaute Steffi an: "Das passiert JEDEN Tag."

"Ich weiß."

"Und wir machen trotzdem weiter."

"Jep."

"Warum?"

Steffi zeigte auf die glücklichen Gesichter im Wasser: "Darum."

**10:05 Uhr - Und dann kam der Rest:**

Aber die Geschichte war noch nicht vorbei. Denn jetzt kam die zweite Welle: Die normalen Gäste.`
    },
    {
        day: 12,
        title: "10:05 Uhr - Kai rutscht aus",
        content: `Und genau in diesem Moment...

Kai, der gerade seinen Frühstückskaffee trinken wollte, rannte herbei – und rutschte auf dem Schaum aus. Er schlitterte durch den ganzen Eingangsbereich, durch die Tür, zurück rein, einmal um den Schaum-Berg herum, riss dabei Jörg mit, der gerade seine Föhn-Kontrolle machen wollte, und beide landeten schließlich mit dem Kopf voran im Schwimmerbecken.

Die Kinder applaudierten. "NOCHMAL! NOCHMAL!"

Schichtführerin Lea stand oben auf dem 3-Meter-Turm, Megafon in der Hand: "LEUTE! KÖNNT IHR VIELLEICHT MAL FÜNF MINUTEN KEINEN UNFUG MACHEN?!"`
    },
    {
        day: 13,
        title: "10:10 Uhr - David als Weihnachtsmann",
        content: `**10:10 Uhr:** David hatte sich als Weihnachtsmann verkleidet – mit einem echten weißen Bart, den er sich mit Sekundenkleber angeklebt hatte. Teamleiter Jonas sah ihn und schüttelte den Kopf: "David, sag mir bitte, dass du nicht—"

"HmmmHmmmHmmm!", machte David verzweifelt. Der Bart war an seiner Unterlippe festgeklebt.

"Ich WUSSTE es!" Jonas rief ins Walkie-Talkie: "Lisa, wir haben einen Code Sekundenkleber. Wieder."

Teamleiterin Lisa seufzte durch den Funk: "Das ist das dritte Mal diese Woche, David!"`
    },
    {
        day: 14,
        title: "10:30 Uhr - Die Dunkelheit",
        content: `**10:30 Uhr - Die Katastrophe nimmt Fahrt auf:**

Tom hatte endlich den Bauschaum größtenteils beseitigt und wollte nun die Weihnachtsbeleuchtung installieren. Er kletterte auf die Leiter am Wellenbecken, steckte die Lichterkette ein und – ZACK! Alle Sicherungen flogen raus.

Das Bad war komplett dunkel.

Kirstin's Stimme hallte aus dem Büro: "TOM! WAS HAST DU GEMACHT?!"

"DAS WAR NICHT MEINE SCHULD!" brüllte Tom zurück.

In der Dunkelheit hörte man:
- Platschen
- Schreie
- Davids gedämpftes "HmmmHmmm!"
- Jemanden, der "Stille Nacht" sang`
    },
    {
        day: 15,
        title: "10:30 Uhr - Polonaise im Dunkeln",
        content: `Schichtführer Dennis, der brüllte: "RUHE BEWAHREN! ALLE RUHE BEWAHREN!"
- Dann Dennis selbst, der ins Wasser fiel: "AAAAH!"
- "WER HAT MICH GERADE ANGEFASST?!"

Als das Notlicht anging, bot sich folgendes Bild: Die Seniorengruppe hatte im Dunkeln eine Polonaise durchs Schwimmerbecken gestartet. Zwölf ältere Herrschaften schwammen im Kreis, vorne angeführt von Herrn Schmidt, der eine Poolnudel wie eine Fackel hochhielt.

Schichtführerin Julia stand am Beckenrand, Klemmbrett in der Hand, komplett durchnässt: "Das... das schreibe ich jetzt ALLES in den Bericht!"`
    },
    {
        day: 16,
        title: "11:00 Uhr - Die Wasserschlacht",
        content: `**11:00 Uhr:** Sabine versuchte, das Chaos zu retten, indem sie "Weihnachtskekse" verteilte. Sie hatte sie selbst gebacken. Niemand wusste, dass sie Salz und Zucker verwechselt hatte.

Die erste Kundin biss hinein, verzog das Gesicht und spuckte den Keks in hohem Bogen ins Becken. Der Keks traf Jörg am Kopf. Jörg dachte, es wäre ein Angriff und spritzte zurück. Kai machte mit. Innerhalb von Sekunden war eine ausgewachsene Wasserschlacht im Gang.

Petra versuchte zu vermitteln, rutschte aus und riss dabei die aufblasbare Palme um, die gegen die Sauna-Tür krachte – wo gerade ein Aufguss statt fand. Die Tür flog auf, zwanzig nackte Menschen rannten schreiend heraus.`
    },
    {
        day: 17,
        title: "11:30 Uhr - Das Mikrofon",
        content: `Lea brüllte ins Megafon: "SAUNATÜR! WER HAT DIE SAUNATÜR NICHT GESICHERT?!"

Dennis rannte herbei mit Handtüchern: "ICH HAB DAS! ICH REGEL DAS!"

Er rutschte aus und die Handtücher flogen in alle Richtungen.

**11:30 Uhr - Es wird schlimmer:**

Chef hatte sich aus dem Bauschaum befreit und wollte die Ordnung wiederherstellen. Er griff zum Mikrofon und brüllte: "RUHE! SOFORT!"

Was er nicht wusste: Tom hatte die Lautsprecher repariert und auf Maximallautstärke gestellt. Christofs Stimme dröhnte so laut durchs Bad, dass:
- Im Whirlpool eine Wasserfontäne entstand
- Drei Leute vor Schreck von der Luftmatratze fielen
- Davids angeklebter Bart endlich abriss (mit einem schmerzhaften Schrei)`
    },
    {
        day: 18,
        title: "12:00 Uhr - Weihnachtsmann-Wettbewerb",
        content: `**12:00 Uhr - Mittagspause? Von wegen!**

Jonas hatte eine Idee: "Wisst ihr was? Wir machen einen Weihnachtsmann-Wettbewerb! Wer am besten vom 3-Meter-Turm springt!"

Lisa schaute ihn entgeistert an: "Jonas, das ist die dümmste Idee seit—"

Zu spät. Fünfzehn Männer standen plötzlich oben, alle im Weihnachtsmannkostüm.

Lea brüllte: "NEIN! NICHT SPRINGEN! DAS IST NICHT SICHER!"

Der erste sprang – sein aufblasbarer Bauch fing so viel Luft, dass er wie ein Ballon zurück nach oben schwebte. Er landete auf dem Dach.

Kai rannte zum Technikraum: "TOM! Wir brauchen eine Leiter! Auf dem Dach!"`
    },
    {
        day: 19,
        title: "13:00 Uhr - Der Glühwein",
        content: `Der zweite sprang – sein Bart verfing sich im Geländer. Er baumelte jetzt kopfüber.

Jörg kletterte hoch, um zu helfen, und blieb ebenfalls hängen.

Der dritte sprang – perfekter Salto. Leider platzte beim Eintauchen seine Badehose.

Julia hielt sich die Augen zu: "Das kommt ALLES in den Bericht! ALLES!"

**13:00 Uhr:** Steffi hatte ihre geniale Idee: Glühwein für alle! Sie hatte heimlich einen Glühweinkocher in den Personalraum geschmuggelt.

Problem: Sie hatte Kinderpunsch und echten Glühwein verwechselt. Die Kindergeburtstagsgruppe war jetzt seltsam fröhlich und sang "Oh Tannenbaum" in Dauerschleife.

Dennis bemerkte es als Erster: "Äh... Steffi? Warum tanzen die Kinder so komisch?"

Steffi probierte vom Punsch: "Oh. OH! OH NEIN!"`
    },
    {
        day: 20,
        title: "14:00 Uhr - Der Tannenbaum",
        content: `**14:00 Uhr - Der Höhepunkt des Chaos:**

Petra hatte es geschafft, die echte Weihnachtsdeko zu finden. Sie wollte gerade den Tannenbaum aufstellen, als Tom (der die Rutsche reparierte) ausrutschte, die Rutsche hinunterschoss, drei Poolnudeln durchbrach, durch den Tannenbaum krachte und mit Weihnachtskugeln übersät im Becken landete.

"TOM!!!" brüllten Kai, Jörg, David und Lena gleichzeitig.

Der Tannenbaum fiel um – direkt auf die Sauna-Steuerung. Die Temperatur schoss auf 140 Grad. Die Leute in der Sauna rannten heraus wie in einem Comic, komplett rot und mit Dampf aus den Ohren.

Gleichzeitig aktivierte der fallende Baum die automatische Wellenmaschine. RIESIGE Wellen rollten.`
    },
    {
        day: 21,
        title: "14:05 Uhr - Die Wellen",
        content: `Lea schrie ins Megafon: "EVAKUIERUNG! ALLE RAUS!"

Aber niemand wollte raus. Die Gäste fanden es großartig.

Julia schrieb verzweifelt auf ihr Klemmbrett: "14:03 Uhr - Totales Chaos... 14:04 Uhr - Noch schlimmer... 14:05 Uhr - Ich kündige..."

Dennis versuchte heroisch, die Wellenmaschine auszuschalten, wurde aber von einer Welle erfasst und landete im Strömungskanal, wo er dreimal im Kreis trieb.`
    },
    {
        day: 22,
        title: "15:00 Uhr - Der Nebel",
        content: `**15:00 Uhr - Absolutes Desaster:**

David (jetzt ohne Bart) versuchte verzweifelt, die Wellenmaschine auszuschalten. Er drückte den roten Knopf.

Tom schrie: "NICHT DEN ROTEN!"

Resultat: Die Nebel-Maschine für die Silvesterparty ging an. Innerhalb von Sekunden war das ganze Bad voller dichtem Nebel.

Kai rannte durch den Nebel: "WO IST DER NOTAUS?!"

Jörg rannte in die andere Richtung: "WO IST KAI?!"

Sie krachten gegeneinander.

Im Nebel hörte man:
- "WO BIN ICH?!"
- Christof: "KIRSTIN! WO BIST DU?!"
- Kirstin: "IM BÜRO! WO ICH BLEIBEN WERDE!"`
    },
    {
        day: 23,
        title: "15:00 Uhr - Im Kinderbecken",
        content: `Jonas: "Lisa? LISA?!"

Lisa: "Ich hab's gewusst! ICH HAB'S GEWUSST!"

Lea: "ALLE RUHE BEWAHREN!" *platsch* "OKAY, AUSSER MIR!"

Julia: "Mein Klemmbrett! Hat jemand mein Klemmbrett gesehen?!"

Dennis: "ICH DREH IMMER NOCH IM KREIS!"

Lena: "Das war nicht meine Schuld!"

Steffi und Petra im Chor: "DOCH!"

Als sich der Nebel lichtete, saßen irgendwie alle im Kinderbecken. Alle. Das gesamte Team. Im ein Quadratmeter großen Kinderbecken. Wie ein menschlicher Weihnachtsbaum.`
    },
    {
        day: 24,
        title: "Das Finale",
        content: `**16:00 Uhr:** Chef stand fassungslos mitten in der Verwüstung. Kirstin neben ihm, Akte in der Hand mit der Aufschrift "Versicherung".

Teamleiter Jonas und Lisa sahen sich schuldbewusst an.

Die Schichtführer Lea, Julia und Dennis standen tropfnass da, Julias Klemmbrett war aufgeweicht.

Das Technik-Team Tom, Kai, Jörg, David und Lena hielten nervös zusammen.

Petra und Steffi an der Kasse schauten betreten auf ihre Füße.

"Das war...", begann Christof, "der... absolute..."

Das Team hielt den Atem an. Kirstin seufzte tief.

"...WAHNSINN! Das machen wir nächstes Jahr wieder! Aber größer! Mit Feuerwerk!"

Kirstin starrte ihn an: "CHRISTOF! BIST DU VERRÜCKT GEWORDEN?!"

"Alle lachen! Alle hatten Spaß!"

Kirstin schaute sich um. Tatsächlich. Die Gäste machten Selfies. Kinder kreischten vor Freude. Die Senioren wollten "nochmal Nebel".

Sie seufzte: "Ich schreibe trotzdem einen Bericht. Einen SEHR langen Bericht."

**17:00 Uhr - Das Finale:**

Die örtliche Zeitung kam vorbei. Der Fotograf machte ein Bild vom Team.

Überschrift am nächsten Tag: **"LA OLA feiert verrücktestes Weihnachtsfest der Geschichte - Bad drei Tage geschlossen wegen Aufräumarbeiten - Team überlebt knapp"**

Am Heiligabend fand das Team einen Brief unter der Tür:

*"Liebes LA OLA Team, das war der beste Tag meines Lebens! Ich bin der nackte Weihnachtsmann vom Dach. Die Feuerwehr hat mich erst um 23 Uhr runtergeholt. Kann ich nächstes Jahr wieder kommen? P.S.: Hat jemand meine Badehose gefunden? P.P.S.: Und meinen Autoschlüssel? P.P.P.S.: Und meine Würde?"*

Darunter schrieb das gesamte Team:

- Tom: "Komm vorbei, aber berühr keine Schalter."
- Kai: "Bring zwei Badehosen mit."
- Jörg: "Und einen Helm."
- David: "Und keinen Sekundenkleber."
- Lena: "Sorry wegen dem Schaum!"
- Jonas: "Nächstes Jahr wird organisierter."
- Lisa: "Jonas, halt die Klappe."
- Lea: "Bitte keine Megafon-würdigen Aktionen."
- Julia: "Ich schreibe ALLES auf."
- Dennis: "Ich vermeide den Strömungskanal."
- Petra & Steffi: "Wir checken den Punsch doppelt."
- Christof: "PARTY!"
- Kirstin: "GFK"`

    }
];

// Initialize calendar
async function initCalendar() {
    const doorsGrid = document.getElementById('doorsGrid');
    const now = new Date();
    const currentDay = now.getDate();
    const currentMonth = now.getMonth(); // 0-11
    const currentYear = now.getFullYear();
    
    // Freischaltung bis zum heutigen Datum (max. 24)
    // Beispiel: am 11. eines Monats sind Türchen 1-11 geöffnet
    const maxDay = Math.min(currentDay, 24);
    
    // Get opened doors from API (with localStorage fallback)
    let openedDoors = [];
    try {
        // Dynamically import API functions
        const { getOpenedDoors } = await import('./api.js');
        openedDoors = await getOpenedDoors();
    } catch (error) {
        console.warn('API not available, using localStorage fallback:', error);
        openedDoors = JSON.parse(localStorage.getItem('openedDoors') || '[]');
    }
    
    for (let i = 1; i <= 24; i++) {
        const door = document.createElement('div');
        door.className = 'door';
        door.dataset.day = i;
        
        const isOpen = openedDoors.includes(i);
        // Türchen kann geöffnet werden wenn:
        // 1. Es bereits geöffnet wurde (kann immer wieder geöffnet werden)
        // 2. Oder es ist das aktuelle oder ein vorheriges Türchen (i <= maxDay)
        const canOpen = isOpen || i <= maxDay;
        
        if (isOpen) {
            door.classList.add('open');
        } else if (!canOpen) {
            door.classList.add('locked');
        }
        
        // Alternating red and green doors
        const isRed = i % 2 === 1;
        if (isRed) {
            door.classList.add('door-red');
        } else {
            door.classList.add('door-green');
        }
        
        const story = storyParts.find(s => s.day === i);
        const previewText = story ? story.content.substring(0, 100) + '...' : '';
        
        door.innerHTML = `
            <div class="door-front">
                <div class="door-number">${i}</div>
                <div class="door-icon">${getDoorIcon(i)}</div>
            </div>
            <div class="door-back">
                <div class="door-content">
                    ${isOpen ? `
                        <div class="door-preview">
                            <div class="door-preview-title">${story ? story.title : `Tag ${i}`}</div>
                            <div class="door-preview-text">${previewText}</div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
        
        if (canOpen || isOpen) {
            // Bereits geöffnete Türchen können immer wieder geöffnet werden
            // Neue Türchen nur wenn sie freigeschaltet sind
            door.addEventListener('click', () => {
                if (isOpen) {
                    // If already open, show full content in modal
                    showStoryContent(i);
                } else {
                    // Prüfe ob das Türchen heute geöffnet werden darf
                    const now = new Date();
                    const currentDay = now.getDate();
                    const currentMonth = now.getMonth();
                    
                    if (i <= currentDay) {
                        openDoor(i);
                    } else {
                        // Türchen ist noch nicht freigeschaltet
                        return;
                    }
                }
            });
        }
        
        doorsGrid.appendChild(door);
    }
}

function getDoorIcon(day) {
    const icons = ['🎄', '🎅', '❄️', '🎁', '🦌', '🕯️', '🌟', '🎄', '🎅', '❄️', '🎁', '🦌', '🕯️', '🌟', '🎄', '🎅', '❄️', '🎁', '🦌', '🕯️', '🌟', '🎄', '🎅', '🎄'];
    return icons[day - 1] || '🎄';
}

async function openDoor(day) {
    const door = document.querySelector(`.door[data-day="${day}"]`);
    if (!door || door.classList.contains('open')) return;
    
    door.classList.add('opening');
    
    setTimeout(async () => {
        door.classList.add('open');
        door.classList.remove('opening');
        
        // Save to API (with localStorage fallback)
        try {
            const { saveOpenedDoor } = await import('./api.js');
            await saveOpenedDoor(day);
        } catch (error) {
            console.warn('API not available, using localStorage fallback:', error);
            const openedDoors = JSON.parse(localStorage.getItem('openedDoors') || '[]');
            if (!openedDoors.includes(day)) {
                openedDoors.push(day);
                localStorage.setItem('openedDoors', JSON.stringify(openedDoors));
            }
        }
        
        // Show story content
        showStoryContent(day);
    }, 600);
}

function showStoryContent(day) {
    const story = storyParts.find(s => s.day === day);
    if (!story) return;
    
    const modal = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalDay = document.getElementById('modalDay');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = story.title;
    modalDay.textContent = `Tag ${day}`;
    modalBody.innerHTML = story.content.split('\n\n').map(p => `<p>${p}</p>`).join('');
    
    modal.classList.add('active');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modalOverlay');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Smooth scroll to story section - make it global
window.scrollToStory = function() {
    const storySection = document.getElementById('geschichte');
    if (!storySection) {
        console.error('Story section not found');
        return false;
    }
    
    const header = document.querySelector('.header');
    const headerHeight = header ? header.offsetHeight : 80;
    
    // Get the position of the element
    const rect = storySection.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetPosition = rect.top + scrollTop - headerHeight;

    // Scroll to the position
    window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth'
    });
    
    return true;
};

// Also keep the function name for backwards compatibility
function scrollToStory() {
    return window.scrollToStory();
}

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 30px rgba(255, 23, 68, 0.4)';
    } else {
        header.style.boxShadow = '0 4px 30px rgba(255, 23, 68, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Handle navigation links
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Prevent automatic scroll on page load
function handleInitialScroll() {
    // Always start at top, ignore hash on initial load
    window.scrollTo(0, 0);
}

// Modal close handlers
document.addEventListener('DOMContentLoaded', () => {
    // Use requestAnimationFrame for better performance
    requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    });
    
    initCalendar();
    setupNavigation();
    
    // Initialize quiz system - lazy load when needed
    // Quiz wird erst geladen wenn der User zum Quiz-Bereich scrollt
    let quizInitialized = false;
    const initQuizLazy = () => {
        if (!quizInitialized && typeof initQuiz === 'function') {
            initQuiz();
            quizInitialized = true;
        }
    };
    
    // Lazy load quiz when quiz section is visible
    const quizObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initQuizLazy();
                quizObserver.disconnect();
            }
        });
    }, { rootMargin: '200px' });
    
    const quizSection = document.getElementById('quiz');
    if (quizSection) {
        quizObserver.observe(quizSection);
    }
    
    // Fallback: Initialize quiz after 2 seconds if not already initialized
    setTimeout(() => {
        if (!quizInitialized && typeof initQuiz === 'function') {
            initQuiz();
            quizInitialized = true;
        }
    }, 2000);
    
    // Enable smooth scrolling after page is fully loaded
    requestAnimationFrame(() => {
        document.body.classList.add('loaded');
    });
    
    // Add event listener to scroll button as fallback
    const scrollBtn = document.querySelector('.scroll-btn');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollToStory();
        });
    }
    
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

// Also prevent scroll on window load
window.addEventListener('load', () => {
    if (!window.location.hash) {
        window.scrollTo(0, 0);
    }
});

// Add touch-friendly interactions for mobile
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}
