import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    // articles = [
    //     {
    //       "source": { "id": "cnn", "name": "CNN" },
    //       "author": "Simone McCarthy, Nectar Gan",
    //       "title": "'Total miscalculation': China goes into crisis management mode on balloon fallout - CNN",
    //       "description": "As the new year got underway in China, hopes appeared to be running high that an easing of tensions with the United States could unfold in the months ahead.",
    //       "url": "https://www.cnn.com/2023/02/06/china/china-response-suspected-spy-balloon-intl-hnk/index.html",
    //       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230207103140-02-spy-balloon-recovery.jpg?c=16x9&q=w_800,c_fill",
    //       "publishedAt": "2023-02-07T16:28:00Z",
    //       "content": "As the new year got underway in China, hopes appeared to be running high that an easing of tensions with the United States could unfold in the months ahead.\r\nChinas Foreign Ministry expressed as much… [+7624 chars]"
    //     },
    //     {
    //       "source": { "id": "reuters", "name": "Reuters" },
    //       "author": null,
    //       "title": "Turkish leader declares emergency as Turkey-Syria quake death toll passes 5200 - Reuters",
    //       "description": "Turkish President Tayyip Erdogan on Tuesday declared a <a href=\"/world/middle-east/erdogan-declares-state-emergency-turkey-quake-zone-2023-02-07/\">state of emergency</a> in 10 provinces devastated by two earthquakes that killed more than 5,200 people and left…",
    //       "url": "https://www.reuters.com/world/middle-east/turkey-quake-rescue-teams-comb-through-wreckage-iskenderun-hospital-2023-02-06/",
    //       "urlToImage": "https://www.reuters.com/resizer/gQ-c_qw_XLyzZhTzByQgZoQyJa4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PIXIKH5C3NLL5HBCMLC35DXY4U.jpg",
    //       "publishedAt": "2023-02-07T16:27:00Z",
    //       "content": "ANTAKYA, Turkey, Feb 7 (Reuters) - Turkish President Tayyip Erdogan on Tuesday declared a state of emergency in 10 provinces devastated by two earthquakes that killed more than 5,200 people and left … [+6812 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "Gizmodo.com" },
    //       "author": "George Dvorsky",
    //       "title": "SpaceX Falcon 9 Delivers 5-Ton Communications Satellite to Orbit - Gizmodo",
    //       "description": "The Elon Musk-led company continues to launch rockets at a breakneck pace, with 16 flights of Falcon 9 in the past nine weeks alone.",
    //       "url": "https://gizmodo.com/spacex-falcon-9-hispasat-amazonas-nexus-satellite-1850082457",
    //       "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/1e0c855ed8872aa4c9504a9446929c19.gif",
    //       "publishedAt": "2023-02-07T16:20:00Z",
    //       "content": "A Falcon 9 lit up the Florida skies Monday night in what is now a very familiar scene. The rocket successfully deployed Hispasats Amazonas Nexus communications satellite into a trajectory that will t… [+2784 chars]"
    //     },
    //     {
    //       "source": { "id": "usa-today", "name": "USA Today" },
    //       "author": "Orlando Mayorquin, USA TODAY",
    //       "title": "How to donate to Turkey and Syria earthquake victims: Where to help - USA TODAY",
    //       "description": "Here's how you can donate to support earthquake recovery efforts in Turkey and Syria after several disaster relief organizations have mobilized.",
    //       "url": "https://www.usatoday.com/story/news/world/2023/02/06/turkey-syria-earthquake-how-to-help-donate/11196567002/",
    //       "urlToImage": "https://www.gannett-cdn.com/presto/2023/02/06/USAT/aae1b732-9e45-4632-8281-c8c9217438ef-AFP_AFP_338M79H.jpg?auto=webp&crop=8255,4644,x0,y0&format=pjpg&width=1200",
    //       "publishedAt": "2023-02-07T16:06:01Z",
    //       "content": "The death toll climbed to more than 5,000 Tuesday after a 7.8 magnitude earthquake and a series of violent aftershocks early Monday morning destroyed thousands of buildings along the Turkish-Syrian b… [+4012 chars]"
    //     },
    //     {
    //       "source": { "id": "associated-press", "name": "Associated Press" },
    //       "author": "Bernard Condon, Jim Mustian",
    //       "title": "Amid soaring crime, Memphis cops lowered the bar for hiring - The Associated Press - en Español",
    //       "description": "MEMPHIS, Tenn. (AP) — Beyond the beating, kicking, cursing and pepper spraying, the video  of Tyre Nichols’ deadly arrest at the hands of young Memphis police officers is just as notable for what's missing — any experienced supervisors showing up to stop them.",
    //       "url": "https://apnews.com/article/law-enforcement-tyre-nichols-memphis-crime-93033874b99a4893c6c996fd56676795",
    //       "urlToImage": "https://storage.googleapis.com/afs-prod/media/b006ac80d62245808f57c1f746bab676/3000.jpeg",
    //       "publishedAt": "2023-02-07T15:31:27Z",
    //       "content": "MEMPHIS, Tenn. (AP) Beyond the beating, kicking, cursing and pepper spraying, the video of Tyre Nichols deadly arrest at the hands of young Memphis police officers is just as notable for whats missin… [+8032 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "KSL.com" },
    //       "author": "Marcia Dunn, Associated Press",
    //       "title": "Jupiter's moon count jumps to 92, most in solar system - KSL.com",
    //       "description": "Astronomers have discovered 12 new moons around Jupiter, putting the total count at a record-breaking 92. That's more than any other planet in our solar system.",
    //       "url": "https://www.ksl.com/article/50571757/jupiters-moon-count-jumps-to-92-most-in-solar-system",
    //       "urlToImage": "https://img.ksl.com/slc/2914/291423/29142301.jpg?filter=kslv2/responsive_story_lg",
    //       "publishedAt": "2023-02-07T15:26:40Z",
    //       "content": "Estimated read time: 2-3 minutes\r\nCAPE CANAVERAL, Fla. Astronomers have discovered 12 new moons around Jupiter, putting the total count at a record-breaking 92.\r\nThat's more than any other planet in … [+1700 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "YouTube" },
    //       "author": null,
    //       "title": "LeBron James' Journey from No. 10 to No. 2 on the All-Time Scoring List - NBA",
    //       "description": "Check out LeBron James’ journey from No. 10 to No. 2 on the NBA’s All-Time Scoring List!Never miss a moment with the latest news, trending stories and highli...",
    //       "url": "https://www.youtube.com/watch?v=SvpDNXBvZKg",
    //       "urlToImage": "https://i.ytimg.com/vi/SvpDNXBvZKg/maxresdefault.jpg",
    //       "publishedAt": "2023-02-07T15:16:05Z",
    //       "content": null
    //     },
    //     {
    //       "source": { "id": null, "name": "Page Six" },
    //       "author": "Riley Cardoza",
    //       "title": "Maria Menounos, Keven Undergaro expecting baby after 'decade of trying' - Page Six",
    //       "description": "“We are so grateful to the beautiful family helping us conceive our baby,” the journalist gushed, adding that she is “beyond excited for this soul.”",
    //       "url": "https://pagesix.com/2023/02/07/maria-menounos-keven-undergaro-expecting-baby/",
    //       "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2023/02/maria-menounos-keven-undergaro-75.jpg?quality=75&strip=all&w=1200",
    //       "publishedAt": "2023-02-07T15:14:00Z",
    //       "content": "Maria Menounos is going to be a mom!\r\nAfter a “decade of trying” to start a family with her husband, Keven Undergaro, the journalist announced Tuesday that she is expecting her first child.\r\n“We are … [+1874 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "Yahoo Entertainment" },
    //       "author": "Ines Ferré",
    //       "title": "Bed Bath & Beyond stock sinks 45% on plans to raise $1B - Yahoo Finance",
    //       "description": "Bed Bath & Beyond's (BBBY) stock is trading 45% lower on Tuesday morning. The embattled retailer announced it will raise as much as $1.025 billion through an...",
    //       "url": "https://finance.yahoo.com/news/bed-bath--beyond-stock-sinks-45-on-plans-to-raise-1b-145146919.html",
    //       "urlToImage": "https://s.yimg.com/ny/api/res/1.2/EJZkGFSSt7DVr4rct4LCTA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-08/d6842820-1e22-11ed-b3ee-729a2ad01c5e",
    //       "publishedAt": "2023-02-07T15:11:05Z",
    //       "content": "Bed Bath &amp; Beyond's (BBBY) stock sank as much as 45% on Tuesday morning and was halted for volatility a day after the embattled retailer announced plans to raise as much as $1.025 billion through… [+1905 chars]"
    //     },
    //     {
    //       "source": { "id": "reuters", "name": "Reuters" },
    //       "author": null,
    //       "title": "UK's Sunak shuffles cabinet to bolster pledges on economy - Reuters UK",
    //       "description": "British Prime Minister Rishi Sunak reshuffled his cabinet on Tuesday, breaking up two departments to better suit his pledges to spur the economy, reduce energy prices and turn around his party's fortunes before an election expected next year.",
    //       "url": "https://www.reuters.com/world/uk/uk-pm-sunak-expected-launch-reshuffle-better-suit-his-priorities-2023-02-07/",
    //       "urlToImage": "https://www.reuters.com/resizer/pbhiR-tfSre9xvUzEoSS0ak3ZfE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/H7B5BL3BWFORJC5PEGSEBFHLHU.jpg",
    //       "publishedAt": "2023-02-07T15:05:00Z",
    //       "content": "LONDON, Feb 7 (Reuters) - British Prime Minister Rishi Sunak reshuffled his cabinet on Tuesday, breaking up two departments to better suit his pledges to spur the economy, reduce energy prices and tu… [+4843 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "CNET" },
    //       "author": "Stephen Shankland, Oscar Gonzalez",
    //       "title": "Google Unveils Bard, Its ChatGPT Rival for AI-Powered Conversation - CNET",
    //       "description": "With a Microsoft event expected to center on ChatGPT expected today, the AI chatbot war is heating up.",
    //       "url": "https://www.cnet.com/tech/computing/google-unveils-bard-its-chatgpt-rival-for-ai-powered-conversation/",
    //       "urlToImage": "https://www.cnet.com/a/img/resize/a0a8caca9b0abae681e5e9c5ab62da450b8e1f37/hub/2019/03/21/575b30e7-e727-4026-a352-c7cd21c4ced2/gdc-2019-google-cloud-gaming-video-games-0065.jpg?auto=webp&fit=crop&height=630&width=1200",
    //       "publishedAt": "2023-02-07T14:48:00Z",
    //       "content": "Google on Monday released its own chatbot similar to ChatGPT, called Bard, as the battle to use artificial intelligence heats up. \r\n\"Bard seeks to combine the breadth of the world's knowledge with th… [+5291 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "PhoneArena" },
    //       "author": "Iskra Petrova",
    //       "title": "OnePlus 11 Global Release Live Coverage: real-time updates and latest news - PhoneArena",
    //       "description": "Join us as we cover live the global announcement of the OnePlus 11. We'll be discussing what to expect and commenting live on the announcement the company makes today.",
    //       "url": "https://www.phonearena.com/news/oneplus-11-global-release-live-coverage_id145421",
    //       "urlToImage": "https://m-cdn.phonearena.com/images/article/145421-wide-two_1200/OnePlus-11-global-release-live-coverage-real-time-updates-and-latest-news.jpg",
    //       "publishedAt": "2023-02-07T14:36:47Z",
    //       "content": "We're now hyped as the official unveiling of the OnePlus 11 approaches. Will OnePlus be able to challenge the newly-released Galaxy S23 series, will it be able to reclaim its title of \"Flagship kille… [+554 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "BBC News" },
    //       "author": "https://www.facebook.com/bbcnews",
    //       "title": "Six-year-old who shot his teacher allegedly assaulted another - BBC",
    //       "description": "Allegations of previous violent incidents are detailed in a legal notice filed by the injured teacher.",
    //       "url": "https://www.bbc.com/news/world-us-canada-64540531",
    //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/157A5/production/_128537978_richneck.jpg",
    //       "publishedAt": "2023-02-07T14:23:46Z",
    //       "content": "A six-year-old child who shot a teacher at a Virginia school allegedly once choked another teacher \"until she couldn't breathe\", according to a legal notice filed by the injured teacher.\r\nThe child's… [+2173 chars]"
    //     },
    //     {
    //       "source": { "id": "cnn", "name": "CNN" },
    //       "author": "Lisa Respers France",
    //       "title": "Ashton Kutcher and Reese Witherspoon get called out by Mila Kunis after 'awkward' red carpet photos - CNN",
    //       "description": "Ashton Kutcher and Reese Witherspoon costar in a new romantic comedy, but their chemistry was not as evident in real life.",
    //       "url": "https://www.cnn.com/2023/02/07/entertainment/ashton-kutcher-reese-witherspoon/index.html",
    //       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230207135932-ashton-kutcher-reese-witherspoon-020223.jpg?c=16x9&q=w_800,c_fill",
    //       "publishedAt": "2023-02-07T14:19:00Z",
    //       "content": "Ashton Kutcher and Reese Witherspoon costar in a new romantic comedy, but their chemistry was not as evident in real life.\r\nThats according to Witherspoon, who says Kutchers wife, fellow star Mila Ku… [+764 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "CBS Sports" },
    //       "author": "",
    //       "title": "2023 Super Bowl pick: Chiefs win thriller over Eagles to pick up second Lombardi Trophy in four seasons - CBS Sports",
    //       "description": "Wondering who will take home the Lombardi Trophy? You've come to the right place to find out",
    //       "url": "https://www.cbssports.com/nfl/news/2023-super-bowl-pick-chiefs-win-thriller-over-eagles-to-pick-up-second-lombardi-trophy-in-four-seasons/",
    //       "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/02/07/6810659e-0887-4e5d-92a0-a9ec307cf0ad/thumbnail/1200x675/7746cc8fe6b9e6bd85ed00e1d69cb1fb/mahomessweat2.jpg",
    //       "publishedAt": "2023-02-07T14:17:00Z",
    //       "content": "PHOENIX -- After nine straight days of thinking about it, I'd like everyone to know that I am finally ready to make my Super Bowl pick. \r\nIt hasn't been easy trying to decide who's going to win. For … [+8623 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "YouTube" },
    //       "author": null,
    //       "title": "This RTX 4090 Gaming Laptop is INSANELY Fast - Hardware Canucks",
    //       "description": "This is and will probably always be the fastest gaming laptop of 2023.  The RTX 4090 Laptop GPU benchmarks are close to desktop class numbers and the i9-1398...",
    //       "url": "https://www.youtube.com/watch?v=733SIf02QlM",
    //       "urlToImage": "https://i.ytimg.com/vi/733SIf02QlM/maxresdefault.jpg",
    //       "publishedAt": "2023-02-07T14:03:17Z",
    //       "content": null
    //     },
    //     {
    //       "source": { "id": null, "name": "CNBC" },
    //       "author": "Christina Wilkie, Emma Kinery",
    //       "title": "State of the Union live updates: Biden faces stubbornly high inflation and divided Congress in annual address - CNBC",
    //       "description": "U.S. job growth, the war in Ukraine, domestic manufacturing, the ongoing pandemic and America's strategic competition with China will dominate tonight's speech.",
    //       "url": "https://www.cnbc.com/2023/02/07/state-of-the-union-live-updates-biden-faces-stubbornly-high-inflation-and-divided-congress-in-annual-address.html",
    //       "urlToImage": "https://image.cnbcfm.com/api/v1/image/107023447-16461905362022-03-02t030816z_693074564_rc22us9crdzs_rtrmadp_0_usa-biden.jpeg?v=1675775104&w=1920&h=1080",
    //       "publishedAt": "2023-02-07T14:03:00Z",
    //       "content": "U.S. President Joe Biden will face a divided Congress and stubbornly high inflation when he delivers the annual State of the Union address later Tuesday night.\r\nU.S. job growth, the war in Ukraine, t… [+2533 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "Patriots.com" },
    //       "author": "Mike Dussault",
    //       "title": "Bill Belichick appears on Tom Brady's \"Let's Go\" SiriusXM podcast - Patriots.com",
    //       "description": "The Patriots head coach was part of a special group of guests joining Tom Brady's first \"Let's Go\" podcast since announcing his retirement.",
    //       "url": "https://www.patriots.com/news/bill-belichick-appears-on-tom-brady-s-let-s-go-siriusxm-podcast",
    //       "urlToImage": "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/patriots/hvh264hnbjo27arzfgmw",
    //       "publishedAt": "2023-02-07T14:01:33Z",
    //       "content": "Brady's parents, as well as former teammate Rob Gronkowski and former rivals Peyton Manning and Patrick Mahomes were among the other guests to join the program, but Belichick's appearance took top bi… [+1460 chars]"
    //     },
    //     {
    //       "source": { "id": "the-washington-post", "name": "The Washington Post" },
    //       "author": "Lori Aratani, Ian Duncan, Michael Laris",
    //       "title": "As Southwest, FAA probes begin, fallout could shape flying for years - The Washington Post",
    //       "description": "The two incidents have triggered multiple federal investigations while revealing the fragile underpinnings of the domestic air travel system.",
    //       "url": "https://www.washingtonpost.com/transportation/2023/02/07/faa-southwest-airlines-travel-investigations/",
    //       "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JIEO4HVBCBCICWW36UWXIQZWIM.jpg&w=1440",
    //       "publishedAt": "2023-02-07T14:00:00Z",
    //       "content": "Comment on this story\r\nAs technicians scrambled throughout the night last month to reboot a malfunctioning pilot notification system, airline officials crowded onto a makeshift Federal Aviation Admin… [+16292 chars]"
    //     },
    //     {
    //       "source": { "id": "the-washington-post", "name": "The Washington Post" },
    //       "author": "Linda Searing",
    //       "title": "Nearly 1 in 5 Americans use medication to sleep - The Washington Post",
    //       "description": "More women than men take sleep medication, and usage overall increases with age, a CDC report says.",
    //       "url": "https://www.washingtonpost.com/wellness/2023/02/07/more-women-use-sleep-medication/",
    //       "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PU3FUNXRBRBIHIMQD2FJI2AU6Y.jpg&w=1440",
    //       "publishedAt": "2023-02-07T13:30:00Z",
    //       "content": "Comment on this story\r\nIn search of a good nights sleep, 18 percent of U.S. adults use some type of medication to help them snooze, according to a report from the National Center for Health Statistic… [+1711 chars]"
    //     }
    //   ]

    // This is used to first store the data in variable and than use that data
    
    // constructor(){
    //     super();
    //     console.log("Hello i am a constructor");
    //     this.state = {
    //         articles: this.articles
    //     }
    // }

    constructor(){
// This will run before componentDidMount and after render
        super();
        console.log("Hello i am a constructor");
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    // By using this we can fetch data from the live server through newsApi

    async componentDidMount(){
// This will run after constructor
        // console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ee414d92f6524c75996af15bdab6eb84&pageSize=20"
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles}) 
    }
    
    handlePrevClick = async ()=>{
        console.log("Previous");

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ee414d92f6524c75996af15bdab6eb84&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        
        this.setState({
            page: this.setState.page - 1,
            articles: parsedData.articles,
        })


    }

    handleNextClick = async ()=>{
        console.log("Next");

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ee414d92f6524c75996af15bdab6eb84&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        this.setState({
            page: this.setState.page + 1,
            articles: parsedData.articles
        })
    }


  render() {
    return (
      <div className = "container my-3">
        <h2 className='text-center'>NewsPort - Top Headlines</h2>
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}> 
                {/* We have to give key as we return a div and choose the value of key which is unique in all the elements */}
                <NewsItems  title = {element.title?element.title:" "} description = {element.description?element.description:" "} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
            </div>
            })}
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
          
        </div>
      </div>
    )
  }
}

export default News
