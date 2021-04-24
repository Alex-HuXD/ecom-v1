const SHOP_DATA = {
  backpacks: {
    id: 1,
    title: "Backpacks",
    routeName: "backpacks",
    items: [
      {
        id: 1,
        name: "Dark Green",
        imageUrl:
          "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        price: 150,
      },
      {
        id: 2,
        name: "Medium Yellow",
        imageUrl:
          "https://images.unsplash.com/photo-1580087256394-dc596e1c8f4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        price: 180,
      },
      {
        id: 3,
        name: "Granite",
        imageUrl:
          "https://images.unsplash.com/photo-1575844264771-892081089af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
        price: 350,
      },
      {
        id: 4,
        name: "Leather Yellow",
        imageUrl:
          "https://images.unsplash.com/photo-1572537794493-079b10d702df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        price: 250,
      },
      {
        id: 5,
        name: "Gregory Blue",
        imageUrl:
          "https://images.unsplash.com/photo-1576252951301-3b7b1e4278d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80",
        price: 180,
      },
      {
        id: 6,
        name: "HMG 2400",
        imageUrl:
          "https://images.unsplash.com/photo-1578007176246-b0951720e399?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80",
        price: 140,
      },
      {
        id: 7,
        name: "Jansport",
        imageUrl:
          "https://images.unsplash.com/photo-1592859632034-2eabea048f0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        price: 180,
      },
      {
        id: 8,
        name: "Osprey Aether",
        imageUrl:
          "https://images.unsplash.com/photo-1604604716680-4e3f899750e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        price: 140,
      },
      {
        id: 9,
        name: "REI Co-op",
        imageUrl:
          "https://images.unsplash.com/photo-1520361721456-fc0b295ec17f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        price: 160,
      },
    ],
  },
  knifies: {
    id: 2,
    title: "Knifies",
    routeName: "knifies",
    items: [
      {
        id: 10,
        name: "ESEE",
        imageUrl:
          "https://images.unsplash.com/photo-1586541952061-0d43652df8b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80",
        price: 20,
      },
      {
        id: 11,
        name: "Damascus",
        imageUrl:
          "https://images.unsplash.com/photo-1588202807093-b41294df13af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
        price: 80,
      },
      {
        id: 12,
        name: "Benchmade",
        imageUrl:
          "https://images.unsplash.com/photo-1571775990544-465f405ca351?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
        price: 110,
      },
      {
        id: 13,
        name: "Spyderco",
        imageUrl:
          "https://images.unsplash.com/photo-1614061688318-c13da779e425?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        price: 160,
      },
      {
        id: 14,
        name: "Boker",
        imageUrl:
          "https://images.unsplash.com/photo-1614607453779-44602e149456?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80",
        price: 160,
      },
      {
        id: 15,
        name: "Gerber",
        imageUrl:
          "https://images.unsplash.com/photo-1613235197399-2010f3e728ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2VyYmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 160,
      },
      {
        id: 16,
        name: "Kershaw",
        imageUrl:
          "https://images.unsplash.com/photo-1583267986860-bc1704c11f0f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        price: 190,
      },
      {
        id: 17,
        name: "SOG",
        imageUrl:
          "https://images.unsplash.com/photo-1579232289876-ed4b4ffccb09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        price: 200,
      },
    ],
  },
  footwears: {
    id: 3,
    title: "Footwears",
    routeName: "footwears",
    items: [
      {
        id: 18,
        name: "Salomon",
        imageUrl:
          "https://images.unsplash.com/photo-1582898967731-b5834427fd66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
        price: 125,
      },
      {
        id: 19,
        name: "Outdoors",
        imageUrl:
          "https://images.unsplash.com/photo-1546367564-ade1880f8921?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80",
        price: 90,
      },
      {
        id: 20,
        name: "Brown boots",
        imageUrl:
          "https://images.unsplash.com/photo-1575987116913-e96e7d490b8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: 90,
      },
      {
        id: 21,
        name: "Timberland",
        imageUrl:
          "https://images.unsplash.com/photo-1520219306100-ec4afeeefe58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1293&q=80",
        price: 165,
      },
      {
        id: 22,
        name: "Colored",
        imageUrl:
          "https://images.unsplash.com/photo-1529339944280-1a37d3d6fa8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: 185,
      },
    ],
  },
  outwears: {
    id: 4,
    title: "Outwears",
    routeName: "outwears",
    items: [
      {
        id: 23,
        name: "Patagonia",
        imageUrl:
          "https://www.switchbacktravel.com/sites/default/files/inline-images/Patagonia%20Torrentshell%203L%20rain%20jacket.jpg",
        price: 250,
      },
      {
        id: 24,
        name: "Arc'teryx",
        imageUrl:
          "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Rain%20Jackets/Arc%27teryx%20Zeta%20SL%20rain%20jacket_1.jpg",
        price: 200,
      },
      {
        id: 25,
        name: "REI",
        imageUrl:
          "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Rain%20Jackets/REI%20Co-op%20Rainier%20rain%20jacket_0.jpg",
        price: 280,
      },
      {
        id: 26,
        name: "Outdoor Research",
        imageUrl:
          "https://www.switchbacktravel.com/sites/default/files/inline-images/Outdoor%20Research%20Helium%20rain%20jacket.jpg",
        price: 180,
      },
      {
        id: 27,
        name: "Black Diamond",
        imageUrl:
          "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Rain%20Jackets/Black%20Diamond%20StormLine%20Stretch%20rain%20jacket.jpg",
        price: 245,
      },
      {
        id: 28,
        name: "Marmot",
        imageUrl:
          "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Rain%20Jackets/Marmot%20Minimalist%20rain%20jacket_1.jpg",
        price: 135,
      },
      {
        id: 29,
        name: "Columbia",
        imageUrl:
          "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Rain%20Jackets/Columbia%20Watertight%20II%20waterproof%20rain%20jacket.jpg",
        price: 120,
      },
    ],
  },
  essential_gears: {
    id: 5,
    title: "Essential_gears",
    routeName: "essential_gears",
    items: [
      {
        id: 30,
        name: "Stoic Tent",
        imageUrl:
          "https://images.ctfassets.net/r7p9m4b1iqbp/5ckKDMl94imJ4f9IEvZT6l/5059469c18fb02ef55c56d8c4b66024a/stoic-madrone-4-person-tent.jpg?w=600&fm=webp&q=90",
        price: 325,
      },
      {
        id: 31,
        name: "Marmot Sleeping Bag",
        imageUrl:
          "https://images.ctfassets.net/r7p9m4b1iqbp/kcFdwXPf0oODdnogVBiZD/4f8f9c940fbaf1b11425eab46c57c9f3/marmot-sleeping-bag-best-gear-new-outdoorists.jpg?w=600&fm=webp&q=90",
        price: 120,
      },
      {
        id: 32,
        name: "Multi-Tool",
        imageUrl:
          "https://images.ctfassets.net/r7p9m4b1iqbp/39l5Hhmp4A31E0TDA9px0u/a7a2db1bb8cfa518fb2976934ced085c/REI-GG2-gerber-multitool.jpg?w=600&fm=webp&q=90",
        price: 25,
      },
      {
        id: 33,
        name: "Headlamp",
        imageUrl:
          "https://images.ctfassets.net/r7p9m4b1iqbp/49SeS8zVam78a3WDrmK2AH/64d10b18bd8a203797adffa4c62af5d0/REI-GG2-BD-hedlamp.jpg?w=600&fm=webp&q=90",
        price: 25,
      },
      {
        id: 34,
        name: "Rocket Stove",
        imageUrl:
          "https://images.ctfassets.net/r7p9m4b1iqbp/6TUaF0EXPHZGvoCdHSlJh5/637ad4b7a83df2d59435dfbb92e837d0/msr-pocket-rocket-best-gear-new-outdoorists.jpg?w=600&fm=webp&q=90",
        price: 40,
      },
      {
        id: 35,
        name: "Water Filter",
        imageUrl:
          "https://images.ctfassets.net/r7p9m4b1iqbp/183FCstXKwtW42pETJFE9d/94409d1dfa0dde3ae463daf5312bb0ec/hiker-water-filter-katadyn-best-gear-new-outdoorists.jpg?w=600&fm=webp&q=90",
        price: 25,
      },
    ],
  },
};

export default SHOP_DATA;
