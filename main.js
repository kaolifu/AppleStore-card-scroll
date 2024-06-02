'use strict'
{
  class StoreCard {
    constructor(bgImg, fontColor, itemType, title, price) {
      this.item = document.createElement('div');
      this.item.style.backgroundImage = bgImg;
      this.item.classList.add('item');
      this.item.classList.add(fontColor);

      this.itemType = document.createElement('h4');
      this.itemType.textContent = itemType;
      this.title = document.createElement('h3');
      this.title.innerHTML = title.replace(/\n/g, '<br>');
      this.price = document.createElement('p');
      this.price.innerHTML = price.replace(/\n/g, '<br>');

      this.item.appendChild(this.itemType);
      this.item.appendChild(this.title);
      this.item.appendChild(this.price);

      items.appendChild(this.item);
    }
  }

  const items = document.getElementById('items');

  //storeCard Data
  const storeCards = [
    {
      bgImg: 'url(../img/store-card/store-card-40-ipad-pro-202405.jpeg)',
      fontColor: 'fontwhite',
      itemType: 'IPAD PRO',
      title: 'ありえない一枚',
      price: '168,800円(税込)から'
    },
    {
      bgImg: 'url(../img/store-card/store-card-40-iphone-15-pro-202309.jpeg)',
      fontColor: 'fontwhite',
      itemType: 'IPHONE 15 PRO',
      title: 'Titanium',
      price: '159,800円(税込)から、または36回払いで\n4,438円/月から',
    },
    {
      bgImg: 'url(../img/store-card/store-card-40-ipad-air-202405.jpeg)',
      fontColor: 'fontblack',
      itemType: 'IPAD AIR',
      title: 'Airに新風。',
      price: '98,800円(税込)から'
    },
    {
      bgImg: 'url(../img/store-card/store-card-40-apple-pencil-202405.png)',
      fontColor: 'fontwhite',
      itemType: 'APPLE PENCIL PRO',
      title: 'もう、作らずにはいられない。',
      price: '21,800円(税込)'
    },
    {
      bgImg: 'url(../img/store-card/store-card-13-iphone-nav-202309.png)',
      fontColor: 'fontblack',
      itemType: '月々の分割支払い',
      title: 'iPhone15を金利0%、36回払いで購入できます。通信キャリア契約付きなら、さらにお得に。',
      price: 'しかも、24か月目のアップグレードで残りの分割払いが不要に。'
    },
    {
      bgImg: 'url(../img/store-card/store-card-40-watch-s9-202309_GEO_JP.jpeg)',
      fontColor: 'fontwhite',
      itemType: 'APPLE WATCH SERIES 9',
      title: '頭脳、明るさ、パワーの未来形。',
      price: '59,800円(税込)から'
    },
    {
      bgImg: 'url(../img/store-card/store-card-40-macbook-air-202402.jpeg)',
      fontColor: 'fontblack',
      itemType: 'MACBOOK AIR',
      title: 'フットワークまで軽くなる。',
      price: '148,800円(税込)から'
    },
    {
      bgImg: 'url(../img/store-card/store-card-40-pride-202405.jpeg)',
      fontColor: 'fontwhite',
      itemType: 'プライドエディションブレイデッドソロループ',
      title: 'プライドと輝こう。 ',
      price: '14,800円(税込)'
    },
    {
      bgImg: 'url(../img/store-card/store-card-40-iphone-15-202309.jpeg)',
      fontColor: 'fontblack',
      itemType: 'IPHONE 15',
      title: 'うっとり ',
      price: '124,800円(税込)から、または36回払いで\n3,466円/月から'
    },
    {
      bgImg: 'url(../img/store-card/store-card-40-watch-ultra-202309_GEO_JP.jpeg)',
      fontColor: 'fontblack',
      itemType: 'APPLE WATCH ULTRA 2',
      title: 'さらなる冒険を。',
      price: '128,800円(税込)から'
    },
    {
      bgImg: 'url(../img/store-card/store-card-40-macbook-pro-202310.jpeg)',
      fontColor: 'fontblack',
      itemType: 'MACBOOK PRO',
      title: 'パワーの美学。',
      price: '248,800円(税込)から'
    },
    {
      bgImg: 'url(../img/store-card/store-card-40-watch-se-202403_GEO_JP.jpeg)',
      fontColor: 'fontblack',
      itemType: 'APPLE WATCH SE',
      title: 'こんなにできる。\nこんなに手軽。',
      price: '34,800円(税込)から'
    },
  ];

  storeCards.forEach(storeCard => {
    new StoreCard(storeCard.bgImg, storeCard.fontColor, storeCard.itemType, storeCard.title, storeCard.price);
  });

  //cards scroll

  let scrollTimer;
  let scrollLength = items.scrollLeft;
  let cardNum = 0;

  items.addEventListener('scroll', () => {
    clearTimeout(scrollTimer); // 清除之前的计时器
    scrollTimer = setTimeout(() => {
      // 在滚动停止后执行的代码
      // console.log("滚动已经停止");
      scrollLength = items.scrollLeft;
      // console.log('滑动距离' + scrollLength);
      cardNum = Math.floor(scrollLength / 424);
      // console.log('滑动张数' + cardNum);
      // 调用你想要执行的函数
      yourFunction(scrollLength,cardNum);
    }, 50); // 设置一个适当的延迟时间
  });

  function yourFunction(scrollLength,cardNum) {
    // 在这里编写你想要在滚动停止后执行的函数代码
    // console.log("滚动停止后执行的函数");
    if (scrollLength % 424 < 200) {
      items.scrollLeft = 424 * cardNum;
    } else {
      items.scrollLeft = 424 * (cardNum + 1);
    }
  }



}