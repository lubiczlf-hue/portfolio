// Lista filmów pobrana z lubiczdp.com.
// Aby dodać nowy film, skopiuj jeden wpis i podmień: title, embed oraz image.

const films = [
  {
    "title": "Film 01",
    "type": "YouTube",
    "embed": "https://www.youtube.com/embed/cOiN32ALkTI?rel=0&wmode=opaque&hd=1&enablejsapi=1",
    "image": "https://img.youtube.com/vi/cOiN32ALkTI/maxresdefault.jpg"
  },
  {
    "title": "Film 02",
    "type": "YouTube",
    "embed": "https://www.youtube.com/embed/IJjdUixIz7U?rel=0&wmode=opaque&hd=1&enablejsapi=1",
    "image": "https://img.youtube.com/vi/IJjdUixIz7U/0.jpg"
  },
  {
    "title": "Film 03",
    "type": "YouTube",
    "embed": "https://www.youtube.com/embed/5DkPYaFmfo0?rel=0&wmode=opaque&hd=1&enablejsapi=1",
    "image": "https://img.youtube.com/vi/5DkPYaFmfo0/maxresdefault.jpg"
  },
  {
    "title": "Film 04",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/986985415?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/1902569955-b779d9fab107c94389162934f8d174788c05ab2ec98674a9effe61fd7ac93e72-d_1280"
  },
  {
    "title": "Film 05",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/1124130218?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/2065905367-f15c5f77717adc3e1362e4f5a2017699da676245e6ceb5f68f62e4555baab36b-d_1280?region=us"
  },
  {
    "title": "Film 06",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/903677371?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/1784089663-b68790b35b23ae3fd9668956adf1ae82dfed17c875eb3b14302c1911dad42375-d_1280"
  },
  {
    "title": "Film 07",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/986988575?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/1902570829-48b968df151b9563fb50168fe296186c6628ced9f6d80b457b9bd9c1125b7c30-d_1280"
  },
  {
    "title": "Film 08",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/1124259192?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/2066071306-19de7d6730a06c761258132b1ab0c719dbf98c0c5a05f217bec8bbc557b08167-d_1280?region=us"
  },
  {
    "title": "Film 09",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/510287358?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/1056358726-3cd348c88b555da642a30469e00e33604b754db66569be82dacab6ed00a61df8-d_1280"
  },
  {
    "title": "Film 10",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/290499232?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/726393598-164fe869853bdad12661e28f36fcab56acd7a1aef640c1d7714519cd08c8abcf-d_1280"
  },
  {
    "title": "Film 11",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/510276917?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/1056341332-3ce8541b8af88e2dade2c859331385b619d5d49acfb00f49e753c7086c995fc2-d_1280"
  },
  {
    "title": "Film 12",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/230478613?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/1056385431-ae2bbebe563e3c983e74b66d9cfa8e60e84743405a43f21a7708038c4973ec39-d_1280"
  },
  {
    "title": "Film 13",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/510302423?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/1056383232-4c07f5c698568e9ce1ce358cc4392e574f546e28a2ce542966e9dc56a75a89ad-d_1280"
  },
  {
    "title": "Film 14",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/236798850?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/659008285-35334ceea62364adab357c70088597ba8400fa4995c25bf1182668b6a1e36d83-d_1280"
  },
  {
    "title": "Film 15",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/227778655?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/647664236-bd5229e2511b7f83d51ee2af79a3b5da6f8333ee99ab4513ea02a25cfd650694-d_1280"
  },
  {
    "title": "Film 16",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/574840947?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/1188892997-7245bfb03fc0582ae2f3e03daac335b1532a55a467c81ebea176c27b1f506b53-d_1280"
  },
  {
    "title": "Film 17",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/715654445?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/1442293988-9667f8301d85254a75eec7e64abda093680b737f20df8bef3f9416ac4f09265e-d_1280"
  },
  {
    "title": "Film 18",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/269845437?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/743605984-458c4672674401656fb1eb3cf7164a938da45301eeca3e4942a9aa30697fdc2d-d_1280"
  },
  {
    "title": "Film 19",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/903684782?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/1784089120-0468ae1381c3befbf7a9660a9a2d9071f2d41991813e8fc64616bf647ac033d0-d_1280"
  },
  {
    "title": "Film 20",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/697882778?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/1411394983-a8530fca9abe76b3a817109e4f05d75fe1a215d50d73ed080c4f54831975af8d-d_1280"
  },
  {
    "title": "Film 21",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/255637555?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/713814349-79c3fb5e4508f66ae944fdd8bdd045e1e5eb216eb1629d476cf783ae6b92f11b-d_1280"
  },
  {
    "title": "Film 22",
    "type": "YouTube",
    "embed": "https://www.youtube.com/embed/dE88Gq-_O38?rel=0&wmode=opaque&hd=1&enablejsapi=1",
    "image": "https://img.youtube.com/vi/dE88Gq-_O38/maxresdefault.jpg"
  },
  {
    "title": "Film 23",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/697883903?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/1411396474-d20fc54d05fda0ee8d80c0b9c818b95c1067bd2707b6eae3c6bfa270317e84e6-d_1280"
  },
  {
    "title": "Film 24",
    "type": "YouTube",
    "embed": "https://www.youtube.com/embed/OnM60LdtDno?rel=0&wmode=opaque&hd=1&enablejsapi=1",
    "image": "https://img.youtube.com/vi/OnM60LdtDno/maxresdefault.jpg"
  },
  {
    "title": "Film 25",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/995551531?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/1911652602-71ad37bfa3b1e54819fd958c9521cac2f78ed053edc83357f9065045cbe3c2e8-d_1280"
  },
  {
    "title": "Film 26",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/510299257?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/1056386017-81afe2bef861ddea257a05d87281afa1071963e4e31b4a73d33e0c5c959a4711-d_1280"
  },
  {
    "title": "Film 27",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/574826771?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/1188867284-3a4f2cd40148a458852637b080100b123e9a610e5b4c4487e5cda62fa9230720-d_1280"
  },
  {
    "title": "Film 28",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/715650501?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/1442291264-67e1e8364add0c34461ec037d4be4e8510182e62a8b16cc402b38be6e6c4f7d9-d_1280"
  },
  {
    "title": "Film 29",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/510297771?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/1056377631-fb5fd4290e8df53603b9ab45b4ad9395230aa8e91c9f3515eacffa9d66c088aa-d_1280"
  },
  {
    "title": "Film 30",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/290467520?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/726349849-b59f0fa29dcad9494d58c0db701af55ebeacdd6c561b83c012e1c1ae589de175-d_1280"
  },
  {
    "title": "Film 31",
    "type": "YouTube",
    "embed": "https://www.youtube.com/embed/JtJasrdBmxA?rel=0&wmode=opaque&hd=1&enablejsapi=1",
    "image": "https://img.youtube.com/vi/JtJasrdBmxA/maxresdefault.jpg"
  },
  {
    "title": "Film 32",
    "type": "YouTube",
    "embed": "https://www.youtube.com/embed/D8TqtkSvWJ4?rel=0&wmode=opaque&hd=1&enablejsapi=1",
    "image": "https://img.youtube.com/vi/D8TqtkSvWJ4/maxresdefault.jpg"
  },
  {
    "title": "Film 33",
    "type": "YouTube",
    "embed": "https://www.youtube.com/embed/onVmDs6ENHE?rel=0&wmode=opaque&hd=1&enablejsapi=1",
    "image": "https://img.youtube.com/vi/onVmDs6ENHE/maxresdefault.jpg"
  },
  {
    "title": "Film 34",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/510293968?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/1056373593-cd884aa26000b4f8bbe62bf551196faba0619193142e15f9af5f69ffd593c1ca-d_1280"
  },
  {
    "title": "Film 35",
    "type": "YouTube",
    "embed": "https://www.youtube.com/embed/E3RQEQhs8fY?rel=0&wmode=opaque&hd=1&enablejsapi=1",
    "image": "https://img.youtube.com/vi/E3RQEQhs8fY/maxresdefault.jpg"
  },
  {
    "title": "Film 36",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/781455964?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/1673181908-2ad555cc0686929cfecfd7a38ef0e88b4dc9333e1e1a1a7330c15a7e94d1e6bb-d_1280"
  },
  {
    "title": "Film 37",
    "type": "YouTube",
    "embed": "https://www.youtube.com/embed/e3dafon0bKg?rel=0&wmode=opaque&hd=1&enablejsapi=1",
    "image": "https://img.youtube.com/vi/e3dafon0bKg/maxresdefault.jpg"
  },
  {
    "title": "Film 38",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/510278178?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/1056372826-751549636573364dd992736c82c0db52fd1c4cd8983d79f38f0388520dc50a94-d_1280"
  },
  {
    "title": "Film 39",
    "type": "Vimeo",
    "embed": "https://player.vimeo.com/video/1020316306?title=0&byline=0&portrait=0&color=ffffff&api=1",
    "image": "https://i.vimeocdn.com/video/1938864748-ab9a5cedbb5d873f02f6823ed56b5451fbd3109bfb804b68502da8b60f9bfa81-d_1280"
  }
];
