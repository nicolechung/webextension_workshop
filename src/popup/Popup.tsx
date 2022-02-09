import browser from 'webextension-polyfill';

let currentTab: any;

browser.tabs.query({active: true, currentWindow: true}).then(tabs => currentTab = tabs[0])

export const Popup = () => {
  const handleCats = () => {
    browser.tabs.sendMessage(currentTab.id, { command: 'swap-with-cats'})
  }

  const handleDogs = () => {
    browser.tabs.sendMessage(currentTab.id, { command: 'swap-with-dogs'})
  }
  return (
    <div className="flex flex-col items-center gap-3 justify-center w-48 p-3 bg-gradient-to-r min-h-full from-emerald-500 to-emerald-400">
      <button onClick={handleCats} className="text-lg flex-none py-1 px-3 rounded-lg bg-emerald-100 text-emerald-600 mr-sm flex items-center justify-center">
        <img src="../assets/cat_512.png" alt="cat icon" className="w-8 h-8 mr-3" />
        cats
      </button>
      <button onClick={handleDogs} className="text-lg flex-none py-1 px-3 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
        <img src="../assets/dog_512.png" alt="dog icon" className="w-8 h-8 mr-3" />
        dogs
      </button>
    </div>
    )
}