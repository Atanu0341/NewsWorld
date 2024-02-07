import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author:
        'By Mary Gilbert, Antoinette Radford, Eric Zerkel, <a href="/profiles/elise-hammond">Elise Hammond</a>, Zoe Sottile, <a href="/profiles/amir-vera">Amir Vera</a> and Deva Lee, CNN',
      title:
        "Atmospheric river lashes California with heavy rain and wind: Live updates - CNN",
      description:
        "An intense, long-lasting atmospheric river is bringing the potential for life-threatening flooding to California from Sunday through Tuesday. Follow here for the latest.",
      url: "https://www.cnn.com/us/live-news/california-atmospheric-river-flooding-rain-02-05-24/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/240203081717-california-storms-weather-chinchar-super-tease.jpg",
      publishedAt: "2024-02-06T06:37:00Z",
      content:
        "Heavy snowfall associated with the atmospheric river-fueled storm system over California has been helping with the snowpack accumulation in the Sierra Nevada mountains, which is crucial to the water … [+1316 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Elliot Smith",
      title:
        "UBS beats earnings expectations, announces up to $1 billion share buyback - CNBC",
      description:
        "Swiss banking giant UBS on Tuesday narrowly beat fourth-quarter earnings expectations and announced that it would recommence share buybacks worth $1 billion in the second half of the year.",
      url: "https://www.cnbc.com/2024/02/06/ubs-beats-earnings-expectations-announces-up-to-1-billion-share-buyback.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107220838-1680696187601-gettyimages-1250787017-AFP_33CN8U7.jpeg?v=1707163474&w=1920&h=1080",
      publishedAt: "2024-02-06T05:57:12Z",
      content:
        "Swiss banking giant UBS on Tuesday narrowly beat fourth-quarter earnings expectations and announced that it would recommence share buybacks worth up to $1 billion in the second half of the year.\r\nThe… [+3895 chars]",
    },
    {
      source: {
        id: null,
        name: "Push Square",
      },
      author: "Sammy Barker",
      title:
        "Microsoft Has Apparently Been Stocking Up on PS5 Devkits as Xbox Pivots - Push Square",
      description: "Further fuel to the fire",
      url: "https://www.pushsquare.com/news/2024/02/microsoft-has-apparently-been-stocking-up-on-ps5-devkits-as-xbox-pivots",
      urlToImage: "https://images.pushsquare.com/b3adfbdded7d0/1280x720.jpg",
      publishedAt: "2024-02-06T04:30:00Z",
      content:
        "Image: Push Square\r\nWhile an enormous amount of attention has been placed on the games Microsoft is potentially bringing to PlayStation, reports also suggest the tech titan has been quietly stocking … [+1000 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title:
        "Yandex: Owner of 'Russia's Google' pulls out of home country - BBC.com",
      description:
        "Yandex has previously been accused of hiding information about the Ukraine war from the Russian public.",
      url: "https://www.bbc.com/news/business-68213191",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/15F27/production/_132559898_gettyimages-1243579431.jpg",
      publishedAt: "2024-02-06T04:04:42Z",
      content:
        'By Mariko OiBusiness reporter\r\nThe owner of Yandex, often referred to as "Russia\'s Google", has said it will pull out of its country of origin.\r\nIts Dutch-based parent company sold the operation in R… [+2438 chars]',
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "John McCormick",
      title:
        "Nikki Haley Asks for Secret Service Protection After Increase in Threats - The Wall Street Journal",
      description:
        "Former South Carolina governor is final hurdle between Trump and the Republican presidential nomination",
      url: "https://www.wsj.com/politics/elections/nikki-haley-asks-for-secret-service-protection-after-increase-in-threats-05b67a22",
      urlToImage: "https://images.wsj.net/im-921513/social",
      publishedAt: "2024-02-06T03:35:00Z",
      content: null,
    },
    {
      source: {
        id: "the-hill",
        name: "The Hill",
      },
      author: "Miranda Nazzaro",
      title:
        "NASA announces ‘super-Earth,’ exoplanet in ‘habitable zone’ - The Hill",
      description:
        "A nearby “super-Earth” exoplanet was recently discovered just 137 light-years away from Earth, prompting scientists to dig deeper into if it has the conditions to sustain life, NASA announced. The planet, dubbed TOI-715 b, is about one and a half times as wid…",
      url: "https://thehill.com/homenews/space/4450048-nasa-announces-super-earth-exoplanet-in-habitable-zone/",
      urlToImage:
        "https://thehill.com/wp-content/uploads/sites/2/2023/06/nasa_logo_GettyImages-1258903649-e1687791364531.jpg?w=1280",
      publishedAt: "2024-02-06T03:33:00Z",
      content:
        "Skip to content\r\nA nearby “super-Earth” exoplanet was recently discovered just 137 light-years away from Earth, prompting scientists to dig deeper into if it has the conditions to sustain life, NASA … [+1343 chars]",
    },
    {
      source: {
        id: null,
        name: "NBCSports.com",
      },
      author: "Josh Alper",
      title:
        'Kyle Shanahan "not worried at all" about practicing on field at UNLV - NBC Sports',
      description:
        "The 49ers found the surface at UNLV to be softer than they like, but they will practice there this week",
      url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/kyle-shanahan-not-worried-at-all-about-practicing-on-field-at-unlv",
      urlToImage:
        "https://nbcsports.brightspotcdn.com/dims4/default/beef16e/2147483647/strip/true/crop/3500x1969+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fb6%2F6a%2Fc8bcc0cd4822bba8b38540d60d11%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1986639458",
      publishedAt: "2024-02-06T03:23:51Z",
      content:
        "The 49ers will be sticking with the original plan for their practice week. \r\nWord of the teams displeasure with the field at UNLV was reported on Monday morning and there was some question about whet… [+912 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: "Chiefs and 49ers Preview | Super Bowl LVIII Opening Night - NFL",
      description:
        "New ClipWatch live local and primetime games, NFL RedZone, and NFL Network on Plus.NFL.comCheck out our other channels:NFL Mundo https://www.youtube.com/mund...",
      url: "https://www.youtube.com/watch?v=h2lpOQgS40M",
      urlToImage: "https://i.ytimg.com/vi/h2lpOQgS40M/maxresdefault.jpg",
      publishedAt: "2024-02-06T03:22:48Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "WLWT Cincinnati",
      },
      author: "Fletcher Keel",
      title:
        "Ohio health officials warn of potential measles exposure at CVG - WLWT Cincinnati",
      description:
        "The Ohio Department of Health says passengers at Cincinnati/Northern Kentucky International Airport may have been exposed to measles last week.",
      url: "https://www.wlwt.com/article/ohio-measles-cincinnati-exposure-cvg-montgomery-county/46648780",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/cvg-travel-6585038c5cb29.png?crop=1.00xw:0.991xh;0,0&resize=1200:*",
      publishedAt: "2024-02-06T03:10:00Z",
      content:
        "HEBRON, Ky. —The Ohio Department of Health says passengers at Cincinnati/Northern Kentucky International Airport may have been exposed to measles last week.\r\nODH says passengers in Terminal A at CVG … [+1238 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Louis Casiano",
      title:
        "US forces launch strike against Houthi 'uncrewed surface vehicles' in Yemen - Fox News",
      description:
        "The U.S. launched a strike Monday against explosive uncrewed surface vehicles (USV) operated by Yemen's Iran-backed Houthi rebels, officials said.",
      url: "https://www.foxnews.com/world/us-forces-launch-strike-against-houthi-uncrewed-surface-vehicles-yemen",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2024/02/US-1.jpg",
      publishedAt: "2024-02-06T03:02:00Z",
      content:
        "Join Fox News for access to this content\r\nPlus get unlimited access to thousands of articles, videos and more with your free account!\r\nPlease enter a valid email address.\r\nBy entering your email, you… [+1427 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount(){
    console.log("hello2")
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=5deb2b3fc6bb42b6a4d5d191d458a8dd"
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div>
        <h2 className="p-4 text-center text-white font-bold">Latest News</h2>
        <div className="flex flex-wrap justify-center items-center">
          {this.state.articles.map((element) => {
            return (
              <div key={element.url} className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
                <NewsItem
                  title={element.title ? element.title.slice(0, 45): ""}
                  description={element.description ? element.description.slice(0, 80) : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
