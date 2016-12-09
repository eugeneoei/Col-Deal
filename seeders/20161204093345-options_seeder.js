'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('options', [
      {
        name: 'Italian Leather Messenger in Dark Tan | Frank + Oak',
        productUrl: 'https://global.frankandoak.com/product/31884/italian-leather-messenger-in-dark-tan',
        productImageUrl: 'https://massdrop-s3.imgix.net/img_poll/PQ4jl1bQTFmk3AMF5r7f_md_img.jpg?auto=format&fm=jpg&fit=clamp&w=510&h=375&dpr=1',
        productDescription: 'Handmade in Montreal. Full-grain tanned leather, raw-edge finish, thick topstitch, interior zip pocket, and heavy duty YKK Excella zipper. Measures 53 cm x 28 cm x 24 cm (~ 20.8 in x 11 in x 9.4 in).',
        productRetailsPrice: '$325',
        numberOfVotes: 20,
        pollId: 1,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kobe 15" Messenger Bag - Brown Leather | KNOMO',
        productUrl: 'https://www.knomobags.com/row/laptop-bags/men/kobe-leather-messenger-15-brown.html',
        productImageUrl: 'https://massdrop-s3.imgix.net/img_poll/pEsRV2C9SsmzwRltNVeQ_md_img.jpg?auto=format&fm=jpg&fit=clamp&w=510&h=375&dpr=1',
        productDescription: 'Full-grain leather with bushed nickel hardware and soft fabric lining with scotch guard coating. Main compartment with organizer pockets and quilted laptop pouch with high density foam around base. Adjustable nylon shoulder strap. Dimensions: 30 x 41 x 9 cm (~11.8" x 16" x 3.5”)',
        productRetailsPrice: '$350',
        numberOfVotes: 6,
        pollId: 1,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'FRYE | Logan Messenger - Cognac',
        productUrl: 'http://www.thefryecompany.com/logan-messenger/d/42791',
        productImageUrl: 'https://massdrop-s3.imgix.net/img_poll/Leather-Messenger-Bags2/Qofl85bQRgaGwgxR4RUK_md_img.jpg?auto=format&fm=jpg&fit=clamp&w=510&h=375&dpr=1',
        productDescription: 'Pull-up leather, easy access slip pocket under flap, four interior flat pockets, interior zip pocket in main compartment, two flat pen pockets, and three interior card slots. Dimensions: ~40.6 x 30.5 x 7.6 cm (16" x 12" x 3”)',
        productRetailsPrice: '$498',
        numberOfVotes: 76,
        pollId: 1,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Thin Briefcase - Slim Leather Laptop Briefcase | Saddleback Leather Co.',
        productUrl: 'http://www.saddlebackleather.com/thin-briefcase',
        productImageUrl: 'http://media.saddlebackleather.com/image/upload/w_1280,h_1280,c_fill/SLCWeb/Products/01-10-0002/Rotator/LG-TO/84f998.jpg',
        productDescription: 'A slim briefcase with a smaller profile than our original classic briefcase, with two interior compartments holding up to a 17" laptop.',
        productRetailsPrice: '$500',
        numberOfVotes: 0,
        pollId: 1,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'adidas Ultra Boost Shoes - Black | adidas US',
        productUrl: 'http://m.adidas.com/us/ultraboost-shoes/AQ4004.html',
        productImageUrl: 'https://massdrop-s3.imgix.net/img_poll/THwJ4U1SamxkM4w3nbRQ_md_img.jpg?auto=format&fm=jpg&fit=fill&w=400&h=400&bg=FFFFFF&dpr=1',
        productDescription: 'These are ultraboost not as clean but still a premium shoes for anyone to own.',
        productRetailsPrice: '$170',
        numberOfVotes: 673,
        pollId: 2,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'adidas NMD sneakers |adidas United States',
        productUrl: 'http://m.adidas.com/us/nmd-shoes',
        productImageUrl: 'https://massdrop-s3.imgix.net/img_poll/o4G3pb7wQ7qEg1YyKVTl_md_img.jpg?auto=format&fm=jpg&fit=clamp&w=510&h=375&dpr=1',
        productDescription: 'These drop from adidas on jan. 30th let\'s hope Col-Deal can pick these up for us and get them to us a bit cheaper. These are premium shoes from adidas and will be sold out fast',
        productRetailsPrice: '$170',
        numberOfVotes: 3981,
        pollId: 2,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'adidas Men\'s D Rose Boost 6 Shoes - Red | adidas Canada',
        productUrl: 'http://www.adidas.ca/en/men-red-d_rose-shoes-boost',
        productImageUrl: 'https://massdrop-s3.imgix.net/img_poll/best-adidas-shoe-to-get-from-massdrop/C7k38DTAfelz5A9RvKAl_md_img.jpg?auto=format&fm=jpg&fit=fill&w=400&h=400&bg=FFFFFF&dpr=1',
        productDescription: 'D Rose shoes',
        productRetailsPrice: '$170',
        numberOfVotes: 33,
        pollId: 2,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'adidas Ultra Boost Uncaged Crystal White',
        productUrl: 'http://www.kicksonfire.com/release/adidas-ultra-boost-uncaged-crystal-white/',
        productImageUrl: 'https://massdrop-s3.imgix.net/img_poll/best-adidas-shoe-to-get-from-massdrop/R3d6QoJRHKXpZ9EZWhQA_md_img.jpg?auto=format&fm=jpg&fit=fill&w=400&h=400&bg=FFFFFF&dpr=1',
        productDescription: '',
        productRetailsPrice: '$180',
        numberOfVotes: 26,
        pollId: 2,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Panerai Luminor Marina',
        productUrl: 'http://www.panerai.com/en/collections/watch-collection/luminor.html',
        productImageUrl: 'https://massdrop-s3.imgix.net/img_poll/mZIQpuiTQiKyGypHT7uI_md_img.jpg?auto=format&fm=jpg&fit=fill&w=400&h=400&bg=FFFFFF&dpr=1',
        productDescription: '',
        productRetailsPrice: '',
        numberOfVotes: 201,
        pollId: 3,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Breitling Chronomat 44 GMT',
        productUrl: 'http://www.breitling.com/en/models/chronomat/chronomat-44-gmt/',
        productImageUrl: 'https://massdrop-s3.imgix.net/img_poll/RxRH1mn3S1qzG749vInG_md_img.jpg?auto=format&fm=jpg&fit=fill&w=400&h=400&bg=FFFFFF&dpr=1',
        productDescription: '',
        productRetailsPrice: '',
        numberOfVotes: 95,
        pollId: 3,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hawkinge, Type 48 date - Hawkinge - Specialist Series',
        productUrl: 'http://boutique.mkiiwatches.com/specialist-series/hawkinge/hawkinge-type-48-date.html',
        productImageUrl: 'https://massdrop-s3.imgix.net/img_poll/Best-Statement-Watches/OIYdY7KJTBej7K26cWqm_md_img.jpg?auto=format&fm=jpg&fit=clamp&w=510&h=375&dpr=1',
        productDescription: 'The watch design that represents British aviation best. Issued to British military, Commonwealth and BOAC pilots from 1948 - 1980s, the Mk 11 design is in one word “perfect”. It is utilitarian, yet elegant and confident, while humble. The most sought after references of this design were manufactured by JLC1 and IWC1.',
        productRetailsPrice: '$595',
        numberOfVotes: 38,
        pollId: 3,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'BALL Watch Engineer Hydrocarbon NEDU',
        productUrl: 'http://www.escapementmagazine.com/articles/ball-watch-engineer-hydrocarbon-nedu-in-depth-hands-on-watch-review-by-escapement.html/#',
        productImageUrl: 'https://massdrop-s3.imgix.net/img_poll/6yCPHTRuUYY2wndKBdwq_md_img.jpg?auto=format&fm=jpg&fit=clamp&w=510&h=375&dpr=1',
        productDescription: '',
        productRetailsPrice: '',
        numberOfVotes: 56,
        pollId: 3,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OPPERMANN | Swanfield Black',
        productUrl: 'https://www.oppermann-london.com/products/swanfield-black',
        productImageUrl: 'https://massdrop-s3.imgix.net/img_poll/xg6Vj1jMRCWnz8udJpsz_md_img.jpg?auto=format&fm=jpg&fit=fill&w=400&h=400&bg=FFFFFF&dpr=1',
        productDescription: 'Today’s wallets do not have to be as bulky as we are used to. We wanted to make this wallet unobtrusive, beautiful and still hold all the essentials.',
        productRetailsPrice: '$65',
        numberOfVotes: 31,
        pollId: 4,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OPPERMANN | Swanfield Naturale',
        productUrl: 'https://www.oppermann-london.com/products/swanfield-naturale',
        productImageUrl: 'https://massdrop-s3.imgix.net/img_poll/JjhHzl8xSCyTgI5COXge_md_img.jpg?auto=format&fm=jpg&fit=fill&w=400&h=400&bg=FFFFFF&dpr=1',
        productDescription: 'Part of the Naturale Collection, this wallet is made in the same way as our other Swanfield wallets. The difference is in the leather. With Tanneries Masure\'s natural leather, we created a truly unique version of our popular wallet.',
        productRetailsPrice: '$85',
        numberOfVotes: 10,
        pollId: 4,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hand Stitched Horween Horse Leather Wallet',
        productUrl: 'https://www.etsy.com/sg-en/listing/262026876/?ref=shop_home_active_2',
        productImageUrl: 'https://massdrop-s3.imgix.net/img_poll/Chester-Mox-53-Compact-Bi-fold-Horween-Shell-Cordovan-Dark-Green/sCdj5B5bScuAD0LAl2Qh_md_img.jpg?auto=format&fm=jpg&fit=fill&w=400&h=400&bg=FFFFFF&dpr=1',
        productDescription: 'Made from the highest grade USA tanned leather. Featuring a 6oz tan horse leather exterior and a 3oz black horse hide interior lining. Hand stitched. Will last 100+ years',
        productRetailsPrice: '$69',
        numberOfVotes: 32,
        pollId: 5,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '#53 Horween Shell Cordovan Compact Bi-Fold Wallet - Wallets',
        productUrl: 'https://www.chestermox.com/',
        productImageUrl: 'https://massdrop-s3.imgix.net/img_poll/BUozs6qETFyprBVuSMl7_md_img.jpg?auto=format&fm=jpg&fit=fill&w=400&h=400&bg=FFFFFF&dpr=1',
        productDescription: '',
        productRetailsPrice: '$300',
        numberOfVotes: 108,
        pollId: 5,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Madison by J.FitzPatrick Footwear',
        productUrl: 'http://www.jfitzpatrickfootwear.com/collections/loafers/products/madison-black-calf-black-scotch-grain',
        productImageUrl: 'https://massdrop-s3.imgix.net/img_poll/fZfL0IzMQ2HPNoJfUfsh_md_img.jpg?auto=format&fm=jpg&fit=fill&w=400&h=400&bg=FFFFFF&dpr=1',
        productDescription: 'Black shown, also available in Brown Museum Calf, Plum Museum Calf, and Navy, Burgundy, or Forest suede',
        productRetailsPrice: '$460',
        numberOfVotes: 27,
        pollId: 6,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brown Penny Loafer with Complimentary Cedar Shoe Trees',
        productUrl: 'https://shopfounders.com/product/brown-penny-loafer/',
        productImageUrl: 'https://massdrop-s3.imgix.net/img_poll/Loafers/f8W4CHMPQxKwDxyWMFST_md_img.jpg?auto=format&fm=jpg&fit=fill&w=400&h=400&bg=FFFFFF&dpr=1',
        productDescription: 'Classic Penny Loafer, Handcrafted in Italy Full Rapid-Stitch Construction 100% Leather Construction – Full Leather Insole, Full Leather Midsole, Fully Leather Lined First-quality Luxury Calfskin from France True Double Leather Sole, Stacked Leather Heel, Non-Slip Counter Premium double barrel cedar shoetrees and luxury shoe bags included',
        productRetailsPrice: '$324',
        numberOfVotes: 4,
        pollId: 6,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lake Bluff Weave Dress Loafers by Allen Edmonds',
        productUrl: 'http://www.allenedmonds.com/shoes/mens-shoes/loafers-slip-ons/lake-bluff-weave-dress-loafers/SF1087.html?dwvar_SF1087_color=1088#sz=18&start=3',
        productImageUrl: 'https://massdrop-s3.imgix.net/img_poll/jLIelR9fRpyadZzdWzjp_md_img.jpg?auto=format&fm=jpg&fit=fill&w=400&h=400&bg=FFFFFF&dpr=1',
        productDescription: 'Shown in chili calf, also available in chestnut or black',
        productRetailsPrice: '$395',
        numberOfVotes: 8,
        pollId: 6,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('options', null, {});
  }
};
