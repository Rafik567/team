import React from 'react';

const App = () => {
  return (
    <div className="relative py-12 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Հավելված My Team</h1>
          <p className="text-base text-gray-700">
            Ներբեռնե՛ք My Team-ը iOS և Android համակարգերի համար
          </p>
          <p className="text-base text-gray-700">
            Կատարե՛ք վճարումներ, ստացեք բոնուսներ, շեյքեք և օգտվեք այլ հնարավորություններից
          </p>
          <div className="flex items-center space-x-6">
            <div>
              <img
                src="https://www.telecomarmenia.am/img/redesign/qr.svg"
                alt="qr"
                className="w-24 h-24"
              />
            </div>
            <div className="flex space-x-4">
              <a
               
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.telecomarmenia.am/img/redesign/app_store.png"
                  alt="team.mobile.application_ios.link.label"
                  className="h-12"
                />
              </a>
              <a
               
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.telecomarmenia.am/img/redesign/google_play.png"
                  alt="team.mobile.application_android.link.label"
                  className="h-12"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
        </div>
      </div>
    </div>
  );
};

export default App;
