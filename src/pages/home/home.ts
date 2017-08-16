import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  breweries: Array<{ name: string, logo: string }>
  constructor(public navCtrl: NavController) {
    this.breweries = [ { name: "Stone Brewery", logo: "brewery-1204_23541.jpg" },
    { name: "Stone Brewing World Bistro & Gardens - Liberty Station", logo: "brewery-1204_23541.jpg" },
   { name: "21st Amendment Brewery", logo: "brewery-4339_203d1.jpg" },
    { name: "Abnormal Beer Company", logo: "brewery-194089_a617b.jpg" },
    { name: "AleSmith Brewing Company", logo: "brewery-2471_6bfa2.jpg" },
    { name: "Arrogant Brewing", logo: "brewery-234399_0c2d9.jpg" },
    { name: "Avery Brewing Co", logo: "brewery-avery.jpg" },
    { name: "Bagby Beer Company", logo: "brewery-154817_958eb.jpg" },
    { name: "Bay City Brewing Company", logo: "brewery-220274_a8d47.jpg" },
    { name: "Beachwood Brewing", logo: "brewery-7901_05617.jpg" },
    { name: "Bear Republic Brewing Company", logo: "brewery-bearrepublicbrewingco_94.jpg" },
    { name: "Bear Roots Brewing Co", logo: "brewery-185521_6563a.jpg" },
    { name: "Bitter Brothers Brewing Co", logo: "brewery-160331_923a4.jpg" },
    { name: "Boochcraft", logo: "brewery-259324_02d70.jpg" },
    { name: "Bottle Logic Brewing", logo: "brewery-bottlelogicbrewing_94408.jpg" },
    { name: "Boulevard Brewing Co", logo: "brewery-1514_2003e.jpg" },
    { name: "Brewery Ommegang", logo: "brewery-249_20027.jpg" },
    { name: "The Bruery", logo: "brewery-thebruery_1246.jpg" },
    { name: "Bruery Terreux", logo: "brewery-214845_85cbe.jpg" },
    { name: "Burgeon Beer Company", logo: "brewery-306680_3dd20.jpg" },
    { name: "Devil's Canyon Brewing Company", logo: "brewery-devilscanyonbrewingco_1729.jpg" },
    { name: "Drake's Brewery", logo: "brewery-464_df7ef.jpg" },
    { name: "Eel River Brewing Company", logo: "brewery-481_a4b15.jpg" },
    { name: "El Segundo Brewing", logo: "brewery-11688_fbaaa.jpg" },
    { name: "Fall Brewing Company", logo: "brewery-169664_7c413.jpg" },
    { name: "Firestone Walker Brewing Co", logo: "brewery-524_e835d.jpg" },
    { name: "Fremont Brewing", logo: "brewery-FremontBrewingCompany_1508.jpg" },
    { name: "Garage Project", logo: "brewery-GarageProject_14539.jpg" },
    { name: "Great Divide Brewing Company", logo: "brewery-604_621e5.jpg" },
    { name: "Kern River Brewing Company", logo: "brewery-KernRiverBrewingCompany_1498.jpg" },
    { name: "Knee Deep Brewing Co", logo: "brewery-kneedeepbrewingcompany_2445.jpg" },
    { name: "Lord Hobo Brewing Co", logo: "brewery-199369_a536c.jpg" },
    { name: "The Lost Abbey", logo: "brewery-2712_0b00a.jpg" },
    { name: "MadeWest Brewing Company", logo: "brewery-174542_99051.jpg" },
    { name: "Magnolia Brewing Company", logo: "brewery-magnoliapubandbrewery_813.jpg" },
    { name: "Mammoth Brewing Company", logo: "brewery-MammothBrewingCompany_2687.jpg" },
    { name: "Mason Ale Works", logo: "brewery-246213_66d0a.jpg" },
    { name: "Maui Brewing Co", logo: "brewery-836_fd28d.jpg" },
    { name: "Mike Hess Brewing Co", logo: "brewery-hessbrewing_2174.jpg" },
    { name: "Mikkeller Brewing San Diego", logo: "brewery-264526_5b732.jpg" },
    { name: "Monkey Paw Brewing Company", logo: "brewery-19972_36a45.jpg" },
    { name: "Mother Earth Brew Co.", logo: "brewery-5092_b0a8b.jpg" },
    { name: "Newtopia Cyder", logo: "brewery-321399_8833c.jpg" },
    { name: "Noble Ale Works", logo: "brewery-6377_180b1.jpg" },
    { name: "Oceanside Ale Works", logo: "brewery-2266_64153.jpg" },
    { name: "Oskar Blues Brewery", logo: "brewery-oskarBlues.jpg" },
    { name: "Phantom Carriage Brewery", logo: "brewery-48094_260b4.jpg" },
    { name: "Pizza Port Brewing Co", logo: "brewery-1534_f0f6d.jpg" },
    { name: "Pure Project Brewing", logo: "brewery-248508_f9a3a.jpg" },
    { name: "Refuge Brewery", logo: "brewery-43908_bdd8e.jpg" },
    { name: "Rip Current Brewing Company", logo: "brewery-45616_09ff5.jpg" },
    { name: "Russian River Brewing Company", logo: "brewery-russianRiver.jpg" },
    { name: "Second Chance Beer Company", logo: "brewery-215181_050f3.jpg" },
    { name: "Sierra Nevada Brewing Co", logo: "brewery-1142_f241d.jpg" },
    { name: "Ska Brewing Company", logo: "brewery-SkaBrewingCompany_1150.jpg" },
    { name: "Smog City Brewing Co", logo: "brewery-SmogCity_16185.jpg" },
    { name: "Societe Brewing Company", logo: "brewery-29606_f27cc.jpg" },
    { name: "South Park Brewing Company", logo: "brewery-189064_91df9.jpg" },
    { name: "St. Mayhem Craft Wine Cooler", logo: "brewery_bg_88.png" },
    { name: "Three Weavers Brewing Company", logo: "brewery-147846_6f16f.jpg" },
    { name: "Victory Brewing Company", logo: "brewery-1326_6ca88.jpg" },
    { name: "Wandering Aengus Ciderworks", logo: "brewery-wanderingaengusciderworks_4475.jpg" }]

  }


  brewerySelected(theBrewery){
    this.navCtrl.push("BeersPage", {brewery: theBrewery })
  }
}
