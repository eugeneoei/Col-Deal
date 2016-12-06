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
    return queryInterface.bulkInsert('drops', [
      {
        name: 'Thorogood 1892 Beloit Plain Toe Boot',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/thorogood-1892-beloit-plain-toe-boot/MD-26245_20160907142349_bca2a3de170e6959.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/thorogood-1892-beloit-plain-toe-boot/MD-26245_20160908125620_30aeb624c836b737.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'As a shout-out to Weinbrenner’s roots, every pair of Beloits in the Thorogood 1892 line is made the traditional way. Not only are they Goodyear welted, allowing them to be resoled ad infinitum, they’re also made with Chromexcel leather from American-heritage brand Horween Leather Company. Built on the company’s No. 60 last—a classic silhouette that offers a roomy toe box—the shoes feature a nitrile cork outsole, which is more durable and offers better traction than a leather outsole. The result: a boot as rugged and resilient as the Wisconsin farm town it’s named for.',
        productPrice: '$231.99',
        numberOfPurchased: 8,
        communityId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'J. FitzPatrick Wedgwood Boots',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/j-fitzpatrick-wedgwood/MD-28977_20161121112010_7f50a7969849513d.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/j-fitzpatrick-wedgwood/MD-28977_20161121115412_5bc6ccab1c87b933.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'The footwear of choice during Britain’s Victorian and Edwardian eras, the balmoral boot is making a comeback—and bringing a touch of that top-hat-and-coattails flair into today’s modern ensembles. Take the J. FitzPatrick Wedgwood: a classic dress shoe with a twist, made in Spain and debuting exclusively right here on Massdrop. Set on the company’s TMG last, these Goodyear-welted, fully leather-lined shoes boast a slimmer look and impeccable construction. The contrasting textures of the calfskins add interest, with the curvature of the connecting lines of the upper and heel counter reflected smartly in the stitching along the eyelets.',
        productPrice: '$185.55',
        numberOfPurchased: 25,
        communityId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rider Boot Co. Dundalk Reverso Leather Boots',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/rider-boot-reverso-leather-boots/MD-28965_20161026112802_053ec523714a9fd2.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/rider-boot-reverso-leather-boots/MD-28965_20161026112732_9a88eb8709607d13.jpg?auto=format&fm=jpg&fit=crop&w=1023&dpr=1',
        productDescription: 'The Rider Boot Co. Reverso combines the ruggedness of American workwear with a sleek European shape. It’s built on the company’s 42 last, with a 4 + 3 plain-toe derby design and a full leather insole. The Reverso takes its name from its two leather variations—smooth and reverso—which feature the same leather applied in different ways, with either its soft face or its rough back turned outward. While the leather hails from some of founder Ron Rider’s favorite tanneries in Italy and the United States, the shoes themselves are constructed by artisans in Italy.',
        productPrice: '$330.00',
        numberOfPurchased: 38,
        communityId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Loake Aldwych Captoe Oxford',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/loake-aldwych-captoe-oxford/MD-24985_20160802172457_cc2f5bc2831cb853.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/loake-aldwych-captoe-oxford/MD-24985_20160802172453_3a5bd6ff9de0ce91.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'Among the oldest shoemakers in England, Loake 1880 is still run today—five generations after its birth—by the Loake family. Like the founders did in the 19th century, the company’s craftsmen still construct each pair of shoes in their 1880 line using a Goodyear welt, a painstaking process that ensures the shoes are recraftable for years to come. And the Aldwych captoe oxfords are no different. They’re built on the company’s Capital last, which features a medium width with a slight chisel shape to the toe. The upper is made of burnished calfskin, and the interior features a leather lining and insole.',
        productPrice: '$485.99',
        numberOfPurchased: 18,
        communityId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'KarasKustoms Blackout',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/grifos-galuchat/MD-31360_20161129101343_30dfb6676b5a41f4.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/grifos-galuchat/MD-31360_20161129101406_a3dca95eedccf43d.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'Handcrafted by a small team of experts in Mesa, Arizona, the KarasKustoms collection of machined-metal pens offers durability, versatility, and writing comfort—available here with classic aluminum construction that proves black is the new black. Pick the model that fits your needs, from the super-compact EDK rollerball to the classic Ink fountain pen.',
        productPrice: '$48.99',
        numberOfPurchased: 46,
        communityId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Regal Hadrian 2-in-1 Pen',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/regal-hadrian/MD-26514_20161121123029_9005008c3e593017.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/regal-hadrian/MD-26514_20161121123429_6af1aa73ea68c95f.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'Named for Roman emperor Hadrian and his famous wall (now a major tourist destination in the UK), Regal Curio’s Hadrian pen is designed to depict power, strength, and nobility. This new two-in-one style features a nose cone for a standard rollerball refill, and comes with an extra-fine stainless steel nib attachment and a black ink cartridge that allow you to convert your rollerball into a fountain pen. Another handy update to this model: The cap now has a sealing mechanism that prevents dry-out in the nib.',
        productPrice: '$29.99',
        numberOfPurchased: 32,
        communityId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Allegory Leather Pen Sleeve',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/allegory-pen-sleeve/MD-31295_20161128101355_78a1fcdae5c0456a.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/allegory-pen-sleeve/MD-31295_20161128101404_e0e8ad127315a55b.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'From Allegory, a Kickstarter-born Chicago shop dedicated to small-batch manufacturing, this sleeve adds a timeless, handcrafted touch to your everyday pen carry. Made of supple vegetable-leather, it’s designed to fit a single pen—all you need to jot down thoughts and notes at work, at school, or on the go. At 6 inches long and 1.5 inches wide, it’s small and slim enough to fit in any bag and helps protect your writing instrument of choice from coming in contact with the other items within.',
        productPrice: '$11.99',
        numberOfPurchased: 107,
        communityId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Art Alternatives Pen & Ink Sketch Bundle',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/MD-11104_20150916104520_bc84e8afd524ac56.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/MD-11104_20150916104401_6eef91382d0d427c.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'Ideal for sketching and entry-level writing, this bundle combines the Pen & Ink Sketch Fountain Pen set from Art Alternatives with the ever-popular Rhodiarama Webnotebook. In addition to the fountain pen, the Art Alternatives set includes a converter, three black ink cartridges, and a faux-suede roll case. Now with updated technology for better ink flow, the pen is available with an extra-fine, fine, or broad nib and offers a smooth stroke.',
        productPrice: '$25.99',
        numberOfPurchased: 12,
        communityId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '3 Legged Thing Punks Corey Tripod w/ AirHed Neo',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/3lt-punks-corey-travel-tripod-w-airhed-neo/MD-31112_20161115181032_7510e3a9044e4875.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/3lt-punks-corey-travel-tripod-w-airhed-neo/MD-31112_20161115181022_362bb6233f83aeb6.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'Designed for photographers on the go, the 3 Legged Thing Punks Corey tripod system has the ideal combination of functionality and portability—folding down to just 13.7 inches for easy carry and storage. It features five leg sections and a two-section column, and extends from a minimum height of 4 inches all the way up to 58 inches at its maximum height. Along with a 30-pound load capacity and a precision-engineered leg-lock system for stability and rigidity, it has multiple visible spirit levels for comprehensive leveling and an ergonomic bubble group for better all-weather use. A new thumb catch release system, patented tri-mount plate, and quarter-inch screw foot round out the package, and an AirHed Neo ballhead is included.',
        productPrice: '$149.99',
        numberOfPurchased: 11,
        communityId: 3,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tokina AT-X 11-16mm F2.8 PRO DX II Lens',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/tokina-11-16mm-2-8-dxii-lens/MD-31437_20161128175836_74f52ece577cca7c.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/tokina-11-16mm-2-8-dxii-lens/MD-31437_20161128193544_ce3b2212ee4c778e.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'An update to Tokina’s award-winning AT-X PRO DX, the AT-X PRO DXII lens features the 11-16mm focal length and F2.8 maximum aperture of its predecessor, plus a couple of improvements. For one, the internal silent focusing motor allows the lens to autofocus on Nikon bodies that don’t have an autofocus drive gear and motor. For another, slight adjustments have been made to the coating for top-notch optical performance. Two super-low-dispersion glass elements and two aspherical glass elements ensure excellent contrast and sharpness while minimizing aberration. Finally, the one-touch Focus Clutch mechanism allows you to switch easily between autofocus and manual focus by snapping the focus ring forward and back.',
        productPrice: '$419.99',
        numberOfPurchased: '1',
        communityId: 3,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'YI 4K Action Camera',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/yi-4k-action-camera/MD-31310_20161122140130_fb1263e239fa5c55.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/yi-4k-action-camera/MD-31310_20161122200441_bc90d638e6ec5f5a.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'Designed with photographers and adventure seekers in mind, the YI 4K action camera packs the world’s leading technologies into one sleek package. It features the Ambarella A9SE75 chip, the Sony IMX377 image sensor, and seven layers of all-glass lenses for 4K/30fps recording at 60 Mbps—that’s four times the quality of 1080p video! The large F2.8 aperture increases light intake for crisp, detailed footage, and the 2.19-inch 330ppi Gorilla Glass touchscreen provides a truly intuitive experience while resisting scratches and damage from impact. Thanks to the BCM43340 chip, you can download at speeds up to 30 Mbps, and using the companion app, you can shoot, edit, and share like a pro. Finally, with up to 2 hours of continuous shooting and 8 hours of standby time, you never have to cut an adventure short.',
        productPrice: '$219.99',
        numberOfPurchased: 11,
        communityId: 3,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Manhattan Portage NNR Camera Backpack',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/manhattan-portage-nnr-camera-backpack/MD-27076_20161018133650_9bbac2f2800ee60a.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/manhattan-portage-nnr-camera-backpack/MD-27076_20161018181229_01cbde0079d94bc0.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'Made in collaboration with New York-based cycling club Never Not Riding, this Manhattan Portage backpack is built to protect your gear from the daily rigors of the road. It features a roll-top design, custom hook closure, YKK zippers, and water-resistant ballistic Cordura construction to keep moisture out. Along with a pair of removable camera inserts that can be customized for left- or right-side access, it features a removable laptop sleeve and a hidden stash pocket for quick storage. The extension straps allow the pack to accommodate larger items when you need them, while the 3M logo and reflective bike light tab provide visibility in low-light conditions.',
        productPrice: '$244.99',
        numberOfPurchased: 0,
        communityId: 3,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Glycine Combat Sub Watch',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/glycine-combat-sub-watch/MD-30987_20161114105953_8d6f30a32a9a8b6e.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/glycine-combat-sub-watch/MD-30987_20161114105949_4d6186c6c60f2a49.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'Backed by more than 100 years of expertise, the Glycine Combat Sub Automatic is a robust diver’s watch with a PVD-coated Nato strap. Water resistant to 200 meters, it features Glycine’s GL224 automatic movement. This Swiss-made movement offers a 38-hour power reserve and features a sweeping seconds hand that vibrates at 28,800 beats per hour. A sapphire crystal and stainless steel case ensure the watch’s durability. The rotating bezel helps keep track of elapsed time when under water, completing the classic diver watch design. The case back is adorned with the signature Glycine logo. Also included is a brown leather strap.',
        productPrice: '$469.99',
        numberOfPurchased: 40,
        communityId: 4,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Techné Merlin Watch',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/techn-merlin-watch/MD-26538_20160915171731_416329c787fc3331.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/techn-merlin-watch/MD-26538_20160915171727_6c4a9ba13ee54f74.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'The Merlin collection by Techné takes styling from classic pilot’s watches and combines it with Seiko’s VD78 quartz movement to produce a modestly priced, everyday timepiece with vintage flair. The matte black dial is adorned with bright white pill-shaped stick markers and equally curvy numerals at the 12, 3, and 9 o’clock positions. At 6 o’clock is a running seconds hand with numerals in increments of 10. Highly stylized white lacquered hands are treated with a luminous compound, and a double-curved mineral case completes the vintage theme. Because the watch is packed with Seiko VD78 quartz movement, the Merlin offers hacking seconds.',
        productPrice: '$94.99',
        numberOfPurchased: 19,
        communityId: 4,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Panzera Flieger Watch',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/panzera-flieger-watch/MD-20830_20161128164217_9a46c6ecd2400c6e.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/panzera-flieger-watch/MD-20830_20161128164210_ff4114a120eee0a7.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'Based on the Baumuster A dial design, this self-winding mechanical watch is a quintessential aviator. Perhaps most notable is that it’s large: 47 is a reference to the case diameter. And while it’s not as large as the original Baumuster A (a 55-millimeter behemoth), its dial is easy to read and features Arabic numerals. Other elements typical of a pilot’s watch include the oversize diamond crown, the Flieger hands, the dotted triangle at 12 o’clock, and the running seconds subdial at 6.',
        productPrice: '$189.99',
        numberOfPurchased: 14,
        communityId: 4,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Victorinox Chrono Classic XLS Watch',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/victorinox-chrono-classic-xls-watch/MD-24928_20161004130338_59354d6f1031b8fa.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/victorinox-chrono-classic-xls-watch/MD-24928_20161004130208_db9801d0a40807a1.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'This hefty timepiece by Victorinox—a 45-millimeter chronograph weighing about 7 ounces—carries its weight by offering tons of functionality. The tachymeter bezel is helpful not only in measuring fuel and oil consumption but also in converting units of measurement, calculating distance, and measuring speed. It can even be used to solve math problems. And with a built-in alarm, the Chrono Classic XLS ensures your punctuality. And then there’s the chronograph, which is controlled by the two oblong pushers at 2 and 4 o’clock. In addition to providing 12-hour and 30-minute timers on the two-hand subdial at 9 o’clock, the chronograph counts seconds on the main dial and allows for split timing.',
        productPrice: '$174.99',
        numberOfPurchased: 97,
        communityId: 4,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'BluShark AlphaShark Watch Straps (3-Pack)',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/blushark-alphashark-khaki-watch-strap/MD-28725_20161130160611_53ad8d21ff34f34e?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/blushark-alphashark-khaki-watch-strap/MD-28725_20161130160552_cb06666a5ed5b08e.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'Available in three colorways, two of which you can only find here on Massdrop, the AlphaShark watch strap from BluShark is constructed from high-tensile-strength nylon webbing. It comes in two widths (20 or 22 millimeters), and features a stainless steel buckle with flat keepers in your choice of finish: brushed or polished. Measuring 27.5 centimeters long and 1.4 millimeters thick, it’s finished with black stitching to secure the buckle.',
        productPrice: '$44.99',
        numberOfPurchased: 54,
        communityId: 4,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sea-Gull Double Retrograde 819.317 Watch',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/sea-gull-double-retrograde-819-317-watch/MD-14299_20151230132540_1720903a5e570862.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/sea-gull-double-retrograde-819-317-watch/MD-14299_20151230132544_93ae618e91e6b63c.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'Featuring design elements seemingly plucked from a turn-of-the-century World’s Fair, Sea-Gull’s Double Retrograde Watch is nothing if not a throwback. The watch features an open-heart dial, breguet numerals, an onion crown and blued hands. Indeed, this automatic timepiece puts the “retro” in retrograde.',
        productPrice: '$164.99',
        numberOfPurchased: 29,
        communityId: 4,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'District Leather Shell Cordovan Card Case',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/district-leather-card-case/MD-31234_20161123160216_6825a495682eb657.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/british-belt-co-shell-cordovan-wallet/MD-22068_20160630114655_73cf977071846a2c.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'Based in Atlanta, Georgia, District Leather believes in meticulous craftsmanship using only the best materials—and in this leather card case, it certainly shows. It’s made of Horween shell cordovan in four classic colors, all sourced from the world-famous Chicago tannery. Hand-stitched with French waxed linen thread, each case has burnished edges finished with beeswax and enough room to carry up to six credit cards (or up to 14 business cards). An embossed logo rounds out this hardwearing, pocket-friendly piece.',
        productPrice: '$54.99',
        numberOfPurchased: 10,
        communityId: 5,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ashland Leather Tony the Ant Bifold',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/MD-8086_20150521225911_29e21abaa1c01473.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1&mark=https://massdrop-s3.imgix.net/img_site/best_of_drop_card_2x.png&markfit=clip&markalign=bottom,right&markalpha=100&markh=60',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/ashland-leather-tony-the-ant-bifold/MD-18086_20160428114258_99d60acd760090c9.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'Historically, Tony the Ant was a Chicago bruiser who protected casino profits from embezzling card counters and scams. With all the same bite and notoriety, the Ashland Leather Tony the Ant Bifold is a wallet constructed entirely out of Horween leather that fits comfortably in either a back or front pocket.',
        productPrice: '$79.99',
        numberOfPurchased: 40,
        communityId: 5,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ashland Leather \'Johnny The Fox\' Teal/Black Bifold',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/MD-12290_20151020104642_c73d5291ec219bf2.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/MD-12290_20151020105848_91884c964fe7b06a.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'Made by Ashland Leather Company, which was founded by two longtime employees of Chicago’s legendary Horween Leather Company, this leather bifold comes in two different versions: one with a teal Latigo horsehide exterior and a black Chromexcel interior, the other with a black Chromexcel exterior and a teal Latigo horsehide interior. Fitted with six card slots, it offers two hidden card pockets and one long bill pocket capable of holding US dollars and most international notes.',
        productPrice: '$168.88',
        numberOfPurchased: 25,
        communityId: 5,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'British Belt Co. Langdale Toiletry Bag',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/british-belt-co-toiletry-bag/MD-29598_20161122120615_fec15daf72d6f0d1.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/british-belt-co-langdale-wash-bag/MD-13210_20151123150846_b9ce60e02a99391d.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'Echoing the centuries-old tradition of leather working, the British Belt Co. has produced classic leather goods and accessories since 1946. From the company’s Langdale line, this wash bag offers everyday durability with a contemporary look. It’s made of Halley Stevensons waxed cotton twill in your choice of colors, complemented by antique brass hardware and smooth leather trim. Inside, you’ll find plaid cotton lining and a zippered pocket to help keep your items organized. This spacious bag has plenty of room for all your travel toiletries—throw it into your overnight bag, and you’re ready to go.',
        productPrice: '$159.55',
        numberOfPurchased: 27,
        communityId: 6,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Harvest Label Campus Backpack',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/harvest-label-campus-backpack/MD-30904_20161117111208_271abf3c117c6c30.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/DLPXQS_20140305_102954_2KRZH87WSGV3NPF5MS.png?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'Harvest Label has been crafting backpacks from its headquarters in Osaka, Japan, since 1995. What’s kept this small-time manufacturer in business more than 20 years? At the top of the list is a conscious commitment to design—functional, flattering, creative, durable design. And the Campus Backpack available here is a perfect example.',
        productPrice: '$89.99',
        numberOfPurchased: 58,
        communityId: 6,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'British Belt Co. Langdale Satchel',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/MD-11160_20150917150748_b8450fca9cd7a465.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/MD-11160_20150917150744_c284a12bda1f3f67.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'Echoing centuries old traditions of leather working, the British Belt Co. has produced classic leather goods and accessories since 1946. From the company’s Langdale line, the Langdale Satchel is similarly designed for everyday carry. The British Belt Co. Langdale Satchel features a contemporary look made from Halley Stevenson waxed cotton twill and smooth leather trim.',
        productPrice: '$175.99',
        numberOfPurchased: 19,
        communityId: 6,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Artifact Bag Co. Field Bag',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/artifact-bag-co-field-bag/MD-29314_20161108132328_f4abfd7bad542cd7.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/artifact-bag-co-field-bag/MD-29314_20161108132322_a4cbd2897961490e.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'Made of 18-ounce cotton duck canvas, the Field Bag by Artifact Bag Co. is as tough as the WWII musette bags it’s modeled after. It’s smaller than most messenger bags but spacious enough to accommodate a large laptop as well as other supplies: pen and notebook, wallet and keys, a book, an extra layer, a water bottle. That’s because in addition to the main compartment, the bag is fitted with two deep front pockets and a large, open back pocket. The removable shoulder strap, hand strap, and bottom are all crafted from vegetable-tanned leather from Wickett & Craig, a specialty vegetable tannery that\'s been operating out of Pennsylvania since 1867. The bag is finished with hand-aged brass hardware.',
        productPrice: '$125.00',
        numberOfPurchased: 6,
        communityId: 6,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Topo Designs Daypack',
        productUrl: '',
        productImageUrl: 'https://massdrop-s3.imgix.net/product-images/topo-designs-daypack/MD-18148_20160429095747_b947def001d0e889.jpg?auto=format&fm=jpg&fit=crop&w=358&h=358&dpr=1',
        productImageUrlDrop: 'https://massdrop-s3.imgix.net/product-images/topo-designs-daypack/MD-18148_20160429095743_e00a3855f61b6491.jpg?auto=format&fm=jpg&fit=crop&w=965&h=292&dpr=1',
        productDescription: 'From Outside to GQ, publications around the world are singing the praises of Topo Designs. And who can blame them? This Colorado-based company—founded in a Fort Collins basement—combines the built-to-last construction of outdoor gear with the style of a boutique Japanese brand. The aesthetic is one of simplicity: solid colors, geometric lines, austere design. And the company’s ethos echoes this aesthetic. Every product is made in the United States, and the flagship store, in Denver, is constructed from a repurposed shipping container.',
        productPrice: '$58.99',
        numberOfPurchased: 12,
        communityId: 6,
        userId: 1,
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
    return queryInterface.bulkDelete('drops', null, {});
  }
};
