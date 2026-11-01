// 1. Array Data Katalog Film & Series
const dataKatalog = [
    {
        id: 1,
        title: "Death's Game",
        year: 2023,
        type: "Series",
        genre: "Thriller",
        rating: "10/10 ★★★★★",
        review: "Seseorang yang diberi hukuman reinkarnasi berulang oleh 'Death'. Series ini menyajikan plot menegangkan pada tiap episodenya. Jika kamu suka Thriller seires ini cocok buat kamu.",
        verdict: "Must-Watch",
        poster: "Death's Game.jpg",
        isFavorite: true
    },
    {
        id: 2,
        title: "The Substance",
        year: 2024,
        type: "Movie",
        genre: "Thriller",
        rating: "10/10 ★★★★★",
        review: "Seorang aktris yang nekat memakai obat-obatan agar terlihat muda kembali. Tapi, ada harga yang harus dia bayar mahal. Ceritanya sangat menegangkan, ini cocok untuk kamu yang suka genre gore.",
        verdict: "Must-Watch",
        poster: "The Substance.jpg",
        isFavorite: true
    },
    {
        id: 3,
        title: "Sterling Point",
        year: 2026,
        type: "Series",
        genre: "Drama",
        rating: "9/10 ★★★★",
        review: "Seorang remaja yang mencari 'peninggalan' mendiang ibunya di sebuah pulau. Terdapat plot twist pada setiap episodenya. Kira-kira apa ya yang dia temukan di pulau itu?",
        verdict: "Worth watching",
        poster: "Sterling Point.jpg",
        isFavorite: false
    },
    {
        id: 4,
        title: "Uptown Girls",
        year: 2003,
        type: "Movie",
        genre: "Drama Comedy",
        rating: "9,7/10 ★★★★★",
        review: "Kisah seorang gadis sebatang kara yang menjadi seorang pengasuh karna ditipu pengacaranya. Kisah ini menceritakan persahabatan pengasuh dan gadis kecil yang mengharukan.",
        verdict: "Comfort watch",
        poster: "Uptown Girls.jpg",
        isFavorite: true
    },
    {
        id: 5,
        title: "Cinderella",
        year: 2021,
        type: "Movie",
        genre: "Musical",
        rating: "6/10 ★★",
        review: "Film musikal tentang kisah Cinderella bersama ibu tiri dan kedua saudara tirinya. Kisah ini bukan hanya tentang cinderella yang menarik perhatian pangeran, tetapi di mana dia juga bisa meraih mimpinya sebagai seorang perempuan yang pada masa tersebut tidak lazim.",
        verdict: "Worth watching",
        poster: "Cinderella.jpg",
        isFavorite: false
    },
    {
        id: 6,
        title: "Legally Blonde",
        year: 2001,
        type: "Movie",
        genre: "Romcom",
        rating: "10/10 ★★★★★",
        review: "Elle Woods, seorang gadis pirang yang memutuskan untuk bersekolah di Harvard Law School setelah dicampakan pacarnya karna terlalu pirang.",
        verdict: "Must-Watch",
        poster: "Legally Blonde.jpg",
        isFavorite: true
    },
    {
        id: 7,
        title: "13 Going on 30",
        year: 2004,
        type: "Movie",
        genre: "Romcom",
        rating: "10/10 ★★★★★",
        review: "Kisah seorang gadis yang berharap menjadi wanita berusia 30 tahun pada hari ulang tahunnya yang ke-13. Seperti apakah kehidupannya saat dewasa?",
        verdict: "Comfort watch",
        poster: "13 Going on 30.jpg",
        isFavorite: true
    },
    {
        id: 8,
        title: "The Princess Diaries",
        year: 2001,
        type: "Movie",
        genre: "Comedy",
        rating: "9,5/10 ★★★★★",
        review: "Mia Thermopolis, seorang remaja perempuan yang hidup bersama ibunya di San Francisco yang ternyata merupakan seorang keturunan bangsawan.",
        verdict: "Comfort watch",
        poster: "The Princess Diaries.jpg",
        isFavorite: false
    },
    {
        id: 9,
        title: "Maxton Hall Season 1",
        year: 2023,
        type: "Series",
        genre: "Romance",
        rating: "8,5/10 ★★★★",
        review: "Seorang siswi pintar yang mendapatkan beasiswa di sekolah elit Maxton Hall dan bercita-cita untuk berkuliah di Oxford. Tapi apakah rencanya berkuliah di Oxford berjalan sempurna?",
        verdict: "Worth watching",
        poster: "Maxton Hall Season 1.jpg",
        isFavorite: false
    },
    {
        id: 10,
        title: "Mask Girl",
        year: 2023,
        type: "Series",
        genre: "Thriller",
        rating: "8,5/10 ★★★★",
        review: "Seorang pegawai kantor yang melakukan live streaming menggunakan topeng wajah karenatidak percaya diri dengan penampilannya. Tidak sampai disitu, banyak plot twist lainnya dimana pemeran utamanya harus mejalani operasi plastik dan hidup berpindah-pindah. ",
        verdict: "Worth watching",
        poster: "Mask Girl.jpg",
        isFavorite: true
    },
    {
        id: 11,
        title: "Totally Killer",
        year: 2023,
        type: "Movie",
        genre: "Horror Comedy",
        rating: "8,3/10 ★★★★",
        review: "Seseorang yang kembali ke masa lalu demi menemukan pembunuh berantai yang membunuh ibunya. Cocok buat kamu yang menyukai thriller tetapi banyak unsur komedi.",
        verdict: "Worth watching",
        poster: "Totally Killer.jpg",
        isFavorite: false
    },
    {
        id: 12,
        title: "No Gain No Love",
        year: 2024,
        type: "Series",
        genre: "Romcom",
        rating: "6,5/10 ★★",
        review: "Kisah pernikahan kontrak antara cewe yang perhitungan dengan cowo berondong. Selain chemistry pemain yang kurang, overall ceritanya cukup menarik untuk diikuti.",
        verdict: "Worth watching",
        poster: "No Gain No Love.jpg",
        isFavorite: false
    },
    {
        id: 13,
        title: "TThe Idea of You",
        year: 2024,
        type: "Movie",
        genre: "Romcom",
        rating: "8,3/10 ★★★★",
        review: "Kisah romansa komedi yang menceritakan kisah cinta antara seorang ibu tunggal dengan seorang vokalis band ternama. Filmnya menarik untuk diikuti, tapi menurutku tidak worth untuk ditonton ulang.",
        verdict: "Worth watching",
        poster: "The Idea of You.jpg",
        isFavorite: false
    },
    {
        id: 14,
        title: "Legally Blonde 2 Red, White & Blonde",
        year: 2023,
        type: "Movie",
        genre: "Romcom",
        rating: "9,5/10 ★★★★★",
        review: "Kisah Elle Woods setelah lulus di Harvard Law School yang memperjuangkan hak-hak hewan setelah mengetahui ibu dari anjingnya (bruiser) yang ternyata menjadi subjek uji coba kosmetik. Akankah Elle Woods dengan keoptimisannya itu berhasil?",
        verdict: "Must-Watch",
        poster: "Legally Blonde 2 Red, White & Blonde.jpg",
        isFavorite: true
    },
    {
        id: 15,
        title: "Me Before You",
        year: 2016,
        type: "Movie",
        genre: "Drama",
        rating: "8,7/10 ★★★★",
        review: "Louisa Clark yang menjadi pengasuh seorang pria kaya yang lumpuh bernama Will Traynor. Keduanya menjadi saling jatuh cinta. Akankah cinta keduanya abadi?",
        verdict: "Comfort Watch",
        poster: "Me Before You.jpg",
        isFavorite: true
    },
    {
        id: 16,
        title: "Another Simple Favor",
        year: 2025,
        type: "Movie",
        genre: "Comedy Mistery",
        rating: "8,0/10 ★★★",
        review: "Kisah seorang sahabat yang meminta 'bantuan sederhana' kepada sahabatnya untuk menjadi bridesmaid. Tapi hal tak terduga terjadi. Film ini menyajikan plot misteri yang membuat penonton menebak-nebak pada setiap scenes.",
        verdict: "Worth watching",
        poster: "Another Simple Favor.jpg",
        isFavorite: false
    },
    {
        id: 17,
        title: "Legally Blondes",
        year: 2009,
        type: "Movie",
        genre: "Drama Comedy",
        rating: "9,0/10 ★★★★",
        review: "Merupakan spin-off dari Legally Blonde (franchise). Menceritakan tentang Izzy dan Annie Woods, sepupu British Elle Woods. Izzy dan Annie berpindah dari England ke California dan bersekolah di mana Elle Woods bersekolah. Akankah mereka sepopular Elle Woods?",
        verdict: "Comfort Watch",
        poster: "Legally Blondes.jpg",
        isFavorite: true
    },
    {
        id: 18,
        title: "Anyone But You",
        year: 2023,
        type: "Movie",
        genre: "Romcom",
        rating: "9,3/10 ★★★★",
        review: "Bea dan Ben yang bertemu di Coffee shop kemudian merasa cocok satu sama lain dan memutuskan untuk berkencan. Ada kesalahpahaman setelah mereka menghabiskan waktu bersama, lalu keduanya memutuskan untuk saling menjauh. Tapi takdir mempertemukan mereka kembali karena relasi keduanya mengadakan upacara pernikahan di Australia. Akankah keduanya canggung atau keduanya akan kembali bersama?",
        verdict: "Comfort Watch",
        poster: "Anyone But You.jpg",
        isFavorite: true
    },
    {
        id: 19,
        title: "No Hard Feelings",
        year: 2023,
        type: "Movie",
        genre: "Romcom",
        rating: "7/10 ★★★",
        review: "Seorang wanita dewasa yang menemukan lowongan pekerjaan untuk mengurusi remaja kaya yang anti-sosial dengan imbalan sebuah mobil.",
        verdict: "Worth watching",
        poster: "No Hard Feelings.jpg",
        isFavorite: false
    },
    {
        id: 20,
        title: "Good Boy",
        year: 2025,
        type: "Series",
        genre: "Action",
        rating: "8,5/10 ★★★★",
        review: "Para mantan atlet peraih medali yang menjaddi polisi khusus kejahatan. Kisah perjuangan para polisi khusus ini yang melawan penguasa-penguasa tamak, serakah, dan jahat. Akankah mereka bisa melawan para penguasa jahat?",
        verdict: "Worth watching",
        poster: "Good Boy.jpg",
        isFavorite: false
    },
    {
        id: 21,
        title: "Notting Hill",
        year: 1999,
        type: "Movie",
        genre: "Romcom",
        rating: "10/10 ★★★★★",
        review: "Kisah cinta seorang aktris asal amerika dengan pemilik toko buku asal London. Keduanya bertemu saat sang aktris mampir ke toko buku di distrik Nothing Hill saat dirinya sedang syuting di London. Cinta yang penuh rintangan karena status keduanya yang berbeda tetapi terasa hangat. Akankah cinta keduanya terhalang status atau berlanjut?",
        verdict: "Must-Watch",
        poster: "Notting Hill.jpg",
        isFavorite: true
    },
    {
        id: 22,
        title: "When Harry Met Sally",
        year: 1989,
        type: "Movie",
        genre: "Romcom",
        rating: "9,5/10 ★★★★★",
        review: "Kisah Harry dan Sally yang berbagi tumpangan ke New York City dan keduanya kemudia berteman. Akankah pria dan wanita hanya bisa berteman?",
        verdict: "Comfort Watch",
        poster: "When Harry Met Sally.jpg",
        isFavorite: false
    },
    {
        id: 23,
        title: "Head Over Heels",
        year: 2025,
        type: "Series",
        genre: "Romance Fantasi",
        rating: "9,5/10 ★★★★★",
        review: "Kisah seorang siswi SMA yang ternyata merupakan seorang dukun. Suatu hari dia mendapatkan klien siswa SMA yang mempunyai takdir yang buruk. Kemudian siswi itu berusaha untuk menghilangkan takdir buruk siswa laki-laki tersebut. Akankah dia berhasil menghilangkan takdir buruk siswa laki-laki tersebut?",
        verdict: "Must-Watch",
        poster: "Head Over Heels.jpg",
        isFavorite: true
    },
    {
        id: 24,
        title: "The Divorce Insurance",
        year: 2025,
        type: "Series",
        genre: "Romcom",
        rating: "8,5/10 ★★★★",
        review: "Para pegawai ansuransi yang mengembangkan polis ansuransi perceraian? Cerita yang menarik karena para pengembang asnsuransi tersebut juga pernah bercerai. Kisah slow-burn romance yang menghadirkan komedi sangat menarik ditonton ketika sedang ingin menonton series ringan.",
        verdict: "Worth watching",
        poster: "The Divorce Insurance.jpg",
        isFavorite: false
    },
    {
        id: 25,
        title: "The Pickup",
        year: 2025,
        type: "Movie",
        genre: "Action",
        rating: "8/10 ★★★",
        review: "Kisah komedi aksi tentang pekerja Pickup yang rutin mengambil uang tunai yang tiba-tiba dirampok. Apakah para pekerja pickup tersebut berhasil mengantar uang tunainya?",
        verdict: "Worth watching",
        poster: "The Pickup.jpg",
        isFavorite: false
    },
    {
        id: 26,
        title: "The Heavenly Idol",
        year: 2023,
        type: "Series",
        genre: "Romance Fantasy",
        rating: "7/10 ★★★",
        review: "Seorang pendeta tinggi yang kehilangan kekuatan lalu jiwanya berpindah ke dalam tubuh seorang idol.",
        verdict: "Worth watching",
        poster: "The Heavenly Idol.jpg",
        isFavorite: false
    },
    {
        id: 27,
        title: "The Other Zoey",
        year: 2023,
        type: "Movie",
        genre: "Romcom",
        rating: "8,5/10 ★★★★",
        review: "Kisah Zoey mahasiswi jurusan Ilmu Komputer yang skeptis terhadap cinta kemudian berubah setelah Zach yang seorang bintang sepak bola hilang ingatan dan mengira Zoey adalah pacarnya. Demi agar zach tidak stress dokter menyarankan Zoey untuk berpura-pura menjadi pacarnya.",
        verdict: "Comfort Watch",
        poster: "The Other Zoey.jpg",
        isFavorite: false
    },
    {
        id: 28,
        title: "Chemical Hearts",
        year: 2020,
        type: "Movie",
        genre: "Drama",
        rating: "7,5/10 ★★★",
        review: "Kisah seorang siswa laki-laki yang jatuh cinta kepada siswi pindahan yang sangat misterius.",
        verdict: "Worth watching",
        poster: "Chemical Hearts.jpg",
        isFavorite: false
    },
    {
        id: 29,
        title: "Motorheads",
        year: 2020,
        type: "Series",
        genre: "Drama",
        rating: "9,5/10 ★★★★★",
        review: "Kisah sekelompok remaja yang dipandang sebagai outsider yang membentuk persahabatan karena kecintaan mereka terhadap balap jalanan. Kisah yang sangat menarik untuk diikuti dengan acting dan visual pemain yang memukau.",
        verdict: "Must-Watch",
        poster: "Motorheads.jpg",
        isFavorite: true
    },
    {
        id: 30,
        title: "My Fault: London",
        year: 2025,
        type: "Movie",
        genre: "Romance",
        rating: "8,5/10 ★★★★",
        review: "Film ini merupakan adaptasi dari Culpa Mia yang mengisahkan cinta terlarang diantara saudara tiri.",
        verdict: "Worth watching",
        poster: "My Fault London.jpg",
        isFavorite: false
    },
    {
        id: 31,
        title: "The Summer I Turned Pretty",
        year: 2022,
        type: "Series",
        genre: "Romance",
        rating: "8,5/10 ★★★★",
        review: "Drama remaja yang menyajikan summer vibe dimana para remaja yang menghabiskan liburan musim panas di tempat bernama Cousin. Kisah cinta segitiga antara seorang gadis dengan dua kakak beradik. Kisah yang menarik untuk ditonton karena menyajikan bagaimana rumitnya cinta para remaja.",
        verdict: "Worth watching",
        poster: "The Summer I Turned Pretty.jpg",
        isFavorite: false
    },
    {
        id: 32,
        title: "The Summer I Turned Pretty 2",
        year: 2023,
        type: "Series",
        genre: "Romance",
        rating: "8,5/10 ★★★★",
        review: "Kisah lanjutan dari seri sebelumnya. Di mana pada season ini berfokus pada kematian ibu dari kedua kakak beradik. Season ini menyajikan para karakter yang diliputi rasa duka. Akankan para remaja ini bisa bangkit dari rasa duka?",
        verdict: "Worth watching",
        poster: "The Summer I Turned Pretty 2.jpg",
        isFavorite: false
    },
    {
        id: 33,
        title: "The Summer I Turned Pretty 3",
        year: 2025,
        type: "Series",
        genre: "Romance",
        rating: "8,5/10 ★★★★",
        review: "Kisah para remaja yang menghabiskan waktu summer di Cousin yang kini telah dewasa. Season ini menceritakan gadis perempuan yang hendak menikahi salah satu dari dua kakak beradik. Apakah sang gadis akan berakhir dengan kakaknya atau dengan adiknya?",
        verdict: "Worth watching",
        poster: "The Summer I Turned Pretty 3.jpg",
        isFavorite: false
    },
    {
        id: 34,
        title: "The Map That Leads to You",
        year: 2025,
        type: "Movie",
        genre: "Romance",
        rating: "9,3/10 ★★★★",
        review: "Kisah ini bercerita tentang seorang wanita yang sedang berlibur di Eropa bersama teman-temannya dengan rencana yang disusun sempurna. Rencana tersebut tidak berjalan mulus setelah dirinya bertemu seorang pria yang sedang berkelana. Keduanya menjadi sangat dekat. Akankah keduanya mencapai tujuannya bersama?",
        verdict: "Comfort-Watch",
        poster: "The Map That Leads to You.jpg",
        isFavorite: false
    },
    {
        id: 35,
        title: "May I Help You?",
        year: 2025,
        type: "Series",
        genre: "Drama",
        rating: "8,9/10 ★★★★",
        review: "Menceritakan seorang perempuan yang bekerja sebagai pengurus pemakaman yang bisa berinteraksi dengan arwah dan mengabulkan permintaan terakhir dari arwah tersebut, dan seorang pria penyedia jasa. Ceritanya sangat menarik karena kedua tokoh tersebut bekerjasama untuk membantu orang maupun arwah",
        verdict: "Worth watching",
        poster: "May I Help You.jpg",
        isFavorite: false
    },
    {
        id: 36,
        title: "Jumbo",
        year: 2025,
        type: "Movie",
        genre: "Fantasy",
        rating: "8,5/10 ★★★★",
        review: "Film ini merupakan animasi karya anak bangsa. Jumbo menceritakan petualangan seorang anak bernama Don bersama teman-temannya untuk membuat teater dari sebuah buku peninggalan orang tua Don.",
        verdict: "Worth watching",
        poster: "Jumbo.jpg",
        isFavorite: false
    },
    {
        id: 37,
        title: "50 First Dates",
        year: 2025,
        type: "Movie",
        genre: "Romcom",
        rating: "9,5/10 ★★★★★",
        review: "Mengisahkan pertemuan seorang dokter hewan yang bertemu dengan guru seni di sebuah kafe, lalu keduanya memutuskan untuk berteman. Namun, guru seni tersebut tidak mengingatnya pada keesokan harinya.Ternyata guru seni tersebut menderita Goldfield Syndrome akibat kecelakaan mobil, yaitu bentuk amnesia anterograde fiktif di mana peristiwa yang terjadi hari itu akan menghilang dari ingatannya setiap malam. Akankah kisah keduanya berlanjut?",
        verdict: "Comfort-Watch",
        poster: "50 First Dates.jpg",
        isFavorite: true
    },
    {
        id: 38,
        title: "The Vow",
        year: 2012,
        type: "Movie",
        genre: "Romcom",
        rating: "9,5/10 ★★★★★",
        review: "Menceritakan pasangan suami istri yang hidup bahagia tetapi berubah setelah mereka mengalami kecelakaan dan istrinya koma lalu hilang sebagian ingatannya. Kisah mengharukan seorang suami yang menunggu istrinya ingat kembali tetapi istrinya tidak pernah mengingatnya kembali.",
        verdict: "Comfort-Watch",
        poster: "The Vow.jpg",
        isFavorite: true
    },
    {
        id: 39,
        title: "My Lady Jane",
        year: 2024,
        type: "Series",
        genre: "Drama",
        rating: "9,3/10 ★★★★★",
        review: "Merupakan cerita fiksi sejarah alternatif yang berlatar di Inggris abad ke-16. Serial ini mengisahkan ulang kisah hidup Lady Jane Grey dengan akhir yang jauh berbeda dari sejarah aslinya",
        verdict: "Must-Watch",
        poster: "My Lady Jane.jpg",
        isFavorite: true
    },
    {
        id: 40,
        title: "Her Private Life",
        year: 2019,
        type: "Series",
        genre: "Romance",
        rating: "7,9/10 ★★★",
        review: "Menceritakan seorang kurator seni yang menjalani kehidupan ganda yaitu sebagai seorang penggemar idol yang kemudian bertemu dengan direktur baru yang merupakan seorang seniman terkenal yang ternyata menyebalkan. Kemudian keduanya bekerja sama untuk pura-pura menjadi pasangan. Apa alasan mereka berpura-pura?",
        verdict: "Worth watching",
        poster: "Her Private Life.jpg",
        isFavorite: false
    },
    {
        id: 41,
        title: "The Map of Tiny Perfect Things",
        year: 2021,
        type: "Movie",
        genre: "Drama",
        rating: "8,5/10 ★★★★",
        review: "Mengisahkan dua orang remaja Mark dan Margaret yang terjebak dalam sebuah time loop dan terpaksa harus mengulangi kehidupan pada hari yang sama secara berulang. Akankah mereka bisa mengakhiri time loop tersebut dan apa yang menyebabkan mereka mengalami time loop?",
        verdict: "Comfort watch",
        poster: "The Map of Tiny Perfect Things.jpg",
        isFavorite: false
    },
    {
        id: 42,
        title: "27 Dresses",
        year: 2008,
        type: "Movie",
        genre: "Romcom",
        rating: "10/10 ★★★★★",
        review: "Berfokus pada seorang wanita bernama Jane yang senang membantu pernikahan relasinya dengan menjadi bridesmaid dan mengumpulkan sebanyak 27 gaun bridesmaid. Kemudian dia bertemu dengan seorang wartawan bernama Kevin yang menuliskan kisah Jane sebagai bahan berita untuk mendongkrak kariernya sebagai jurnalis. ",
        verdict: "Must-watch",
        poster: "27 Dresses.jpg",
        isFavorite: true
    },
    {
        id: 43,
        title: "To All the Boys I’ve Loved Before",
        year: 2018,
        type: "Movie",
        genre: "Romance",
        rating: "8,9/10 ★★★★",
        review: "Kisah Lara Jean siswi SMA yang senang menuliskan surat untuk laki-laki yang dia taksir tapi suratnya tidak pernah dia kirimkan. Kitty, adiknya L.J. mengirimkan surat-surat tersebut secara diam-diam. Salah satu suratnya diterima oleh Peter, lalu Peter membuat kesepakatan agar mereka pura-pura berpacaran.",
        verdict: "Worth watching",
        poster: "To all the boys I’ve loved before.jpg",
        isFavorite: false
    },
    {
        id: 44,
        title: "To All The Boys P.S. I still Love You",
        year: 2020,
        type: "Movie",
        genre: "Romance",
        rating: "8,9/10 ★★★★",
        review: "Merupakan film ke-2 dari serial film 'To All the Boys I’ve Loved Before'. Menceritakan perkembangan hubungan Lara Jean dan Peter yang berpacaran secara resmi. Konflik muncul setelah John Amborse, pria yang pernah dikirimi surat cinta L.J. datang sebagai relawan di panti jompo yang sama dengan L.J.. Akankah hubungan L.J. dan Peter goyah?",
        verdict: "Worth watching",
        poster: "To All The Boys P.S. I still Love You.jpg",
        isFavorite: false
    },
    {
        id: 45,
        title: "To All The Boys Always and Forever",
        year: 2021,
        type: "Movie",
        genre: "Romance",
        rating: "8,9/10 ★★★★",
        review: "Hubungan Lara Jean dan Peter yang masih berlanjut, mereka merencanakan untuk berkuliah bersama di Stanford. Masalah muncul saat L.J. gagal masuk Stanford dan L.J. memutuskan berkuliah di NYU dimana jarak Stanford dan NYU yang jauh menyebabkan keduanya harus LDR.",
        verdict: "Worth watching",
        poster: "To All The Boys Always and Forever.jpg",
        isFavorite: false
    },
    {
        id: 46,
        title: "People We Meet on Vacation",
        year: 2021,
        type: "Movie",
        genre: "Romcom",
        rating: "9,5/10 ★★★★★",
        review: "Kisah Poppy dan Alex, dua orang berlawanan yang melakukan summer trip selama 10 tahun. Setelah menghabiskan waktu setiap musim panas selama 10 tahun bersama, keduanya menyadari jika mereka saling mencintai.",
        verdict: "Must-Watch",
        poster: "People We Meet on Vacation.jpg",
        isFavorite: true
    },
    {
        id: 47,
        title: "Letters to Juliet",
        year: 2010,
        type: "Movie",
        genre: "Romcom",
        rating: "9,7/10 ★★★★★",
        review: "Menceritakan seorang wanita asal Amerika bernama Shopie yang berlibur pra-honeymoon dengan tunangannya ke Italia. Shopie yang merara kesepian karena tunangannya sangat sibuk akhirnya berjalan-jalan dan menumukan tempat bernama 'Letter to Juliet' dimana Shopie menemukan sebuah surat dari seseorang yang kehilangan cintanya.",
        verdict: "Must-Watch",
        poster: "Letters to Juliet.jpg",
        isFavorite: true
    },
    {
        id: 48,
        title: "Sweet Home Alabama",
        year: 2002,
        type: "Movie",
        genre: "Romcom",
        rating: "9,5/10 ★★★★★",
        review: "Kisah tentang Melanie seorang perancang busana di New York City yang dilamar oleh putra seorang walikota. Namun, sebenarnya Melanie masih terikat hubungan pernikahan dengan suaminya Jack. Lalu Melanie mendatangi Jack di Alabama untuk meminta Jack agar menyetujui perceraian mereka. Akankah Jack menyetujui perceraian mereka atau memperbaiki hubungan mereka yang belum selesai?",
        verdict: "Must-Watch",
        poster: "Sweet Home Alabama.jpg",
        isFavorite: true
    },
    {
        id: 49,
        title: "The Sheep Detectives",
        year: 2026,
        type: "Movie",
        genre: "Fantasy",
        rating: "8,5/10 ★★★★",
        review: "Menceritakan kawanan domba yang memecahkan kasus kematian misterius gembala mereka. Kawanan domba ini mengumpulkan informasi dari buku-buku novel yang pernah gembala mereka ceritakan. Lalu siapakah pembunuh gembala mereka? Dan apa motive pembunuh tersebut? Lalu dengan cara apa pembunuh membunuh gembala para domba?",
        verdict: "Worth watching",
        poster: "The Sheep Detectives.jpg",
        isFavorite: false
    },
    {
        id: 50,
        title: "Sleepover",
        year: 2004,
        type: "Movie",
        genre: "Drama Comedy",
        rating: "9,5/10 ★★★★★",
        review: "Seorang gadis yang melanggar aturan di rumahnya dengan melakukan perburan bersama teman-temannya pada malam saat mereka mengadakan sleepover. Akankah perburuan mereka berhasil atau malah ketahuan?",
        verdict: "Must-watch",
        poster: "Sleepover.jpg",
        isFavorite: true
    }
];

