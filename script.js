var meinArray = ["https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Fortnite_Chapter2_Season2.jpg",
               "https://partner-hund.de/sites/partner-hund.de/files/hund-richtig-beschaeftigen-spielen-spielregeln.jpg",
               "https://www.tierklinik-oberhaching.de/wp-content/uploads/BildBlogPupsalarm-beim-Hund_01.2019-2-e1567686155809.jpeg",
               "https://www.spektrum.de/fm/912/thumbnails/Barracuda-iStock-175386741_RainervonBrandis.jpg.4234593.jpg",
               "https://i.ytimg.com/vi/rD-T36LemGg/maxresdefault.jpg",
               "https://images.mein-mmo.de/medien/2019/03/fn-fish-titel-01-1280x720.png",
               "https://i.pinimg.com/736x/2c/68/5a/2c685a5a4549858b89c05bfc0eb8b2a4.jpg",
               "https://www.animals-digital.de/fileadmin/Bilder_und_Fotos/Hunde/Hunderassen/Hundebilder-lustig.jpg",
               "https://1.bp.blogspot.com/-rIna0DwPclU/UZXt4ZhAIbI/AAAAAAAAABI/9HKvxbNgbyU/s1600/hab-alle.jpg",
               "https://i.pinimg.com/236x/50/5d/e4/505de4959f13f7da5d925cd211b07eca.jpg",
               "https://i.ytimg.com/vi/rx07FwL4VNQ/maxresdefault.jpg",
               "https://www.hunde-bar.de/images/petselfiez01-468x468.jpg",
               "https://www.animals-digital.de/fileadmin/Bilder_und_Fotos/Hunde/Hunderassen/Lustige_Hunde/Lustige-Hunde-1.jpg",
               "https://coubsecure-s.akamaihd.net/get/b188/p/coub/simple/cw_timeline_pic/94d9d038829/753ec3c16f99b6e3d344c/med_1553608045_image.jpg",
               "https://acegif.com/wp-content/uploads/funny-dog-111-gap.jpg",
                "https://img-a.udemycdn.com/course/750x422/1210008_6859.jpg",
                "https://assets.t3n.sc/magazin/wp-content/uploads/2019/06/Fortnite.png?auto=format&fit=crop&h=348&ixlib=php-2.3.0&w=620",
                "https://media.makeameme.org/created/das-ist-mein-5cc1cc.jpg",
                "https://images7.memedroid.com/images/UPLOADED195/56bdbb4f4dfc8.jpeg",
                "https://ih1.redbubble.net/image.613776335.5698/fmp,x_small,gloss,wall_texture,product,750x1000.u7.jpg"];


function bildGenerieren() {
  var zufallsZahl = Math.random() * 20;
  var index = Math.floor(zufallsZahl) ;
  console.log(meinArray[index] );
  
  document.getElementById("hundebild").src = meinArray[index];
}
moin

