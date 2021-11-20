'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  //   ,
     await queryInterface.bulkInsert('product', [{
      product_id: "44b3e742-43d4-11ec-81d3-0242ac130003",
      name: "idears trucker jacket",
      imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-07_1_1_900x.jpg?v=1634171742",
      price: 348,
      color: "vintage indigo",
      shelf: "jacket",
      sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
      sizeAble: true,
      createdAt: new Date(),
      updatedAt: new Date()
      },{
        product_id: "1a8309b8-43d8-11ec-81d3-0242ac130003",
        name: "mascot foot bag",
        imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/MASCOTHACKYSACK_DETAIL_900x.jpg?v=1623200262",
        price: 8,
        color: "golden yellow",
        shelf: "accessory",
        description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
        sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
        sizeAble: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
          product_id: "11061b7e-44c7-11ec-81d3-0242ac130003",
          name: "mixed media jacket",
          imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-03_1_1_900x.jpg?v=1634171769",
          price: 348,
          color: "natural",
          shelf: "jacket",
          description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
          sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
          sizeAble: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          product_id: "11061d7c-44c7-11ec-81d3-0242ac130003",
          name: "mascot trucker jacket",
          imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-11_1_1_900x.jpg?v=1634171755",
          price: 248,
          color: "stone wash",
          shelf: "jacket",
          description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
          sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
          sizeAble: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          product_id: "11061e6c-44c7-11ec-81d3-0242ac130003",
          name: "basic ss tee",
          imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/TRUCKER-159_1_900x.jpg?v=1631209823",
          price: 48,
          color: "heather grey",
          shelf: "tee",
          description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
          sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
          sizeAble: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          product_id: "11061f48-44c7-11ec-81d3-0242ac130003",
          name: "idears tapered jean",
          imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-09_1_1_900x.jpg?v=1634264772",
          price: 278,
          color: "vintage indigo",
          shelf: "bottom",
          description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
          sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
          sizeAble: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          product_id: "11062024-44c7-11ec-81d3-0242ac130003",
          name: "distressed tapered jean",
          imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-06_1_1_900x.jpg?v=1634321500",
          price: 198,
          color: "vintage indigo",
          shelf: "bottom",
          description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
          sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
          sizeAble: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          product_id: "2a57bc04-44c7-11ec-81d3-0242ac130003",
          name: "idears tapered jean",
          imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-01_1_1_900x.jpg?v=1634264792",
          price: 278,
          color: "vintage indigo",
          shelf: "bottom",
          description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
          sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
          sizeAble: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          product_id: "2a57b9fc-44c7-11ec-81d3-0242ac130003",
          name: "carpenter jean",
          imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-13_1_1_900x.jpg?v=1634264666",
          price: 198,
          color: "stone wash",
          shelf: "bottom",
          description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
          sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
          sizeAble: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          product_id: "2a57b93e-44c7-11ec-81d3-0242ac130003",
          name: "riverside tote",
          imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/5D3A60212_900x.jpg?v=1632355408",
          price: 118,
          color: "golden yellow",
          shelf: "accessory",
          description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
          sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
          sizeAble: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          product_id: "2a57b84e-44c7-11ec-81d3-0242ac130003",
          name: "hearty snapback hat",
          imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/TRUCKER-174_900x.jpg?v=1630883679",
          price: 58,
          color: "black",
          shelf: "accessory",
          description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
          sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
          sizeAble: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          product_id: "2a57b628-44c7-11ec-81d3-0242ac130003",
          name: "hearty snapback hatmascot drew house",
          imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/UnoFlats-26_900x.jpg?v=1633541538",
          price: 38,
          color: "royal blue",
          shelf: "accessory",
          description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
          sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
          sizeAble: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          product_id: "3f395fd8-44c7-11ec-81d3-0242ac130003",
          name: "mascot foot bag",
          imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/MASCOTHACKYSACK_DETAIL_900x.jpg?v=1623200262",
          price: 8,
          color: "golden yellow",
          shelf: "accessory",
          description: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
          sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
          sizeAble: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('product', null, {});
  }
};
