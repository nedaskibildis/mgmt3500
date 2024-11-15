import { useState } from 'react';
import './App.css';

function App() {
  const [selectedItem, setSelectedItem] = useState('Getting Started');

  const menuItems = [
    { 
      name: 'Getting Started',
      description: 'Below are a few links that may help women entrepreneurs that want to start a business but do not know where to start, or are looking for a guide or any tips for the early stage of their business. These resources address the problems of developing business ideas.', 
      links: [
        { url: 'https://sbs-spe.feddevontario.canada.ca/en/women-business-guide', description: 'Women In Business Guide' },
        { url: 'https://www.score.org/workshops-events/online-courses', description: 'Starting A Business' },
        { url: 'https://themarketingmoms.com/survive-mom-running-business/', description: 'Starting Your Business Online Courses' },
        { url: 'https://www.canada.ca/en/services/business/start.html', description: 'How To Survive Being A Mom and Running A Business' }
      ]
    },
    { 
      name: 'Financing Business', 
      description: 'Financing your business and understanding how to do it and where to get the money from is a very difficult task for women, especially with the gender barriers that we identified in our project. Below are some resources that can help women with business credit cards, along with business grants and loans that are tailored specifically for women, solving the problem of having difficulties securing finances.',
      links: [
        { url: 'https://www.ratehub.ca/credit-cards/business', description: 'The Best Business Credit Cards' },
        { url: 'https://sbs-spe.feddevontario.canada.ca/en/financing-business-guide', description: 'Financing Your Business Guide' },
        { url: 'https://www.visa.ca/en_CA/run-your-business/women-small-business.html', description: "She's next grant program" },
        { url: 'https://weoc.ca/loan-program/?gad_source=1&gclid=CjwKCAiA3Na5BhAZEiwAzrfagM_svjvEhg_txMlNlPENv9kFDKo5Bdg00m9VVSqDvUb844PWlVxsaBoC-cYQAvD_BwE', description: 'Womens Entreprise Organizations Of Canada National Loan Program' },
        { url: 'https://www.investopedia.com/terms/d/debt.asp', description: 'Understanding Business Debt' },
        { url: 'https://ised-isde.canada.ca/site/women-entrepreneurship-strategy/en/women-entrepreneurship-loan-fund', description: 'Women Entrepreneurship Loan Fund' },
        { url: 'https://www.zensurance.com/blog/15-business-grants-and-loans-for-women-in-canada', description: '15 Business Grants and loans for women in canada' }
      ]
    },
    { 
      name: 'Worklife Balance',
      description: 'When Speaking with Beck, she mentioned how it was difficult for her to maintain a worklife balance as she was constantly thinking about her work all the time. Here you can find a few resources that can help you manage your work life balance and make it a little less stressful for you.', 
      links: [
        { url: 'https://www.thehartford.com/business-insurance/strategy/infographics/work-life-balance', description: '7 Work life balance Tips' },
        { url: 'https://www.michellepontvert.com/blog/work-life-balance-tips', description: 'Small Business Owners Guide To Work Life Balance' },
        { url: 'https://www.theupsstore.ca/achieving-work-life-balance-as-a-small-business-owner/', description: 'Achieving Work Life Balance as a small business owner' }
      ]
    },
    { 
      name: 'Childcare and Business', 
      description: 'As mentioned in our report, Beck mentions how women are often the primary caretakers of their home, and this can severly hinder your ability to work on your business. We have attached a few links here that may help women entrepreneurs that are also mothers balance their business a bit better.',
      links: [
        { url: 'https://live.webcastcanada.ca/webcast/login/653cc229-cbad-4380-a26b-f31a78c3f1cf', description: 'Scotiabank Women Initiative' },
        { url: 'https://www.fcc-fac.ca/en/knowledge/tips-balancing-new-baby-business', description: '6 Tips for balancing a new baby with a business' },
        { url: 'https://www.forbes.com/sites/jodiecook/2022/09/26/the-secret-to-running-a-successful-business-while-raising-a-family/', description: 'Forbes: The Secret to running a successful business while raising a family' },
        { url: 'https://lightpassingthrough.com/what-i-wish-i-had-known-about-balancing-business-and-baby/', description: 'What I had wish I had known about balancing a business and a baby' }
      ]
    },
    { 
      name: 'Community Links',
      description: 'Lack of community was another problem that we identified, as Beck mentioned how she wishes there were more places for her to interact with other women that may be in similar situations to her to chat with and create connections. Below are a few different online community groups that women can use to connect with other women entrepreneurs.', 
      links: [
        { url: 'https://thehiveindex.com/topics/female-founders/platform/discord/', description: '2 Best discord servers for female founders' },
        { url: 'https://www.facebook.com/groups/womenbizowners/', description: 'Women Helping Women Entrepreneurs Facebook Group' },
        { url: 'https://www.facebook.com/groups/577346489703716', description: 'Successful Women Entrepreneurs Facebook Group' },
        { url: 'https://www.theforum.ca/', description: 'The Forum: A Canadian Charity that has supported over 15,000' }
      ]
    },
    { 
      name: 'Research and Study', 
      description: 'Quiet Zones for work life balance was another solution that we thought to be helpful for women entrepreneurs, especially those that may live in a more loud environment at home with little ones. 10C is a great spot for this, with their variety of study spaces available through Hot Desking, while also being surrounded by other motivated individuals. The University Of Guelph Daycare facilities is also mentioned here, as it is a great way to have someone take care of your child while you get some work done somewhere peaceful and quiet on campus, such as the library or arboretum.',
      links: [
        { url: 'https://10carden.ca/', description: '10C Guelph, A Community Shared Space' },
        { url: 'https://www.google.com/search?q=daycare+facilities+near+me&oq=daycare+facil&gs_lcrp=EgZjaHJvbWUqBwgCEAAYgAQyBwgAEAAYgAQyBwgBEAAYgAQyBwgCEAAYgAQyBggDEEUYOTIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDU1NzBqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8', description: 'University Of Guelph Daycare, Childcare Services With A Plethora Of Quiet Areas To Get Your Work Done' }
      ]
    },
    { 
      name: 'Mentorship', 
      description: 'Lack of women mentorship programs was another problem that we thought needed a solution based off of our interview and research, and so below you can find a few links that address this problem, by providing 2 online mentorship programs tailored specifically for women.',
      links: [
        { url: 'https://we-bc.ca/what-we-offer/mentoring/', description: 'Business Mentoring And Peer Groups For Women Entrepreneurs' },
        { url: 'https://www.theforum.ca/mentor-program', description: 'The Forum Mentor Program For Women Entrepreneurs' }
      ]
    },
    { 
      name: 'Other', 
      description: 'Stress, Gender Bias, and other business challenges are a few other problems that we found important through our research and interview process. While we may not have a specific page tailored to this, we found it important to provide some resources for these topics as well.',
      links: [
        { url: 'https://www.waveapps.com/blog/managing-stress-as-a-business-owner', description: '14 Tips To Manage Stress As A Business Owner' },
        { url: 'https://www.bdc.ca/en/articles-tools/entrepreneurial-skills/be-effective-leader/stress-management-tips-entrepreneurs', description: 'Stress Management Tips For Entrepreneurs' },
        { url: 'https://www.guidantfinancial.com/blog/7-common-small-business-problems-and-their-solutions/?nab=1', description: '7 Common Small Business Problems and Their Solutions' },
        { url: 'https://www.boopos.com/all-post/challenges-women-entrepreneur', description: '5 Challenges Women Entrepreneurs Face and What To Do About Them' }

      ]
    }
  ];

  // Find the currently selected menu item
  const selectedMenuItem = menuItems.find((item) => item.name === selectedItem);

  return (
    <div className="App flex flex-col justify-start h-screen">
      <h1 className='text-left mb-12 font-bold opacity-85 text-3xl'>MGMT3500 Group 4 Toolkit</h1>
      {/* Horizontal, clickable list */}
      <ul className="list-none flex space-x-4">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`cursor-pointer ${selectedItem === item.name ? 'text-blue-500' : 'text-gray-700'}`}
            onClick={() => setSelectedItem(item.name)}
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* Display selected content */}
      <div className="mt-14 text-left">
        <h2 className="text-3xl font-semibold mb-3">{selectedMenuItem.name}</h2>
        <h2 className='text-md text-gray-400 font-medium mb-3'>{selectedMenuItem.description}</h2>
        <ul className="mt-2 space-y-2">
          {selectedMenuItem.links.map((link, index) => (
            <li key={index} className="mt-4">
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                {link.description}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
