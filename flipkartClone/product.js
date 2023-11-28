let sample_data = [
    {
        Brand:"GIZ-M001 Wired Optiacal Mouse",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/mouse/d/h/a/giz-ms001-mouse-with-1200-dpi-3-button-design-with-clickable-original-imagg33hxghctfzk.jpeg?q=70",

        names:"Mouse",
        price:"₹177",
        actualprice:"₹399",
        offer:"Bank Offer"
    },
    {
        Brand:"ZEBRONICS USB Comfort+Wired Optical Mouse",
        img_src:"https://rukminim2.flixcart.com/image/612/612/kpcy5jk0/mouse/f/u/f/usb-comfort-zebronics-original-imag3m7yhwyaj6rn.jpeg?q=70",
        names:"Mouse",
        price:"₹193",
        actualprice:"₹249",
        offer:"Daily saver"
    },
    {
        Brand:"Kreo Chimera Wired Optical Gaming Mouse",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/mouse/0/s/u/chimera-kreo-original-imagtq7ae6gmyxph.jpeg?q=70",
        names:"Mouse",
        price:"₹2125",
        actualprice:"₹3000",
        offer:"Bank Offer"
    }, {
        Brand:"RUNMUS CW921 Wired Gaming Mouse With 3600 DPI Wired Opt",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/mouse/4/j/n/cw921-wired-gaming-mouse-with-3600-dpi-runmus-original-imagzbfahuezpg4h.jpeg?q=70",
        names:"Wired Mouse",
        price:"₹399",
        actualprice:"₹1599",
        offer:"Bank Offer"
    },
    {
        Brand:"Arctic Fox Wired USB Gaming Mouse With Breathing Lights",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/mouse/d/l/l/wired-usb-gaming-mouse-with-breathing-lights-and-dpi-upto-3600-original-imagg6btapfaxtzh.jpeg?q=70",
        names:"Mouse",
        price:"₹239",
        actualprice:"₹599",
        offer:"Bank Offer"
    },
    {
        Brand:"HP Z3700 Wireless Optical Mouse",
        img_src:"https://rukminim2.flixcart.com/image/612/612/jrkyfm80/mouse/h/u/f/hp-1000-original-imafd3jqy5sygn2s.jpeg?q=70",
        names:"Mouse",
        price:"₹857",
        actualprice:"₹1798",
        offer:"Bank Offer"
    },
    {
        Brand:"Ambrane Sliq / Silent Clicks, 1200 DPI; Light Weight Wireless Optical Mouse  (2.4GHz Wireless, Green)",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/mouse/x/r/g/-original-imagrs2t3hzwwgzr.jpeg?q=70",
        names:"Mouse",
        price:"₹249",
        actualprice:"₹799",
        offer:"Daily saver"
    },
     {
        Brand:"RPM Euro Games Rechargeable - 500 mAh Battery | Upto 3200 DPI | 6 Buttons | Backlit RGB Wireless Optical Gaming Mouse  (2.4GHz Wireless, Black)",
        img_src:"https://rukminim2.flixcart.com/image/612/612/kxnl6kw0/mouse/5/8/m/wireless-gaming-mouse-rechargeable-500-mah-battery-upto-3200-dpi-original-imaga2da9yxvenhc.jpeg?q=70",
        names:"Mouse",
        price:"₹639",
        actualprice:"₹1490",
        offer:"Save extra with combo offer"
    },
    {
        Brand:"APPLE MLA02ZM/A Magic 2 Wireless Touch Mouse with Bluetooth  (White)",
        img_src:"https://rukminim2.flixcart.com/image/612/612/jj6130w0/mouse/y/g/y/apple-mla02zm-a-magic-2-original-imaf6t7c4wp46taz.jpeg?q=70",
        name:"Mouse",
        price:"₹6799",
        actualprice:"₹7500",
        offer:"Bank Offer"
    },
    
    {
        Brand:"ZEBRONICS Zeb- Transformer- M Wired Optical Gaming Mouse  (USB 3.0, White)",
        img_src:"https://rukminim2.flixcart.com/image/612/612/kzogn0w0/mouse/x/j/o/zeb-transformer-m-zebronics-original-imagbmxjqqw624pa.jpeg?q=70",
        names:"Mouse",
        price:"₹575",
        actualprice:"₹749",
        offer:"Hot deal"
    },
    {
        Brand:"Razer Death Adder Essential / Lightweight(96gms) ,Chroma Lighting,upto 6400 DPI Wired Optical Gaming Mouse  (USB 3.0, White)",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/mouse/n/d/g/razer-deathadder-essential-white-edition-6400-dpi-ergonomic-original-imaggyvu9gqrazsg.jpeg?q=70",
        names:"mouse",
        price:"₹1199",
        actualprice:"₹4499",
        offer:"Bank Offer"
    },
    {
        Brand:"DELL WM126 Wireless Optical Mouse  (USB, Black)",
        img_src:"https://rukminim2.flixcart.com/image/612/612/ju8oxow0/mouse-refurbished/k/f/h/c-optical-mouse-wm126-dell-original-imaf95ppnwp3gupm.jpeg?q=70",
        name:"mouse",
        price:"₹799",
        actualprice:"₹1249",
        offer:"Bank Offer"
    },
    {
        Brand:"Logitech M171 / Optical Tracking, Ambidextrous Wireless Optical Mouse  (2.4GHz Wireless, Red, Black)",
        img_src:"https://rukminim2.flixcart.com/image/612/612/kz7bcsw0/mouse/e/c/0/-original-imagb9kgfs6uxjbq.jpeg?q=70",
        names:"Mouse",
        price:"₹595",
        actualprice:"₹845",
        offer:"Bank Offer"
    },


];

localStorage.setItem("productsdata",JSON.stringify(sample_data));
let collection=JSON.parse(localStorage.getItem("productsdata"))||[];

 //let cal=document.getElementById("collection");

 function Product(){
    let box=document.createElement("div");

    let price1=document.createElement("span1");

    let price2=document.createElement("span");
    
    let offer=document.createElement("span2");


    collection.map((element)=>{
     let box=document.createElement("div");

     let innerbox=document.createElement("div")

    let price1=document.createElement("span1");
    price1.innerHTML=element.price;

    let offer=document.createElement("span2");
    offer.innerHTML=element.offer;
    


    let price2=document.createElement("span");
    price2.innerHTML=element.actualprice;
    
    innerbox.append(price1,price2,offer);
    innerbox.className="innerbox"

    let avatar=document.createElement("img");
    avatar.src=element.img_src;
    avatar.className="avatar"

    
    
    let brand=document.createElement("p");
    brand.innerHTML=element.Brand;

    box.append(avatar,brand,innerbox);

    document.getElementById("collection").append(box);

    })

 }
 Product();
