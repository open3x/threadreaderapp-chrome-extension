chrome.contextMenus.create({
  id: 'ThreadReaderApp1',
  title: 'ThreadReaderApp',
  contexts: ['action']
})

function contextClick(info, tab) {
  const { menuItemId } = info
  if (menuItemId === 'ThreadReaderApp1') {
    const currentURL = new URL(tab.url);
    const splited = currentURL.pathname.split("/");
    const newURL = "https://threadreaderapp.com/thread/" + splited[splited.length - 1];
    chrome.tabs.create({ url: newURL });
  }
}

chrome.contextMenus.onClicked.addListener(contextClick)