// 2. Fungsi Menampilkan Kartu Ulasan ke HTML
function renderKatalog(data) {
    const container = document.getElementById("katalogContainer");
    if (!container) return; // Mencegah error jika dipanggil di halaman lain

    container.innerHTML = ""; // Kosongkan tampilan sebelum render ulang

    if (data.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">Tontonan tidak ditemukan.</p>`;
        return;
    }

    data.forEach(item => {
        const favClass = item.isFavorite ? "fav-btn active" : "fav-btn";
        const favText = item.isFavorite ? "★ Hapus dari Favorit" : "☆ Tambah ke Favorit";

        const cardHTML = `
            <div class="card">
                <img src="${item.poster}" alt="Poster ${item.title}">
                <div class="card-content">
                    <div class="card-title">${item.title}</div>
                    <div class="card-detail"><strong>Year:</strong> ${item.year}</div>
                    <div class="card-detail"><strong>Type:</strong> ${item.type}</div>
                    <div class="card-detail"><strong>Genre:</strong> ${item.genre}</div>
                    <div class="card-detail"><strong>Rating:</strong> ${item.rating}</div>
                    <div class="card-detail"><strong>Mini Review:</strong> ${item.review}</div>
                    <div><span class="verdict">${item.verdict}</span></div>
                </div>
                <button class="${favClass}" onclick="toggleFavorite(${item.id})">${favText}</button>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// 3. Fungsi Filter dan Pencarian
function filterKatalog() {
    const searchVal = document.getElementById("searchInput")?.value.toLowerCase() || "";
    const typeVal = document.getElementById("typeFilter")?.value || "All";
    const genreVal = document.getElementById("genreFilter")?.value || "All";

    const filteredData = dataKatalog.filter(item => {
        const matchSearch = item.title.toLowerCase().includes(searchVal);
        const matchType = (typeVal === "All") || (item.type === typeVal);
        const matchGenre = (genreVal === "All") || (item.genre === genreVal);

        return matchSearch && matchType && matchGenre;
    });

    renderKatalog(filteredData);
}

// 4. Fungsi Interaktif Tombol Favorit
function toggleFavorite(id) {
    const item = dataKatalog.find(k => k.id === id);
    if (item) {
        item.isFavorite = !item.isFavorite; // Ubah status true/false
        filterKatalog(); // Render ulang agar tampilan tombol langsung diperbarui
    }
}

// 5. Jalankan Fungsi Render Saat Halaman Selesai Dimuat
document.addEventListener("DOMContentLoaded", () => {
    renderKatalog(dataKatalog);
});

// 6. Fungsi Menampilkan Halaman Favorit
function renderFavorites() {
    const container = document.getElementById("favoritesContainer");
    if (!container) return; // Jalankan hanya jika berada di halaman favorites.html

    const favoriteData = dataKatalog.filter(item => item.isFavorite);
    container.innerHTML = "";

    if (favoriteData.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">Belum ada tontonan favorit yang ditambahkan.</p>`;
        return;
    }

    favoriteData.forEach(item => {
        const cardHTML = `
            <div class="card">
                <img src="${item.poster}" alt="Poster ${item.title}">
                <div class="card-content">
                    <div class="card-title">${item.title}</div>
                    <div class="card-detail"><strong>Year:</strong> ${item.year}</div>
                    <div class="card-detail"><strong>Type:</strong> ${item.type}</div>
                    <div class="card-detail"><strong>Genre:</strong> ${item.genre}</div>
                    <div class="card-detail"><strong>Rating:</strong> ${item.rating}</div>
                    <div class="card-detail"><strong>Mini Review:</strong> ${item.review}</div>
                    <div><span class="verdict">${item.verdict}</span></div>
                </div>
                <button class="fav-btn active" onclick="removeFavoriteInPage(${item.id})">★ Hapus dari Favorit</button>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

function removeFavoriteInPage(id) {
    toggleFavorite(id);
    renderFavorites(); // Render ulang tampilan halaman favorit
}

// Perbarui Event Listener agar merender kedua jenis halaman
document.addEventListener("DOMContentLoaded", () => {
    renderKatalog(dataKatalog);
    renderFavorites();
});