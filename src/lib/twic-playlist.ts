/*
https://thisweekinchiptune.libsyn.com/rss

var d = new DOMParser().parseFromString(document.body.textContent, 'text/xml')

var parseDuration = e => {
    const match = e.trim().split(':');
    let h, m, s;
    if (match.length == 2) {
        h = '0';
        m = match[0];
        s = match[1];
    } else if (match.length == 3) {
        h = match[0];
        m = match[1];
        s = match[2];
    } else {
        h = '0';
        m = '0';
        s = match[0];
    }

    h = parseInt(h, 10);
    m = parseInt(m, 10);
    s = parseInt(s, 10);

    return (h * 60 * 60) + (m * 60) + s;
};

copy(JSON.stringify([...d.querySelectorAll('item')]
    .map(e => ({
        title: e.getElementsByTagName('title')[0].textContent,
        url: e.getElementsByTagName('enclosure')[0].getAttribute('url'),
        // description: new DOMParser().parseFromString(e.getElementsByTagName('description')[0].textContent, 'text/html').documentElement.innerText,
        duration: parseDuration(e.getElementsByTagName('itunes:duration')[0].textContent)
    })), null, 4))
*/
export const TWiCPlaylist = [
    {
        title: "TWiC 200: Groundbreakers & Skyscrapers (Grand Finale)",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_200__Groundbreakers_and_Skyscrapers_Grand_Finale.mp3?dest-id=232497",
        duration: 9633,
    },
    {
        title: "TWiC 199: Deep Jazz Chill-Out",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_199__Deep_Jazz_Chill-Out.mp3?dest-id=232497",
        duration: 4473,
    },
    {
        title: "TWiC 198: Mother 4 Soundtrack & Maxo's Beat Street OST!",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_198__Mother_4_Soundtrack__Maxos_Beat_Street_OST.mp3?dest-id=232497",
        duration: 3799,
    },
    {
        title: "TWiC 197: Classic Chiptune Hardware (Gameboy, NES and Genesis)",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_197__Classic_Chiptune_Hardware_Gameboy_NES_and_Genesis.mp3?dest-id=232497",
        duration: 4395,
    },
    {
        title: "The Finale is Coming (Update from Cutman)",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_Finale_is_Coming_Soon_Update_from_Cutman.mp3?dest-id=232497",
        duration: 503,
    },
    {
        title: "TWiC 196: FUTURE INTERNET DANCE MUSIC",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_196__Future_Internet_Dance_Music_chapterized.mp3?dest-id=232497",
        duration: 5357,
    },
    {
        title: "The Final Episodes",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_Final_Episodes_Announcement.mp3?dest-id=232497",
        duration: 141,
    },
    {
        title: "TWiC 195: Chiptunes = WIN Volume 6",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_195__ChipWIN_6_chapterized.mp3?dest-id=232497",
        duration: 4660,
    },
    {
        title: "TWiC 194: RoboRob Guest Mix - Outer Space EDM / VGM",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_194__RoboRob_Guest_Mix.mp3?dest-id=232497",
        duration: 2553,
    },
    {
        title: "TWiC 193: Summersape Game-Time (Steven Silo Guest Mix)",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_193__Summerscape_Game-Time_Steven_Silo_Guest_Mix.mp3?dest-id=232497",
        duration: 2981,
    },
    {
        title: "TWiC 192: Chip for Change & Battle of the Bits",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_192__Chip_for_Change_and_Battle_of_the_Bits.mp3?dest-id=232497",
        duration: 3917,
    },
    {
        title: "TWiC 191: Gosh Darn Delightful!",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_191__Gosh_Darn_Delightful.mp3?dest-id=232497",
        duration: 3841,
    },
    {
        title: "TWiC 190: 101% Video Game Trance (bLiNd Guest Mix)",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_190__101_Video_Game_Trance_bLiNd_Guest_Mix.mp3?dest-id=232497",
        duration: 3109,
    },
    {
        title: "TWiC 189: Breath of the Wild (Tokyo Elvis Guest Mix) [Chapterized]",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_189__Breath_of_the_Wild_Tokyo_Elvis_Guest_Mix_Chapters.mp3?dest-id=232497",
        duration: 1978,
    },
    {
        title: "TWiC 188: Happy Hardcore Special (J-NERATION)",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_188__Happy_Hardcore_Special.mp3?dest-id=232497",
        duration: 4020,
    },
    {
        title: "TWiC 187: Amiga Cyberpunk, GameChops, and Floor Baba",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_187_Amiga_Cyberpunk_GameChops_and_Floor_Baba.mp3?dest-id=232497",
        duration: 3485,
    },
    {
        title: "TWiC 186: Chiptune Heavy Metal",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_186_Chiptune_Heavy_Metal.mp3?dest-id=232497",
        duration: 3863,
    },
    {
        title: "TWiC 185: Deep Chip Chillout and Lofi Hiphop",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_185_Deep_Chip_Chillout_and_Lofi_Hiphop.mp3?dest-id=232497",
        duration: 3734,
    },
    {
        title: "TWiC 184: Chiptune Funk and Donkey Kong EDM",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_184_Chiptune_Funk_and_Donkey_Kong_EDM.mp3?dest-id=232497",
        duration: 4080,
    },
    {
        title: "TWiC 183: MEGA-SIZED CHIPTUNE, GAMING & EDM MIX",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_183_Mega-Sized_Chiptune_Gaming_EDM_Mix.mp3?dest-id=232497",
        duration: 4933,
    },
    {
        title: "TWiC 182: Soulful Heartfelt Game Music",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_182_Soulful_Heartfelt_Game_Music.mp3?dest-id=232497",
        duration: 4204,
    },
    {
        title: "TWiC 181: Chiptune EDM, Black Metal + Video Game Music!",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_181_Chiptune_EDM_Black_Metal__Video_Game_Music.mp3?dest-id=232497",
        duration: 3742,
    },
    {
        title: "TWiC 180: Future Bass & Future Funk",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_180_Future_Bass__Future_Funk.mp3?dest-id=232497",
        duration: 3502,
    },
    {
        title: "TWiC 179: Data Airlines - Synthwave, Progressive, and Deep Chiptune",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_179_Data_Airlines_-_Synthwave_Progressive_and_Deep_Chiptune.mp3?dest-id=232497",
        duration: 3353,
    },
    {
        title: "TWiC 178: Synthwave & 80s Horror Remixes",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_178_Synthwave__80s_Horror_Remixes.mp3?dest-id=232497",
        duration: 3808,
    },
    {
        title: "TWiC 177: Necrodancer & Chiptune Dance Music",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_177__Necrodancer_Chiptune_Dance_Music.mp3?dest-id=232497",
        duration: 3478,
    },
    {
        title: "TWiC 176: SOUNDSHOCK! FM Funk from Ubiktune",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_176_SOUNDSHOCK_FM_Funk_from_Ubiktune.mp3?dest-id=232497",
        duration: 4719,
    },
    {
        title: "TWiC 175: This is JōZu (Dj CUTMAN Live @ MAGFest 2017)",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/This_is_JoZu_Dj_CUTMAN_Live__MAGFest_2017.mp3?dest-id=232497",
        duration: 2423,
    },
    {
        title: "TWiC 174: Chiptune Holiday Christmas",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC174__Chiptune_Holiday_Christmas.mp3?dest-id=232497",
        duration: 4022,
    },
    {
        title: "TWiC 173: Chill Trap, Synthwave, and New Singles",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC173__Chill_Trap_Synthwave_and_New_Singles.mp3?dest-id=232497",
        duration: 3170,
    },
    {
        title: "TWiC 172: Chill Synthwave, Deep Chip, and Earthbound Jazz",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_172__Chill_Synthwave_Deep_Chip_and_Earthbound_Jazz.mp3?dest-id=232497",
        duration: 3490,
    },
    {
        title: "TWiC 171: Blast From The Past",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_171__Chiptune_Blast_From_The_Past.mp3?dest-id=232497",
        duration: 3674,
    },
    {
        title: "TWiC 170: Jazzy Chill Chiptune & Tracker Music",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_170__Jazzy_Chiptune_and_Tracker_Music.mp3?dest-id=232497",
        duration: 3612,
    },
    {
        title: "TWiC 169: Vocal Chiptune and Dance Music",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_169__Vocal_Chiptunes_and_Dance_Music.mp3?dest-id=232497",
        duration: 3479,
    },
    {
        title: "TWiC 168: Feel Better Mix",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_168_Feel_Better_Mix.mp3?dest-id=232497",
        duration: 3567,
    },
    {
        title: "TWiC 167: Novemberween Synthwave Horror Soundtrack",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_167__Novemberween_Horror_Synthwave_Soundtrack.mp3?dest-id=232497",
        duration: 3491,
    },
    {
        title: "TWiC 166: Electric Night-Time",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_166_Electric_Night-Time.mp3?dest-id=232497",
        duration: 3430,
    },
    {
        title: "TWiC 165: NES Chiptune, Gameboy, SNES and Synthwave",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_165__NES_Chiptune_Gameboy_SNES_and_Synthwave.mp3?dest-id=232497",
        duration: 3325,
    },
    {
        title: "TWiC 164: Indie Game Music Mix",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_164__Indie_Game_Music_Mix.mp3?dest-id=232497",
        duration: 3594,
    },
    {
        title: "TWiC 163: Future Bass to Death Metal",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_163__Future_Bass_to_Death_Metal.mp3?dest-id=232497",
        duration: 3224,
    },
    {
        title: "TWiC 162: Upbeat Chiptune Mix (Decktonic, Toriena, Aethernaut, Nanode)",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC162_Upbeat_Chiptune_Mix.mp3?dest-id=232497",
        duration: 3093,
    },
    {
        title: "TWiC 161: GameChops Video Game Remix Roundup",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_161__GameChops_Video_Game_Remix_Roundup.mp3?dest-id=232497",
        duration: 3575,
    },
    {
        title: "TWiC 160: Summer Solstice (Deskpop, Joshua Morse, An0va)",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_160_Summer_Solstice_Deskpop_Joshua_Morse_An0va.mp3?dest-id=232497",
        duration: 3277,
    },
    {
        title: "TWiC 159: Chiptune Dance Mix (Forest Label, Singles)",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_159__Chiptune_Dance_Mix_Forest_Label_Singles.mp3?dest-id=232497",
        duration: 3441,
    },
    {
        title: "TWiC 158: Chill End of Summer Mix",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_158__End_of_Summer_Chill_Mix.mp3?dest-id=232497",
        duration: 3533,
    },
    {
        title: "TWiC 157: Meganeko, Tri Angles, Cheap Shot, Little Sound Assembly",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC157__Meganeko_Tri_Angles_Cheap_Shot_Little_Sound_Assembly.mp3?dest-id=232497",
        duration: 3356,
    },
    {
        title: "TWiC 156: Upbeat and Chill Out - Shirobon, Electric Children, Malmen",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_156__Upbeat_and_Chill_Out.mp3?dest-id=232497",
        duration: 2901,
    },
    {
        title: "TWiC 155: Chiptunes = WIN 5",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_155__Chiptunes_WIN_5.mp3?dest-id=232497",
        duration: 3874,
    },
    {
        title: "TWiC 154: Funky, Feel Good, Soulful Chiptune",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_154__Funky_Feel_Good_Soulful_Chiptune.mp3?dest-id=232497",
        duration: 3150,
    },
    {
        title: "TWiC 153: Chiptune Rock, Indie, and Lo-Fi Bands",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_153__Chiptune_Rock_Indie_and_Lo-Fi_Bands.mp3?dest-id=232497",
        duration: 3408,
    },
    {
        title: "TWiC 152: Dj CUTMAN Summer 2016 Tour Collection",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_152__Dj_CUTMANs_Summer_Tour_Collection.mp3?dest-id=232497",
        duration: 4728,
    },
    {
        title: "TWiC 151: 2ToneDisco Guest Mix",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_151__2ToneDisco_Guest_Mix.mp3?dest-id=232497",
        duration: 2818,
    },
    {
        title: "TWiC 150: Future Funk Special",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_150__Future_Funk_Special.mp3?dest-id=232497",
        duration: 4246,
    },
    {
        title: "TWiC 149: Feel Good Chip - Sexy Synthesizer, Toy Company, Battle of the Bits",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_149__Feel_Good_Chip.mp3?dest-id=232497",
        duration: 3863,
    },
    {
        title: "TWiC 148: NES and Gameboy Chiptunes",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_148__NES_and_Gameboy_Chiptunes.mp3?dest-id=232497",
        duration: 3456,
    },
    {
        title: "TWiC 147: Synthwave in Space",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_147__Synthwave_in_Space.mp3?dest-id=232497",
        duration: 3763,
    },
    {
        title: "TWiC 146: Demoscene Time Machine, Robotprins, CheapBeats",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_146__Demoscene_Time_Machine_Robotprins_CheapBeats.mp3?dest-id=232497",
        duration: 3322,
    },
    {
        title: "TWiC 145: J-NERATION, Tiasu, Balloonbear, Zan",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_145__J-NERATION_Tiasu_Balloonbear_Zan.mp3?dest-id=232497",
        duration: 3793,
    },
    {
        title: "TWiC 144: Anamanaguchi's Capsule Silence XXIV",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_144_Anamanaguchis_Capsule_Silence_XXIV.mp3?dest-id=232497",
        duration: 3569,
    },
    {
        title: "TWiC 143: Arcade High, Musho, Maxo, Casval/Damocles",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_143__Arcade_High_Musho_Maxo_CasvalDamocles.mp3?dest-id=232497",
        duration: 3372,
    },
    {
        title: "TWiC 142: Fighter X, Je Mappelle, Skybox, Tiasu, RoboRob",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_142__Fighter_X_Je_Mappelle_Skybox_Tiasu_RoboRob.mp3?dest-id=232497",
        duration: 3656,
    },
    {
        title: "TWiC 141: Final Fantasy, Materia Collective, Successor",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_141__Final_Fantasy_Materia_Collective_Successor.mp3?dest-id=232497",
        duration: 3630,
    },
    {
        title: "TWiC 140: Mykah, Danimal Cannon, Galaxy Wolf, 456",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_140__Mykah_Danimal_Cannon_Galaxy_Wolf_456.mp3?dest-id=232497",
        duration: 3599,
    },
    {
        title: "TWiC 139: Chill Beats, Deep House, and Analog Jams",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_139__Chill_Beats_Deep_House_and_Analog_Jams.mp3?dest-id=232497",
        duration: 3368,
    },
    {
        title: "TWiC 138: Rakohus, Submoon Records, DJ Super Sonic",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_138__Rakohus_Submoon_Records_DJ_Super_Sonic.mp3?dest-id=232497",
        duration: 3678,
    },
    {
        title: "TWiC 137: Yoann Turpin, Hitboxx, Fat Bard, Warez Waldo",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_137_Yoann_Turpin_Hitboxx_Fat_Bard_Warez_Waldo.mp3?dest-id=232497",
        duration: 3822,
    },
    {
        title: "TWiC 136: Shirobon, Nanode, Kola Kid, DJ Super Sonic",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_136__Shirobon_Nanode_Kola_Kid_DJ_Super_Sonic.mp3?dest-id=232497",
        duration: 3392,
    },
    {
        title: "TWiC 135: Undertale, Dance Music, and Heavy Metal",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_135__Undertale_Dance_Music_and_Heavy_Metal.mp3?dest-id=232497",
        duration: 3610,
    },
    {
        title: "TWiC 134: Groovy Tunes and SNES Vibes",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_134__Groovy_Tunes_and_SNES_Vibes.mp3?dest-id=232497",
        duration: 3401,
    },
    {
        title: "TWiC 133: Freq Fest, CheapBeats, Coda",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_133__Freq_Fest_CheapBeats_Coda.mp3?dest-id=232497",
        duration: 3641,
    },
    {
        title: "TWiC 132: Chillout and Vocal Good Vibes",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_132__Chillout_and_Vocal_Good_Vibes.mp3?dest-id=232497",
        duration: 4359,
    },
    {
        title: "TWiC 131: Upbeat Chiptune Dance Music",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_131__Upbeat_Chiptune_Dance_Music.mp3?dest-id=232497",
        duration: 3709,
    },
    {
        title: "TWiC 130: Post-Guch Happy Hardcore Chip Punk",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_130__Post-Guch_Happy_Hardcore_Chip_Punk.mp3?dest-id=232497",
        duration: 3490,
    },
    {
        title: "TWiC 129: Street Fighter II, The Definitive Soundtrack (Brave Wave)",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_129__Street_Fighter_II_The_Definitive_Soundtrack_Brave_Wave.mp3?dest-id=232497",
        duration: 3828,
    },
    {
        title: "TWiC 128: Future Chip Game Music",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_128__Future_Chip_Game_Music.mp3?dest-id=232497",
        duration: 3938,
    },
    {
        title: "TWiC 127: Hardcore Gameboy, NES and Game Music",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_127_Hardcore_Gameboy_NES_and_Game_Music.mp3?dest-id=232497",
        duration: 3305,
    },
    {
        title: "TWiC 126: Synthwave and Jazzy Chill Out",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_126__Synthwave_and_Jazzy_Chill_Out.mp3?dest-id=232497",
        duration: 3571,
    },
    {
        title: "TWiC 125: VLAD II & Killer Compilations!",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_125__VLAD_II_Killer_Compilations.mp3?dest-id=232497",
        duration: 3863,
    },
    {
        title: "TWiC 124: Chill Future Chip",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC124_Chill_Future_Chip.mp3?dest-id=232497",
        duration: 3643,
    },
    {
        title: "TWiC 123: Eclectic Chiptune Dance Music",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC123_Eclectic_Chiptune_Dance_Music.mp3?dest-id=232497",
        duration: 3508,
    },
    {
        title: "TWiC 122: NoCopyright Sounds, Monstercat, Ninety9Lives, GameChops",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_122__NoCopyright_Sounds_Monstercat_Ninety9Lives_GameChops.mp3?dest-id=232497",
        duration: 7524,
    },
    {
        title: "TWiC 121: Hunty, Zabutom, CrunchyCo, Relay Bros",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_121__Hunty_Zabutom_CrunchyCo_Relay_Bros.mp3?dest-id=232497",
        duration: 3565,
    },
    {
        title: "TWiC 120: Malmen, 2A0X, YEON, DDRKirby(ISQ)",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_120__Malmen_2A0X_YEON_DDRKirbyISQ.mp3?dest-id=232497",
        duration: 3758,
    },
    {
        title: "TWiC 119: Breakbeat Heartbeat, Azuria Sky, DDRKirby, Maxo",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_119__Breakbeat_Heartbeat_Azuria_Sky_DDRKirby_Maxo.mp3?dest-id=232497",
        duration: 3949,
    },
    {
        title: "TWiC 118: Trey Frey, .Mpegasus, Ap0c, Weekly Treats",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_118__Trey_Frey_.Mpegasus_Ap0c_Weekly_Treats.mp3?dest-id=232497",
        duration: 3364,
    },
    {
        title: "TWiC 117: Little Sound Assembly, Popskyy, 456",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_117__Little_Sound_Assembly_Popskyy_456.mp3?dest-id=232497",
        duration: 2397,
    },
    {
        title: "TWiC 116: Boss Fight, Hitboxx, Electric Children, Harley Likes Music",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_116__Boss_Fight_Hitboxx_Electric_Children_Harley_Likes_Music.mp3?dest-id=232497",
        duration: 3363,
    },
    {
        title: "TWiC 115: Vince Kaichan, Lizardking, Chipzel, Fluidvolt",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_115__Vince_Kaichan_Lizardking_Chipzel_Fluidvolt.mp3?dest-id=232497",
        duration: 3587,
    },
    {
        title: "TWiC 114: LukHash, Rymdkraft, Chipzel, RainbowDragonEyes",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_114__LukHash_Rymdkraft_Chipzel_RainbowDragonEyes.mp3?dest-id=232497",
        duration: 3383,
    },
    {
        title: "TWiC 113: Chiptunes = WIN Volume 4",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_113__Chiptunes__WIN_Volume_4.mp3?dest-id=232497",
        duration: 4579,
    },
    {
        title: "TWiC 112: Pterodactyl Squad, Shnabubula, Cheapshot, Bknapp",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_112__Pterodactyl_Squad_Shnabubula_Cheapshot_Bknapp.mp3?dest-id=232497",
        duration: 3389,
    },
    {
        title: "TWiC 111: C-jeff, GameChops, Laffe The Fox, Dollfin",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_111__C-jeff_GameChops_Laffe_The_Fox_Dollfin.mp3?dest-id=232497",
        duration: 3870,
    },
    {
        title: "TWiC 110: Tri Angles, JKLOL, Maxo, Hyper Potions",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_110__Tri_Angles_Eulant_JKLOL_Maxo_Hyper_Potions.mp3?dest-id=232497",
        duration: 3432,
    },
    {
        title: "TWiC 109: Brave Wave, Ben Briggs, 2xAA, Dream*Eater",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_109__Brave_Wave_Ben_Briggs_2xAA_Dream_Eater.mp3?dest-id=232497",
        duration: 3430,
    },
    {
        title: "TWiC 108: Joshua Morse, Auxcide, Misfit Chris, RobKTA",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_108__Joshua_Morse_Auxcide_Misfit_Chris_RobKTA.mp3?dest-id=232497",
        duration: 3863,
    },
    {
        title: "TWiC 107: Video Game Music, Yoann Turpin, Red&Green",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_107__Video_Game_Music_Yoann_Turpin_Red_Green.mp3?dest-id=232497",
        duration: 3117,
    },
    {
        title: "TWiC 106: MmcM (Ubiktune), Mykah, Slime Girls",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_106__MmcM_Ubiktune_Mykah_Slime_Girls.mp3?dest-id=232497",
        duration: 3715,
    },
    {
        title: "TWiC 105: Vince Kaichan, Jredd & Groovemaster303, Cheap Dinosaurs, Zantilla",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_105__Vince_Kaichan_Jredd__Groovemaster303_Cheap_Dinosaurs_Zantilla.mp3?dest-id=232497",
        duration: 3645,
    },
    {
        title: "TWiC 104: Ultrasyd, Sabrepulse, A_Rival, Glenntai, She",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_104__Ultrasyd_Sabrepulse_A_Rival_Glenntai_She.mp3?dest-id=232497",
        duration: 3902,
    },
    {
        title: "TWiC 103: Maxo, Zalza, Mega Flare",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_103__Maxo_Zalza_Mega_Flare.mp3?dest-id=232497",
        duration: 3589,
    },
    {
        title: "TWiC 102: Shirobon, Matatronaut, Calavera, PANDAstar",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_102__Shirobon_Matatronaut_Calavera_PANDAstar.mp3?dest-id=232497",
        duration: 3683,
    },
    {
        title: "TWiC 101: Algar, Robotprins, Bknapp, Parallelogram Records",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_101__Algar_Robotprins_Bknapp_Parallelogram_Records.mp3?dest-id=232497",
        duration: 3751,
    },
    {
        title: "TWiC 100: Cutman's Favorite Chiptune Dance Music",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_100__Cutmans_Favorite_Chiptune_Dance_Music.mp3?dest-id=232497",
        duration: 10923,
    },
    {
        title: "TWiC 099: Chiptunes = WIN, BleepLove, NNNNNNNNNN, Popskyy",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_099__Chiptunes__WIN_BleepLove_NNNNNNNNNN_Popskyy.mp3?dest-id=232497",
        duration: 3729,
    },
    {
        title: "TWiC 098: Dj CUTMAN, 4mat, Battle of the Bits, Star Fighter Dreams",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_098__Dj_CUTMAN_4mat_Battle_of_the_Bits_Star_Fighter_Dreams.mp3?dest-id=232497",
        duration: 3511,
    },
    {
        title: "TWiC 097: Meganeko, Chipmusic Heroes, Toy Company, Russellian",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_097__Meganeko_Chipmusic_Heroes_Toy_Company_Russellian.mp3?dest-id=232497",
        duration: 3647,
    },
    {
        title: "TWiC 096: Nest HQ, Tappy, Space Town Savior, Glenntai",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_096__Nest_HQ_Tappy_Space_Town_Savior_Glenntai.mp3?dest-id=232497",
        duration: 3641,
    },
    {
        title: "TWiC 095: Astroskeleton, n00bstar, 456, Sabrepulse",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_095__Astroskeleton_n00bstar_456_Sabrepulse.mp3?dest-id=232497",
        duration: 3479,
    },
    {
        title: "TWiC 094: Keiji Yamagishi, Kubbi, Kawaii 8bit",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_094__Keiji_Yamagishi_Kubbi_Kawaii_8bit.mp3?dest-id=232497",
        duration: 3851,
    },
    {
        title: "TWiC 093: Sabrepulse, Trey Frey, Tiasu",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_093__Sabrepulse_Trey_Frey_Tiasu.mp3?dest-id=232497",
        duration: 3736,
    },
    {
        title: "TWiC 092: Rockage, Frequency Festival",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_092__Rockage_Frequency_Festival.mp3?dest-id=232497",
        duration: 3197,
    },
    {
        title: "TWiC 091: Weekly Treats 2014 Review",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_091__Weekly_Treats_2014_Review.mp3?dest-id=232497",
        duration: 3640,
    },
    {
        title: "TWiC 090: Toy Company, Balloonbear, Rainbowdragoneyes, Awesome Force",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_090__Toy_Company_Balloonbear_Rainbowdragoneyes_Awesome_Force.mp3?dest-id=232497",
        duration: 3905,
    },
    {
        title: "TWiC 089: Joshua Morse, Sabrepulse, Foilverb",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_089__Joshua_Morse_Sabrepulse_Foilverb.mp3?dest-id=232497",
        duration: 3395,
    },
    {
        title: "TWiC 088: Year in Review 2014",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_088__Year_in_Review_2014.mp3?dest-id=232497",
        duration: 6763,
    },
    {
        title: "TWiC 087: Christmas Eve Special",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC20087_20Christmas-Eve20Special.mp3?dest-id=232497",
        duration: 5310,
    },
    {
        title: "TWiC 086: Chipocrite, Rushjet1, DDRKirby(ISQ)",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_086__Chipocrite_Rushjet1_DDRKirbyISQ.mp3?dest-id=232497",
        duration: 3620,
    },
    {
        title: "TWiC 085: Shy Guys, Slime Girls, Trey Frey, Shirobon",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_085__Shy_Guys_Slime_GirlsTrey_Frey_Shirobon.mp3?dest-id=232497",
        duration: 4162,
    },
    {
        title: "TWiC 084: Rushjet1, Dj CUTMAN, Ralfington Guest Mix",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWIC_084__Rushjet1_Dj_CUTMAN_Ralfington_Guest_Mix.mp3?dest-id=232497",
        duration: 4224,
    },
    {
        title: "TWiC 083: Professor Shyguy, Alex Powrs, Fearofdark, Tetracase",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/083__Professor_Shyguy_Alex_Powrs_Fearofdark_Tetracase.mp3?dest-id=232497",
        duration: 3826,
    },
    {
        title: "TWiC 082: Hello World, Inverse Phase, Rochester Chip, General Offensive",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWiC_082__Hello_World_Inverse_Phase_Rochester_Chip_General_Offensive.mp3?dest-id=232497",
        duration: 3331,
    },
    {
        title: "TWiC 081: Monomer, Graz, IAYD, MisfitChris",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/djcutman_2014-11-13T11_38_24-08_00.mp3?dest-id=232497",
        duration: 3961,
    },
    {
        title: "TWiC 080 After Party",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/djcutman_2014-11-06T12_47_19-08_00.mp3?dest-id=232497",
        duration: 1058,
    },
    {
        title: 'TWiC 080: Jake "virt" Kaufman, Benjamin Briggs, Overclocked Records',
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/djcutman_2014-11-06T12_47_05-08_00.mp3?dest-id=232497",
        duration: 3754,
    },
    {
        title: "TWiC 079: Ultrasyd, Rakohus, Yoann Turpin",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/djcutman_2014-10-30T11_34_48-07_00.mp3?dest-id=232497",
        duration: 3731,
    },
    {
        title: "TWiC 078: Jredd, Warez Waldo, Superspink, 456",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-10-23T18_59_31-07_00.mp3?dest-id=232497",
        duration: 3696,
    },
    {
        title: "TWiC 077: Kartmaze, Chibi-Tech, Shirobon, The Artist Formerly Known As Moby",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-10-16T10_48_25-07_00.mp3?dest-id=232497",
        duration: 3850,
    },
    {
        title: "TWiC 076: Fearofdark, Telefuture, Danimal Cannon, Tri Angles",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-10-09T15_12_52-07_00.mp3?dest-id=232497",
        duration: 3272,
    },
    {
        title: "TWiC 075: Zackery Wilson, tiasu, Spaceman Fantastiques, CheapBeats = WIN",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-10-02T10_25_07-07_00.mp3?dest-id=232497",
        duration: 3629,
    },
    {
        title: "TWiC 074: Men of Mega, she, E.N.Cowell, ocean palace",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-09-25T10_14_21-07_00.mp3?dest-id=232497",
        duration: 3702,
    },
    {
        title: "TWiC 073: V-Axys, ZwamTek, Protodome, Groovemaster303",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-09-18T09_57_42-07_00.mp3?dest-id=232497",
        duration: 3449,
    },
    {
        title: "TWiC 072: Chiptunes = WIN: Volume 3 Special!",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-09-11T17_57_28-07_00.mp3?dest-id=232497",
        duration: 4863,
    },
    {
        title: "TWiC 071: Big Giant Circles, Rakohus, Xyce",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-09-05T10_54_26-07_00.mp3?dest-id=232497",
        duration: 3605,
    },
    {
        title: "TWiC 070: Inverse Phase, Remute, GameChops",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-08-02T13_54_44-07_00.mp3?dest-id=232497",
        duration: 3732,
    },
    {
        title: "TWiC 069: Auxicde, Spamtron, n00bstar, Metatronaut",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-07-24T18_34_49-07_00.mp3?dest-id=232497",
        duration: 3478,
    },
    {
        title: "TWiC 068: Yoann Turpin, Manami Matsumae, Little Sound Assembly",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-07-17T13_51_02-07_00.mp3?dest-id=232497",
        duration: 3833,
    },
    {
        title: "TWiC 067: Breakbeat Heartbeat, Noisewaves, GOTO80",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-07-15T11_53_20-07_00.mp3?dest-id=232497",
        duration: 3518,
    },
    {
        title: "TWiC 066: Shovel Knight, 1001 Spikes",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-07-03T11_51_18-07_00.mp3?dest-id=232497",
        duration: 3258,
    },
    {
        title: "TWiC 065: Ben Briggs, Bright Primate, Mr. Spastic, Samuel Baker, Chipocrite",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-06-26T16_39_56-07_00.mp3?dest-id=232497",
        duration: 3588,
    },
    {
        title: "TWiC 064: James Landino Guest Mix",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-06-19T12_57_07-07_00.mp3?dest-id=232497",
        duration: 3484,
    },
    {
        title: "TWiC 063: Year of the Yoshi, DefiantSystems, RetroDigital",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-06-17T15_27_33-07_00.mp3?dest-id=232497",
        duration: 3474,
    },
    {
        title: "TWiC 062: Belthesar Guest Mix",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-06-17T13_40_25-07_00.mp3?dest-id=232497",
        duration: 3074,
    },
    {
        title: "TWiC 061: 4mat, ectogemia, NNNNNNNNNN, hydden(ReChip)",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-05-29T14_31_42-07_00.mp3?dest-id=232497",
        duration: 3796,
    },
    {
        title: "TWiC 060: Lowtoy, VIRUS Empire, FIGHT! Leblanc, RoboRob",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-05-22T12_08_10-07_00.mp3?dest-id=232497",
        duration: 3131,
    },
    {
        title: "TWiC 059: Rushjet1, Dj CUTMAN & Ralfington, PICE, Producer Snafu",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-05-15T10_49_01-07_00.mp3?dest-id=232497",
        duration: 3253,
    },
    {
        title: "TWiC 058: Mega Ran, Toni Leys, _ensnare_, Alex Lane",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-05-08T11_28_05-07_00.mp3?dest-id=232497",
        duration: 3387,
    },
    {
        title: "TWiC 057: Brave Wave, Player Two, Protodome, George and Jonathan",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-05-01T20_07_48-07_00.mp3?dest-id=232497",
        duration: 3890,
    },
    {
        title: "TWiC 056: The TWiC Bundle on Groupees!",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-04-23T09_35_14-07_00.mp3?dest-id=232497",
        duration: 3407,
    },
    {
        title: "TWiC 055: EINDBAAS, astroskeleton, Roboctopus, Casshern, suspended FORCE",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-04-17T12_35_01-07_00.mp3?dest-id=232497",
        duration: 3457,
    },
    {
        title: "TWiC 054: Snesei, James Landino, Unicorn Princess, H33llxz",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-04-15T09_04_47-07_00.mp3?dest-id=232497",
        duration: 3741,
    },
    {
        title: "TWiC 053: Chiptunes = WIN, Ben Briggs, Telefuture",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-04-03T11_51_17-07_00.mp3?dest-id=232497",
        duration: 3670,
    },
    {
        title: "TWiC 052: One Year of This Week in Chiptune!",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-03-27T10_10_28-07_00.mp3?dest-id=232497",
        duration: 3760,
    },
    {
        title: "TWiC 051: Super Marcato Bros, halc, Galaxy Wolf",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-03-20T11_41_54-07_00.mp3?dest-id=232497",
        duration: 3400,
    },
    {
        title: "TWiC 050: Brick BRKer, Zantilla, Raddons",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-03-12T21_44_16-07_00.mp3?dest-id=232497",
        duration: 3404,
    },
    {
        title: "TWiC 049: Professor Shyguy, Henry Homesweet, Brave Wave",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-03-06T11_03_47-08_00.mp3?dest-id=232497",
        duration: 3927,
    },
    {
        title: "TWiC 048: Yoann Turpin, Player 2, 56KBPS Records",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-02-26T21_33_33-08_00.mp3?dest-id=232497",
        duration: 3465,
    },
    {
        title: "TWiC 047: Zabutom, TORIENA, SoulEye",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-02-20T11_13_35-08_00.mp3?dest-id=232497",
        duration: 3482,
    },
    {
        title: "TWiC 046: Big Giant Circles, Trey Frey, Prototype Raptor",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-02-12T23_21_17-08_00.mp3?dest-id=232497",
        duration: 3700,
    },
    {
        title: "TWiC 045: Shirobon, Doctor Popular, Sabrepulse",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-02-05T23_13_48-08_00.mp3?dest-id=232497",
        duration: 3615,
    },
    {
        title: "TWiC 044: Vince Kaichan, K->, Monomania",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-01-29T21_45_40-08_00.mp3?dest-id=232497",
        duration: 3731,
    },
    {
        title: "TWiC 043: Monodeer, Sabrepulse, Kola Kid",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-01-23T11_51_50-08_00.mp3?dest-id=232497",
        duration: 3230,
    },
    {
        title: "TWiC 042: Bleepstreet, Dubmood, Cheap Dinosaurs",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-01-16T07_52_16-08_00.mp3?dest-id=232497",
        duration: 3621,
    },
    {
        title: "TWiC 041: MegaRan, K-Murdock (Forever Famicom Special)",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2014-01-16T07_36_00-08_00.mp3?dest-id=232497",
        duration: 4229,
    },
    {
        title: "TWiC 040: Rushjet1, Coda, Note!",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-12-31T22_46_41-08_00.mp3?dest-id=232497",
        duration: 3327,
    },
    {
        title: "TWiC 039: ChipWIN, Professor Shyguy, 8bitpeoples (Christmas Special 2013)",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-12-27T09_11_44-08_00.mp3?dest-id=232497",
        duration: 3654,
    },
    {
        title: 'TWiC 038: Jake "virt" Kaufman, cTrix, Auxcide',
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-12-19T12_00_38-08_00.mp3?dest-id=232497",
        duration: 3621,
    },
    {
        title: "TWiC 037: Battle of the Bits, Ap0c, ctrl_alt_del",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-12-12T10_42_50-08_00.mp3?dest-id=232497",
        duration: 3522,
    },
    {
        title: "TWiC 036: Kenobit, sp00ked, Mega Flare",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-12-05T14_35_12-08_00.mp3?dest-id=232497",
        duration: 3593,
    },
    {
        title: "TWiC 035: DDRKirby(ISQ), Doomcloud, Chasing Bleeps, Tri Angles",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-12-02T08_41_50-08_00.mp3?dest-id=232497",
        duration: 3541,
    },
    {
        title: "TWiC 034: Disaterpeace, C-Jeff, halc, Fearofdark",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-11-21T11_32_35-08_00.mp3?dest-id=232497",
        duration: 3483,
    },
    {
        title: "TWiC 033: Grimecraft, Rushjet1, Ubiktune, uCollective ",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-11-14T10_11_54-08_00.mp3?dest-id=232497",
        duration: 3436,
    },
    {
        title: "TWiC 032: Crashfaster, Rick Strife, F0XYr4bB!T, Chibi-tech",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-11-07T15_01_44-08_00.mp3?dest-id=232497",
        duration: 3683,
    },
    {
        title: "TWiC 031: halc & Tuberz McGee, Note!, Victory Road",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-10-30T21_33_41-07_00.mp3?dest-id=232497",
        duration: 3509,
    },
    {
        title: "TWiC 030: 8Static Festival Special",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-10-24T21_09_08-07_00.mp3?dest-id=232497",
        duration: 5964,
    },
    {
        title: "TWiC 029: Zabutom, Corset Lore, Carlo Castellano, Mykah, Tri Angles",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-10-17T11_58_18-07_00.mp3?dest-id=232497",
        duration: 3337,
    },
    {
        title: "TWiC 028: Reboot France, An0va, Professor Shyguy, Boy Without Batteries",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-10-10T07_54_54-07_00.mp3?dest-id=232497",
        duration: 3481,
    },
    {
        title: "TWiC 027: Chibi-Tech, DJ Master Kohta, PICE, Tri Angles",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-10-03T10_45_36-07_00.mp3?dest-id=232497",
        duration: 3149,
    },
    {
        title: "TWiC 026: Hip Tanaka, Ubiktune, 8bit bEtty, bryface",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-09-26T08_48_31-07_00.mp3?dest-id=232497",
        duration: 3510,
    },
    {
        title: "TWiC 025: Silnaye feat Chrono Triggers, She, Tri Angles, nickelPUNK",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-09-19T09_26_19-07_00.mp3?dest-id=232497",
        duration: 3563,
    },
    {
        title: "TWiC 024: Joker, PICE, The Dutchess, ChipMusic.org",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-09-12T11_41_31-07_00.mp3?dest-id=232497",
        duration: 3345,
    },
    {
        title: "TWiC 023: Chipzel, Fighter X, Boaconstructor",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-09-05T11_57_37-07_00.mp3?dest-id=232497",
        duration: 3711,
    },
    {
        title: "TWiC 022: Shirobon, Breakbeat Heartbeat, Positive Infinity ",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-08-29T17_21_26-07_00.mp3?dest-id=232497",
        duration: 3671,
    },
    {
        title: "TWiC 021: Ben Briggs, Dire Hit, Pxl-Bot, Danimal Cannon, Ipower",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-08-23T20_56_57-07_00.mp3?dest-id=232497",
        duration: 3503,
    },
    {
        title: "TWiC 020 After Party: Dj CUTMAN Live @ Toy Company",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/djcutman_2013-08-14T21_28_16-07_00.mp3?dest-id=232497",
        duration: 2804,
    },
    {
        title: "TWiC 020: 2A03 Puritans, An0va, Shirobon",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/TWIC_020__2A03_Puritans_An0va_Shirobon.mp3?dest-id=232497",
        duration: 3459,
    },
    {
        title: "TWiC 019: Smiletron, Joshua Morse, Frans Twisk EP",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/djcutman_2013-08-07T22_44_45-07_00.mp3?dest-id=232497",
        duration: 4343,
    },
    {
        title: "TWiC 018: Bright Primate, ChipMusic.org, 10spd, Raddons,",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-08-01T16_28_01-07_00.mp3?dest-id=232497",
        duration: 3535,
    },
    {
        title: "TWiC 017: BitShifter, n00bstar, Kenobit",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-07-28T10_53_42-07_00.mp3?dest-id=232497",
        duration: 3570,
    },
    {
        title: "TWiC 016: ChipWIN2, Misift Chris, Storm Blooper",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-07-18T11_36_43-07_00.mp3?dest-id=232497",
        duration: 7098,
    },
    {
        title: "TWiC 015: Dubmood, Alex Lane, SSD Engage",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-07-11T10_04_11-07_00.mp3?dest-id=232497",
        duration: 3636,
    },
    {
        title: "TWiC 014: Overclocked Remix, Yoann Turpin, Starship Amazing",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-07-03T20_45_46-07_00.mp3?dest-id=232497",
        duration: 3495,
    },
    {
        title: "TWiC 013: Electric Children, Roboctopus, Arcade High",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-06-30T20_55_35-07_00.mp3?dest-id=232497",
        duration: 3821,
    },
    {
        title: 'TWiC 012: Jake "virt" Kaufman, Auxcide, Superspink',
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-06-20T18_57_52-07_00.mp3?dest-id=232497",
        duration: 3905,
    },
    {
        title: "TWiC 011: Disasterpeace, Smiletron, Xyce, Blitz Lunar",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-06-13T17_40_34-07_00.mp3?dest-id=232497",
        duration: 3262,
    },
    {
        title: "TWiC 010: Pause, Telefuture, Chipmusic Heroes",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-06-06T21_02_35-07_00.mp3?dest-id=232497",
        duration: 3565,
    },
    {
        title: "TWiC 010 After Party",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-06-06T20_52_58-07_00.mp3?dest-id=232497",
        duration: 3127,
    },
    {
        title: "TWiC 009: Sexy Synthesizer, Spamtron, Jredd",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-05-29T22_13_25-07_00.mp3?dest-id=232497",
        duration: 3318,
    },
    {
        title: "TWiC 008: FantomenK, A_Rival, DDRKirby(ISQ)",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-05-23T09_57_36-07_00.mp3?dest-id=232497",
        duration: 4008,
    },
    {
        title: "TWiC 007: Anamanaguchi, Henry Homesweet, The Flight Away",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-05-17T10_58_13-07_00.mp3?dest-id=232497",
        duration: 3256,
    },
    {
        title: "TWiC 006: Mega Flare, Güd, Chema64",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-05-08T10_42_45-07_00.mp3?dest-id=232497",
        duration: 3481,
    },
    {
        title: "TWiC 005: World 1-2, Kubbi, Little Scale",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-05-04T10_34_05-07_00.mp3?dest-id=232497",
        duration: 3610,
    },
    {
        title: "TWiC 004: Fez, Bleepstreet, 2Mellow",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-04-25T12_27_44-07_00.mp3?dest-id=232497",
        duration: 3618,
    },
    {
        title: "TWiC 003: Noise Channel, Ubiktune, Benjamin Briggs",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-04-17T10_12_54-07_00.mp3?dest-id=232497",
        duration: 3269,
    },
    {
        title: "TWiC 002: Bubu, Smiletron, Piko Piko Detroit, Yoann Turpin",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-04-11T07_35_42-07_00.mp3?dest-id=232497",
        duration: 4195,
    },
    {
        title: "TWiC 001: Bleep Love, Danimal Cannon, Joshua Morse, Chipocrite",
        url: "https://traffic.libsyn.com/secure/thisweekinchiptune/2013-04-10T10_32_29-07_00.mp3?dest-id=232497",
        duration: 3338,
    },
];
