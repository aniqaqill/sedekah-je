import type { Institution } from "../types/institutions";

export const institutions: Institution[] = [
  {
    // https://www.facebook.com/masjidnegaramalaysia/
    id: 1,
    name: "Masjid Negara",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "/masjid/masjid-negara.png",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001295465204939953034585802MY5913MASJID NEGARA6002MY627303251704936237869008996045430052017072988178750084448071617049359619050076304FD9C",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.1419827397613664, 101.69175298700645],
  },
  {
    // https://www.facebook.com/masjidalghufran/
    id: 2,
    name: "Masjid Al-Ghufran",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "/masjid/masjid-al-ghufran.png",
    qrContent:
      "00020201021126520014A000000615000101068900530220MDN162217666262104305204866153034585802MY5915MASJIDALGHUFRAN6011KUALALUMPUR6304AC7A",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.1578854416571565, 101.61682224883123],
  },
  {
    // https://www.facebook.com/MasjidAlMuhtadinDamansaraDamai/
    id: 3,
    name: "Masjid Al-Muhtadin Damansara Damai",
    category: "mosque",
    state: "Selangor",
    city: "Petaling Jaya",
    qrImage: "/masjid/masjid-al-muhtadin.png",
    qrContent:
      "00020101021126580014A000000615000101065887340212MBBQR124979103100000000000520400005303458540500.005802MY5918MASJID AL MUHTADIN6008SELANGOR630414E7",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.201055431014754, 101.59551490051814],
  },
  {
    // https://www.facebook.com/masjidarrahman.jawi/
    id: 4,
    name: "Masjid Ar-Rahman",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "/masjid/masjid-ar-rahman.png",
    qrContent: "https://qr.tngdigital.com.my/m/281011056697947085062292043",
    supportedPayment: ["tng"],
    coords: [3.124261867632774, 101.67413567602591],
  },
  {
    // https://www.facebook.com/masjidlamasurafan/
    id: 5,
    name: "Masjid Lama Kampung Sura",
    category: "mosque",
    state: "Terengganu",
    city: "Kuala Dungun",
    qrImage: "/masjid/masjid-lama-kampung-sura-mlks.png",
    // QR not clear
    coords: [4.7383225224584855, 103.42684395703144],
  },
  {
    // https://www.facebook.com/AsSalamKD/
    id: 6,
    name: "Surau As-Salam Seksyen 4",
    category: "surau",
    state: "Selangor",
    city: "Petaling Jaya", // Kota Damansara
    qrImage: "/surau/surau-as-salam-seksyen-4.png",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2119996031000000000005204729953034585802MY5925SURAU AS SALAM SEKSYEN 4 6008SELANGOR6304B9C3",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.1525404874785603, 101.58173564835822],
  },
  {
    // https://www.facebook.com/masjidsrisendayanofficial/
    id: 7,
    name: "Masjid Sri Sendayan",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Siliau",
    qrImage: "/masjid/masjid-sri-sendayan.png",
    qrContent:
      "00020201021126580014A000000615000101065641600226125510400006590RHBQR0028055204739953034585802MY5919MASJID SRI SENDAYAN6002MY61057195062240309ROA0030360707mss20198264037ECE3BEE396FD9E7293AE400C6B61FF31B756E8D308F44D79C9CA7FA859E8763047E35",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.685339740395178, 101.84383824857599],
  },
  {
    id: 8,
    name: "Masjid Putra Heights",
    category: "mosque",
    state: "Selangor",
    city: "Subang Jaya",
    qrImage: "/masjid/masjid-putra-heights.png",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000105635204866153034585802MY5920MASJID PUTRA HEIGHTS6002MY6253032516451723964230096431580380520164517249832300281046304EE4D",
    supportedPayment: ["duitnow"],
    coords: [2.9975987081545536, 101.57625587096338],
  },
  {
    id: 9,
    name: "Masjid Azzubair Ibnul Awwam",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "/masjid/masjid-azzubair-ibnul-awwam.jpeg",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000952735204866153034585802MY5925MASJID AZZUBAIR IBNUL AWW6002MY6273032516766078843470026415087370520167767757301000106090716167660762452600963040358",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.1138929331824166, 101.72054132480572],
  },
  {
    // https://www.facebook.com/masjidlestariputraofficial/
    id: 10,
    name: "Masjid Lestari Putra", // or Surau Saidina Abu Bakar
    category: "mosque",
    state: "Selangor",
    city: "Seri Kembangan",
    qrImage: "/masjid/masjid-lestari-putra.jpeg",
    qrContent:
      "00020101021126580014A000000615000101065887340212MBBQR125821103100000000000520400005303458540500.005802MY5920MASJID LESTARI PUTRA6008SELANGOR630496E4",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.0016752615306768, 101.65263657018913],
  },
  {
    id: 11,
    name: "Masjid Bandar Saujana Putra",
    category: "mosque",
    state: "Selangor",
    city: "Jenjarom",
    qrImage: "/masjid/masjid-bandar-saujana-putra.jpeg",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001297425204866153034585802MY5925MASJID BANDAR SAUJANA PUT6002MY6273032517055541622240053677717220520170555416742900110190716170555380608800463040DF7",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.9519754843607497, 101.57441677984598],
  },
  {
    id: 12,
    name: "Masjid Al Ansar",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "/masjid/masjid-al-ansar.jpeg",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2010245031000000000005204000053034585802MY5915MASJID AL ANSAR6015WP KUALA LUMPUR6304F6A0",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.1699124257457867, 101.74403904456969],
  },
  {
    id: 13,
    name: "Masjid Tuminah Hamidi",
    category: "mosque",
    state: "Perak",
    city: "Bagan Datuk",
    qrImage: "/masjid/masjid-tuminah-hamidi.jpeg",
    qrContent:
      "00020201021126900014A0000006150001010642070902240824441100029031J97442000315BSN Merchant QR0411011255099085204000053034585802MY5921MASJID TUMINAH HAMIDI6011BAGAN DATOH6105361006304E5D7",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.9938584986122376, 100.7885218078065],
  },
  {
    id: 14,
    name: "Rumah Bakti Nur Ain",
    category: "others",
    state: "Selangor",
    city: "Bandar Baru Bangi",
    qrImage: "/lain/rumah-bakti-nur-ain.jpeg",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR1959819031000000000005204000053034585802MY5919RUMAH BAKTI NUR AIN6008SELANGOR630416E7",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.9490553412681573, 101.772701949897],
  },
  {
    // https://www.facebook.com/p/Masjid-Al-Manar-Kg-Parit-Sakai-Darat-100086783897014/
    id: 15,
    name: "Masjid Jamek Al Manar",
    category: "mosque",
    state: "Johor",
    city: "Muar",
    qrImage: "/masjid/masjid-jamek-al-manar.jpeg",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001296155204866153034585802MY5921MASJID JAMEK AL-MANAR6002MY6273032517052918176870018562499830520170529314563500845950716170529140692300163046EAD",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.0331839076325915, 102.58894060000036],
  },
  {
    // https://www.facebook.com/MTAABSMS/
    id: 16,
    name: "Masjid Tengku Ampuan Afzan, Bandar Satelit (MTAABSMS)",
    category: "mosque",
    state: "Pahang",
    city: "Muadzam Shah",
    qrImage: "/masjid/masjid-tengku-ampuan-afzan.jpeg",
    qrContent:
      "00020201021126600014A000000615000101065892670228BRQR65e1901b481cbd226738d96e5204866153034585802MY5925MASJID TENGKU AMPUAN AFZA6012MUADZAM SHAH61052670062420310M000002273052465e575d1d3f9a90682ebc39b63040BB5",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.067148219132197, 103.06875243657876],
  },
  {
    id: 17,
    name: "Masjid UTM KL",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "/masjid/masjid-utmkl.jpeg",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000721595204866153034585802MY5912MASJID UTMKL6002MY62730325165579551440400458665376805201655795602599001013207161655794994299008630426C5",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.171034515253361, 101.72054262420114],
  },
  {
    id: 18,
    name: "Surau Al Ikhlasiah",
    category: "surau",
    state: "Selangor",
    city: "Ampang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000225031001921366955204866153034585802MY5918SURAU AL-IKHLASIAH6006AMPANG6105680006304ADB9",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.1525994383444234, 101.76554095937011],
  },
  {
    // https://www.facebook.com/MAMTNA/
    id: 19,
    name: "Masjid Al Mustaqim",
    category: "mosque",
    state: "Selangor",
    city: "Ampang",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000003890311011100924415204866153034585802MY5925MASJID AL MUSTAQIM AMPANG6006AMPANG6105680006304F9D2",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.1498359447807265, 101.75193011307067],
  },
  {
    id: 20,
    name: "Surau Al Umm",
    category: "surau",
    state: "Selangor",
    city: "Bandar Baru Bangi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000036031001393260725204866153034585802MY5912SURAU AL-UMM6006KAJANG6105430006304CDE7",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.975596138688422, 101.76216814644013],
  },
  {
    id: 21,
    name: "Masjid As Syakirin",
    category: "mosque",
    state: "Selangor",
    city: "Bandar Seri Putra",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000140031001265703345204866153034585802MY5918MASJID AS SYAKIRIN6007DENGKIL61054380063041627",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 22,
    name: "Surau Damai",
    category: "surau",
    state: "Selangor",
    city: "Bandar Baru Bangi",
    qrImage: "",
    qrContent:
      "00020201021126600014A000000615000101065641670215QRMID000000015103090123369895204866153034585802MY5911SURAU DAMAI6005BANGI610543650630409F3",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.944468450861528, 101.77423580267227],
  },
  {
    id: 23,
    name: "Surau Al Kauthar",
    category: "surau",
    state: "Selangor",
    city: "Bandar Baru Bangi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000197031001328608795204866153034585802MY5916SURAU AL-KAUTHAR6015BANDAR BARU BAN6105436506304DDB5",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 24,
    name: "Surau Ar Raudhah",
    category: "surau",
    state: "Selangor",
    city: "Bandar Baru Bangi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000220031001933151515204866153034585802MY5916SURAU AR-RAUDHAH6006KAJANG6105430006304980F",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.9370580062654783, 101.77765678167017],
  },
  {
    id: 25,
    name: "Surau Al-Sobah",
    category: "surau",
    state: "Selangor",
    city: "Bandar Baru Bangi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000292031001739679955204866153034585802MY5914SURAU AL-SOBAH6015BANDAR BARU BAN6105436506304CDF0",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 26,
    name: "Masjid Al Azhar Kolej Universiti Islam Selangor",
    category: "mosque",
    state: "Selangor",
    city: "Bandar Seri Putra",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000277031001337175795204866153034585802MY5915MASJID AL AZHAR6006KAJANG61054300063045B9C",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 27,
    name: "Masjid Al Hasanah",
    category: "mosque",
    state: "Selangor",
    city: "Bandar Baru Bangi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000320031001964433995204866153034585802MY5925MASJID AL-HASANAH BBBANGI6015BANDAR BARU BAN61054365063047E34",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.9590796271876734, 101.7527277637582],
  },
  {
    id: 28,
    name: "Yayasan Darussyifa Bangi",
    category: "others",
    state: "Selangor",
    city: "Bandar Baru Bangi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000335031001390507915204866153034585802MY5924YAYASAN DARUSSYIFA BANGI6005BANGI61054365063042858",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 29,
    name: "Surau Al Mujahidin",
    category: "surau",
    state: "Selangor",
    city: "Bandar Baru Bangi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000378031001292084515204866153034585802MY5918SURAU AL MUJAHIDIN6005BANGI61054365063041927",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 30,
    name: "Tabung Sekolah Rendah Sri Al Amin Bangi",
    category: "others",
    state: "Selangor",
    city: "Bandar Baru Bangi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000482031001922555695204533153034585802MY5915TABUNG SEK SAAB6006KAJANG6105430006304A92B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 31,
    name: "Masjid Jamek Kuala Lumpur", // atau Masjid Jamek Sultan Abdul Samad
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000002031001633145685204866153034585802MY5925MASJID JAMEK BANDARAYA KL6012KUALA LUMPUR6105500506304B927",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.148924051444629, 101.6956263112918],
  },
  {
    id: 32,
    name: "Surau Khairiah Kampung Tengah",
    category: "surau",
    state: "Selangor",
    city: "Gombak",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003022031001938169345204866153034585802MY5924SURAU KHAIRIAH KG TENGAH6008SELANGOR61055310063048223",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.229518790943314, 101.71554352376846],
  },
  {
    // https://www.facebook.com/mardasah.cherasperdanamcp/
    id: 33,
    name: "Madrasah Cheras Perdana",
    category: "surau",
    state: "Selangor",
    city: "Cheras",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000710031001334739915204866153034585802MY5923MADRASAH CHERAS PERDANA6006CHERAS610543200630477B7",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.0420408671659795, 101.76475768356461],
  },
  {
    // https://www.facebook.com/p/Surau-Al-Hijrah-PPR-Pekan-Batu-100090311133470/
    id: 34,
    name: "Surau Al-Hijrah PPR Pekan Batu",
    category: "surau",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000187031001934644905204866153034585802MY5925SR AL HIJRAH PPR PEKAN BT6013JINJANG UTARA61055200063042A74",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.2042006769016367, 101.67295936935358],
  },
  {
    id: 35,
    name: "Sumbangan Ihya Ramadhan - Jabatan Pendidikan Wilayah Persekutuan",
    category: "others",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000949031001724397055204866153034585802MY5923SUMBANGAN IHYA RAMADHAN6012KUALA LUMPUR6105506046304C09F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 36,
    name: "Masjid Al-Muqarrabin Bandar Tasik Selatan",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000094031001966815035204866153034585802MY5924MASJID AL-MUQARRABIN BTS6012KUALA LUMPUR61055700063044569",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.0741079193830863, 101.7190796433474],
  },
  {
    id: 37,
    name: "Masjid Al-Muhsinin",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000248031001969154145204866153034585802MY5918MASJID AL MUHSININ6012KUALA LUMPUR610558100630475BB",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.103859950267137, 101.6886747220499],
  },
  {
    id: 38,
    name: "Sekolah Agama Al Fateh",
    category: "others",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000859031001360657415204829953034585802MY5922SEKOLAH AGAMA AL FATEH6012KUALA LUMPUR61055700063041F6D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 39,
    name: "Masjid Al-Hidayah Taman Melawati",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000040031001938121605204866153034585802MY5920MASJID AL-HIDAYAH TM6012KUALA LUMPUR6105531006304AB74",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.2130325027093014, 101.7535894888139],
  },
  {
    id: 40,
    name: "Masjid Al-Ansar Taman Keramat",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000331031001938554835204866153034585802MY5925MASJID AL-ANSAR T.KERAMAT6012KUALA LUMPUR61055420063045371",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.169913364998503, 101.74403646245656],
  },
  {
    // https://www.facebook.com/faridiyah
    id: 41,
    name: "Maahad Tahfiz Al-Madrasathul Faridiyah",
    category: "others",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000352031001234333335204866153034585802MY5922M.TAHFIZ AL-MADRASATUL6012KUALA LUMPUR6105533006304ECAE",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.1929096167514777, 101.73210982842211],
  },
  {
    // https://www.facebook.com/musollabaiduriukayperdana/
    id: 42,
    name: "Musolla Sri Baiduri Ukay Perdana",
    category: "surau",
    state: "Selangor",
    city: "Ampang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000477031001935065925204866153034585802MY5919MUSOLLA SRI BAIDURI6006AMPANG6105680006304F1D1",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.204855139319395, 101.77121629028096],
  },
  {
    id: 43,
    name: "Madrasah Ad-Diniah",
    category: "mosque",
    state: "Selangor",
    city: "Ampang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003426031001739478275204866153034585802MY5918MADRASAH ADDINNIAH6006AMPANG610568000630417D7",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.189769843531015, 101.77167954472107],
  },
  // adha sahar, whatsapp
  {
    id: 44,
    name: "Masjid Nurul Hidayah",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kampung Pandan Dalam",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000002775204866153034585802MY5920MASJID NURUL HIDAYAH6002MY6253032516201029502890053431324980520162010298799500624156304B5C3",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.145924641946743, 101.74824516136792],
  },
  {
    id: 45,
    name: "Surau Al-Kauthar",
    category: "surau",
    state: "Selangor",
    city: "Bandar Baru Bangi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000197031001328608795204866153034585802MY5916SURAU AL-KAUTHAR6015BANDAR BARU BAN6105436506304DDB5",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.958661396464478, 101.77959640897069],
  },
  {
    id: 46,
    name: "Masjid Al-Azhar, UIS",
    category: "mosque",
    state: "Selangor",
    city: "Bandar Seri Putra",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000277031001337175795204866153034585802MY5915MASJID AL AZHAR6006KAJANG61054300063045B9C",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.8917414200390588, 101.78782313755583],
  },
  {
    id: 47,
    name: "Masjid Al-Hasanah Bandar Baru Bangi",
    category: "mosque",
    state: "Selangor",
    city: "Bandar Baru Bangi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000320031001964433995204866153034585802MY5925MASJID AL-HASANAH BBBANGI6015BANDAR BARU BAN61054365063047E34",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.959081879624419, 101.75272828140423],
  },
  {
    id: 48,
    name: "Surau Al Madani",
    category: "surau",
    state: "Selangor",
    city: "Bandar Baru Bangi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000901031001935048475204866153034585802MY5915SURAU AL MADANI6015BANDAR BARU BAN6105436506304EDA6",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.941709465325527, 101.77860605415441],
  },
  {
    id: 49,
    name: "Masjid Sungai Ramal Luar",
    category: "mosque",
    state: "Selangor",
    city: "Kajang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003043031001926627135204866153034585802MY5924MASJID SUNGAI RAMAL LUAR6006KAJANG61054300063041B03",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.9844155468907636, 101.76397656549568],
  },
  {
    id: 50,
    name: "Masjid Jamek Kampung Nakhoda",
    category: "mosque",
    state: "Selangor",
    city: "Batu Caves",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000202031001928656985204866153034585802MY5923MASJID JAMEK KG NAKHODA6010BATU CAVES6105681006304EFB3",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.249832904370466, 101.67753381909519],
  },
  {
    id: 51,
    name: "Tabung Pembangunan Masjid Jamiatus",
    category: "mosque",
    state: "Selangor",
    city: "Batu Caves",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000369031001965018735204866153034585802MY5923TBG PMBNGUNN M.JAMIATUS6010BATU CAVES610568100630465F6",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.253679883726249, 101.67484559763611],
  },
  {
    id: 52,
    name: "Surau Al-Khairiyah",
    category: "surau",
    state: "Selangor",
    city: "Batu Caves",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004223031001634135315204866153034585802MY5918SURAU AL KHAIRIYAH6012KUALA LUMPUR61055200063045986",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 53,
    name: "Surau Al-Ehsan Batu Caves",
    category: "surau",
    state: "Selangor",
    city: "Batu Caves",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004360031001926888395204866153034585802MY5923SURAU AL-EHSAN BT CAVES6010BATU CAVES610568100630475C5",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 54,
    name: "Khairat Kematian Kemsah - Masjid Saidin Hamzah",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004490031001352013965204866153034585802MY5923KHAIRAT KEMATIAN KEMSAH6012KUALA LUMPUR61055110063047457",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 55,
    name: "Surau Al-Bukhary Laman Glenmarie",
    category: "surau",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000934031001929362865204866153034585802MY5925SURAU AL-BUKHARY LMN GLEN6009SHAH ALAM6105401506304D00F",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.100734479837375, 101.56241093073743],
  },
  {
    id: 56,
    name: "Surau At-Taqwa Kajang",
    category: "surau",
    state: "Selangor",
    city: "Kajang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000317031001362224245204866153034585802MY5914SURAU AT-TAQWA6006KAJANG61054300063044565",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 57,
    name: "Surau Desa Sri Jenaris",
    category: "surau",
    state: "Selangor",
    city: "Kajang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000481031001697534675204866153034585802MY5922SURAU DESA SRI JENARIS6006KAJANG6105430006304ADC4",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 58,
    name: "Masjid Al Amin Sg Tekali",
    category: "mosque",
    state: "Selangor",
    city: "Hulu Langat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000783031001339420445204866153034585802MY5924MASJID AL AMIN SG TEKALI6011HULU LANGAT61054310063049DE7",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.1091208428564996, 101.85237345279701],
  },
  {
    id: 59,
    name: "Masjid Al-Ehsan SMAPK",
    category: "mosque",
    state: "Selangor",
    city: "Kajang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004026031001390537045204866153034585802MY5921MASJID AL-EHSAN SMAPK6006KAJANG610543000630499A7",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 60,
    name: "Pembinaan Masjid Sg Serai",
    category: "mosque",
    state: "Selangor",
    city: "Hulu Langat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004493031001938642125204866153034585802MY5925PEMBINAAN MASJID SG SERAI6011HULU LANGAT6105431006304D3D1",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/suraualittihadiyyahs9/
    id: 61,
    name: "Surau Al-Ittihadiyyah Seksyen 9", // or Musalla Al-Ittihadiyyah
    category: "surau",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000283031001238746885204866153034585802MY5921SURAU AL ITTIHADIYYAH6009SHAH ALAM6105400006304D360",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.080943452917789, 101.52789611928387],
  },
  {
    // https://www.facebook.com/mai13.official/
    id: 62,
    name: "Masjid Al-Ikhlas Seksyen 13",
    category: "mosque",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000003031001930793065204866153034585802MY5924MASJID AL-IKHLAS SEK. 136009SHAH ALAM6105400006304B186",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.086588976386146, 101.54532636024668],
  },
  {
    // https://www.facebook.com/masjid.kotadamansara/
    id: 63,
    name: "Masjid Kota Damansara",
    category: "mosque",
    state: "Selangor",
    city: "Petaling Jaya",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003090031001381165705204866153034585802MY5921MASJID KOTA DAMANSARA6013PETALING JAYA61054781063042F93",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.161638907412847, 101.58720095211012],
  },
  {
    // https://www.facebook.com/attaqwabbsa/
    id: 64,
    name: "Surau At-Taqwa Bukit Bandaraya",
    category: "surau",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004296031001238871265204866153034585802MY5919SURAU AT TAQWA BBSA6009SHAH ALAM6105401706304951C",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.0966284734980984, 101.48617413524184],
  },
  {
    id: 65,
    name: "Surau Al-Ehsaniah Ahmadiah",
    category: "surau",
    state: "Selangor",
    city: "Petaling Jaya",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000242031001938100885204866153034585802MY5925SURAU ALEHSANIAH AHMADIAH6013PETALING JAYA6105473016304495B",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.095583942312656, 101.60437236603848],
  },
  {
    // https://www.facebook.com/suraualazharsamsml/
    id: 66,
    name: "Surau Al Azhar Sam Sml",
    category: "surau",
    state: "Selangor",
    city: "Kajang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000353031001239414765204866153034585802MY5921SURAU AL-AZHAR SAMSML6006KAJANG610543000630480DC",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 67,
    name: "Surau Al Muttaqin",
    category: "surau",
    state: "Selangor",
    city: "Rawang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000510031001663457785204866153034585802MY5917SURAU AL MUTTAQIN6009PUTRAJAYA61056220063046803",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.3094309973153155, 101.55804009630765],
  },
  {
    id: 68,
    name: "Surau SK Sultan Ahmad Shah",
    category: "surau",
    state: "W.P. Putrajaya",
    city: "Putrajaya",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000838031001922427865204866153034585802MY5925SURAU SK SULTAN ALAM SHAH6009PUTRAJAYA6105625206304B2F8",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 69,
    name: "Surau Al-Hidayah",
    category: "surau",
    state: "Selangor",
    city: "Rawang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000456031001734000255204866153034585802MY5916SURAU AL-HIDAYAH6006RAWANG6105480006304D169",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/masjidjumhuriahtamandatoharun/
    id: 70,
    name: "Masjid Jumhuriah",
    category: "mosque",
    state: "Selangor",
    city: "Petaling Jaya",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000170031001334155805204866153034585802MY5916MASJID JUMHURIAH6007PUCHONG6105460006304355D",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.0824099235063502, 101.63723675766376],
  },
  {
    id: 71,
    name: "IIUM Gombak Mosque", // Sultan Haji Ahmad Shah Mosque
    category: "mosque",
    state: "Selangor",
    city: "Gombak",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000362031001320062355204866153034585802MY5918IIUM GOMBAK MOSQUE6012KUALA LUMPUR6105531006304051C",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.251232778049596, 101.73508226243918],
  },
  {
    id: 72,
    name: "JK PBN Masjid At-Taqwa",
    category: "mosque",
    state: "Kelantan",
    city: "Gua Musang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000086031001298321775204866153034585802MY5922JK PBN MASJID AT-TAQWA6014GUA MUSANG KEL61051830063045A99",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/p/Masjid-Sultan-Ahmad-Paloh-2-100090488524753/
    id: 73,
    name: "Masjid Sultan Ahmad Paloh 02",
    category: "mosque",
    state: "Kelantan",
    city: "Gua Musang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000098031001970076815204866153034585802MY5925MJD SULTAN AHMAD PALOH 026010GUA MUSANG6105183006304CB72",
    supportedPayment: ["duitnow", "tng"],
    coords: [4.995515281049585, 102.23241726538993],
  },
  {
    id: 74,
    name: "Masjid Mukim Limau Kasturi",
    category: "mosque",
    state: "Kelantan",
    city: "Gua Musang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000101031001481951575204866153034585802MY5923MJD MUKIM LIMAU KASTURI6010GUA MUSANG61051830063042CE8",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 75,
    name: "Masjid Mukim Lubok Bongor",
    category: "mosque",
    state: "Kelantan",
    city: "Kuala Balah",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000002800311011199774245204866153034585802MY5922MJD MUKIM LUBOK BONGOR6011KUALA BALAH61051761063043597",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.564121887194368, 101.8828163917118],
  },
  {
    id: 76,
    name: "Masjid Legeh",
    category: "mosque",
    state: "Kelantan",
    city: "Ayer Lanas",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000355031001397376305204866153034585802MY5912MASJID LEGEH6004JELI6105177006304C65D",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.750505650202645, 101.89885622327735],
  },
  {
    // https://www.facebook.com/masjidalabrarayerlanas/
    id: 77,
    name: "Masjid Al-Abrar Ayer Lanas",
    category: "mosque",
    state: "Kelantan",
    city: "Ayer Lanas",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000358031001796305805204866153034585802MY5923MJD AL ABRAR AYER LANAS6004JELI61051770063045BBF",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.773839364851387, 101.88866802534353],
  },
  {
    id: 78,
    name: "Masjid Mukim Lakota",
    category: "mosque",
    state: "Kelantan",
    city: "Jeli",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000910031001393254865204866153034585802MY5919MASJID MUKIM LAKOTA6004JELI61051760063047660",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/p/Masjid-Mukim-Pantai-Senak-100083119489258/
    id: 79,
    name: "Masjid Al-Munir Mukim Pantai Senok",
    category: "mosque",
    state: "Kelantan",
    city: "Bachok",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000080031001994460255204866153034585802MY5918MASJID MUKIM SENAK6015BACHOK KELANTAN6105163206304DD5F",
    supportedPayment: ["duitnow", "tng"],
    coords: [6.158323002179537, 102.34250748647439],
  },
  {
    id: 80,
    name: "Masjid Taman Desa Orkid",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu", // Pengkalan Chepa
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000330031001995944775204866153034585802MY5923MASJID TAMAN DESA ORKID6010KOTA BHARU61051610063042EAE",
    supportedPayment: ["duitnow", "tng"],
    coords: [6.138366491054416, 102.2953592485237],
  },
  {
    // https://www.facebook.com/PIslamKampusKesihatan/
    id: 81,
    name: "Pusat Islam Kampus Kesihatan USM",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu", // Kubang Kerian
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000666031001991263075204866153034585802MY5922MASJID PUSAT ISLAM USM6010KOTA BHARU61051615063047F24",
    supportedPayment: ["duitnow", "tng"],
    coords: [6.096093798685968, 102.2840412721458],
  },
  {
    id: 82,
    name: "Tabung Masjid Mukim Tunjung",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000803031001926323365204866153034585802MY5924TABUNG MJD MUKIM TUNJUNG6010KOTA BHARU61051601063042678",
    supportedPayment: ["duitnow", "tng"],
    coords: [6.052128699333283, 102.23834045681281],
  },
  {
    // https://www.facebook.com/masjidhidayahtm/
    id: 83,
    name: "Masjid Al-Hidayah Taman Melawati",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000040031001938121605204866153034585802MY5920MASJID AL-HIDAYAH TM6012KUALA LUMPUR6105531006304AB74",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.2130318818306596, 101.75358968602197],
  },
  {
    id: 84,
    name: "Masjid Kariah Gajah Mati",
    category: "mosque",
    state: "Pahang",
    city: "Mentakab", // Temerloh
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000634031001991903055204866153034585802MY5924MASJID KARIAH GAJAH MATI6008MENTAKAB610528400630486D2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/MasjidIbrahimi/
    id: 85,
    name: "Tabung Naiktaraf Masjid Ibrahimi Pasir Puteh",
    category: "mosque",
    state: "Kelantan",
    city: "Pasir Puteh",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000046031001033013605204866153034585802MY5925TB NAIKTARAF MJD IBRAHIMI6011PASIR PUTEH610516800630430C9",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.8339463970267005, 102.40273835311132],
  },
  {
    id: 86,
    name: "Masjid At Taqwa Pulai Chondong",
    category: "mosque",
    state: "Kelantan",
    city: "Pulai Chondong",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000228031001482637455204866153034585802MY5925MASJID AT TAQWA MCHONDONG6014PULAI CHONDONG6105166006304F459",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 87,
    name: "Masjid Mukim Bukit Merbau",
    category: "mosque",
    state: "Kelantan",
    city: "Selising",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000002640311011255427655204866153034585802MY5925MASJID MUKIM BUKIT MERBAU6008SELISING61051681063042118",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 88,
    name: "Masjid Tok Kerawat",
    category: "mosque",
    state: "Kelantan",
    city: "Pulai Chondong",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000315031001296498405204866153034585802MY5918MASJID TOK KERAWAT6014PULAI CHONDONG6105166006304B359",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 89,
    name: "Masjid Al-Rahman Kg Galang",
    category: "mosque",
    state: "Kelantan",
    city: "Pulai Chondong",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000349031001482817325204866153034585802MY5923MJD AL-RAHMAN KG.GALANG6014PULAI CHONDONG6105166006304A97F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 90,
    name: "Masjid Darul Naim",
    category: "mosque",
    state: "Kelantan",
    city: "Rantau Panjang",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000001980311011105116595204866153034585802MY5917MASJID DARUL NAIM6014RANTAU PANJANG6105172006304CA22",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/p/Masjid-Ar-Raudhah-Lundang-100068747751504/
    id: 91,
    name: "Masjid Ar-Raudhah Lundang",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000230031001990652355204866153034585802MY5925MASJID AR RAUDHAH LUNDANG6010KOTA BHARU61051520063048494",
    supportedPayment: ["duitnow", "tng"],
    coords: [6.1034193106993175, 102.26095648113012],
  },
  {
    id: 92,
    name: "JK Masjid Mukim Pintu Gang",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000274031001949407855204866153034585802MY5923JK MJD MUKIM PINTU GANG6010KOTA BHARU61051510063041EA2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 93,
    name: "Masjid Mukim Panji",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000329031001298514615204866153034585802MY5918MASJID MUKIM PANJI6010KOTA BHARU6105161006304C28B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 94,
    name: "Masjid Masyarakat Rohingya",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000003590311011107796715204866153034585802MY5923MD MASYARAKAT ROHINGYA 6010KOTA BHARU6105150006304C460",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 95,
    name: "Sedekah@UMK",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000381031001926140665204866153034585802MY5911SEDEKAH@UMK6010KOTA BHARU6105161006304FCB4",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 96,
    name: "Tabung Masjid Al Fattah",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000444031001295202005204866153034585802MY5923TABUNG MASJID AL FATTAH6010KOTA BHARU61051510063048653",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 97,
    name: "Khairat Kematian Islam",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000660031001797108895204533153034585802MY5922KHAIRAT KEMATIAN ISLAM6010KOTA BHARU61051510063041334",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/p/Masjid-Mukim-Pangkal-Meleret-100064302567170/
    id: 98,
    name: "Masjid Mukim Pangkal Meleret",
    category: "mosque",
    state: "Kelantan",
    city: "Machang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000849031001959904835204866153034585802MY5925MJD MUKIM PANGKAL MELERET6007MACHANG61051850063045B32",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 99,
    name: "Masjid Mukim Tepi Sungai",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000069031001392146725204866153034585802MY5924MASJID MUKIM TEPI SUNGAI6011TANAH MERAH61051750063044CA1",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 100,
    name: "Masjid Mukim Bechah Laut",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000226031001923564295204866153034585802MY5924MASJID MUKIM BECHAH LAUT6011TANAH MERAH6105175006304519E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 101,
    name: "Masjid Mukim Pasir Sat",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000003600311011121752315204866153034585802MY5922MASJID MUKIM PASIR SAT6011TANAH MERAH6105175006304F868",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 102,
    name: "JKS Pembangunan Masjid IPTM",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000740031001398601345204866153034585802MY5924JKS PEMBANGUNAN MJD IPTM6011TANAH MERAH6105175006304667B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 103,
    name: "Pusat Khidmat Khairiyah",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000939031001346720125204866153034585802MY5923PUSAT KHIDMAT KHAIRIYAH6011TANAH MERAH6105175006304A30E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/pages/SRU%20(A)%20DARUL%20ULUM%20DINIAH/553383568011720/
    id: 104,
    name: "Sekolah Rendah Ugama Arab Darul Ulum Diniah",
    category: "others",
    state: "Kelantan",
    city: "Tanah Merah", // Padang Siam
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001114031001999034425204829953034585802MY5924SRU(A) DARUL ULUM DINIAH6011PADANG SIAM6105175006304A137",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 105,
    name: "Masjid Mukim Kuala Kepok",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001168031001935862015204866153034585802MY5924MASJID MUKIM KUALA KEPOK6011TANAH MERAH61051750063041CF7",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/Masjidmukimlalangpepuyu/
    id: 106,
    name: "Masjid Mukim Lalang Pepuyu",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001432031001992737465204866153034585802MY5923MJD MUKIM LALANG PEPUYU6011TANAH MERAH6105175006304B636",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.8743115749743415, 101.94907696720873],
  },
  {
    id: 107,
    name: "Madrasah Haji Deraman",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000015410311011293352455204866153034585802MY5921MADRASAH HAJI DERAMAN6011TANAH MERAH6105175006304083D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 108,
    name: "Tabung Kebajikan Halaqat",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000002105031001993194505204866153034585802MY5921TAB KEBAJIKAN HALAQAT6011TANAH MERAH61051750063048CF7",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/masjidismailpetratanahmerah/
    id: 109,
    name: "Infaq Masjid Ismail Petra",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000002391031001398601345204866153034585802MY5922INFAQ MJD ISMAIL PETRA6011TANAH MERAH61051750063041C74",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.808598613088199, 102.145549492349],
  },
  {
    // https://www.facebook.com/p/Masjid-AsSyakirin-Mukim-Kelewek-Tanah-Merah-100070071895715/
    id: 110,
    name: "Masjid As-Syakirin Mukim Kelewek",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003599031001936464645204866153034585802MY5920MASJID MUKIM KELEWEK6011TANAH MERAH61051750063043D59",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.8159768616447804, 102.1061361949489],
  },
  {
    id: 111,
    name: "Masjid Taman Balok Makmur",
    category: "mosque",
    state: "Kelantan",
    city: "Balok",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000218031001290982275204866153034585802MY5925MASJID TAMAN BALOK MAKMUR6007BESERAH61052610063042FFF",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/masjid.shas.iiumk/
    id: 112,
    name: "Masjid Sultan Haji Ahmad Shah",
    category: "mosque",
    state: "Pahang",
    city: "Kuantan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000258031001299889905204866153034585802MY5924MJD SULTAN HJ AHMAD SHAH6007KUANTAN610525200630476F7",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.8385737097933164, 103.30394967904168],
  },
  {
    id: 113,
    name: "Surau Warisan",
    category: "surau",
    state: "Pahang",
    city: "Kuantan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000743031001398324155204866153034585802MY5913SURAU WARISAN6007KUANTAN6105251006304A2A9",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/p/Masjid-Taman-Bukit-Bendera-Mentakab-100077104761581/
    id: 114,
    name: "Masjid Taman Bukit Bendera",
    category: "mosque",
    state: "Pahang",
    city: "Mentakab",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000043031001393608095204866153034585802MY5924MASJID TMN BUKIT BENDERA6008MENTAKAB61052840063047D09",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.473067107036416, 102.33942184117251],
  },
  {
    id: 115,
    name: "Masjid Kampung Bongsu",
    category: "mosque",
    state: "Pahang",
    city: "Lanchang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000077031001398191485204866153034585802MY5916MASJID KG BONGSU6008LANCHANG61052850063042F11",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.4907601912258164, 102.23321172040869],
  },
  {
    id: 116,
    name: "Masjid Kampung Tanjung Medang Hilir",
    category: "mosque",
    state: "Pahang",
    city: "Pekan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000207031001396453595204866153034585802MY5924MASJID KG TANJUNG MEDANG6005PEKAN610526600630424E8",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 117,
    name: "Masjid Paloh Hinai",
    category: "mosque",
    state: "Pahang",
    city: "Pekan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000246031001997783135204866153034585802MY5918MASJID PALOH HINAI6005PEKAN61052660063043658",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 118,
    name: "Pusat Pengajian Fardhu Ain Al Azid",
    category: "others",
    state: "Pahang",
    city: "Kuantan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000865031001298886795204866153034585802MY5925P PENG FARDHU AIN AL AZID6007KUANTAN6105260806304D252",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/MasjidTJ/
    id: 119,
    name: "Masjid Tengku Mahkota Tengku Hassanal Ibrahim Alam Shah", // old name, Masjid Taman Temerloh Jaya
    category: "mosque",
    state: "Pahang",
    city: "Temerloh",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000012031001998816105204866153034585802MY5924MASJID TMN TEMERLOH JAYA6008TEMERLOH61052800063041FA5",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.4520103333513505, 102.39309042681262],
  },
  {
    id: 120,
    name: "Maahad Tahfiz Al-Furqan",
    category: "others",
    state: "Pahang",
    city: "Temerloh",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001138031001344420245204866153034585802MY5923MAAHAD TAHFIZ AL-FURQAN6008TEMERLOH61052800063049750",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 121,
    name: "Masjid Darul Iman Kampung Lahar",
    category: "mosque",
    state: "Terengganu",
    city: "Kampung Raja",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000024031001393774335204866153034585802MY5923MJD DARUL IMAN KG LAHAR6005BESUT6105222006304E2EE",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.782599793392415, 102.54545451426532],
  },
  {
    id: 122,
    name: "Masjid Pak Da Malik",
    category: "mosque",
    state: "Terengganu",
    city: "Jerteh",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000027031001392445415204866153034585802MY5919MASJID PAK DA MALIK6005BESUT61052220063041A1B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 123,
    name: "Masjid Kampung Paya Rawa",
    category: "mosque",
    state: "Terengganu",
    city: "Kampung Raja",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000056031001298134335204866153034585802MY5924MASJID KAMPUNG PAYA RAWA6012KAMPUNG RAJA6105222006304C3A6",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/suraualikhlaskgserimedang/
    id: 124,
    name: "Surau Al-Ikhlas Kampung Seri Medang",
    category: "surau",
    state: "Terengganu",
    city: "Kampung Raja",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000024140311011206052675204866153034585802MY5924SURAU AL-IKHLAS S/MEDANG6007KG RAJA6105222006304457E",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.749517547186155, 102.60122371794525],
  },
  {
    id: 125,
    name: "Masjid Taman Ilmu",
    category: "mosque",
    state: "Terengganu",
    city: "Kampung Raja",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000045380311011194238355204866153034585802MY5917MASJID TAMAN ILMU6007KG RAJA61052220063047D6D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/alehsansglabu/
    id: 126,
    name: "Masjid Al Ehsan Kampung Sungai Labu",
    category: "mosque",
    state: "W.P. Labuan",
    city: "Labuan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000186031001282966775204866153034585802MY5923MJD AL EHSAN KG SG LABU6006LABUAN6105870006304FA80",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 127,
    name: "Masjid Al-Munawwar (Khairat)",
    category: "mosque",
    state: "W.P. Labuan",
    city: "Labuan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000323031001681738065204866153034585802MY5925MJD AL-MUNAWWAR (KHAIRAT)6006LABUAN61058702263042F7B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/MSMV.Labuan/
    id: 128,
    name: "Masjid Sultan Muhammad V",
    category: "mosque",
    state: "W.P. Labuan",
    city: "Labuan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000350031001993196165204866153034585802MY5924MASJID SULTAN MUHAMMAD V6006LABUAN610587029630414A5",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.2891242525077584, 102.13812032250256],
  },
  {
    id: 129,
    name: "Surau Nurhidayah Taman Keramat",
    category: "surau",
    state: "Sabah",
    city: "Kota Kinabalu",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000001640311011209046405204866153034585802MY5925SR NURHIDAYAH TMN KERAMAT6013KOTA KINABALU6105881006304020D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 130,
    name: "Masjid Bandaraya Kota Kinabalu",
    category: "mosque",
    state: "Sabah",
    city: "Kota Kinabalu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000210031001789903465204866153034585802MY5919MASJID BANDARAYA KK6013KOTA KINABALU6105880006304417D",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.995496157417058, 116.10821829858426],
  },
  {
    id: 131,
    name: "Madrasah 2 Masjid Bandaraya Kota Kinabalu",
    category: "mosque",
    state: "Sabah",
    city: "Kota Kinabalu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000211031001789903465204866153034585802MY5925MADRASAH 2 MJD BNDRAYA KK6013KOTA KINABALU610588000630479A8",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 132,
    name: "Masjid Tun Ahmad Shah",
    category: "mosque",
    state: "Sabah",
    city: "Kota Kinabalu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003117031001987192485204866153034585802MY5921MASJID TUN AHMAD SHAH6013KOTA KINABALU61058840063049608",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 133,
    name: "Surau Al-Amin KBG",
    category: "surau",
    state: "Sabah",
    city: "Tawau",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000293031001981357625204866153034585802MY5917SURAU AL-AMIN KBG6005TAWAU6105910226304A47A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 134,
    name: "Surau Al Iman, Taman Megah Jaya",
    category: "surau",
    state: "Sabah",
    city: "Tawau",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000766031001388044355204866153034585802MY5925SURAU AL IMAN TMN MGH JYA6005TAWAU6105910006304852A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 135,
    name: "Surau Al-Firdaus Al-Hikmah",
    category: "mosque",
    state: "Sabah",
    city: "Tawau",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001019031001380424235204866153034585802MY5924SUR AL-FIRDAUS AL-HIKMAH6005TAWAU61059100063047934",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 136,
    name: "Surau At Taqwa Apas Permai",
    category: "mosque",
    state: "Sabah",
    city: "Tawau",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001119031001985378865204866153034585802MY5924SUR AT TAQWA APAS PERMAI6005TAWAU6105910006304A74B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 137,
    name: "Masjid Ar Rahmah",
    category: "mosque",
    state: "Kelantan",
    city: "Kok Lanas",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000002630311011263868865204866153034585802MY5916MASJID AR RAHMAH6009KOK LANAS6105164506304A622",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/masjidalmuhajirininderasabah/
    id: 138,
    name: "Masjid Al Muhajirin Inderasabah",
    category: "mosque",
    state: "Sabah",
    city: "Tawau",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004228031001988082975204866153034585802MY5919MASJID AL MUHAJIRIN6005TAWAU6105910306304DEB5",
    supportedPayment: ["duitnow", "tng"],
    coords: [4.299930689886914, 118.17272938790096],
  },
  {
    // https://www.facebook.com/MasjidAnnaimLutongMiri/
    id: 139,
    name: "Masjid An-Naim Lutong",
    category: "mosque",
    state: "Sarawak",
    city: "Lutong",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000185031001687281895204866153034585802MY5921MASJID AN-NAIM LUTONG6014LUTONG SARAWAK6105981006304537A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 140,
    name: "Surau Nurul Jamilun Subhi",
    category: "surau",
    state: "Sarawak",
    city: "Miri",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000502031001289047455204866153034585802MY5925SURAU NURUL JAMILUN SUBHI6004MIRI61059800063043EF6",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 141,
    name: "Surau Al-Hidayah, Taman Sejoli",
    category: "surau",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000062031001981868005204866153034585802MY5925SURAU AL-HIDAYAH T SEJOLI6007KUCHING61059305063044007",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 142,
    name: "Surau Darul Ilmi PPKS",
    category: "surau",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000073031001981868005204866153034585802MY5921SURAU DARUL ILMI PPKS6012TABUAN JAYA 6105933506304791E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 143,
    name: "Masjid Darul Muttaqin, Kampung Buntal",
    category: "mosque",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000143031001981740165204866153034585802MY5925MJ DRUL MUTTAQIN KGBUNTAL6007KUCHING61059305063041495",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.701479808480458, 110.3678867107787],
  },
  {
    id: 144,
    name: "Masjid Darus Sakinah",
    category: "mosque",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000162031001988956005204866153034585802MY5920MASJID DARUS SAKINAH6007KUCHING61059325063043B38",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 145,
    name: "Madrasah Tahfiz Al-Faaizun",
    category: "mosque",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000002690311011105199225204866153034585802MY5925MDRASAH TAHFIZ AL-FAAIZUN6007KUCHING6105930506304DF8E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 146,
    name: "AJK Surau Darul Istiqamah",
    category: "surau",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000778031001981873455204866153034585802MY5925AJK SURAU DARUL ISTIQAMAH6007KUCHING610593050630405AF",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 147,
    name: "Surau Al Fitrah",
    category: "surau",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001060031001066841195204866153034585802MY5915SURAU AL FITRAH6007KUCHING61059305063048A86",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 148,
    name: "Masjid Darul Istiqlaal",
    category: "mosque",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003631031001686287845204866153034585802MY5922MASJID DARUL ISTIQLAAL6007KUCHING61059315063042040",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 149,
    name: "Surau Jabal Nur, Taman Serapi Jaya",
    category: "surau",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004329031001658946945204866153034585802MY5915SURAU JABAL NUR6007KUCHING610593050630497EA",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 150,
    name: "JK PBN Masjid Baru Kuala Ketil",
    category: "mosque",
    state: "Kedah",
    city: "Kuala Ketil",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000091031001947793585204866153034585802MY5923JK PBN MJD BARU K KETIL6015KUALA KETIL KDH61050930063044A77",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 151,
    name: "Masjid Tok Keling (An-Nur)",
    category: "mosque",
    state: "Kedah",
    city: "Alor Setar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000134031001644256835204866153034585802MY5924MASJID AN-NUR TOK KELING6010ALOR SETAR610505400630406BC",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/jalanputra58/
    id: 152,
    name: "Masjid Kampong Berjaya",
    category: "mosque",
    state: "Kedah",
    city: "Alor Setar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000135031001348845215204866153034585802MY5922MASJID KAMPONG BERJAYA6010ALOR SETAR610505150630458B8",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 153,
    name: "Masjid Ibrahim, Kariah Penghulu Him",
    category: "mosque",
    state: "Kedah",
    city: "Sungai Petani",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000161031001948033385204866153034585802MY5923MJD KARIAH PENGHULU HIM6013SUNGAI PETANI6105080006304C8F6",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.646779767687788, 100.47985781082296],
  },
  {
    id: 154,
    name: "Masjid Ar Rahman Kerpan",
    category: "mosque",
    state: "Kedah",
    city: "Ayer Hitam",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000201031001946466435204866153034585802MY5923MASJID AR-RAHMAN KERPAN6010ALOR SETAR610506150630420BC",
    supportedPayment: ["duitnow", "tng"],
    coords: [6.260236277604348, 100.22830690369285],
  },
  {
    id: 155,
    name: "Masjid Mohamad Iskandar Wan Tempawan",
    category: "mosque",
    state: "Kedah",
    city: "Alor Setar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000334031001343537305204866153034585802MY5925MJD M.ISKANDAR W.TEMPAWAN6010ALOR SETAR6105053006304A773",
    supportedPayment: ["duitnow", "tng"],
    coords: [6.12214782156608, 100.39542920676114],
  },
  {
    id: 156,
    name: "Masjid Tunku Puan Habsah",
    category: "mosque",
    state: "Kedah",
    city: "Sungai Petani",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000656031001944457365204866153034585802MY5924MASJID TUNKU PUAN HABSAH6013SUNGAI PETANI61050800063048975",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.604313226425464, 100.47089166589271],
  },
  {
    id: 157,
    name: "Masjid Al-Aziz Tanjung Bendahara",
    category: "mosque",
    state: "Kedah",
    city: "Alor Setar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000815031001944898665204866153034585802MY5924MASJID TANJUNG BENDAHARA6010ALOR SETAR6105053006304B3DB",
    supportedPayment: ["duitnow", "tng"],
    coords: [6.112458452026402, 100.3748227938539],
  },
  {
    id: 158,
    name: "Pembinaan Surau Sekolah Tawar",
    category: "surau",
    state: "Kedah",
    city: "Kuala Ketil",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001703031001342446675204866153034585802MY5924PMBINAAN SURAU SEK TAWAR6011KUALA KETIL610509310630420C2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/p/Masjid-Al-Hussain-100064413532530/
    id: 159,
    name: "Masjid Al Hussain",
    category: "mosque",
    state: "Perlis",
    city: "Kuala Perlis",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000203031001255802135204866153034585802MY5925MASJID AL-HUSSAIN KPERLIS6012KUALA PERLIS6105020006304037D",
    supportedPayment: ["duitnow", "tng"],
    coords: [6.3973373757204435, 100.12698125253013],
  },
  {
    // https://www.facebook.com/profile.php?id=100083138536696
    id: 160,
    name: "Masjid Umar Ibnu Al-Khattab",
    category: "mosque",
    state: "Pulau Pinang",
    city: "Bayan Lepas",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000052031001941597945204866153034585802MY5924MJD UMAR IBNU AL KHATTAB6011BAYAN LEPAS610511950630431CF",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.323649335075917, 100.28576359618626],
  },
  {
    // https://www.facebook.com/p/Masjid-Hashim-Yahaya-Jalan-Perak-Pulau-Pinang-100070137350620/
    id: 161,
    name: "Qaryah Masjid Jamek Hashim Yahaya",
    category: "mosque",
    state: "Pulau Pinang",
    city: "George Town",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000065031001748682795204866153034585802MY5924QARYAH MJD HASHIM YAHAYA6010GEORGETOWN6105101506304C4E6",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.406444730313146, 100.31502294962519],
  },
  {
    id: 162,
    name: "Masjid Jamek Al-Munawwar",
    category: "mosque",
    state: "Pulau Pinang",
    city: "George Town",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000131031001249319885204866153034585802MY5924MASJID JAMI' AL MUNAWWAR6012PULAU PINANG6105102506304486A",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.4305531594911365, 100.3163884171746],
  },
  {
    id: 163,
    name: "Masjid Al-Hidayah Bayan Lepas",
    category: "mosque",
    state: "Pulau Pinang",
    city: "Bayan Lepas",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000252031001348100085204866153034585802MY5925MJD ALHIDAYAH BAYAN LEPAS6011BAYAN LEPAS610511900630471F2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/darulmuhajarinpenang/
    id: 164,
    name: "Madrasah Darul Muhajirin",
    category: "mosque",
    state: "Pulau Pinang",
    city: "Tasek Gelugor",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000004900311011109455815204866153034585802MY5924MADRASAH DARUL MUHAJIRIN6013TASEK GELUGOR610513310630477DA",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/masjidpadangibu/
    id: 165,
    name: "Qaryah Masjid Jamek Padang Ibu",
    category: "mosque",
    state: "Pulau Pinang",
    city: "Bukit Mertajam", // Kubang Semang
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000920031001257747715204866153034585802MY5924QARYAH MASJID PADANG IBU6013KUBANG SEMANG61051440063049CBF",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.425164230283627, 100.46746316680736],
  },
  {
    id: 166,
    name: "Surau At-Taqwa SK Mutiara Perdana",
    category: "surau",
    state: "Pulau Pinang",
    city: "Bayan Lepas",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001403031001350440405204866153034585802MY5925SURAU AT-TAQWA SK MUT PER6011BAYAN LEPAS6105119206304AB56",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.308845999072052, 100.26478043787486], // Coordinates for SK Mutiara Perdana
  },
  {
    id: 167,
    name: "Tabung Masjid Bayan Lepas",
    category: "mosque",
    state: "Pulau Pinang",
    city: "Bayan Lepas",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001444031001945703555204866153034585802MY5922TABUNG MJD BAYAN LEPAS6011BAYAN LEPAS610511900630406F2",
    supportedPayment: ["duitnow", "tng"],
    // coords: [5.296114513937864, 100.25942012815462], // Might be wrong, mosque name too vague, need to check
  },
  {
    id: 168,
    name: "Tahfiz Manahilil Irfan",
    category: "mosque",
    state: "Pulau Pinang",
    city: "Bayan Lepas",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003546031001251479815204866153034585802MY5922TAHFIZ MANAHILIL IRFAN6011BAYAN LEPAS6105119606304B73D",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.286756050866698, 100.27957298790938],
  },
  {
    id: 169,
    name: "Masjid Bandar Putra (IOI)",
    category: "mosque",
    state: "Johor",
    city: "Segamat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000006031001276981245204866153034585802MY5924MASJID BDR PUTRA SEGAMAT6007SEGAMAT6105850006304E974",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/masjidalhikmahfeldaairtawar5/
    id: 170,
    name: "Masjid Al-Hikmah Felda Air Tawar 5",
    category: "mosque",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000015031001778693685204866153034585802MY5922MASJID AL HIKMAH KFAT56011KOTA TINGGI61058190063043B17",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.6039187182484582, 104.09006345524395],
  },
  {
    // https://www.facebook.com/badanmasjidfsemenchu/
    id: 171,
    name: "Masjid Felda Semenchu",
    category: "mosque",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000016031001376433725204866153034585802MY5921MASJID FELDA SEMENCHU6011KOTA TINGGI61058190063047585",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.569809287944585, 104.10139847686452],
  },
  {
    id: 172,
    name: "Tabung Masjid Batu 1",
    category: "mosque",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000055031001374790945204866153034585802MY5925TBG MASJID BT 1 KT TINGGI6011KOTA TINGGI61058190063046909",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 173,
    name: "JK Pbn Surau Darul Athiah",
    category: "surau",
    state: "Johor",
    city: "Batu Pahat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000060031001786662025204866153034585802MY5925JK PBN SURAU DARUL ATHIAH6010BATU PAHAT61058300063044870",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/p/Masjid-Assyakirin-Aping-Barat-100072113354988/
    id: 174,
    name: "Masjid As'syakirin Aping Barat",
    category: "mosque",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000001090311011191402405204866153034585802MY5925MJ ASSYAKIRIN APING BARAT6011KOTA TINGGI6105819006304BCC4",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.829789050926298, 103.99130951605407],
  },
  {
    id: 175,
    name: "Masjid An-Nur Kampung Tanjung Buai",
    category: "mosque",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000110031001127676595204866153034585802MY5924MASJID AN-NUR KG TG BUAI6011KOTA TINGGI61058190063049729",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.4964204822307026, 104.04447591678588],
  },
  {
    // https://www.facebook.com/surau.alrayyan.tpj/
    id: 176,
    name: "Surau Al-Rayyan, Taman Puteri Jaya",
    category: "surau",
    state: "Johor",
    city: "Batu Pahat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000119031001378721725204866153034585802MY5925SR ALRAYYAN T PUTERI JAYA6010BATU PAHAT61058300063047C0A",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.8829160120692154, 102.95555538073408],
  },
  {
    // https://www.facebook.com/masjidparitsulong/?locale=ms_MY
    id: 177,
    name: "Masjid Jamek Pekan Parit Sulong",
    category: "mosque",
    state: "Johor",
    city: "Parit Sulong",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000127031001270942455204866153034585802MY5925MJ JAMEK PEKAN PRT SULONG6012PARIT SULONG610583500630455E6",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.9759040189084847, 102.88537731343868],
  },
  {
    // https://www.facebook.com/masjid.terminal.larkin.jb/
    id: 178,
    name: "Masjid An-Nur @ Larkin Sentral",
    category: "mosque",
    state: "Johor",
    city: "Johor Bahru",
    qrImage: "",
    qrContent:
      "00020201021126600014A000000615000101065641670215QRMID000000015403090721951215204866153034585802MY5925MJD AN-NUR LARKIN SENTRAL6011JOHOR BAHRU610580000630485A2",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.4956104088480497, 103.74203342180577],
  },
  {
    // https://www.facebook.com/mtsSAUJANA/
    id: 179,
    name: "TP Masjid Taman Seri Saujana",
    category: "mosque",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000179031001979785735204866153034585802MY5922TP MJD TMN SRI SAUJANA6011KOTA TINGGI6105819006304D5CF",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.663632646781114, 103.85305831563403],
  },
  {
    id: 180,
    name: "Masjid Jamek Kampung Simpang",
    category: "mosque",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000181031001274195165204866153034585802MY5923MASJID JAMEK KG SIMPANG6011KOTA TINGGI61058190063045CEE",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/masjidjamekalmubarak/
    id: 181,
    name: "Masjid Al-Mubarak Bandar Putra",
    category: "mosque",
    state: "Johor",
    city: "Kulai",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000213031001970047375204866153034585802MY5923MASJID JAMEK AL MUBARAK6005KULAI6105810006304554F",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.6573074683250768, 103.62575649368574],
  },
  {
    id: 182,
    name: "Masjid Jamek Al-Ehsan Felda Pasak",
    category: "mosque",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000234031001975921205204866153034585802MY5921MASJID JAMEK AL EHSAN6011KOTA TINGGI610581900630474FC",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.710101969265588, 103.95531798313507],
  },
  {
    // https://www.facebook.com/profile.php?id=100057221119534
    id: 183,
    name: "PASTI Kawasan Johor Bahru",
    category: "others",
    state: "Johor",
    city: "Johor Bahru",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000237031001778096795204866153034585802MY5921PASTI KAW JOHOR BAHRU6011JOHOR BAHRU61058035063046979",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.4977054322750185, 103.74255758010585],
  },
  {
    // https://www.facebook.com/p/Masjid-Al-Jawaher-Felda-Air-Tawar-4-100069622128798/?locale=ms_MY
    id: 184,
    name: "Masjid Al-Jawaher Kampung Felda Ayer Tawar 4",
    category: "mosque",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000243031001671652005204866153034585802MY5921MASJID BARU FELDA AT46011KOTA TINGGI6105819006304279D",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.6285532497961506, 104.08936330782181],
  },
  {
    // https://www.suraualtaqwa.my/
    // https://www.facebook.com/suraualtaqwa/
    id: 185,
    name: "Surau Al-Taqwa Pulai Bistari",
    category: "surau",
    state: "Johor",
    city: "Johor Bahru", // Kangkar Pulai
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000261031001374535355204866153034585802MY5925SR AL TAQWA PULAI BISTARI6013KANGKAR PULAI610581110630474F5",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.5658237720271035, 103.59163477321788],
  },
  {
    // https://www.facebook.com/p/Masjid-Bandar-Tun-Hussein-Onn-100064325539673/
    id: 186,
    name: "Masjid Jamek Tun Hussein Onn",
    category: "mosque",
    state: "Johor",
    city: "Johor Bahru",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000275031001977795515204866153034585802MY5922MASJID TUN HUSSEIN ONN6011JOHOR BAHRU6105803506304E577",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.5039161456339258, 103.74087858075654],
  },
  {
    // https://www.facebook.com/SurauAlJauhar/
    id: 187,
    name: "Surau Al Jauhar Taman Sentosa",
    category: "surau",
    state: "Johor",
    city: "Johor Bahru",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000286031001977956655204866153034585802MY5925SURAU AL JAUHAR T.SENTOSA6011JOHOR BAHRU61058015063040C15",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.494897869352992, 103.76926077511648],
  },
  {
    id: 188,
    name: "Masjid Jamek Al-Husna Segamat Baru", // Ada dua masjid jamek segamat, ni yang baru
    category: "mosque",
    state: "Johor",
    city: "Segamat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000288031001772544695204866153034585802MY5925MASJID JAMEK SEGAMAT BARU6007SEGAMAT6105850006304B9D5",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.495389913979471, 102.85368231492549],
  },
  {
    // https://www.facebook.com/masjid.tamandatoonnlarkin/
    id: 189,
    name: "Masjid Taman Dato Onn Larkin",
    category: "mosque",
    state: "Johor",
    city: "Johor Bahru",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000312031001972619645204866153034585802MY5923MJD TMN DATO'ONN LARKIN6011JOHOR BAHRU61058035063047394",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.4872646593121845, 103.75094604932772],
  },
  {
    // https://www.facebook.com/masjidchaah/
    id: 190,
    name: "Masjid Jamek Chaah",
    category: "mosque",
    state: "Johor",
    city: "Chaah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000341031001973443005204866153034585802MY5912MASJID CHAAH6005CHAAH6105854006304A34C",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.248216589533912, 103.03979517772844],
  },
  {
    // https://www.facebook.com/masjid.at.taqwa.kulai/
    id: 191,
    name: "Surau At-Taqwa Kulai",
    category: "surau",
    state: "Johor",
    city: "Kulai",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000344031001271484165204866153034585802MY5920SURAU AT-TAQWA KULAI6005KULAI6105810006304385D",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.650176913836318, 103.60524536758835],
  },
  {
    id: 192,
    name: "Pertubuhan Khairat Kematian E.H", // ASK: Meaning of E.H?
    category: "mosque",
    state: "Johor",
    city: "Batu Pahat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000385031001335750525204866153034585802MY5925PRTBHN KHAIRAT KMTIAN E.H6010BATU PAHAT6105830006304B99A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/SurauAlpinia.BP
    id: 193,
    name: "Surau Alpinia Bandar Putra",
    category: "surau",
    state: "Johor",
    city: "Kulai",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000548031001277816935204866153034585802MY5925JK PMBINAAN SURAU ALPINIA6005KULAI6105810006304DB50",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.6683703367875515, 103.64406088323074],
  },
  {
    // https://www.facebook.com/ANWARULMAHABBAHKLUANG/
    id: 194,
    name: "Pengajian Anwarul Mahabbah",
    category: "others",
    state: "Johor",
    city: "Kluang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000706031001772005455204533153034585802MY5916ANWARUL MAHABBAH6006KLUANG6105860006304DE42",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.970375489111683, 103.24324370129204],
  },
  {
    // https://yayasanhidayah.my/
    id: 195,
    name: "Yayasan Pendidikan Hidayah",
    category: "others",
    state: "Johor",
    city: "Johor Bahru",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000717031001977849795204839853034585802MY5925YAYASAN PNDIDIKAN HIDAYAH6006SKUDAI610581300630438E5",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.5116902876529386, 103.68887389524497],
  },
  {
    // https://www.facebook.com/MSAMuarJohor/
    id: 196,
    name: "Masjid Sungai Abong",
    category: "mosque",
    state: "Johor",
    city: "Muar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000775031001265197815204866153034585802MY5919MASJID SUNGAI ABONG6004MUAR6105840006304E6C6",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.0592866115891697, 102.59555938672425],
  },
  {
    // https://www.facebook.com/p/Masjid-Tunku-Laksamana-Abdul-Jalil-100064825270284/
    id: 197,
    name: "Masjid Tunku Laksamana Abdul Jalil",
    category: "mosque",
    state: "Johor",
    city: "Johor Bahru",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000830031001956609235204866153034585802MY5922MASJID TUNKU LAKSAMANA6011JOHOR BAHRU610580990630490E4",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.4753210202451663, 103.7650083],
  },
  {
    // Doubt this surau still exists
    id: 198,
    name: "Surau Kampung Kurnia",
    category: "surau",
    state: "Johor",
    city: "Johor Bahru",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000909031001972881115204866153034585802MY5917SURAU KURNIAWATI 6011JOHOR BAHRU6105802506304771D",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.4958693160048218, 103.75632287726339],
  },
  {
    // https://www.facebook.com/MSIBP/
    id: 199,
    name: "Masjid Jamek Sultan Ismail",
    category: "mosque",
    state: "Johor",
    city: "Batu Pahat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001151031001375298155204866153034585802MY5922MASJID SULTAN IBRAHIM 6010BATU PAHAT61058300063043E7E",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.856047406146543, 102.94620040443927],
  },
  {
    // https://www.facebook.com/jkmbktOfficial/
    id: 200,
    name: "J.K Masjid Bandar Kota Tinggi",
    category: "mosque",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000002261031001978652145204866153034585802MY5922J.K MJD BNDAR K.TINGGI6011KOTA TINGGI6105819006304D504",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.7421092169404855, 103.8984277416688],
  },
  {
    // https://www.facebook.com/p/Surau-Taman-Pasak-Indah-kota-Tinggi-100066368724844/
    id: 201,
    name: "Surau Taman Pasak Indah",
    category: "surau",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000002273031001374184385204866153034585802MY5923SURAU TAMAN PASAK INDAH6011KOTA TINGGI6105819006304F706",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.7191929811727156, 103.9639904970344],
  },
  {
    id: 202,
    name: "Surau Al Amin Desa Rhu 2",
    category: "surau",
    state: "Negeri Sembilan",
    city: "Seremban",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000024220311011169202115204866153034585802MY5924SURAU AL AMIN DESA RHU 26008SEREMBAN610570400630435D3",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.723623302488087, 101.88533788465793],
  },
  {
    id: 203,
    name: "Tabung Khairat Pembinaan Masjid",
    category: "mosque",
    state: "Johor",
    city: "Kulai",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004184031001975381815204866153034585802MY5924TBG KHAIRAT PMBINAAN MJD6005KULAI6105810006304DB15",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 204,
    name: "Tabung Urusan Kubur Johor",
    category: "others",
    state: "Johor",
    city: "Johor Bahru",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004809031001975757655204866153034585802MY5925TABUNG URUSAN KUBUR JOHOR6011JOHOR BAHRU61058099063046A78",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/SUAAKULAI/ (Unactive, latest post 2020)
    id: 205,
    name: "Surau Umar Abdul Aziz, Bandar Putra",
    category: "surau",
    state: "Johor",
    city: "Kulai",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004931031001979675575204866153034585802MY5921SURAU UMAR ABDUL AZIZ6005KULAI6105810006304C6D0",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.6630202495800865, 103.64198617799235],
  },
  {
    // https://www.facebook.com/msktsj/?locale=ms_MY
    id: 206,
    name: "Masjid Saidatina Khadijah, Taman Seremban Jaya",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Seremban",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000031031001361663255204866153034585802MY5920MASJID SEREMBAN JAYA6008SEREMBAN6105701006304A64F",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.670806205841217, 101.97652306861723],
  },
  {
    // https://www.facebook.com/masjidhussainofficial/
    id: 207,
    name: "Masjid Hussain",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Seremban 2",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000034031001361663255204866153034585802MY5925MASJID HUSSAIN SEREMBAN 26008SEREMBAN61057010063044099",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.6882401127514175, 101.9180310852145],
  },
  {
    // https://www.facebook.com/p/Masjid-Assyakirin-Gemencheh-100067832415297/
    id: 208,
    name: "Masjid Assyakirin Gemencheh",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Gemencheh",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000113031001937171925204866153034585802MY5924MJD ASSYAKIRIN GEMENCHEH6012GEMENCHEH NS610573200630455D9",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.5239963936912186, 102.39572948662175],
  },
  {
    // https://www.facebook.com/masjidattaqwaparoi/
    id: 209,
    name: "Masjid At-Taqwa Kampung Paroi",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Seremban",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000247031001931348705204866153034585802MY5925M ATTAQWA KARIAH KG PAROI6008SEREMBAN6105704006304C873",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.7220082373899306, 101.99235827270162],
  },
  {
    id: 210,
    name: "Tabung Surau SMK Tuanku Abdul Rahman",
    category: "surau",
    state: "Negeri Sembilan",
    city: "Gemas",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000240031001979581465204866153034585802MY5919TABUNG SURAU SMKTAR6005GEMAS610573400630440A5",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.583615613058011, 102.60773728251492],
  },
  {
    // https://www.facebook.com/mwtkn9/
    // https://www.instagram.com/masjid_warisan_tk/
    id: 211,
    name: "Masjid Warisan Telok Kemang",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Port Dickson",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000530031001756163305204866153034585802MY5923MJD WRISAN TELOK KEMANG6012PORT DICKSON61057105063042F96",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.4633698162499096, 101.85447690114914],
  },
  {
    // https://www.facebook.com/sbsmpal/
    id: 212,
    name: "Surau Batu Sheikh Muhammad Paiz Al-Linggi",
    category: "surau",
    state: "Negeri Sembilan",
    city: "Port Dickson",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000006630311011187067385204533153034585802MY5924SR SHEIKH PAIZ AL-LINGGI6012PORT DICKSON6105711506304CE6B",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.491568875504438, 102.00662727842227],
  },
  {
    id: 213,
    name: "Masjid Kariah Felda Palong 3",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Gemas",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001126031001330580385204866153034585802MY5923MJD KARIAH (F) PALONG 36005GEMAS61057364063049828",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 214,
    name: "Tabung Anak Yatim Masjid P.Jaya", // TODO: Panchor Jaya?
    category: "others",
    state: "Negeri Sembilan",
    city: "Seremban",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001377031001265787235204866153034585802MY5925TBG ANAK YATIM MJD P.JAYA6008SEREMBAN6105704006304294B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 215,
    name: "Masjid Al-Falihin Kampung Alai",
    category: "mosque",
    state: "Melaka",
    city: "Alai",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000106031001767100515204866153034585802MY5922MJD AL-FALIHIN KG ALAI6012ALAI  MELAKA61057546063046098",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.179450977404295, 102.30533465452297],
  },
  {
    id: 216,
    name: "Surau An Nur PIBG SMK Padang Temu",
    category: "surau",
    state: "Melaka",
    city: "Padang Temu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001688031001761293945204866153034585802MY5924SURAU AN NUR PIBG SMKPTM6006MELAKA6105754606304F8CD",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/profile.php?id=100089861776392
    id: 218,
    name: "Masjid Setia Alam Seksyen U13",
    category: "mosque",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065018540215000001224037457031000000000005204866153034585802MY5920MASJID SETIA ALAM-QR6009SHAH ALAM6105401706215011110186840000630414C0",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.1030528, 101.4417153],
  },
  {
    // https://www.facebook.com/baitulrahmanamanperdana/
    id: 219,
    name: "Surau Baitul Rahman, Taman Aman Perdana",
    category: "surau",
    state: "Selangor",
    city: "Klang",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR1687780031000000000005204000053034585802MY5919SURAU BAITUL RAHMAN6008SELANGOR630447A5",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.0941948808682422, 101.40919706865623],
  },
  {
    // https://www.facebook.com/masjidalfirdaussegambut/
    id: 220,
    name: "Masjid Al-Firdaus",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Segambut", // Segambut Luar
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR1384949031000000000005204729953034585802MY5917MASJID AL FIRDAUS6012KUALA LUMPUR630448CA",
    supportedPayment: ["duitnow"],
    coords: [3.188228277568797, 101.66885468893277],
  },
  {
    id: 221,
    name: "Surau Haji Omar, Jalan Genting",
    category: "surau",
    state: "Selangor",
    city: "Klang",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001301335204866153034585802MY5925Surau Hj Omar Jln Genting6002MY6273032517071030332970090364035730520170710363623000637960716170710184223100163040BE9",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.0705502405615954, 101.40133071533951],
  },
  {
    // https://www.facebook.com/masjidahmadirp/
    id: 222,
    name: "Masjid Ahmadi Rantau Panjang",
    category: "mosque",
    state: "Selangor",
    city: "Klang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000345031001935771345204866153034585802MY5923MASJID AHMADI R.PANJANG6005KLANG610542100630451B6",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.0584777, 101.4084735],
  },
  {
    // https://www.facebook.com/masjidannurglenmarie/
    id: 223,
    name: "Masjid An-Nur Temasya Glenmarie",
    category: "mosque",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020101021126610014A000000615000101065641670215QRMID000000002103100123425951520430005303458540500.005802MY5923MASJID AN-NUR GLENMARIE6009SHAH ALAM6105401506304CF92",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.0904867, 101.5771061],
  },
  {
    id: 224,
    name: "Masjid Al Aziz Al Hadi Mukim Kota Warisan",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001351855204866153034585802MY5922Masjid Al Aziz Al Hadi6002MY6273032517185452588090027722341210520171854529821600280160716171854410260400163043A93",
    supportedPayment: ["duitnow", "tng"],
    coords: [6.156211316956017, 102.20206961957389],
  },
  {
    id: 225,
    name: "Surau Ar-Raudhah, Taman Pantai Sepang Utara",
    category: "surau",
    state: "Selangor",
    city: "Sungai Pelek",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000007399041001655728855204866153034585802MY5918MUSOLLA AR-RAUDHAH6006SEPANG61054390063043931",
    supportedPayment: ["duitnow"],
    coords: [2.6262634074357485, 101.70727055288329],
  },
  {
    // https://www.facebook.com/MasjidArRahahKualaLumpur/
    id: 226,
    name: "Masjid Ar-Rahah",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent: "https://qr.tngdigital.com.my/m/281011056461095422624256135",
    supportedPayment: ["tng"],
    coords: [3.1138839387692325, 101.66876285084557],
  },
  {
    // https://www.facebook.com/maebk5/
    id: 227,
    name: "Masjid Al-Ehsan, Bandar Kinrara",
    category: "mosque",
    state: "Selangor",
    city: "Puchong",
    qrImage: "",
    qrContent:
      "00020201021126560014A0000006150001010689006102246022b89b11a4a9ef9c5dce705204599953034585802MY5915MASJID AL-EHSAN6002MY82403c10e7b548543bc94628906e095bd79f39cef91b6304404B",
    supportedPayment: ["duitnow"],
    coords: [3.0455435411318748, 101.64529926429225],
  },
  {
    // https://www.facebook.com/masjidhusna/
    id: 228,
    name: "Masjid Al-Husna, Bandar Sunway",
    category: "mosque",
    state: "Selangor",
    city: "Petaling Jaya",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR1643608031000000000005204000053034585802MY5915MASJID AL-HUSNA6008SELANGOR6304298E",
    supportedPayment: ["duitnow"],
    coords: [3.074910431713615, 101.60710459604896],
  },
  {
    id: 229,
    name: "Surau Ibnu Sina UITM Puncak Alam",
    category: "surau",
    state: "Selangor",
    city: "Puncak Alam",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000107365204829953034585802MY5925UNIVERSITI TEKNOLOGI MARA6002MY627303251673926826765007940334875052016762633690920014323071616762632433440096304BC32",
    supportedPayment: ["duitnow"],
    coords: [3.1987214028503774, 101.45287150981959],
  },
  {
    // https://www.facebook.com/masjidbbr/
    id: 230,
    name: "Masjid Bandar Bukit Raja",
    category: "mosque",
    state: "Selangor",
    city: "Klang",
    qrImage: "",
    qrContent:
      "00020201021126520014A000000615000101068900530220MDN165667779814771485204866153034585802MY5921MASJIDBANDARBUKITRAJA6005KLANG630496CB",
    supportedPayment: ["duitnow"],
    coords: [3.090211966850386, 101.42970473009046],
  },
  {
    id: 231,
    name: "Masjid Asy-Syakirin, KLCC",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000007835204866153034585802MY5924Masjid Asy-Syakirin KLCC6002MY62530325162883612792300732003419405201628836167342002723063045E07",
    supportedPayment: ["duitnow"],
    coords: [3.1573232097845083, 101.71703391351849],
  },
  {
    /* TODO: There are two Surau Nurul Hidayah in Selangor, need to be more specific
    Surau Nurul Hidayah, Prima Selayang
    Surau Nurul Hidayah, Taman Kemacahaya
    */
    id: 232,
    name: "Surau Nurul Hidayah",
    category: "surau",
    state: "Selangor",
    city: "",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065641600226126209000027950RHBQR0345635204739953034585802MY5919Surau Nurul Hidayah6002MY61054320062250309ROA0699410708SNHQR2538264ABA0D0725C918EF294C850B9BF88E836A9F0999D1E1204AB857F64764E80662B6304E439",
    supportedPayment: ["duitnow"],
  },
  {
    // https://www.facebook.com/masjid.abu.ubaidah/
    id: 233,
    name: "Masjid Abu Ubaidah Al Jarrah",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000025405204866153034585802MY5925MASJID ABU UBAIDAH AL JAR6002MY6273032516330783723630049414272730520172137330156900795620716163307769676500463043FDB",
    supportedPayment: ["duitnow"],
    coords: [3.1937375498404372, 101.72870676988711],
  },
  {
    // https://www.masjidwilayah.gov.my/
    // https://www.facebook.com/masjidwilayahpersekutuan/
    id: 234,
    name: "Masjid Wilayah Persekutuan",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000011395204866153034585802MY5929MASJID WILAYAH PERSEKUTUAN KL6002MY6253032516297759221400042396012760520162977593414100357106304CB9C",
    supportedPayment: ["duitnow"],
    coords: [3.17218843155993, 101.67160440797008],
  },
  {
    // https://www.facebook.com/masjidseven/
    id: 235,
    name: "Masjid Seksyen 7 Shah Alam",
    category: "mosque",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020101021126580014A000000615000101065887340212MBBQR129369103100000000000520400005303458540500.005802MY5916MASJID SEKSYEN 76008SELANGOR6304799C",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.071487332534143, 101.48189133495627],
  },
  {
    // https://www.mssaas.gov.my/
    // https://www.facebook.com/masjidnegeriselangor/
    id: 236,
    name: "Masjid Sultan Salahuddin Abdul Aziz Shah",
    category: "mosque",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000002755204866153034585802MY5922MASJID NEGERI SELANGOR6002MY627303251620111366044008752000885052016747112716590010126071616201107832770076304A961",
    supportedPayment: ["duitnow"],
    coords: [3.079201865570446, 101.52064542402636],
  },
  {
    // https://mtajbj.gov.my/
    // https://www.facebook.com/MTAJBJ/
    id: 237,
    name: "Masjid Tengku Ampuan Jemaah Bukit Jelutong",
    category: "mosque",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000021125204866153034585802MY5927MASJID TENGKU AMPUAN JEMAAH6002MY6253032516322926602800010665964820520163229279016800842816304B6E8",
    supportedPayment: ["duitnow"],
    coords: [3.0995722494486113, 101.53908664659981],
  },
  {
    // https://www.facebook.com/masjidcyberjaya10/
    // https://www.instagram.com/masjidcyberjaya10/
    id: 238,
    name: "Masjid Cyberjaya 10",
    category: "mosque",
    state: "Selangor",
    city: "Cyberjaya",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR1634314031000000000005204000053034585802MY5919MASJID CYBERJAYA 106015WP KUALA LUMPUR62270723MBBQR1634314INFAQONLINE630401DB",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.9004262, 101.6288741],
  },
  {
    // https://www.facebook.com/mai13.official/
    // https://www.instagram.com/mai13.official/
    id: 239,
    name: "Masjid Al-Ikhlas Seksyen 13 Shah Alam",
    category: "mosque",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000003031001930793065204866153034585802MY5924MASJID AL-IKHLAS SEK. 136009SHAH ALAM6105400006304B186",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.0865926, 101.5427397],
  },
  {
    // https://www.facebook.com/masjidkotakemuning/
    id: 240,
    name: "Masjid Kota Kemuning",
    category: "mosque",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065018540215000001234001816031000000000005204866153034585802MY5923MASJID KOTA KEMUNING-QR6009SHAH ALAM61054046062150111102286000006304D60C",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.0026341, 101.5351182],
  },
  {
    // https://www.facebook.com/MasjidDarulEhsanSubangJaya/
    id: 241,
    name: "Masjid Darul Ehsan SS15 Subang Jaya",
    category: "mosque",
    state: "Selangor",
    city: "Subang Jaya",
    qrImage: "",
    qrContent:
      "00020101021126580014A000000615000101065887340212MBBQR129928603100000000000520400005303458540500.005802MY5918MASJID DARUL EHSAN6008SELANGOR63044A00",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.101386, 101.4345701],
  },
  {
    id: 242,
    name: "Masjid Syed Alwi Batu Anam",
    category: "mosque",
    state: "Johor",
    city: "Batu Anam",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000278031001372358515204866153034585802MY5916MASJID SYED ALWI6009BATU ANAM6105851006304F1EE",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.5711614, 102.7086086],
  },
  {
    // https://www.facebook.com/masjidrajahajifisabilillah/
    id: 243,
    name: "Masjid Raja Haji Fi Sabilillah Cyberjaya",
    category: "mosque",
    state: "Selangor",
    city: "Cyberjaya",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000023045204866153034585802MY5930MASJID RAJA HAJI FI SABILILLAH6002MY6253032516327093926000030197246580520163270983900800704486304F4F5",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.9324933, 101.6453831],
  },
  {
    id: 244,
    name: "Masjid Nurul Iman Sg Bertek, Teluk Gadong",
    category: "mosque",
    state: "Selangor",
    city: "Klang",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001015535204866153034585802MY5917MASJID NURUL IMAN6002MY62730325167886296094100630989091205201678862964570007352507161678862768391001630498F1",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.0319172269355716, 101.42426483009802],
  },
  {
    // https://masjidalfalah.com/
    // https://www.facebook.com/masjidalfalahusj9/
    id: 245,
    name: "Masjid Al-Falah USJ 9",
    category: "mosque",
    state: "Selangor",
    city: "Subang Jaya",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000063555204866153034585802MY5921MASJID AL FALAH USJ 96002MY6273032516397133474820091719896110520167652249808100195170716163971301865000563048B15",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.0440697, 101.5846234],
  },
  {
    // https://www.facebook.com/msasperak/
    id: 246,
    name: "Masjid Sultan Azlan Shah",
    category: "mosque",
    state: "Perak",
    city: "Ipoh",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000134995204866153034585802MY5924MASJID SULTAN AZLAN SHAH6002MY6273032516490601380230053489219590520164906066401300985010716164905636766500663048885",
    supportedPayment: ["duitnow", "tng"],
    coords: [4.589270441026612, 101.12681956062723],
  },
  {
    // https://www.facebook.com/masjiddamansaraperdana/
    id: 247,
    name: "Masjid Damansara Perdana",
    category: "mosque",
    state: "Selangor",
    city: "Petaling Jaya",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065018540215000001234025435031000000000005204866153034585802MY5925MASJID DAMANSARAPERDA-QR6013PETALING JAYA610547820621501111025371000063048D84",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.1731733, 101.6156173],
  },
  {
    id: 248,
    name: "Masjid At-Taqwa Felda Triang 3",
    category: "mosque",
    state: "Pahang",
    city: "Teriang",
    qrImage: "",
    qrContent:
      "00020201021126790014A000000615000101065893730209MTRI003130319Agrobank's Merchant041+60924697665204866153034585802MY5925MASJID AL-TAQWA F.TRIANG36011BANDAR BERA610528300630496B7",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.253478, 102.5470493],
  },
  {
    // https://www.masjidtuankumizan.gov.my/v3/
    // https://www.facebook.com/masjidtuankumizanzainalabidin/
    id: 249,
    name: "Masjid Tuanku Mizan Zainal Abidin",
    category: "mosque",
    state: "W.P. Putrajaya",
    city: "Putrajaya",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001302275204940253034585802MY5925MASJID TUANKU MIZAN ZAINA6002MY6273032517079878068880011426813310520170978076079900976070716170798716340500163045F6C",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.9191710871320597, 101.68116713044142],
  },
  {
    // https://www.facebook.com/masjidhijausubangairport/
    id: 250,
    name: "Masjid Lapangan Terbang Sultan Abdul Aziz Shah Subang",
    category: "mosque",
    state: "Selangor",
    city: "Subang",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000003645204866153034585802MY5946MASJID LAPANGAN TERBANG SULTAN ABDUL AZIZ SHAH6002MY6253032516261476078090019051892750520162614765683600342816304A341",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.1199533504385784, 101.56448522427296],
  },
  {
    // https://www.facebook.com/SurauAlManarKomunitiPresint14Putrajaya/
    id: 251,
    name: "Surau Al-Manar",
    category: "surau",
    state: "W.P. Putrajaya",
    city: "Putrajaya",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065641600226126601600007194RHBQR0412445204739953034585802MY5925surau al manar presint 146002MY61056205062230309ROA08525807061857298264704CE22CAFE5D9E54B4612148A8731ECD405BF9F8B45272C19D03182B4DF9CF5630442B0",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.948369051480827, 101.71718015316215],
  },
  {
    id: 252,
    name: "Masjid Ibn Khaldun",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000387041001661737565204866153034585802MY5918MASJID IBN KHALDUN6012KUALA LUMPUR6105570006304805E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 253,
    name: "Masjid Cina Negeri Melaka",
    category: "mosque",
    state: "Melaka",
    city: "Krubong",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR1965581031000000000005204000053034585802MY5925MASJID CINA NEGERI MELAKA6006MELAKA63044B08",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.3309925454887264, 102.22752025154026],
  },
  {
    id: 254,
    name: "Masjid Al-Taqwa Gelong Machang",
    category: "mosque",
    state: "Kelantan",
    city: "Machang",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001307155204866153034585802MY5925MASJID AL-TAQWA GELONG MA6002MY6273032517092049937960047434271820520170921276499900953660716170920431501700163045DBC",
    supportedPayment: ["duitnow", "tng"],
    coords: [6.225364489670574, 102.34014190570367],
  },
  {
    // https://www.facebook.com/p/Surau-Nur-baiduri-100064363312323/
    id: 255,
    name: "Surau Nur Baiduri, Bandar Bukit Puchong",
    category: "surau",
    state: "Selangor",
    city: "Puchong",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2075652031000000000005204000053034585802MY5917SURAU NUR BAIDURI6008SELANGOR6304E5FA",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.9835377985885634, 101.62801688936486],
  },
  {
    id: 256,
    name: "Masjid Selayang Mutiara",
    category: "mosque",
    state: "Selangor",
    city: "Selayang",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2157030031000000000005204729953034585802MY5923MASJID SELAYANG MUTIARA6015WP KUALA LUMPUR6304BB95",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 257,
    name: "Masjid Jamek Abdullah Hukum @ KL Eco City",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent: "https://qr.tngdigital.com.my/m/281011055105183318942282243",
    supportedPayment: ["tng"],
    coords: [3.1224998923328267, 101.67512871187822],
  },
  {
    id: 258,
    name: "Surau Al-Mukmin PPR Wangsa Maju",
    category: "surau",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065018540215000001244014338031000000000005204866153034585802MY5918SURAU AL MUKMIN-QR6012KUALA LUMPUR61055310062150111101635300006304D099",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.117958, 101.673981],
  },
  {
    id: 259,
    name: "Masjid An-Nur KMJ",
    category: "mosque",
    state: "Johor",
    city: "Tangkak",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2004736031000000000005204000053034585802MY5917MASJID AN NUR KMJ6005JOHOR6304BFE3",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.287209, 102.5635944],
  },
  {
    id: 260,
    name: "Surau Ar-Rahmah Cempakapuri",
    category: "surau",
    state: "Negeri Sembilan",
    city: "Nilai",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000048725204866153034585802MY5926SURAU ARRAHMAH CEMPAKAPURI6002MY6253032516373107252290011462184580520163731073888200807956304EBD5",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.7980786, 101.7643757],
  },
  {
    id: 261,
    name: "Masjid Al-Khasyi'in",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126520014A000000615000101068900530220MDN162245583328130615204866153034585802MY5918MASJIDAL-KHASYI'IN6011KUALALUMPUR63049DD0",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.0837002, 101.7066497],
  },
  {
    // https://www.facebook.com/masjidalfaizin28/
    id: 262,
    name: "Masjid Al Faizin",
    category: "mosque",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001285465204866153034585802MY5916MASJID AL FAIZIN6002MY62730325170166033644100961358658305201701660739080003707907161701659742675009630495BA",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.0077261, 101.5607074],
  },
  {
    id: 263,
    name: "Masjid Puncak Alam",
    category: "mosque",
    state: "Selangor",
    city: "Puncak Alam",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000702455204866153034585802MY5918MASJID PUNCAK ALAM6002MY6273032516530301431840010815755520520167245801239500530940716165302974725300463047073",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.2289209, 101.4304386],
  },
  {
    id: 264,
    name: "Masjid Jenjarom",
    category: "mosque",
    state: "Selangor",
    city: "Jenjarom",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065641600226126241000006433RHBQR0272785204739953034585802MY5915masjid jenjarom6002MY61054260062250309ROA0571210708A143348782647C1D66ACFC29CC01C987B39A0E0D5B59EF28F334709B54836DED8FB0D042CC1A6304BD5E",
    supportedPayment: ["duitnow"],
    coords: [2.8843392, 101.5196352],
  },
  {
    id: 265,
    name: "Masjid Jamek Sabak Bernam",
    category: "mosque",
    state: "Selangor",
    city: "Sabak Bernam",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR1145580031000000000005204729953034585802MY5925MASJID JAMIK SABAK BERNAM6008SELANGOR63041A77",
    supportedPayment: ["duitnow"],
    coords: [3.7703992, 100.9854913],
  },
  {
    id: 266,
    name: "Masjid Bukit Rahman Putra",
    category: "mosque",
    state: "Selangor",
    city: "Sungai Buloh",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065641600226126208100019780RHBQR0104445204739953034585802MY5910Masjid BRP6002MY61054700062260309ROA0148410709masjidbrp82646A3D5DB510869682F0CB431B6B7B4BEBC68EC5BC7735838E30150982780173C56304B8FC",
    supportedPayment: ["duitnow"],
    coords: [3.2244976244066974, 101.55741687256993],
  },
  {
    id: 267,
    name: "Masjid At-Taqwa (Masjid Mukim Bunut Susu)",
    category: "mosque",
    state: "Kelantan",
    city: "Pasir Mas",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065641600226125305200011605RHBQR0035245204829953034585802MY5915Masjid at TAQWA6002MY61051707062240309ROA0038310707pld449982644FC5DA85347EF1DFFD586790695816D2699647AB80C95BC0E3C3926460097C3863046361",
    supportedPayment: ["duitnow"],
    coords: [6.091714054243558, 102.17818412155441],
  },
  {
    id: 268,
    name: "Maahad Tahfiz Al-Furqan",
    category: "mosque",
    state: "Pahang",
    city: "Temerloh",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065641600226125605300004642RHBQR0031005204739953034585802MY5908Outlet 16002MY61052800062250309ROA0033610708135791ss8264679CA0D88F8B59A362D680F22BC271D153A427F13E4B77AFB20CD4B102977F0C63048868",
    supportedPayment: ["duitnow"],
    coords: [3.4578024361000623, 102.48218055038069],
  },
  {
    id: 269,
    name: "Maahad Tahfiz Al-Istiqamah",
    category: "others",
    state: "Pahang",
    city: "Temerloh",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065641600226125605300007730RHBQR0029765204739953034585802MY5908Outlet 16002MY61052800062290309ROA0032210712maahadtahfiz8264439F7DEB9F5B202DE45139E17E177C1201D17D5B4859E56879E505E65B5B108F6304C642",
    supportedPayment: ["duitnow"],
    coords: [3.4709179704910977, 102.48490610990378],
  },
  {
    id: 270,
    name: "Maahad Ibnu Umar",
    category: "others",
    state: "Kedah",
    city: "Padang Serai",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065641600226125210300009173RHBQR0062055204829953034585802MY5916MAAHAD IBNU UMAR6002MY61050940062230309ROA0093250706MAAHAD8264556135EA3A473FC803E828C6C64CA4086E5D9F39DE4E98A7786F4D9DE2CE14C9630487ED",
    supportedPayment: ["duitnow"],
    coords: [5.546543973520225, 100.53682035038734],
  },
  {
    id: 271,
    name: "Masjid Nurul Hidayah (Kampung Cemerlang)",
    category: "mosque",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065641600226121125460011826RHBQR0052535204739953034585802MY5919Surau Nurul Hidayah6002MY61059325062230309ROA0056640706hamzah8264016B9C822E3126B6952FFD12EF7BB564EBCB27E9EE1ABF51626D05290A1FF2EA63047BFC",
    supportedPayment: ["duitnow"],
    coords: [1.5006841585002741, 110.3516103539692],
  },
  {
    id: 272,
    name: "Surau Infiniti 3",
    category: "surau",
    state: "W.P. Kuala Lumpur",
    city: "Wangsa Maju",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065641600226126233500040281RHBQR0084095204739953034585802MY5916Surau Infiniti 36002MY61055330062310309ROA0125990714Surauinfiniti38264FA327C832D6B53B5A242AA407490E09AA8CE9DE8DF12CC9F0CC890953132CA10630494D0",
    supportedPayment: ["duitnow"],
    coords: [3.194545329543199, 101.73758336911077],
  },
  {
    id: 273,
    name: "Pertubuhan Pondok Thurat",
    category: "others",
    state: "Pulau Pinang",
    city: "Bukit Mertajam",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065641600226120714560003636RHBQR0088345204829953034585802MY5919Wakaf Pondok Turath6002MY61051400062230309ROA01307007066602018264F6240B8E29C73D3B6A16B16E373B4216710CD44E343382FB2A58419051F55D62630418F7",
    supportedPayment: ["duitnow"],
  },
  {
    id: 274,
    name: "Masjid As-Syakirin BMC",
    category: "mosque",
    state: "Selangor",
    city: "Cheras",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065641600226126223200003243RHBQR0088805204739953034585802MY5922Masjid As-Syakirin BMC6002MY61054320062260309ROA0131170709masjidbmc82648B3E30E49D8752BB6B66A4050C75639F839D7824AC2E08699841D95B508AAF076304349C",
    supportedPayment: ["duitnow"],
    coords: [3.04902366182911, 101.786341433882],
  },
  {
    id: 275,
    name: "Surau Al Azim",
    category: "surau",
    state: "Perak",
    city: "Sitiawan",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065641600226125821700001041RHBQR0046415204739953034585802MY5908Outlet 16002MY61053200062250309ROA0050100708zuhari708264C66D0DCCAE489EBA1665B7C085215DE06AB8173222221AF4E0ADADAFD827462663049C7A",
    supportedPayment: ["duitnow"],
    coords: [4.232186085721263, 100.69196003689001],
  },
  {
    // https://www.facebook.com/mastaaf.im/
    id: 276,
    name: "Masjid Tengku Ampuan Afzan, Indera Mahkota (MASTAAF)",
    category: "mosque",
    state: "Pahang",
    city: "Kuantan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065018540215000001248405631031000000000005204866153034585802MY5923MASJID T A AFZAN KTN-QR6007KUANTAN61052520062150111102057100006304EAFB",
    supportedPayment: ["duitnow"],
    coords: [3.824054319022322, 103.3055692802235],
  },
  {
    // https://www.facebook.com/p/Masjid-Al-Taqwa-Kariah-Kisap-100064860304444/
    id: 277,
    name: "Masjid Al-Taqwa Kariah Kisap",
    category: "mosque",
    state: "Kedah",
    city: "Langkawi",
    qrImage: "",
    qrContent:
      "00020201021126600014A000000615000101065892670228BRQR658d7901b16709469f2ef3be5204866153034585802MY5921MASJID AL-TAQWA KISAP6008Langkawi61050700062420310M000001253052465ceb7c7aa48bf00056300b96304117A",
    supportedPayment: ["duitnow", "tng"],
    coords: [6.37105987339039, 99.86510883207451],
  },
  {
    // https://www.facebook.com/masjidassopiah/
    id: 278,
    name: "Masjid As-Sopiah, Keda Wang Tok Rendong",
    category: "mosque",
    state: "Kedah",
    city: "Langkawi",
    qrImage: "",
    qrContent:
      "00020201021126600014A000000615000101065892670228BRQR65d54f6e481cbd226738622f5204866153034585802MY5920MASJID ASSOFIAH KEDA6004kuah61050700062420310M000002093052465d54f6faa48bf0005637557630478DA",
    supportedPayment: ["duitnow", "tng"],
    coords: [6.352203154708551, 99.88020500425073],
  },
  {
    id: 279,
    name: "Surau As Sakinah",
    category: "surau",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000001031001230919085204866153034585802MY5916SURAU AS SAKINAH6012KUALA LUMPUR6105501006304B99A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 280,
    name: "Masjid Damansara Perdana",
    category: "mosque",
    state: "Selangor",
    city: "Petaling Jaya",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000005045031001338839665204566153034585802MY5924MASJID DAMANSARA PERDANA6013PETALING JAYA6105478206304EFB2",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.1733578669952993, 101.61813343874167],
  },
  {
    id: 281,
    name: "Masjid Kem Tentera Sungai Besi",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Sungai Besi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000297031001221777205204866153034585802MY5923MASJID ANGKATAN TENTERA6011SUNGAI BESI61055700063043EC8",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.0585296127142145, 101.71656880395051],
  },
  {
    // https://www.facebook.com/suraunurulimantamanminangcheras/
    id: 282,
    name: "Surau Nurul Iman Taman Minang",
    category: "surau",
    state: "Selangor",
    city: "Cheras",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000318031001692066535204866153034585802MY5916SURAU NURUL IMAN6015TAMAN MINANG KL61055600063048622",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.057902755357908, 101.75276297273837],
  },
  {
    // https://www.facebook.com/masjidsaadah/
    id: 283,
    name: "Masjid Nurrusaadah",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000391031001622145835204866153034585802MY5919MASJID NURRUSAADAH 6012KUALA LUMPUR6105561006304CE8E",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.1102408603591045, 101.75458562959342],
  },
  {
    // https://www.facebook.com/masjidalmukhlisinalamdamai/
    id: 284,
    name: "Masjid Al-Mukhlisin",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Cheras",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000549031001391372065204866153034585802MY5919MASJID AL MUKHLISIN6006CHERAS6105560006304613C",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.063298329452579, 101.74236341534262],
  },
  {
    id: 285,
    name: "Surau Al-Mukhlisin",
    category: "surau",
    state: "W.P. Kuala Lumpur",
    city: "Cheras",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001196031001238230665204866153034585802MY5918SURAU AL-MUKHLISIN6006CHERAS6105560006304797E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 286,
    name: "Surau At-Taqwa",
    category: "surau",
    state: "W.P. Kuala Lumpur",
    city: "Cheras",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004237031001935142885204866153034585802MY5914SURAU AT-TAQWA6006CHERAS61050600063048B81",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 287,
    name: "Surau Ar-Rahman",
    category: "surau",
    state: "W.P. Kuala Lumpur",
    city: "Jinjang Utara",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000188031001934644905204866153034585802MY5915SURAU AR-RAHMAN6013JINJANG UTARA6105520006304F14F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 288,
    name: "Surau Al-Muqarrabin",
    category: "surau",
    state: "W.P. Kuala Lumpur",
    city: "Segambut",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000194031001226195235204866153034585802MY5919SURAU AL-MUQARRABIN6008SEGAMBUT610551200630473AD",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 289,
    name: "Persekutuan Seruan Islam Selangor & Wilayah Persekutuan (Jam'iyah)",
    category: "others",
    state: "W.P. Kuala Lumpur",
    city: "Jalan Ipoh",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000833031001270273115204533153034585802MY5924PER SERUAN ISLAM SEL W.P6010JALAN IPOH6105503506304482D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 290,
    name: "Surau At Taqwa Jabatan Pendidikan WPKL",
    category: "surau",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000837031001724397055204866153034585802MY5921SURAU AT TAQWA JPWPKL6012KUALA LUMPUR610550604630497F3",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 291,
    name: "Surau Balai Islam",
    category: "surau",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001615031001236193675204866153034585802MY5917SURAU BALAI ISLAM6012KUALA LUMPUR61055410063047341",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 292,
    name: "Surau Al Hikmah",
    category: "surau",
    state: "W.P. Kuala Lumpur",
    city: "Jinjang Utara",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000241031001334410065204866153034585802MY5915SURAU AL HIKMAH6013JINJANG UTARA6105520006304EE45",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // Zaid or Zahid in QR code?
    // https://www.facebook.com/masjidzaidbinthabit/
    id: 293,
    name: "Masjid Zahid Bin Thabit",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000103031001925422105204866153034585802MY5923MASJID ZAHID BIN THABIT6012KUALA LUMPUR6105560006304C4A8",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.078213064044826, 101.71493011326791],
  },
  {
    id: 294,
    name: "Masjid Ibn Khaldun",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000387031001661737565204866153034585802MY5918MASJID IBN KHALDUN6012KUALA LUMPUR6105570006304A373",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 295,
    name: "Surau Khamisah Ali",
    category: "surau",
    state: "Selangor",
    city: "Kajang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004416031001220014865204866153034585802MY5918SURAU KHAMISAH ALI6006KAJANG6105430006304C1F0",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 296,
    name: "Masjid Usamah Bin Zaid",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000037031001746683455204866153034585802MY5922MASJID USAMAH BIN ZAID6012KUALA LUMPUR61055330063046BA5",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 297,
    name: "Masjid Al-Mardhiyah Taman Melawati",
    category: "mosque",
    state: "Selangor",
    city: "Ampang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000038031001931931615204866153034585802MY5922MASJID AL-MARDHIYAH TM6012KUALA LUMPUR61055310063041F2A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 298,
    name: "Masjid Bukit Antarabangsa",
    category: "mosque",
    state: "Selangor",
    city: "Ampang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000039031001232759695204866153034585802MY5925MASJID BUKIT ANTARABANGSA6006AMPANG6105680006304D383",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 299,
    name: "Masjid Ukay Perdana",
    category: "mosque",
    state: "Selangor",
    city: "Hulu Kelang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000224031001938192125204866153034585802MY5919MASJID UKAY PERDANA6011HULU KELANG61056800063045E90",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 301,
    name: "Masjid Al-Iman Kemensah Heights",
    category: "mosque",
    state: "Selangor",
    city: "Ampang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000405031001663695545204866153034585802MY5920MJD AL IMAN KEMENSAH6006AMPANG6105680006304AE06",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/masjidalridhuanhulukelang/
    id: 302,
    name: "Masjid Al-Ridhuan Hulu Kelang",
    category: "mosque",
    state: "Selangor",
    city: "Ampang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000432031001935632885204866153034585802MY5917MASJID AL RIDHUAN6006AMPANG61056800063042B9F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 303,
    name: "Masjid Lama Al Hidayah",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Gombak",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000620031001339072405204866153034585802MY5922MASJID LAMA AL HIDAYAH6006GOMBAK6105531006304CE99",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 304,
    name: "Surau Attaqwa",
    category: "surau",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000902031001931424735204866153034585802MY5913SURAU ATTAQWA6012KUALA LUMPUR61055420063043CC3",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 305,
    name: "Persatuan Penduduk Taman Danau Kota",
    category: "others",
    state: "W.P. Kuala Lumpur",
    city: "Setapak",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000904031001333224145204533153034585802MY5924PER PNDDK TMN DANAU KOTA6007SETAPAK610553300630449F7",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 306,
    name: "Masjid Al-Umm",
    category: "mosque",
    state: "Selangor",
    city: "Bangi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000371031001923839445204866153034585802MY5913MASJID AL-UMM6005BANGI61054365063040EF8",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 307,
    name: "Surau Kuarters Kerajaan Negeri Seksyen 14 Bandar Baru Bangi",
    category: "surau",
    state: "Selangor",
    city: "Bangi",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000009500311011101086835204866153034585802MY5924SURAU KUARTERS SEK 14 BB6005BANGI610543650630485B7",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 308,
    name: "Masjid Al Istiqamah",
    category: "mosque",
    state: "Selangor",
    city: "Kajang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001035031001920750035204866153034585802MY5919MASJID AL ISTIQAMAH6006KAJANG6105430006304BEB2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 309,
    name: "Surau Al-Ikhwan Taman Samudra Batu Caves",
    category: "surau",
    state: "Selangor",
    city: "Batu Caves",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000250031001939216615204866153034585802MY5918SURAU AL-IKHWAN TS6010BATU CAVES6105681006304EB4C",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 310,
    name: "Surau Al Hidayah Taman Sunway",
    category: "surau",
    state: "Selangor",
    city: "Gombak",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000332031001934539765204866153034585802MY5925SURAU AL HIDAYAH T.SUNWAY6006GOMBAK61056810063041FD9",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 311,
    name: "Masjid Jamiatus Solahiah",
    category: "mosque",
    state: "Selangor",
    city: "Batu Caves",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000370031001825326075204866153034585802MY5924MASJID JAMIATUS SOLAHIAH6010BATU CAVES6105681006304E993",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 312,
    name: "Masjid Al Ittifaqiyah",
    category: "mosque",
    state: "Selangor",
    city: "Batu Caves",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000745031001935089825204866153034585802MY5921MASJID AL ITTIFAQIYAH6010BATU CAVES6105681006304D1AE",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 313,
    name: "Masjid An-Nur",
    category: "mosque",
    state: "Selangor",
    city: "Batu Caves",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000767031001236457345204866153034585802MY5912MASJID ANNUR6010BATU CAVES6105681006304E4FC",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 314,
    name: "Surau Al-Khairiah Selayang Permai",
    category: "surau",
    state: "Selangor",
    city: "Batu Caves",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004222031001928655545204866153034585802MY5920SURAU AL KHAIRIAH SP6010BATU CAVES61056810063044A89",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 315,
    name: "Masjid Al-Shariff",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Gombak",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004315031001033487435204866153034585802MY5917MASJID AL-SHARIFF6006GOMBAK61055310063041EA1",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 316,
    name: "Surau Miftahul Falihen",
    category: "surau",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004387031001768856585204866153034585802MY5922SURAU MIFTAHUL FALIHEN6012KUALA LUMPUR61055310063045ED6",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 317,
    name: "Masjid An-Nur Glenmarie",
    category: "mosque",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000021031001234259515204300053034585802MY5923MASJID AN-NUR GLENMARIE6009SHAH ALAM610540150630404EC",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 318,
    name: "Surau Al-Hidayah Wisma DRB-HICOM",
    category: "surau",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000088031001922159905204866153034585802MY5925SR AL-HIDAYAH W DRB HICOM6012GLENMARIE SA6105401506304939B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 319,
    name: "Persatuan Kebajikan Al-Fikrah",
    category: "others",
    state: "Selangor",
    city: "Kajang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000408031001633559605204839853034585802MY5925PERSATUAN KBJKN AL-FIKRAH6006KAJANG610543000630409BB",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 320,
    name: "Surau Sri Saujana",
    category: "surau",
    state: "Selangor",
    city: "Kajang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000066031001633580445204866153034585802MY5917SURAU SRI SAUJANA6006KAJANG61054300063043524",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 321,
    name: "Surau Taman Jasmin",
    category: "surau",
    state: "Selangor",
    city: "Kajang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000265031001927150065204866153034585802MY5918SURAU TAMAN JASMIN6006KAJANG61054300063048D70",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 322,
    name: "Surau Al-Hidayah Bandar Teknologi Kajang",
    category: "surau",
    state: "Selangor",
    city: "Kajang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000462031001320828875204533153034585802MY5916AL HIDAYAH B.T.K6008SEMENYIH6105435006304E4AE",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 323,
    name: "Surau Impian Gemilang",
    category: "surau",
    state: "Selangor",
    city: "Kajang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000463031001668520745204866153034585802MY5921SURAU IMPIAN GEMILANG6006KAJANG61054300063042D41",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 324,
    name: "Surau An-Nur Taman Kantan Permai",
    category: "surau",
    state: "Selangor",
    city: "Kajang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000576031001361420295204866153034585802MY5916SURAU AN NUR TKP6006KAJANG61054300063045890",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 325,
    name: "Surau Nurul Huda",
    category: "surau",
    state: "Selangor",
    city: "Kajang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000768031001269263675204866153034585802MY5924PMBNAAN SURAU NURUL HUDA6006KAJANG61054300063045B08",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 326,
    name: "Masjid Prima Saujana Kajang",
    category: "mosque",
    state: "Selangor",
    city: "Kajang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001144031001923352305204866153034585802MY5924MJD PRIMA SAUJANA KAJANG6006KAJANG6105430006304C1F9",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 327,
    name: "Surau Sekolah Kebangsaan Saujana Impian",
    category: "surau",
    state: "Selangor",
    city: "Kajang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003381031001237229905204866153034585802MY5923SURAU SK SAUJANA IMPIAN6006KAJANG6105430006304B41F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 328,
    name: "Surau Al Asmah",
    category: "surau",
    state: "Selangor",
    city: "Kajang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004260031001969664445204866153034585802MY5914SURAU AL ASMAH6006KAJANG6105430006304E1DB",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 329,
    name: "Tabung Pendidikan Hafiz",
    category: "others",
    state: "Selangor",
    city: "Klang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000071031001626159015204829953034585802MY5923TABUNG PENDIDIKAN HAFIZ6005KLANG6105413006304B29C",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/darulquranpitas/
    id: 330,
    name: "Darul Quran PITAS",
    category: "others",
    state: "Selangor",
    city: "Batu Caves",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000072031001626159035204533153034585802MY5905PITAS6010BATU CAVES6105681006304FE00",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 331,
    name: "Surau Ar-Rahmah Seksyen 8",
    category: "surau",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000908031001321709305204866153034585802MY5915SURAU AR RAHMAH6009SHAH ALAM610540000630434B0",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 332,
    name: "Surau Al Munawwarah Seksyen 13",
    category: "surau",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000042031001672535525204866153034585802MY5925SURAU AL MUNAWWARAH SEK136009SHAH ALAM6105401006304EEE0",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 333,
    name: "Surau As Salaam",
    category: "surau",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000715031001697957135204866153034585802MY5915SURAU AS SALAAM6009SHAH ALAM6105401006304F6BA",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 334,
    name: "Surau Al-Ikhlas",
    category: "surau",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001147031001922100645204866153034585802MY5915SURAU AL-IKHLAS6009SHAH ALAM61054015063044CEE",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 335,
    name: "Madrasah Nahdhatul",
    category: "others",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003557031001723916355204866153034585802MY5918MADRASAH NAHDHATUL6010SHAH ALAM 61054000063048A6E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 336,
    name: "Al Ubudiah Shah Alam",
    category: "others",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003591031001230314395204866153034585802MY5920AL UBUDIAH SHAH ALAM6009SHAH ALAM610540300630488E9",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 337,
    name: "Surau Nurul Ihsan",
    category: "surau",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004297031001938539655204866153034585802MY5917SURAU NURUL IHSAN6009SHAH ALAM6105400006304CCD1",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 338,
    name: "Masjid Nurul Ehsan",
    category: "mosque",
    state: "Selangor",
    city: "Petaling Jaya",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000222031001750507455204866153034585802MY5918MASJID NURUL EHSAN6013PETALING JAYA6105460006304731A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 339,
    name: "Surau An-Nuur",
    category: "surau",
    state: "Selangor",
    city: "Petaling Jaya",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000002490311011312468695204866153034585802MY5913SURAU AN-NUUR6013PETALING JAYA6105478006304D462",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 340,
    name: "Surau An-Nur Dwiputra",
    category: "surau",
    state: "W.P. Putrajaya",
    city: "Putrajaya",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000316031001966865655204866153034585802MY5920SURAU ANNUR DWIPUTRA6009PUTRAJAYA61056205063048E90",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 341,
    name: "Surau Al-Mukhlisin Putrajaya",
    category: "surau",
    state: "W.P. Putrajaya",
    city: "Putrajaya",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000354031001333024695204866153034585802MY5918SURAU AL-MUKHLISIN6006KAJANG61054300063042278",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // Tempat Farhan Helmy membesar url: "https://www.facebook.com/unitenmosque/"
    id: 342,
    name: "Masjid UNITEN",
    category: "mosque",
    state: "Selangor",
    city: "Kajang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000384031001022096315204866153034585802MY5913MASJID UNITEN6006KAJANG6105430006304A2C9",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.971944, 101.733889],
  },
  {
    id: 343,
    name: "Masjid Nurul Iman",
    category: "mosque",
    state: "Selangor",
    city: "Rawang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000285031001927797185204866153034585802MY5917MASJID NURUL IMAN6006RAWANG610548000630420AE",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 344,
    name: "Masjid Nurul Islamiah Sungai Choh",
    category: "mosque",
    state: "Selangor",
    city: "Rawang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000304031001229036425204866153034585802MY5922MJD N.ISLAMIAH SG CHOH6006RAWANG61054800063046FC1",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 345,
    name: "Surau At-Taqwa Desa Melor",
    category: "surau",
    state: "Selangor",
    city: "Serendah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000308031001645474845204866153034585802MY5922SURAU AT-TAQWA D.MELOR6008SERENDAH61054820063046CAF",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 346,
    name: "Masjid Nurul Iman Serendah",
    category: "mosque",
    state: "Selangor",
    city: "Rawang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000457031001328850095204866153034585802MY5925MSJID NURUL IMAN SERENDAH6006RAWANG61054820063049F80",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 347,
    name: "Surau Al-Mustaqim",
    category: "surau",
    state: "Perak",
    city: "Serendah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000851031001926939975204866153034585802MY5917SURAU AL MUSTAQIM6008SERENDAH61053204063045599",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 348,
    name: "Masjid Lepan Jaya",
    category: "mosque",
    state: "Kelantan",
    city: "Gua Musang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000084031001992303515204866153034585802MY5917MASJID LEPAN JAYA6014GUA MUSANG KEL6105183006304007D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 349,
    name: "Masjid Ar Rahman",
    category: "mosque",
    state: "Kelantan",
    city: "Gua Musang",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000000850311011199800735204866153034585802MY5916MASJID AR RAHMAN6014GUA MUSANG KEL6105183006304AC36",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 350,
    name: "Masjid Mukim Felda Aring 1",
    category: "mosque",
    state: "Kelantan",
    city: "Gua Musang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000096031001790609885204866153034585802MY5921MASJID FELDA ARING 016010GUA MUSANG6105183006304408E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 351,
    name: "Masjid Mukim Sungai Asap 'B'",
    category: "mosque",
    state: "Kelantan",
    city: "Gua Musang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000097031001397792625204866153034585802MY5922MASJID MUKIM SG ASAP B6010GUA MUSANG6105183006304A22E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 352,
    name: "Masjid Jamek Tengku Muhammad Faiz Petra",
    category: "mosque",
    state: "Kelantan",
    city: "Gua Musang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000099031001450870415204866153034585802MY5925MJ TG MUHAMMAD FA-IZPETRA6010GUA MUSANG61051830063042F6A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 353,
    name: "Masjid Mukim Jeram Tekoh",
    category: "mosque",
    state: "Kelantan",
    city: "Gua Musang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000100031001392634305204866153034585802MY5924MASJID MUKIM JERAM TEKOH6010GUA MUSANG6105183006304FE83",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 354,
    name: "Masjid Taman Wangi",
    category: "mosque",
    state: "Kelantan",
    city: "Gua Musang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000102031001098884325204866153034585802MY5918MASJID TAMAN WANGI6010GUA MUSANG6105183006304723D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 355,
    name: "Masjid Bandar Jeli",
    category: "mosque",
    state: "Kelantan",
    city: "Jeli",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000057031001991510845204866153034585802MY5918MASJID BANDAR JELI6004JELI610517600630463ED",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 356,
    name: "Masjid Mukim Sungai Long",
    category: "mosque",
    state: "Kelantan",
    city: "Jeli",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000281031001064051105204866153034585802MY5923JK MASJID MUKIM SG LONG6004JELI6105176006304FC8A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 357,
    name: "Masjid Mukim Berdang",
    category: "mosque",
    state: "Kelantan",
    city: "Jeli",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000282031001450938915204866153034585802MY5920MASJID MUKIM BERDANG6004JELI6105176006304C6FC",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 358,
    name: "Sekolah Rendah Islam Riyadhus Solihin",
    category: "others",
    state: "Johor",
    city: "Batu Pahat",
    qrImage: "",
    qrContent:
      "00020201021126530014A000000615000101065641690221QRAMB00000000000768255204829953034585802MY5925SEK RENDAH ISLAM RIYADHUS6005JOHOR6105830006304CF8E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 359,
    name: "Masjid Universiti Malaysia Kelantan (UMK)",
    category: "mosque",
    state: "Kelantan",
    city: "Jeli",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000003570311011102065475204866153034585802MY5917 MASJID UMK JELI 6004JELI6105176006304D4DA",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.7459, 101.8631],
  },
  {
    id: 360,
    name: "Masjid Al Muttaqin",
    category: "mosque",
    state: "Kelantan",
    city: "Pasir Mas",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000558031001397111975204866153034585802MY5918MASJID AL MUTTAQIN6009PASIR MAS6105170006304D9D1",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 361,
    name: "Masjid Mukim Kalai",
    category: "mosque",
    state: "Kelantan",
    city: "Jeli",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000560031001394662885204866153034585802MY5918MASJID MUKIM KALAI6004JELI61051760063041D5D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 362,
    name: "Masjid Hijau As Saadah",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000083031001991389065204866153034585802MY5922MASJID HIJAU AS SAADAH6010KOTA BHARU6105152006304A110",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 363,
    name: "Masjid An-Naim",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000081031001393766775204866153034585802MY5914MASJID AN-NAIM6010KOTA BHARU6105153006304B516",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 364,
    name: "Masjid Wakaf Bharu",
    category: "mosque",
    state: "Kelantan",
    city: "Wakaf Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000139031001998767775204866153034585802MY5918MASJID WAKAF BHARU6011WAKAF BHARU61051625063047835",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 365,
    name: "Tabung Kebajikan Masjid Mukim Tiong",
    category: "others",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000155031001995896195204866153034585802MY5923TBG KBJ MJD MUKIM TIONG6010KOTA BHARU6105151006304A9E0",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 366,
    name: "Masjid At Toyyibah",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000677031001292100725204866153034585802MY5918MASJID AT TOYYIBAH6010KOTA BHARU61051640063048470",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 367,
    name: "Surau Al Munawwarah",
    category: "surau",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000719031001481797975204866153034585802MY5919SURAU AL MUNAWWARAH6010KOTA BHARU61051610063046A3F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 368,
    name: "Madrasah Zikrullah",
    category: "others",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000798031001994621295204866153034585802MY5918MADRASAH ZIKRULLAH6010KOTA BHARU61051615063047241",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 369,
    name: "AJK Tanah Kubur Peradong",
    category: "others",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126600014A000000615000101065641670215QRMID000000201403090179157955204866153034585802MY5921AJK TNH KBUR PERADONG6010KOTA BHARU6105151506304E399",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 370,
    name: "Masjid Muhammadiah BP",
    category: "mosque",
    state: "Kelantan",
    city: "Bachok",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003068031001998253555204866153034585802MY5921MASJID MUHAMMADIAH BP6006BACHOK61051602063044021",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 371,
    name: "Madrasah Arabiah Kebakat",
    category: "others",
    state: "Kelantan",
    city: "Wakaf Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003300031001086094925204866153034585802MY5924M.TAHFIZ ARABIAH KEBAKAT6011WAKAF BHARU6105162506304D950",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 372,
    name: "Masjid Nur Syafaat",
    category: "mosque",
    state: "Kelantan",
    city: "Bachok",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004218031001992460475204866153034585802MY5918MASJID NUR SYAFAAT6006BACHOK6105163006304BC27",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 373,
    name: "Masjid Ayesha Kok Lanas",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000019031001998878525204866153034585802MY5923MASJID AYESHA KOK LANAS6010KOTA BHARU61051645063041D16",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 374,
    name: "Masjid Al-Muhaimin Mukim Kok Lanas",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000020031001993899025204866153034585802MY5924MASJID MUHAIMIN M KLANAS6010KOTA BHARU61051645063040C46",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.912732931688854, 102.24642021903874],
  },
  {
    id: 375,
    name: "Masjid Al-Falah",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000029031001295423545204866153034585802MY5915MASJID AL-FALAH6010KOTA BHARU610516450630414EB",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 376,
    name: "Masjid Mukim Kadok",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000075031001992344045204866153034585802MY5918MASJID MUKIM KADOK6010KOTA BHARU61051645063048D5B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 377,
    name: "Masjid Ar Rahman Klanas",
    category: "mosque",
    state: "Kelantan",
    city: "Kok Lanas",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000177031001391766065204866153034585802MY5923MASJID AR RAHMAN KLANAS6009KOK LANAS61051645063044D9F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 378,
    name: "Masjid Mukim Dendang",
    category: "mosque",
    state: "Kelantan",
    city: "Ketereh",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000262031001998361105204866153034585802MY5920MASJID MUKIM DENDANG6007KETEREH61051645063046193",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 379,
    name: "Masjid Keputeraan M Tahfiz", // TODO: Check this | MASJID MUKIM TOK PULAI CHONDONG, MACHANG, KELANTAN?
    category: "mosque",
    state: "Kelantan",
    city: "Machang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000290031001997725535204866153034585802MY5923MJD KEPUTERAAN M TAHFIZ6007MACHANG6105166006304C232",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 380,
    name: "Masjid Abu Bakar",
    category: "mosque",
    state: "Kelantan",
    city: "Ketereh",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000291031001393911715204866153034585802MY5916MASJID ABU BAKAR6007KETEREH61051645063043499",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 381,
    name: "JK Pembangunan Madrasah Kampung Hamzah",
    category: "others",
    state: "Kelantan",
    city: "Kuala Krai",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000347031001922076215204866153034585802MY5922JK PBN MDRSH KG HAMZAH6010KUALA KRAI61051800063049DC3",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 382,
    name: "JK Pembagunan Masjid PKB",
    category: "mosque",
    state: "Kelantan",
    city: "Ketereh",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003188031001393451925204866153034585802MY5920JK PMBGNN MASJID PKB6007KETEREH61051645063045DC8",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 383,
    name: "JK Masjid Muhammad KB",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000150031001398317865204866153034585802MY5922JK MASJID MUHAMMADI KB6010KOTA BHARU61051510063049555",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 384,
    name: "Masjid As-Solehin",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000196031001996283585204866153034585802MY5917MASJID AS-SOLEHIN6010KOTA BHARU61051520063044429",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 385,
    name: "Masjid Mukim Salor",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000002060311011550508405204866153034585802MY5918MASJID MUKIM SALOR6010KOTA BHARU6105151006304885B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 386,
    name: "Masjid Mukim Pendek",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000231031001290010095204866153034585802MY5919MASJID MUKIM PENDEK6010KOTA BHARU610515100630456AA",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 387,
    name: "Masjid Telipot",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000232031001393723365204866153034585802MY5914MASJID TELIPOT6010KOTA BHARU61051515063048087",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 388,
    name: "Masjid Mukim Kamil Hasan",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000260031001392559695204866153034585802MY5924MASJID MUKIM KAMIL HASAN6010KOTA BHARU610515100630480DC",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 389,
    name: "Masjid Taman Mesira",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000305031001398611925204866153034585802MY5919MASJID TAMAN MESIRA6010KOTA BHARU6105161506304CF4A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 390,
    name: "Masjid Darul Ulum KB",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000325031001393981815204866153034585802MY5920MASJID DARUL ULUM KB6010KOTA BHARU61051510063048F0B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/pondokbadriah/
    id: 391,
    name: "Madrasah Al-Badriah Pondok Jal Besar",
    category: "others",
    state: "Kelantan",
    city: "Tumpat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000346031001995313255204866153034585802MY5924M.AL-BADRIAH P.JAL BESAR6006TUMPAT61051621063049687",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 392,
    name: "JK Masjid Al Muttaqin",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000351031001391190795204866153034585802MY5921JK MASJID AL MUTTAQIN6010KOTA BHARU61051520063044E2C",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 393,
    name: "Yayasan Al Khatiri",
    category: "others",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000395031001340589645204866153034585802MY5918YAYASAN AL KHATIRI6010KOTA BHARU6105152006304D5C8",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 394,
    name: "JK Masjid Al Majid",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000436031001998178315204866153034585802MY5918JK MASJID AL MAJID6010KOTA BHARU610515200630471F7",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 395,
    name: "Tabung Kebajikan Masjid Al Fattah",
    category: "others",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000443031001295202005204866153034585802MY5923TBG KBJKN MJD AL FATTAH6010KOTA BHARU61051510063043822",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 396,
    name: "Tabung Pasti Wakaf Bharu",
    category: "others",
    state: "Kelantan",
    city: "Wakaf Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000445031001622016695204533153034585802MY5924TABUNG PASTI WAKAF BHARU6011WAKAF BHARU610516250630415BF",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 397,
    name: "Masjid Al Amin",
    category: "mosque",
    state: "Kelantan",
    city: "Bachok",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000580031001393584105204866153034585802MY5914MASJID AL AMIN6006BACHOK6105160206304707E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 398,
    name: "Kelas Kafii",
    category: "others",
    state: "Kelantan",
    city: "Machang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000847031001959904835204533153034585802MY5912 KELAS KAFII6007MACHANG61051850063047F02",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 399,
    name: "Madrasah Mahmudiah",
    category: "others",
    state: "Kelantan",
    city: "Tumpat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001165031001992789925204866153034585802MY5918MADRASAH MAHMUDIAH6006TUMPAT6105162006304F3F6",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 400,
    name: "Masjid Mahmudiah",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003316031001995134425204866153034585802MY5916MASJID MAHMUDIAH6010KOTA BHARU610515100630408D3",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 401,
    name: "Masjid Mukim Alor Pasir",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000041031001391834155204866153034585802MY5923MASJID MUKIM ALOR PASIR6011TANAH MERAH6105175006304349A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 402,
    name: "Masjid Mukim Batu 11",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000068031001997737465204866153034585802MY5920MASJID MUKIM BATU 116011TANAH MERAH61051750063041E74",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 403,
    name: "Surau Hospital Tanah Merah",
    category: "surau",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000125031001233792635204866153034585802MY5925SURAU HOSPITAL TANAHMERAH6011TANAH MERAH61051750063043094",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 404,
    name: "Masjid Al-Muttaqin Padang Siam",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000174031001991984795204866153034585802MY5924MJD AL-MUTTAQIN PDG SIAM6011TANAH MERAH61051750063045CBE",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 405,
    name: "Masjid Ismail Petra Tanah Merah",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000227031001398601345204866153034585802MY5922MASJID ISMAIL PETRA TM6011TANAH MERAH610517500630468B2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 406,
    name: "Masjid Al Hidayah Tanah Merah",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000333031001296229895204866153034585802MY5925MASJID AL HIDAYAH T.MERAH6011TANAH MERAH6105175006304FCDE",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 407,
    name: "Pertubuhan Ikatan Masyarakat",
    category: "others",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000709031001939737705204533153034585802MY5906IKATAN6011TANAH MERAH61051750063045452",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 408,
    name: "Masjid Mukim Belimbing",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000741031001991915965204866153034585802MY5922MASJID MUKIM BELIMBING6011TANAH MERAH6105175006304271A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 410,
    name: "Masjid Tok Guru Manal 3",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000868031001992000465204866153034585802MY5923MASJID TOK GURU MANAL 36011TANAH MERAH6105175006304AAC3",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 411,
    name: "Masjid Ribat Al Nur",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000009970311011293373575204866153034585802MY5919MASJID RIBAT AL NUR6011TANAH MERAH6105175006304FB6D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 412,
    name: "Madrasah Al Sukriah",
    category: "others",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000010520311011106814185204866153034585802MY5919MADRASAH AL SUKRIAH6011TANAH MERAH6105175106304AE93",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 413,
    name: "Surau Al Istiqamah",
    category: "surau",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001115031001374403115204866153034585802MY5918SURAU AL ISTIQAMAH6011TANAH MERAH61051750063044021",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 414,
    name: "Masjid Al Baqty",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001167031001990287585204866153034585802MY5915MASJID AL BAQTY6011TANAH MERAH61051750063048817",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 415,
    name: "Masjid Kampung Bukit Kechik",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001199031001935862015204866153034585802MY5922MASJID KG BUKIT KECHIK6011TANAH MERAH61051750063047AC1",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 417,
    name: "Masjid Mukim Rambai",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001543031001399302275204866153034585802MY5919MASJID MUKIM RAMBAI6011TANAH MERAH61051750063044150",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 418,
    name: "Masjid Al-Ihsaan",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001542031001991753475204866153034585802MY5916MASJID AL-IHSAAN6011TANAH MERAH61051750063049F44",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 419,
    name: "Masjid Sulaimaniah",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001763031001398369295204866153034585802MY5918MASJID SULAIMANIAH6011TANAH MERAH61051750063049013",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 420,
    name: "Surau Batu Garam",
    category: "surau",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001836031001794736265204866153034585802MY5916SURAU BATU GARAM6011TANAH MERAH6105175006304EF4B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 421,
    name: "JK Masjid Mukim Paloh Rawa",
    category: "others",
    state: "Kelantan",
    city: "Machang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000002264031001997655335204866153034585802MY5923JK MJD MUKIM PALOH RAWA6007MACHANG6105185006304B2AE",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 422,
    name: "Tahfiz Al Quran Tanah Merah",
    category: "others",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000022740311011293373575204829953034585802MY5923TAHFIZ AL QURAN T.MERAH6011TANAH MERAH6105175006304801B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 423,
    name: "Madrasah Pak Su Lah",
    category: "others",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003115031001993194505204866153034585802MY5919MADRASAH PAK SU LAH6011TANAH MERAH61051750063044EB9",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 424,
    name: "Pondok Lebai Leh",
    category: "others",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003487031001451716015204866153034585802MY5916PONDOK LEBAI LEH6011TANAH MERAH610517500630408D1",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 425,
    name: "Masjid Ibnu Sina",
    category: "mosque",
    state: "Kelantan",
    city: "Tanah Merah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004032031001991666495204866153034585802MY5916MASJID IBNU SINA6011TANAH MERAH61051750063044EC6",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 426,
    name: "Masjid Tengku Abdullah Al Hajj", // TODO: Got two of this name, at Balok and at Dong
    category: "mosque",
    state: "Pahang",
    city: "Kuantan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000216031001998757775204866153034585802MY5925MJD TENGKU ABDULLAH ALHAJ6007KUANTAN610526100630438C6",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 427,
    name: "Masjid Sultan Ahmad Shah",
    category: "mosque",
    state: "Pahang",
    city: "Kuantan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000219031001393770675204866153034585802MY5924MASJID SULTAN AHMAD SHAH6007KUANTAN61052510063040B81",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 428,
    name: "Maahad Tahfiz Muhammadi",
    category: "others",
    state: "Pahang",
    city: "Kuantan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000229031001346734945204866153034585802MY5923MAAHAD TAHFIZ MUHAMMADI6007KUANTAN61052515063043238",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 429,
    name: "Surau Tajul Akhbar",
    category: "surau",
    state: "Pahang",
    city: "Kuantan",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000005890311011132374165204866153034585802MY5918SURAU TAJUL AKHBAR6007KUANTAN6105252006304AC0C",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 430,
    name: "Surau Ar Raudhah IM 13",
    category: "surau",
    state: "Pahang",
    city: "Kuantan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000642031001398068765204866153034585802MY5922SURAU AR RAUDHAH IM 136007KUANTAN6105252006304B2A2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 431,
    name: "Berkat",
    category: "others",
    state: "Pahang",
    city: "Kuantan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001065031001995977325204533153034585802MY5906BERKAT6007KUANTAN61052520063047D31",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 432,
    name: "Masjid Abu Bakar Mentakab",
    category: "mosque",
    state: "Pahang",
    city: "Mentakab",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000044031001939121195204866153034585802MY5925MASJID ABU BAKAR MENTAKAB6008MENTAKAB61052840063043231",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 433,
    name: "Masjid Kampung Chatin",
    category: "mosque",
    state: "Pahang",
    city: "Mentakab",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000079031001696065105204866153034585802MY5916MASJID KG CHATIN6008MENTAKAB6105284006304E644",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 434,
    name: "Masjid Kampung Raja Songsang",
    category: "mosque",
    state: "Pahang",
    city: "Temerloh",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000078031001998335435204866153034585802MY5923MASJID KG RAJA SONGSANG6008TEMERLOH6105280006304664A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 435,
    name: "KK Masjid Kampung Chatin",
    category: "others",
    state: "Pahang",
    city: "Mentakab",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000002407031001696065705204866153034585802MY5916KK MJD KG CHATIN6008MENTAKAB61052840063041642",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 436,
    name: "KK Masjid Sri Semantan",
    category: "others",
    state: "Pahang",
    city: "Temerloh",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000002408031001995520615204866153034585802MY5919KK MJD SRI SEMANTAN6008TEMERLOH6105280006304ABDC",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 437,
    name: "Masjid At-Taqwa Pekan",
    category: "mosque",
    state: "Pahang",
    city: "Pekan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000191031001998991985204866153034585802MY5921MASJID AT-TAQWA PEKAN6005PEKAN61052660063042483",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 438,
    name: "Masjid Kampong Padang Polo",
    category: "mosque",
    state: "Pahang",
    city: "Pekan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000192031001393887305204866153034585802MY5923MJD KAMPONG PADANG POLO6005PEKAN61052660063042446",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 439,
    name: "Masjid Kampung Acheh Pekan",
    category: "mosque",
    state: "Pahang",
    city: "Pekan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000223031001393444055204866153034585802MY5921MASJID KG ACHEH PEKAN6005PEKAN6105266006304CBAB",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 440,
    name: "Masjid Kampung Pulau Serai",
    category: "mosque",
    state: "Pahang",
    city: "Pekan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000245031001296902455204866153034585802MY5921MASJID KG PULAU SERAI6005PEKAN61052660063043645",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 441,
    name: "DRB Hicom University",
    category: "others",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000657031001987093575204533153034585802MY5920DRB HICOM UNIVERSITY6009SHAH ALAM6105402206304E335",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 442,
    name: "Surau Al-Rahimah",
    category: "surau",
    state: "Pahang",
    city: "Pekan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000960031001987093575204866153034585802MY5916SURAU AL-RAHIMAH6005PEKAN61052660763047808",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 443,
    name: "Masjid Baru D Temerloh",
    category: "mosque",
    state: "Pahang",
    city: "Temerloh",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000011031001483288915204866153034585802MY5922MASJID BARU D TEMERLOH6008TEMERLOH6105280006304A0C0",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 444,
    name: "Masjid Abu Bakar Temerloh",
    category: "mosque",
    state: "Pahang",
    city: "Temerloh",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000829031001691666085204866153034585802MY5922MJD ABU BAKAR TEMERLOH6008TEMERLOH61052800063045877",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 445,
    name: "Surau Al Marjan",
    category: "surau",
    state: "Pahang",
    city: "Temerloh",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001062031001450863535204866153034585802MY5915SURAU AL MARJAN6008TEMERLOH61052800063041CE2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 446,
    name: "Surau Taman Merbau Indah",
    category: "surau",
    state: "Pahang",
    city: "Triang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001061031001996507475204866153034585802MY5924SURAU TAMAN MERBAU INDAH6006TRIANG61052830063046AB3",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/MasjidAlMuqarrabinTamanAngsanaKulim/
    id: 447,
    name: "Masjid Al-Muqarrabin Kariah Taman Angsana",
    category: "mosque",
    state: "Kedah",
    city: "Kulim",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000550031001952753695204866153034585802MY5920MASJID AL MUQARRABIN6005KULIM61050900063043C6B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 448,
    name: "Masjid Ibnu Abbas Pengkalan Nyireh",
    category: "mosque",
    state: "Terengganu",
    city: "Besut",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000023031001391825775204866153034585802MY5925MJD IBNU ABBAS PKL NYIREH6005BESUT61052220063041F9F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 449,
    name: "Masjid Kampung Teluk Bayu",
    category: "mosque",
    state: "Terengganu",
    city: "Besut",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000026031001995539995204866153034585802MY5925MASJID KAMPUNG TELUK BAYU6005BESUT61052220063041F8F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 450,
    name: "Masjid Kampung Nyiur Tujuh",
    category: "mosque",
    state: "Terengganu",
    city: "Besut",
    qrImage: "",
    qrContent:
      "00020201021126600014A000000615000101065641670215QRMID000000002503090173993555204866153034585802MY5921MASJID KG NYIUR TUJUH6005BESUT61052220063047CFC",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 451,
    name: "Tabung Khairat Kematian",
    category: "others",
    state: "Terengganu",
    city: "Jerteh",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001020031001993474755204866153034585802MY5923TABUNG KHAIRAT KEMATIAN6005BESUT61052200063045B8E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 452,
    name: "Masjid Nasiruddin Shah",
    category: "mosque",
    state: "Terengganu",
    city: "Kampung Raja",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001139031001393714145204866153034585802MY5922MASJID NASIRUDDIN SHAH6007KG RAJA6105222006304CB5B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 453,
    name: "Masjid Kampung Awek Darau",
    category: "mosque",
    state: "Terengganu",
    city: "Jerteh",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001380031001993405065204866153034585802MY5920MASJID KG AWEK DARAU6006JERTEH610522000630443BA",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 454,
    name: "Masjid Kampong Amer",
    category: "mosque",
    state: "Terengganu",
    city: "Kg Raja",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004524031001696040885204866153034585802MY5919MASJID KAMPONG AMER6007KG RAJA6105222006304DB6A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 455,
    name: "Masjid Jamek Layang-Layangan",
    category: "mosque",
    state: "W.P Labuan",
    city: "Labuan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000064031001385621025204866153034585802MY5925MJD JAMEK LAYANG-LAYANGAN6006LABUAN6105870006304C602",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 456,
    name: "Masjid Al-Falah Kampung Bukit Kalam",
    category: "mosque",
    state: "W.P Labuan",
    city: "Labuan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000172031001385994825204866153034585802MY5925MJD AL-FALAH KG BKT KALAM6006LABUAN6105870196304D33A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 457,
    name: "Masjid Jamek An-Nur",
    category: "mosque",
    state: "W.P. Labuan",
    city: "Labuan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000221031001936889315204866153034585802MY5919MASJID JAMEK AN-NUR6006LABUAN6105870296304ECE4",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 458,
    name: "Surau Al-Mubarakah",
    category: "surau",
    state: "W.P. Labuan",
    city: "Labuan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000268031001385442325204866153034585802MY5918SURAU AL-MUBARAKAH6009WP LABUAN6105870176304BB67",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 459,
    name: "Surau Kampung Kilan Kasim",
    category: "surau",
    state: "W.P. Labuan",
    city: "Labuan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000337031001982247605204866153034585802MY5920SURAU KG KILAN KASIM6006LABUAN6105870306304E239",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 460,
    name: "Surau Baitul Makmur",
    category: "surau",
    state: "W.P. Labuan",
    city: "Labuan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000338031001684042525204866153034585802MY5919SURAU BAITUL MAKMUR6006LABUAN61058700863041B07",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 461,
    name: "PDK Labuan",
    category: "others",
    state: "W.P. Labuan",
    city: "Labuan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000407031001986304455204533153034585802MY5910PDK LABUAN6006LABUAN6105870076304E652",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 462,
    name: "Surau Al Irfaan",
    category: "surau",
    state: "W.P. Labuan",
    city: "Labuan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003636031001355137565204866153034585802MY5919SURAU AL IRFAAN KML6015 WILAYAH PERSEK610587027630402F2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 463,
    name: "Masjid Bandaraya Kota Kinabalu",
    category: "mosque",
    state: "Sabah",
    city: "Kota Kinabalu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000208031001385808055204866153034585802MY5921MASJID BANDARAYA KK-26013KOTA KINABALU61058800063043328",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 464,
    name: "Akademi Quranis",
    category: "others",
    state: "Sabah",
    city: "Kota Kinabalu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000209031001789903465204866153034585802MY5915AKADEMI QURANIS6013KOTA KINABALU610588000630404D3",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 465,
    name: "Masjid Al Kauthar Tanjung Aru",
    category: "mosque",
    state: "Sabah",
    city: "Kota Kinabalu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000348031001435315375204866153034585802MY5924MASJID AL KAUTHAR TG.ARU6013KOTA KINABALU6105888586304CFD4",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 466,
    name: "Masjid Daerah Putatan",
    category: "mosque",
    state: "Sabah",
    city: "Putatan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000989031001280365555204866153034585802MY5921MASJID DAERAH PUTATAN6007PUTATAN61058220063042A94",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 467,
    name: "Masjid Nurul Ihsan",
    category: "mosque",
    state: "Sabah",
    city: "Kota Kinabalu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001485031001953153135204866153034585802MY5918MASJID NURUL IHSAN6013KOTA KINABALU6105887256304FAFE",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 468,
    name: "Masjid Taman Wawasan Tawau",
    category: "mosque",
    state: "Sabah",
    city: "Tawau",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000121031001388013155204866153034585802MY5924MASJID TMN WAWASAN TAWAU6005TAWAU6105910006304737B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 469,
    name: "Masjid Az-Zaeemah BSI Tawau",
    category: "mosque",
    state: "Sabah",
    city: "Tawau",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000156031001958185325204866153034585802MY5924MJD AZ-ZAEEMAH BSI TAWAU6005TAWAU610591000630445A1",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 470,
    name: "Surau Al-Amin KBG",
    category: "surau",
    state: "Johor",
    city: "Muar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000002365031001260719205204866153034585802MY5913SURAU AL AMIN6004MUAR61058400063046C95",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 471,
    name: "Madrasah Ad-Diniah Ar-Rahmaniah",
    category: "others",
    state: "Sabah",
    city: "Tawau",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000361031001981132335204866153034585802MY5925MD AD-DINIAH AR-RAHMANIAH6005TAWAU6105910086304A9CC",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 472,
    name: "Masjid Al Ubudiah Brumas",
    category: "mosque",
    state: "Sabah",
    city: "Tawau",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000559031001688197635204866153034585802MY5924MASJID AL UBUDIAH BRUMAS6005TAWAU61059101963044AE1",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 473,
    name: "Masjid Bandar Tawau",
    category: "mosque",
    state: "Sabah",
    city: "Tawau",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000969031001131616705204866153034585802MY5919MASJID BANDAR TAWAU6005TAWAU6105910006304E5A1",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 474,
    name: "Jawatankuasa Masjid Babus Saadah",
    category: "mosque",
    state: "Sabah",
    city: "Tawau",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000976031001388563985204866153034585802MY5923JTK MASJID BABUS SAADAH6005TAWAU61059100063049BF1",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 475,
    name: "Masjid Ukhwatul Imarah",
    category: "mosque",
    state: "Sabah",
    city: "Tawau",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001036031001987120775204866153034585802MY5922MASJID UKHWATUL IMARAH6005TAWAU6105910006304ACFC",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 476,
    name: "Sumbangan Masjid Al Falah",
    category: "mosque",
    state: "Sabah",
    city: "Tawau",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001058031001688132375204866153034585802MY5921SMBGN MASJID AL FALAH6005TAWAU61059100063047078",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 477,
    name: "Surau Baburrahmah",
    category: "surau",
    state: "Sabah",
    city: "Tawau",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001173031001982224905204866153034585802MY5917SURAU BABURRAHMAH6005TAWAU61059100063043593",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 478,
    name: "Surau At-Taufiqiah",
    category: "surau",
    state: "Sabah",
    city: "Tawau",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000011720311011141966465204866153034585802MY5918SURAU AT-TAUFIQIAH6005TAWAU6105910006304426F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 479,
    name: "Masjid Cahaya Raudhah",
    category: "mosque",
    state: "Sabah",
    city: "Tawau",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001372031001283489005204866153034585802MY5921MASJID CAHAYA RAUDHAH6005TAWAU61059100063044928",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 480,
    name: "Madrasah Wadi An-Nur",
    category: "others",
    state: "Sabah",
    city: "Tawau",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000017490311011178327705204866153034585802MY5920MADRASAH WADI AN-NUR6005TAWAU61059102163040101",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 481,
    name: "Surau As-Syifa",
    category: "surau",
    state: "Sabah",
    city: "Tawau",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004464031001683189285204866153034585802MY5914SURAU AS-SYIFA6005TAWAU6105910076304F79F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 482,
    name: "Masjid Al-Amin Kuala Tatau",
    category: "mosque",
    state: "Sarawak",
    city: "Bintulu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000074031001988567955204866153034585802MY5922MASJID AL-AMIN K TATAU6007BINTULU6105970006304E5C2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 483,
    name: "Masjid Darul Khairat Bakam",
    category: "mosque",
    state: "Sarawak",
    city: "Miri",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000406031001985521445204866153034585802MY5923MJD DARUL KHAIRAT BAKAM6004MIRI61059800063041BB2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 484,
    name: "Surau Darus Salam",
    category: "surau",
    state: "Sarawak",
    city: "Miri",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000501031001458190795204866153034585802MY5917SURAU DARUS SALAM6004MIRI6105980006304B16A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 485,
    name: "Masjid Nur Hijrah",
    category: "mosque",
    state: "Sarawak",
    city: "Miri",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000503031001384065355204866153034585802MY5917MASJID NUR HIJRAH6004MIRI6105980006304ADEA",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 486,
    name: "JKP Masjid Nur Sa'adah",
    category: "mosque",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000030031001356147755204866153034585802MY5922JKP MASJID NUR SA'ADAH6007KUCHING6105930506304A409",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 487,
    name: "Masjid Al-Abyad Matang Jaya",
    category: "mosque",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000095031001381674285204866153034585802MY5924MJD AL-ABYAD MATANG JAYA6007KUCHING61059305063048C8B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 488,
    name: "Masjid Darul Husni Warrahmah",
    category: "mosque",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000104031001985755675204866153034585802MY5925MJD DARUL HUSNI WARRAHMAH6007KUCHING610593050630448B7",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 489,
    name: "Masjid Nurir Rahmani",
    category: "mosque",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000144031001988557475204866153034585802MY5920MASJID NURIR RAHMANI6007KUCHING610593050630498E6",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 490,
    name: "Masjid Darul Farhanah",
    category: "mosque",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000145031001381940235204866153034585802MY5921MASJID DARUL FARHANAH6007KUCHING6105934006304108B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 491,
    name: "Surau Istiqomah",
    category: "surau",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000146031001686287845204866153034585802MY5915SURAU ISTIQOMAH6007KUCHING610593050630468A2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 492,
    name: "Masjid Darul Iman",
    category: "mosque",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000147031001289877295204866153034585802MY5917MASJID DARUL IMAN6007KUCHING6105932506304779D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 493,
    name: "Al Madrasah Al Islamiah",
    category: "others",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000272031001988625405204866153034585802MY5923AL MADRASAH AL ISLAMIAH6007KUCHING61059305063049357",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 494,
    name: "Madrasah Jannatul Khairan",
    category: "others",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000273031001982623465204866153034585802MY5924MDRASAH JANNATUL KHAIRAN6007KUCHING6105930506304B01C",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 495,
    name: "Masjid Demak Baru",
    category: "mosque",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000284031001981730015204866153034585802MY5917MASJID DEMAK BARU6007KUCHING6105934006304CB6E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 496,
    name: "Pusat Pengajian Tafaqquh",
    category: "others",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000409031001383198225204866153034585802MY5924PUSAT PENGAJIAN TAFAQQUH6007KUCHING6105930506304C636",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 497,
    name: "Masjid Solahuddin Al-Ayubbi",
    category: "mosque",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000998031001392774145204866153034585802MY5924MJD SOLAHUDDIN AL-AYUBBI6007KUCHING6105936776304E6FA",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 498,
    name: "Sekolah Tahfiz Ar Razi",
    category: "others",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000010180311011193871385204829953034585802MY5922SEKOLAH TAHFIZ AR RAZI6007KUCHING6105930506304562E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 499,
    name: "Pembinaan Surau Darul Huda",
    category: "surau",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001720031001285549565204866153034585802MY5924PMBNAAN SURAU DARUL HUDA6007KUCHING61059305063048DEB",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 500,
    name: "Surau Baitul Makmur",
    category: "surau",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003055031001285587545204866153034585802MY5919SURAU BAITUL MAKMUR6007KUCHING6105930506304CA67",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 501,
    name: "Sri Raudhatul Jannah",
    category: "others",
    state: "Kedah",
    city: "Kulim",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000087031001946599065204866153034585802MY5920SRI RAUDHATUL JANNAH6005KULIM6105090006304AB2D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 502,
    name: "JK Qaryah Masjid Taman Ria Jaya", // Masjid Sultan Abdul Halim
    category: "others",
    state: "Kedah",
    city: "Sungai Petani",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000092031001644091795204866153034585802MY5925JK QARYAH MJD TM RIA JAYA6013SUNGAI PETANI61050800063042D2F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 503,
    name: "Khairat Masjid Al Jamiul Makmur",
    category: "mosque",
    state: "Kedah",
    city: "Kulim",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000105031001944217835204866153034585802MY5925KRAT MJD AL JAMIUL MAKMUR6005KULIM61050900063048E91",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 504,
    name: "Masjid Al-Ghufran Akar Peluru",
    category: "mosque",
    state: "Kedah",
    city: "Alor Setar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000133031001247126545204866153034585802MY5925MJ AL-GHUFRAN AKAR PELURU6010ALOR SETAR6105050006304DFE9",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 505,
    name: "Kariah Masjid Lunas",
    category: "mosque",
    state: "Kedah",
    city: "Kulim",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000138031001988880605204866153034585802MY5919KARIAH MASJID LUNAS6005KULIM610509000630411DF",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 506,
    name: "Masjid Taman Ria Jaya",
    category: "mosque",
    state: "Kedah",
    city: "Sungai Petani",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000160031001644091795204866153034585802MY5921MASJID TAMAN RIA JAYA6013SUNGAI PETANI61050800063042BD8",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 507,
    name: "Masjid Sultanah Bahiyah",
    category: "mosque",
    state: "Kedah",
    city: "Alor Setar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000193031001240855405204866153034585802MY5923MASJID SULTANAH BAHIYAH6010ALOR SETAR610505350630407A4",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 508,
    name: "Masjid Abdul Rahman",
    category: "mosque",
    state: "Kedah",
    city: "Sungai Petani",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000195031001941474495204866153034585802MY5919MASJID ABDUL RAHMAN6013SUNGAI PETANI6105080006304E0CD",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 509,
    name: "Masjid Al Irfan Derga",
    category: "mosque",
    state: "Kedah",
    city: "Alor Setar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000199031001941358595204866153034585802MY5921MASJID AL IRFAN DERGA6010ALOR SETAR610505300630408BF",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 510,
    name: "Masjid Tunku Abd Malik",
    category: "mosque",
    state: "Kedah",
    city: "Alor Setar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000270031001256192135204866153034585802MY5922MASJID TUNKU ABD MALIK6010ALOR SETAR6105051506304F16E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 511,
    name: "Masjid Al Huda Pokok Sena Dalam",
    category: "mosque",
    state: "Kedah",
    city: "Pokok Sena",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000307031001342304565204866153034585802MY5924MJD AL HUDA P.SENA DALAM6010POKOK SENA61050640063040619",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 512,
    name: "Masjid Al Huda",
    category: "mosque",
    state: "Kedah",
    city: "Kulim",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000005070311011242617885204866153034585802MY5914MASJID AL HUDA6005KULIM6105090006304E877",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 513,
    name: "Masjid Jamek Pekan Merbok",
    category: "mosque",
    state: "Kedah",
    city: "Kulim",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000508031001320023475204866153034585802MY5925MASJID JAMEK PEKAN MERBOK6005KULIM61050900063042AF7",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 514,
    name: "Surau Al Hannan",
    category: "surau",
    state: "Pulau Pinang",
    city: "Bukit Mertajam",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000742031001946170645204866153034585802MY5915SURAU AL HANNAN6014BUKIT MERTAJAM6105140006304C59C",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 515,
    name: "Darul Ulum Ihya Ulumuddim",
    category: "others",
    state: "Kedah",
    city: "Alor Setar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000744031001759165665204533153034585802MY5925DARUL ULUM IHYA ULUMUDDIM6010ALOR SETAR6105065006304135C",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 516,
    name: "Masjid Al Ariffin",
    category: "mosque",
    state: "Kedah",
    city: "Alor Setar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000749031001944757085204866153034585802MY5917MASJID AL ARIFFIN6010ALOR SETAR6105053006304BF67",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 517,
    name: "Surau Nur Hidayah",
    category: "surau",
    state: "Kedah",
    city: "Alor Setar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001095031001747244665204866153034585802MY5917SURAU NUR HIDAYAH6010ALOR SETAR61050564063043D1A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 518,
    name: "Masjid Ar-Raudhah Perlis",
    category: "mosque",
    state: "Perlis",
    city: "Kangar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000028031001941070335204866153034585802MY5924MASJID AR-RAUDHAH PERLIS6006KANGAR61050100063040F60",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 519,
    name: "Madi Kampung Jejawi Dlm Perlis",
    category: "others",
    state: "Perlis",
    city: "Arau",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000165031001945666425204533153034585802MY5925MADI KG JEJAWI DLM PERLIS6004ARAU6105026006304D138",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 520,
    name: "Masjid Nurus Said Santan",
    category: "mosque",
    state: "Perlis",
    city: "Kangar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000205031001343567085204866153034585802MY5924MASJID NURUS SAID SANTAN6006KANGAR6105010006304DAF9",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 521,
    name: "Masjid Alwi Kangar",
    category: "mosque",
    state: "Perlis",
    city: "Kangar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000212031001945485625204866153034585802MY5918MASJID ALWI KANGAR6006KANGAR61050100063041174",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 522,
    name: "Surau Pauh Putra",
    category: "surau",
    state: "Perlis",
    city: "Arau",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000031200311011373942275204866153034585802MY5916SURAU PAUH PUTRA6004ARAU61050260063040579",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 523,
    name: "Wakaf Masjid Unimap",
    category: "mosque",
    state: "Perlis",
    city: "Kangar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003342031001256543125204866153034585802MY5919WAKAF MASJID UNIMAP6006KANGAR610501000630425E4",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 524,
    name: "Surau As Solihin",
    category: "surau",
    state: "Pulau Pinang",
    city: "Jelutong Penang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000070031001258885425204866153034585802MY5916SURAU AS SOLIHIN6015JELUTONG PENANG610511600630421CC",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 525,
    name: "Masjid Umar Abdul Aziz",
    category: "mosque",
    state: "Pulau Pinang",
    city: "Batu Maung",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000136031001254252505204866153034585802MY5922MASJID UMAR ABDUL AZIZ6010BATU MAUNG61051196063041EAB",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 526,
    name: "Masjid Alimsah Waley",
    category: "mosque",
    state: "Pulau Pinang",
    city: "Georgetown",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000153031001655136755204866153034585802MY5920MASJID ALIMSAH WALEY6010GEORGETOWN61051020063047562",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 527,
    name: "Masjid Taman Sungai Dua Utama",
    category: "mosque",
    state: "Pulau Pinang",
    city: "Butterworth",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000251031001821297485204866153034585802MY5925MASJID TAMAN SG DUA UTAMA6011BUTTERWORTH6105138006304F24D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/MasjidJamekSungaiGelugor/?locale=ms_MY
    id: 528,
    name: "Masjid Jamek Sungai Gelugor",
    category: "mosque",
    state: "Pulau Pinang",
    city: "Gelugor",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000311031001945744855204866153034585802MY5923MASJID JAMEK SG.GELUGOR6007GELUGOR61051170063049D41",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.3708334731979335, 100.31075690364696],
  },
  {
    id: 529,
    name: "Masjid Al Malik Khalid USM",
    category: "mosque",
    state: "Pulau Pinang",
    city: "Gelugor",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000464031001340870015204866153034585802MY5919MASJID AL MALIK USM6012PULAU PINANG61051180063041F3B",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.353697477717238, 100.30203775098181],
  },
  {
    id: 530,
    name: "Surau Al-Islam",
    category: "surau",
    state: "Pulau Pinang",
    city: "Perai",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000491031001753183815204866153034585802MY5915SURAU AL- ISLAM6005PERAI61051370063044741",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 531,
    name: "Wakaf Masjid Papan Baru",
    category: "mosque",
    state: "Pulau Pinang",
    city: "Pulau Pinang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000516031001941356745204866153034585802MY5923WAKAF MASJID PAPAN BARU6012PULAU PINANG61051350063048DA8",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 532,
    name: "Lembaga Masjid Haji Saad",
    category: "mosque",
    state: "Pulau Pinang",
    city: "Bukit Mertajam",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001108031001931529155204866153034585802MY5924LEMBAGA MASJID HAJI SAAD6014BUKIT MERTAJAM6105140006304BE2A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 533,
    name: "Ma'hadul Azhar",
    category: "others",
    state: "Pulau Pinang",
    city: "Butterworth",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001166031001040610445204866153034585802MY5914MA'HADUL AZHAR6011BUTTERWORTH610513050630463C8",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 534,
    name: "Surau Bandar Bayan Baru",
    category: "surau",
    state: "Pulau Pinang",
    city: "Bayan Baru",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001310031001240994965204866153034585802MY5923SURAU BANDAR BAYAN BARU6010BAYAN BARU6105119506304E567",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 535,
    name: "Surau Nurul Sakinah",
    category: "surau",
    state: "Pulau Pinang",
    city: "Nibong Tebal",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001407031001241341555204866153034585802MY5919SURAU NURUL SAKINAH6012NIBONG TEBAL6105143006304108F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/masjidalmuhajirinbandarseberangjaya/
    id: 536,
    name: "Masjid Al Muhajirin Bandar Seberang Jaya",
    category: "mosque",
    state: "Pulau Pinang",
    city: "Perai",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001645031001944497275204866153034585802MY5925MSJD JAMEK SEBERANG JAYA 6005PERAI61051370063041472",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 537,
    name: "Surau Al Fayyadh",
    category: "surau",
    state: "Kedah",
    city: "Kepala Batas",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003494031001942008615204866153034585802MY5916SURAU AL FAYYADH6012KEPALA BATAS6105062006304ACA9",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 538,
    name: "Surau Bayu Nyaman",
    category: "surau",
    state: "Pulau Pinang",
    city: "Bayan Lepas",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003588031001939018725204866153034585802MY5917SURAU BAYU NYAMAN6011BAYAN LEPAS6105119006304D0CC",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 539,
    name: "Masjid Felda Redong",
    category: "mosque",
    state: "Johor",
    city: "Segamat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000004031001979649515204866153034585802MY5919MASJID FELDA REDONG6007SEGAMAT610585000630412D4",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 540,
    name: "Masjid Jamek Gemereh",
    category: "mosque",
    state: "Johor",
    city: "Segamat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000009031001974718265204866153034585802MY5920MASJID JAMEK GEMEREH6007SEGAMAT61058500063041C61",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 541,
    name: "Masjid Kampung Bukit Tunggal",
    category: "mosque",
    state: "Johor",
    city: "Segamat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000013031001272064895204866153034585802MY5921MASJID KG BKT TUNGGAL6007SEGAMAT6105852006304E248",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 542,
    name: "Masjid Kampung Felda Linggiu",
    category: "mosque",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000014031001974981565204866153034585802MY5923MASJID KG FELDA LINGGIU6011KOTA TINGGI61058190063042C7B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 543,
    name: "Masjid An'nur",
    category: "mosque",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000017031001376209315204866153034585802MY5913MASJID AN'NUR6011KOTA TINGGI610581907630454A4",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 544,
    name: "Madrasah Tahfiz Al Johari",
    category: "others",
    state: "Johor",
    city: "Batu Pahat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000045031001923238015204866153034585802MY5925MADRASAH TAHFIZ AL JOHARI6010BATU PAHAT6105864006304B132",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 545,
    name: "Masjid Jamek An Najah",
    category: "mosque",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000053031001270444085204866153034585802MY5921MASJID JAMEK AN NAJAH6011KOTA TINGGI6105819006304E1BC",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 546,
    name: "Tabung Masjid Baru Kampung Batu 4",
    category: "mosque",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000054031001374276165204866153034585802MY5925TBG MASJID BARU KG BATU 46011KOTA TINGGI61058190063040380",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 547,
    name: "Masjid Jamek Seri Beroleh",
    category: "mosque",
    state: "Johor",
    city: "Batu Pahat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000058031001985868855204866153034585802MY5925MASJID JAMEK SERI BEROLEH6010BATU PAHAT6105830006304952A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 548,
    name: "Masjid Jamek Tenang Stesen",
    category: "others",
    state: "Johor",
    city: "Segamat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000063031001978968605204866153034585802MY5923MJD JAMEK TENANG STESEN6007SEGAMAT6105850306304880F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 549,
    name: "Masjid Miftahul Jannah",
    category: "mosque",
    state: "Johor",
    city: "Senai",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000107031001947639825204866153034585802MY5922MASJID MIFTAHUL JANNAH6005SENAI61058140063042560",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 550,
    name: "Masjid Jamik Kampung Lukut Kota Tinggi",
    category: "mosque",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000108031001973012715204866153034585802MY5921MJD JAMIK KG LUKUT KT6011KOTA TINGGI6105819006304BA75",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 551,
    name: "Masjid Al-Abrar Bandar Sri Perani",
    category: "mosque",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000111031001974258515204866153034585802MY5925MJ ALABRAR BDR SRI PERANI6011KOTA TINGGI61058190063044117",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/p/Masjid-Al-Muttaqin-Taman-Kota-Jaya-100076271775236/
    id: 552,
    name: "Masjid Al-Muttaqin Taman Kota Jaya",
    category: "mosque",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000112031001971840075204866153034585802MY5925MJ AL MUTTAQIN TM KT JAYA6011KOTA TINGGI61058190063046371",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 553,
    name: "Masjid Al Falah Taman Desa Jaya",
    category: "mosque",
    state: "Johor",
    city: "Johor Bahru",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000115031001866647365204866153034585802MY5925MJD AL FALAH TM DESA JAYA6011JOHOR BAHRU610581100630429A2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 554,
    name: "Masjid Jamek Jelutong",
    category: "mosque",
    state: "Johor",
    city: "Parit Raja",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000118031001276574045204866153034585802MY5921MASJID JAMEK JELUTONG6010PARIT RAJA6105864006304D339",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 555,
    name: "Surau Satu Kampung Sg Nibong",
    category: "surau",
    state: "Johor",
    city: "Batu Pahat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000120031001378534035204866153034585802MY5923SURAU SATU KG SG NIBONG6010BATU PAHAT61058360063047818",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 556,
    name: "Masjid Kampung Parit Bilal",
    category: "mosque",
    state: "Johor",
    city: "Batu Pahat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000148031001975705955204866153034585802MY5921MASJID KG PARIT BILAL6010BATU PAHAT6105830506304FA55",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/p/Masjid-Sultan-Ibrahim-UTHM-100064622412210/
    id: 557,
    name: "Masjid Sultan Ibrahim, UTHM",
    category: "mosque",
    state: "Johor",
    city: "Parit Raja",
    qrImage: "",
    qrContent:
      "00020201021126600014A000000615000101065641670215QRMID000000015703090745370655204866153034585802MY5911MASJID UTHM6010BATU PAHAT6105864006304A47E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/groups/mjtsaw/?locale=ms_MY
    id: 558,
    name: "Masjid Jamek Tan Sri Ainuddin Wahid (MJTSAW)",
    category: "mosque",
    state: "Johor",
    city: "Skudai",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000158031001374839675204866153034585802MY5925MJ JAMEK TS AINUDDINWAHID6006SKUDAI610581300630462CE",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 559,
    name: "Masjid As'saadah",
    category: "mosque",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000178031001978930305204866153034585802MY5916MASJID AS'SAADAH6011KOTA TINGGI61058190063041E4B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 560,
    name: "Surau Al-Mubaraq Kampung Baru Pasak",
    category: "surau",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000180031001776905105204866153034585802MY5925S ALMUBARAQ KG BARU PASAK6011KOTA TINGGI61058190063041115",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 561,
    name: "Masjid Raudhatul Jannah",
    category: "mosque",
    state: "Johor",
    city: "Segamat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000182031001274908545204866153034585802MY5923MASJID RAUDHATUL JANNAH6007SEGAMAT61058500063044D9F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 562,
    name: "Masjid Jamek Kampung Tengah",
    category: "mosque",
    state: "Johor",
    city: "Kluang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000183031001977025415204866153034585802MY5922MASJID JAMEK KG TENGAH6006KLUANG6105860006304B1A1",
    supportedPayment: ["duitnow", "tng"],
  },
  // hakimi hamdan, whatsapp
  {
    id: 563,
    name: "Masjid UMPSA (Yayasan UMPSA)",
    category: "mosque",
    state: "Pahang",
    city: "Pekan",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2089319031000000000005204729953034585802MY5913YAYASAN UMPSA6006PAHANG6304E1D9",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 564,
    name: "Akademi Tahfiz Darul Ameer",
    category: "others",
    state: "Johor",
    city: "Kulai",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000204031001971680865204866153034585802MY5925AKADEMI TAHFIZ DARULAMEER6005KULAI610581000630486EA",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/MASJIDABIDINSRISKUDAI/
    id: 565,
    name: "Masjid Abidin, Taman Sri Skudai",
    category: "mosque",
    state: "Johor",
    city: "Johor Bahru", // Skudai
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000217031001975404345204866153034585802MY5925MJD ABIDIN TMN SRI SKUDAI6006SKUDAI6105813006304C717",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/MasjidAtTaqwaTamanPulaiUtama/
    id: 566,
    name: "Masjid At-Taqwa Taman Pulai Utama",
    category: "mosque",
    state: "Johor",
    city: "Johor Bahru", // Skudai
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000233031001971152855204866153034585802MY5924MJD AT-TAQWA TMN PULAI U6006SKUDAI610580200630424E1",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 567,
    name: "Masjid Jamek Telok Sengat",
    category: "mosque",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000235031001975267895204866153034585802MY5925MASJID JAMEK TELOK SENGAT6011KOTA TINGGI61058190063042E3F",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 568,
    name: "Masjid Al-Huda Felda Air Tawar 3",
    category: "mosque",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000236031001276319475204866153034585802MY5924MASJID AL-HUDA FELDA AT36011KOTA TINGGI6105819006304A0DA",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 569,
    name: "Masjid Kampung Sulir",
    category: "mosque",
    state: "Johor",
    city: "Segamat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000239031001379913255204866153034585802MY5920MASJID KAMPUNG SULIR6007SEGAMAT61058500063049C6D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 570,
    name: "Masjid Ar Rahman Taman Putri",
    category: "mosque",
    state: "Johor",
    city: "Kulai",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000253031001971490285204866153034585802MY5923MJD AR RAHMAN TMN PUTRI6005KULAI6105810006304CD41",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 571,
    name: "Masjid Jamek Bandar Senai",
    category: "mosque",
    state: "Johor",
    city: "Senai",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000255031001975666005204866153034585802MY5925MASJID JAMEK BANDAR SENAI6005SENAI6105814006304F9B3",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://masjid.islam.gov.my/maklumatMasjidSurau?carian=&jenis=&negeri=&daerah=&masjidSurau=&page=477
    id: 572,
    name: "Masjid Jamek Kampung Melayu Batu 9",
    category: "mosque",
    state: "Johor",
    city: "Batu Pahat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000266031001271541345204866153034585802MY5923MJD JAMEK KG MELAYU BT96010AYER HITAM610586100630484DA",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://masjid.islam.gov.my/maklumatDetailMS/1/0103058
    id: 573,
    name: "Masjid Jamek Kampong Melayu",
    category: "mosque",
    state: "Johor",
    city: "Kluang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000267031001273727485204866153034585802MY5925MJD JAMEK KGMELAYU KLUANG6006KLUANG6105860006304065A",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 574,
    name: "Masjid Al Muhajirin Felda Selancar 2",
    category: "mosque",
    state: "Pahang",
    city: "Muadzam Shah",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000279031001370401975204866153034585802MY5925MJD AL-MUHAJIRIN F.SLCR 26012MUADZAM SHAH61052670063049B8B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 575,
    name: "Masjid An-Nur Felda Medoi",
    category: "mosque",
    state: "Johor",
    city: "Segamat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000287031001276945425204866153034585802MY5925MASJID AN-NUR FELDA MEDOI6007SEGAMAT6105850506304BD9C",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 576,
    name: "Masjid Makam Lubok Batu",
    category: "mosque",
    state: "Johor",
    city: "Segamat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000289031001977327425204866153034585802MY5923MASJID MAKAM LUBOK BATU6007SEGAMAT6105850006304D037",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 577,
    name: "Masjid India Johor Bahru",
    category: "mosque",
    state: "Johor",
    city: "Johor Bahru",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000309031001770024795204866153034585802MY5924MASJID INDIA JOHOR BAHRU6011JOHOR BAHRU610580000630414C2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 578,
    name: "Surau Riadhul Jannah Taman Pelangi",
    category: "surau",
    state: "Johor",
    city: "Segamat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000322031001960390005204866153034585802MY5925S RIADHUL JANNAH TPELANGI6007SEGAMAT610585000630488CD",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 579,
    name: "Surau Hasan Al Basri",
    category: "surau",
    state: "Johor",
    city: "Segamat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000339031001376523505204866153034585802MY5920SURAU HASAN AL BASRI6007SEGAMAT61058500063048491",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 580,
    name: "Masjid Jamek Tenang Station",
    category: "mosque",
    state: "Johor",
    city: "Segamat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000340031001978968605204300053034585802MY5922MJD JMK TENANG STATION6007SEGAMAT61058503063048C34",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 581,
    name: "Masjid Jamek Kampung Paya Pulai",
    category: "mosque",
    state: "Johor",
    city: "Segamat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000342031001975651515204866153034585802MY5921MJD JMK KG PAYA PULAI6007SEGAMAT61058500063041AFE",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 582,
    name: "B.tdbir Mj Jamek B.siput", // TODO: Check again, Masjid Jamek Kampung Sungai Siput?
    category: "others",
    state: "Johor",
    city: "Segamat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000343031001374343995204866153034585802MY5924B.TDBIR MJ JAMEK B.SIPUT6007SEGAMAT61058500063048893",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 583,
    name: "Pembangunan Surau An-Nur Desa Skudai",
    category: "surau",
    state: "Johor",
    city: "Skudai",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000383031001766768195204866153034585802MY5925PBGN SUR. AN-NUR D.SKUDAI6006SKUDAI61058130063049CD4",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 584,
    name: "Riyadus Solihin",
    category: "others",
    state: "Johor",
    city: "Batu Pahat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000396031001974291045204866153034585802MY5915RIYADUS SOLIHIN6010BATU PAHAT6105846006304E054",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 585,
    name: "Masjid Jamek Kampung Kenangan Tun Dr Ismail 1",
    category: "mosque",
    state: "Johor",
    city: "Muar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000509031001966673945204866153034585802MY5924MASJID KG KENANGAN TDI 16004MUAR61058410063049055",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 586,
    name: "Masjid Parit Bunga",
    category: "mosque",
    state: "Johor",
    city: "Tangkak",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000515031001236343305204866153034585802MY5918MASJID PARIT BUNGA6007TANGKAK61058400063043AD5",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 587,
    name: "Surau Nurul Yakin",
    category: "surau",
    state: "Johor",
    city: "Muar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000658031001762228425204866153034585802MY5917SURAU NURUL YAKIN6004MUAR610584000630472A4",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 588,
    name: "Surau Al Barakah Bakri B2",
    category: "surau",
    state: "Johor",
    city: "Muar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000665031001975056005204866153034585802MY5925SURAU AL BARAKAH BAKRI B26004MUAR6105840006304F5A4",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 589,
    name: "Madrasah Tahfiz Al Quran At Tanwiriah",
    category: "others",
    state: "Johor",
    city: "Muar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000711031001320843415204533153034585802MY5917MTAQ AT TANWIRIAH6004MUAR6105840006304E100",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 590,
    name: "Surau Ehsan",
    category: "surau",
    state: "Johor",
    city: "Johor",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000716031001965652055204866153034585802MY5911SURAU EHSAN6005JOHOR61058130063040ED1",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 591,
    name: "Maahad Tahfiz Al Quran Wa As Sunnah",
    category: "others",
    state: "Johor",
    city: "Kulai",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000738031001773653255204533153034585802MY5922M T AL QURAN AS SUNNAH6005KULAI6105810306304A3DB",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 592,
    name: "Surau Al Bani",
    category: "surau",
    state: "Johor",
    city: "Tangkak",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000755031001360754025204866153034585802MY5913SURAU AL BANI6007TANGKAK6105848006304CD1C",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 593,
    name: "Surau Al Husna Parit Unas",
    category: "surau",
    state: "Johor",
    city: "Muar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000791031001775127305204866153034585802MY5925SURAU AL HUSNA PARIT UNAS6004MUAR6105841506304E365",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 594,
    name: "Surau Al Hidayah Bakri",
    category: "surau",
    state: "Johor",
    city: "Muar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000818031001361089555204866153034585802MY5924SURAU AL HIDAYAH T.BAKRI6004MUAR610584000630476BD",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 595,
    name: "Pusat Kebajikan Anak-Anak Yatim Islam Muar",
    category: "others",
    state: "Johor",
    city: "Muar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000834031001374382105204866153034585802MY5925PK ANAK2 YATIM ISLAM MUAR6004MUAR6105840006304039E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 596,
    name: "Madrasah Khaujakan Muar",
    category: "others",
    state: "Johor",
    city: "Muar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000843031001939447665204533153034585802MY5914KHAUJAKAN MUAR6004MUAR6105840006304CE46",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 597,
    name: "Pusat Pengajian Al Quran Nurul Haq Lil Banat",
    category: "others",
    state: "Johor",
    city: "Kluang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000959031001371101435204866153034585802MY5924PPAQ NURUL HAQ LIL BANAT6006KLUANG6105860006304A162",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 598,
    name: "Surau Taman Skudai Indah",
    category: "surau",
    state: "Johor",
    city: "Skudai",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001004031001374412215204866153034585802MY5924SURAU TAMAN SKUDAI INDAH6006SKUDAI6105813006304643E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 599,
    name: "Surau Al Wahidah",
    category: "surau",
    state: "Johor",
    city: "Muar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001522031001388079445204866153034585802MY5916SURAU AL WAHIDAH6004MUAR6105840006304096C",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 600,
    name: "Dana Klinik Waqaf An-Nur",
    category: "others",
    state: "Johor",
    city: "Johor Bahru",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001735031001972736265204866153034585802MY5924DANA KLINIK WAQAF AN-NUR6011JOHOR BAHRU61058000063042A40",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 601,
    name: "Masjid Jamek Ar Rahman",
    category: "mosque",
    state: "Johor",
    city: "Kulai",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000002266031001371701715204866153034585802MY5922MASJID JAMEK AR RAHMAN6005KULAI61058145063041851",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 602,
    name: "Masjid Jamik Labis",
    category: "mosque",
    state: "Johor",
    city: "Labis",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003339031001926372065204866153034585802MY5918MASJID JAMIK LABIS6005LABIS6105853006304AEFA",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 603,
    name: "Masjid Al Baroqah Sri Paya",
    category: "mosque",
    state: "Johor",
    city: "Kulai",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003482031001970070085204866153034585802MY5924MSJD AL BAROQAH SRI PAYA6005KULAI6105810306304D733",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 604,
    name: "Surau Perjiranan 10",
    category: "surau",
    state: "Johor",
    city: "Johor Bahru",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003624031001832571285204866153034585802MY5919SURAU PERJIRANAN 106011JOHOR BAHRU6105811006304D6CB",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 605,
    name: "Jawatankuasa Surau Al Falah",
    category: "surau",
    state: "Johor",
    city: "Skudai",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004256031001776900065204866153034585802MY5921JKUASA SURAU AL FALAH6006SKUDAI6105813006304F624",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 606,
    name: "Maahad Tahfiz Mataqas",
    category: "others",
    state: "Johor",
    city: "Kulai",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000004858031001773653255204866153034585802MY5920MAHAD TAHFIZ MATAQAS6005KULAI61058103063042006",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 607,
    name: "Masjid Kariah Sikamat",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Seremban",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000022031001233808685204866153034585802MY5921MASJID KARIAH SIKAMAT6008SEREMBAN6105704006304EA00",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 608,
    name: "Masjid Negeri Negeri Sembilan",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Seremban",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000032031001361663255204866153034585802MY5916MASJID NEGERI NS6008SEREMBAN6105701006304AEEE",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 609,
    name: "Masjid Jamek Bandar Seremban",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Seremban",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000033031001361663255204866153034585802MY5923MASJID JAMEK BANDAR SBN6008SEREMBAN6105701006304EA7C",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 610,
    name: "Qariah Masjid Felda Jelai 4",
    category: "others",
    state: "Negeri Sembilan",
    city: "Gemas",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000090031001775581165204866153034585802MY5924QARIAH MJD FELDA JELAI 46005GEMAS610573400630457FF",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 611,
    name: "Kompleks Pusat Islam Rantau",
    category: "others",
    state: "Negeri Sembilan",
    city: "Seremban",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000035031001361663255204866153034585802MY5924KPLKS PUSAT ISLAM RANTAU6008SEREMBAN610570100630425B0",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 612,
    name: "Masjid Kariah Felda Jelai 1",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Gemas",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000116031001423509975204866153034585802MY5924MJD KARIAH FELDA JELAI 16005GEMAS61057348063042AE8",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 613,
    name: "Masjid Nurul Huda Kampung Felda Jelai 3",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Gemas",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000117031001323296365204866153034585802MY5925MJ NURUL HUDA KG FELDA J36005GEMAS61057348063048D0E",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 614,
    name: "Masjid Qariah Bagan Pinang",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Port Dickson",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000171031001773253565204866153034585802MY5923MJD QARYAH BAGAN PINANG6012PORT DICKSON610571000630435E7",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 615,
    name: "Masjid Kampung Sawah Sunggala",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Sirusa",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000271031001922690015204866153034585802MY5924MASJID KG SAWAH SUNGGALA6006SIRUSA6105710506304B895",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 616,
    name: "Masjid An-Nur Felda Jelai 2",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Gemas",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000327031001083677585204866153034585802MY5923MASJID ANNUR F. JELAI 26005GEMAS6105734006304227D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/MasjidRasah/
    id: 617,
    name: "Masjid Jamek Dato' Bandar Hj. Ahmad",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Seremban",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000388031001966154155204866153034585802MY5923MJD JAMEK DATO HJ AHMAD6008SEREMBAN6105703006304B78B",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 618,
    name: "Surau Ubudiah",
    category: "surau",
    state: "Negeri Sembilan",
    city: "Port Dickson",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000500031001962252055204866153034585802MY5913SURAU UBUDIAH6012PORT DICKSON6105710506304AC04",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 619,
    name: "Surau Al Ehsaniah",
    category: "surau",
    state: "Negeri Sembilan",
    city: "Port Dickson",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000662031001967361315204866153034585802MY5917SURAU AL EHSANIAH6012PORT DICKSON6105710506304CFC5",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 620,
    name: "Tilawah Jabatan Kesihatan Negeri, Negeri Sembilan",
    category: "others",
    state: "Negeri Sembilan",
    city: "Seremban",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000911031001726495665204866153034585802MY5913TILAWAH JKNNS6008SEREMBAN61057030063040115",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 621,
    name: "Masjid Sendeng",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Seremban",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000919031001922143135204866153034585802MY5914MASJID SENDENG6008SEREMBAN6105704006304A40D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 622,
    name: "Masjid Felda Pasir Besar",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Gemas",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001344031001930097845204866153034585802MY5921MJD FELDA PASIR BESAR6005GEMAS610573420630456A5",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 623,
    name: "Masjid Kariah Paroi Jaya",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Seremban",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001376031001265787235204866153034585802MY5924MASJID KARIAH PAROI JAYA6008SEREMBAN61057040063042D29",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 624,
    name: "Masjid Jamek Rahang",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Seremban",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000003034031001725545305204866153034585802MY5919MASJID JAMEK RAHANG6008SEREMBAN6105701006304FC5D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 625,
    name: "Masjid Kariah Kem Segenting",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Si Rusa",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000042470311011237442345204866153034585802MY5924MJD KARIAH KEM SEGENTING6012PORT DICKSON610571050630482C8",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 627,
    name: "Surau Selat Melaka",
    category: "surau",
    state: "Melaka",
    city: "Padang Temu Mel",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000169031001261100935204866153034585802MY5918SURAU SELAT MELAKA6015PADANG TEMU MEL61057505063049CE6",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 628,
    name: "Pembangunan Surau Taman Bukit Cheng 2",
    category: "surau",
    state: "Melaka",
    city: "Taman Bukit Che",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000321031001762459575204866153034585802MY5925PBN SURAU TMN BKT CHENG 26015TAMAN BUKIT CHE6105752506304C22D",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/MasjidAlAbrarSemabok/
    id: 629,
    name: "Masjid Al Abrar Semabok",
    category: "mosque",
    state: "Melaka",
    city: "Semabok",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000893031001975048605204866153034585802MY5923MASJID AL ABRAR SEMABOK6006MELAKA610575050630408BE",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 630,
    name: "Masjid Al-Mukmin Bukit Durian",
    category: "mosque",
    state: "Melaka",
    city: "Ayer Molek",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000001037031001966858825204866153034585802MY5924MJD AL-MUKMIN BKT DURIAN6006MELAKA61057546063045DD6",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    id: 631,
    name: "Surau Al-Hikmah",
    category: "surau",
    state: "Melaka",
    city: "Melaka",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000005031031001363063305204566153034585802MY5915SURAU AL-HIKMAH6006MELAKA61057525063048A94",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/p/Surau-Al-Hikmah-Melaka-100083763211724/
    id: 632,
    name: "Wakaf Pembangunan Surau Al-Hikmah",
    category: "surau",
    state: "Melaka",
    city: "Seri Pandan",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000005032031001363063305204566153034585802MY5924WKF PBGN SURAU AL-HIKMAH6006MELAKA610575250630409C2",
    supportedPayment: ["duitnow", "tng"],
  },
  {
    // https://www.facebook.com/p/Masjid-Taman-Impian-Emas-Skudai-100057640749577/
    id: 633,
    name: "Masjid Taman Impian Emas",
    category: "mosque",
    state: "Johor",
    city: "Skudai",
    qrImage: "",
    qrContent: "ENNpZhHA+LUZBc75U8peWUvCulhL5kH8p9GhppQd/5E=",
    supportedPayment: ["boost"],
    coords: [1.5529910624436756, 103.66982964988343],
  },
  {
    id: 634,
    name: "Surau Darul Madinah",
    category: "surau",
    state: "Sarawak",
    city: "Niah",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065641600226126102000005251RHBQR0136115204739953034585802MY5919Surau Darul Madinah6002MY61059815062300309ROA0198010713A0420170087A28264BF4A3168CA26A3EDD503AA94C04D7BE730247A580C18F5D9636BC7010C009CDD63040FBB",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.9911561200987213, 113.72836987669757],
  },
  {
    id: 635,
    name: "Surau Haji Abu Bakar Yunus",
    description:
      "Surau Jumaat yang berdaftar dengan Majlis Agama Islam Negeri Melaka.",
    category: "surau",
    state: "Melaka",
    city: "Alor Gajah",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001228335204866153034585802MY5925Tabong Surau Hj Abu Bakar6002MY627303251695270859669008348440089052016952709283790011102071616952702687660036304313A",
    supportedPayment: ["duitnow"],
    coords: [2.4925023301969205, 102.18022557818212],
  },

  {
    id: 636,
    name: "Masjid As-Syakirin Kota Bharu (Mukim Semut Api)",
    category: "mosque",
    state: "Kelantan",
    city: "Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000005130031001392716165204566153034585802MY5918MASJID AS-SYAKIRIN6010KOTA BHARU6105153506304F43A",
    supportedPayment: ["duitnow"],
    coords: [6.193148, 102.268606],
  },
  {
    id: 637,
    name: "Masjid Bandar Cassia",
    category: "mosque",
    state: "Pulau Pinang",
    city: "Simpang Ampat",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR1871881031000000000005204000053034585802MY5920MASJID BANDAR CASSIA6012PULAU PINANG63043D91",
    supportedPayment: ["duitnow"],
    coords: [5.283528, 100.4768579],
  },
  {
    id: 638,
    name: "Masjid Nur Iman",
    category: "mosque",
    state: "Terengganu",
    city: "Kuala Terengganu",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001153425204866153034585802MY5915Masjid Nur Iman6002MY627303251687416234042001143245388052016874162764980055692071616874156817180086304C3DF",
    supportedPayment: ["duitnow"],
    coords: [5.3721098, 103.0505411],
  },
  {
    id: 639,
    name: "Surau Al Wardah",
    category: "surau",
    state: "Selangor",
    city: "Sepang",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001214235204866153034585802MY5925SURAU AL-WARDAH TMN MAWAR6002MY62730325169156911539000100132715305201710123626436001388607161691567899910004630404F1",
    supportedPayment: ["duitnow"],
    coords: [2.8300711, 101.7385363],
  },
  {
    id: 640,
    name: "Masjid Seberang Perai Selatan",
    category: "mosque",
    state: "Pulau Pinang",
    city: "Seberang Perai",
    qrImage: "",
    qrContent:
      "00020201021126520014A000000615000101068900530220MDN161846734206151865204866153034585802MY5925MASJIDDAERAHSEBERANGPERAI6010SUNGAIJAWI630424AE",
    supportedPayment: ["duitnow"],
    coords: [5.1960033, 100.4910867],
  },
  {
    id: 641,
    name: "Masjid Taman Pulai Indah",
    category: "mosque",
    state: "Johor",
    city: "Johor Bahru",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR1510009031000000000005204000053034585802MY5925MASJID TAMAN PULAI INDAH 6005JOHOR63040B81",
    supportedPayment: ["duitnow"],
    coords: [1.5411903, 103.5815121],
  },
  {
    id: 642,
    name: "Masjid Datuk Amar Abdul Taib Mahmud Baru",
    category: "mosque",
    state: "Sarawak",
    city: "Samarahan",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001300035204866153034585802MY5925MASJID DATUK AMAR HJ ABD 6002MY627303251706600566424001722475393052017066006139700010489071617066001233040056304580D",
    supportedPayment: ["duitnow"],
    coords: [5.9685402, 116.0714949],
  },
  {
    id: 643,
    name: "Masjid Lestari Putra",
    category: "mosque",
    state: "Selangor",
    city: "Seri Kembangan",
    qrImage: "",
    qrContent:
      "00020101021126580014A000000615000101065887340212MBBQR125821103100000000000520400005303458540500.005802MY5920MASJID LESTARI PUTRA6008SELANGOR630496E4",
    supportedPayment: ["duitnow"],
    coords: [3.0013537, 101.668207],
  },
  {
    id: 644,
    name: "Surau Al-Hidayah Vista Angkasa",
    category: "surau",
    state: "W.P. Kuala Lumpur",
    city: "Kerinchi",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001304805204866153034585802MY5916SURAU AL-HIDAYAH6002MY62730325170841797916800480396581705201708418058465009369907161708417427619001630479FD",
    supportedPayment: ["duitnow"],
    coords: [3.1127807, 101.6626533],
  },
  {
    id: 645,
    name: "Surau Al-Amin Pekan",
    category: "surau",
    state: "Pahang",
    city: "Pekan",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR1978245031000000000005204000053034585802MY5911SURAUALAMIN6006PAHANG63043DAB",
    supportedPayment: ["duitnow"],
    coords: [3.538981, 103.351892],
  },
  {
    id: 646,
    name: "Surau Raudhatul Sakinah",
    category: "surau",
    state: "Pulau Pinang",
    city: "Nibong Tebal",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2086610031000000000005204829953034585802MY5924SURAU RAUDHATUL SAKINAH 6012PULAU PINANG630469A9",
    supportedPayment: ["duitnow"],
    coords: [5.140845, 100.4790949],
  },
  {
    id: 647,
    name: "Masjid Al-Hidayah",
    category: "mosque",
    state: "Selangor",
    city: "Klang",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000046705204866153034585802MY5917MASJID AL-HIDAYAH6002MY625303251637042816865004692790918052016370428423590097823630413AA",
    supportedPayment: ["duitnow"],
    coords: [2.9647045, 101.4765097],
  },
  {
    id: 648,
    name: "Surau Al-Munawarah",
    category: "surau",
    state: "W.P. Kuala Lumpur",
    city: "Alam Damai",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2073682031000000000005204000053034585802MY5920SURAU AL-MUNAWWARAH6015WP KUALA LUMPUR63049598",
    supportedPayment: ["duitnow"],
    coords: [3.0562359, 101.7421237],
  },
  {
    id: 649,
    name: "Masjid An-Nur Mukim Jejuluk",
    category: "mosque",
    state: "Kelantan",
    city: "Pasir Mas",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001301835204866153034585802MY5925MASJID AN NUR MUKIM JEJUL6002MY627303251707203983220005300665333052017072040346170011454071617072031912360016304A4F2",
    supportedPayment: ["duitnow"],
    coords: [6.0731282, 102.166917],
  },
  {
    id: 650,
    name: "Masjid Saidina Othman Ibn Affan",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Cheras",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001274385204866153034585802MY5925MASJID SAIDINA OTHMAN IBN6002MY627303251700032753890001099434930052017013268555340054478071617000325318570016304558D",
    supportedPayment: ["duitnow"],
    coords: [3.0890001, 101.720949],
  },
  {
    id: 651,
    name: "Masjid Al-Muktafi Billah Shah",
    category: "mosque",
    state: "Terengganu",
    city: "Kuala Terengganu",
    qrImage: "",
    qrContent:
      "0020201021126420014A000000615000101066033460210MD001203755204866153034585802MY5925Masjid Al-Muktafi Billah 6002MY627303251688458697280006044542704052016884587238070053035071616884584108920086304CB95",
    supportedPayment: ["duitnow"],
    coords: [5.3277666, 103.1488076],
  },
  {
    id: 652,
    name: "Surau Ehsaniah Bota Kiri",
    category: "surau",
    state: "Perak",
    city: "Bota Kiri",
    qrImage: "",
    qrContent:
      "0020201021126530014A000000615000101065641690221QRAMB00000000020803945204866153034585802MY5917SURAU AL EHSANIAH6005PERAK61053260062220307From QR0707Sedeqah63046F34",
    supportedPayment: ["duitnow"],
    coords: [4.3227307, 100.8807601],
  },
  {
    id: 653,
    name: "Masjid Al Azim",
    category: "mosque",
    state: "Melaka",
    city: "Bukit Baru",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000851575204866153034585802MY5914MASJID AL AZIM6002MY627303251665026223999006345898661052016650262274850038845071616650259216190026304387A",
    supportedPayment: ["duitnow"],
    coords: [2.2152189, 102.2624816],
  },
  {
    id: 654,
    name: "Surau Nur Baiduri",
    category: "surau",
    state: "Selangor",
    city: "Puchong",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2075652031000000000005204000053034585802MY5917SURAU NUR BAIDURI6008SELANGOR6304E5FA",
    supportedPayment: ["duitnow"],
    coords: [2.976648, 101.622875],
  },
  {
    id: 655,
    name: "Masjid Khalifah Taman Jaya",
    category: "mosque",
    state: "Terengganu",
    city: "Kuala Terengganu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000010061041001998485995204866153034585802MY5925MJD KHALIFAH INFAK MASJID6015KUALA TERENGGAN610520400630456E",
    supportedPayment: ["duitnow"],
    coords: [5.3223491, 103.1457523],
  },
  {
    id: 656,
    name: "Surau Al-Mukhlisin Pangsapuri Semarak",
    category: "surau",
    state: "Selangor",
    city: "Setia Alam",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2123262031000000000005204729953034585802MY5918SURAU AL-MUKHLISIN6008SELANGOR63041519",
    supportedPayment: ["duitnow"],
    coords: [3.0915147, 101.4862225],
  },
  {
    // https://www.facebook.com/MasjidAlHanaLangkawi/
    id: 657,
    name: "Masjid Al-Hana",
    category: "mosque",
    state: "Kedah",
    city: "Langkawi",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000779005204866153034585802MY5914MASJID AL HANA6002MY627303251661240065379006997963779052017200119526590050385071616612399179210016304F5A8",
    supportedPayment: ["duitnow", "tng"],
    coords: [6.316542682545157, 99.85294203554166],
  },
  {
    // https://www.facebook.com/masjid.toklebaihashim/
    id: 658,
    name: "Masjid Tok Lebai Hashim",
    category: "mosque",
    state: "Pulau Pinang",
    city: "Bukit Mertajam",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000908675204866153034585802MY5925MASJID TOK LEBAI HASHIM B6002MY6273032516710896242130011058633420520167108975808800416380716167108866930800663047946",
    supportedPayment: ["duitnow", "tng"],
    coords: [5.3320414015369915, 100.45089589886389],
  },
  {
    // https://www.facebook.com/MSAMuarJohor/
    id: 659,
    name: "Masjid Sungai Abong",
    category: "mosque",
    state: "Johor",
    city: "Muar",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000007494041001355045005204866153034585802MY5919MASJID SUNGAI ABONG6004MUAR61058400063041B1F",
    supportedPayment: ["duitnow"],
    coords: [2.05997, 102.5946],
  },
  {
    // https://www.facebook.com/annurpresint11/
    id: 660,
    name: "Surau An-Nur Presint 11 Putrajaya",
    category: "surau",
    state: "W.P. Putrajaya",
    city: "Putrajaya",
    qrImage: "",
    qrContent:
      "00020201021126520014A000000615000101068900530220MDN162331281601870075204866153034585802MY5914SURAUANNURP11K6009PUTRAJAYA630465FC",
    supportedPayment: ["duitnow"],
    coords: [2.9480098, 101.6746468],
  },
  {
    id: 661,
    name: "Masjid Al-Syifa Bandar Penawar",
    category: "mosque",
    state: "Johor",
    city: "Kota Tinggi",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000081155204866153034585802MY5915MASJID AL-SYIFA6002MY62530325164204520572600132849403105201642045211097005110363040379",
    supportedPayment: ["duitnow"],
    coords: [1.5523071282221719, 104.23761355070707],
  },
  {
    id: 662,
    name: "Surau Al-Ikhwan Desa Pinggiran Putra",
    category: "surau",
    state: "Selangor",
    city: "Sepang",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000825135204866153034585802MY5925SURAU AL-IKHWAN DESA PING6002MY627303251662693031661004183192293052016626934964280043425071616626923665280086304AF7C",
    supportedPayment: ["duitnow"],
    coords: [2.903710491949355, 101.72520144266342],
  },
  {
    id: 663,
    name: "Madrasah Tahfizul Quran Penanti",
    category: "others",
    state: "Pulau Pinang",
    city: "Kubang Semang",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000846775204829953034585802MY5925Madrasah Tahfizul Quran P6002MY6273032516645077758810011150649030520166450781483100109530716166450751455500363043B8F",
    supportedPayment: ["duitnow"],
    coords: [5.414885082809886, 100.50885313468898],
  },
  {
    //https://www.instagram.com/mjarklang/?hl=en
    id: 664,
    name: "Masjid Jamek Ar-Rahimiah, Klang (MJAR Klang)",
    category: "mosque",
    state: "Selangor",
    city: "Klang",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR1716799031000000000005204729953034585802MY5924MASJID JAMEK AR RAHIMIAH6008SELANGOR6304C977",
    supportedPayment: ["duitnow"],
    coords: [3.0221, 101.4431],
  },
  {
    // https://www.facebook.com/musollaarraudhahsouthvillecity/
    id: 665,
    name: "Musolla Ar Raudhah Southvillecity",
    category: "surau",
    state: "Selangor",
    city: "Bangi",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000007399041001655728855204866153034585802MY5918MUSOLLA AR-RAUDHAH6006SEPANG61054390063043931",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.902881, 101.765017],
  },

  {
    id: 666,
    name: "Masjid Kg Bukit Anak Dara",
    category: "mosque",
    state: "Terengganu",
    city: "Kijal",
    qrImage: "",
    qrContent:
      "00020201021126600014A000000615000101065892670228BRQR65cd76df481cbd22673814925204866153034585802MY5925MASJID KG BUKIT ANAK DARA6005KIJAL61052410062420310M000001907052465cd76e0aa48bf000562ec9a6304068A",
    supportedPayment: ["duitnow"],
    coords: [4.3274485, 103.443986],
  },
  {
    id: 667,
    name: "Sumbangan Tanah Perkuburan Islam Seri Iskandar",
    category: "others",
    state: "Perak",
    city: "Bota",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001341255204729853034585802MY5923Tanah Kubur Jalan Parit6002MY627303251715933235478006953349664052017159333494450067579071617159176215220016304DFDA",
    supportedPayment: ["duitnow"],
    coords: [4.4036067, 100.9268032],
  },
  {
    id: 668,
    name: "Masjid An Nur Perumahan Mara",
    category: "mosque",
    state: "Johor",
    city: "Johor Bharu",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001291675204866153034585802MY5925Masjid An Nur Perumahan M6002MY6273032517035838675220086546332970520170358391510700458860716170358302279300163048D65",
    supportedPayment: ["duitnow"],
    coords: [1.5053844266821226, 103.70349195609346],
  },
  {
    id: 669,
    name: "Masjid Bukit Indah Ampang",
    category: "mosque",
    state: "Selangor",
    city: "Ampang",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000007201041001391396725204866153034585802MY5919MASJID BUKIT INDAH 6007AMPANG 61056800063047BCC",
    supportedPayment: ["duitnow"],
    coords: [3.154911636387287, 101.77560035134437],
  },
  {
    id: 670,
    name: "Masjid Darul Afwa",
    category: "mosque",
    state: "Kelantan",
    city: "Jeli",
    qrImage: "",
    qrContent:
      "00020201021126800014A000000615000101065893730209MJLI000440319Agrobank's Merchant0412+601920092465204594753034585802MY5925MASJID DARUL`AFWA MUKIM J6004JELI6105176006304AEC1",
    supportedPayment: ["duitnow"],
    coords: [5.693324968066221, 101.83266668366706],
  },
  {
    id: 671,
    name: "Masjid Nurul Iman Kunak",
    category: "mosque",
    state: "Sabah",
    city: "Kunak",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2139268031000000000005204729953034585802MY5924TABUNG MASJID NURUL IMAN6005SABAH63042077",
    supportedPayment: ["duitnow"],
    coords: [4.686315214304627, 118.25100834489221],
  },
  {
    id: 672,
    name: "Sumbangan Van Jenazah Ihsan Peneng",
    category: "others",
    state: "Pulau Pinang",
    city: "Jelutong",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2004304031000000000005204000053034585802MY5924VAN JENAZAH IHSAN PENANG6012PULAU PINANG6304FAD3",
    supportedPayment: ["duitnow"],
    coords: [5.382960179899306, 100.31398917364419],
  },
  {
    id: 673,
    name: "Stray Free Foundation",
    category: "others",
    state: "W.P. Kuala Lumpur",
    city: "Segambut",
    qrImage: "",
    qrContent:
      "00020201021126530014A000000615000101065641690221QRAMB00000000023132455204074253034585802MY5925PERTUBUHAN KEBAJIKAN HAIW6015WP KUALA LUMPUR61055500062500321Stray Free Foundation0721Stray Free Foundation6304F70D",
    supportedPayment: ["duitnow"],
    coords: [3.1832642635316883, 101.68259039031732],
  },
  {
    id: 674,
    name: "Masjid Sultan Yusof Izzudin Shah",
    category: "mosque",
    state: "Perak",
    city: "Seri Iskandar",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001091225204866153034585802MY5925Masjid Sultan Yusuf Izzud6002MY6273032516817937145490091697797370520172015172419000976170716168179305354600963046874",
    supportedPayment: ["duitnow"],
    coords: [4.36396665786783, 100.95281705200146],
  },
  {
    id: 675,
    name: "Yayasan Al Isra Malaysia",
    category: "others",
    state: "Kedah",
    city: "Alor Setar",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR1638194031000000000005204000053034585802MY5922YAYASAN ISRA' MALAYSIA6005KEDAH6304101D",
    supportedPayment: ["duitnow"],
    coords: [6.162094797654091, 100.36797649716402],
  },
  {
    id: 676,
    name: "Masjid Tunku Habsah",
    category: "mosque",
    state: "Kedah",
    city: "Sungai Petani",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2187851031000000000005204729953034585802MY5924MASJID TUNKU PUAN HABSAH6005KEDAH63045092",
    supportedPayment: ["duitnow"],
    coords: [5.604514518931701, 100.47089539715951],
  },
  {
    id: 677,
    name: "Surau Al Akhyar Templer Park",
    category: "mosque",
    state: "Selangor",
    city: "Rawang",
    qrImage: "",
    qrContent:
      "00020201021126600014A000000615000101065892670228BRQR65f0180101d6cb62ca2502ea5204866153034585802MY5915Surau Al-Akhyar6006Rawang61054800062420310M000002467052465f01801d3f9a90682ed38d363046890",
    supportedPayment: ["duitnow"],
    coords: [3.29905762120473, 101.63324944243256],
  },
  {
    id: 678,
    name: "Surau Darun Najihin",
    category: "surau",
    state: "Selangor",
    city: "Klang",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001307045204866153034585802MY5919SURAU DARUN NAJIHIN6002MY627303251709192430756002080406081052017091924468150036756071617091920091980056304A486",
    supportedPayment: ["duitnow"],
    coords: [3.0258358912535916, 101.45294403951239],
  },
  {
    // https://www.facebook.com/masjid.sungai.itau/
    id: 679,
    name: "Masjid Nurul Islam Sungai Itau",
    category: "mosque",
    state: "Kedah",
    city: "Langkawi",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001289575204866153034585802MY5925MASJID NURUL ISLAM SG ITA6002MY627303251702546796248001928467473052017025468095260032574071617025460847970016304C7F6",
    supportedPayment: ["duitnow", "tng"],
    coords: [6.41781084335408, 99.82726992574317],
  },

  {
    id: 680,
    name: "Masjid Al-Zakirin Selayang",
    category: "mosque",
    state: "Selangor",
    city: "Selayang",
    qrImage: "",
    qrContent:
      "00020201021126600014A000000615000101065892670228BRQR656928873277962c585942bc5204866153034585802MY5925PEM LIF MASJID AL ZAKIRIN6012Kuala Lumpur61056810062420310M00000024105246676ee4d73d09017650c506263045232",
    supportedPayment: ["duitnow"],
    coords: [4.327630354632766, 103.44650722767568],
  },
  {
    id: 681,
    name: "Masjid Bandar Tasik Puteri",
    category: "mosque",
    state: "Selangor",
    city: "Rawang",
    qrImage: "",
    qrContent:
      "00020201021126530014A000000615000101065641690221QRAMB00000000003754575204866153034585802MY5925MASJID BANDAR TASIK PUTER6008SELANGOR61054802062360317MASJID BTP RAWANG0711019-930004063043B8E",
    supportedPayment: ["duitnow"],
    coords: [3.291219330649202, 101.47465672642183],
  },
  {
    id: 682,
    name: "Masjid Dato Penghulu Menteri Sg Ujong",
    category: "mosque",
    state: "Negeri Sembilan",
    city: " Nilai",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001227135204866153034585802MY5925MASJID DATO PENGHULU MENT6002MY6273032516951825791480059656805290520169527698219900950590716169518233077500663041C0D",
    supportedPayment: ["duitnow"],
    coords: [2.7674815053107977, 101.76541562457149],
  },
  {
    id: 683,
    name: "Masjid Mukim Jembal Tok Ku Kota Jembal",
    category: "mosque",
    state: "Kelantan",
    city: " Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001345285204866153034585802MY5925J/Kuasa Masjid Mukim Jemb6002MY62730325171694601957100238227689205201717049544099004769407161716945706710008630493D1",
    supportedPayment: ["duitnow"],
    coords: [6.114078182265574, 102.30671062643856],
  },
  {
    id: 684,
    name: "Masjid Mukim Pendek",
    category: "mosque",
    state: "Kelantan",
    city: " Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000000231031001290010095204866153034585802MY5919MASJID MUKIM PENDEK6010KOTA BHARU610515100630456AA",
    supportedPayment: ["duitnow"],
    coords: [6.0581613169503, 102.2204594957543],
  },
  {
    id: 685,
    name: "Pembangunan Masjid Ustaz Ahyad",
    category: "others",
    state: " Kelantan ",
    city: " Kota Bharu",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001305415204866153034585802MY5925Pembangunan Masjid Ustaz 6002MY6273032517085178400890062376803230520171929267703900969440716170851681652600263042586",
    supportedPayment: ["duitnow"],
    coords: [6.08021041995102, 102.2911090963428],
  },
  {
    id: 686,
    name: "Surau As-Siddiqin Bandar Tasik Puteri",
    category: "surau",
    state: " Selangor",
    city: " Rawang",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR1555667031000000000005204000053034585802MY5917SURAU AS-SIDDIQIN6008SELANGOR6304A1EE",
    supportedPayment: ["duitnow"],
    coords: [3.282002765290095, 101.47377385340891],
  },
  {
    id: 687,
    name: "Tabung Pembinaan Masjid Lembah Subang 2",
    category: "others",
    state: "Selangor",
    city: "Subang",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000003625204866153034585802MY5939TABUNG PEMBINAAN MASJID LEMBAH SUBANG 26002MY62530325162607182616600635655391605201626071859700004702163048406",
    supportedPayment: ["duitnow"],
    coords: [3.1127878578647428, 101.58272570064996],
  },
  {
    id: 688,
    name: "Wakaf Masjid Kampung Perlis",
    category: "others",
    state: "Pulau Pinang",
    city: "Balik Pulau",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2122945031000000000005204729953034585802MY5925TANAH WAKAF MSJD KG PERLI6012PULAU PINANG6304BD79",
    supportedPayment: ["duitnow"],
    coords: [5.318533374115124, 100.20526433992647],
  },
  {
    id: 689,
    name: "Masjid Al-Alami MITC",
    category: "mosque",
    state: "Melaka",
    city: "Ayer Keroh",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000014275204866153034585802MY5926Masjid Al-Alami Ayer Keroh6002MY62530325163065513815800424151295005201630655144540001626663040409",
    supportedPayment: ["duitnow"],
    coords: [2.2700359468893563, 102.28835838207891],
  },
  {
    id: 690,
    name: "Masjid Universiti Malaysia Sabah",
    category: "mosque",
    state: "Sabah",
    city: "Kota Kinabalu",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001015825204866153034585802MY5924TABUNG AMANAH MASJID UMS6002MY627303251678868743179007321299976052017236820638330061009071616788679917300026304A0AA",
    supportedPayment: ["duitnow"],
  },
  {
    id: 691,
    name: "Surau Raudhotul Firdaus",
    category: "surau",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000047700311011143188905204829953034585802MY5923SURAU RAUDHOTUL FIRDAUS6009SHAH ALAM61054017063043F52",
    supportedPayment: ["duitnow"],
  },
  {
    id: 692,
    name: "Masjid An-Najihin",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Bandar Sri Permaisuri",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR1899612031000000000005204000053034585802MY5921MASJID AL-NAJIHIN BSP6015WP KUALA LUMPUR630456D3",
    supportedPayment: ["duitnow"],
  },
  {
    id: 693,
    name: "Masjid At-Taqwa Banting",
    category: "mosque",
    state: "Selangor",
    city: "Banting",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001018145204866153034585802MY5915MASJID AT TAQWA6002MY627303251678948892733005945371278052016835341445970060044071616789475422840066304065F",
    supportedPayment: ["duitnow"],
  },
  {
    id: 694,
    name: "Surau Tabung Haji",
    category: "surau",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000096285204866153034585802MY5917SURAU TABUNG HAJI6002MY62530325164396006141200873774860205201645429912370007189763042551",
    supportedPayment: ["duitnow"],
  },
  {
    id: 695,
    name: "Musolla Jabal Nur, Residensi Setia Impian",
    category: "surau",
    state: "Selangor",
    city: "Kajang",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000724075204866153034585802MY5925Musolla Jabal Nur,Residen6002MY6273032516562973631520011443867990520171465770457800387840716165629716817400963044A63",
    supportedPayment: ["duitnow"],
  },
  {
    id: 696,
    name: "Masjid Cahaya Iman Country Homes",
    category: "mosque",
    state: "Selangor",
    city: "Rawang",
    qrImage: "",
    qrContent:
      "00020201021126530014A000000615000101065641690221QRAMB00000000014771975204866153034585802MY5925MASJID CAHAYA IMAN COUNTR6008SELANGOR61054800062340322MASJID CAHAYA IMAN BCH0704null6304A0D1",
    supportedPayment: ["duitnow"],
  },
  {
    id: 697,
    name: "Masjid Bandar Utama",
    category: "mosque",
    state: "Selangor",
    city: "Bandar Utama",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065018540215000001224000711031000000000005204866153034585802MY5925TABUNG PEMBINAAN MASJI-QR6013PETALING JAYA61054740062150111101483100006304DC62",
    supportedPayment: ["duitnow"],
  },
  {
    id: 698,
    name: "Masjid Al-Mansuriah Pelabuhan Klang",
    category: "mosque",
    state: "Selangor",
    city: "Klang",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065641600226121246660000983RHBQR0371165204739953034585802MY5919MASJID AL-MANSURIAH6002MY61054200062270309ROA0748400710MALM012010826407FFB9342BA56756E185F4BA12B3EDBF4B3DA75E5E3663ECE3AFA09298A8687963048B7B",
    supportedPayment: ["duitnow"],
  },
  {
    id: 699,
    name: "Masjid Jamek Sultan Abdul Aziz",
    category: "mosque",
    state: "Selangor",
    city: "Petaling Jaya",
    qrImage: "",
    qrContent:
      "00020101021126580014A000000615000101065887340212MBBQR119317603100000000000520400005303458540500.005802MY5907MJSAAPJ6008SELANGOR6304B415",
    supportedPayment: ["duitnow"],
  },
  {
    id: 700,
    name: "Masjid Taman Sri Muda",
    category: "mosque",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001053875204866153034585802MY5921MASJID TAMAN SRI MUDA6002MY627303251680153131881002181962371052016801531361550081971071616801529552320016304C29F",
    supportedPayment: ["duitnow"],
  },
  {
    id: 701,
    name: "Masjid Saidina Abu Bakar As-siddiq",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000012645204866153034585802MY5934MASJID SAIDINA ABU BAKAR AS-SIDDIQ6002MY6253032516300390404210039734172180520163013711443400645126304CACB",
    supportedPayment: ["duitnow"],
  },
  {
    // https://www.facebook.com/masjidsaidinaumaralkhattab/
    id: 702,
    name: "Masjid Saidina Umar Al-Khattab, Bukit Damansara",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent: "U7g9uDNGesDg4pFjPYTsktMDbFWHVoc2lq24qQ63cZM=",
    supportedPayment: ["boost"],
  },
  {
    id: 703,
    name: "Masjid Al-Madaniah",
    category: "mosque",
    state: "Selangor",
    city: "Subang Jaya",
    qrImage: "",
    qrContent:
      "00020201021126620014A000000615000101065641670215QRMID00000119180411011331059175204866153034585802MY5925MASJID AL-MADANIAH USJ 186011SUBANG JAYA6105476306304996A",
    supportedPayment: ["duitnow"],
  },
  {
    id: 704,
    name: "Masjid Solatiah",
    category: "mosque",
    state: "Perak",
    city: "Ipoh",
    qrImage: "",
    qrContent:
      "00020201021126890014A0000006150001010642070902240810041100121820J99042000315BSN Merchant QR041001252093565204000053034585802MY5915MASJID SOLATIAH6004IPOH6105313506304032A",
    supportedPayment: ["duitnow"],
  },
  {
    id: 705,
    name: "Surau Hidayatul Islamiah",
    category: "surau",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065018540215000001244011730031000000000005204866153034585802MY5918SURAU HIDAYATUL-QR6009SHAH ALAM61054040062150111101602200006304501B",
    supportedPayment: ["duitnow"],
  },
  {
    id: 706,
    name: "Masjid Al-Munawwarah",
    category: "mosque",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR1692243031000000000005204000053034585802MY5920MASJID AL-MUNAWWARAH6008SELANGOR6304BDA4",
    supportedPayment: ["duitnow"],
  },
  {
    id: 707,
    name: "Masjid Pekan Sepang",
    category: "mosque",
    state: "Selangor",
    city: "Sepang",
    qrImage: "",
    qrContent: "",
    supportedPayment: ["duitnow"],
  },
  {
    id: 708,
    name: "Masjid Jamek Kg Bharu",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000007352041001724545615204866153034585802MY5921MASJID JAMEK KG BHARU6012KUALA LUMPUR6105503006304F484",
    supportedPayment: ["duitnow"],
  },
  {
    id: 709,
    name: "Masjid Abu Al-Darda",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Seremban",
    qrImage: "",
    qrContent:
      "00020201021126810014A000000615000101065893730209MSBN000550319Agrobank's Merchant0413+6011114657325204866153034585802MY5920MASJID ABU AL-DARDA 6008SEREMBAN6105700006304B69E",
    supportedPayment: ["duitnow"],
  },
  {
    id: 710,
    name: "Masjid Al-Busyra Merbok",
    category: "mosque",
    state: "Kedah",
    city: "Pekan Merbok",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2120576031000000000005204899953034585802MY5923MASJID AL BUSYRA MERBOK6005KEDAH630450C2",
    supportedPayment: ["duitnow"],
  },
  {
    id: 711,
    name: "Surau Kuarters Hospital Kuala Lumpur",
    category: "surau",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001304825204866153034585802MY5925SURAU KUARTERS HOSPITAL K6002MY627303251708412727353006611618614052017084127421710068167071617084122544530086304A627",
    supportedPayment: ["duitnow"],
  },
  {
    id: 712,
    name: "Masjid Mahmoodiah",
    category: "mosque",
    state: "W.P. Putrajaya",
    city: "Putrajaya",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2127304031000000000005204729953034585802MY5917MASJID MAHMOODIAH6012WP PUTRAJAYA63047E9C",
    supportedPayment: ["duitnow"],
  },
  {
    id: 713,
    name: "Masjid UPM",
    category: "mosque",
    state: "Selangor",
    city: "Serdang",
    qrImage: "",
    qrContent:
      "00020201021126560014A000000615000101068900610224602e3c1a119f6e2a6f71e7465204000053034585802MY5916Derma Masjid UPM6007SERDANG8240752663630138766269a78161683f1931e12b013063046B81",
    supportedPayment: ["duitnow"],
  },
  {
    id: 714,
    name: "Surau Ibnu Sina",
    category: "surau",
    state: "Johor",
    city: "Kulai",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2124651031000000000005204729953034585802MY5915SURAU IBNU SINA6005JOHOR6304DEE5",
    supportedPayment: ["duitnow"],
  },
  {
    id: 715,
    name: "Masjid Nurul Iman Kampong Gebok",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Mantin",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000003315204866153034585802MY5925TABUNG PEMBINAAN DEWAN SE6002MY6273032516842936542240046410383080520168429368582300650800716162462649449600263041DA2",
    supportedPayment: ["duitnow"],
  },
  {
    id: 716,
    name: "MUSOLLA SERI MUTIARA",
    category: "surau",
    state: "Selangor",
    city: "Setia Alam",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001234245204866153034585802MY5920MUSOLLA SERI MUTIARA6002MY627303251695798575764003353942930052016957986026750080479071616957982566940086304D121",
    supportedPayment: ["duitnow"],
  },
  {
    id: 717,
    name: "Surau Clover Garden Residence",
    category: "surau",
    state: "Selangor",
    city: "Cyberjaya",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065016640226100106730007824O11AQOA00015204839853034585802MY5925SURAU CLOVER GARDEN RESID6002MY62150311O11AQOA00018264E9F73D3153F6BB8A92BC6C3DCACE256C798652CF743B1AB095D5E734063AE23963047D32",
    supportedPayment: ["duitnow"],
  },
  {
    id: 718,
    name: "Masjid Bandar Tun Hussein Onn",
    category: "mosque",
    state: "Selangor",
    city: "Cheras",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR1199605031000000000005204000053034585802MY5911MASJID BTHO6008SELANGOR6304A67B",
    supportedPayment: ["duitnow"],
  },
  {
    id: 719,
    name: "Surau At-Toyyibah",
    category: "surau",
    state: "Selangor",
    city: "Puchong",
    qrImage: "",
    qrContent:
      "00020101021126580014A000000615000101065887340212MBBQR149959803100000000000520400005303458540500.005802MY5917SURAU AT-TOYYIBAH6008SELANGOR630434C5",
    supportedPayment: ["duitnow"],
  },
  {
    id: 720,
    name: "Masjid Jamek Alma Jaya",
    category: "mosque",
    state: "Pulau Pinang",
    city: "Bukit Mertajam",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2187481031000000000005204729953034585802MY5922MASJID JAMEK ALMA JAYA6012PULAU PINANG6304B988",
    supportedPayment: ["duitnow"],
  },
  {
    // https://www.facebook.com/MasjidAlIttihadKgKumpulanLangkawi/
    id: 721,
    name: "Masjid Al Ittihad Kg Kumpulan",
    category: "mosque",
    state: "Kedah",
    city: "Langkawi",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001013325204866153034585802MY5925MASJID AL-ITTIHAD KG KUMP6002MY6273032516787865965250054796909200520171195706385500288390716167878628456800163041AFC",
    supportedPayment: ["duitnow"],
  },
  {
    id: 722,
    name: "Masjid Ar Rabbani",
    category: "mosque",
    state: "Melaka",
    city: "Tangga Baru",
    qrImage: "",
    qrContent:
      "00020101021126580014A000000615000101065887340212MBBQR155033303100000000000520400005303458540500.005802MY5917MASJID AR RABBANI6006MELAKA6304D4D5",
    supportedPayment: ["duitnow"],
  },
  {
    id: 723,
    name: "Masjid Jamek Kemunting",
    category: "mosque",
    state: "Perak",
    city: "Kamunting",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR1698694031000000000005204000053034585802MY5922MASJID JAMEK KEMUNTING6005PERAK6304AB49",
    supportedPayment: ["duitnow"],
  },
  // amirul abu, twitter - https://x.com/AmirulAbu/status/1842065332351205553
  {
    id: 724,
    name: "Tabung Surau & Kebajikan Am Surau Jumaat Haji Mohamad",
    category: "others",
    state: "Johor",
    city: "Muar",
    qrImage: "",
    qrContent:
      "00020201021126470014A000000615000101065641620215PBB2024001169585204866153034585802MY5925SURAU HJ MOHAMAD KG PARIT6004MUAR6220030642272507063641386304DF19",
    supportedPayment: ["duitnow"],
  },
  // syafiq haikal, instagram
  {
    id: 725,
    name: "Surau Al Muslihin",
    category: "surau",
    state: "Selangor",
    city: "Sungai Besi",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065641600226126407600000196RHBQR0410255204739953034585802MY5917SURAU AL MUSLIHIN6002MY61055710062300309ROA0849420713ALMUSLIHINSGB8264611A109743C8C5B17970CF2293D889EDA70C0278CCA0A48EC1E4695FFCB2A14963041FA3",
    supportedPayment: ["duitnow"],
  },
  // catqeel, instagram
  {
    id: 726,
    name: "Masjid Jamek Ar Rahimah",
    category: "mosque",
    state: "Selangor",
    city: "Kuala Kubu Bharu",
    qrImage: "",
    qrContent:
      "00020201021126560014A000000615000101068900610224602e1ef5110342ed58a79a2d5204866153034585802MY5925MASJID JAMEK AR-RAHIMA...6002MY824066f79bb832d44a4ffebdf8ae5ca6115c0e30fcf563040E46",
    supportedPayment: ["duitnow"],
  },
  // izzat zainol, github pr - https://github.com/khrnchn/sedekah-je/pull/179
  {
    id: 727,
    name: "Masjid Daerah Seberang Perai Utara",
    category: "mosque",
    state: "Pulau Pinang",
    city: "Butterworth",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000008085204866153034585802MY5934MASJID DAERAH SEBERANG PERAI UTARA6002MY62530325162884462734400915247568605201628844639718007384163044A47",
    supportedPayment: ["duitnow"],
  },
  // izzat rizal, masjid area office dia
  {
    id: 728,
    name: "Masjid At Taqwa Desa Subang Permai",
    category: "mosque",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000939555204866153034585802MY5915MASJID AT-TAQWA6002MY62730325167539387089200266298329105201675393898626002297207161675393397593005630492DC",
    supportedPayment: ["duitnow"],
  },
  // afrie irham, whatsapp
  {
    id: 729,
    name: "Surau Al Barakah, Menara Kembar Bank Rakyat",
    category: "surau",
    state: "W.P. Kuala Lumpur",
    city: "Brickfields",
    qrImage: "",
    qrContent:
      "00020201021126600014A000000615000101065892670228BRQR65407a9aa888876fbe72c3095204866153034585802MY5923Tabung Surau Al-Barakah6012Kuala Lumpur61055047062420310M000000019052465407b575c6c063cc3b8a98a63046F35",
    supportedPayment: ["duitnow", "tng"],
  },
  // adha sahar, whatsapp
  {
    id: 730,
    name: "Surau Ar-Raudhah (Surau Jumaat) Saujana Impian",
    category: "surau",
    state: "Selangor",
    city: "Kajang",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000087585204866153034585802MY5916SURAU AR RAUDHAH6002MY6253032516430903836820080026396640520164336566128800575146304BB4B",
    supportedPayment: ["duitnow", "tng"],
  },
  // awis alkarni, twitter - https://x.com/awis/status/1846000481388450034
  {
    id: 731,
    name: "Sumbangan Dana Pembinaan Masjid Kariah Taman Dahlia",
    category: "others",
    state: "Selangor",
    city: "Sepang",
    qrImage: "",
    qrContent:
      "00020201021126920014A000000615000101065893730221MJAISELPAIDSUPM0300110319Agrobank's Merchant0412+601767001665204839853034585802MY5922JPPM KARIAH TMN DAHLIA6006SEPANG6105439006304D576",
    supportedPayment: ["duitnow", "tng"],
  },
  // afiq ktm, whatsapp
  {
    id: 732,
    name: "Masjid Saidatina Aisyah",
    category: "mosque",
    state: "Negeri Sembilan",
    city: "Seremban",
    qrImage: "",
    qrContent:
      "00020201021126800014A000000615000101065893730209MSBN000570319Agrobank's Merchant0412+601725983285204866153034585802MY5924MASJID SAIDATINA AISYAH 6008SEREMBAN61057000063048425",
    supportedPayment: ["duitnow", "tng"],
  },
  // hazqeel, whatsapp
  {
    id: 733,
    name: "Masjid Jamek Kampung Payamas",
    category: "mosque",
    state: "Johor",
    city: "Tangkak",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2162762031000000000005204729953034585802MY5924MASJID JAMIK KG.PAYA MAS6005JOHOR6304589E",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.284620476376925, 102.5511054992771],
  },
  // hazqeel, whatsapp
  {
    id: 734,
    name: "Masjid Jamek Ar Raudhah",
    category: "mosque",
    state: "Johor",
    city: "Batu Pahat",
    qrImage: "",
    qrContent:
      "00020201021126610014A000000615000101065641670215QRMID0000010266041001278613555204866153034585802MY5922MASJID JAMEK ARRAUDHAH6010BATU PAHAT610583000630437B4",
    supportedPayment: ["duitnow", "tng"],
    coords: [1.849866078166957, 102.90360875315643],
  },
  // khairin, solat jumaat @ menara tm
  {
    id: 735,
    name: "Surau Jumaat Menara TM",
    category: "surau",
    state: "W.P. Kuala Lumpur",
    city: "W.P. Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000631595204866153034585802MY5915Surau Menara TM6002MY6273032516499851489250011099121720520170687610223400943070716164998479170800263048D34",
    supportedPayment: ["duitnow", "tng"],
  },
  // khairin
  {
    id: 736,
    name: "Masjid Kolej Islam Malaya",
    category: "mosque",
    state: "Selangor",
    city: "Petaling Jaya",
    qrImage: "",
    qrContent:
      "00020201021126520014A000000615000101068900530220MDN163134082800383475204866153034585802MY5922MASJIDKOLEJISLAMMALAYA6012PETALINGJAYA63043642",
    supportedPayment: ["duitnow", "tng"],
  },
  // khairin
  {
    id: 737,
    name: "Masjid Bukit Aman",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent: "https://qr.tngdigital.com.my/m/281011052028379747348769052",
    supportedPayment: ["tng"],
  },
  // khairin, facebook - https://www.facebook.com/MasjidNurulKhair/posts/duitnow-qr-codealternatif-baru-yang-lebih-memudahkan-untuk-dermawan-serta-simpat/809772409815834/
  {
    id: 738,
    name: "Masjid Nurul Khair",
    category: "mosque",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065641600226121125460006466RHBQR0051455204739953034585802MY5912MASJID NURUL6002MY61059305062230309ROA0055360706083469826457337C91F73CD4E703003FC65C93C2E9FB80C908603C05311EF18C59E6FB61566304F15C",
    supportedPayment: ["duitnow"],
  },
  // khairin, instagram - https://www.instagram.com/masjiduitmshahalam/p/Chi3LVpP0gw/
  {
    id: 739,
    name: "Masjid UITM Shah Alam",
    category: "mosque",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000107365204829953034585802MY5925UNIVERSITI TEKNOLOGI MARA6002MY6273032516454255664470013494767310520165709489441200410210716165709471023500963049E67",
    supportedPayment: ["duitnow"],
  },
  // khairin, website - https://baiturrahman.my/ & https://www.facebook.com/photo.php?fbid=792445273082490&set=p.792445273082490&type=3
  {
    id: 740,
    name: "Masjid Baiturrahman Alam Sari",
    category: "mosque",
    state: "Selangor",
    city: "Bangi",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR1516178031000000000005204000053034585802MY5919MASJID BAITURRAHMAN6008SELANGOR63044004",
    supportedPayment: ["duitnow"],
  },
  // khairin, website - https://www.masjidalbukhary.com.my/home/einfaq.php
  {
    id: 741,
    name: "Masjid Al Bukhary Alor Malai",
    category: "mosque",
    state: "Kedah",
    city: "Alor Setar",
    qrImage: "",
    qrContent:
      "00020101021126610014A000000615000101065641670215QRMID000000027603100194441307520430005303458540500.005802MY5917MASJID AL BUKHARY6010ALOR SETAR61050546063044141",
    supportedPayment: ["duitnow"],
  },
  // khairin, instagram - https://www.instagram.com/sickchild72/p/C4zEFO6v1mT/?img_index=2
  {
    id: 742,
    name: "Perbadanan Wakaf Selangor",
    category: "others",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000120575204866153034585802MY5932PERBADANAN WAKAF SELANGOR (PWS) 6002MY6253032516485389114430088888240050520164880316855200747596304D837",
    supportedPayment: ["duitnow"],
  },
  // khairin, facebook - https://www.facebook.com/photo.php?fbid=618271545529488&id=290481364975176&set=a.290810261608953&locale=ms_MY
  {
    id: 743,
    name: "Masjid Al Huda Kampung Punggai",
    category: "mosque",
    state: "Johor",
    city: "Bandar Penawar",
    qrImage: "",
    qrContent:
      "00020201021126530014A000000615000101065641690221QRAMB00000000021613145204866153034585802MY5925MASJID AL HUDA KAMPUNG PU6005JOHOR61058162063040546",
    supportedPayment: ["duitnow"],
  },
  // khairin, instagram - https://www.instagram.com/sickchild72/p/C4zEFO6v1mT/?img_index=2
  {
    id: 744,
    name: "Masjid Daerah Kerian",
    category: "mosque",
    state: "Perak",
    city: "Parit Buntar",
    qrImage: "",
    qrContent: "https://qr.tngdigital.com.my/m/281011053374212449552221716",
    supportedPayment: ["tng"],
  },
  // khairin, google/toyyibpay - https://toyyibpay.com/INFAQ-MASJID-TAHFIZ-AL-AYUBI
  {
    id: 745,
    name: "Maahad Tahfiz Al Ayubi",
    category: "others",
    state: "Kelantan",
    city: "Pasir Mas",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000023825204866153034585802MY5922MASJID TAHFIZ AL-AYUBI6002MY62530325163283841542600678163343505201633711491910005885763048C3B",
    supportedPayment: ["duitnow"],
  },
  // khairin, facebook - https://www.facebook.com/asysyujaah02/posts/pfbid04LeKDM4RgiAyhgxxVC7kLiFntfXQUMLum27Mfx255efsFCyqhgnK2G6VUZTRaSDJl?locale=ms_MY
  {
    id: 746,
    name: "Masjid Asy Syuja'ah",
    category: "mosque",
    state: "Melaka",
    city: "Merlimau Utara",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000023825204866153034585802MY5922MASJID TAHFIZ AL-AYUBI6002MY62530325163283841542600678163343505201633711491910005885763048C3B",
    supportedPayment: ["duitnow"],
  },
  // khairin, twitter - https://x.com/zzdnrj/status/1271294833944977408
  {
    id: 747,
    name: "Masjid Taman Puncak Jalil",
    category: "mosque",
    state: "Selangor",
    city: "Seri Kembangan",
    qrImage: "",
    qrContent: "https://qr.tngdigital.com.my/m/281011053384543285583523815",
    supportedPayment: ["tng"],
  },
  // khairin, facebook - https://www.facebook.com/maqtsskl/posts/infaq-lebih-mudah-dengan-aplikasi-qr-code-di-smartphone-andahanya-dengan-scan/559290838265541/
  {
    id: 748,
    name: "Masjid Al Qurtubi",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Segambut",
    qrImage: "",
    qrContent: "https://qr.tngdigital.com.my/m/281011057194809055896448165",
    supportedPayment: ["tng"],
  },
  // ammar azman
  {
    id: 749,
    name: "Masjid Al-Sultan Abdullah",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2133794031000000000005204729953034585802MY5925MASJID AL-SULTAN ABDULLAH6015WP KUALA LUMPUR62250721MBBQR2133794SHAHMI1186304C5FC",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.1399948278192484, 101.69935955202898],
  },
  // Fareez #183 - FB https://www.facebook.com/iera.aqila.3/posts/pfbid02kuuKrSq2both4vHJZg5SCZBp3oWp7cvhQSc9KmgAbit6KjXWu7nGMWfkBXWbqzHBl
  {
    id: 750,
    name: "Surau Darussa'adah",
    category: "surau",
    state: "W.P. Kuala Lumpur",
    city: "Keramat",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2120580031000000000005204729953034585802MY5919SURAU DARUSSA'ADAH 6015WP KUALA LUMPUR63046012",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.1747864781518444, 101.73970440455942],
  },
  // Fareez #183 - FB https://www.facebook.com/iera.aqila.3/posts/pfbid02kuuKrSq2both4vHJZg5SCZBp3oWp7cvhQSc9KmgAbit6KjXWu7nGMWfkBXWbqzHBl
  {
    id: 751,
    name: "Surau Darussa'adah",
    category: "surau",
    state: "W.P. Kuala Lumpur",
    city: "Keramat",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2120580031000000000005204729953034585802MY5919SURAU DARUSSA'ADAH 6015WP KUALA LUMPUR63046012",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.1747864781518444, 101.73970440455942],
  },
  // Fareez #183 - FB https://www.facebook.com/iera.aqila.3/posts/pfbid02kuuKrSq2both4vHJZg5SCZBp3oWp7cvhQSc9KmgAbit6KjXWu7nGMWfkBXWbqzHBl
  {
    id: 752,
    name: "Masjid Bandar Seri Putra",
    category: "mosque",
    state: "Selangor",
    city: "Bangi",
    qrImage: "",
    qrContent:
      "00020101021126580014A000000615000101065887340212MBBQR120681403100000000000520400005303458540500.005802MY5921MASJID BDR SERI PUTRA6008SELANGOR62270723MBBQR1206814FAUZISHAFIE630483BE",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.88768015908422, 101.78847436481918],
  },
  // Fareez #183 - FB https://www.facebook.com/iera.aqila.3/posts/pfbid02kuuKrSq2both4vHJZg5SCZBp3oWp7cvhQSc9KmgAbit6KjXWu7nGMWfkBXWbqzHBl
  {
    id: 753,
    name: "Musolla Pangsapuri Aranda",
    category: "surau",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent:
      "00020201021126600014A000000615000101065892670228BRQR65dd650e01d6cb62ca2456d95204866153034585802MY5925Musolla Pangsapuri Aranda6009shah alam61054046062420310M000002194052465dd650fd3f9a90682eaed6b6304A837",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.007094574417354, 101.5460361742598],
  },
  // Fareez #183 - FB https://www.facebook.com/iera.aqila.3/posts/pfbid02kuuKrSq2both4vHJZg5SCZBp3oWp7cvhQSc9KmgAbit6KjXWu7nGMWfkBXWbqzHBl
  {
    id: 754,
    name: "Masjid Jamik Sabak Bernam",
    category: "mosque",
    state: "Selangor",
    city: "Sabak Bernam",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR1145580031000000000005204729953034585802MY5925MASJID JAMIK SABAK BERNAM6008SELANGOR63041A77",
    supportedPayment: ["duitnow", "tng"],
    coords: [3.7705597859656037, 100.98524301147323],
  },
  // Fareez #183 - FB https://www.facebook.com/iera.aqila.3/posts/pfbid02kuuKrSq2both4vHJZg5SCZBp3oWp7cvhQSc9KmgAbit6KjXWu7nGMWfkBXWbqzHBl
  {
    id: 755,
    name: "Surau Ar Rahmah Chempakapuri",
    category: "surau",
    state: "Negeri Sembilan",
    city: "Nilai",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD000048725204866153034585802MY5926SURAU ARRAHMAH CEMPAKAPURI6002MY6253032516373107252290011462184580520163731073888200807956304EBD5",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.8027726697064232, 101.77330528403158],
  },
  // Fareez
  {
    id: 756,
    name: "Masjid Peket 100",
    category: "mosque",
    state: "Selangor",
    city: "Sungai Besar",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001404035204866153034585802MY5925MASJID PEKET 100 SG NIPAH6002MY62730325172905046021700914327433905201729050469097007069807161729050094729002630474F6",
    supportedPayment: ["duitnow"],
    coords: [3.6400306607571618, 101.05552127229177],
  },
  // belle, instagram
  {
    id: 757,
    name: "Masjid Selat Melaka",
    category: "mosque",
    state: "Melaka",
    city: "Kampung Bandar Hilir",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR1874817031000000000005204729953034585802MY5919MASJID SELAT MELAKA6006MELAKA63040054",
    supportedPayment: ["duitnow", "tng"],
  },
  // fyruz, whatsapp
  {
    id: 758,
    name: "Surau Al Bayan",
    category: "surau",
    state: "Selangor",
    city: "Rawang",
    qrImage: "https://i.ibb.co/FwG2JVH/SURAU-AL-BAYAN-KHK-STICKER.jpg",
    qrContent: "00020201021126470014A000000615000101065641620215PBB2024001100575204866153034585802MY5916SURAU AL - BAYAN6006RAWANG6220030639910407063446176304499C",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, facebook - https://www.facebook.com/groups/694901861284510/permalink/1601882700586417/
  {
    id: 759,
    name: "Masjid Sharifah Fatimah",
    category: "mosque",
    state: "Kedah",
    city: "Jitra",
    qrImage: "https://scontent.fkul19-3.fna.fbcdn.net/v/t39.30808-6/430854388_7650361004995543_1422030267128984310_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=4S6DD55adCwQ7kNvgE-eiPx&_nc_zt=23&_nc_ht=scontent.fkul19-3.fna&_nc_gid=AEpIqP_QPmo4MHF9127_rqj&oh=00_AYD9oU00BZUXuw5uy5r43m6jO-GETqVkMpV9DqMYFc284A&oe=673331B1",
    qrContent: "00020201021126420014A000000615000101066033460210MD000008655204866153034585802MY5923Masjid Sharifah Fatimah6002MY62530325162909342749900115505598605201668568514085007832263043961",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, facebook - https://www.facebook.com/groups/694901861284510/permalink/1601885200586167/
  {
    id: 760,
    name: "Surau Taman Seri Alam",
    category: "surau",
    state: "Selangor",
    city: "Sungai Buloh",
    qrImage: "https://scontent.fkul19-2.fna.fbcdn.net/v/t39.30808-6/431913919_7650374361660874_1054193890271509798_n.jpg?stp=dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=23TjrpPkUXsQ7kNvgGZDU9t&_nc_zt=23&_nc_ht=scontent.fkul19-2.fna&_nc_gid=A79HeEWQsVlN6Wcm3dgTcRG&oh=00_AYBi4AgW-eNabGIew1sRpluPBlKbxZIKFnO2c5Y8RqLtQQ&oe=67334D04",
    qrContent: "00020201021126610014A000000615000101065641670215QRMID0000011748041001938056685204866153034585802MY5921SURAU TAMAN SERI ALAM6008SG BULOH6105470006304E676",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, facebook - https://www.facebook.com/groups/694901861284510/permalink/1394277821346907/
  {
    id: 761,
    name: "Masjid Jamek Kamunting Taiping",
    category: "mosque",
    state: "Perak",
    city: "Taiping",
    qrImage: "https://scontent.fkul19-3.fna.fbcdn.net/v/t39.30808-6/335475774_164077083116781_2432501458972385248_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=myik9rhjaxUQ7kNvgGca3iH&_nc_zt=23&_nc_ht=scontent.fkul19-3.fna&_nc_gid=AsgS4YYbNHUcgCNKNPmmbPu&oh=00_AYDw20s0mIUTKkBOIFFo0If3VzKDgvUflih0qrGFsXDiXw&oe=67332C94",
    qrContent: "00020201021126580014A000000615000101065887340212MBBQR1698694031000000000005204000053034585802MY5922MASJID JAMEK KEMUNTING6005PERAK6304AB49",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, facebook - https://www.facebook.com/groups/694901861284510/permalink/695100714597958/
  {
    id: 762,
    name: "Masjid Daerah Barat Daya",
    category: "mosque",
    state: "Pulau Pinang",
    city: "Balik Pulau",
    qrImage: "https://scontent.fkul19-3.fna.fbcdn.net/v/t1.6435-9/93841187_3171566812875007_7956271249045323776_n.jpg?stp=dst-jpg_p350x350&_nc_cat=103&ccb=1-7&_nc_sid=f7fc3c&_nc_ohc=TFf3zbysoC4Q7kNvgH1aKck&_nc_zt=23&_nc_ht=scontent.fkul19-3.fna&_nc_gid=AFRNGFg2tDItF3p4IaiHN0V&oh=00_AYD-U3YlHkTWryVXTOnuLY3aefiO2RydwPVnFkIB1rvBxA&oe=6754C424",
    qrContent: "00020101021126580014A000000615000101065887340212MBBQR130885403100000000000520400005303458540500.005802MY5924MASJID DAERAH BARAT DAYA6012PULAU PINANG63046C4A",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, facebook - https://www.facebook.com/groups/694901861284510/permalink/695085587932804/
  {
    id: 763,
    name: "Surau Al-Jannah",
    category: "surau",
    state: "Selangor",
    city: "Bandar Rimbayu",
    qrImage: "https://scontent.fkul19-1.fna.fbcdn.net/v/t1.6435-9/93795276_3171511412880547_4774018529332559872_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f7fc3c&_nc_ohc=ojgkPbjelAsQ7kNvgE_ejC6&_nc_zt=23&_nc_ht=scontent.fkul19-1.fna&_nc_gid=Ae_QsqqMXV_6jkxuMa4R-uz&oh=00_AYBVqJK7zQmyWDOrv8CPKRVG2hBD0sznvv07iO9y2hyjdw&oe=6754F1CC",
    qrContent: "00020101021126580014A000000615000101065887340212MBBQR148083503100000000000520400005303458540500.005802MY5918SURAU AL-JANNAH BR6008SELANGOR6304E8EE",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, facebook - https://www.facebook.com/groups/694901861284510/permalink/694978877943475/
  {
    id: 764,
    name: "Surau Baiturrahman Seksyen 9",
    category: "surau",
    state: "Selangor",
    city: "Putra Heights",
    qrImage: "https://scontent.fkul19-1.fna.fbcdn.net/v/t1.6435-9/93382220_3171138872917801_3368109548182175744_n.jpg?stp=dst-jpg_p370x247&_nc_cat=106&ccb=1-7&_nc_sid=f7fc3c&_nc_ohc=5cvSh4W14dMQ7kNvgG60ZX_&_nc_zt=23&_nc_ht=scontent.fkul19-1.fna&_nc_gid=Ae_QsqqMXV_6jkxuMa4R-uz&oh=00_AYBEtoIULQuWVOqaIEcTJ8qGBRcuLGfsbi0EO4PUJQUcwg&oe=6754C81D",
    qrContent: "00020101021126580014A000000615000101065887340212MBBQR143498203100000000000520400005303458540500.005802MY5921SURAU BAITURRAHMAN PH6008SELANGOR6304A996",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, facebook - https://www.facebook.com/groups/694901861284510/permalink/694967647944598/
  {
    id: 765,
    name: "Surau Sri Embun Sutera Damansara",
    category: "surau",
    state: "Selangor",
    city: "Petaling Jaya",
    qrImage: "https://scontent.fkul19-1.fna.fbcdn.net/v/t1.6435-9/93159593_3171107502920938_8296346781017440256_n.jpg?stp=dst-jpg_s600x600&_nc_cat=105&ccb=1-7&_nc_sid=f7fc3c&_nc_ohc=5IzOb3ngPH4Q7kNvgH3v_ym&_nc_zt=23&_nc_ht=scontent.fkul19-1.fna&_nc_gid=Ae_QsqqMXV_6jkxuMa4R-uz&oh=00_AYBZi_FH2_lrlxUTZkdoiAzENO6wWHsdO4G2daAY5O4gFA&oe=6754C02E",
    qrContent: "00020101021126580014A000000615000101065887340212MBBQR150879603100000000000520400005303458540500.005802MY5915SURAU SRI EMBUN6008SELANGOR630408F2",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, facebook - https://www.facebook.com/groups/694901861284510/permalink/694910011283695/
  {
    id: 766,
    name: "Masjid Sultan Iskandar",
    category: "mosque",
    state: "Johor",
    city: "Bandar Dato Onn",
    qrImage: "https://scontent.fkul19-1.fna.fbcdn.net/v/t1.6435-9/93954904_3170929469605408_655147220340834304_n.jpg?stp=dst-jpg_p480x480&_nc_cat=105&ccb=1-7&_nc_sid=f7fc3c&_nc_ohc=syKesY3GKswQ7kNvgH5lXIJ&_nc_zt=23&_nc_ht=scontent.fkul19-1.fna&_nc_gid=AjZI4MC_8epa0FfY8Z4_qgO&oh=00_AYBpdNdfp59s9u_9Udfd-mBGbvLJotYe4fEEAlY2Oic-ZA&oe=6754BDF4",
    qrContent: "00020101021126580014A000000615000101065887340212MBBQR119240203100000000000520400005303458540500.005802MY5938MASJID SULTAN ISKANDAR BANDAR DATO ONN6005JOHOR6304EDDE",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, facebook - https://almuhajirinkjgutama.com/b1form.php
  {
    id: 767,
    name: "Surau Al-Muhajirin Kajang Utama",
    category: "surau",
    state: "Selangor",
    city: "Kajang",
    qrImage: "https://almuhajirinkjgutama.com/images/mae01.jpg",
    qrContent: "00020201021126580014A000000615000101065887340212MBBQR2049437031000000000005204000053034585802MY5919SURAU AL-MUHAJIRIN 6008SELANGOR6304CFC9",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, facebook - https://www.instagram.com/mtinh.official/p/C0DFGvSvXut/
  {
    id: 768,
    name: "Maahad Tahfiz Integrasi Nadi Huffaz",
    category: "others",
    state: "Selangor",
    city: "Rawang",
    qrImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwTEAzNDHoTuO5TEXH8NKBGge4psxxp3GReg&s",
    qrContent: "00020201021126580014A000000615000101065887340212MBBQR1684472031000000000005204829953034585802MY5921NADI HUFFAZ RESOURCES6008SELANGOR630499C3",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, solat jumaat @ tnb hq (merchant name is surau tenaga nasional)
  {
    id: 769,
    name: "Masjid TNB HQ",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Bangsar",
    qrImage: "",
    qrContent: "00020201021126420014A000000615000101066033460210MD000046635204556153034585802MY5921SURAU TENAGA NASIONAL6002MY62530325163704396056300357405129705201637225399907004971063044AB9",
    supportedPayment: ["duitnow", "tng"]
  },
  // sitisarahaqilah, github pr - https://github.com/khrnchn/sedekah-je/pull/225
  {
    id: 770,
    name: "Madrasah As-Salam",
    category: "surau",
    state: "Melaka",
    city: "Alai",
    qrImage: "https://fv5-4.files.fm/thumb_show.php?i=mktss945e5&view&v=1&PHPSESSID=978de0b8b4f3820d446ad0920290a12230cf1a61",
    qrContent: "00020201021126610014A000000615000101065641670215QRMID0000015122041001262903185204866153034585802MY5917MADRASAH AS-SALAM6006MELAKA610575400630433B5",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, google - https://www.maqtsw.net/infaq/infaq-dengan-qr-code-1
  {
    id: 771,
    name: "Masjid Al-Quddus Taman Sri Wangi",
    category: "mosque",
    state: "Sarawak",
    city: "Kuching",
    qrImage: "https://files.cdn-files-a.com/uploads/9802126/400_6708d056be541.jpg",
    qrContent: "00020201021126420014A000000615000101066033460210MD000944755204866153034585802MY5925MASJID AL-QUDDUS TAMAN SR6002MY62530325167626529824900101992397605201678959218269005186463047549",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, google - https://ppdhadis.edu.my/page/pagedetail.php?schid=1581&schname=SUMBANGAN%20KE%20DARUL%20HADIS%20LEBIH%20MUDAH%20MELALUI%20DUITNOW%20QR%20KOD
  {
    id: 772,
    name: "Pusat Pengajian Darul Hadis",
    category: "others",
    state: "Kedah",
    city: "Alor Setar",
    qrImage: "https://tahfiz.awfatech.com/hadis/content/news/staticcontent1_DH039_1689133530.jpg",
    qrContent: "00020201021126420014A000000615000101066033460210MD000009505204829953034585802MY5941Pusat pengajian Darul Hadis Yayasan Paksi6002MY6253032516292721734360075194541050520162927871375900171326304A968",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, twitter - https://twitter.com/saranidollah/status/1246258615830233088
  {
    id: 773,
    name: "Surau Al Iman Taman Arked",
    category: "surau",
    state: "Selangor",
    city: "Dengkil",
    qrImage: "https://pbs.twimg.com/media/EUuZmQ0UMAA_E_J.jpg",
    qrContent: "https://qr.tngdigital.com.my/m/281011058732047763398424782",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, google - https://yayasanmurtadha.onpay.my/order/form/mdd-mdd-infaq1
  {
    id: 774,
    name: "Yayasan Murtadha Berhad",
    category: "others",
    state: "Kedah",
    city: "Sungai Petani",
    qrImage: "https://cdn.onpay.my/users/yayasanmurtadha/media/uploads/WhatsApp%20Image%202024-08-28%20at%2011.17.37%20AM.jpg",
    qrContent: "00020201021126580014A000000615000101065887340212MBBQR2105535031000000000005204729953034585802MY5923YAYASAN MURTADHA BERHAD6005KEDAH63048D2E",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, google - https://www.raudhahautisme.org/jom-infaq-derma/
  {
    id: 775,
    name: "Pertubuhan Raudhah Autisme Islam Selangor",
    category: "others",
    state: "Selangor",
    city: "Sepang",
    qrImage: "https://www.raudhahautisme.org/wp-content/uploads/2023/08/image1.png.webp",
    qrContent: "00020201021126580014A000000615000101065887340212MBBQR1992126031000000000005204731153034585802MY5915RAUDHAH AUTISME6008SELANGOR630406B8",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, google - https://www.facebook.com/MasjidJamekShaikEusoffDhobyGhaut/posts/pfbid0w23G4D4pfWvr8824bzi2atSsbhZFgMgTR9RVEoP3VBh8hPY6Tv7s27k2xSRYN1EJl
  {
    id: 776,
    name: "Masjid Jamek Shaik Eusoff",
    category: "mosque",
    state: "Pulau Pinang",
    city: "George Town",
    qrImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0wGXzzvemgbKd3NPSj7i5UnqazqV2aE2HTnFSzBGKYkCEd1yt9BSf6IwMf7BRFUiW0JA&usqp=CAU",
    qrContent: "00020201021126580014A000000615000101065887340212MBBQR1634647031000000000005204000053034585802MY5919MASJID SHAIK EUSOFF6012PULAU PINANG6304D8FD",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, google - https://www.instagram.com/masjidalmuttaqin/p/C-ZDkACS3nN/
  {
    id: 777,
    name: "Masjid Al-Muttaqin Wangsa Melawati",
    category: "mosque",
    state: "W.P. Kuala Lumpur",
    city: "Kuala Lumpur",
    qrImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDqnT3WrhMHObMt5gPeZvaf2UGoMU3HriNGA&s",
    qrContent: "00020201021126580014A000000615000101065016640226100105040001582O0076ZA00015204839853034585802MY5918MASJID AL-MUTTAQIN6002MY62150311O0076ZA00018264BB97560062E756CF3E95D75882E814E6EEEA250A9AE7113653F8318E007F447E63041BB3",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, google - https://toyyibpay.com/INFAQ-HARI-JUMAAT
  {
    id: 778,
    name: "Masjid Baitul Mahabbah",
    category: "mosque",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "https://toyyibpay.com/asset/img/usr/21674/product/e58b77ad61c4014b08d937befb6dfc0aa2c7f5a943d55eb0b4b1ac75aeea1bb4.png",
    qrContent: "00020201021126580014A000000615000101065016640226100105630003466OAE901A00015204597353034585802MY5922MASJID BAITUL MAHABBAH6002MY62150311OAE901A00018264FDF274EC8694A5C4CB9553E25199F77F65EA2262DAFD19327AFB1CA5DD3B39F06304364D",
    supportedPayment: ["duitnow", "tng"]
  },
  // aniq, instagram
  {
    id: 779,
    name: "Surau Elmina Gardens",
    category: "surau",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "",
    qrContent: "00020201021126420014A000000615000101066033460210MD000805435204866153034585802MY5920SURAU ELMINA GARDENS6002MY627303251661826550957007879923240052016618265783810010011071616618259979110096304953D",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, facebook - https://www.facebook.com/photo.php?fbid=2049969782028767&set=p.2049969782028767&type=3
  {
    id: 780,
    name: "Surau Riyadhul Jannah",
    category: "surau",
    state: "Johor",
    city: "Bandar Penawar",
    qrImage: "https://scontent.fkul18-3.fna.fbcdn.net/v/t39.30808-6/433471771_2049969775362101_5589151800591524197_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=bd9a62&_nc_ohc=gsP7yMeI2LsQ7kNvgFIn9pT&_nc_zt=23&_nc_ht=scontent.fkul18-3.fna&_nc_gid=A7lwGd2LbuqbJwuqNbRLqqH&oh=00_AYBBHkg2bxDcCXyMczYf4sAj1RpWTSfYTal0WztkcGal2g&oe=6734C64C",
    qrContent: "00020201021126420014A000000615000101066033460210MD000831555204866153034585802MY5925Dana Surau Riyadhul Janna6002MY6273032516631636623520086941402140520166319885146800299010716166316115304200863041036",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, facebook - https://www.facebook.com/photo.php?fbid=10225513212878800&set=p.10225513212878800&type=3
  {
    id: 781,
    name: "Pusat Pengajian Islam Mohd Nor Al Bakri Masjid Lama Lebak",
    category: "others",
    state: "Pahang",
    city: "Temerloh",
    qrImage: "https://scontent.fkul18-1.fna.fbcdn.net/v/t39.30808-6/433479585_10225513212838799_8796668774375921950_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=bd9a62&_nc_ohc=wAVfqEWFwVQQ7kNvgFgNkfV&_nc_zt=23&_nc_ht=scontent.fkul18-1.fna&_nc_gid=AhiBjByFC0MVRki8hYRQ1iU&oh=00_AYB6bx2jj9SjCLqEtSwzxsvMn5BW7Aicmf1kG8j35cTw3A&oe=6734F4D5",
    qrContent: "00020201021126420014A000000615000101066033460210MD000678795204829953034585802MY5939PUSAT PENGAJIAN ISLAM MOHD NOR AL BAKRI6002MY627303251650938409355001102236062052016509384127240021923071616509382169000046304474D",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, facebook - https://www.facebook.com/photo.php?fbid=10228973039684008&set=p.10228973039684008&type=3
  {
    id: 782,
    name: "Musolla An-Nur Space U8",
    category: "surau",
    state: "Selangor",
    city: "Shah Alam",
    qrImage: "https://scontent.fkul18-3.fna.fbcdn.net/v/t39.30808-6/433472109_10228973039644007_2903566317594804875_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=bd9a62&_nc_ohc=zFt9cVcvt38Q7kNvgF14Q9X&_nc_zt=23&_nc_ht=scontent.fkul18-3.fna&_nc_gid=AJ4tJ_GXxfrlPtVyk69Y6NT&oh=00_AYD_qH35TcMthQqlyrnf9_mf580Zi1LpiCT_KZcxS3RPnA&oe=6734EC63",
    qrContent: "00020201021126420014A000000615000101066033460210MD001301815204866153034585802MY5915MUSOLLA AN-NUR 6002MY6273032517072029477130091939813630520170720464403900269640716170720168107000563045D47",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, facebook - https://www.facebook.com/photo.php?fbid=7667341323284756&set=p.7667341323284756&type=3
  {
    id: 783,
    name: "Masjid Darul Amilin",
    category: "mosque",
    state: "Sarawak",
    city: "Sibu",
    qrImage: "https://scontent.fkul18-1.fna.fbcdn.net/v/t39.30808-6/433513876_7667341309951424_1083547628065933058_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=bd9a62&_nc_ohc=OSKOZHa3BQsQ7kNvgGO6J5w&_nc_zt=23&_nc_ht=scontent.fkul18-1.fna&_nc_gid=ArTgo-o0frWRbSsw9Q6e6eq&oh=00_AYAGB0fwcU7GnaOmK8bA4ubNrOQSvyjuaVoypFfVyZK6Xw&oe=6734EE7A",
    qrContent: "00020201021126420014A000000615000101066033460210MD001313975204866153034585802MY5919MASJID DARUL AMILIN6002MY62730325171014311885800166953951505201710143802077003477007161710142819714008630403CC",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, facebook - https://www.facebook.com/photo.php?fbid=940218854377395&set=p.940218854377395&type=3
  {
    id: 784,
    name: "Masjid An-Nur Kolej Matrikulasi Johor",
    category: "mosque",
    state: "Johor",
    city: "Tangkak",
    qrImage: "https://scontent.fkul18-3.fna.fbcdn.net/v/t39.30808-6/433462267_940218851044062_1027396050689052378_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=bd9a62&_nc_ohc=wyELLMePqxcQ7kNvgEuerYa&_nc_zt=23&_nc_ht=scontent.fkul18-3.fna&_nc_gid=At8lRU4Udn5aOwhfAF_vKp3&oh=00_AYCg85GcVkvt24zmHIf3afwIUDhyhOH63wI06dlsWsMpgQ&oe=6734DEAE",
    qrContent: "00020201021126580014A000000615000101065887340212MBBQR2004736031000000000005204000053034585802MY5917MASJID AN NUR KMJ6005JOHOR6304BFE3",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, facebook - https://www.facebook.com/photo.php?fbid=7415483425173294&set=p.7415483425173294&type=3
  {
    id: 785,
    name: "Maahad Tahfiz Al Muqri",
    category: "others",
    state: "Selangor",
    city: "Puchong",
    qrImage: "https://scontent.fszb2-1.fna.fbcdn.net/v/t39.30808-6/433435717_7415483415173295_1544661700646098608_n.jpg?stp=dst-jpg_p75x225&_nc_cat=106&ccb=1-7&_nc_sid=bd9a62&_nc_ohc=-GmdI3FGAmEQ7kNvgGbuLst&_nc_zt=23&_nc_ht=scontent.fszb2-1.fna&_nc_gid=AKx6XAUoza_KNwj24NA5GMg&oh=00_AYAL3IBcyxEZvx37KEZIg-HYeRI5dA5Apaya7xhFzBOvRw&oe=6735038C",
    qrContent: "00020201021126560014A000000615000101068900610224602e2603111384ff303f98105204000053034585802MY5922MAAHAD TAHFIZ AL MUQRI6002MY8240031438df2ffc917ac0792a14b7173238ac7f5697630459EC",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, facebook - https://www.facebook.com/masjidbetinglintangbesutterengganu/posts/pfbid02s2x8sr4rKd8yF3Pu5xtS6e3zyzfFneVfbpFnafKh1eUP6qsJfKUR7CPp4oPu2RGcl
  {
    id: 786,
    name: "Masjid Kampung Benting Lintang",
    category: "mosque",
    state: "Terengganu",
    city: "Besut",
    qrImage: "https://scontent.fkul10-1.fna.fbcdn.net/v/t39.30808-6/466130866_540127702116123_1822136165249870384_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2DjEOTrj86wQ7kNvgHnxnbF&_nc_zt=23&_nc_ht=scontent.fkul10-1.fna&_nc_gid=ASqiXJ8UKR6TkL1vAGzBvTw&oh=00_AYBJpMsVGsxhk_ceFMBboeD4tFsRSiZCKFuHEd5220M9UQ&oe=67373DD4",
    qrContent: "00020201021126420014A000000615000101066033460210MD001362085204866153034585802MY5925Masjid Kampung Benting Li6002MY627303251720604842776009353789862052017206048464640047334071617206045296140046304F54A",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, facebook - https://www.facebook.com/photo?fbid=1600343667398482&set=pcb.1600318917400957
  {
    id: 787,
    name: "Masjid Al Islahiah Kuang",
    category: "mosque",
    state: "Selangor",
    city: "Sungai Buloh",
    qrImage: "https://scontent.fkul10-1.fna.fbcdn.net/v/t39.30808-6/434320686_1600346474064868_2584054906764951256_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MifyBn_1eZQQ7kNvgE0AJvv&_nc_zt=23&_nc_ht=scontent.fkul10-1.fna&_nc_gid=AzP77yNxKPIgWil2XY5Ib10&oh=00_AYCl58nxdN1O41eEM4FM9F6_ghlAlekUuSui2y0eCjg_6w&oe=67373654",
    qrContent: "00020201021126610014A000000615000101065018540215000001224042051031000000000005204866153034585802MY5921MASJID AL ISLAHIAH-QR6006RAWANG61054805062150111101921300006304DE0E",
    supportedPayment: ["duitnow", "tng"]
  },
  // khairin, facebook - https://www.facebook.com/photo/?fbid=1600343810731801&set=pcb.1600318917400957
  {
    id: 788,
    name: "Masjid Ali Imran Kampung Ulu Pauh",
    category: "mosque",
    state: "Perlis",
    city: "Arau",
    qrImage: "https://scontent.fkul10-1.fna.fbcdn.net/v/t39.30808-6/434361342_1600347030731479_547479795939317864_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SoFsfJrAeoMQ7kNvgG4ooEa&_nc_zt=23&_nc_ht=scontent.fkul10-1.fna&_nc_gid=ADYiDqtkoItjk9hBer78gzh&oh=00_AYCYkTZ_xhSpIuP_lzRGncCZfsxmE_Jtz1pmWvKjnRVv6A&oe=67372EB9",
    qrContent: "00020201021126420014A000000615000101066033460210MD000803925204866153034585802MY5916MASJID ALI IMRAN6002MY6273032516617648610040024596377100520166176486818400101210716166176396494400263040006",
    supportedPayment: ["duitnow", "tng"]
  },
  // fareez - masjid
  {
    id: 789,
    name: "Masjid Al-Raudah",
    category: "mosque",
    state: "Pahang",
    city: "Bandar Tun Abdul Razak",
    qrImage: "",
    qrContent: "00020201021126630014A000000615000101065893730208MBTR11600319Agrobank's Merchant5204739953034585802MY5917MASJID AL-RAUDAH 6015BANDAR TUN ABDU61052690063048C25",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.9011975683890894, 102.88847540570958],
  },
  {
    id: 790,
    name: "Masjid Al-Makmuriah",
    category: "mosque",
    state: "Pahang",
    city: "Bandar Tun Abdul Razak",
    qrImage: "",
    qrContent: "00020201021126600014A000000615000101065892670228BRQR6650017271c83663c27b5dd15204866153034585802MY5919MASJID AL-MAKMURIAH6015BANDAR TUN ABDU61052690062420310M00000339305246650017b6d9eca5efff8c62163047F6D",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.90770306354755, 102.87699397630429],
  },
  {
    id: 791,
    name: "Badan Khairat Kematian Felda Keratong 2",
    category: "others",
    state: "Pahang",
    city: "Bandar Tun Abdul Razak",
    qrImage: "",
    qrContent: "00020201021126600014A000000615000101065892670228BRQR664ffee448ea907710470df65204866153034585802MY5924BADAN KHAIRAT KERATONG 26015BANDAR TUN ABDU61052690062420310M0000033930524664fffaf6d9eca5efff8c5c06304E5FB",
    supportedPayment: ["duitnow", "tng"],
    coords: [2.90770306354755, 102.87699397630429],
  },
   // kuasawan #1 - FB https://www.facebook.com/photo/?fbid=10231252069421006&set=pcb.10231238536122682
  // https://maps.app.goo.gl/N3JKvLjjotisbHYv8
  {
    id: 792,
    name: "Musolla An-Nur",
    category: "surau",
    state: "Selangor",
    city: "Hulu Langat",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001301815204866153034585802MY5915MUSOLLA AN-NUR 6002MY6273032517072029477130091939813630520170720464403900269640716170720168107000563045D47",
    supportedPayment: ["duitnow"],
    coords: [3.155902981030715, 101.8984143286516],
  },
  {
    // kuasawan #2 - FB https://www.facebook.com/photo/?fbid=10231252106341929&set=pcb.10231238536122682
    id: 793,
    name: "Masjid An-Nur",
    category: "mosque",
    state: "Johor",
    city: "Tangkak",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2004736031000000000005204000053034585802MY5917MASJID AN NUR KMJ6005JOHOR6304BFE3",
    supportedPayment: ["duitnow"],
    coords: [2.2850534954286306, 102.56438834182241],
  },
  {
    // kuasawan #3 - FB https://www.facebook.com/SurauRaudhatulSalam/
    // https://surauraudhatulsalam.com/
    id: 794,
    name: "Surau Raudhatul Salam",
    category: "surau",
    state: "Negeri Sembilan",
    city: "Seremban",
    qrImage: "",
    qrContent:
      "00020201021126420014A000000615000101066033460210MD001295775204866153034585802MY5925Surau Raudhatul Salam Tam6002MY627303251705028364458003653696092052017050284004450010000071617050279327500016304F021",
    supportedPayment: ["duitnow"],
    coords: [2.65543941208627, 101.89854765519695],
  },
  {
    // kuasawan #4 - FB https://www.facebook.com/SurauBM/?locale=ms_MY
    id: 795,
    name: "Surau Baitul Majid",
    category: "surau",
    state: "Selangor",
    city: "Puncak Alam",
    qrImage: "",
    qrContent:
      "00020201021126580014A000000615000101065887340212MBBQR2077119031000000000005204000053034585802MY5918SURAU BAITUL MAJID6008SELANGOR6304DBA0",
    supportedPayment: ["duitnow"],
    coords: [3.256309116498691, 101.4564148996543],
  },
  {
    // kuasawan #5 - FB https://www.facebook.com/p/Masjid-Sabilal-Muhtadin-Parit-Betong-Mukim-7-Tg-Sembrong-100067321512717/
    id: 796,
    name: "Masjid Sabilal Muhtadin Parit Betong",
    category: "mosque",
    state: "Johor",
    city: "Ayer Hitam",
    qrImage: "",
    qrContent: "",
    supportedPayment: ["duitnow"],
    coords: [1.902816761451705, 103.0722078952398],
  },
  // khairin, facebook - https://www.facebook.com/MDHK51a/?locale=ms_MY
  {
    id: 797,
    name: "Masjid Dato Haji Kamaruddin",
    category: "mosque",
    state: "Selangor",
    city: "Petaling Jaya",
    qrImage: "https://scontent.fkul19-3.fna.fbcdn.net/v/t39.30808-6/434279104_924149493047962_446451129013946566_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=vTXH7Ra8l5kQ7kNvgEjfb9X&_nc_zt=23&_nc_ht=scontent.fkul19-3.fna&_nc_gid=AYTJOsRHfkFkOMn8FzjbXck&oh=00_AYAre8LTWPgfK2PYO6i8iq_exjcqno6mWHbeydZ69XuuCw&oe=674506D1",
    qrContent: "00020101021126580014A000000615000101065887340212MBBQR1163409031000000000005204000053034585802MY5907MDHK51A6008SELANGOR63045C63",
    supportedPayment: ["duitnow", "tng"]
  },
  // afiq che man, twitter
  {
    id: 798,
    name: "Masjid Ar-Rahmah Seksyen 17A",
    category: "mosque",
    state: "Selangor",
    city: "Petaling Jaya",
    qrImage: "",
    qrContent: "00020201021126420014A000000615000101066033460210MD001416885204866153034585802MY5925MASJID AR RAHMAH SEKSYEN 6002MY627303251731567975990001885630318052017315680016270060474071617315676779690076304C0C5",
    supportedPayment: ["duitnow", "tng"]
  },
  // afiq che man, twitter
  {
    id: 799,
    name: "Masjid At-Taqwa TTDI",
    category: "mosque",
    state: "Selangor",
    city: "Petaling Jaya",
    qrImage: "",
    qrContent: "https://qr.tngdigital.com.my/m/281011057662659784149750818",
    supportedPayment: ["tng"]
  },
  // {luqman}, {nadiahlotfi-twitter}
  {
    id: 800,
    name: "Masjid An-Nur UTP",
    category: "mosque",
    state: "Perak",
    city: "Seri Iskandar",
    qrImage: "https://github.com/user-attachments/assets/3165a984-45da-422a-bab6-8d600d6c341e",
    qrContent: "00020201021126420014A000000615000101066033460210MD000090825204866153034585802MY5923JAWATANKUASA MASJID UTP6002MY6253032516432796812750095443242570520164327971048800359546304E5EB",
    supportedPayment: ["duitnow", "tng"]
  },
  // hnish, twitter - https://x.com/Hnish_t/status/1861001444113191003
  {
    id: 801,
    name: "Surau Tengah Kampung Batu 30",
    category: "surau",
    state: "Perak",
    city: "Kuala Lumpur",
    qrImage: "https://pbs.twimg.com/media/GdOa8sNboAAAJZd?format=jpg&name=medium",
    qrContent: "",
    supportedPayment: ["duitnow", "tng"]
  },
];
